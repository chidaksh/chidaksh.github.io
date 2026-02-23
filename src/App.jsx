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
  Zap
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
           <span className="text-gray-400 text-xs">• {date}</span>
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

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'research', 'experience', 'projects', 'skills'];
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
            <NavItem label="About" href="#about" active={activeTab === 'about'} onClick={() => setActiveTab('about')} />
            <NavItem label="Research" href="#research" active={activeTab === 'research'} onClick={() => setActiveTab('research')} />
            <NavItem label="Experience" href="#experience" active={activeTab === 'experience'} onClick={() => setActiveTab('experience')} />
            <NavItem label="Projects" href="#projects" active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
            <NavItem label="Skills" href="#skills" active={activeTab === 'skills'} onClick={() => setActiveTab('skills')} />
          </div>
        </div>
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
              MS Candidate @ UNC Chapel Hill
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reliable & Aligned</span> AI
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              I am a Machine Learning researcher focused on building autonomous agentic systems and evaluating the safety and alignment of multimodal LLMs. My interests lie in <strong>RL alignment</strong>, <strong>multilevel evaluation methodologies</strong>, and building <strong>reliable foundation models</strong>.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="mailto:chidakshravuru@gmail.com" className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 flex items-center gap-3">
                <Mail size={20} /> Let's Connect
              </a>
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/chidaksh" target="_blank" className="p-4 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all border border-gray-100"><Linkedin size={20} /></a>
                <a href="https://github.com/chidaksh" target="_blank" className="p-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-2xl transition-all border border-gray-100"><Github size={20} /></a>
                <a href="https://scholar.google.com" target="_blank" className="p-4 text-gray-500 hover:text-blue-400 hover:bg-blue-50 rounded-2xl transition-all border border-gray-100"><GraduationCap size={20} /></a>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center text-blue-100">
              <User size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </header>

      {/* Research Section */}
      <Section id="research" title="Research & Publications">
        <div className="grid gap-6">
          {[
            {
              year: '2026',
              venue: 'ACM FAccT',
              title: 'Can LLMs Understand What We Cannot Say? Measuring Multilevel Alignment Through Abortion Stigma',
              authors: 'Anika Sharma, Malvika Mampally, Chidaksh Ravuru, Kandyce Brennan, Neil Gaikwad',
              link: 'https://arxiv.org/pdf/2512.13142',
              color: 'blue'
            },
            {
              year: '--',
              venue: 'Ongoing',
              title: 'Unmasking Spurious Correlations to Fix Text Classifiers',
              authors: 'Chidaksh Ravuru, Shashank Srivastava',
              color: 'orange'
            },
            {
              year: '2024',
              venue: 'KDD',
              title: 'Agentic Retrieval-Augmented Generation for Time Series Analysis',
              authors: 'Chidaksh Ravuru, Sagar Srinivas Sakhinana, Venkataramana Runkana',
              link: 'https://arxiv.org/pdf/2408.14484',
              color: 'indigo'
            },
            {
              year: '2024',
              venue: 'Preprint',
              title: 'RESTORE: Graph Embedding Assessment Through Reconstruction',
              authors: 'Hong Yung Yip, Chidaksh Ravuru, Neelabha Banerjee, Shashwat Jha, Amit Sheth, Aman Chadha, Amitava Das',
              link: 'https://arxiv.org/pdf/2308.14659',
              color: 'purple'
            }
          ].map((pub, idx) => (
            <div key={idx} className={`group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-${pub.color}-200 hover:shadow-xl transition-all duration-300`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-${pub.color}-50 text-${pub.color}-600 font-black text-xl`}>
                  {pub.year}
                </div>
                <div className="flex-1">
                  <span className={`px-2 py-1 bg-${pub.color}-100 text-${pub.color}-700 text-[10px] font-bold uppercase rounded tracking-widest mb-2 inline-block`}>{pub.venue}</span>
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
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-gray-50/50 rounded-[4rem]">
        <div className="space-y-12">
          {[
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
                  <p className="text-sm text-gray-500 mt-2">GPA: 4.0/4.0 • Focus: Reliable ML & Alignment</p>
                </div>
                <div className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                  <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">2020 - 2024</p>
                  <h4 className="text-2xl font-bold mb-1">B.Tech in Computer Science</h4>
                  <p className="text-gray-400 font-medium">IIT Dharwad</p>
                  <p className="text-sm text-gray-500 mt-2">GPA: 9.24/10 • Top 10% of class</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="text-blue-500" /> Core Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Reliable ML", "LLM Alignment", "RLHF / DPO", "Multimodal Safety", "Agentic Orchestration", "Model Evaluation"].map(s => (
                  <span key={s} className="px-5 py-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-semibold text-sm">
                    {s}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-blue-500" /> Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "JAX", "HuggingFace", "LangGraph", "LlamaIndex", "MONAI", "PEFT/LoRA", "AWS", "Databricks", "Django"].map(s => (
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
                <a href="https://linkedin.com/in/chidaksh" target="_blank" className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
             </div>
             <p className="text-gray-300 text-[10px] uppercase tracking-[0.2em] font-black">
               © 2026 Chidaksh Ravuru
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
