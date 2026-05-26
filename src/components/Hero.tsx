import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar, Ticket, ExternalLink, Users } from 'lucide-react';
import Countdown from './Countdown';
import { eventDate } from '@/App';


interface TL { days:number; hours:number; minutes:number; seconds:number; }
const getT=():TL=>{ const d=Math.max(eventDate.getTime()-Date.now(),0); return {days:Math.floor(d/86400000),hours:Math.floor(d%86400000/3600000),minutes:Math.floor(d%3600000/60000),seconds:Math.floor(d%60000/1000)}; };

export default function Hero() {
  const [t,setT]=useState<TL>(getT());
  const [in_,setIn]=useState(false);
  useEffect(()=>{ setIn(true); const id=setInterval(()=>setT(getT()),1000); return()=>clearInterval(id); },[]);
  const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <section id="home" style={{paddingTop:80,position:'relative',zIndex:2}}>
      <div className="wrap" style={{paddingTop:60,paddingBottom:80}}>

        {/* Eyebrow */}
        {/* <div style={{display:'flex',justifyContent:'center',marginBottom:28}}>
          <span className={`eyebrow rv${in_?' on':''}`}>
            <span className="live-dot"/>
            {eventDate.getDate()} {eventDate.toLocaleString('default',{month:'long'})} {eventDate.getFullYear()}
          </span>
        </div> */}

        <div className={`rv${in_?' on':''}`} style={{display:'flex',justifyContent:'center',marginBottom:16}}>
          <img src="/assets/images/logo/ieee-sl-section-logo.png" alt="IEEE Sri Lanka Section" style={{height:48}}/>
        </div>
        
        {/* Heading */}
        <h1 className={`t-display rv d1${in_?' on':''}`} style={{textAlign:'center',maxWidth:800,margin:'0 auto 20px'}}>
          IEEE Education Week{' '}
          <span className="t-grad">Sri Lanka </span>
          {eventDate.getFullYear()}
        </h1>

        <p className={`rv d2${in_?' on':''}`} style={{textAlign:'center',fontSize:'clamp(15px,1.8vw,18px)',color:'rgba(255,255,255,0.50)',maxWidth:520,margin:'0 auto 40px',lineHeight:1.75,fontWeight:400}}>
          A platform for students, undergraduates, graduates, and professionals to
          showcase expertise and explore emerging technologies.
        </p>

        <div className='flex flex-col justify-center items-center gap-6'>
          <span className='text-xs font-light'>Organized By</span>
          <div className="flex flex-row justify-center gap-6 h-20 mb-8 -mt-2 bg-white shadow-lg shadow-white/20 px-4 py-4 rounded-2xl">
            <img src="/assets/images/logo/yp.png" alt="Young Professionals" className=''/>
            <img src="/assets/images/logo/slinspire-logo.png" alt="SLInspire"/>
          </div>
        </div>

        {/* CTAs */}
        <div className={`rv d3${in_?' on':''}`} style={{display:'flex',justifyContent:'center',gap:12,flexWrap:'wrap',marginBottom:64}}>
          <button onClick={()=>go('about')} className="btn btn-primary btn-lg">Learn More <ArrowRight size={17}/></button>
          <button onClick={()=>go('schedule')} className="btn btn-glass btn-lg">View Schedule</button>
        </div>

        {/* ── Bento ───────────────────────────────────────── */}
        <div className={`hero-bento rv d4${in_?' on':''}`}>

          {/* Dark event card */}
          <div className="glass-green" style={{padding:'clamp(24px,4vw,40px)',display:'flex',flexDirection:'column',gap:24,position:'relative',overflow:'hidden',borderRadius:'var(--r4)'}}>
            {/* Ambient glow inside card */}
            <div style={{position:'absolute',bottom:-60,right:-60,width:200,height:200,background:'radial-gradient(circle,rgba(34,197,94,0.18) 0%,transparent 70%)',pointerEvents:'none'}}/>
            <div>
              <div className="t-label" style={{marginBottom:10}}>Event Details</div>
              <div style={{fontWeight:800,fontSize:'clamp(22px,3.5vw,36px)',letterSpacing:'-0.03em',lineHeight:1.1,color:'rgba(255,255,255,0.92)'}}>
                {eventDate.getDate()}<sup style={{fontSize:12,verticalAlign:'super'}}>th</sup> {eventDate.toLocaleString('default',{month:'long'})} {eventDate.getFullYear()}
                <span style={{display:'block',fontWeight:500,fontSize:'clamp(14px,1.8vw,17px)',color:'rgba(255,255,255,0.45)',marginTop:5}}>TRACE Expert City, Colombo 10</span>
              </div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {[['Free Entrance','rgba(74,222,128,0.15)','#86efac'],['10+ Speakers','rgba(147,197,253,0.15)','#93c5fd'],['3 Tracks','rgba(253,224,71,0.15)','#fde047'],['1 Day','rgba(249,168,212,0.15)','#f9a8d4']].map(([l,bg,c])=>(
                <span key={l as string} style={{padding:'4px 12px',borderRadius:999,fontSize:12,fontWeight:600,background:bg as string,color:c as string,border:`1px solid ${(c as string).replace(')',',0.25)').replace('rgb','rgba')}`}}>{l as string}</span>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {[[<MapPin size={13}/>, 'TRACE Expert City, Colombo 10'],[<Calendar size={13}/>, `${eventDate.getDate()} ${eventDate.toLocaleString('default', { month: 'short' })} · 9:00 AM onwards`],[<Ticket size={13}/>, 'Free — Open to all attendees']].map(([icon,text],i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.40)',fontSize:13,fontWeight:500}}>
                  <span style={{color:'rgba(134,239,172,0.45)',flexShrink:0}}>{icon as React.ReactNode}</span>{text as string}
                </div>
              ))}
            </div>
          </div>

          {/* Countdown card */}
          <Countdown time={t}/>
        </div>

        {/* Stat tiles */}
        <div className="stat-row" style={{marginTop:12,maxWidth:'100%'}}>
          {[
            {v:`${eventDate.getDate()} ${eventDate.toLocaleString('default', { month: 'short' })}`, label:'Event Date', sub: eventDate.getFullYear()},
            {v:'Free', label:'Entrance', sub:'No registration fee'},
            {v:'8', label:'Sessions', sub:'School Students & Undergraduates'},
          ].map(s=>(
            <div key={s.label} className="glass glass-hover" style={{padding:'clamp(16px,2.5vw,24px) clamp(16px,2.5vw,28px)',borderRadius:'var(--r2)'}}>
              <div style={{fontWeight:800,fontSize:'clamp(20px,3vw,34px)',color:'rgba(255,255,255,0.88)',letterSpacing:'-0.03em',lineHeight:1}}>{s.v}</div>
              <div style={{fontSize:13,fontWeight:600,color:'rgba(255,255,255,0.55)',marginTop:6}}>{s.label}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.25)',marginTop:3}}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Venue strip */}
        <div className="glass" style={{marginTop:12,padding:'16px clamp(16px,3vw,28px)',borderRadius:'var(--r2)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <div style={{width:38,height:38,borderRadius:10,background:'rgba(34,197,94,0.12)',border:'1px solid rgba(74,222,128,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <MapPin size={16} style={{color:'#4ade80'}}/>
            </div>
            <div>
              <div style={{fontSize:14,fontWeight:600,color:'rgba(255,255,255,0.85)'}}>TRACE Expert City, Colombo 10</div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.35)'}}>Sri Lanka's premier technology & innovation hub</div>
            </div>
          </div>
          <a href="https://maps.google.com/?q=TRACE+Expert+City+Colombo" target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-sm" style={{textDecoration:'none',flexShrink:0}}>
            Get Directions <ExternalLink size={12}/>
          </a>
        </div>
      </div>
    </section>
  );
}
