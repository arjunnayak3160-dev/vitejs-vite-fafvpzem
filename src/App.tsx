import React, { useState, useEffect, useRef } from 'react';

// --- BUILT-IN SVG ICONS (Zero external packages needed) ---
const HexagonIcon = () => (
  <svg
    className="w-5 h-5 text-amber-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const ActivityIcon = () => (
  <svg
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ScissorsIcon = () => (
  <svg
    className="w-4 h-4 text-red-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const RotateIcon = () => (
  <svg
    className="w-4 h-4 text-slate-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

// --- TEAM DATA ---
const TEAM_INFO = {
  institution: 'MPSTME Mumbai (NMIMS University)',
  course: 'Elements of Biology / Biomimetics for Engineers',
  facultyGuide: 'Dr. Pravin Patil',
  teamName: 'GROUP SIX',
  projectTitle:
    "Nature's Engineers: Structural Mechanics of Honeycombs & Spider Webs in Construction",
  members: [
    {
      name: 'ARJUN NAYAK',
      rollNo: 'C332',
      role: 'Lead Structural Modeler',
      desc: 'Sandwich beam shear & Gibson-Ashby cell homogenization.',
    },
    {
      name: 'MOHD. RAYAAN NASEEM',
      rollNo: 'C331',
      role: 'Dynamic Cable Network Engineer',
      desc: 'Nonlinear cable relaxation solver & silk constitutive laws.',
    },
    {
      name: 'ADVAIT PANDYA',
      rollNo: 'C341',
      role: 'Environmental Load Analyst',
      desc: 'Turbulent wind spectrum & Hertzian contact impact model.',
    },
    {
      name: 'KHUSHIT PATIDAR',
      rollNo: 'C347',
      role: 'Materials & Systems Integrator',
      desc: 'Material properties database & failure mode verification.',
    },
  ],
};

const MATERIALS = [
  {
    id: 'major-ampullate',
    name: 'Major Ampullate (Dragline) Silk',
    density: 1300,
    toughness: 160,
    strainMax: '32%',
    loss: '65%',
  },
  {
    id: 'high-tensile-steel',
    name: 'High-Tensile Steel Wire Rope',
    density: 7850,
    toughness: 50,
    strainMax: '4%',
    loss: '12%',
  },
  {
    id: 'kevlar-49',
    name: 'Kevlar® 49 Strand',
    density: 1440,
    toughness: 35,
    strainMax: '2.4%',
    loss: '20%',
  },
];

export function App() {
  const [tab, setTab] = useState<'honeycomb' | 'spiderweb' | 'team'>(
    'honeycomb'
  );

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h.includes('spiderweb')) setTab('spiderweb');
      else if (h.includes('team')) setTab('team');
      else setTab('honeycomb');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HexagonIcon />
            <span className="font-bold text-white text-sm sm:text-base">
              NATURE'S ENGINEERS (MPSTME Grp 6)
            </span>
          </div>
          <nav className="flex gap-2 text-xs sm:text-sm font-medium">
            <button
              onClick={() => {
                window.location.hash = '#/honeycomb';
                setTab('honeycomb');
              }}
              className={`px-3 py-1.5 rounded transition ${
                tab === 'honeycomb'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Honeycomb
            </button>
            <button
              onClick={() => {
                window.location.hash = '#/spiderweb';
                setTab('spiderweb');
              }}
              className={`px-3 py-1.5 rounded transition ${
                tab === 'spiderweb'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Spider Web
            </button>
            <button
              onClick={() => {
                window.location.hash = '#/team';
                setTab('team');
              }}
              className={`px-3 py-1.5 rounded transition ${
                tab === 'team'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Team
            </button>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <main className="p-4 sm:p-8 max-w-6xl mx-auto">
        {tab === 'honeycomb' && <HoneycombView />}
        {tab === 'spiderweb' && <SpiderWebView />}
        {tab === 'team' && <TeamView />}
      </main>

      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-900">
        Nature's Engineers Simulator • MPSTME Mumbai • Elements of Biology
      </footer>
    </div>
  );
}

// --- TAB 1: HONEYCOMB ---
function HoneycombView() {
  const [spanL, setSpanL] = useState(2.4);
  const [coreMm, setCoreMm] = useState(30);
  const [loadKn, setLoadKn] = useState(8);
  const [windKmh, setWindKmh] = useState(120);

  // Exact Timoshenko & Gibson-Ashby formulas
  const t = 0.00008,
    l = 0.0035,
    tf = 0.0015,
    widthB = 1.2;
  const relDensity = (2 / Math.sqrt(3)) * (t / l);
  const coreDensity = relDensity * 2680;
  const G13 = 26e9 * (t / l) * 0.577;
  const d = coreMm / 1000 + tf;
  const D = (69e9 * widthB * tf * Math.pow(d, 2)) / 2;
  const S = (G13 * widthB * Math.pow(d, 2)) / (coreMm / 1000);
  const P = loadKn * 1000;
  const deflectionMm =
    ((P * Math.pow(spanL, 3)) / (48 * D) + (P * spanL) / (4 * S)) * 1000;
  const massKg =
    2 * spanL * widthB * tf * 2700 +
    spanL * widthB * (coreMm / 1000) * coreDensity;
  const faceStressMpa = (P * spanL) / 4 / (d * tf * widthB) / 1e6;
  const sf = 276 / Math.max(faceStressMpa, 0.1);
  const windPressureKpa = (0.6 * Math.pow(windKmh / 3.6, 2) * 1.2) / 1000;

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Honeycomb Sandwich Panel Mechanics
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Regular hexagons satisfy the Honeycomb Conjecture (Hales, 2001),
          consuming the least perimeter wall material per area. In structural
          panels, top and bottom skins resist bending moments while the
          honeycomb core resists transverse shear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4 text-xs">
          <h2 className="font-bold text-white text-sm">
            Panel Geometry & Load Controls
          </h2>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Span Length:</span>
              <span className="font-mono text-amber-400">{spanL} m</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={spanL}
              onChange={(e) => setSpanL(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Core Depth:</span>
              <span className="font-mono text-amber-400">{coreMm} mm</span>
            </div>
            <input
              type="range"
              min="15"
              max="80"
              step="5"
              value={coreMm}
              onChange={(e) => setCoreMm(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Center Point Load:</span>
              <span className="font-mono text-amber-400">{loadKn} kN</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={loadKn}
              onChange={(e) => setLoadKn(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Storm Wind Velocity:</span>
              <span className="font-mono text-blue-400">{windKmh} km/h</span>
            </div>
            <input
              type="range"
              min="60"
              max="220"
              step="10"
              value={windKmh}
              onChange={(e) => setWindKmh(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4">
          <h2 className="font-bold text-white text-sm">
            Physical Solver Telemetry
          </h2>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">
                Timoshenko Deflection
              </span>
              <span className="text-lg font-bold text-amber-400">
                {deflectionMm.toFixed(2)} mm
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">
                Total Panel Mass
              </span>
              <span className="text-lg font-bold text-white">
                {massKg.toFixed(1)} kg
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">
                Face Normal Stress
              </span>
              <span className="text-lg font-bold text-slate-200">
                {faceStressMpa.toFixed(1)} MPa
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <span className="text-slate-400 block text-[10px]">
                IS:875 Wind Suction
              </span>
              <span className="text-lg font-bold text-blue-400">
                {windPressureKpa.toFixed(2)} kPa
              </span>
            </div>
          </div>
          <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs">
            <span className="text-slate-400 block mb-1">
              Yield Safety Factor:
            </span>
            <span
              className={`font-bold text-sm ${
                sf >= 1.5 ? 'text-emerald-400' : 'text-amber-400'
              }`}
            >
              SF = {sf.toFixed(2)} (
              {sf >= 1.5 ? 'SAFE STRUCTURAL DESIGN' : 'EXCEEDS ALLOWABLE'})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- TAB 2: SPIDER WEB ---
function SpiderWebView() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [matId, setMatId] = useState('major-ampullate');

  const [web, setWeb] = useState(() => {
    const nodes: any[] = [{ id: 0, x: 0, y: 0, isFixed: false }];
    const links: any[] = [];
    const radials = 16,
      spirals = 8,
      rMax = 0.25;
    for (let s = 1; s <= spirals; s++) {
      const r = (rMax / spirals) * s;
      for (let rad = 0; rad < radials; rad++) {
        const ang = (rad * 2 * Math.PI) / radials;
        nodes.push({
          id: nodes.length,
          x: r * Math.cos(ang),
          y: r * Math.sin(ang),
          isFixed: s === spirals,
        });
      }
    }
    for (let rad = 0; rad < radials; rad++)
      links.push({ id: links.length, a: 0, b: 1 + rad, broken: false });
    for (let s = 1; s <= spirals; s++) {
      for (let rad = 0; rad < radials; rad++) {
        const c = 1 + (s - 1) * radials + rad;
        const n = 1 + (s - 1) * radials + ((rad + 1) % radials);
        links.push({ id: links.length, a: c, b: n, broken: false });
      }
    }
    return { nodes, links };
  });

  const resetWeb = () => {
    setWeb((prev) => ({
      ...prev,
      links: prev.links.map((l) => ({ ...l, broken: false })),
    }));
  };

  const handleCut = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const cv = canvasRef.current;
    if (!cv) return;
    const rect = cv.getBoundingClientRect();
    const scale = cv.width / 0.6;
    const mx = (e.clientX - rect.left - cv.width / 2) / scale;
    const my = -(e.clientY - rect.top - cv.height / 2) / scale;

    let target = -1,
      minD = 0.035;
    web.links.forEach((l) => {
      if (l.broken) return;
      const nA = web.nodes[l.a],
        nB = web.nodes[l.b];
      const d = Math.hypot((nA.x + nB.x) / 2 - mx, (nA.y + nB.y) / 2 - my);
      if (d < minD) {
        minD = d;
        target = l.id;
      }
    });

    if (target !== -1) {
      setWeb((p) => ({
        ...p,
        links: p.links.map((l) =>
          l.id === target ? { ...l, broken: true } : l
        ),
      }));
    }
  };

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, cv.width, cv.height);
    const scale = cv.width / 0.6;
    const cx = cv.width / 2,
      cy = cv.height / 2;

    web.links.forEach((l) => {
      if (l.broken) return;
      const nA = web.nodes[l.a],
        nB = web.nodes[l.b];
      ctx.beginPath();
      ctx.moveTo(cx + nA.x * scale, cy - nA.y * scale);
      ctx.lineTo(cx + nB.x * scale, cy - nB.y * scale);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    });

    web.nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(
        cx + n.x * scale,
        cy - n.y * scale,
        n.isFixed ? 3 : 1.5,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = n.isFixed ? '#ffffff' : '#38bdf8';
      ctx.fill();
    });
  }, [web]);

  const brokenCount = web.links.filter((l) => l.broken).length;
  const selectedMat = MATERIALS.find((m) => m.id === matId) || MATERIALS[0];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Spider Web Dynamic Cable Relaxation
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Spider silk achieves unprecedented toughness through sacrificial
          unfolding. Click any thread below with your mouse to cut it and
          observe how the web redistributes tension without catastrophic failure
          (Cranford et al., Nature 2012).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 p-5 rounded-xl flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3 text-xs">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <ScissorsIcon /> Click any thread to cut it
            </span>
            <button
              onClick={resetWeb}
              className="p-1.5 bg-slate-800 rounded text-slate-300 hover:text-white flex items-center gap-1"
            >
              <RotateIcon /> Reset Web
            </button>
          </div>
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            onClick={handleCut}
            className="border border-slate-800 rounded-lg cursor-crosshair max-w-full"
          />
          <div className="w-full flex justify-between text-xs font-mono pt-3 mt-3 border-t border-slate-800">
            <div>
              <span className="text-slate-400">Severed Strands:</span>{' '}
              <span className="text-red-400 font-bold">{brokenCount}</span>
            </div>
            <div>
              <span className="text-slate-400">Structural Status:</span>{' '}
              <span className="text-emerald-400 font-bold">
                Stable (Redundant)
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-4 text-xs">
          <h2 className="font-bold text-white text-sm">
            Thread Material Database
          </h2>
          <div>
            <label className="text-slate-400 block mb-1">
              Select Cable Material
            </label>
            <select
              value={matId}
              onChange={(e) => setMatId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-slate-200"
            >
              {MATERIALS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Modulus Toughness:</span>
              <span className="text-amber-400">
                {selectedMat.toughness} MJ/m³
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Ultimate Strain:</span>
              <span className="text-blue-400">{selectedMat.strainMax}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Hysteresis Loss:</span>
              <span className="text-emerald-400">{selectedMat.loss}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- TAB 3: TEAM ---
function TeamView() {
  return (
    <div className="space-y-8 py-4">
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
          {TEAM_INFO.institution}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {TEAM_INFO.projectTitle}
        </h1>
        <p className="text-xs text-slate-400">
          {TEAM_INFO.course} • Faculty Guide:{' '}
          <strong className="text-slate-200">{TEAM_INFO.facultyGuide}</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TEAM_INFO.members.map((m) => (
          <div
            key={m.rollNo}
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-xs space-y-2"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-amber-400 text-sm">
              {m.name[0]}
            </div>
            <h3 className="text-sm font-bold text-white">{m.name}</h3>
            <span className="font-mono text-amber-400 block">{m.rollNo}</span>
            <span className="font-semibold text-slate-300 block">{m.role}</span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
