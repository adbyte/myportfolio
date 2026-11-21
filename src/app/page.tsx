"use client";



import { useEffect, useState, useRef } from "react";

import { supabase } from "@/lib/supabase";



const projects = [
  { number:"01", type:"PROCESS INTELLIGENCE · IN PROGRESS", name:"PIVerse", description:"An AI platform exploring workflow reconstruction, bottleneck discovery and what-if simulation to identify where human-led, automated or agent-assisted processes make sense.", tags:["Process intelligence","Workflow reconstruction","What-if simulation","AI transformation"], result:"In progress", links:[], featured:true, media:[] },
  { number:"02", type:"AI AGENT · IN PROGRESS", name:"HuntMyHead", description:"An AI-assisted job-search workspace designed to help research opportunities, organize applications, prepare tailored materials and manage follow-ups.", tags:["AI agents","Job search","Automation","Product thinking"], result:"In progress", links:[], featured:true, media:[] },
  { number:"03", type:"AI · DOCUMENT CREATION", name:"DOCLY", description:"AI-Powered Intelligent Document Creation, developed as an academic project for the B.Tech degree in Computer Science at Jaypee Institute of Information Technology.", tags:["AI","Document creation","Academic project"], result:"Academic project · 2025", links:[], featured:true, media:[] },
  { number:"04", type:"BEHAVIOURAL TECHNOLOGY · ACADEMIC", name:"EmoQuest", description:"An affective behaviour detection system using gameplay mechanisms to study behavioural patterns through game-based interaction.", tags:["Affective behaviour","Gameplay","Academic project"], result:"Academic project · 2025", links:[], featured:true, media:[] },
  { number:"05", type:"EDTECH · ACADEMIC ANALYTICS", name:"EduSight", description:"An AI-powered academic monitoring and anomaly-detection project exploring automated attendance tracking and grading insights.", tags:["Education technology","Monitoring","Anomaly detection"], result:"Academic project", links:[], featured:true, media:[] },
  { number:"06", type:"SOCIAL IMPACT · PRODUCT", name:"QEasy", description:"A virtual queue-management system developed during COVID-19 to reduce physical queues and crowding at local stores while enabling social distancing. Customers select a store and time slot, receive a confirmation token and visit during their allotted window.", tags:["Social impact","Local commerce","Queue management","COVID-19"], result:"Tested with 50+ shopkeepers and 100+ consumers", links:[], featured:true, media:[] },
  { number:"07", type:"CYBERSECURITY · SOCIAL IMPACT", name:"ORO", description:"A mobile application designed to help people seek cybercrime redressal while protecting privacy. Users can consult cyber experts for free and access daily tips, expert articles and weekly quizzes to improve cybersecurity awareness.", tags:["Cybersecurity","Digital safety","Mobile application"], result:"Recognised by Cyber Peace Foundation and Centre for Research of Cyber Crime", links:[], featured:true, media:[] },
  { number:"08", type:"SUSTAINABILITY · SOCIAL IMPACT", name:"EEDO", description:"An Android application connecting electronic-waste generators with authorised recyclers to enable environmentally responsible e-waste disposal.", tags:["Sustainability","E-waste","Android","Social impact"], result:"Global Winner · Technovation Challenge 2018", links:[], featured:true, media:[] },
  { number:"09", type:"EDUCATION · SOCIAL IMPACT", name:"Freebo", description:"An award-winning mobile app providing free books to people who want to study but cannot afford them. Books can be discovered by title, author, location and class, encouraging book reuse and reducing paper waste.", tags:["Education","Book donation","Social impact","Sustainability"], result:"Published on Play Store · downloads from 5+ countries", links:[], featured:true, media:[] },
];



const milestones = [
  {
    year: "2026",
    title: "Runner's Up at Moody's Tech Verse Challenge",
    issuer: "Moody's · Associated with Moody's Ratings",
    issued: "Sep 2026",
    body: "Identified a critical organisational challenge, conceptualised an AI-driven solution, and led its end-to-end workflow development and presentation to senior leadership. Recognised as 'Runner-Up in Moody’s organisation-wide hackathon', competing to identify and solve real workplace challenges through innovation."
  },
  {
    year: "2021",
    title: "Winner of India's Future Founder's Competiton, UQ Qlab Ventures 2021",
    issuer: "University of Queensland",
    issued: "Dec 2021",
    body: "",
    links: [{ label: "READ FEATURE", url: "https://ventures.uq.edu.au/blog/2022/03/high-school-students-discover-inner-entrepreneur" }]
  },
  {
    year: "2021",
    title: "Winner at Study with Australia Video Competition 2020-21",
    issuer: "Australian Trade and Investment Commission",
    issued: "Jan 2021",
    body: "International Winner by beating thousands of schools from across South Asia."
  },
  {
    year: "2021",
    title: "Winner of eRaksha Competition 2020-21 | Tech Avishkar Category",
    issuer: "Cyber Peace Foundation",
    issued: "Jan 2021",
    body: "",
    links: [{ label: "VIEW HALL OF FAME", url: "https://www.eraksha.net/hall-of-fame-2020/" }]
  },
  {
    year: "2020",
    title: "National Finalists in Heroes of Tomorrow 2020 Contest",
    issuer: "Hero Moto Corp and BML Munjal University",
    issued: "Dec 2020",
    body: "Among Top 15 by beating over more than 2200+ entries all over country."
  },
  {
    year: "2020",
    title: "Wai Wai Glocal Teen Hero India 2020 - Runners Up",
    issuer: "Glocal Pvt. Ltd",
    issued: "Dec 2020",
    body: "Selected among the Top 6 finalist across India."
  },
  {
    year: "2020",
    title: "National Finalist in YuWaah Challenge, Design for Change India",
    issuer: "DFC India",
    issued: "Sep 2020",
    body: ""
  },
  {
    year: "2020",
    title: "National Runners Up in CReo Entrepreneurship Competition",
    issuer: "Enquero, CReo",
    issued: "Sep 2020",
    body: ""
  },
  {
    year: "2020",
    title: "Project Showcase at Coolest Projects 2020",
    issuer: "Raspberry Pi",
    issued: "Sep 2020",
    body: ""
  },
  {
    year: "2020",
    title: "Pre-Incubation Opportunity with AGBI",
    issuer: "AGBI, Great Lakes University",
    issued: "Jun 2020",
    body: ""
  },
  {
    year: "2020",
    title: "National Finalist at HackCOVID, IIM",
    issuer: "Indian Institute of Management",
    issued: "May 2020",
    body: ""
  },
  {
    year: "2020",
    title: "Invited to Delaware, USA | Global Finalist at Diamond Challenge 2019",
    issuer: "Horn University, Delaware",
    issued: "Jan 2020",
    body: ""
  },
  {
    year: "2019",
    title: "National Finalist (Among top 20) in Mai Bharat Bol Raha Hu 2019",
    issuer: "Taxab, India",
    issued: "Dec 2019",
    body: ""
  },
  {
    year: "2019",
    title: "Invited to USA | Global Winner at Coolest Projects 2019",
    issuer: "Raspberry Pi",
    issued: "Sep 2019",
    body: ""
  },
  {
    year: "2019",
    title: "Invited to Canberra, Australia | Global Finalist at i-Create Global Student Innovation Challenge 2019",
    issuer: "The Federation of disability information Centres",
    issued: "Aug 2019",
    body: ""
  },
  {
    year: "2019",
    title: "Winner of Nava Bharat Educational Confluence at Amity University 2019",
    issuer: "Amity University Noida",
    issued: "Apr 2019",
    body: ""
  },
  {
    year: "2019",
    title: "Winner of National Science Concours 2019",
    issuer: "National science Concours",
    issued: "Mar 2019",
    body: ""
  },
  {
    year: "2019",
    title: "Global Finalist in Paradigm Challenge 2019",
    issuer: "The Paradigm Group, USA",
    issued: "Feb 2019",
    body: ""
  },
  {
    year: "2018",
    title: "Task Completor at Google Code In 2018",
    issuer: "Google",
    issued: "Nov 2018",
    body: ""
  },
  {
    year: "2018",
    title: "Global Senior Gold Scholarship Winner at Technovation 2018 | Invited to San Francisco, USA",
    issuer: "Technovation",
    issued: "Aug 2018",
    body: "Led the team to be the GLOBAL WINNERS at World Pitch Summit of Technovation Challenge 2018. Won the highest honours while representing India at the global stage in San Francisco by winning among more than 20,000 participants from over 150 countries.",
    links: [
      { label: "FEATURED AT GMA", url: "https://www.goodmorningamerica.com/culture/story/super-smart-teen-girls-india-invented-app-deal-58412285" },
      { label: "FEATURED AT ADOBE", url: "https://blog.adobe.com/en/publish/2018/08/01/adobe-mentored-team-wins-gold-at-technovation-world-summit.html" },
      { label: "READ THE JOURNEY", url: "https://www.linkedin.com/pulse/only-team-from-india-reach-finale-global-youth-challenge-shetty/" }
    ]
  },
  {
    year: "2018",
    title: "Invited to Solan | Winner of National Science Concours 2018",
    issuer: "National science Concours",
    issued: "Jun 2018",
    body: ""
  },
  {
    year: "2017",
    title: "Finalist of Google Code to Learn 2017",
    issuer: "Google",
    issued: "Sep 2017",
    body: ""
  },
  {
    year: "2016",
    title: "Winner of Google Code to Learn 2016",
    issuer: "Google",
    issued: "Sep 2016",
    body: "",
    links: [{ label: "FEATURED AT GOOGLE FOR DEVELOPERS INDIA", url: "https://www.youtube.com/watch?v=1cmWokmsfP4" }]
  }
];



const experiences = [
  {
    id: "moodys",
    number: "01",
    period: "JAN 2026 — PRESENT",
    company: "Moody's Ratings",
    role: "AI Product Analyst Intern",
    location: "GURGAON, INDIA",
    direction: "APPLIED AI SYSTEMS",
    description:
      "Working at the intersection of enterprise products, engineering and applied AI, transforming complex manual business processes into intelligent, reviewable workflows.",
    contributions: [
      "Led development of a fee-schedule automation platform covering bulk pricing PDF ingestion, structured extraction, review and editing, L1/L2 approvals, and publishing to billing systems.",
      "Built multi-phase multimodal LLM extraction workflows with deterministic business-rule validation and targeted LLM repair.",
      "Worked across Java, Spring Boot, Spring WebFlux, Spring AI, Kafka and Angular.",
      "Contributed to approximately 75% reduction in business process turnaround time."
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "Spring AI",
      "Kafka",
      "Angular",
      "Multimodal LLMs"
    ]
  },
  {
    id: "technovation-board",
    number: "02",
    period: "APR 2025 — APR 2026",
    company: "Technovation",
    role: "Board Member · Alumnae Leadership Board",
    location: "REMOTE · GLOBAL",
    direction: "GLOBAL LEADERSHIP & AI VENTURES",
    description:
      "Selected among the top 10 global representatives, and the only representative from India, to contribute to the Technovation alumnae community and help build opportunities for women in technology.",
    contributions: [
      "Helped bootstrap the AI Ventures Accelerator pilot in India, contributing to its early development and execution.",
      "Led outreach and engagement for the accelerator, helping connect participants with the initiative.",
      "Acted as an AI coach, mentoring teams on identifying impactful AI use cases, solution design, applications and execution.",
      "Contributed to global alumnae initiatives, partnerships and representation."
    ],
    stack: [
      "AI Ventures",
      "Accelerator Strategy",
      "AI Mentorship",
      "Community Building",
      "Outreach"
    ]
  },
  {
    id: "supanote",
    number: "03",
    period: "AUG 2025 — NOV 2025",
    company: "Supanote.ai",
    role: "Automation Engineer Intern",
    location: "REMOTE",
    direction: "AI WORKFLOW AUTOMATION",
    description:
      "Explored how language models, tools and orchestration frameworks can be connected to automate practical workflows.",
    contributions: [
      "Built automation workflows using n8n.",
      "Worked with LangChain and LangGraph.",
      "Explored orchestration patterns for AI-powered workflows and agentic systems."
    ],
    stack: [
      "n8n",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Workflow Automation"
    ]
  },
  {
    id: "ibm",
    number: "04",
    period: "JUN 2025 — JUL 2025",
    company: "IBM × NASSCOM",
    role: "Generative AI Intern",
    location: "REMOTE",
    direction: "MACHINE INTELLIGENCE",
    description:
      "Built foundational experience with generative AI systems and transformer-based language models.",
    contributions: [
      "Worked with BERT and transformer-based architectures.",
      "Explored Hugging Face Transformers.",
      "Studied practical applications of generative AI and NLP."
    ],
    stack: [
      "Generative AI",
      "BERT",
      "Hugging Face",
      "Transformers",
      "NLP"
    ]
  },
  {
    id: "futurelift",
    number: "05",
    period: "APR 2025 — JUN 2025",
    company: "FutureLift",
    role: "Full Stack Intern",
    location: "REMOTE",
    direction: "FULL STACK DEVELOPMENT",
    description:
      "Worked across frontend and backend development, gaining hands-on experience in building and connecting application components.",
    contributions: [
      "Developed frontend interfaces using React.js.",
      "Worked on backend development using C# and .NET.",
      "Used PostgreSQL for application data management."
    ],
    stack: [
      "React.js",
      "C#",
      ".NET",
      "PostgreSQL"
    ]
  },
  {
    id: "farmizen",
    number: "06",
    period: "JAN 2021 — FEB 2021",
    company: "Farmizen",
    role: "Micro Intern",
    location: "DELHI, INDIA",
    direction: "GROWTH & CUSTOMER STRATEGY",
    description:
      "Worked with Farmizen's Founder and CEO on last-mile activation, exploring how customer groups within apartment communities could be converted into active users.",
    contributions: [
      "Studied target customer segments, group-size patterns and last-mile activation challenges.",
      "Mapped customer personas and identified variations in customer behaviour and onboarding needs.",
      "Developed segment-specific strategies to encourage onboarding and activation of customer groups.",
      "Worked on strategies to convert prospective users into active paying groups within apartment communities."
    ],
    stack: [
      "Growth Strategy",
      "Customer Segmentation",
      "Persona Mapping",
      "Last-mile Activation",
      "Market Research"
    ]
  },
  {
    id: "technovation-ambassador",
    number: "07",
    period: "NOV 2018 — NOV 2020",
    company: "Technovation",
    role: "Student Ambassador",
    location: "INDIA",
    direction: "GIRLS IN TECHNOLOGY",
    description:
      "Noticing the gender gap in technology, I started a club to make technology more accessible to girls and help them build confidence through hands-on learning.",
    contributions: [
      "Founded and led a club teaching girls app development, computational thinking and technology concepts.",
      "Reached and mentored more than 1,000 girls across India.",
      "Selected as a Technovation Student Ambassador for three consecutive years.",
      "Collaborated with international initiatives including Girls Code It and Girls Who Code.",
      "Conducted online app-development classes and outreach to encourage more girls to explore technology."
    ],
    stack: [
      "App Development",
      "Computational Thinking",
      "Mentorship",
      "Girls in Tech",
      "Community Building"
    ]
  }
];


function ResumeMenu() {

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null!);



  useEffect(() => {

    function handleClickOutside(event: globalThis.MouseEvent) {

      if (menuRef.current && !menuRef.current.contains(event.target)) {

        setOpen(false);

      }

    }



    function handleEscape(event: globalThis.KeyboardEvent) {

      if (event.key === "Escape") setOpen(false);

    }



    document.addEventListener("mousedown", handleClickOutside);

    document.addEventListener("keydown", handleEscape);



    return () => {

      document.removeEventListener("mousedown", handleClickOutside);

      document.removeEventListener("keydown", handleEscape);

    };

  }, []);



  return (

    <div className="resume-menu" ref={menuRef}>

      <button

        className="resume-trigger"

        onClick={() => setOpen(!open)}

        aria-expanded={open}

        aria-haspopup="true"

      >

        Resume <span>↗</span>

      </button>



      {open && (

        <div className="resume-dropdown">

          <p className="resume-dropdown-label">CHOOSE YOUR VERSION</p>



          <a

            href="/resumes/Aditi%20Jain%201711%20AE.pdf"

            target="_blank"

            rel="noreferrer"

          >

            <strong>Engineering Resume</strong>

            <small>AI · Software · Engineering</small>

            <span>↗</span>

          </a>



          <a

            href="/resumes/Aditi%20Jain%200711%20AP(1).pdf"

            target="_blank"

            rel="noreferrer"

          >

            <strong>Product Resume</strong>

            <small>AI Product · Strategy · Founder's Office</small>

            <span>↗</span>

          </a>

        </div>

      )}

    </div>

  );

}





export default function Home() {

 const [selectedPost, setSelectedPost] = useState<any>(null);
 const [blogLoading, setBlogLoading] = useState(false);
 const [blogError, setBlogError] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("ALL NOTES");

  const [showAllProjects, setShowAllProjects] = useState(false);

  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);

  const [showAllMilestones, setShowAllMilestones] = useState(false);

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const [cursorNote, setCursorNote] = useState("A small corner of the internet, built with curiosity.");

  const [posts, setPosts] = useState<any[]>([]);

  const [managedProjects, setManagedProjects] = useState<any[]>([]);
  const [managedAchievements, setManagedAchievements] = useState<any[]>([]);
  const [projectsFetchFailed, setProjectsFetchFailed] = useState(false);
  const [achievementsFetchFailed, setAchievementsFetchFailed] = useState(false);

  const categories = ["ALL NOTES", ...Array.from(new Set(posts.map(p => p.category)))];
  const visiblePosts = activeCategory === "ALL NOTES" ? posts : posts.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (!supabase) {
      setProjectsFetchFailed(true);
      setAchievementsFetchFailed(true);
      return;
    }

    let cancelled = false;
    const loadContent = async () => {
      const [blogResult, projectResult, achievementResult] = await Promise.all([
        supabase.from("blog_posts").select("title,slug,category,excerpt,published_at").eq("published", true).order("published_at", { ascending: false }),
        supabase.from("portfolio_projects").select("*").order("sort_order", { ascending: true }),
        supabase.from("portfolio_achievements").select("*").order("sort_order", { ascending: true })
      ]);
      if (cancelled) return;
      if (!blogResult.error) setPosts(blogResult.data || []);
      if (projectResult.error) {
        console.error("portfolio_projects fetch failed:", projectResult.error);
        setProjectsFetchFailed(true);
      } else {
        setManagedProjects(projectResult.data || []);
        setProjectsFetchFailed(false);
      }
      if (achievementResult.error) {
        console.error("portfolio_achievements fetch failed:", achievementResult.error);
        setAchievementsFetchFailed(true);
      } else {
        setManagedAchievements(achievementResult.data || []);
        setAchievementsFetchFailed(false);
      }
    };
    loadContent();
    return () => { cancelled = true; };
  }, []);

  // Database records are authoritative when queries succeed. Static arrays are fallback only.
  const allProjects = projectsFetchFailed ? projects : managedProjects.map((p:any,i:number)=>({
    ...p,
    number:String(i+1).padStart(2,'0'),
    type:p.type || p.category || "PROJECT",
    tags:Array.isArray(p.tags)?p.tags:[],
    links:Array.isArray(p.links)?p.links:[],
    media:Array.isArray(p.media)?p.media:[],
    featured:p.featured ?? true
  }));

  const allMilestones = achievementsFetchFailed ? milestones : managedAchievements.map((a:any)=>({
    year:a.year,title:a.title,body:a.body,kind:a.kind,evidence:a.evidence_url,
    media:Array.isArray(a.media)?a.media:[],url:a.video_url,url2:a.press_url,
    source:a.video_url?"WATCH VIDEO":undefined,source2:a.press_url?"READ PRESS":undefined,
    issuer:a.issuer,issued:a.issued,links:Array.isArray(a.links)?a.links:[]
  }));


  async function openBlog(slug: string) {
    if (!supabase) {
      setBlogError("The blog service is not connected right now.");
      setSelectedPost({ slug });
      return;
    }

    setBlogLoading(true);
    setBlogError("");
    setSelectedPost({ slug, loading: true });

    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) {
      setBlogError("This article could not be loaded. Please try again.");
      setBlogLoading(false);
      return;
    }

    setSelectedPost(data);
    setBlogLoading(false);
  }

  useEffect(() => {
    if (!selectedPost && !blogError) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
        setBlogError("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost, blogError]);

  return (

    <main onMouseMove={(e)=>{const el=(e.target as HTMLElement).closest('[data-fun]');if(el)setCursorNote(el.getAttribute('data-fun')||'Curiosity looks good on you.');}} onMouseLeave={()=>setCursorNote("A small corner of the internet, built with curiosity.")}>

      <div className="topline"><span>AJ<span className="dot">.</span></span><span>INDEPENDENT MIND · ENGINEERING PRACTICE</span><span>INDIA / 2026</span></div>

      <header className="nav-wrap">

        <a className="brand" href="#top" aria-label="Aditi Jain home">AJ<span>.</span></a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>

<nav className={menuOpen ? "nav open" : "nav"}>
          {[
            ["Journey", "#journey"],
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Writing", "#writing"],
            ["About", "#about"]
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <ResumeMenu />
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            LET’S TALK <span>↗</span>
          </a>
        </nav>





      </header>



      <section className="hero section-shell" id="top">

        <div className="hero-meta"><span><i className="status-dot"/> OPEN TO SELECT OPPORTUNITIES</span><span>AI ENGINEER / APPLIED AI / SYSTEMS BUILDING / AI PRODUCT MANAGER / PRODUCT THINKING</span></div>

        <div className="hero-grid">

          <div className="hero-copy">

            <p className="eyebrow">THE MIND BEHIND THE MAKING</p>

            <h1>Find the<br/>real problem<span className="punct">.</span><br/><span className="outline-word">Build</span><br/>what matters<span className="punct">.</span></h1>

            <p className="hero-sub">Founder mindset. Product thinking. AI systems builder.</p>

            <p className="hero-description">Questioning the obvious . Finding purpose in problems</p>

            <div className="hero-actions"><a className="button button-dark" href="#work">EXPLORE MY WORK <span>↗</span></a><a className="text-link" href="#journey">MY JOURNEY <span>↓</span></a></div>

          </div>

          <div className="hero-art hero-portrait" aria-label="Portrait illustration" data-fun="I started exploring technology while I was still in school. The curiosity never really left.">

           <img
        src="/images/mypic2.jpeg"
         alt="Aditi Jain"
         className="portrait-image"
/>

            <div className="portrait-caption"><span>ADITI JAIN</span><small>CURIOUS BY DEFAULT · BUILDER BY CHOICE</small></div>

            <div className="art-label art-label-top">FIG. 001 / THE PERSON BEHIND THE PROCESS</div>

            <div className="art-label art-label-bottom">OBSERVE → QUESTION → BUILD</div>

          </div>{/*

            <div className="art-label art-label-top">FIG. 001 / A STUDY IN CURIOSITY</div>

            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orbit orbit-three"></div>

            <div className="core"><span>IDEA</span><b>↗</b></div>

            <div className="node node-a">QUESTION<br/><small>01 / OBSERVE</small></div>

            <div className="node node-b">PROBLEM<br/><small>02 / DEFINE</small></div>

            <div className="node node-c">BUILD<br/><small>03 / MAKE</small></div>

            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>

            <div className="art-label art-label-bottom">CURIOSITY → CLARITY → CREATION</div>

          */}

        </div>

        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>01 — 07</span></div>

      </section>





<section className="intro-band" id="how-i-think">

  <div className="section-shell intro-grid">



    <div className="intro-visual">

      <img

        src="/images/thoughtful.png"

        alt="Illustration representing curiosity and exploration"

      />

      <span className="visual-note">A mind in progress.</span>

    </div>



    <div className="intro-copy">

      <p className="eyebrow">

        HOW I THINK <span>— 01</span>

      </p>



      <h2>

        I thrive in the space between

        <em> what I know</em> and

        <em> what I have yet to figure out.</em>

      </h2>



      <p className="body-large">

        Understanding something never makes me want to stop.

        It reveals what I haven't understood yet. I question

        assumptions, follow unfamiliar ideas and turn what I

        discover into something useful.

      </p>



      <div className="curiosity-model">

        <div className="curiosity-point">

          <span>01</span>

          <strong>What I know</strong>

        </div>



        <div className="curiosity-gap">

          <span />

          <small>THE UNKNOWN</small>

          <span />

        </div>



        <div className="curiosity-point">

          <span>02</span>

          <strong>What I want to know</strong>

        </div>

      </div>



      <div className="curiosity-footer">

        <p>QUESTION <span>→</span> EXPLORE <span>→</span> UNDERSTAND <span>→</span> REPEAT</p>



        <div className="gap-discovery">

          <button

            type="button"

            className="gap-info-trigger"

            aria-describedby="gap-tooltip"

          >

            The psychology behind curiosity <span>ⓘ</span>

          </button>



          <div className="gap-tooltip" id="gap-tooltip" role="note">

            <span className="tooltip-kicker">

              THE INFORMATION-GAP THEORY · 1994

            </span>



            <h4>Curiosity begins when knowledge feels incomplete.</h4>



            <p>

              Psychologist George Loewenstein described curiosity

              as arising from the perceived gap between what we

              know and what we want to know.

            </p>



            <p className="tooltip-personal">

              My interpretation: every answer opens the door

              to a better question.

            </p>



            <a

              href="https://doi.org/10.1037/0033-2909.116.1.75"

              target="_blank"

              rel="noreferrer"

            >

              Explore the original research ↗

            </a>

          </div>

        </div>

      </div>



    </div>

  </div>

</section>







      <section className="work-section section-shell" id="work">

        <div className="section-heading" data-fun="I like the messy part before the solution: talking to people, finding friction and asking why it exists."><div><p className="eyebrow">SELECTED WORK / 02</p><h2>Ideas are interesting.<br/><em>Making them real</em> is the kick.</h2></div><a className="text-link" href="#contact">DISCUSS A PROJECT ↗</a></div>

        <div className="project-grid">

          {allProjects.filter(p=>showAllProjects || p.featured).map((p) => <article className="project-card" key={p.number} role="button" tabIndex={0} data-fun={p.name+" is one of the things I have spent time making real."} onClick={()=>setSelectedProject(p)} onKeyDown={e=>{if(e.key==='Enter')setSelectedProject(p)}}>

            <div className="project-card-top"><span className="project-number">{p.number}</span><span className="project-icon">{p.number==="01"?"⌘":p.number==="02"?"♻":p.number==="03"?"◷":p.number==="04"?"◈":p.number==="05"?"↗":p.number==="06"?"⌘":p.number==="07"?"◎":p.number==="08"?"▦":"✳"}</span></div>

            <p className="eyebrow">{p.type}</p><h3>{p.name}</h3><p className="project-desc">{p.description}</p>{p.media?.filter((m:any)=>m.type?.startsWith("image/")).slice(0,1).map((m:any)=><img className="project-media-preview" key={m.path} src={m.url} alt={`${p.name} project`} loading="lazy"/>)}<div className="tag-row">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>

            <div className="project-card-bottom"><strong>{p.result}</strong><div className="project-links">{(p.links||[]).map((l:any)=><a key={l.label||l.title||l.href||l.url} href={l.href||l.url||"#"} target={(l.href||l.url||"").startsWith("http")?"_blank":undefined} rel={(l.href||l.url||"").startsWith("http")?"noreferrer":undefined}>{l.label||l.title||"OPEN LINK"} ↗</a>)}</div></div>

          </article>)}

        </div>

        <div className="show-projects-wrap"><button className="button button-dark" onClick={()=>setShowAllProjects(!showAllProjects)}>{showAllProjects?"SHOW FEATURED PROJECTS":"SHOW ALL PROJECTS"} <span>{showAllProjects?"↑":"＋"}</span></button></div>

      </section>





<section className="experience-section section-shell" id="experience">



  <div className="section-heading">

    <div>

     <p className="eyebrow">THE WORK SO FAR / 03</p>
    <h2>
    From building communities<br />
    <em>to building intelligent systems.</em>
    </h2>
    </div>



    <p className="heading-aside">

      My professional journey across software engineering,

      generative AI, automation and applied AI systems.

    </p>

  </div>



  <div className="career-intro">

    <span>2025</span>

    <span className="career-intro-line" />

    <span>2026</span>

    <p>Four chapters. An evolving technical practice.</p>

  </div>



  <div className="career-path">

    {experiences.map((experience) => {

      const isOpen = expandedExperience === experience.id;



      return (

        <article

          className={`career-chapter ${isOpen ? "is-expanded" : ""}`}

          key={experience.id}

        >

          <button

            className="career-chapter-trigger"

            onClick={() =>

              setExpandedExperience(isOpen ? null : experience.id)

            }

            aria-expanded={isOpen}
            aria-controls={`career-detail-${experience.id}`}

          >

            <span className="career-node">

              {experience.number}

            </span>



            <span className="career-main">

              <small>{experience.period}</small>

              <strong>{experience.company}</strong>

              <span>{experience.role} · {experience.location}</span>

            </span>



            <span className="career-direction">

              {experience.direction}

            </span>



            <span className="career-hover-cue">{isOpen ? "CLOSE CHAPTER" : "EXPLORE CHAPTER"}</span>
            <span className="career-toggle" aria-hidden="true">

              {isOpen ? "−" : "+"}

            </span>

          </button>



          {isOpen && (

            <div className="career-detail" id={`career-detail-${experience.id}`}>

              <span className="career-detail-kicker">CHAPTER NOTES / {experience.number}</span>
              <p>{experience.description}</p>



              <ul>

                {experience.contributions.map((item, index) => (

                  <li key={index}>{item}</li>

                ))}

              </ul>



              <div className="career-stack">

                {experience.stack.map((skill) => (

                  <span key={skill}>{skill}</span>

                ))}

              </div>

            </div>

          )}

        </article>

      );

    })}

  </div>



  <div className="career-footer">

    <span>SOFTWARE → INTELLIGENCE → AUTOMATION → APPLIED AI</span>

    <a href="#contact" className="text-link">

      TALK ABOUT OPPORTUNITIES ↗

    </a>

  </div>



</section>









      {selectedProject&&<div className="milestone-modal" role="dialog" aria-modal="true" onClick={()=>setSelectedProject(null)}><div className="milestone-modal-card project-detail-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedProject(null)}>CLOSE ×</button><p className="eyebrow">{selectedProject.type} / PROJECT FILE</p><h3>{selectedProject.name}</h3><p>{selectedProject.description}</p>{selectedProject.result&&<p className="project-detail-result">{selectedProject.result}</p>}<div className="tag-row">{(selectedProject.tags||[]).map((t:string)=><span className="tag" key={t}>{t}</span>)}</div>{selectedProject.media?.map((m:any)=><a className="evidence-file" key={m.path} href={m.url} target="_blank" rel="noreferrer">{m.type?.startsWith("image/")?<img src={m.url} alt={m.name}/>:<span>OPEN DOCUMENT · {m.name} ↗</span>}</a>)}<div className="milestone-modal-links">{(selectedProject.links||[]).map((l:any)=><a key={l.label||l.title||l.href||l.url} href={l.href||l.url||"#"} target={(l.href||l.url||"").startsWith("http")?"_blank":undefined} rel={(l.href||l.url||"").startsWith("http")?"noreferrer":undefined}>{l.label||l.title||"OPEN LINK"} ↗</a>)}{selectedProject.github_url&&<a href={selectedProject.github_url} target="_blank" rel="noreferrer">GITHUB ↗</a>}{selectedProject.video_url&&<a href={selectedProject.video_url} target="_blank" rel="noreferrer">WATCH VIDEO ↗</a>}{selectedProject.project_url&&<a href={selectedProject.project_url} target="_blank" rel="noreferrer">PROJECT DETAILS ↗</a>}</div><p className="project-detail-foot">A project is never just the final screen. It is the question, the messy middle and what changed afterwards.</p></div></div>}

      <div className="curiosity-note" aria-live="polite"><span>✳</span>{cursorNote}</div>

      <section className="journey-section" id="journey">

        <div className="section-shell">

          <div className="section-heading"><div><p className="eyebrow">THE JOURNEY / 04</p><h2>From first experiments<br/><em>to systems in the real world.</em></h2></div><p className="heading-aside">A chronological record of the work, the people, the recognition and the moments that shaped the builder behind it.</p></div>

          <div className="milestone-list">

            {(showAllMilestones ? allMilestones : allMilestones.slice(0, 10)).map((m,i)=><button className="milestone-row" key={`${m.year}-${m.title}`} onClick={()=>setSelectedMilestone(m)}>

              <span className="milestone-year">{m.year}</span><span className="milestone-copy"><strong>{m.title}</strong><small>{m.issuer} · {m.issued}{m.body ? ` · ${m.body}` : ""}</small></span><span className="milestone-evidence">{m.kind} <b>↗</b></span>

            </button>)}

          </div>

          {allMilestones.length > 10 && (
            <button
              className="milestone-more"
              type="button"
              onClick={() => setShowAllMilestones(value => !value)}
              aria-expanded={showAllMilestones}
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                padding: 0,
                color: "inherit",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                cursor: "pointer"
              }}
            >
              {showAllMilestones ? "Show less ↑" : `Show ${allMilestones.length - 10} more achievements ↓`}
            </button>
          )}

          <p className="placeholder-note">SELECT A MILESTONE TO OPEN ITS STORY, PRESS, CERTIFICATES, PHOTOS OR VIDEO. ITEMS MARKED FOR ADDITION WILL BE FILLED WITH ORIGINAL MATERIAL.</p>

          {selectedMilestone&&<div className="milestone-modal" role="dialog" aria-modal="true"><div className="milestone-modal-card"><button className="modal-close" onClick={()=>setSelectedMilestone(null)}>CLOSE ×</button><p className="eyebrow">{selectedMilestone.year} / JOURNEY EVIDENCE</p><h3>{selectedMilestone.title}</h3><p className="milestone-issuer">{selectedMilestone.issuer} · {selectedMilestone.issued}</p>{selectedMilestone.body&&<p>{selectedMilestone.body}</p>}{selectedMilestone.links?.map((link:any)=><a className="evidence-file" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}{selectedMilestone.evidence&&<img src={selectedMilestone.evidence.startsWith("http")?selectedMilestone.evidence:`/evidence/${selectedMilestone.evidence}`} alt={`Evidence for ${selectedMilestone.title}`} />}{selectedMilestone.media?.map((m:any)=><a className="evidence-file" key={m.path} href={m.url} target="_blank" rel="noreferrer">{m.type?.startsWith("image/")?<img src={m.url} alt={m.name}/>:<span>PDF · {m.name}</span>}</a>)}<div className="milestone-modal-links">{selectedMilestone.url&&<a href={selectedMilestone.url} target="_blank" rel="noreferrer">{selectedMilestone.source||"OPEN FEATURE / VIDEO"} ↗</a>}{selectedMilestone.url2&&<a href={selectedMilestone.url2} target="_blank" rel="noreferrer">{selectedMilestone.source2||"MORE COVERAGE"} ↗</a>}{(selectedMilestone.links||[]).map((link:any)=><a key={link.label||link.url||link.href} href={link.url||link.href||"#"} target={(link.url||link.href||"").startsWith("http")?"_blank":undefined} rel={(link.url||link.href||"").startsWith("http")?"noreferrer":undefined}>{link.label||"OPEN LINK"} ↗</a>)}<span>{selectedMilestone.kind}</span></div></div></div>}

        </div>

      </section>



      <section className="writing-section" id="writing">

        <div className="section-shell">

          <div className="section-heading"><div><p className="eyebrow">NOTES FROM A CURIOUS MIND / 05</p><h2>Thinking out loud<span className="punct">.</span></h2></div><p className="heading-aside">Technology, product, philosophy and the occasional question that refuses to leave.</p></div>

          <div className="category-tabs">{categories.map(c=><button key={c} className={activeCategory===c?"active":""} onClick={()=>setActiveCategory(c)}>{c}</button>)}</div>

          <div className="post-list">
  {visiblePosts.map((post, i) => (
    <button
      className="post-row"
      key={post.slug}
      onClick={() => openBlog(post.slug)}
      type="button"
    >
      <span className="post-index">
        {String(i + 1).padStart(2, "0")}
      </span>

      <div>
        <p className="eyebrow">{post.category}</p>
        <h3>{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>

      <span className="post-date">
        {post.published_at
          ? new Date(post.published_at).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric"
            })
          : ""}
      </span>

      <span className="post-arrow">↗</span>
    </button>
  ))}

  {visiblePosts.length === 0 && (
    <p className="empty-posts">
      No published notes in this category yet.
    </p>
  )}
</div>

        </div>

      </section>


<section className="thinking-section section-shell" id="workbench">

  <div className="thinking-topline">
    <span className="eyebrow">CURRENTLY THINKING ABOUT / 06</span>
    <span className="thinking-live">
      <span className="thinking-live-dot" />
      OPEN QUESTION
    </span>
  </div>

  <div className="thinking-explorations">

    <article className="thinking-item">
      <div className="thinking-item-index">01</div>

      <div className="thinking-item-content">
        <span className="thinking-category">AI EVALUATION</span>
        <h3>Are we measuring intelligence, or just impressive demos?</h3>
        <p>
          Exploring better ways to evaluate models and agents,
          uncover failure patterns and measure real-world reliability.
        </p>
        <div className="thinking-tags">
          <span>Agent evaluation</span>
          <span>Benchmarks</span>
          <span>Reliability</span>
        </div>
      </div>

      <span className="thinking-item-arrow">↗</span>
    </article>

    <article className="thinking-item">
      <div className="thinking-item-index">02</div>

      <div className="thinking-item-content">
        <span className="thinking-category">PROCESS INTELLIGENCE</span>
        <h3>What if we could test an AI-powered process before building it?</h3>
        <p>
          Exploring workflow reconstruction, bottleneck discovery
          and what-if simulations to find where AI actually creates value.
        </p>
        <div className="thinking-tags">
          <span>Workflow intelligence</span>
          <span>Simulation</span>
          <span>AI transformation</span>
        </div>
      </div>

      <span className="thinking-item-arrow">↗</span>
    </article>

  </div>

  <div className="thinking-side-project">
    <span className="thinking-side-label">ALSO BUILDING</span>
    <p>
      <strong>HuntMyHead</strong>
      <span> An AI-assisted job discovery and application system.</span>
    </p>
  </div>

  <div className="thinking-footer">
    <div>
      <span className="thinking-footer-label">YOUR TURN</span>
      <p>
        Have an answer, a counterpoint, or a problem worth exploring?
        I'd love to hear it, learn from you or build something together.
      </p>
    </div>

    <a href="#contact" className="thinking-cta">
      LET'S THINK AHEAD <span>↗</span>
    </a>
  </div>

</section>


      <section className="contact-section" id="contact">

        <div className="section-shell contact-inner"><p className="eyebrow">THE NEXT CHAPTER / 08</p><h2>Good ideas begin<br/>with <em>conversations.</em></h2><p>Have a problem worth solving, an idea worth exploring, or a team building something meaningful? I’d like to hear about it.</p><div className="contact-actions"><a className="button button-light" href="mailto:aditi.adbyte@gmail.com?subject=Let's%20talk">GET IN TOUCH <span>↗</span></a><a className="contact-link" href="https://www.linkedin.com/in/aditi-jn" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a className="contact-link" href="https://github.com/adbyte" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div>

      </section>



      {(selectedPost || blogError) && (
        <div
          className="blog-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPost(null);
              setBlogError("");
            }
          }}
          role="presentation"
        >
          <article
            className="blog-reader"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPost?.title || "Blog article"}
          >
            <div className="blog-reader-top">
              <span className="eyebrow">ADITI JAIN / FIELD NOTES</span>
              <button
                type="button"
                className="blog-reader-close"
                onClick={() => {
                  setSelectedPost(null);
                  setBlogError("");
                }}
                aria-label="Close article"
              >
                CLOSE <span aria-hidden="true">×</span>
              </button>
            </div>

            {blogLoading ? (
              <div className="blog-reader-loading">
                <span className="thinking-live-dot" />
                FETCHING THE ARTICLE...
              </div>
            ) : blogError ? (
              <div className="blog-reader-error" role="alert">{blogError}</div>
            ) : selectedPost ? (
              <div className="blog-reader-scroll" key={selectedPost.slug}>
                <header className="blog-reader-header">
                  {selectedPost.category && (
                    <p className="blog-reader-category">{selectedPost.category}</p>
                  )}
                  <h1>{selectedPost.title}</h1>
                  {selectedPost.excerpt && (
                    <p className="blog-reader-excerpt">{selectedPost.excerpt}</p>
                  )}
                  <div className="blog-reader-meta">
                    <span>ADITI JAIN</span>
                    <span>
                      {selectedPost.published_at
                        ? new Date(selectedPost.published_at).toLocaleDateString(
                            "en-IN",
                            { day: "numeric", month: "long", year: "numeric" }
                          )
                        : ""}
                    </span>
                  </div>
                </header>

                <div className="blog-reader-divider" />

                <div className="blog-reader-content">
                  {selectedPost.content_html ? (
                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content_html }} />
                  ) : (
                    <div className="blog-reader-plain">
                      {selectedPost.content_markdown ||
                        selectedPost.content ||
                        selectedPost.body ||
                        selectedPost.article ||
                        "Article content is not available."}
                    </div>
                  )}
                </div>

                <footer className="blog-reader-footer">
                  <span>END OF NOTE</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPost(null);
                      setBlogError("");
                    }}
                  >
                    BACK TO THE PORTFOLIO ↑
                  </button>
                </footer>
              </div>
            ) : null}
          </article>
        </div>
      )}

      <footer className="footer section-shell"><a className="brand" href="#top">AJ<span>.</span></a><span>BUILT WITH CURIOSITY & INTENTION.</span><a href="#top">BACK TO TOP ↑</a><span>© 2026 ADITI JAIN</span></footer>

    </main>

  );

}
