import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Brain,
  Check,
  ChevronRight,
  CirclePlay,
  HeartPulse,
  MapPin,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Weight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import hero from "@/assets/hipnose/hero.webp.asset.json";
import heroMobile from "@/assets/hipnose/hero-mobile.webp.asset.json";
import benefits from "@/assets/hipnose/benefits.webp.asset.json";
import problems from "@/assets/hipnose/problems.webp.asset.json";
import problemsMobile from "@/assets/hipnose/problems-mobile.webp.asset.json";
import about from "@/assets/hipnose/about.webp.asset.json";
import aboutMobile from "@/assets/hipnose/about-mobile.webp.asset.json";
import logo from "@/assets/hipnose/logo.png.asset.json";
import eventTransformacao from "@/assets/hipnose/event-transformacao.jpg.asset.json";
import eventParada from "@/assets/hipnose/event-parada.jpg.asset.json";
import eventEnem from "@/assets/hipnose/event-enem.jpg.asset.json";
import eventBahia from "@/assets/hipnose/event-bahia.jpg.asset.json";
import eventBrasilia from "@/assets/hipnose/event-brasilia.jpg.asset.json";
import mediaVanguarda from "@/assets/hipnose/media-vanguarda.jpg.asset.json";
import mediaBand from "@/assets/hipnose/media-band.jpg.asset.json";
import mediaGlobo from "@/assets/hipnose/media-globo.jpg.asset.json";
import mediaSbt from "@/assets/hipnose/media-sbt.jpg.asset.json";
import mediaModo from "@/assets/hipnose/media-modo.jpg.asset.json";
import mediaRecord from "@/assets/hipnose/media-record.jpg.asset.json";
import magazine from "@/assets/hipnose/magazine.png.asset.json";

const WHATSAPP = "https://wa.me/+5512997611991?text=Oi%20li%20as%20informa%C3%A7%C3%B5es%20no%20site%20e%20gostaria%20de%20saber%20sobre%20as%20sess%C3%B5es";

const benefitsList = [
  ["Abordagem Direcionada", "Foca diretamente nas causas do problema, seja ansiedade, fobias, traumas ou vícios."],
  ["Acesso ao Subconsciente", "Trabalha com crenças e padrões ocultos, que são difíceis de acessar em terapias convencionais."],
  ["Resultados Rápidos", "Em muitos casos, a hipnose proporciona uma solução mais rápida e eficaz para questões específicas."],
  ["Sem Efeitos Colaterais", "Totalmente seguro quando realizado por um profissional experiente."],
];

const issues = [
  { icon: HeartPulse, title: "Supere a Ansiedade", text: "Em apenas algumas sessões, muitos dos nossos pacientes superaram a ansiedade que limitava suas vidas." },
  { icon: ShieldCheck, title: "Libere-se de Fobias e Medos", text: "A hipnose pode proporcionar um alívio rápido para medos irracionais." },
  { icon: Weight, title: "Emagrecimento Eficaz", text: "Mude sua relação com a comida e alcance seus objetivos de saúde com mais equilíbrio." },
  { icon: Brain, title: "Tratamento de Vícios", text: "Deixe para trás hábitos prejudiciais, como fumo e alcoolismo, com a ajuda da hipnoterapia." },
];

const reviews = [
  { name: "Silvia Sil", date: "3 Outubro 2025", text: "Sou eternamente grata a esse profissional incrível que me ajudou a desbloquear traumas e controlar a ansiedade através da hipnose. Tive resultados EXCELENTES em apenas 2 sessões. O atendimento do Ton é incrível! Super recomendado." },
  { name: "Mayara Gonçalves", date: "5 Agosto 2025", text: "Eu convivia há mais de 9 anos com uma fobia que foi muito bem solucionada em poucas sessões. O Ton além de ótimo profissional, é acolhedor e soube conduzir muito bem as sessões. Serei eternamente grata a esse profissional nota 1000!!" },
  { name: "Guilherme Ferraz", date: "20 Agosto 2024", text: "Por anos busquei tratar o meu problema com transtorno de ansiedade. Fui nas 4 sessões e saí revigorado. Graças a ele me sinto bem mais confiante e capaz de vencer na vida." },
];

const treatments = ["Ansiedade e Depressão", "Vícios e Hábitos Indesejados", "Emagrecimento e Controle de Peso", "Problemas Sexuais e Relacionamentos", "Timidez e Baixa Autoestima", "Insônia e Distúrbios do Sono", "Medos e Fobias"];

const events = [
  [eventTransformacao.url, "Congresso Transformação"], [eventParada.url, "Eu Acredito na Parada"],
  [eventEnem.url, "Aulão ENEM Colégio Anglo"], [eventBahia.url, "Congresso Internacional HIPNOBAHIA"],
  [eventBrasilia.url, "Congresso Internacional HIPNODAY"],
];

const media = [
  [mediaVanguarda.url, "Vanguarda Mix (TV Vanguarda)", "https://www.youtube.com/watch?v=oDLRyyCrKLI"],
  [mediaBand.url, "Falando Nisso (TV Band Vale)", "https://www.youtube.com/watch?v=HsrK2KHR7K0"],
  [mediaGlobo.url, "Vida Real (Rede Globo)", "https://www.youtube.com/watch?v=pkvLEEf41Q8"],
  [mediaSbt.url, "Programa PRA VOCÊ (SBT SJC)", "https://youtu.be/7VkDXVAJzks"],
  [mediaModo.url, "Modo Vale (SBT SJC)", "https://youtu.be/7VkDXVAJzks"],
  [mediaRecord.url, "Empresários de Sucesso (Record News)", "https://www.youtube.com/watch?v=mfK3FsVtDZk"],
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ton Lucas | Hipnose e Psicologia" },
    { name: "description", content: "Hipnoterapia com Ton Lucas para superar ansiedade, traumas, medos, fobias e hábitos limitantes." },
    { property: "og:title", content: "Ton Lucas | Hipnose e Psicologia" },
    { property: "og:description", content: "Liberte-se de medos e traumas com hipnoterapia profissional em São José dos Campos ou online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Cta({ children = "Agendar Sessão" }: { children?: string }) {
  return <Button asChild size="lg" className="h-13 rounded-full px-10 text-base font-semibold shadow-[0_12px_35px_var(--primary-shadow)]"><a href={WHATSAPP} target="_blank" rel="noreferrer">{children}<ChevronRight /></a></Button>;
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return <div className="mb-10"><div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary"><span className="h-px w-8 bg-primary" />{eyebrow}</div><h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">{children}</h2></div>;
}

function Index() {
  return <main className="overflow-hidden bg-background text-foreground">
    <section id="inicio" className="relative flex min-h-[760px] items-center border-b border-border bg-cover bg-center md:min-h-screen" style={{ backgroundImage: `url(${hero.url})` }}>
      <picture className="pointer-events-none absolute inset-0 md:hidden"><img src={heroMobile.url} alt="Ton Lucas em cenário de hipnose" className="h-full w-full object-cover" /></picture>
      <div className="absolute inset-0 bg-hero-overlay md:hidden" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-28 md:px-10">
        <div className="max-w-md">
          <img src={logo.url} alt="Ton Lucas — hipnose e psicologia" className="mb-8 h-auto w-48" />
          <h1 className="text-3xl font-medium leading-tight md:text-5xl">Liberte-se de medos e traumas em tempo recorde com <strong className="text-primary">hipnose Resultados comprovados!</strong></h1>
          <p className="mt-6 text-base text-muted-foreground">Descubra como a hipnose pode transformar sua vida.</p>
          <p className="mt-2 font-semibold underline underline-offset-4">Agende sua consulta e inicie uma jornada de transformação hoje mesmo!</p>
          <div className="mt-9"><Cta /></div>
          <div className="mt-9 flex items-start gap-3 text-xs text-muted-foreground"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" /><span>R. Guilherme de Almeida, 162 - Sala 3 - Vila Ema, São José dos Campos - SP</span></div>
        </div>
      </div>
      <a href="#beneficios" aria-label="Ir para benefícios" className="absolute bottom-0 left-1/2 z-20 flex h-12 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background text-primary"><ArrowDown className="size-4" /></a>
    </section>

    <section id="beneficios" className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `linear-gradient(90deg, var(--background) 0%, color-mix(in oklab, var(--background) 91%, transparent) 55%, color-mix(in oklab, var(--background) 58%, transparent) 100%), url(${benefits.url})` }}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.05fr_.95fr] md:px-10">
        <div><SectionTitle eyebrow="Uma abordagem diferente">Por que escolher a hipnose ao invés de <span className="text-primary">terapias convencionais?</span></SectionTitle><p className="max-w-xl leading-relaxed text-muted-foreground">A hipnoterapia oferece uma abordagem única e direcionada para problemas emocionais, comportamentais e psicológicos. Os resultados são rápidos, eficazes e sem os efeitos colaterais comuns das terapias tradicionais.</p></div>
        <div className="grid gap-4">{benefitsList.map(([title,text],i)=><div key={title} className="flex gap-4 border-b border-border py-5"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">0{i+1}</span><p className="text-sm leading-relaxed text-muted-foreground"><strong className="mb-1 block text-base text-foreground">{title}</strong>{text}</p></div>)}</div>
      </div>
    </section>

    <section className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `linear-gradient(90deg, color-mix(in oklab, var(--background) 35%, transparent), var(--background) 54%), url(${problems.url})` }}>
      <picture className="pointer-events-none absolute inset-0 md:hidden"><img src={problemsMobile.url} alt="Pessoa em processo de transformação" className="h-full w-full object-cover opacity-30" /></picture>
      <div className="relative mx-auto max-w-6xl px-6 md:px-10"><div className="ml-auto max-w-3xl"><SectionTitle eyebrow="Transforme sua vida">Ansiedade, emagrecimento, vícios ou <span className="text-primary">medos te limitam?</span></SectionTitle><div className="grid gap-5 sm:grid-cols-2">{issues.map(({icon:Icon,title,text})=><div key={title} className="border-l border-primary/60 bg-surface/70 p-6 backdrop-blur-sm"><Icon className="mb-4 size-7 text-primary"/><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div><div className="mt-9"><Cta>Clique aqui para mudar</Cta></div></div></div>
    </section>

    <section className="border-y border-border bg-surface py-24"><div className="mx-auto max-w-6xl px-6 md:px-10"><SectionTitle eyebrow="Depoimentos">Transformações <span className="text-primary">Reais</span></SectionTitle><p className="-mt-5 mb-10 text-muted-foreground">Veja como a hipnoterapia tem ajudado centenas de pessoas a transformar suas vidas.</p><div className="grid gap-5 md:grid-cols-3">{reviews.map(r=><article key={r.name} className="rounded-md border border-border bg-card p-6"><div className="mb-5 flex items-center gap-1 text-rating">{[1,2,3,4,5].map(x=><Star key={x} className="size-4 fill-current"/>)}</div><p className="text-sm leading-7 text-muted-foreground">“{r.text}”</p><div className="mt-6 border-t border-border pt-5"><strong>{r.name}</strong><span className="block text-xs text-muted-foreground">{r.date} · Avaliação Google</span></div></article>)}</div></div></section>

    <section className="py-24 md:py-32"><div className="mx-auto max-w-6xl px-6 md:px-10"><SectionTitle eyebrow="Tratamentos disponíveis">Saiba como a hipnose pode <span className="text-primary">ajudar em cada caso</span></SectionTitle><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{treatments.map((t,i)=><div key={t} className="group flex min-h-28 items-center gap-4 bg-card p-6"><span className="font-mono text-xs text-primary">0{i+1}</span><h3 className="font-semibold">{t}</h3><ArrowDown className="ml-auto size-4 -rotate-90 text-muted-foreground transition-transform group-hover:translate-x-1"/></div>)}</div><p className="mt-8 max-w-2xl text-muted-foreground">Cada uma dessas condições pode ser tratada com uma abordagem única, personalizada de acordo com as suas necessidades.</p><div className="mt-8"><Cta/></div></div></section>

    <section className="relative min-h-[850px] bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `url(${about.url})` }}><picture className="pointer-events-none absolute inset-0 md:hidden"><img src={aboutMobile.url} alt="Ton Lucas, psicólogo e hipnólogo" className="h-full w-full object-cover" /></picture><div className="absolute inset-0 bg-about-overlay md:hidden"/><div className="relative mx-auto max-w-6xl px-6 md:px-10"><div className="ml-auto max-w-xl"><SectionTitle eyebrow="Quem sou eu">Experiência, ciência e compromisso com a <span className="text-primary">sua transformação</span></SectionTitle><p className="leading-7 text-muted-foreground">Olá, sou Ton Lucas, Psicólogo especializado em Terapia Cognitivo-Comportamental (TCC) e Hipnólogo. Desde 2013, tenho ajudado centenas de pessoas a superar traumas, bloqueios emocionais e encontrar a liberdade emocional através de abordagens integradas e eficazes.</p><p className="mt-5 leading-7 text-muted-foreground">Meu objetivo é proporcionar a você uma nova vida, livre das amarras de problemas emocionais que te impedem de crescer e alcançar o seu verdadeiro potencial.</p><h3 className="mt-9 text-lg font-semibold text-primary">Experiência e Qualificações</h3><ul className="mt-4 grid gap-3 text-sm text-muted-foreground">{["Psicólogo graduado pela Universidade Maurício de Nassau","Hipnoterapeuta Internacional OMNI","Master in Hypnotherapy, com James Tripp","Integrative Hypnosis, com Melissa Tiers","Advanced Hypnosis Techniques — Dave Elman Hypnosis Institute","Membro da National Guild of Hypnotists","Mais de 900 clientes atendidos e 5000 alunos formados"].map(x=><li key={x} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary"/>{x}</li>)}</ul></div></div></section>

    <section className="bg-surface py-24"><div className="mx-auto max-w-6xl px-6 md:px-10"><SectionTitle eyebrow="Autoridade">Palestrante nos eventos mais <span className="text-primary">importantes do país</span></SectionTitle><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{events.map(([img,title])=><figure key={title} className="group overflow-hidden rounded-md border border-border bg-card"><img src={img} alt={title} className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105"/><figcaption className="p-4 text-sm font-medium leading-snug">{title}</figcaption></figure>)}</div></div></section>

    <section className="py-24"><div className="mx-auto max-w-6xl px-6 md:px-10"><SectionTitle eyebrow="Participações na mídia">Hipnose em grandes <span className="text-primary">canais e programas</span></SectionTitle><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{media.map(([img,title,url])=><a key={title} href={url} target="_blank" rel="noreferrer" className="group"><div className="relative overflow-hidden rounded-md border border-border"><img src={img} alt={title} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute inset-0 flex items-center justify-center bg-media-overlay"><CirclePlay className="size-14 text-primary"/></span></div><h3 className="mt-4 font-semibold group-hover:text-primary">{title}</h3></a>)}</div><a href="https://hipnosebr.com.br/hipnose-como-ela-pode-mudar-sua-vida-revista-superinteressante-tonlucas/" target="_blank" rel="noreferrer" className="mt-12 grid items-center gap-8 border-y border-border py-8 md:grid-cols-[220px_1fr]"><img src={magazine.url} alt="Matéria de capa na Revista Superinteressante" className="mx-auto h-64 object-contain"/><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Revista Superinteressante</span><h3 className="mt-3 text-2xl font-semibold">Matéria de capa: Hipnose — como ela pode mudar sua vida</h3><p className="mt-3 text-muted-foreground">Leia a participação especial de Ton Lucas na edição de abril de 2022.</p></div></a></div></section>

    <section className="border-y border-border bg-surface py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-10"><div><SectionTitle eyebrow="Presencial e online">Atendimento de qualquer lugar do <span className="text-primary">Brasil ou do mundo</span></SectionTitle><p className="leading-7 text-muted-foreground">As sessões online são realizadas através de videochamada, proporcionando total privacidade e conforto, com a mesma abordagem eficaz e personalizada do atendimento presencial.</p><div className="mt-8"><Cta>Agende online ou presencial</Cta></div></div><div className="flex aspect-square items-center justify-center bg-session-pattern"><div className="flex size-52 items-center justify-center rounded-full border border-primary/40 bg-primary/5"><div className="flex size-36 items-center justify-center rounded-full border border-primary/70"><MoonStar className="size-16 text-primary"/></div></div></div></div></section>

    <section className="py-28 text-center"><div className="mx-auto max-w-3xl px-6"><Sparkles className="mx-auto mb-7 size-8 text-primary"/><h2 className="text-3xl font-semibold md:text-5xl">Está na hora de agir e <span className="text-primary">transformar sua vida.</span></h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">Seja para superar um trauma, controlar a ansiedade ou vencer uma fobia, a hipnose é a chave para a mudança. Agende sua consulta agora.</p><div className="mt-9"><Cta/></div></div></section>

    <footer className="border-t border-border bg-surface py-9"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-center text-xs text-muted-foreground md:flex-row md:px-10 md:text-left"><img src={logo.url} alt="Ton Lucas" className="w-36"/><span>R. Guilherme de Almeida, 162 — São José dos Campos — SP</span><span>© 2026 Ton Lucas</span></div></footer>
    <Button asChild size="icon" className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl hover:bg-whatsapp/90"><a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle className="size-7"/></a></Button>
  </main>;
}