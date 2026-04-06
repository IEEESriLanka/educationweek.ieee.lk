import { useState,useEffect,useRef } from 'react';
import { Clock,Mic,Users,Presentation,Network,Coffee } from 'lucide-react';
import { SCHEDULE_SESSIONS } from '../data';
import type { ScheduleTrack,ScheduleSession,SectionProps } from '../types';

const TRACKS:{id:ScheduleTrack;label:string}[]=[
  {id:'school',label:'School & Teachers'},
  {id:'undergraduate',label:'Undergraduates'},
  {id:'graduate',label:'Graduate & Career'},
];
const TYPE:Record<ScheduleSession['type'],{icon:React.ReactNode;bg:string;text:string;label:string}>={
  ceremony:   {icon:<Presentation size={11}/>,bg:'rgba(196,181,253,0.15)',text:'#c4b5fd',label:'Ceremony'},
  session:    {icon:<Mic size={11}/>,         bg:'rgba(74,222,128,0.12)',  text:'#4ade80',label:'Session'},
  break:      {icon:<Coffee size={11}/>,      bg:'rgba(255,255,255,0.06)', text:'rgba(255,255,255,0.35)',label:'Break'},
  workshop:   {icon:<Users size={11}/>,       bg:'rgba(147,197,253,0.15)',text:'#93c5fd',label:'Workshop'},
  networking: {icon:<Network size={11}/>,     bg:'rgba(253,224,71,0.12)', text:'#fde047',label:'Networking'},
};

export default function Schedule({id}:SectionProps){
  const [active,setActive]=useState<ScheduleTrack>('school');
  const [key,setKey]=useState(0);
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.rv').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*70)); }); },{threshold:0.08});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);
  const change=(t:ScheduleTrack)=>{ setActive(t); setKey(k=>k+1); };
  const sessions=SCHEDULE_SESSIONS.filter(s=>s.tracks.includes(active));

  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap" style={{maxWidth:860,margin:'0 auto'}}>
        <div className="rv" style={{marginBottom:48}}>
          <span className="eyebrow">Programme</span>
          <h2 className="t-h1" style={{marginTop:8}}>Event Schedule</h2>
          <p style={{marginTop:10,fontSize:14,color:'rgba(255,255,255,0.35)'}}>07 April 2025 · TRACE Expert City, Colombo 10</p>
        </div>

        {/* Tabs */}
        <div className="rv tab-strip" style={{marginBottom:28}}>
          {TRACKS.map(t=>(
            <button key={t.id} onClick={()=>change(t.id)} className={`tab${active===t.id?' on':''}`}>{t.label}</button>
          ))}
        </div>

        <div className="rv" style={{fontSize:10,color:'rgba(255,255,255,0.20)',fontFamily:'JetBrains Mono,monospace',fontWeight:600,marginBottom:14,letterSpacing:'0.08em'}}>
          {sessions.length} SESSIONS
        </div>

        <div key={key} style={{display:'flex',flexDirection:'column',gap:8}}>
          {sessions.map((s:ScheduleSession,i:number)=>{
            const ts=TYPE[s.type];
            return(
              <div key={s.id} className="glass" style={{
                padding:'clamp(12px,2vw,16px) clamp(14px,2.5vw,22px)',
                display:'flex',flexWrap:'wrap',gap:12,alignItems:'center',
                borderRadius:'var(--r2)',cursor:'default',
                animation:`fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) ${i*35}ms both`,
                transition:'background 0.2s,border-color 0.2s',
              }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.07)';(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.16)';}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.04)';(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)';}}>
                <div style={{display:'flex',alignItems:'center',gap:5,minWidth:90,flexShrink:0}}>
                  <Clock size={10} style={{color:'rgba(255,255,255,0.18)'}}/>
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'rgba(255,255,255,0.30)',fontWeight:500}}>{s.time}</span>
                </div>
                <span style={{display:'inline-flex',alignItems:'center',gap:4,padding:'3px 10px',borderRadius:999,background:ts.bg,color:ts.text,fontSize:11,fontWeight:600,flexShrink:0,border:`1px solid ${ts.text.replace(')',',0.2)').replace('rgb','rgba')}`}}>
                  {ts.icon}{ts.label}
                </span>
                <div style={{flex:1,minWidth:150}}>
                  <div style={{fontSize:14,fontWeight:600,color:'rgba(255,255,255,0.80)',lineHeight:1.4}}>{s.title}</div>
                  {s.speaker&&<div style={{fontSize:12,color:'rgba(74,222,128,0.7)',marginTop:2,fontWeight:500}}>{s.speaker}</div>}
                </div>
                {s.tracks.length>=3&&<span style={{padding:'2px 9px',borderRadius:999,background:'rgba(255,255,255,0.05)',color:'rgba(255,255,255,0.25)',fontSize:10,fontWeight:600,flexShrink:0,border:'1px solid rgba(255,255,255,0.08)'}}>All Tracks</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
