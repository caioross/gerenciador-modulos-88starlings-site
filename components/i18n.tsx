"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Step = { n: string; title: string; desc: string };
type Feature = { icon: string; title: string; desc: string };

type Dict = {
  navWorkflow: string;
  navFeatures: string;
  navStack: string;
  navGame: string;

  heroBadge: string;
  heroTitle: string;
  heroTagline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  workflowTitle: string;
  workflowLead: string;
  steps: Step[];

  featuresTitle: string;
  featuresLead: string;
  features: Feature[];

  stackTitle: string;
  stackLead: string;
  stackItems: string[];
  contractTitle: string;
  contractItems: string[];

  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;

  footerNote: string;
  footerRights: string;
};

const STR: Record<Lang, Dict> = {
  pt: {
    navWorkflow: "Fluxo",
    navFeatures: "Recursos",
    navStack: "Tecnologia",
    navGame: "O jogo",

    heroBadge: "Ferramenta de produção · 88 Starlings",
    heroTitle: "Gerenciador de Módulos",
    heroTagline: "Do .glb ao catálogo que a nave entende.",
    heroSub:
      "App web local que cataloga os módulos 3D da nave de 88 Starlings num visualizador interativo e exporta o modules_catalog.json exatamente no formato que o jogo (Unity) consome. Roda offline, no navegador.",
    heroCtaPrimary: "Ver o fluxo",
    heroCtaSecondary: "Conhecer o jogo",

    workflowTitle: "Do modelo ao jogo",
    workflowLead:
      "Quatro passos: abrir os modelos, classificar em 3D, validar e exportar para a Unity.",
    steps: [
      { n: "01", title: "Abrir os .glb", desc: "Selecione a pasta de modelos (saída do 3draza). No Chrome/Edge ele lembra a última pasta usada." },
      { n: "02", title: "Visualizar em 3D", desc: "Cada módulo aparece num visualizador com órbita, faces e caixa de grade — o preview replica o encaixe exato do jogo." },
      { n: "03", title: "Classificar", desc: "Defina tipo, papel de energia, grade (size), massa, HP, empuxo, faces aceitáveis e os stats do tipo." },
      { n: "04", title: "Exportar", desc: "Baixe o modules_catalog.json validado (avisa ids duplicados, módulos sem nome ou sem face) e leve para a Unity." },
    ],

    featuresTitle: "Por que é fiel ao jogo",
    featuresLead: "Construído sobre o mesmo contrato de dados que a nave usa.",
    features: [
      { icon: "🧊", title: "Preview = jogo", desc: "Rotaciona, escala para caber em size×0.96 e recentraliza igual ao Unity. O que você vê é o que aparece na nave." },
      { icon: "✅", title: "Validação", desc: "Na exportação, avisa ids duplicados, módulos sem nome ou sem face. Catálogo sempre consistente." },
      { icon: "🔌", title: "Offline", desc: "Three.js embutido em vendor/. Sem internet, sem build, sem dependências externas." },
      { icon: "🎛", title: "Encaixe fino", desc: "modelScale/modelOffset por eixo para ajuste perfeito — exportados só quando diferem do padrão." },
    ],

    stackTitle: "Tecnologia",
    stackLead: "HTML + JavaScript puro com Three.js local. Sem framework, sem servidor de build.",
    stackItems: [
      "Three.js (offline em vendor/) — visualizador 3D",
      "JavaScript modular: app.js (UI) + core.js (schema/validação)",
      "GLTFLoader + OrbitControls para os .glb",
      "Servidor local simples (start.bat / python http.server)",
    ],
    contractTitle: "Contrato de saída",
    contractItems: [
      "modules_catalog.json no formato exato do jogo",
      "Tipos: command, engine, reactor, weapon, shield…",
      "Faces (+X…-Z), size, stats e thrustDir",
      "38 módulos validados ponta a ponta",
    ],

    ctaTitle: "Parte do universo 88 Starlings",
    ctaLead:
      "Um jogo de construção de naves modulares. O Gerenciador é a ponte entre os modelos 3D e a nave jogável.",
    ctaButton: "Ver 88 Starlings",

    footerNote: "Gerenciador de Módulos — ferramenta de produção de 88 Starlings.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    navWorkflow: "Flow",
    navFeatures: "Features",
    navStack: "Tech",
    navGame: "The game",

    heroBadge: "Production tool · 88 Starlings",
    heroTitle: "Module Manager",
    heroTagline: "From .glb to the catalog the ship understands.",
    heroSub:
      "A local web app that catalogs 88 Starlings' 3D ship modules in an interactive viewer and exports modules_catalog.json in the exact format the Unity game consumes. Runs offline, in the browser.",
    heroCtaPrimary: "See the flow",
    heroCtaSecondary: "Discover the game",

    workflowTitle: "From model to game",
    workflowLead:
      "Four steps: open the models, classify in 3D, validate and export to Unity.",
    steps: [
      { n: "01", title: "Open the .glb", desc: "Pick the models folder (3draza output). On Chrome/Edge it remembers the last folder used." },
      { n: "02", title: "View in 3D", desc: "Each module appears in an orbit viewer with faces and a grid box — the preview replicates the exact in-game fit." },
      { n: "03", title: "Classify", desc: "Set type, power role, grid (size), mass, HP, thrust, acceptable faces and the type's stats." },
      { n: "04", title: "Export", desc: "Download the validated modules_catalog.json (flags duplicate ids, missing names or faces) and take it to Unity." },
    ],

    featuresTitle: "Why it's faithful to the game",
    featuresLead: "Built on the same data contract the ship uses.",
    features: [
      { icon: "🧊", title: "Preview = game", desc: "Rotates, scales to fit size×0.96 and recenters just like Unity. What you see is what appears on the ship." },
      { icon: "✅", title: "Validation", desc: "On export, flags duplicate ids, modules without a name or without a face. Always-consistent catalog." },
      { icon: "🔌", title: "Offline", desc: "Three.js bundled in vendor/. No internet, no build, no external dependencies." },
      { icon: "🎛", title: "Fine fit", desc: "Per-axis modelScale/modelOffset for a perfect fit — exported only when they differ from default." },
    ],

    stackTitle: "Tech",
    stackLead: "Plain HTML + JavaScript with local Three.js. No framework, no build server.",
    stackItems: [
      "Three.js (offline in vendor/) — 3D viewer",
      "Modular JavaScript: app.js (UI) + core.js (schema/validation)",
      "GLTFLoader + OrbitControls for the .glb files",
      "Simple local server (start.bat / python http.server)",
    ],
    contractTitle: "Output contract",
    contractItems: [
      "modules_catalog.json in the game's exact format",
      "Types: command, engine, reactor, weapon, shield…",
      "Faces (+X…-Z), size, stats and thrustDir",
      "38 modules validated end to end",
    ],

    ctaTitle: "Part of the 88 Starlings universe",
    ctaLead:
      "A modular ship-building game. The Manager is the bridge between the 3D models and the playable ship.",
    ctaButton: "See 88 Starlings",

    footerNote: "Module Manager — a production tool for 88 Starlings.",
    footerRights: "All rights reserved.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: STR[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-starling/40 bg-black/30 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "pt" ? "bg-starling text-space" : "text-ice/70 hover:text-white"
        }`}
      >
        🇧🇷 PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "en" ? "bg-starling text-space" : "text-ice/70 hover:text-white"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
