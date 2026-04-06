import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Calendar, Ticket, ExternalLink, Users } from 'lucide-react';

interface TL { days:number; hours:number; minutes:number; seconds:number; }
const getT=():TL=>{ const d=Math.max(new Date('2025-04-07T09:00:00+05:30').getTime()-Date.now(),0); return {days:Math.floor(d/86400000),hours:Math.floor(d%86400000/3600000),minutes:Math.floor(d%3600000/60000),seconds:Math.floor(d%60000/1000)}; };

const CD=({v,l}:{v:number;l:string})=>(
  <div className="cd-unit">
    <div className="cd-digit">{String(v).padStart(2,'0')}</div>
    <div className="cd-label">{l}</div>
  </div>
);

export default function Hero() {
  const [t,setT]=useState<TL>(getT());
  const [in_,setIn]=useState(false);
  useEffect(()=>{ setIn(true); const id=setInterval(()=>setT(getT()),1000); return()=>clearInterval(id); },[]);
  const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <section id="home" style={{paddingTop:80,position:'relative',zIndex:2}}>
      <div className="wrap" style={{paddingTop:60,paddingBottom:80}}>

        {/* Eyebrow */}
        <div style={{display:'flex',justifyContent:'center',marginBottom:28}}>
          <span className={`eyebrow rv${in_?' on':''}`}>
            <span className="live-dot"/>
            IEEE Sri Lanka Section · 07 April 2025
          </span>
        </div>

        {/* Heading */}
        <h1 className={`t-display rv d1${in_?' on':''}`} style={{textAlign:'center',maxWidth:800,margin:'0 auto 20px'}}>
          IEEE Education Week{' '}
          <span className="t-grad">Sri Lanka</span>
          <br/>— 2025
        </h1>

        <p className={`rv d2${in_?' on':''}`} style={{textAlign:'center',fontSize:'clamp(15px,1.8vw,18px)',color:'rgba(255,255,255,0.50)',maxWidth:520,margin:'0 auto 40px',lineHeight:1.75,fontWeight:400}}>
          A platform for students, undergraduates, graduates, and professionals to
          showcase expertise and explore emerging technologies.
        </p>

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
                07<sup style={{fontSize:12,verticalAlign:'super'}}>th</sup> April 2025
                <span style={{display:'block',fontWeight:500,fontSize:'clamp(14px,1.8vw,17px)',color:'rgba(255,255,255,0.45)',marginTop:5}}>TRACE Expert City, Colombo 10</span>
              </div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {[['Free Entrance','rgba(74,222,128,0.15)','#86efac'],['10+ Speakers','rgba(147,197,253,0.15)','#93c5fd'],['3 Tracks','rgba(253,224,71,0.15)','#fde047'],['1 Day','rgba(249,168,212,0.15)','#f9a8d4']].map(([l,bg,c])=>(
                <span key={l as string} style={{padding:'4px 12px',borderRadius:999,fontSize:12,fontWeight:600,background:bg as string,color:c as string,border:`1px solid ${(c as string).replace(')',',0.25)').replace('rgb','rgba')}`}}>{l as string}</span>
              ))}
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {[[<MapPin size={13}/>, 'TRACE Expert City, Colombo 10'],[<Calendar size={13}/>, '07 April 2025 · 9:00 AM onwards'],[<Users size={13}/>, '10+ Expert Speakers across 3 tracks'],[<Ticket size={13}/>, 'Free — Open to all attendees']].map(([icon,text],i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:8,color:'rgba(255,255,255,0.40)',fontSize:13,fontWeight:500}}>
                  <span style={{color:'rgba(134,239,172,0.45)',flexShrink:0}}>{icon as React.ReactNode}</span>{text as string}
                </div>
              ))}
            </div>
          </div>

          {/* Countdown card */}
          <div className="glass" style={{padding:'clamp(22px,3vw,32px)',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:24}}>
            <div>
              <div className="t-label" style={{marginBottom:6}}>Event Countdown</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.35)',fontWeight:500}}>Time until doors open</div>
            </div>
            <div style={{display:'flex',alignItems:'flex-end',gap:8,justifyContent:'center',flexWrap:'wrap'}}>
              <CD v={t.days}    l="Days"  />
              <div className="cd-sep">:</div>
              <CD v={t.hours}   l="Hours" />
              <div className="cd-sep">:</div>
              <CD v={t.minutes} l="Mins"  />
              <div className="cd-sep">:</div>
              <CD v={t.seconds} l="Secs"  />
            </div>
            <button onClick={()=>go('contact')} className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>Register Free</button>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="stat-row" style={{marginTop:12,maxWidth:'100%'}}>
          {[
            {v:'07 Apr',label:'Event Date',    sub:'2025'},
            {v:'Free',  label:'Entrance',       sub:'No registration fee'},
            {v:'10+',   label:'Expert Speakers',sub:'Industry & academia'},
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
