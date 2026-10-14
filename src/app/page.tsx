"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type View = "welcome" | "work" | "help" | "about" | "contact";
const destinations: { id: View; label: string; note: string }[] = [
  { id: "work", label: "Show me your work", note: "Products & experiments" },
  { id: "help", label: "What can you help with?", note: "Development, content & support" },
  { id: "about", label: "Meet the builder", note: "The person behind BuildOrbit" },
  { id: "contact", label: "Discuss a project", note: "Start with the problem" },
];
const projects = [
  { name: "KormiAI", type: "Business automation", status: "Beta / In development", text: "An AI business manager being developed for Messenger workflows: messages, orders, payments, follow-ups and human handoff.", href: "https://kormiai-landing.vercel.app/", steps: ["Message", "Understand", "Action", "Handoff"] },
  { name: "MicroAI", type: "AI × Web3", status: "In progress", text: "A pay-per-use AI chatbot dApp exploring USDC-based micro-payments on Arc Testnet.", href: "https://microai-tan.vercel.app/", steps: ["Question", "USDC", "AI response", "Builder"] },
  { name: "ShadowPay", type: "Privacy-focused payroll", status: "In progress", text: "A privacy-focused payroll and treasury dApp built around Miden’s zero-knowledge architecture.", href: "https://shadowpay-miden.vercel.app/", steps: ["Vault", "Team", "Payroll", "Claim"] },
  { name: "Memecoin Signal Pro", type: "Telegram automation", status: "Currently offline", text: "A Telegram bot designed to monitor selected market data and deliver automated alerts. Currently offline; listed as past work, not an active service.", href: "https://t.me/memecoinsignalprobot", steps: ["Market data", "Monitor", "Filter", "Alert"] },
];
const services = [
  { title: "Build a product", text: "Websites, web applications, SaaS MVPs and Web3 interfaces. Scope and integrations agreed before development.", example: "An idea → a usable first version" },
  { title: "Reduce repetitive work", text: "AI chatbots, workflow automation and customer-support systems, with human handoff where needed.", example: "A repeated task → a clearer workflow" },
  { title: "Explain what you do", text: "Technology content, product explainers and social posts written in clear, accessible language.", example: "A complex product → a clear message" },
  { title: "Support your customers", text: "Customer support, community management and day-to-day communication around your product.", example: "An incoming question → a useful response" },
];
const speech: Record<View, string> = {
  welcome: "Welcome. Pick a direction — I’ll show you around.",
  work: "Here’s what I’ve been building. Each project has its actual development status.",
  help: "Need something built, explained or supported? Start with the problem.",
  about: "One builder behind the work. This is a little about me.",
  contact: "Tell me what you’re working on, what’s stuck, and what you need next.",
};

function Host({ view, paused }: { view: View; paused: boolean }) {
  return <div className={`bo-host bo-pose-${view} ${paused ? "bo-still" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 380 540" className="bo-person">
      <defs>
        <linearGradient id="bo-coat" x1="0" x2="1"><stop stopColor="#101b24"/><stop offset=".5" stopColor="#344450"/><stop offset="1" stopColor="#101820"/></linearGradient>
        <linearGradient id="bo-skin"><stop stopColor="#ad7757"/><stop offset=".55" stopColor="#d69d76"/><stop offset="1" stopColor="#9b6548"/></linearGradient>
      </defs>
      <ellipse cx="190" cy="516" rx="100" ry="12" fill="#000" opacity=".28"/>
      <path d="M143 372 L185 372 L181 505 L143 505 Z M194 372 L237 372 L241 505 L202 505 Z" fill="#17222d"/>
      <path d="M140 495 Q162 490 182 500 L182 512 L134 512 Z M201 500 Q221 490 244 497 L250 512 L201 512 Z" fill="#080f17"/>
      <g className="bo-body">
        <path d="M151 179 L229 179 Q257 189 262 223 L245 385 Q190 400 135 385 L118 223 Q123 189 151 179" fill="url(#bo-coat)" stroke="#526473" strokeWidth="2"/>
        <path d="M174 166 L174 194 L190 211 L206 194 L206 166" fill="url(#bo-skin)"/>
        <path d="M150 181 L174 193 L190 213 L166 230 Z M230 181 L206 193 L190 213 L214 230 Z" fill="#18232d"/>
        <path d="M190 213 L190 382 M147 292 L169 275 M212 275 L237 292" stroke="#758591" strokeWidth="2" opacity=".7"/>
        <rect x="213" y="235" width="22" height="12" rx="3" fill="#a78d6c"/>
        <g className="bo-arm bo-arm-left">
          <path d="M135 195 Q117 188 107 213 L91 290 Q86 310 104 327 L124 341 L143 319 L121 299 L148 227 Z" fill="url(#bo-coat)" stroke="#526473" strokeWidth="2"/>
          <path d="M124 321 Q132 310 142 319 L153 331 Q158 342 146 348 L129 339 Z" fill="url(#bo-skin)"/>
        </g>
        <g className="bo-arm bo-arm-right">
          <path d="M244 197 Q263 193 272 217 L291 280 Q297 298 283 313 L259 338 L239 318 L262 292 L233 226 Z" fill="url(#bo-coat)" stroke="#526473" strokeWidth="2"/>
          <path d="M242 319 Q251 310 260 320 L269 333 Q272 345 261 349 L247 340 Z" fill="url(#bo-skin)"/>
          <path d="M260 322 L270 308 Q276 302 278 309 L272 331" fill="url(#bo-skin)"/>
        </g>
        <g className="bo-head">
          <ellipse cx="190" cy="125" rx="49" ry="59" fill="url(#bo-skin)"/>
          <ellipse cx="141" cy="132" rx="7" ry="14" fill="#b8805c"/><ellipse cx="239" cy="132" rx="7" ry="14" fill="#b8805c"/>
          <path d="M143 111 Q130 74 155 64 Q163 49 178 60 Q193 43 206 58 Q230 51 241 80 L237 111 L226 88 Q185 73 153 97 Z" fill="#101b20"/>
          <path d="M148 141 Q158 156 169 153 L180 147 L201 147 L213 153 L232 140 Q236 190 209 217 L189 229 L169 215 Q143 192 148 141" fill="#152124"/>
          <path d="M177 157 Q190 163 203 157" stroke="#b98d75" strokeWidth="3" fill="none"/>
          <path d="M187 120 L183 141 L195 141" stroke="#9c684d" strokeWidth="3" fill="none"/>
          <path d="M143 108 L184 110 L182 131 Q161 142 148 126 Z M196 110 L237 108 L232 126 Q218 142 198 131 Z" fill="#070d15" stroke="#536c78" strokeWidth="3"/>
          <path d="M182 114 Q190 109 198 114 M151 113 L169 116 M205 115 L222 112" stroke="#9bc8d0" strokeWidth="2" fill="none" opacity=".7"/>
        </g>
      </g>
    </svg>
    <div className="bo-host-plinth"><span>SAHMED ZAYAN</span><small>Founder · Solo builder</small></div>
  </div>;
}

export default function Home() {
  const [view, setView] = useState<View>("welcome");
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [simple, setSimple] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPaused(query.matches);
    sync(); query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setView("welcome"); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("auronxbt@proton.me"); setCopied(true); }
    catch { setCopied(false); }
  }
  const project = projects[selected];
  return <main className={`bo-site ${paused ? "bo-paused" : ""} ${simple ? "bo-simple" : ""}`}>
    <a className="bo-skip" href="#bo-panel">Skip to content</a>
    <header className="bo-header">
      <button className="bo-brand" onClick={() => setView("welcome")} aria-label="BuildOrbit home"><span className="bo-brand-mark">b<span>o</span></span>BuildOrbit<span className="bo-dot">.</span></button>
      <div className="bo-controls"><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Resume motion" : "Pause motion"}</button><button onClick={() => setSimple(!simple)} aria-pressed={simple}>{simple ? "Studio view" : "Simple view"}</button></div>
    </header>
    <div className="bo-topline"><span>THE BUILDER’S WORKSPACE</span><span>Development · Content · Support</span></div>
    <section className="bo-studio" aria-label="Meet the builder interactive workspace">
      <div className="bo-stage">
        <div className="bo-orbit bo-orbit-one"/><div className="bo-orbit bo-orbit-two"/>
        
        <Host view={view} paused={paused}/>
        <div className="bo-speech" role="status" aria-live="polite"><span>SAHMED / YOUR GUIDE</span><p>{speech[view]}</p></div>
        
      </div>
      <div className="bo-workspace">
        <div className="bo-directions" aria-label="Choose what to explore">
          {destinations.map((item, index) => <button key={item.id} aria-pressed={view === item.id} aria-controls="bo-panel" onClick={() => setView(item.id)} className={view === item.id ? "bo-active" : ""}><span className="bo-number">0{index + 1}</span><span>{item.label}<small>{item.note}</small></span><span aria-hidden="true">↗</span></button>)}
        </div>
        <section id="bo-panel" tabIndex={-1} aria-label="Workspace details" className="bo-panel">
          <div key={view} className="bo-panel-inner">
          {view === "welcome" && <><p className="bo-kicker">MEET THE BUILDER</p><h1>Not a slide deck.<br/>A look inside<br/><em>the work.</em></h1><p className="bo-lead">I’m Sahmed. I build digital products, write about technology, and help businesses look after their customers.</p><p className="bo-muted">Choose a direction above. Explore the products, the problems I can help with, or the person behind BuildOrbit.</p><button className="bo-primary" onClick={() => setView("work")}>Let me show you around <span>↗</span></button><p className="bo-small">No camera, microphone or account needed.</p></>}
          {view === "work" && <><p className="bo-kicker">SELECTED WORK / 0{selected + 1}</p><h2>Built. Building.<br/><em>Still learning.</em></h2><div className="bo-project-tabs" aria-label="Choose a project">{projects.map((p, i) => <button key={p.name} onClick={() => setSelected(i)} aria-pressed={selected === i} className={selected === i ? "bo-selected" : ""}>{p.name}</button>)}</div><article className="bo-project" key={project.name}><div className="bo-project-top"><span>{project.type}</span><span className="bo-status">{project.status}</span></div><h3>{project.name}</h3><p>{project.text}</p><div className="bo-flow" aria-label="Conceptual workflow, not a live product feed">{project.steps.map((step, i) => <div key={step} style={{ "--step": i } as CSSProperties}><small>0{i + 1}</small>{step}</div>)}</div><p className="bo-small">Illustrative workflow · not a live system monitor</p><a className="bo-text-link" href={project.href} target="_blank" rel="noopener noreferrer">{selected === 3 ? "View bot link (offline)" : "Open public project page"} ↗</a></article><p className="bo-muted bo-small">Public pages are not proof that every feature is production-ready. Some source code remains private.</p></>}
          {view === "help" && <><p className="bo-kicker">WAYS TO WORK TOGETHER</p><h2>What needs<br/><em>to work better?</em></h2><div className="bo-services">{services.map((service, i) => <article key={service.title}><span className="bo-number">0{i + 1}</span><div><h3>{service.title}</h3><p>{service.text}</p><small>{service.example}</small></div></article>)}</div><button className="bo-primary" onClick={() => setView("contact")}>Tell me about the problem ↗</button></>}
          {view === "about" && <><p className="bo-kicker">THE PERSON BEHIND BUILDORBIT</p><h2>One builder.<br/><em>Direct conversations.</em></h2><p className="bo-lead">I’m Sahmed Zayan, founder of BuildOrbit. I work independently on full-stack applications, AI automation and Web3 products.</p><p>My background also includes more than three years in customer support and community management. That experience shapes how I think about users, communication and the work around a product.</p><div className="bo-note">AI is part of my workflow, not a replacement for responsibility. I use it for research, development, documentation and testing — and stay responsible for the decisions.</div><h3 className="bo-subheading">How we would work</h3><ol className="bo-process"><li>Understand the problem and constraints.</li><li>Agree a realistic scope and deliverables.</li><li>Build, review and test the first version.</li><li>Hand over clearly and discuss next steps.</li></ol><button className="bo-primary" onClick={() => setView("contact")}>Talk directly with me ↗</button></>}
          {view === "contact" && <><p className="bo-kicker">START A CONVERSATION</p><h2>What are you<br/><em>trying to solve?</em></h2><p className="bo-lead">A rough brief is enough to start. Tell me what you need, what already exists, and any budget or deadline you have in mind.</p><a className="bo-email" href="mailto:auronxbt@proton.me?subject=BuildOrbit%20project%20enquiry">auronxbt@proton.me ↗</a><button className="bo-copy" onClick={copyEmail}>{copied ? "Email copied" : "Copy email"}</button><div className="bo-note">You’ll be speaking with me, not an account manager. Scope, timing and cost are discussed before work starts.</div><div className="bo-socials">{[["Telegram", "https://t.me/officialbuildorbit"], ["LinkedIn", "https://www.linkedin.com/in/sahmedonchain/"], ["GitHub", "https://github.com/sahmedonchain"], ["X", "https://x.com/sahmedonchain"], ["YouTube", "https://www.youtube.com/@buildorbitofficial"]].map(([name, href]) => <a href={href} key={name} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}</div><p className="bo-small">No simulated online indicator. Response time depends on my availability.</p></>}
          </div>
        </section>
      </div>
    </section>
    <footer className="bo-footer"><span>© 2026 BuildOrbit · Built by Sahmed Zayan</span><button onClick={() => setView("welcome")}>Back to the introduction ↑</button></footer>
  </main>;
}