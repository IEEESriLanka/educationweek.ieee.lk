import { useEffect,useRef } from 'react';
import { PARTNERS } from '../data';
import type { Partner,SectionProps } from '../types';

type Tier=Partner['tier'];
const ORDER:Tier[]=['title','ecosystem','colab','program','industry','stem'];
const CFG:Record<Tier,{label:string;dot:string;size:string;maxW:number}>={
  'title':        {label:'Title Partner',         dot:'#fde047',size:'19px',maxW:300},
  'ecosystem':    {label:'Ecosystem Partner',     dot:'#4ade80',size:'16px',maxW:260},
  'colab':        {label:'In a Collaboration With',         dot:'#f472b6',size:'14px',maxW:190},
  'program':      {label:'Program Partners',     dot:'#93c5fd',size:'14px',maxW:190},
  'industry':     {label:'Industry Partners',    dot:'#fbbf24',size:'14px',maxW:190},
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
    <section id={id} ref={ref} className="section text-white" style={{position:'relative',zIndex:2}}>
      <div className="wrap" style={{margin:'0 auto'}}>
        <div className="rv" style={{textAlign:'center',marginBottom:56}}>
          <span className="eyebrow">Partners</span>
          <h2 className="text-2xl font-bold" style={{marginTop:8}}>Backed by industry leaders</h2>
        </div>
        <div className="rv glass-green p-14" style={{display:'flex',flexDirection:'column',gap:44}}>
          {ORDER.map(tier=>{
            const items=grouped[tier]; if(!items.length) return null;
            const {label,dot,size,maxW}=CFG[tier];
            return(
              <div key={tier} className="rv">
                <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:dot,flexShrink:0,boxShadow:`0 0 8px ${dot}`}}/>
                  <span className='' style={{fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace'}}>{label}</span>
                  <div style={{flex:1,height:1,background:'rgba(0,0,0,0.07)'}}/>
                </div>
                <div className='flex flex-wrap gap-x-8 gap-y-4'>
                  {items.map(p=>(
                    <>
                    <div key={p.id} className="partner-pill aria-hidden:hidden" aria-hidden={!!p.logoUrl}>
                      <span style={{fontWeight:700,fontSize:size,color:'rgba(255,255,255,0.70)',textAlign:'center'}}>{p.name}</span>
                    </div>
                      <div key={p.id+'-logo'} className="partner-logo aria-hidden:hidden" aria-hidden={!p.logoUrl}>
                        {p.logoUrl && <img src={"/assets/images/partners/"+p.logoUrl} className='' alt={p.name} style={{maxWidth:'100%',maxHeight:40,objectFit:'contain',opacity:1}}/>}
                      </div>
                    </>
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
