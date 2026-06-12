'use client';

import './styles.css';
import Link from 'next/link';
import { Navbar } from './components/Navbar';
import { SIGNUP_HREF } from './data';
import {
  ShieldCheck, Zap, Bot, Lock, Globe2, LineChart,
  ArrowRight, TrendingUp, Wallet, BarChart3, Coins, Layers,
  CircleDollarSign, Gauge, CheckCircle2,
} from 'lucide-react';

/**
 * Trustx public marketing home — redesigned.
 * Theme: premium dark canvas with electric-blue glow gradients,
 * glassmorphism cards and the logo's blue palette
 * (#0394fa → #035eeb → #0943c0). Self-contained: renders its own
 * Navbar + Footer. Every CTA routes to /auth/register.
 */

const BLUE = '#035eeb';
const BLUE_LIGHT = '#0394fa';
const BLUE_DEEP = '#0943c0';

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="tx-hero">
      {/* glow orbs */}
      <span className="tx-orb tx-orb--a" aria-hidden />
      <span className="tx-orb tx-orb--b" aria-hidden />
      <span className="tx-grid-overlay" aria-hidden />

      <div className="tx-container tx-hero__inner">
        <span className="tx-pill">
          <span className="tx-pill__dot" /> Live markets • 24/7 trading
        </span>

        <h1 className="tx-hero__title">
          Trade with <span className="tx-grad-text">Confidence</span>
        </h1>

        <p className="tx-hero__sub">
          TrustX is the all-in-one platform to trade Forex, Crypto, Indices and
          Commodities — with institutional execution, insured trades and
          AI-assisted strategies. Built for serious traders.
        </p>

        <div className="tx-hero__cta">
          <Link href={SIGNUP_HREF} className="tx-btn tx-btn--primary">
            Get Started <ArrowRight size={18} />
          </Link>
          <Link href="/auth/login" className="tx-btn tx-btn--ghost">
            Try Demo Account
          </Link>
        </div>

        <div className="tx-hero__trust">
          {[
            { icon: ShieldCheck, label: 'Insured Trades' },
            { icon: Lock, label: 'Segregated Funds' },
            { icon: Gauge, label: 'Ultra-low Latency' },
            { icon: Globe2, label: 'Global Markets' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="tx-hero__trust-item">
              <Icon size={16} /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
const STATS = [
  { value: '50K+', label: 'Active Traders' },
  { value: '90%', label: 'Profitable Strategies' },
  { value: '7%', label: 'Avg. Monthly Return' },
  { value: '$2.4B', label: 'Volume Traded' },
];

function Stats() {
  return (
    <section className="tx-section">
      <div className="tx-container">
        <div className="tx-stats">
          {STATS.map((s) => (
            <div key={s.label} className="tx-stat-card">
              <div className="tx-stat-card__value tx-grad-text">{s.value}</div>
              <div className="tx-stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── FEATURES ──────────────────────── */
const FEATURES = [
  { icon: Bot, title: 'AI-Driven Trading', body: 'Smart algorithms scan the markets 24/7 and execute strategies with precision — no emotion, no missed moves.' },
  { icon: ShieldCheck, title: 'Insured Positions', body: 'Optional trade insurance protects your capital. Sleep easy knowing your downside is covered.' },
  { icon: Zap, title: 'Lightning Execution', body: 'Institutional-grade infrastructure fills your orders in milliseconds at the price you expect.' },
  { icon: Layers, title: 'Copy & Social Trading', body: 'Mirror top-performing traders automatically and grow your portfolio while you learn.' },
  { icon: Wallet, title: 'Instant Deposits', body: 'Fund your account with crypto or bank transfer and start trading in minutes.' },
  { icon: LineChart, title: 'Pro Charting', body: 'Advanced TradingView charts, 100+ indicators and real-time depth for every instrument.' },
];

function Features() {
  return (
    <section className="tx-section">
      <div className="tx-container">
        <div className="tx-head">
          <span className="tx-eyebrow">Why TrustX</span>
          <h2 className="tx-h2">Everything you need to <span className="tx-grad-text">win the markets</span></h2>
          <p className="tx-lead">One platform, every edge — engineered for performance, protection and growth.</p>
        </div>

        <div className="tx-feature-grid">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="tx-glass-card tx-feature">
              <div className="tx-feature__icon"><Icon size={22} /></div>
              <h3 className="tx-feature__title">{title}</h3>
              <p className="tx-feature__body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MARKETS ───────────────────────── */
const MARKETS = [
  { icon: CircleDollarSign, name: 'Forex', desc: '60+ currency pairs' },
  { icon: Coins, name: 'Crypto', desc: 'BTC, ETH & 100+ coins' },
  { icon: BarChart3, name: 'Indices', desc: 'Global stock indices' },
  { icon: TrendingUp, name: 'Commodities', desc: 'Gold, oil & metals' },
];

function Markets() {
  return (
    <section className="tx-section">
      <div className="tx-container">
        <div className="tx-head">
          <span className="tx-eyebrow">Markets</span>
          <h2 className="tx-h2">Trade the world from <span className="tx-grad-text">one account</span></h2>
        </div>
        <div className="tx-market-grid">
          {MARKETS.map(({ icon: Icon, name, desc }) => (
            <Link key={name} href={SIGNUP_HREF} className="tx-glass-card tx-market">
              <div className="tx-market__icon"><Icon size={24} /></div>
              <div>
                <div className="tx-market__name">{name}</div>
                <div className="tx-market__desc">{desc}</div>
              </div>
              <ArrowRight size={18} className="tx-market__arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── HOW IT WORKS ─────────────────────── */
const STEPS = [
  { n: '01', title: 'Create your account', body: 'Sign up in under two minutes and verify your identity securely.' },
  { n: '02', title: 'Fund your wallet', body: 'Deposit via crypto or bank transfer with instant confirmation.' },
  { n: '03', title: 'Trade & grow', body: 'Open positions, copy pros or let AI work — and watch your portfolio grow.' },
];

function HowItWorks() {
  return (
    <section className="tx-section">
      <div className="tx-container">
        <div className="tx-head">
          <span className="tx-eyebrow">Get Started</span>
          <h2 className="tx-h2">Start trading in <span className="tx-grad-text">3 simple steps</span></h2>
        </div>
        <div className="tx-steps">
          {STEPS.map((s, i) => (
            <div key={s.n} className="tx-glass-card tx-step">
              <div className="tx-step__n">{s.n}</div>
              <h3 className="tx-step__title">{s.title}</h3>
              <p className="tx-step__body">{s.body}</p>
              {i < STEPS.length - 1 && <span className="tx-step__line" aria-hidden />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA BAND ───────────────────────── */
function CtaBand() {
  return (
    <section className="tx-section">
      <div className="tx-container">
        <div className="tx-cta-band">
          <span className="tx-orb tx-orb--c" aria-hidden />
          <h2 className="tx-cta-band__title">Ready to trade with confidence?</h2>
          <p className="tx-cta-band__sub">Join 50,000+ traders building wealth on TrustX. No hidden fees. Start with a demo or go live today.</p>
          <div className="tx-hero__cta">
            <Link href={SIGNUP_HREF} className="tx-btn tx-btn--primary">
              Create Free Account <ArrowRight size={18} />
            </Link>
            <Link href="/auth/login" className="tx-btn tx-btn--ghost">Sign In</Link>
          </div>
          <ul className="tx-cta-band__points">
            {['No commission on deposits', 'Insured trading available', '24/7 support'].map((p) => (
              <li key={p}><CheckCircle2 size={16} /> {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="tx-footer">
      <div className="tx-container tx-footer__inner">
        <div className="tx-footer__brand">
          <img src="/images/trustx_png5.png" alt="TrustX" className="tx-footer__logo" />
          <p className="tx-footer__tag">
            Trade Smarter. Grow Faster. Invest with Confidence.
          </p>
        </div>
        <nav className="tx-footer__links">
          <Link href="/">Home</Link>
          <Link href="/company/about">About Us</Link>
          <Link href="/company/contact">Contact</Link>
          <Link href="/auth/login">Sign In</Link>
          <Link href={SIGNUP_HREF}>Get Started</Link>
        </nav>
      </div>
      <div className="tx-footer__bottom">
        <span>© {new Date().getFullYear()} TrustX. All rights reserved.</span>
        <span className="tx-footer__risk">
          Trading involves risk. Only invest what you can afford to lose.
        </span>
      </div>

      {/* component-scoped theme tokens */}
      <style>{`
        .tx-container{max-width:1180px;margin:0 auto;padding:0 24px}
        .tx-section{position:relative;padding:64px 0}
        .tx-head{text-align:center;max-width:680px;margin:0 auto 44px}
        .tx-eyebrow{display:inline-block;font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${BLUE_LIGHT};margin-bottom:14px}
        .tx-h2{font-size:clamp(26px,4vw,42px);font-weight:800;line-height:1.12;color:#fff;letter-spacing:-.02em}
        .tx-lead{margin-top:14px;color:#9aa3b2;font-size:16px;line-height:1.6}
        .tx-grad-text{background:linear-gradient(100deg,${BLUE_LIGHT},${BLUE},${BLUE_DEEP});-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

        /* glow + grid */
        .tx-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.5;pointer-events:none;z-index:0}
        .tx-orb--a{width:520px;height:520px;top:-160px;left:-120px;background:radial-gradient(circle,${BLUE} 0%,transparent 70%)}
        .tx-orb--b{width:460px;height:460px;top:-80px;right:-140px;background:radial-gradient(circle,${BLUE_DEEP} 0%,transparent 70%);opacity:.45}
        .tx-orb--c{width:520px;height:520px;top:50%;left:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,${BLUE} 0%,transparent 70%);opacity:.35}
        .tx-grid-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(circle at 50% 30%,#000 0%,transparent 75%);z-index:0}

        /* hero */
        .tx-hero{position:relative;overflow:hidden;padding:120px 0 72px;text-align:center}
        .tx-hero__inner{position:relative;z-index:1;max-width:860px}
        .tx-pill{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:#cdd5e3;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);padding:7px 14px;border-radius:999px;margin-bottom:26px}
        .tx-pill__dot{width:8px;height:8px;border-radius:50%;background:${BLUE_LIGHT};box-shadow:0 0 0 4px rgba(3,148,250,.2);animation:txpulse 2s infinite}
        @keyframes txpulse{0%,100%{opacity:1}50%{opacity:.4}}
        .tx-hero__title{font-size:clamp(38px,7vw,72px);font-weight:850;line-height:1.05;letter-spacing:-.03em;color:#fff;margin:0}
        .tx-hero__sub{margin:22px auto 0;max-width:620px;color:#9aa3b2;font-size:clamp(15px,2vw,18px);line-height:1.65}
        .tx-hero__cta{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:34px}
        .tx-hero__trust{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:42px}
        .tx-hero__trust-item{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:#8c94a3}
        .tx-hero__trust-item svg{color:${BLUE_LIGHT}}

        /* buttons */
        .tx-btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15px;padding:13px 26px;border-radius:12px;transition:.2s;border:1px solid transparent}
        .tx-btn--primary{color:#fff;background:linear-gradient(135deg,${BLUE_LIGHT},${BLUE} 55%,${BLUE_DEEP});box-shadow:0 8px 30px -8px ${BLUE}}
        .tx-btn--primary:hover{transform:translateY(-2px);box-shadow:0 14px 40px -8px ${BLUE}}
        .tx-btn--ghost{color:#e6eaf0;background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.14)}
        .tx-btn--ghost:hover{background:rgba(255,255,255,.1);border-color:rgba(3,148,250,.5)}

        /* glass card base */
        .tx-glass-card{position:relative;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08);border-radius:18px;backdrop-filter:blur(8px);transition:.25s}
        .tx-glass-card:hover{border-color:rgba(3,148,250,.45);box-shadow:0 0 0 1px rgba(3,148,250,.15),0 18px 50px -20px ${BLUE};transform:translateY(-4px)}

        /* stats */
        .tx-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .tx-stat-card{text-align:center;padding:28px 18px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08);border-radius:18px}
        .tx-stat-card__value{font-size:clamp(28px,4vw,40px);font-weight:850;letter-spacing:-.02em}
        .tx-stat-card__label{margin-top:6px;color:#8c94a3;font-size:14px}

        /* features */
        .tx-feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .tx-feature{padding:28px}
        .tx-feature__icon{width:48px;height:48px;display:grid;place-items:center;border-radius:13px;color:#fff;background:linear-gradient(135deg,${BLUE_LIGHT},${BLUE_DEEP});box-shadow:0 8px 24px -10px ${BLUE};margin-bottom:18px}
        .tx-feature__title{font-size:18px;font-weight:700;color:#fff;margin-bottom:9px}
        .tx-feature__body{color:#9aa3b2;font-size:14.5px;line-height:1.6}

        /* markets */
        .tx-market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .tx-market{display:flex;align-items:center;gap:14px;padding:22px}
        .tx-market__icon{width:46px;height:46px;flex:none;display:grid;place-items:center;border-radius:12px;color:${BLUE_LIGHT};background:rgba(3,148,250,.12);border:1px solid rgba(3,148,250,.25)}
        .tx-market__name{font-weight:700;color:#fff;font-size:16px}
        .tx-market__desc{color:#8c94a3;font-size:13px;margin-top:2px}
        .tx-market__arrow{margin-left:auto;color:#5b6472;transition:.2s}
        .tx-market:hover .tx-market__arrow{color:${BLUE_LIGHT};transform:translateX(3px)}

        /* steps */
        .tx-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .tx-step{padding:30px 26px;overflow:hidden}
        .tx-step__n{font-size:34px;font-weight:850;letter-spacing:-.02em;background:linear-gradient(135deg,${BLUE_LIGHT},${BLUE_DEEP});-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:14px}
        .tx-step__title{font-size:18px;font-weight:700;color:#fff;margin-bottom:8px}
        .tx-step__body{color:#9aa3b2;font-size:14.5px;line-height:1.6}

        /* cta band */
        .tx-cta-band{position:relative;overflow:hidden;text-align:center;padding:64px 28px;border-radius:26px;background:linear-gradient(160deg,rgba(3,94,235,.18),rgba(9,67,192,.06));border:1px solid rgba(3,148,250,.25)}
        .tx-cta-band__title{position:relative;z-index:1;font-size:clamp(26px,4vw,40px);font-weight:850;color:#fff;letter-spacing:-.02em}
        .tx-cta-band__sub{position:relative;z-index:1;max-width:560px;margin:16px auto 0;color:#b7c0cf;font-size:16px;line-height:1.6}
        .tx-cta-band__points{position:relative;z-index:1;list-style:none;display:flex;gap:26px;justify-content:center;flex-wrap:wrap;margin:28px 0 0;padding:0}
        .tx-cta-band__points li{display:inline-flex;align-items:center;gap:8px;color:#cdd5e3;font-size:14px}
        .tx-cta-band__points svg{color:${BLUE_LIGHT}}

        /* footer */
        .tx-footer{position:relative;border-top:1px solid rgba(255,255,255,.08);margin-top:32px;padding:48px 0 28px;background:rgba(0,0,0,.25)}
        .tx-footer__inner{display:flex;justify-content:space-between;align-items:center;gap:28px;flex-wrap:wrap}
        .tx-footer__logo{height:60px;width:auto;object-fit:contain}
        .tx-footer__tag{color:#8c94a3;font-size:14px;margin-top:8px;max-width:300px}
        .tx-footer__links{display:flex;gap:24px;flex-wrap:wrap}
        .tx-footer__links a{color:#cdd5e3;font-size:14.5px;font-weight:500;transition:.2s}
        .tx-footer__links a:hover{color:${BLUE_LIGHT}}
        .tx-footer__bottom{max-width:1180px;margin:34px auto 0;padding:22px 24px 0;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#6b7280;font-size:13px}

        @media(max-width:900px){
          .tx-stats,.tx-feature-grid,.tx-market-grid,.tx-steps{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:560px){
          .tx-stats,.tx-feature-grid,.tx-market-grid,.tx-steps{grid-template-columns:1fr}
          .tx-footer__inner{flex-direction:column;align-items:flex-start}
        }
      `}</style>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export default function TrustxHomePage() {
  return (
    <div className="trustx-home tx-home-root" style={{ background: '#08090b', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Markets />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
