import { ArrowUp,ExternalLink } from 'lucide-react';
import { NAV_LINKS,PAST_EDITIONS } from '../data';

export default function Footer(){
  const go=(href:string)=>{ if(href.startsWith('#')) document.getElementById(href.slice(1))?.scrollIntoView({behavior:'smooth'}); };
  return(
    <footer style={{position:'relative',zIndex:2,borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      {/* Glass CTA strip */}
      <div style={{background:'rgba(255,255,255,0.03)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.06)',padding:'44px 0'}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:24}}>
          <div>
            <div style={{fontWeight:800,fontSize:'clamp(18px,3vw,26px)',color:'rgba(255,255,255,0.88)',letterSpacing:'-0.02em',marginBottom:6}}>Ready to attend?</div>
            <div style={{fontSize:14,color:'rgba(255,255,255,0.30)'}}>07 April 2025 · TRACE Expert City · Free Entrance</div>
          </div>
          <a href="https://educationweek.ieee.lk" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{textDecoration:'none',flexShrink:0}}>
            Register Free <ExternalLink size={14}/>
          </a>
        </div>
      </div>

      {/* Links grid */}
      <div className="wrap" style={{padding:'52px 20px 0'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,200px),1fr))',gap:'36px 48px'}}>
          {/* Brand */}
          <div style={{gridColumn:'span 2'}}>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
              <div style={{width:34,height:34,borderRadius:10,background:'linear-gradient(135deg,rgba(21,128,61,0.7),rgba(34,197,94,0.5))',border:'1px solid rgba(74,222,128,0.25)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:9,fontWeight:800,color:'white'}}>IEEE</span>
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:13,color:'rgba(255,255,255,0.80)'}}>Education Week</div>
                <div style={{fontSize:10,color:'rgba(255,255,255,0.25)',marginTop:1}}>Sri Lanka 2025</div>
              </div>
            </div>
            <p style={{fontSize:13,color:'rgba(255,255,255,0.28)',lineHeight:1.7,maxWidth:240}}>Connecting students, educators, and professionals through emerging technology knowledge.</p>
          </div>

          {/* Nav */}
          <div>
            <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.20)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',marginBottom:16}}>Navigation</div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {NAV_LINKS.map(l=>(
                <button key={l.label} onClick={()=>go(l.href)} style={{background:'none',border:'none',cursor:'pointer',textAlign:'left',fontSize:13,color:'rgba(255,255,255,0.38)',fontFamily:'inherit',fontWeight:500,padding:0,transition:'color 0.15s'}}
                  onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,0.80)')}
                  onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.38)')}>{l.label}</button>
              ))}
            </div>
          </div>

          {/* Past Editions */}
          <div>
            <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.20)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',marginBottom:16}}>Past Editions</div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {PAST_EDITIONS.map(ed=>(
                <a key={ed.year} href={ed.url} target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:7,fontSize:13,color:'rgba(255,255,255,0.38)',fontWeight:500,textDecoration:'none',transition:'color 0.15s'}}
                  onMouseEnter={e=>(e.currentTarget.style.color='rgba(255,255,255,0.80)')}
                  onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,0.38)')}>
                  EduWeek {ed.year}
                  {ed.active&&<span style={{fontSize:9,fontWeight:700,background:'rgba(74,222,128,0.15)',color:'#4ade80',padding:'1px 7px',borderRadius:999}}>Live</span>}
                  <ExternalLink size={10} style={{opacity:0.3}}/>
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.20)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',marginBottom:16}}>Event Info</div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {['07 April 2025','TRACE Expert City','Colombo 10, Sri Lanka','Free Entrance','3 Audience Tracks','10+ Expert Speakers'].map(item=>(
                <div key={item} style={{display:'flex',alignItems:'center',gap:8,fontSize:12,color:'rgba(255,255,255,0.28)'}}>
                  <span style={{width:3,height:3,borderRadius:'50%',background:'#22c55e',flexShrink:0}}/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop:'1px solid rgba(255,255,255,0.05)',marginTop:48}}>
        <div className="wrap" style={{padding:'18px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <div style={{fontSize:11,color:'rgba(255,255,255,0.18)',fontFamily:'JetBrains Mono,monospace'}}>
            © 2025 IEEE Sri Lanka Section · IEEE Young Professionals Sri Lanka
          </div>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} style={{
            display:'flex',alignItems:'center',gap:6,padding:'6px 14px',borderRadius:999,
            border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',
            color:'rgba(255,255,255,0.25)',fontSize:11,fontFamily:'JetBrains Mono,monospace',cursor:'pointer',transition:'all 0.2s',
          }}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.07)';(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.70)';}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.03)';(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.25)';}}>
            Back to top <ArrowUp size={11}/>
          </button>
        </div>
      </div>
    </footer>
  );
}
