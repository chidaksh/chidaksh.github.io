import React, { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  User,
  Code,
  ExternalLink,
  ChevronRight,
  MonitorPlay,
  Database,
  ShieldCheck,
  Zap,
  Menu,
  X,
  FileDown,
  BookOpen,
  Trophy,
  Send,
  MapPin,
  Calendar
} from 'lucide-react';

const NavItem = ({ label, href, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
      active
        ? 'bg-emerald-500/10 text-emerald-400'
        : 'text-gray-500 hover:text-emerald-400 hover:bg-white/5'
    }`}
  >
    {label}
  </a>
);

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 px-6 max-w-5xl mx-auto scroll-mt-20 ${className}`}>
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-100 tracking-tight">{title}</h2>
      <div className="w-12 h-1 bg-emerald-500 mt-3 rounded-full"></div>
    </div>
    {children}
  </section>
);

const ProjectCard = ({ title, date, org, description, links }) => (
  <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-gray-100 mb-1">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
           <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">{org}</span>
           <span className="text-gray-500 text-xs font-mono">{date}</span>
        </div>
      </div>
      <div className="flex gap-2">
        {links?.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-all"
            title={link.label}
          >
            {link.icon === "code" ? <Code size={18} /> : link.icon === "play" ? <MonitorPlay size={18} /> : <ExternalLink size={18} />}
          </a>
        ))}
      </div>
    </div>
    <ul className="space-y-3 text-gray-400 text-sm leading-relaxed flex-grow">
      {description.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PubCard = ({ pub }) => (
  <div className={`group relative p-8 bg-white/5 rounded-3xl border border-white/10 ${pub.classes.border} hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300`}>
    <div className="flex flex-col md:flex-row gap-6">
      <div className={`shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl ${pub.classes.bg} ${pub.classes.text} font-black text-xl`}>
        {pub.year}
      </div>
      <div className="flex-1">
        <span className={`px-2 py-1 ${pub.classes.badge} text-[10px] font-bold uppercase rounded tracking-widest mb-2 inline-block font-mono`}>{pub.venue}</span>
        <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors">{pub.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{pub.authors.split('Chidaksh Ravuru').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="text-gray-100 font-bold">Chidaksh Ravuru</span>}
          </React.Fragment>
        ))}</p>
        {pub.link && (
          <a href={pub.link} target="_blank" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:gap-3 transition-all">
            Read Paper <ChevronRight size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const conferencePubs = [
  {
    year: '2026',
    venue: 'COLM 2026 (Under Review)',
    title: 'Unmasking Spurious Correlations to Fix Text Classifiers',
    authors: 'Chidaksh Ravuru, Shashank Srivastava',
    classes: { bg: 'bg-orange-500/10', text: 'text-orange-400', badge: 'bg-orange-500/15 text-orange-400', border: 'hover:border-orange-500/30' }
  },
  {
    year: '2026',
    venue: 'ACM FAccT',
    title: 'Can LLMs Understand What We Cannot Say? Measuring Multilevel Alignment Through Abortion Stigma',
    authors: 'Anika Sharma, Malvika Mampally, Chidaksh Ravuru, Kandyce Brennan, Neil Gaikwad',
    link: 'https://arxiv.org/pdf/2512.13142',
    classes: { bg: 'bg-sky-500/10', text: 'text-sky-400', badge: 'bg-sky-500/15 text-sky-400', border: 'hover:border-sky-500/30' }
  },
  {
    year: '2024',
    venue: 'KDD',
    title: 'Agentic Retrieval-Augmented Generation for Time Series Analysis',
    authors: 'Chidaksh Ravuru, Sagar Srinivas Sakhinana, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.14484',
    classes: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', badge: 'bg-indigo-500/15 text-indigo-400', border: 'hover:border-indigo-500/30' }
  },
  {
    year: '2024',
    venue: 'Preprint',
    title: 'RESTORE Graph Embedding Assessment Through Reconstruction',
    authors: 'Hong Yung Yip, Chidaksh Ravuru, Neelabha Banerjee, Shashwat Jha, Amit Sheth, Aman Chadha, Amitava Das',
    link: 'https://arxiv.org/pdf/2308.14659',
    classes: { bg: 'bg-purple-500/10', text: 'text-purple-400', badge: 'bg-purple-500/15 text-purple-400', border: 'hover:border-purple-500/30' }
  }
];

const workshopPubs = [
  {
    year: '2024',
    venue: 'ICML Workshop',
    title: 'Parameter-Efficient Quantized Mixture-of-Experts Meets Vision-Language Instruction Tuning',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.15305',
    classes: { bg: 'bg-teal-500/10', text: 'text-teal-400', badge: 'bg-teal-500/15 text-teal-400', border: 'hover:border-teal-500/30' }
  },
  {
    year: '2024',
    venue: 'AAAI DAI Workshop',
    title: 'Reprogramming Foundational LLMs for Enterprise Adoption for Spatio-Temporal Forecasting Applications',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.14387',
    classes: { bg: 'bg-teal-500/10', text: 'text-teal-400', badge: 'bg-teal-500/15 text-teal-400', border: 'hover:border-teal-500/30' }
  },
  {
    year: '2024',
    venue: 'ICML Workshop',
    title: 'Foundational Model for Electron Micrograph Analysis — Instruction-Tuning Small-Scale Language-and-Vision Assistant for Enterprise',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/abs/2408.13248',
    classes: { bg: 'bg-teal-500/10', text: 'text-teal-400', badge: 'bg-teal-500/15 text-teal-400', border: 'hover:border-teal-500/30' }
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'experience', 'projects', 'research', 'teaching', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Teaching', href: '#teaching', id: 'teaching' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold transform group-hover:rotate-12 transition-transform">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-100">
              Chidaksh <span className="text-emerald-400">Ravuru</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl">
            {navItems.map(item => (
              <NavItem key={item.id} label={item.label} href={item.href} active={activeTab === item.id} onClick={() => setActiveTab(item.id)} />
            ))}
          </div>

          <button className="md:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex flex-col gap-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === item.id ? 'bg-emerald-500/10 text-emerald-400' : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative pt-40 pb-24 overflow-hidden dot-grid">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Roles // 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-8 leading-tight">
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Reliable & Aligned</span> AI
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              MS CS student at UNC Chapel Hill, advised by <strong className="text-gray-200">Prof. Shashank Srivastava</strong>. I build and evaluate autonomous agentic systems and study the safety and alignment of multimodal LLMs. My research spans <strong className="text-gray-200">RL alignment</strong>, <strong className="text-gray-200">multilevel evaluation methodologies</strong>, and <strong className="text-gray-200">reliable foundation models</strong> — published at KDD, ACM FAccT, and ICML/AAAI workshops.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="mailto:chidakshravuru@gmail.com" className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-3">
                <Mail size={20} /> Let's Connect
              </a>
              <a href="/Chidaksh_Ravuru_CV.pdf" target="_blank" className="bg-white/5 text-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10">
                <FileDown size={20} /> Resume / CV
              </a>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/chidaksh/" target="_blank" className="p-4 text-gray-600 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-2xl transition-all border border-white/10"><Linkedin size={20} /></a>
                <a href="https://github.com/chidaksh" target="_blank" className="p-4 text-gray-600 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-2xl transition-all border border-white/10"><Github size={20} /></a>
                <a href="https://scholar.google.com/citations?user=kxuIl3wAAAAJ&hl=en" target="_blank" className="p-4 text-gray-600 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-2xl transition-all border border-white/10"><GraduationCap size={20} /></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="relative aspect-[4/5] bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
              <img src="/profile.jpg" alt="Chidaksh Ravuru" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-slate-900/50 rounded-[4rem]">
        <div className="space-y-12">
          {[
            {
              date: 'Aug 2024 - Present',
              role: 'Graduate Research Assistant',
              company: 'UNC Chapel Hill — Advised by Prof. Shashank Srivastava',
              points: [
                'Built a 4-stage automated pipeline (discovery, validation, causal verification, debiasing) using causal mediation analysis and TCAVs to surface spurious shortcuts in text classifiers, reducing causal reliance by 60% and improving ANLI by +4.6%p and HANS by +9.2%p.',
                'Applied DFR debiasing on RoBERTa, improving HANS non-entailment accuracy from 38.9% to 66.6% with only -1.4%p MNLI-m drop. Extended pipeline to RewardBench2 for analyzing spurious patterns in reward model preference data.'
              ]
            },
            {
              date: 'Jun 2025 - Aug 2025',
              role: 'Applied Scientist Intern',
              company: 'Pavo AI, San Francisco',
              points: [
                'Built PersonaBench, a synthetic dataset of 3,000 positive/negative trajectories using a student-teacher framework where the student extracts company profiles from the web, the teacher verifies sources and flags hallucinations, and LLMs generate persona-conditioned reasoning traces.',
                'Trained persona-conditioned Process Reward Models (PRMs) on PersonaBench, conditioning on both correctness and persona fit to guide search-space exploration, improving the planning agent\'s task performance by 10% in a production customer-facing product.'
              ]
            },
            {
              date: 'Jan 2024 - May 2024',
              role: 'Research Assistant',
              company: 'Indian Institute of Technology, Delhi',
              points: [
                'Managed data design, collection, and evaluation for video-face recognition research in law enforcement scenarios.',
                'Deployed state-of-the-art face recognition models achieving 85% Top-1 accuracy on subjects with variations in height and angle.'
              ]
            },
            {
              date: 'May 2023 - Aug 2023',
              role: 'Machine Learning Research Intern',
              company: 'Tata Research Development and Design Centre, Bangalore',
              points: [
                'Built and deployed an end-to-end agentic RAG system for time series analysis, handling data ingestion, retrieval orchestration, and multi-step generation, achieving 12% improvement in prediction accuracy.',
                'Designed an automated benchmarking system across diverse task benchmarks that measured model accuracy, flagged regressions, and drove 18% performance gains through targeted fine-tuning iterations.'
              ]
            }
          ].map((exp, idx) => (
            <div key={idx} className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-1">
                <span className="font-mono text-sm font-black text-emerald-400 uppercase tracking-widest">{exp.date}</span>
              </div>
              <div className="md:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{exp.role}</h3>
                <p className="text-emerald-400 font-bold mb-6">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex gap-4 text-gray-400 leading-relaxed">
                      <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-emerald-500"></div>
                      <p>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" title="Core Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="UNMASK — Causal Verification of Spurious Shortcuts"
            date="2025-2026"
            org="COLM 2026 (Under Review)"
            description={[
              "Built a 4-stage pipeline (discovery, validation, causal verification, debiasing) using causal mediation analysis and TCAVs on MNLI, surfacing 7-8 causally verified spurious features from 625 candidates.",
              "Reduced causal reliance by 60%, improved ANLI by +4.6%p and HANS by +9.2%p. Extended pipeline to RewardBench2 for reward model analysis."
            ]}
          />
          <ProjectCard
            title="OncoAgentMTB"
            date="2025"
            org="MedGemma Challenge"
            description={[
              "Designed a 3-stage multi-agent pipeline using Google's HAI-DEF ecosystem (MedGemma 1.5, 27B, TxGemma) for molecular tumor board automation.",
              "Achieved 79% somatic variant classification accuracy and F1 of 0.73 on PubMedQA, reducing clinical prep from ~3 hours to <30 minutes per patient."
            ]}
          />
          <ProjectCard
            title="Soccer Commentary Generation"
            date="2024"
            org="Multimodal Research"
            description={[
              "Built a browser automation pipeline using Playwright and BeautifulSoup to collect video data from YouTube, handling dynamic rendering, rate limiting, and structured metadata extraction.",
              "Fine-tuned a video-language model with progressive fine-tuning after diagnosing a temporal consistency failure mode, improving BLEU-4 by 322% and CIDEr by 72%."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/SoccerCommentary"},
              {icon: "external", label: "Arxiv", url: "https://arxiv.org/pdf/2508.07543"}
            ]}
          />
          <ProjectCard
            title="Intelligent Planner — Dynamic LLM Query Router"
            date="2024"
            org="Full-Stack AI System"
            description={[
              "Fine-tuned a Llama-3.1-8B classifier on a custom synthetic dataset to route queries to specialized LLMs, improving MMLU by 5% and GSM8K by 3% over single-model baselines.",
              "Engineered end-to-end deployment with FastAPI backend, React frontend, and a continuous evaluation system that monitors model quality and flags regressions."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/PrismLLM"},
              {icon: "external", label: "Report", url: "https://github.com/chidaksh/PrismLLM/blob/master/Intelligent_Planner.pdf"}
            ]}
          />
          <ProjectCard
            title="PredictiveAgent — NL2PQL"
            date="2024"
            org="Kumo.ai Ecosystem"
            description={[
              "Built an autonomous agentic system to convert natural language into PQL for Relational Foundation Models with automatic graph denormalization.",
              "Delivered data-driven strategy reports with native explanations for zero-shot relational predictions."
            ]}
            links={[
              {icon: "code", label: "Github", url: "https://github.com/chidaksh/NL2PQL"},
              {icon: "play", label: "Live Demo", url: "https://nl2pql.streamlit.app"}
            ]}
          />
          <ProjectCard
            title="Comparative Analysis of LLM Agents for API Tool Use"
            date="2024"
            org="Inter IIT Techfest"
            description={[
              "Evaluated agentic reasoning strategies (CoT, ReAct, DFSDT) across tool-selection accuracy and response latency for production deployment.",
              "Demonstrated CoT achieves 87.5% tool-selection accuracy while being 5x faster than DFSDT-based ToolLLM framework."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/InterIIT/tree/master/InterIIT24"},
              {icon: "external", label: "Report", url: "https://github.com/chidaksh/InterIIT/blob/master/InterIIT24/Final_Report.pdf"}
            ]}
          />
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research & Publications">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 font-mono">Conference & Journal Papers</h3>
        <div className="grid gap-6 mb-16">
          {conferencePubs.map((pub, idx) => <PubCard key={idx} pub={pub} />)}
        </div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 font-mono">Workshop Papers</h3>
        <div className="grid gap-6">
          {workshopPubs.map((pub, idx) => <PubCard key={idx} pub={pub} />)}
        </div>
      </Section>

      {/* Teaching & Service Section */}
      <Section id="teaching" title="Teaching & Service">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-emerald-400" /> Teaching
            </h3>
            <div className="space-y-6">
              {[
                {
                  role: 'Summer School Teacher',
                  org: 'UNC School of Medicine',
                  date: 'Summer 2025',
                  detail: 'Delivered lecture series on statistics and ML fundamentals including linear regression and SVMs, applied to neuroscience and medical imagery, for high school students.'
                },
                {
                  role: 'Graduate Teaching Assistant',
                  org: 'UNC Chapel Hill, DATA 110',
                  date: '2025 - Present',
                  detail: 'Lead lab recitations covering probability, statistics, and Python for 60+ undergraduates in Intro to Data Science.'
                },
                {
                  role: 'Undergraduate Teaching Assistant',
                  org: 'IIT Dharwad',
                  date: '2024',
                  detail: 'Assisted with introductory courses in C, Python, and Software Systems Lab. Delivered workshops and guest lectures.'
                }
              ].map((t, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-gray-100">{t.role}</h4>
                  <p className="text-emerald-400 text-sm font-semibold">{t.org}</p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1 mb-3 font-mono">{t.date}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-100 mb-6 flex items-center gap-2">
              <User size={20} className="text-emerald-400" /> Academic Service
            </h3>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-gray-100 mb-4">Conference Reviewer</h4>
              <div className="space-y-3">
                {[
                  { venue: 'ACL', full: 'Association for Computational Linguistics' },
                  { venue: 'EMNLP', full: 'Empirical Methods in Natural Language Processing' },
                  { venue: 'ICLR', full: 'International Conference on Learning Representations' }
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-100 font-mono">{r.venue}</span>
                      <span className="text-gray-500 text-sm ml-2">— {r.full}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
              <h4 className="font-bold text-gray-100 mb-4">Community Leadership</h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2"></div>
                <div>
                  <span className="font-bold text-gray-100">Space Data Science Club Secretary</span>
                  <span className="text-gray-500 text-sm ml-2">— IIT Dharwad, 2021-2023</span>
                  <p className="text-gray-400 text-sm mt-1">Directed a 30-member team, secured investments from ISRO, and trained 50+ students in Python and data visualization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Band */}
      <div className="bg-emerald-500/5 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-100 mb-8 text-center flex items-center justify-center gap-2">
            <Trophy size={22} className="text-emerald-400" /> Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Top 1% Selected',
                detail: 'Google Research Week, Bangalore',
                year: '2024'
              },
              {
                title: '4th Place',
                detail: 'Inter IIT Tech Meet — Open Domain QA',
                year: '2023'
              },
              {
                title: 'MLSS 2022, Krakow',
                detail: 'Fully Funded International Scholarship',
                year: '2022'
              }
            ].map((award, i) => (
              <div key={i} className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 text-center">
                <p className="text-emerald-400 font-black text-lg mb-1">{award.title}</p>
                <p className="text-gray-400 text-sm">{award.detail}</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2 font-mono">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills & Education Section */}
      <div id="skills" className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent)]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <GraduationCap className="text-emerald-500" /> Education
              </h2>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-white/10">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-2 font-mono">2024 - Present</p>
                  <h4 className="text-2xl font-bold mb-1">MS in Computer Science</h4>
                  <p className="text-gray-400 font-medium">UNC Chapel Hill</p>
                  <p className="text-sm text-gray-500 mt-2">GPA 4.0/4.0 | Advised by Prof. Shashank Srivastava</p>
                  <p className="text-sm text-gray-500 mt-1">Reliable ML, LLM Alignment & Evaluation</p>
                </div>
                <div className="relative pl-8 border-l-2 border-white/10">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2 font-mono">2020 - 2024</p>
                  <h4 className="text-2xl font-bold mb-1">B.Tech in Computer Science</h4>
                  <p className="text-gray-400 font-medium">IIT Dharwad</p>
                  <p className="text-sm text-gray-500 mt-2">GPA 9.24/10 | Advised by Prof. Prabuchandran K.J. & Prof. Rajshekhar Bhat</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" /> Core Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Reliable ML", "LLM Alignment", "RLHF / DPO", "Multimodal Safety", "Agentic Orchestration", "Model Evaluation", "Information Retrieval", "Graph Neural Networks", "Medical AI", "Time Series Analysis"].map(s => (
                  <span key={s} className="px-5 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 font-semibold text-sm">
                    {s}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-emerald-500" /> Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "JAX", "TensorFlow", "HuggingFace", "LangGraph", "LlamaIndex", "MONAI", "PEFT/LoRA", "vLLM", "Docker", "AWS", "GCP", "Databricks", "Django", "React", "TypeScript", "PostgreSQL"].map(s => (
                  <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <section id="contact" className="scroll-mt-20 relative overflow-hidden">
        <div className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 py-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 font-mono">
              <Send size={14} /> Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
              I'm actively looking for research and industry roles starting 2026. Whether it's a collaboration, a role, or just a conversation about AI alignment, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:chidakshravuru@gmail.com" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-3">
                <Mail size={20} /> chidakshravuru@gmail.com
              </a>
              <a href="/Chidaksh_Ravuru_CV.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10 flex items-center gap-3">
                <FileDown size={20} /> Download CV
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/chidaksh/" target="_blank" className="p-4 text-gray-500 hover:text-emerald-400 hover:bg-white/5 rounded-2xl transition-all"><Linkedin size={22} /></a>
              <a href="https://github.com/chidaksh" target="_blank" className="p-4 text-gray-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all"><Github size={22} /></a>
              <a href="https://scholar.google.com/citations?user=kxuIl3wAAAAJ&hl=en" target="_blank" className="p-4 text-gray-500 hover:text-emerald-400 hover:bg-white/5 rounded-2xl transition-all"><GraduationCap size={22} /></a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500 text-sm font-mono">
              <span className="flex items-center gap-2"><MapPin size={14} /> Chapel Hill, NC</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> Available from May 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-black">
          &copy; 2026 Chidaksh Ravuru
        </p>
      </footer>
    </div>
  );
};

export default App;
