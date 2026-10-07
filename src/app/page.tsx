"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const OrbScene = dynamic(() => import("@/components/OrbScene"), {
  ssr: false,
});

const products = [
  {
    name: "KormiAI",
    category: "AI Business Automation",
    description:
      "An AI-powered business manager for Facebook Messenger that supports customer messages, orders, payments, follow-ups, and human handoff.",
    status: "Beta / In development",
    href: "https://kormiai-landing.vercel.app/",
    icon: Bot,
    color: "from-violet-500/20 to-fuchsia-500/10",
    tags: ["AI", "Automation", "Messenger"],
  },
  {
    name: "MicroAI",
    category: "AI × Web3",
    description:
      "A pay-per-use AI chatbot dApp exploring USDC-based micro-payments on Arc Testnet.",
    status: "In progress",
    href: "https://microai-tan.vercel.app/",
    icon: Sparkles,
    color: "from-sky-500/20 to-violet-500/10",
    tags: ["AI", "Arc", "USDC"],
  },
  {
    name: "ShadowPay",
    category: "Privacy-focused Web3",
    description:
      "A privacy-focused payroll and treasury dApp built around Miden's zero-knowledge architecture.",
    status: "In progress",
    href: "https://shadowpay-miden.vercel.app/",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-cyan-500/10",
    tags: ["Miden", "Privacy", "Payroll"],
  },
  {
    name: "FXBotProAI",
    category: "Fintech Product",
    description:
      "A fintech account-management website and trading-related product interface.",
    status: "Private build",
    href: "https://fxbotproai.vercel.app/",
    icon: Wallet,
    color: "from-amber-500/20 to-orange-500/10",
    tags: ["Fintech", "Dashboard", "Trading"],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    text: "Start with the business problem, users, constraints, and desired outcome.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Architect",
    text: "Plan the product structure, data flow, APIs, integrations, and core workflows.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the interface, backend, automation, AI, and Web3 layers.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Ship",
    text: "Test, deploy, document, monitor, and improve the product continuously.",
    icon: ArrowUpRight,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function FlowNode({
  label,
  icon: Icon,
  active = false,
}: {
  label: string;
  icon: React.ElementType;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
        active
          ? "border-violet-300/40 bg-violet-400/15 text-violet-100"
          : "border-white/10 bg-white/[0.035] text-zinc-300"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#06070b] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_15%_0%,rgba(124,58,237,0.22),transparent_30%),radial-gradient(circle_at_90%_18%,rgba(14,165,233,0.14),transparent_28%)]" />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Build<span className="text-violet-400">Orbit</span>
          <span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#work">
            Work
          </a>
          <a className="transition hover:text-white" href="#systems">
            Systems
          </a>
          <a className="transition hover:text-white" href="#process">
            Process
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition hover:border-violet-300/50 hover:bg-violet-400/10 md:block"
        >
          Start a conversation{" "}
          <ArrowUpRight className="ml-1 inline h-4 w-4" />
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-lg p-2 text-zinc-300 md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="relative z-30 mx-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#11121a]/95 p-5 text-sm text-zinc-300 backdrop-blur md:hidden">
          {[
            ["Work", "#work"],
            ["Systems", "#systems"],
            ["Process", "#process"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-32 lg:pt-12"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-100">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Building AI-powered products
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            I build systems that turn{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              ideas into reality.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            AI automation, customer-support systems, SaaS, Web3, and fintech
            products—designed around real workflows, tested with intention, and
            built to move forward.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
            >
              Explore my work{" "}
              <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>

            <a
              href="#process"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300/50 hover:bg-white/[0.05]"
            >
              See how I build
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
            <span>AI applications</span>
            <span>Full-stack products</span>
            <span>Web3 & fintech</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative"
        >
          <div className="mb-6">
            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Live Product Architecture
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
              A visual view of how ideas become connected digital systems.
            </p>
          </div>

          <div className="absolute -inset-12 top-16 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-violet-950/30 backdrop-blur">
            <OrbScene />

            <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-zinc-300 backdrop-blur">
              <span>BUILD_ORBIT / PRODUCT SYSTEM</span>
              <span className="float-right text-emerald-300">● LIVE</span>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="systems"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeading
          eyebrow="Product systems"
          title="Not just screens. Complete systems that move information and action."
          description="Every useful product connects a user, an interface, logic, data, and an outcome. These are the kinds of systems I build."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-violet-500/15 to-white/[0.03] p-6"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-300">
                <Bot />
              </div>

              <span className="text-xs uppercase tracking-[0.16em] text-violet-200">
                AI automation
              </span>
            </div>

            <h3 className="text-2xl font-medium">
              Understand → respond → act
            </h3>

            <div className="mt-8 space-y-3">
              <FlowNode label="Customer message" icon={MessageCircle} />
              <div className="ml-8 h-4 border-l border-dashed border-violet-300/40" />
              <FlowNode label="AI understanding" icon={Sparkles} active />
              <div className="ml-8 h-4 border-l border-dashed border-violet-300/40" />
              <FlowNode label="Knowledge / action" icon={Database} />
              <div className="ml-8 h-4 border-l border-dashed border-violet-300/40" />
              <FlowNode label="Human handoff" icon={Check} />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-500/15 to-white/[0.03] p-6"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300">
                <Code2 />
              </div>

              <span className="text-xs uppercase tracking-[0.16em] text-sky-200">
                Full-stack
              </span>
            </div>

            <h3 className="text-2xl font-medium">
              Interface → logic → data
            </h3>

            <div className="relative mt-8 space-y-3">
              <FlowNode label="Frontend experience" icon={Layers3} />
              <div className="ml-8 h-4 border-l border-dashed border-sky-300/40" />
              <FlowNode
                label="API and business logic"
                icon={Network}
                active
              />
              <div className="ml-8 h-4 border-l border-dashed border-sky-300/40" />
              <FlowNode label="Database and users" icon={Database} />
              <div className="ml-8 h-4 border-l border-dashed border-sky-300/40" />
              <FlowNode label="Deploy and improve" icon={ArrowUpRight} />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-500/15 to-white/[0.03] p-6"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <Wallet />
              </div>

              <span className="text-xs uppercase tracking-[0.16em] text-emerald-200">
                Web3 / fintech
              </span>
            </div>

            <h3 className="text-2xl font-medium">
              User → transaction → settlement
            </h3>

            <div className="mt-8 space-y-3">
              <FlowNode label="Account or wallet" icon={Wallet} />
              <div className="ml-8 h-4 border-l border-dashed border-emerald-300/40" />
              <FlowNode label="API / RPC / contract" icon={Network} active />
              <div className="ml-8 h-4 border-l border-dashed border-emerald-300/40" />
              <FlowNode label="Payment workflow" icon={Sparkles} />
              <div className="ml-8 h-4 border-l border-dashed border-emerald-300/40" />
              <FlowNode label="Dashboard / settlement" icon={Check} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <SectionHeading
          eyebrow="How I build"
          title="From a rough idea to a usable product."
          description="AI helps me move faster. Product thinking, architecture, testing, and clear communication keep the work reliable."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {workflow.map(({ number, title, text, icon: Icon }) => (
            <motion.div
              key={number}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-violet-300">{number}</span>
                <Icon className="h-5 w-5 text-zinc-500" />
              </div>

              <h3 className="mt-12 text-xl font-medium">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Products currently taking shape."
          />

          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Public demos show the product experience. Some source code remains
            private while the products continue to evolve.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {products.map(
            ({
              name,
              category,
              description,
              status,
              href,
              icon: Icon,
              color,
              tags,
            }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${color} p-6`}
              >
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.04] blur-2xl transition group-hover:bg-white/[0.08]" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-violet-200">
                    <Icon />
                  </div>

                  <ExternalLink className="h-5 w-5 text-zinc-500 transition group-hover:text-white" />
                </div>

                <div className="relative mt-12">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {category}
                  </p>

                  <h3 className="mt-2 text-3xl font-medium">{name}</h3>

                  <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                    {description}
                  </p>
                </div>

                <div className="relative mt-8 flex flex-wrap items-center gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}

                  <span className="ml-auto text-xs text-zinc-500">
                    {status}
                  </span>
                </div>
              </motion.a>
            ),
          )}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              The builder
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Technical thinking. User empathy.
            </h2>
          </div>

          <div className="text-base leading-8 text-zinc-400 sm:text-lg">
            <p>
              I&apos;m Sahmed Zayan, founder of Build Orbit. My work combines
              AI-powered full-stack development, Web3 product building,
              fintech experimentation, and more than three years of
              customer-support and community-management experience.
            </p>

            <p className="mt-6">
              I use AI to accelerate research, development, documentation, and
              testing—but I stay responsible for the architecture, product
              decisions, workflows, quality, and delivery.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-violet-500/20 via-white/[0.04] to-sky-400/10 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
              Let&apos;s build
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Have a workflow that should run better?
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-300">
              Tell me what you&apos;re trying to build, automate, or improve.
              I&apos;ll help turn it into a clear product direction.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:auronxbt@proton.me"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"
              >
                <Mail className="mr-2 inline h-4 w-4" />
                Email me
              </a>

              <a
                href="https://t.me/officialbuildorbit"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Telegram
              </a>

              <a
                href="https://www.youtube.com/@buildorbitofficial"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                YouTube
              </a>

              <a
                href="https://www.linkedin.com/in/sahmedonchain/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 Build Orbit. Built by Sahmed Zayan.</p>

        <div className="flex flex-wrap gap-5">
          <a
            href="https://github.com/sahmedonchain"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://x.com/sahmedonchain"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            X
          </a>

          <a
            href="https://www.linkedin.com/in/sahmedonchain/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://t.me/officialbuildorbit"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Telegram
          </a>

          <a
            href="https://www.youtube.com/@buildorbitofficial"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            YouTube
          </a>
        </div>
      </footer>
    </main>
  );
}