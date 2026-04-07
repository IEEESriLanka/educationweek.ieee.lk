import { useEffect,useRef } from 'react';
import { PARTNERS } from '../data';
import type { Partner,SectionProps } from '../types';

type Tier=Partner['tier'];
const ORDER:Tier[]=['title','ecosystem','ai-knowledge','industry','stem'];
const CFG:Record<Tier,{label:string;dot:string;size:string;maxW:number}>={
  'title':        {label:'Title Partner',         dot:'#fde047',size:'19px',maxW:300},
  'ecosystem':    {label:'Ecosystem Partner',     dot:'#4ade80',size:'16px',maxW:260},
  'ai-knowledge': {label:'AI Knowledge Partners', dot:'#c4b5fd',size:'14px',maxW:220},
  'industry':     {label:'Industry Partners',     dot:'#93c5fd',size:'14px',maxW:190},
  'stem':         {label:'STEM Partners',          dot:'#5eead4',size:'14px',maxW:190},
};

export default function Partners({id}:SectionProps){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.rv').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*75)); }); },{threshold:0.08});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);
  const grouped=ORDER.reduce<Record<Tier,Partner[]>>((acc,t)=>{ acc[t]=PARTNERS.filter(p=>p.tier===t); return acc; },{} as Record<Tier,Partner[]>);

  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap" style={{maxWidth:1100,margin:'0 auto'}}>
        <div className="rv" style={{textAlign:'center',marginBottom:56}}>
          <span className="eyebrow">Partners</span>
          <h2 className="t-h1" style={{marginTop:8}}>Backed by industry leaders</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:44}}>
          {ORDER.map(tier=>{
            const items=grouped[tier]; if(!items.length) return null;
            const {label,dot,size,maxW}=CFG[tier];
            return(
              <div key={tier} className="rv">
                <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:dot,flexShrink:0,boxShadow:`0 0 8px ${dot}`}}/>
                  <span style={{fontSize:10,fontWeight:600,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace'}}>{label}</span>
                  <div style={{flex:1,height:1,background:'rgba(255,255,255,0.07)'}}/>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
                  {items.map(p=>(
                    <div key={p.id} className="partner-pill" style={{flex:`1 1 ${maxW*0.5}px`,maxWidth:maxW}}>
                      <span style={{fontWeight:700,fontSize:size,color:'rgba(255,255,255,0.70)',textAlign:'center'}}>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
