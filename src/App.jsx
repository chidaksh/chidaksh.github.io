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
  Trophy
} from 'lucide-react';

const NavItem = ({ label, href, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? 'bg-blue-50 text-blue-600 shadow-sm'
        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
    }`}
  >
    {label}
  </a>
);

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 px-6 max-w-5xl mx-auto scroll-mt-20 ${className}`}>
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      <div className="w-12 h-1 bg-blue-600 mt-3 rounded-full"></div>
    </div>
    {children}
  </section>
);

const ProjectCard = ({ title, date, org, description, links }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
           <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{org}</span>
           <span className="text-gray-400 text-xs">{date}</span>
        </div>
      </div>
      <div className="flex gap-2">
        {links?.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            title={link.label}
          >
            {link.icon === "code" ? <Code size={18} /> : link.icon === "play" ? <MonitorPlay size={18} /> : <ExternalLink size={18} />}
          </a>
        ))}
      </div>
    </div>
    <ul className="space-y-3 text-gray-600 text-sm leading-relaxed flex-grow">
      {description.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-blue-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const PubCard = ({ pub }) => (
  <div className={`group relative p-8 bg-white rounded-3xl border border-gray-100 ${pub.classes.border} hover:shadow-xl transition-all duration-300`}>
    <div className="flex flex-col md:flex-row gap-6">
      <div className={`shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl ${pub.classes.bg} ${pub.classes.text} font-black text-xl`}>
        {pub.year}
      </div>
      <div className="flex-1">
        <span className={`px-2 py-1 ${pub.classes.badge} text-[10px] font-bold uppercase rounded tracking-widest mb-2 inline-block`}>{pub.venue}</span>
        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{pub.title}</h4>
        <p className="text-gray-500 text-sm mb-4">{pub.authors.split('Chidaksh Ravuru').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="text-gray-900 font-bold">Chidaksh Ravuru</span>}
          </React.Fragment>
        ))}</p>
        {pub.link && (
          <a href={pub.link} target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all">
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
    venue: 'ACM FAccT',
    title: 'Can LLMs Understand What We Cannot Say? Measuring Multilevel Alignment Through Abortion Stigma',
    authors: 'Anika Sharma, Malvika Mampally, Chidaksh Ravuru, Kandyce Brennan, Neil Gaikwad',
    link: 'https://arxiv.org/pdf/2512.13142',
    classes: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', border: 'hover:border-blue-200' }
  },
  {
    year: '--',
    venue: 'COLM 2026 (Under Review)',
    title: 'Unmasking Spurious Correlations to Fix Text Classifiers',
    authors: 'Chidaksh Ravuru, Shashank Srivastava',
    classes: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', border: 'hover:border-orange-200' }
  },
  {
    year: '2024',
    venue: 'KDD',
    title: 'Agentic Retrieval-Augmented Generation for Time Series Analysis',
    authors: 'Chidaksh Ravuru, Sagar Srinivas Sakhinana, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.14484',
    classes: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700', border: 'hover:border-indigo-200' }
  },
  {
    year: '2024',
    venue: 'Preprint',
    title: 'RESTORE: Graph Embedding Assessment Through Reconstruction',
    authors: 'Hong Yung Yip, Chidaksh Ravuru, Neelabha Banerjee, Shashwat Jha, Amit Sheth, Aman Chadha, Amitava Das',
    link: 'https://arxiv.org/pdf/2308.14659',
    classes: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', border: 'hover:border-purple-200' }
  }
];

const workshopPubs = [
  {
    year: '2024',
    venue: 'ICML Workshop',
    title: 'Parameter-Efficient Quantized Mixture-of-Experts Meets Vision-Language Instruction Tuning',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.15305',
    classes: { bg: 'bg-teal-50', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700', border: 'hover:border-teal-200' }
  },
  {
    year: '2024',
    venue: 'AAAI DAI Workshop',
    title: 'Reprogramming Foundational LLMs for Enterprise Adoption for Spatio-Temporal Forecasting Applications',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/pdf/2408.14387',
    classes: { bg: 'bg-teal-50', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700', border: 'hover:border-teal-200' }
  },
  {
    year: '2024',
    venue: 'ICML Workshop',
    title: 'Foundational Model for Electron Micrograph Analysis: Instruction-Tuning Small-Scale Language-and-Vision Assistant for Enterprise',
    authors: 'Sagar Srinivas Sakhinana, Chidaksh Ravuru, Geethan Sannidhi, Venkataramana Runkana',
    link: 'https://arxiv.org/abs/2408.13248',
    classes: { bg: 'bg-teal-50', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700', border: 'hover:border-teal-200' }
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'research', 'experience', 'teaching', 'projects', 'skills'];
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
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Teaching', href: '#teaching', id: 'teaching' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold transform group-hover:rotate-12 transition-transform">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Chidaksh <span className="text-blue-600">Ravuru</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-xl">
            {navItems.map(item => (
              <NavItem key={item.id} label={item.label} href={item.href} active={activeTab === item.id} onClick={() => setActiveTab(item.id)} />
            ))}
          </div>

          <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Open to Research & Industry Roles — 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reliable & Aligned</span> AI
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              MS CS student at UNC Chapel Hill, advised by <strong>Prof. Shashank Srivastava</strong>. I build and evaluate autonomous agentic systems and study the safety and alignment of multimodal LLMs. My research spans <strong>RL alignment</strong>, <strong>multilevel evaluation methodologies</strong>, and <strong>reliable foundation models</strong> — published at KDD, ACM FAccT, and ICML/AAAI workshops.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="mailto:chidakshravuru@gmail.com" className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 flex items-center gap-3">
                <Mail size={20} /> Let's Connect
              </a>
              <a href="/Chidaksh_Ravuru_CV.pdf" target="_blank" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl shadow-gray-200 flex items-center gap-3 border border-gray-200">
                <FileDown size={20} /> Resume / CV
              </a>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/chidaksh/" target="_blank" className="p-4 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all border border-gray-100"><Linkedin size={20} /></a>
                <a href="https://github.com/chidaksh" target="_blank" className="p-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-2xl transition-all border border-gray-100"><Github size={20} /></a>
                <a href="https://scholar.google.com/citations?user=kxuIl3wAAAAJ&hl=en" target="_blank" className="p-4 text-gray-500 hover:text-blue-400 hover:bg-blue-50 rounded-2xl transition-all border border-gray-100"><GraduationCap size={20} /></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
              <img src="/profile.jpg" alt="Chidaksh Ravuru" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Research Section */}
      <Section id="research" title="Research & Publications">
        <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-6">Conference & Journal Papers</h3>
        <div className="grid gap-6 mb-16">
          {conferencePubs.map((pub, idx) => <PubCard key={idx} pub={pub} />)}
        </div>
        <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-6">Workshop Papers</h3>
        <div className="grid gap-6">
          {workshopPubs.map((pub, idx) => <PubCard key={idx} pub={pub} />)}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-gray-50/50 rounded-[4rem]">
        <div className="space-y-12">
          {[
            {
              date: 'Aug 2024 - Present',
              role: 'Graduate Research Assistant',
              company: 'UNC Chapel Hill — Advisor: Prof. Shashank Srivastava',
              points: [
                'Researching spurious correlations in text classifiers and developing methods to unmask and mitigate dataset biases.',
                'Investigating multilevel alignment evaluation methodologies for large language models across cognitive, interpersonal, and structural dimensions.'
              ]
            },
            {
              date: 'Summer 2025',
              role: 'Applied Scientist Intern',
              company: 'Pavo AI, San Francisco',
              points: [
                'Curated PersonaBench, a synthetic dataset of 3,000 conversational trajectories to evaluate AI agents across brand personalities.',
                'Developed strategic alignment metrics for reward model fine-tuning, achieving a 10% increase in agent persona adherence.'
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
              date: 'Summer 2023',
              role: 'Machine Learning Intern',
              company: 'Tata Research Data and Development Centre',
              points: [
                'Developed an Agentic-RAG system that improved temporal forecasting accuracy by 12% via autonomous tool selection.',
                'Boosted anomaly detection performance by 18% across 400 benchmarks using specialized Small Language Models (SLMs).'
              ]
            }
          ].map((exp, idx) => (
            <div key={idx} className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-1">
                <span className="text-sm font-black text-gray-400 uppercase tracking-widest">{exp.date}</span>
              </div>
              <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                <p className="text-blue-600 font-bold mb-6">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                      <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-blue-600"></div>
                      <p>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Teaching & Service Section */}
      <Section id="teaching" title="Teaching & Service">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" /> Teaching
            </h3>
            <div className="space-y-6">
              {[
                {
                  role: 'Summer School Teacher',
                  org: 'UNC School of Medicine',
                  date: 'Summer 2025',
                  detail: 'Delivered lecture series on statistics and ML (linear regression, SVMs) for neuroscience and medical imagery to high school students.'
                },
                {
                  role: 'Graduate Teaching Assistant',
                  org: 'UNC Chapel Hill — DATA 110',
                  date: '2025 - Present',
                  detail: 'Lead lab recitations covering probability, statistics, and Python for 60+ undergraduates in Intro to Data Science.'
                },
                {
                  role: 'Undergraduate Teaching Assistant',
                  org: 'IIT Dharwad',
                  date: '2024',
                  detail: 'Assisted with Intro to C, Python, and Software Systems Lab. Delivered workshops and guest lectures.'
                }
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900">{t.role}</h4>
                  <p className="text-blue-600 text-sm font-semibold">{t.org}</p>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1 mb-3">{t.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User size={20} className="text-blue-600" /> Academic Service
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">Conference Reviewer</h4>
              <div className="space-y-3">
                {[
                  { venue: 'ACL', full: 'Association for Computational Linguistics' },
                  { venue: 'EMNLP', full: 'Empirical Methods in Natural Language Processing' },
                  { venue: 'ICLR', full: 'International Conference on Learning Representations' }
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-900">{r.venue}</span>
                      <span className="text-gray-400 text-sm ml-2">— {r.full}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-6">
              <h4 className="font-bold text-gray-900 mb-4">Community Leadership</h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></div>
                <div>
                  <span className="font-bold text-gray-900">Space Data Science Club Secretary</span>
                  <span className="text-gray-400 text-sm ml-2">— IIT Dharwad, 2021-2023</span>
                  <p className="text-gray-600 text-sm mt-1">Directed a 30-member team, secured investments from ISRO, and trained 50+ students in Python and data visualization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Band */}
      <div className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <Trophy size={22} className="text-blue-600" /> Awards & Recognition
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
              <div key={i} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm text-center">
                <p className="text-blue-600 font-black text-lg mb-1">{award.title}</p>
                <p className="text-gray-600 text-sm">{award.detail}</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-2">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <Section id="projects" title="Core Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="PredictiveAgent: NL2PQL"
            date="2024"
            org="Kumo.ai Ecosystem"
            description={[
              "Built an autonomous agentic system to convert natural language into PQL for Relational Foundation Models.",
              "Designed 'Query-First' schema architecture for automatic graph denormalization.",
              "Delivered data-driven strategy reports with native explanations for zero-shot relational predictions."
            ]}
            links={[
              {icon: "code", label: "Github", url: "https://github.com/chidaksh/NL2PQL"},
              {icon: "play", label: "Live Demo", url: "https://nl2pql.streamlit.app"}
            ]}
          />
          <ProjectCard
            title="OncoAgentMTB"
            date="2025"
            org="MedGemma Challenge"
            description={[
              "Designed a 3-stage multi-agent pipeline using Google's HAI-DEF ecosystem (MedGemma 1.5, 27B, TxGemma).",
              "Achieved 79% somatic variant accuracy and reduced clinical prep time from 3 hours to 30 minutes.",
              "Automated multimodal data mapping for complex oncology cases."
            ]}
          />
          <ProjectCard
            title="Soccer Commentary Gen"
            date="2024"
            org="Multimodal Research"
            description={[
              "Addressed 50% BERT score degradation in long-form video models on short highlights via temporal optimization.",
              "Boosted zero-shot performance by 5.1% and improved BLEU-4 by 322%.",
              "Progressive fine-tuning strategy for adapting foundational vision-language models to short-form video highlights."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/SoccerCommentary"},
              {icon: "external", label: "Arxiv", url: "https://arxiv.org/pdf/2508.07543"}
            ]}
          />
          <ProjectCard
            title="Explainable BrainSformer"
            date="2024"
            org="UNC Chapel Hill"
            description={[
              "Developed Swin UNETR and 3D transformer architectures for volumetric medical segmentation.",
              "Achieved 95.45% Dice score on BraTS 2020 core regions.",
              "Integrated voxel-level clinical explainability using LRP and Grad-CAM++."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://drive.google.com/drive/folders/1k5_SycVpegTsB6DyQMM4N9fFyyx-KPTA?usp=sharing"},
              {icon: "external", label: "Report", url: "https://drive.google.com/file/d/1nbmn6CdoRU7MxpGb7stNprMlg6LcH9y4/view?usp=sharing"}
            ]}
          />
          <ProjectCard
            title="Intelligent Query Planner"
            date="2024"
            org="Agentic Research"
            description={[
              "Architected a dynamic query router using Llama-3.1-8B to orchestrate specialized foundation models.",
              "Boosted performance on GSM8K by 3% via dynamic logic-routing.",
              "Engineered real-time orchestration platform using Django and React."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/PrismLLM"},
              {icon: "external", label: "Report", url: "https://github.com/chidaksh/PrismLLM/blob/master/Intelligent_Planner.pdf"}
            ]}
          />
          <ProjectCard
            title="Behavioral Persona Pipeline"
            date="2025"
            org="Independent"
            description={[
              "Evaluation pipeline for studying population-level responses to LLM outputs across 216+ unique personas.",
              "Element-level attribution using GPT-4o for safety and skeptic trigger mapping.",
              "Research into cultural alignment and nuance in high-stakes messaging."
            ]}
            links={[
              {icon: "code", label: "Code", url: "https://github.com/chidaksh/MedCreatives"},
              {icon: "external", label: "Report", url: "https://github.com/chidaksh/MedCreatives/blob/master/Persona%20Designing.pdf"}
            ]}
          />
        </div>
      </Section>

      {/* Skills Dark Section */}
      <div id="skills" className="bg-gray-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <GraduationCap className="text-blue-500" /> Education
              </h2>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-2">2024 - Present</p>
                  <h4 className="text-2xl font-bold mb-1">MS in Computer Science</h4>
                  <p className="text-gray-400 font-medium">UNC Chapel Hill</p>
                  <p className="text-sm text-gray-500 mt-2">GPA: 4.0/4.0 — Advisor: Prof. Shashank Srivastava</p>
                  <p className="text-sm text-gray-500 mt-1">Focus: Reliable ML, LLM Alignment & Evaluation</p>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">2020 - 2024</p>
                  <h4 className="text-2xl font-bold mb-1">B.Tech in Computer Science</h4>
                  <p className="text-gray-400 font-medium">IIT Dharwad</p>
                  <p className="text-sm text-gray-500 mt-2">GPA: 9.24/10 — Advisors: Prof. Prabuchandran K.J. & Prof. Rajshekhar Bhat</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="text-blue-500" /> Core Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Reliable ML", "LLM Alignment", "RLHF / DPO", "Multimodal Safety", "Agentic Orchestration", "Model Evaluation", "Information Retrieval", "Graph Neural Networks", "Medical AI", "Time Series Analysis"].map(s => (
                  <span key={s} className="px-5 py-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-semibold text-sm">
                    {s}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-blue-500" /> Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "JAX", "TensorFlow", "HuggingFace", "LangGraph", "LlamaIndex", "MONAI", "PEFT/LoRA", "vLLM", "Docker", "AWS", "GCP", "Databricks", "Django", "React", "TypeScript", "PostgreSQL"].map(s => (
                  <span key={s} className="px-4 py-2 bg-gray-800 rounded-xl text-sm font-medium border border-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-20 bg-white text-center border-t border-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
             <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">
               CR
             </div>
             <div className="flex gap-6">
                <a href="mailto:chidakshravuru@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
                <a href="https://github.com/chidaksh" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/chidaksh/" target="_blank" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
                <a href="https://scholar.google.com/citations?user=kxuIl3wAAAAJ&hl=en" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors"><GraduationCap size={20} /></a>
             </div>
             <p className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-black">
               &copy; 2026 Chidaksh Ravuru
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
