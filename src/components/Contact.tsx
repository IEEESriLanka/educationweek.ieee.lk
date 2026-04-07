import { useEffect,useRef } from 'react';
import { Phone,Mail,MapPin,ArrowRight,ExternalLink,Clock } from 'lucide-react';
import { CONTACTS } from '../data';
import type { ContactPerson,SectionProps } from '../types';

export default function Contact({id}:SectionProps){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.querySelectorAll('.rv,.rv-r').forEach((el,i)=>setTimeout(()=>el.classList.add('on'),i*75)); }); },{threshold:0.08});
    if(ref.current)obs.observe(ref.current); return()=>obs.disconnect();
  },[]);

  return(
    <section id={id} ref={ref} className="section" style={{position:'relative',zIndex:2}}>
      <div className="wrap">
        <div className="grid-2">
          {/* Left */}
          <div>
            <div className="rv"><span className="eyebrow">Contact</span>
              <h2 className="t-h1" style={{marginTop:8,marginBottom:14}}>Ready to join us?</h2>
              <p style={{fontSize:15,lineHeight:1.75,color:'rgba(255,255,255,0.45)',marginBottom:32}}>IEEE Education Week Sri Lanka 2025 is completely free. Reach out for any inquiries about registration, sponsorship, or partnerships.</p>
            </div>

            {/* Venue card */}
            <div className="rv glass-green" style={{padding:'clamp(20px,3vw,30px)',borderRadius:'var(--r3)',marginBottom:24,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',bottom:-40,right:-40,width:150,height:150,background:'radial-gradient(circle,rgba(34,197,94,0.12) 0%,transparent 70%)',pointerEvents:'none'}}/>
              <div style={{fontSize:9,fontWeight:600,color:'rgba(74,222,128,0.5)',letterSpacing:'0.12em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',marginBottom:20}}>Venue & Details</div>
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                {[
                  {icon:<MapPin size={14}/>,label:'Location',text:'TRACE Expert City, Colombo 10',c:'#4ade80'},
                  {icon:<Clock size={14}/>,label:'Date & Time',text:'07 April 2025 · 9:00 AM onwards',c:'#93c5fd'},
                  {icon:<Mail size={14}/>,label:'Entry',text:'Free — Open to all attendees',c:'#f9a8d4'},
                ].map(({icon,label,text,c})=>(
                  <div key={label} style={{display:'flex',alignItems:'flex-start',gap:12}}>
                    <div style={{width:30,height:30,borderRadius:8,background:`${c.replace(')',',0.12)').replace('rgb','rgba')}`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:c,border:`1px solid ${c.replace(')',',0.2)').replace('rgb','rgba')}`}}>{icon}</div>
                    <div>
                      <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.25)',textTransform:'uppercase',letterSpacing:'0.08em'}}>{label}</div>
                      <div style={{fontSize:13,fontWeight:500,color:'rgba(255,255,255,0.70)',marginTop:2}}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rv" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="https://educationweek.ieee.lk" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{textDecoration:'none'}}>
                Register on Official Site <ExternalLink size={14}/>
              </a>
              <button onClick={()=>document.getElementById('speakers')?.scrollIntoView({behavior:'smooth'})} className="btn btn-glass">
                Meet the Speakers <ArrowRight size={14}/>
              </button>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="rv" style={{marginBottom:20}}>
              <div style={{fontWeight:700,fontSize:18,color:'rgba(255,255,255,0.85)'}}>Organizing Committee</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,0.30)',marginTop:4}}>Get in touch directly</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {CONTACTS.map((c:ContactPerson,i:number)=>(
                <div key={c.id} className={`rv glass glass-hover d${i+1}`} style={{padding:'clamp(18px,2.5vw,24px)',borderRadius:'var(--r3)'}}>
                  <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
                    <div style={{width:42,height:42,borderRadius:12,background:'linear-gradient(135deg,rgba(21,128,61,0.5),rgba(34,197,94,0.3))',border:'1px solid rgba(74,222,128,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <span style={{fontWeight:800,fontSize:16,color:'rgba(255,255,255,0.80)'}}>{c.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div style={{fontWeight:700,fontSize:14,color:'rgba(255,255,255,0.82)'}}>{c.name}</div>
                      <div style={{fontSize:12,fontWeight:600,color:'#4ade80',marginTop:1}}>{c.role}</div>
                      <div style={{fontSize:12,color:'rgba(255,255,255,0.30)'}}>{c.organization}</div>
                    </div>
                  </div>
                  <div style={{borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:12,display:'flex',flexDirection:'column',gap:8}}>
                    {[
                      {icon:<Phone size={12}/>,href:`tel:${c.phone.replace(/\s/g,'')}`,text:c.phone,bg:'rgba(74,222,128,0.10)',c:'#4ade80'},
                      {icon:<Mail size={12}/>,href:`mailto:${c.email}`,text:c.email,bg:'rgba(147,197,253,0.10)',c:'#93c5fd'},
                    ].map(({icon,href,text,bg,c:cc},j)=>(
                      <a key={j} href={href} style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
                        <div style={{width:26,height:26,borderRadius:7,background:bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,color:cc,border:`1px solid ${cc.replace(')',',0.2)').replace('rgb','rgba')}`}}>{icon}</div>
                        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:11,color:'rgba(255,255,255,0.45)',fontWeight:500}}>{text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
