import { useEffect,useRef,useState } from 'react';
import { ORGANIZERS } from '../data';
import { useCountUp } from '../hooks/useCountUp';
import type { SectionProps,Organizer } from '../types';

const Stat=({target,suffix='',label,started}:{target:number;suffix?:string;label:string;started:boolean})=>{
  const n=useCountUp(target,1400,started);
  return(
    <div className="glass glass-hover" style={{padding:'20px 22px',borderRadius:'var(--r2)'}}>
      <div style={{fontWeight:800,fontSize:'clamp(26px,3vw,40px)',color:'rgba(255,255,255,0.90)',letterSpacing:'-0.04em',lineHeight:1}}>{n}{suffix}</div>
      <div style={{fontSize:13,color:'rgba(255,255,255,0.40)',marginTop:6,fontWeight:500}}>{label}</div>
    </div>
  );
};

export default function About({id}:SectionProps){
  const ref=useRef<HTMLElement>(null);
  const [started,setStarted]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){ setStarted(true); e.target.querySelectorAll('.rv').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*80)); } }); },{threshold:0.08});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);

  const orgs=ORGANIZERS.filter(o=>o.type==='organizer');
  const collab=ORGANIZERS.filter(o=>o.type==='collaboration');
  const supp=ORGANIZERS.filter(o=>o.type==='support');

  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap">
        <div className="rv" style={{marginBottom:56}}>
          <span className="eyebrow">About the Event</span>
          <h2 className="t-h1" style={{marginTop:8,maxWidth:540}}>Empowering the next generation of engineers</h2>
        </div>
        <div className="grid-2">
          {/* Left */}
          <div>
            {['IEEE Education Week Sri Lanka is a unique opportunity for students and undergraduates to connect with top professionals and educators from the world of engineering and technology.',
              'Held at TRACE Expert City on the 07th of April, the event delivers educational programs for students, educators, and technical professionals.',
              'The programme features higher education seminars, technical sessions, panel discussions, industry stalls, and the IMPACT Mic networking session.',
            ].map((p,i)=>(
              <p key={i} className={`rv d${i+1}`} style={{fontSize:15,lineHeight:1.75,color:'rgba(255,255,255,0.50)',marginBottom:16}}>{p}</p>
            ))}
            <div className="rv d4" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:32}}>
              <Stat target={3}   suffix="+"      label="Audience Tracks"  started={started}/>
              <Stat target={11}  suffix="+"      label="Expert Speakers"  started={started}/>
              <Stat target={100} suffix="% Free" label="Entrance"         started={started}/>
              <Stat target={1}   suffix=" Day"   label="Packed Programme" started={started}/>
            </div>
          </div>
          {/* Right */}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div className="rv glass-green" style={{padding:'clamp(24px,3vw,36px)',borderRadius:'var(--r4)',textAlign:'center',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:160,height:160,background:'radial-gradient(circle,rgba(34,197,94,0.15) 0%,transparent 70%)',pointerEvents:'none'}}/>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,fontWeight:600,color:'rgba(74,222,128,0.6)',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:10}}>IEEE</div>
              <div style={{fontWeight:800,fontSize:'clamp(26px,3vw,36px)',letterSpacing:'-0.03em',lineHeight:1.1,color:'rgba(255,255,255,0.88)'}}>Education<br/>Week™</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'rgba(255,255,255,0.25)',marginTop:10,letterSpacing:'0.07em'}}>SRI LANKA · 2025</div>
            </div>
            {[{title:'Organized by',items:orgs,c:'#4ade80'},{title:'In Collaboration with',items:collab,c:'#93c5fd'},{title:'Supported by',items:supp,c:'#c4b5fd'}].map(({title,items,c},gi)=>(
              <div key={title} className={`rv glass d${gi+2}`} style={{padding:'18px 20px',borderRadius:'var(--r2)'}}>
                <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',marginBottom:12}}>{title}</div>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {items.map((o:Organizer)=>(
                    <div key={o.id} style={{display:'flex',alignItems:'center',gap:10}}>
                      <span style={{width:5,height:5,borderRadius:'50%',background:c,flexShrink:0,boxShadow:`0 0 6px ${c}`}}/>
                      <span style={{fontSize:13,color:'rgba(255,255,255,0.60)',fontWeight:500}}>{o.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
