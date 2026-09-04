# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business owners and executives (decision-makers) evaluating insurance and business-consulting partners for their company. The site serves both a general audience — any company needing seguros (insurance across all branches) and consultoria empresarial (business consulting) — and a specialty audience of logistics/transport companies, who get dedicated content (cargo-insurance branches, risk-mitigation tech, sector-specific legal changes) because that is where Avante Global's leadership has direct, provable expertise (35+ years in the logistics chain). Logistics/transport is a highlighted vertical with the strongest social proof, not the exclusive market.

## Product Purpose

Avante Global Seguros e Consultoria Empresarial helps companies reduce risk and cost, and increase performance, through three integrated services: insurance across all branches ("todos os ramos de seguros"), business consulting (operational, financial, organizational, risk/insurance management), and — for the logistics/transport vertical specifically — risk-mitigation technology (tracking, monitoring, TMS) and cargo-insurance compliance guidance. Success is a prospective client requesting contact ("Fale com um especialista" / WhatsApp) after recognizing the risk/cost problem the site surfaces.

## Positioning

35+ years of hands-on experience in the logistics supply chain combined with 18+ years covering every branch of insurance, backed by a national partner network (risk managers, TMS/WMS providers, insurers, escort services, tax specialists). This combination — deep operational logistics experience plus full-line insurance expertise plus a national partner bench — is the mechanism a generalist insurance broker or a generalist consultancy could not truthfully claim together.

## Operating Context

- Client-facing marketing/institutional site with six routes: Início (home), Institucional, Seguros, Gestão de Risco (tech), Consultorias, Parceiros, Você sabia? (Novidades/legal-regulatory updates).
- Insurance content is grounded in real Brazilian regulatory specifics for cargo transport (e.g. RCTR-C, RC-DC, RC-V; Lei nº 14.599/2023; Resolução SUSEP nº 51/2025) — this is factual/legal content, not marketing copy, and must stay accurate.
- Consulting engagement starts from a 10-question self-diagnostic ("Você conhece de fato o seu negócio...") across four fronts: Gestão Operacional, Controladoria e Financeiro, Organizacional e Pessoas, Gestão de Risco e Seguros.
- Partner program: Avante recruits and rewards referral partners ("Indique e seja recompensado") alongside its service partners (gerenciadoras de risco, TMS/WMS, seguradoras, escolta, especialistas tributários).
- Primary contact channels: an on-page "Fale conosco" / "Fale com um especialista" anchor (`#contato`) and a floating WhatsApp link.

## Capabilities and Constraints

- Built with React 19 + TypeScript + Vite, Tailwind CSS v4, react-router-dom v7; no backend, no CMS — all copy lives in local component arrays (content-as-data pattern, see CLAUDE.md).
- No test suite configured.
- Content is in Brazilian Portuguese; keep it that way.
- Logo asset at `/logodark.png`; hero background at `/truck3.jpg`.

## Brand Commitments

- Name: Avante Global Seguros e Consultoria Empresarial.
- Standing tagline: "Seguro é uma questão de confiança." (used both as "Há mais de 18 anos" and "Nossa assinatura há mais de 18 anos").
- Nav framing of the four core areas: Institucional, Seguros, Gestão de Risco, Consultorias, Parceiros, Você sabia?.

## Evidence on Hand

- Real leadership bios with named credentials: Rosemar Ferraz (Diretor — 35 anos na cadeia logística, 18 anos em todos os ramos de seguros, especialista em gestão de risco, MBA Operações e Logística, especialista em TMS/WMS) and Andrea Ferraz (Diretora — 25 anos na cadeia logística, MBA Gestão de Projetos e Processos, especialista em SAP e WMS, psicanalista clínica).
- Real headline stats: 35+ anos em logística, 18+ anos em seguros, 100% abrangência nacional.
- Real, sourced regulatory/legal content for cargo insurance and a real partner-category list (not fabricated).
- **No real client testimonials, case studies, or customer logos exist yet, and none should be fabricated.** All current photography is stock (Unsplash) rather than real company/team photos. The user intends to supply real photos and testimonials in the future — treat social-proof and photography sections as due to be swapped for real assets later; do not invent placeholder "customers" or quotes to fill the gap now.

## Product Principles

1. Lead with real, verifiable expertise (named leadership, real credentials, real regulatory citations) over generic trust language — this is the company's actual differentiator.
2. Serve two audience layers honestly: general business content stays general, logistics/transport content stays specific and technically accurate; don't blur legal/regulatory specifics into vague marketing claims.
3. Never fabricate social proof (testimonials, client names, case studies, logos) — the absence is real and known; design must accommodate it without faking it.
4. Every surface should carry a clear path to contact (`#contato` or WhatsApp) — the site's job is to generate qualified inquiries, not just inform.
