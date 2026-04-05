import type {
  NavLink, HeroStat, Feature, Speaker,
  ScheduleSession, Organizer, Partner, ContactPerson,
} from '../types';

// ── Past editions ─────────────────────────────────────────────────────────────
export interface Edition { year: string; url: string; active?: boolean; }

export const PAST_EDITIONS: Edition[] = [
  { year: '2025', url: 'https://educationweek.ieee.lk',       active: true  },
  { year: '2024', url: 'https://educationweek.ieee.lk/2024/', active: false },
  { year: '2023', url: 'https://educationweek.ieee.lk/2023/', active: false },
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
  { value: '07', label: 'April 2025', suffix: 'th' },
  { value: '10+', label: 'Expert Speakers' },
  { value: 'Free', label: 'Entrance' },
  { value: '3', label: 'Tracks' },
];

// ── Features ──────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  { id:'career',  title:'Career Guidance',      description:'Expert-led sessions on future-ready careers for school students and undergraduates.',   icon:'Briefcase',    color:'electric' },
  { id:'teacher', title:'Teacher Empowerment',  description:'Modern teaching methods and technology integration for classroom educators.',            icon:'GraduationCap',color:'cyan'     },
  { id:'stem',    title:'STEM Discovery',        description:'Hands-on Arduino challenges and interactive sessions to ignite STEM innovation.',        icon:'FlaskConical', color:'emerald'  },
  { id:'ai',      title:'Research & AI',         description:'Leverage Perplexity AI and explore groundbreaking research insights from top professors.',icon:'Brain',        color:'violet'   },
  { id:'grad',    title:'Graduate Development',  description:'Grant writing, navigating the age of AI, and maximising IEEE resources for graduates.',  icon:'BookOpen',     color:'gold'     },
  { id:'network', title:'Networking & Impact',   description:'IMPACT Mic, industry connections, and meaningful conversations with speakers.',          icon:'Network',      color:'rose'     },
];

// ── Speakers ──────────────────────────────────────────────────────────────────
export const SPEAKERS: Speaker[] = [
  { id:'rahula',       name:'Prof. Rahula Attalage',    title:'Senior Professor, Mechanical Engineering', affiliations:['University of Moratuwa','Commission Member, UGC'],                                          imageUrl:'https://educationweek.ieee.lk/img/speakers/Rahula.webp'       },
  { id:'vasanthapriyan',name:'Prof. Vasanthapriyan',   title:'Professor in Computer Science',            affiliations:['Founding Dean, Faculty of Computing at SUSL','Chair, IEEE Sri Lanka Section 2025'],         imageUrl:'https://educationweek.ieee.lk/img/speakers/Vasanthapriyan.webp'},
  { id:'roshan',       name:'Prof. Roshan Ragel',       title:'Professor, Dept. of Computer Science',    affiliations:['University of Peradeniya','AI Advisory Committee, ICTA','Consultancy CEO, LEARN'],          imageUrl:'https://educationweek.ieee.lk/img/speakers/Roshan.webp'       },
  { id:'sankalpa',     name:'Dr. Sankalpa Gamwarige',   title:'Managing Director',                       affiliations:['Nagarro','Senior VP, Trace','PhD — Electronics & Telecom Engineering'],                     imageUrl:'https://educationweek.ieee.lk/img/speakers/Sankalpa.webp'     },
  { id:'achintha',     name:'Dr. Achintha Kondarage',   title:'Staff Program Manager',                   affiliations:['Synopsys Inc.','PhD in Biomedical Engineering (UOM)','Visiting Lecturer, USJ'],             imageUrl:'https://educationweek.ieee.lk/img/speakers/achintha.webp'     },
  { id:'ranga',        name:'Dr. Ranga Rodrigo',        title:'Senior Lecturer',                         affiliations:['University of Moratuwa','PhD — Electrical & Computer Engineering, Western University'],     imageUrl:'https://educationweek.ieee.lk/img/speakers/Ranga.webp'       },
  { id:'subodha',      name:'Dr. Subodha Charles',      title:'Senior Lecturer & Group Chairman',        affiliations:['University of Moratuwa','Pearl Cluster','PhD — Embedded Systems, University of Florida'],   imageUrl:'https://educationweek.ieee.lk/img/speakers/Subodha.webp'     },
  { id:'rushdi',       name:'Mr. Rushdi Hadhi',          title:'Director Operations',                     affiliations:['Jobdaddy.lk','Former Head of Career Guidance, NSBM'],                                       imageUrl:'https://educationweek.ieee.lk/img/speakers/Rushdi.webp'       },
  { id:'ushan',        name:'Mr. Ushan Chaminda',        title:'CEO, Gavesha Labs',                       affiliations:['Gavesha Labs','BSc in Information Technology (UOM)'],                                       imageUrl:'https://educationweek.ieee.lk/img/speakers/Ushan.webp'       },
  { id:'sabilashan',   name:'Mr. Sabilashan Ganeshan',   title:'Country Lead',                            affiliations:['Perplexity AI'],                                                                            imageUrl:'https://educationweek.ieee.lk/img/speakers/Sabilashan.webp'  },
  { id:'chamodi',      name:'Ms. Chamodi Hansika',       title:'Software Engineer',                        affiliations:['Dutton Labs LK'],                                                                           imageUrl:'https://educationweek.ieee.lk/img/speakers/Chamodi.webp'     },
];

// ── Schedule ──────────────────────────────────────────────────────────────────
export const SCHEDULE_SESSIONS: ScheduleSession[] = [
  { id:'s1',  time:'09:00–09:30', title:'Opening Ceremony',                                                    tracks:['school','undergraduate','graduate'], type:'ceremony'   },
  { id:'s2',  time:'09:30–10:30', title:'Career Guidance Session',                                             tracks:['school'],                           type:'session'    },
  { id:'s3',  time:'09:30–10:30', title:'Session for Teachers — Part 1',                                       tracks:['school'],                           type:'session'    },
  { id:'s4',  time:'11:00–12:00', title:'STEM Education Session',                                              tracks:['school'],                           type:'workshop'   },
  { id:'s5',  time:'11:00–12:00', title:'Session for Teachers — Part 2',                                       tracks:['school'],                           type:'session'    },
  { id:'s6',  time:'12:00–12:10', title:'Introduction to Arduino Challenge',                                   tracks:['school'],                           type:'session'    },
  { id:'s7',  time:'12:10–12:40', title:'Cyber Safety Session',                                                tracks:['school'],                           type:'session'    },
  { id:'s8',  time:'01:00–01:30', title:'Challenge Sphere',                                                    tracks:['school'],                           type:'workshop'   },
  { id:'s9',  time:'01:30–02:00', title:'Mastering Perplexity: Generative AI for Smarter Research',            tracks:['school','undergraduate'],            type:'session',   speaker:'Mr. Sabilashan Ganeshan'  },
  { id:'s10', time:'02:00–05:00', title:'CV Clinic & Future Forward: Your Next Step in Industry / Academia',   tracks:['school'],                           type:'workshop'   },
  { id:'s11', time:'02:00–02:30', title:'IEEE for Researchers: Maximising Opportunities for Graduate Students', tracks:['graduate'],                         type:'session',   speaker:'Dr. Achintha Kondarage'   },
  { id:'s12', time:'02:30–03:10', title:'Staying Relevant in the Age of AI',                                   tracks:['graduate'],                         type:'session',   speaker:'Dr. Ranga Rodrigo'        },
  { id:'s13', time:'03:10–03:50', title:'Thriving Together: Navigating Graduate School Challenges',            tracks:['graduate'],                         type:'session'    },
  { id:'s14', time:'04:00–05:00', title:'Grant Writing for Academics and Industries',                          tracks:['graduate'],                         type:'session',   speaker:'Dr. Subodha Charles'      },
  { id:'s15', time:'05:00–06:00', title:'Revolutionising Research with Generative AI',                         tracks:['school','graduate'],                 type:'session',   speaker:'Prof. Roshan Ragel'       },
  { id:'s16', time:'06:00–08:00', title:'IMPACT Mic & Networking Session',                                     tracks:['school','undergraduate','graduate'], type:'networking' },
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
  { id:'ifs',        name:'IFS',               tier:'title'       },
  { id:'trace',      name:'TRACE Sri Lanka',   tier:'ecosystem'   },
  { id:'perplexity', name:'Perplexity',         tier:'ai-knowledge'},
  { id:'learn',      name:'LEARN',              tier:'ai-knowledge'},
  { id:'idea8',      name:'Idea8',              tier:'industry'    },
  { id:'vsis',       name:'VSIS',               tier:'industry'    },
  { id:'nagarro',    name:'Nagarro',             tier:'industry'    },
  { id:'inivos',     name:'Inivos Consulting',   tier:'industry'    },
  { id:'virtusa',    name:'Virtusa',             tier:'industry'    },
  { id:'makers',     name:'Makers Global',       tier:'stem'        },
  { id:'gavesha',    name:'Gavesha Labs',         tier:'stem'        },
  { id:'roboticgen', name:'RoboticGen',           tier:'stem'        },
];

// ── Contacts ──────────────────────────────────────────────────────────────────
export const CONTACTS: ContactPerson[] = [
  { id:'kulunu',    name:'Kulunu Wijesoory',    role:'Vice Chairperson',  organization:'IEEE Young Professionals Sri Lanka', phone:'+94 710 646 688', email:'eduweek@ieee.lk'  },
  { id:'chathurya', name:'Chathurya Ekanayake', role:'Committee Member',  organization:'IEEE Young Professionals Sri Lanka', phone:'+94 702 525 880', email:'eduweek@ieee.lk'  },
  { id:'kavindra',  name:'Kavindra Weerasinghe', role:'Chair',            organization:'IEEE Sri Lanka Inspire',             phone:'+94 774 743 603', email:'inspire@ieee.lk'  },
];
