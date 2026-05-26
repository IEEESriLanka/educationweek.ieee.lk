import type {
  NavLink, HeroStat, Feature, Speaker,
  ScheduleSession, Organizer, Partner, ContactPerson,
} from '../types';

// ── Past editions ─────────────────────────────────────────────────────────────
export interface Edition { year: string; url: string; active?: boolean; }

export const PAST_EDITIONS: Edition[] = [
  { year: '2026', url: '/',  active: true  },
  { year: '2025', url: '/2025/',  active: false  },
  { year: '2024', url: '/2024/', active: false },
  { year: '2023', url: '/2023/', active: false },
];

// ── Nav ───────────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'About',    href: '#about'    },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact',  href: '#contact'  },
];

// ── Hero stats ────────────────────────────────────────────────────────────────
export const HERO_STATS: HeroStat[] = [
  { value: '23', label: 'April 2025', suffix: 'rd' },
  { value: '10+', label: 'Expert Speakers' },
  { value: 'Free', label: 'Entrance' },
  { value: '3', label: 'Tracks' },
];

// ── Features ──────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  { id:'career',  title:'Career Guidance',      description:'Expert-led sessions on future-ready careers for school students and undergraduates.',   icon:'Briefcase',    color:'electric' },
  // { id:'teacher', title:'Teacher Empowerment',  description:'Modern teaching methods and technology integration for classroom educators.',            icon:'GraduationCap',color:'cyan'     },
  { id:'stem',    title:'STEM Discovery',        description:'Hands-on Arduino challenges and interactive sessions to ignite STEM innovation.',        icon:'FlaskConical', color:'emerald'  },
  // { id:'ai',      title:'Research & AI',         description:'Leverage Perplexity AI and explore groundbreaking research insights from top professors.',icon:'Brain',        color:'violet'   },
  // { id:'grad',    title:'Graduate Development',  description:'Grant writing, navigating the age of AI, and maximising IEEE resources for graduates.',  icon:'BookOpen',     color:'gold'     },
  { id:'network', title:'Networking & Impact',   description:'IMPACT Mic, industry connections, and meaningful conversations with speakers.',          icon:'Network',      color:'rose'     },
];

// ── Speakers ──────────────────────────────────────────────────────────────────
export const SPEAKERS: Speaker[] = [
  { id:'rahula',       name:'Prof. Rahula Attalage',    title:'Senior Professor, Mechanical Engineering', affiliations:['University of Moratuwa','Commission Member, UGC'],                                          imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Rahula.webp'       },
  { id:'vasanthapriyan',name:'Prof. Vasanthapriyan',   title:'Professor in Computer Science',            affiliations:['Founding Dean, Faculty of Computing at SUSL','Chair, IEEE Sri Lanka Section 2025'],         imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Vasanthapriyan.webp'},
  { id:'roshan',       name:'Prof. Roshan Ragel',       title:'Professor, Dept. of Computer Science',    affiliations:['University of Peradeniya','AI Advisory Committee, ICTA','Consultancy CEO, LEARN'],          imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Roshan.webp'       },
  { id:'sankalpa',     name:'Dr. Sankalpa Gamwarige',   title:'Managing Director',                       affiliations:['Nagarro','Senior VP, Trace','PhD — Electronics & Telecom Engineering'],                     imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Sankalpa.webp'     },
  { id:'achintha',     name:'Dr. Achintha Kondarage',   title:'Staff Program Manager',                   affiliations:['Synopsys Inc.','PhD in Biomedical Engineering (UOM)','Visiting Lecturer, USJ'],             imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/achintha.webp'     },
  { id:'ranga',        name:'Dr. Ranga Rodrigo',        title:'Senior Lecturer',                         affiliations:['University of Moratuwa','PhD — Electrical & Computer Engineering, Western University'],     imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Ranga.webp'       },
  { id:'subodha',      name:'Dr. Subodha Charles',      title:'Senior Lecturer & Group Chairman',        affiliations:['University of Moratuwa','Pearl Cluster','PhD — Embedded Systems, University of Florida'],   imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Subodha.webp'     },
  { id:'rushdi',       name:'Mr. Rushdi Hadhi',          title:'Director Operations',                     affiliations:['Jobdaddy.lk','Former Head of Career Guidance, NSBM'],                                       imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Rushdi.webp'       },
  { id:'ushan',        name:'Mr. Ushan Chaminda',        title:'CEO, Gavesha Labs',                       affiliations:['Gavesha Labs','BSc in Information Technology (UOM)'],                                       imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Ushan.webp'       },
  { id:'sabilashan',   name:'Mr. Sabilashan Ganeshan',   title:'Country Lead',                            affiliations:['Perplexity AI'],                                                                            imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Sabilashan.webp'  },
  { id:'chamodi',      name:'Ms. Chamodi Hansika',       title:'Software Engineer',                        affiliations:['Dutton Labs LK'],                                                                           imageUrl:'https://educationweek.ieee.lk/2025/img/speakers/Chamodi.webp'     },
];

// ── Schedule ──────────────────────────────────────────────────────────────────
export const SCHEDULE_SESSIONS: ScheduleSession[] = [
  { id: 's0', time: '08:00–09:00', title: 'SLI Web Demo / Video', tracks: ['school', 'undergraduate', 'graduate'], type: 'ceremony' },
  { id: 's1', time: '09:00–09:30', title: 'Opening Ceremony', tracks: ['school', 'undergraduate', 'graduate'], type: 'ceremony' },
  { id: 's2', time: '09:30–10:30', title: 'Career Guidance Session', tracks: ['school'], type: 'session' },
  { id: 's3', time: '10:30–11:00', title: 'Additional time to manage students', tracks: ['school'], type: 'session' },
  { id: 's4', time: '11:00–11:30', title: 'Team 1: CERT Cyber Safety & Snacks', tracks: ['school'], type: 'workshop' },
  { id: 's5', time: '11:00–11:30', title: 'STEM Stalls for Student Team 2', tracks: ['school'], type: 'workshop' },
  { id: 's6', time: '11:00–11:30', title: 'Prompt Engineering', tracks: ['undergraduate', 'graduate'], type: 'session' },
  { id: 's7', time: '11:30–12:00', title: 'Team 2: CERT Cyber Safety & Snacks', tracks: ['school'], type: 'workshop' },
  { id: 's8', time: '11:30–12:00', title: 'STEM Stalls for Student Team 1', tracks: ['school'], type: 'workshop' },
  { id: 's9', time: '11:30–12:00', title: 'Navigating through your Research', tracks: ['graduate'], type: 'session', speaker: 'Dr. Ranga' },
  { id: 's10', time: '01:30–03:00', title: 'CV Clinic | Mock Interview Session', tracks: ['undergraduate', 'graduate'], type: 'workshop' },
  { id: 's11', time: '01:30–03:00', title: 'Fun Activities for CV Clinic idle persons', tracks: ['undergraduate'], type: 'workshop' },
  { id: 's12', time: '02:30–03:30', title: 'Travel grants through IEEE for your conferences', tracks: ['graduate'], type: 'session', speaker: 'Mr. Upul, Mr. Peshan, Dr. Akila' },
];

// ── Organizers ────────────────────────────────────────────────────────────────
export const ORGANIZERS: Organizer[] = [
  { id:'sl-section', name:'IEEE Sri Lanka Section',                          type:'organizer'    },
  { id:'yp',         name:'IEEE Young Professionals Sri Lanka',               type:'organizer'    },
  { id:'sac',        name:'IEEE Sri Lanka Student Activities Committee',       type:'organizer'    },
  { id:'sight',      name:'IEEE Sri Lanka Section SIGHT',                     type:'organizer'    },
  { id:'wie',        name:'IEEE WIE Sri Lanka Section',                       type:'organizer'    },
  { id:'sl2college', name:'SL2College',                                       type:'collaboration'},
  { id:'ies',        name:'IEEE IES Sri Lanka Chapter',                       type:'support'      },
  { id:'ias',        name:'IEEE IAS Sri Lanka Chapter',                       type:'support'      },
  { id:'cas-ceda',   name:'IEEE CAS CEDA Sri Lanka Joint Chapter',            type:'support'      },
  { id:'embs',       name:'IEEE EMBS Sri Lanka Chapter',                      type:'support'      },
];

// ── Partners ──────────────────────────────────────────────────────────────────
export const PARTNERS: Partner[] = [
  { id: "ifs", name: "IFS", tier: "title", logoUrl: "ifs.png" },
  { id: "trace", name: "TRACE Sri Lanka", tier: "ecosystem", logoUrl: "trace.png" },
  { id: 'slsac', name: 'SLSAC', tier: 'colab', logoUrl: 'slsac.png' },
  { id: 'wie', name: 'WIE', tier: 'colab', logoUrl: 'wie.png' },
  { id: 'sight', name: 'SIGHT', tier: 'colab', logoUrl: 'sight.png' },
  { id: 'sl2college', name: 'SL2C', tier: 'colab', logoUrl: 'sl2c.png' },
  { id: "studpro", name: "StudPro", tier: "program", logoUrl: "studpro.png" },
  // { id: "aidsl", name: "AIDSL", tier: "program", logoUrl: "aidsl.png" },
  { id: "intalent", name: "Intalent Asia", tier: "industry", logoUrl: "intalent.png" },
  { id: "altrium", name: "altrium", tier: "industry", logoUrl: "altrium.png" },
  { id: "frontwalker", name: "FRONTWALKER", tier: "industry", logoUrl: "frontwalker.png" },
  { id: "codemite", name: "CODEMITE", tier: "industry", logoUrl: "codemite.png" },
  { id: "vsis", name: "VSIS", tier: "industry", logoUrl: "vsis.png" },
  { id: "nagarro", name: "Nagarro", tier: "industry", logoUrl: "nagarro.png" },
  { id: "calcey", name: "Calcey", tier: "industry", logoUrl: "calcey.png" },
  { id: "nenasa", name: "Nenasa", tier: "stem", logoUrl: "nanasa.png" },
  { id: "seds", name: "SEDS", tier: "stem", logoUrl: "seds.png" },
  { id: "gavesha", name: "Gavesha Labs", tier: "stem", logoUrl: "gavesha.png" },
  { id: "stemup", name: "STEMUP", tier: "stem", logoUrl: "stemup.png" },
];
// ── Contacts ──────────────────────────────────────────────────────────────────
export const CONTACTS: ContactPerson[] = [
  {
    id: "shakil",
    name: "Shakil Arifeen",
    role: "Vice Chairperson",
    organization: "IEEE Young Professionals Sri Lanka",
    phone: "+94 71 724 6175",
    email: "shakilarifeen@ieee.org",
    photo: "/assets/images/oc/shakil.jpg",
  },
  {
    id: "kavindra",
    name: "Kavindra Weerasinghe",
    role: "Committee Member & OC Chair",
    organization: "IEEE Young Professionals Sri Lanka",
    phone: "+94 774 743 603",
    email: "kavindra.weerasinghe@ieee.org",
    photo: "/assets/images/oc/kavindra.jpg",

  },
  {
    id: "raees",
    name: "Raees Ahamed",
    role: "Chair",
    organization: "IEEE Sri Lanka Inspire",
    phone: "+94 76 495 3014",
    email: "raeesahamed@ieee.org",
    photo: "/assets/images/oc/chair_raees.jpg",
  },
];
