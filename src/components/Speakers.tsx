import { useEffect,useRef,useState } from 'react';
import { SPEAKERS } from '../data';
import type { SectionProps } from '../types';

export default function Speakers({id}:SectionProps){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.rv,.rv-sc').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*50)); }); },{threshold:0.04});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);
  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap">
        <div className="rv" style={{marginBottom:48,display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
          <div><span className="eyebrow">Speakers</span><h2 className="t-h1" style={{marginTop:8}}>Meet the experts</h2></div>
          <div style={{fontSize:13,color:'rgba(255,255,255,0.30)',fontWeight:500,fontFamily:'JetBrains Mono,monospace'}}>{SPEAKERS.length} confirmed</div>
        </div>
        <div className="speakers-grid rv">
          {SPEAKERS.map((s,i)=><SCard key={s.id} s={s} i={i}/>)}
        </div>
      </div>
    </section>
  );
}

function SCard({s,i}:{s:typeof SPEAKERS[0];i:number}){
  const [err,setErr]=useState(false);
  const init=s.name.split(' ').filter((_,j,a)=>j===0||j===a.length-1).map(w=>w[0]).join('');
  return(
    <div className={`rv-sc d${(i%6)+1} glass glass-hover`} style={{borderRadius:'var(--r3)',overflow:'hidden',cursor:'default'}}>
      <div style={{height:200,background:'rgba(13,74,58,0.3)',overflow:'hidden',position:'relative'}}>
        {!err?(
          <img src={s.imageUrl} alt={s.name} onError={()=>setErr(true)}
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top',transition:'transform 0.5s ease'}}
            onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.08)')}
            onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}
          />
        ):(
          <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,rgba(13,74,58,0.8),rgba(34,197,94,0.3))'}}>
            <span style={{fontWeight:800,fontSize:28,color:'rgba(255,255,255,0.7)'}}>{init}</span>
          </div>
        )}
        {/* Bottom gradient fade */}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:60,background:'linear-gradient(transparent,rgba(5,16,10,0.7))'}}/>
      </div>
      <div style={{padding:'16px 18px'}}>
        <div style={{fontWeight:700,fontSize:14,color:'rgba(255,255,255,0.85)',lineHeight:1.3,marginBottom:3}}>{s.name}</div>
        <div style={{fontSize:12,fontWeight:600,color:'#4ade80',marginBottom:8}}>{s.title}</div>
        <div style={{display:'flex',flexDirection:'column',gap:3}}>
          {s.affiliations.map((a,j)=>(
            <div key={j} style={{display:'flex',gap:7,alignItems:'flex-start'}}>
              <span style={{width:3,height:3,borderRadius:'50%',background:'rgba(255,255,255,0.2)',marginTop:5,flexShrink:0}}/>
              <span style={{fontSize:12,color:'rgba(255,255,255,0.35)',lineHeight:1.5}}>{a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
