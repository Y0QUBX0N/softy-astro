import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Softy LLC — Hero shader background.
 * Generative wave-mesh in the brand palette: warm ink (#0E1014) at the
 * troughs, accent teal (#00D9A3) at the crests, hint of brand blue
 * (#2456E0) in the rim. Reacts subtly to the cursor and slowly drifts
 * on its own. Built with vanilla three.js so the whole scene is a
 * single ~6 KB shader + a few setup lines — no extra deps beyond three.
 */
export default function HeroShader() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 80);
    camera.position.set(0, 1.05, 4.6);
    camera.lookAt(0, 0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    host.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uCursor: { value: new THREE.Vector2(0, 0) },
      uAccent: { value: new THREE.Color(0x00d9a3) },
      uBlue: { value: new THREE.Color(0x2456e0) },
      uInk: { value: new THREE.Color(0x0e1014) },
    };

    // Plane that fills the camera frustum; we tilt it back so it reads
    // like a slowly breathing terrain rather than a flat field.
    const geometry = new THREE.PlaneGeometry(14, 9, 180, 110);
    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      vertexShader: VERT,
      fragmentShader: FRAG,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.42;
    mesh.position.y = -1.2;
    scene.add(mesh);

    let width = 0;
    let height = 0;
    const resize = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();

    // Cursor parallax — eased toward (0,0) at rest so the scene is calm
    // when the visitor isn't engaged with it.
    const target = new THREE.Vector2(0, 0);
    const ease = 0.06;
    const onPointer = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      target.set(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        ((e.clientY - rect.top) / rect.height) * 2 - 1,
      );
    };
    if (!isCoarse) window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", resize);

    // Pause when off-screen to keep the page light.
    let running = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !raf) loop(performance.now());
      },
      { threshold: 0 },
    );
    io.observe(host);

    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      raf = 0;
      if (!running) return;
      const dt = Math.min(now - last, 80);
      last = now;
      // Even with motion preferences, we still tilt to follow the cursor
      // but stop the wave time so the surface goes still.
      uniforms.uTime.value += reduce ? 0 : dt * 0.00035;
      uniforms.uCursor.value.x += (target.x - uniforms.uCursor.value.x) * ease;
      uniforms.uCursor.value.y += (target.y - uniforms.uCursor.value.y) * ease;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

/* ─────────────────────── shaders ─────────────────────── */

const VERT = /* glsl */ `
  precision highp float;
  varying vec3 vWorld;
  varying float vHeight;
  uniform float uTime;
  uniform vec2 uCursor;

  // Hash + simplex-style 3D noise (compact, gradient-based).
  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 perm(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
  float noise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g, l.zxy);
    vec3 i2 = max(g, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - 0.5;
    i = mod289(i);
    vec4 p = perm(perm(perm(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    vec4 j = p - 49.0 * floor(p * (1.0/49.0));
    vec4 x_ = floor(j * (1.0/7.0));
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 a = x_ * (1.0/7.0) + 1.0/14.0 - 0.5;
    vec4 b = y_ * (1.0/7.0) + 1.0/14.0 - 0.5;
    vec4 h = 1.0 - abs(a) - abs(b);
    vec3 p0 = vec3(a.x, b.x, h.x);
    vec3 p1 = vec3(a.y, b.y, h.y);
    vec3 p2 = vec3(a.z, b.z, h.z);
    vec3 p3 = vec3(a.w, b.w, h.w);
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m * m;
    return 32.0 * dot(m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main(){
    vec3 pos = position;
    // Two octaves at different scales + cursor warp — gives gentle
    // mountain ridges that feel like an animated topographic map.
    vec2 warp = uCursor * 0.4;
    float n1 = noise(vec3(pos.xy * 0.36 + warp, uTime * 0.6));
    float n2 = noise(vec3(pos.xy * 0.94 - warp * 0.5, uTime * 0.42 + 5.0));
    float h = n1 * 0.55 + n2 * 0.28;
    pos.z += h * 0.9;
    vHeight = h;
    vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec3 vWorld;
  varying float vHeight;
  uniform vec3 uAccent;
  uniform vec3 uBlue;
  uniform vec3 uInk;

  void main(){
    // Map elevation onto a brand palette: ink at the bottom, accent
    // teal at the crests, hint of brand blue in mid-band.
    float h = clamp(vHeight * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uInk, uBlue, smoothstep(0.05, 0.55, h));
    col = mix(col, uAccent, smoothstep(0.55, 0.95, h));
    col += uAccent * pow(h, 4.0) * 0.55; // soft highlight on peaks

    // Distance falloff so the far edges fade into the page background.
    float fall = smoothstep(7.5, 2.0, length(vWorld.xz));
    // Subtle scanline texture for a quiet sense of structure.
    float lines = sin(vWorld.x * 7.0 + vWorld.z * 3.0) * 0.5 + 0.5;
    col += vec3(0.0, 0.04, 0.03) * lines * h;

    gl_FragColor = vec4(col, fall * 0.85);
  }
`;
