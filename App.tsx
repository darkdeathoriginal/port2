import React, { useState } from 'react';
import { Page } from './types';
import { SketchButton } from './components/SketchButton';
import { SketchCard } from './components/SketchCard';
import { StatMeter } from './components/StatMeter';
import { ShadowCompanion } from './components/ShadowCompanion';
import { 
  Map, 
  Hammer, 
  Scroll, 
  Skull, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Flame,
  Smartphone,
  Server,
  Code
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-700">
            <div className="relative">
               <div className="w-48 h-48 rounded-full border-4 border-ds-paper overflow-hidden bg-ds-ink flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anwin&backgroundColor=b6e3f4&clothing=hoodie&eyes=surprised" 
                    alt="Avatar" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
               </div>
               {/* Decor behind avatar */}
               <div className="absolute -inset-4 border-2 border-ds-red rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-50"></div>
            </div>

            <div className="max-w-3xl bg-ds-dark/80 p-6 border-2 border-ds-gray backdrop-blur-sm transform rotate-1">
              <h1 className="font-sketch text-6xl md:text-8xl text-ds-paper mb-2">Anwin Sharon</h1>
              <h2 className="font-typewriter text-xl md:text-2xl text-ds-red mb-6">Full-Stack Developer & Automation Crafter</h2>
              <p className="font-typewriter text-ds-paper-dark text-lg leading-relaxed">
                "Day 784: I have established a stronghold in the ecosystem. 
                Proficient in the ancient arts of React, SwiftUI, and Node.js. 
                I build tools to survive the digital wilderness and optimize for sanity."
              </p>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
                <SketchButton onClick={() => setCurrentPage(Page.PROJECTS)}>
                    <span className="flex items-center gap-2"><Hammer size={20}/> View Inventions</span>
                </SketchButton>
                <SketchButton onClick={() => setCurrentPage(Page.CONTACT)} variant="secondary">
                    <span className="flex items-center gap-2"><Map size={20}/> Send Signal</span>
                </SketchButton>
            </div>
          </div>
        );

      case Page.ABOUT:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
            <div className="space-y-6">
                <SketchCard title="Survival Stats" className="h-auto">
                    <div className="space-y-6 mt-4">
                        <StatMeter label="Sanity (Logic)" value={90} max={100} color="#9ec2e6" />
                        <StatMeter label="Health (Coffee)" value={75} max={100} color="#8a2c2c" />
                        <StatMeter label="Hunger (Learning)" value={98} max={100} color="#e6b845" />
                        <hr className="border-ds-ink border-dashed my-4" />
                        <div className="font-typewriter text-sm">
                            <p className="mb-2"><strong className="text-ds-red-dark">Character Traits:</strong></p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Polyglot:</strong> Speaks JS, Swift, Python, and C++.</li>
                                <li><strong>Automator:</strong> Can craft bots to perform tedious tasks.</li>
                                <li><strong>Mobile Expert:</strong> Adept at crafting portable artifacts (iOS Apps).</li>
                            </ul>
                        </div>
                    </div>
                </SketchCard>

                <SketchCard title="Inventory (Skills)">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-sketch text-xl text-ds-red mb-2">Web & Backend</h4>
                            <div className="flex flex-wrap gap-2">
                                {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'Firebase', 'PostgreSQL', 'Prisma'].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-ds-ink text-ds-paper border border-ds-gray font-typewriter text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-sketch text-xl text-ds-red mb-2">Mobile & Systems</h4>
                            <div className="flex flex-wrap gap-2">
                                {['SwiftUI', 'React Native', 'Python', 'C++', 'Docker', 'AWS', 'Git'].map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-ds-ink text-ds-paper border border-ds-gray font-typewriter text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </SketchCard>
            </div>

            <div className="space-y-6">
                <SketchCard title="Adventure Log">
                    <div className="space-y-6 font-typewriter text-sm h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        
                        <div className="relative pl-4 border-l-2 border-ds-red">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-ds-red rounded-full"></div>
                            <h4 className="font-bold text-lg">iOS Application Development Intern</h4>
                            <p className="text-ds-gray italic">Infosys | Apr 2025 – May 2025</p>
                            <p className="mt-1">Developing a lightweight iOS library management application using Agile methodologies and Scrum practices.</p>
                        </div>

                        <div className="relative pl-4 border-l-2 border-ds-gray">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-ds-ink border-2 border-ds-paper rounded-full"></div>
                            <h4 className="font-bold text-lg">iOS Student Developer</h4>
                            <p className="text-ds-gray italic">iOS Center, SRM | May 2024 – Present</p>
                            <p className="mt-1">Building an iOS app for study material memorization with AI integration for flashcards and quizzes. Implemented Firebase auth.</p>
                        </div>

                        <div className="relative pl-4 border-l-2 border-ds-gray">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-ds-ink border-2 border-ds-paper rounded-full"></div>
                            <h4 className="font-bold text-lg">Open Source Contributor</h4>
                            <p className="text-ds-gray italic">GramJS | Jan 2024 – Present</p>
                            <p className="mt-1">Contributed to Node.js project for Telegram MTProto API. Improved file upload memory usage.</p>
                        </div>

                        <div className="relative pl-4 border-l-2 border-ds-gray">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-ds-ink border-2 border-ds-paper rounded-full"></div>
                            <h4 className="font-bold text-lg">SRM Institute of Science & Technology</h4>
                            <p className="text-ds-gray italic">B.Tech Computer Science | 2022 – 2026</p>
                            <p className="mt-1">GPA: 8.12/10. Coursework in Advanced Programming, Networks, and Systems.</p>
                        </div>

                    </div>
                </SketchCard>
            </div>
          </div>
        );

      case Page.PROJECTS:
        return (
          <div className="max-w-6xl mx-auto animate-in zoom-in-95 duration-500">
             <h2 className="font-sketch text-6xl text-ds-paper text-center mb-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                 <span className="border-b-4 border-ds-red px-4">Crafted Inventions</span>
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <ProjectCard 
                    title="Acadia" 
                    tags={['Next.js', 'Node.js', 'Real-time']}
                    description="A web application for SRM students to check attendance, timetables, and marks in real time. Features a clean dark mode UI and smooth animations."
                />

                <ProjectCard 
                    title="Darkbot" 
                    tags={['Telegram API', 'GramJS', 'Node.js']}
                    description="A versatile Telegram bot capable of operating both user and bot accounts. Features external plugin support and bot integration."
                />

                <ProjectCard 
                    title="Hydra" 
                    tags={['Discord.js', 'Automation', 'Game Dev']}
                    description="Multi-purpose Discord bot with auto-role assignment, YouTube notifications, manga downloader, and mini-games like Tic Tac Toe."
                />

                <ProjectCard 
                    title="Social Transfer" 
                    tags={['OAuth', 'Security', 'Data Handling']}
                    description="Platform to facilitate seamless and secure data transfer across various social media platforms with privacy focus."
                />

             </div>
          </div>
        );

      case Page.CONTACT:
        return (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-top-5 duration-700">
            <SketchCard title="Send a Crow">
                <div className="space-y-6">
                    <p className="text-center font-typewriter">
                        "The distance is great, but the birds are fast. Send word to <span className="text-ds-red font-bold">anwinsharon@gmail.com</span>."
                    </p>
                    
                    <div className="flex flex-col gap-4">
                        <a href="mailto:anwinsharon@gmail.com" className="group flex items-center gap-4 p-4 border-2 border-ds-ink bg-ds-paper hover:bg-ds-red hover:text-white hover:border-white transition-all duration-300 transform hover:-rotate-1 cursor-pointer">
                            <Mail size={28} />
                            <div>
                                <div className="font-sketch text-2xl">Email Frequency</div>
                                <div className="font-typewriter text-sm opacity-80">anwinsharon@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://github.com/darkdeathoriginal" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 border-2 border-ds-ink bg-ds-paper hover:bg-ds-red hover:text-white hover:border-white transition-all duration-300 transform hover:rotate-1 cursor-pointer">
                            <Github size={28} />
                            <div>
                                <div className="font-sketch text-2xl">Github Repository</div>
                                <div className="font-typewriter text-sm opacity-80">github.com/darkdeathoriginal</div>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/anwin-sharon-a30344250" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 border-2 border-ds-ink bg-ds-paper hover:bg-ds-red hover:text-white hover:border-white transition-all duration-300 transform hover:-rotate-1 cursor-pointer">
                            <Linkedin size={28} />
                            <div>
                                <div className="font-sketch text-2xl">LinkedIn Network</div>
                                <div className="font-typewriter text-sm opacity-80">Connect on LinkedIn</div>
                            </div>
                        </a>
                        
                        <a href="https://anwinsharon.com" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 border-2 border-ds-ink bg-ds-paper hover:bg-ds-red hover:text-white hover:border-white transition-all duration-300 transform hover:rotate-1 cursor-pointer">
                            <ExternalLink size={28} />
                            <div>
                                <div className="font-sketch text-2xl">Personal Domain</div>
                                <div className="font-typewriter text-sm opacity-80">anwinsharon.com</div>
                            </div>
                        </a>
                    </div>
                </div>
            </SketchCard>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen w-full text-ds-paper relative selection:bg-ds-red selection:text-white pb-20">
      
      {/* Background elements for atmosphere */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-paper-fibers.png')] opacity-30 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      
      {/* Navigation */}
      <nav className="relative z-40 p-6 flex justify-center md:justify-between items-center w-full max-w-7xl mx-auto">
        <div className="hidden md:block font-sketch text-4xl text-ds-paper cursor-pointer hover:text-ds-red transition-colors" onClick={() => setCurrentPage(Page.HOME)}>
            ANWIN<span className="text-ds-red">_SHARON</span>
        </div>
        
        <div className="flex gap-2 md:gap-6 bg-ds-dark/90 p-3 rounded-sm border border-ds-gray shadow-lg transform rotate-1">
            <NavButton active={currentPage === Page.HOME} onClick={() => setCurrentPage(Page.HOME)} icon={<Flame size={18}/>} label="Camp" />
            <NavButton active={currentPage === Page.ABOUT} onClick={() => setCurrentPage(Page.ABOUT)} icon={<Scroll size={18}/>} label="Log" />
            <NavButton active={currentPage === Page.PROJECTS} onClick={() => setCurrentPage(Page.PROJECTS)} icon={<Hammer size={18}/>} label="Crafts" />
            <NavButton active={currentPage === Page.CONTACT} onClick={() => setCurrentPage(Page.CONTACT)} icon={<Map size={18}/>} label="Map" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-30 px-4 py-8 w-full max-w-7xl mx-auto">
        {renderContent()}
      </main>

      {/* Shadow AI */}
      <ShadowCompanion />
    </div>
  );
};

// Helper component for Nav
const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
    <button 
        onClick={onClick}
        className={`
            font-sketch text-2xl px-3 py-1 flex items-center gap-2 transition-all duration-300
            ${active 
                ? 'text-ds-red border-b-2 border-ds-red scale-110' 
                : 'text-ds-paper-dark hover:text-ds-paper hover:-translate-y-1'
            }
        `}
    >
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </button>
);

const ProjectCard: React.FC<{ title: string; tags: string[]; description: string }> = ({ title, tags, description }) => (
    <SketchCard className="flex flex-col h-full">
        <div className="border-b-2 border-ds-ink mb-3 pb-2 flex justify-between items-end">
            <h3 className="font-sketch text-3xl font-bold text-ds-red-dark">{title}</h3>
            <div className="flex gap-1">
               <div className="w-3 h-3 rounded-full bg-ds-red"></div>
               <div className="w-3 h-3 rounded-full bg-ds-gray"></div>
            </div>
        </div>
        <p className="font-typewriter text-sm mb-4 flex-grow leading-relaxed">
            {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
                <span key={tag} className="text-xs font-bold bg-ds-gray/20 px-2 py-1 rounded text-ds-ink">
                    #{tag}
                </span>
            ))}
        </div>
        <div className="flex gap-2 mt-auto">
            <button className="flex-1 text-center py-1 border border-ds-ink font-sketch text-xl hover:bg-ds-red hover:text-white transition-colors bg-ds-paper-dark">Inspect</button>
        </div>
    </SketchCard>
);

export default App;