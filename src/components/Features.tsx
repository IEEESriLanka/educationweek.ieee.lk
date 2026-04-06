import { useEffect, useRef } from 'react';
import { Briefcase,GraduationCap,FlaskConical,Brain,BookOpen,Network } from 'lucide-react';
import { FEATURES } from '../data';
import type { SectionProps } from '../types';

const ICONS:Record<string,React.ReactNode>={
  Briefcase:<Briefcase size={22}/>,GraduationCap:<GraduationCap size={22}/>,
  FlaskConical:<FlaskConical size={22}/>,Brain:<Brain size={22}/>,
  BookOpen:<BookOpen size={22}/>,Network:<Network size={22}/>,
};

const ACCENTS=[
  {icon:'rgba(74,222,128,0.15)',  ic:'#4ade80', glow:'rgba(74,222,128,0.08)'},
  {icon:'rgba(147,197,253,0.15)', ic:'#93c5fd', glow:'rgba(147,197,253,0.06)'},
  {icon:'rgba(253,224,71,0.15)',  ic:'#fde047', glow:'rgba(253,224,71,0.06)'},
  {icon:'rgba(196,181,253,0.15)', ic:'#c4b5fd', glow:'rgba(196,181,253,0.06)'},
  {icon:'rgba(249,168,212,0.15)', ic:'#f9a8d4', glow:'rgba(249,168,212,0.06)'},
  {icon:'rgba(94,234,212,0.15)',  ic:'#5eead4', glow:'rgba(94,234,212,0.06)'},
];

export default function Features({id}:SectionProps){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.rv,.rv-sc').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*65)); }); },{threshold:0.06});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);

  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap">
        <div className="rv" style={{marginBottom:56}}>
          <span className="eyebrow">Why Attend</span>
          <h2 className="t-h1" style={{marginTop:8,maxWidth:460}}>Why you should join the event</h2>
          <p style={{marginTop:12,fontSize:15,color:'rgba(255,255,255,0.45)',maxWidth:480,lineHeight:1.75}}>Curated tracks for school students, undergraduates, and graduate professionals.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f,i)=>{
            const a=ACCENTS[i%6];
            return(
              <div key={f.id} className={`rv-sc d${(i%6)+1} glass glass-hover`}
                   style={{padding:'clamp(22px,3vw,32px)',borderRadius:'var(--r3)',position:'relative',overflow:'hidden',cursor:'default'}}>
                {/* Glow behind icon */}
                <div style={{position:'absolute',top:-20,left:-20,width:120,height:120,background:`radial-gradient(circle,${a.glow} 0%,transparent 70%)`,pointerEvents:'none'}}/>
                <div style={{width:48,height:48,borderRadius:14,background:a.icon,display:'flex',alignItems:'center',justifyContent:'center',color:a.ic,marginBottom:20,position:'relative',border:`1px solid ${a.ic.replace(')',',0.25)').replace('rgb','rgba')}`}}>
                  {ICONS[f.icon]}
                </div>
                <div className="t-h3" style={{marginBottom:10}}>{f.title}</div>
                <p style={{fontSize:14,lineHeight:1.7,color:'rgba(255,255,255,0.40)',margin:0}}>{f.description}</p>
                {/* Bottom accent line */}
                <div style={{position:'absolute',bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${a.ic},transparent)`,opacity:0,transition:'opacity 0.3s'}} className="feat-line"/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
