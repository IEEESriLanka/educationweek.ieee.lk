import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Calendar } from 'lucide-react';
import { NAV_LINKS, PAST_EDITIONS } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';
import type { NavLink } from '../types';

const SECTIONS = ['home','about','features','speakers','schedule','partners','contact'];

export default function Navbar() {
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const [edOpen,setEdOpen]=useState(false);
  const edRef=useRef<HTMLDivElement>(null);
  const active=useScrollSpy(SECTIONS,110);

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20);
    window.addEventListener('scroll',h,{passive:true}); return()=>window.removeEventListener('scroll',h);
  },[]);
  useEffect(()=>{
    const h=(e:MouseEvent)=>{ if(edRef.current&&!edRef.current.contains(e.target as Node)) setEdOpen(false); };
    document.addEventListener('mousedown',h); return()=>document.removeEventListener('mousedown',h);
  },[]);
  useEffect(()=>{ const h=()=>{ if(window.innerWidth>=1024)setOpen(false); }; window.addEventListener('resize',h); return()=>window.removeEventListener('resize',h); },[]);
  useEffect(()=>{ document.body.style.overflow=open?'hidden':''; return()=>{ document.body.style.overflow=''; }; },[open]);

  const go=(href:string)=>{ setOpen(false); if(href.startsWith('#')) document.getElementById(href.slice(1))?.scrollIntoView({behavior:'smooth'}); };

  const navBase: React.CSSProperties = {
    position:'fixed',top:0,left:0,right:0,zIndex:100,
    transition:'all 0.3s ease',
  };
  const navScrolled: React.CSSProperties = {
    background:'rgba(5,16,10,0.85)',
    backdropFilter:'blur(24px)',
    WebkitBackdropFilter:'blur(24px)',
    borderBottom:'1px solid rgba(255,255,255,0.08)',
    boxShadow:'0 4px 32px rgba(0,0,0,0.4)',
  };
  const navTop: React.CSSProperties = {
    background:'rgba(5,16,10,0.5)',
    backdropFilter:'blur(12px)',
    WebkitBackdropFilter:'blur(12px)',
    borderBottom:'1px solid rgba(255,255,255,0.05)',
  };

  return (
    <>
      <header style={{...navBase,...(scrolled?navScrolled:navTop)}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>

          {/* Logo */}
          <button onClick={()=>go('#home')} style={{display:'flex',alignItems:'center',gap:10,border:'none',background:'none',cursor:'pointer',padding:0}}>
            <div style={{width:34,height:34,borderRadius:10,background:'linear-gradient(135deg,rgba(21,128,61,0.8),rgba(34,197,94,0.6))',border:'1px solid rgba(74,222,128,0.3)',display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(8px)',WebkitBackdropFilter:'blur(8px)',boxShadow:'0 0 16px rgba(34,197,94,0.2)'}}>
              <span style={{fontSize:9,fontWeight:800,color:'white',letterSpacing:'-0.5px'}}>IEEE</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',lineHeight:1}}>
              <span style={{fontSize:13,fontWeight:700,color:'rgba(255,255,255,0.92)',letterSpacing:'-0.3px'}}>Education Week</span>
              <span style={{fontSize:10,fontWeight:500,color:'rgba(255,255,255,0.35)',marginTop:2,letterSpacing:'0.04em'}}>Sri Lanka 2025</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav style={{display:'flex',alignItems:'center',gap:2}} className="hidden lg:flex">
            {NAV_LINKS.map((l:NavLink)=>{
              const isAct=active===l.href.replace('#','');
              return (
                <button key={l.label} onClick={()=>go(l.href)} style={{
                  padding:'7px 13px',borderRadius:8,border:'none',cursor:'pointer',fontFamily:'inherit',
                  fontSize:14,fontWeight:isAct?600:500,
                  color:isAct?'rgba(134,239,172,0.95)':'rgba(255,255,255,0.55)',
                  background:isAct?'rgba(34,197,94,0.10)':'transparent',
                  transition:'all 0.15s',
                }}
                onMouseEnter={e=>{if(!isAct){(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.85)';(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.05)';}}}
                onMouseLeave={e=>{if(!isAct){(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.55)';(e.currentTarget as HTMLElement).style.background='transparent';}}}>
                  {l.label}
                </button>
              );
            })}

            {/* Editions dropdown */}
            <div ref={edRef} style={{position:'relative'}}>
              <button onClick={()=>setEdOpen(v=>!v)} style={{
                display:'flex',alignItems:'center',gap:5,padding:'7px 13px',borderRadius:8,
                border:'none',cursor:'pointer',fontSize:14,fontWeight:500,fontFamily:'inherit',
                color:edOpen?'rgba(134,239,172,0.9)':'rgba(255,255,255,0.55)',
                background:edOpen?'rgba(34,197,94,0.10)':'transparent',transition:'all 0.15s',
              }}>
                <Calendar size={13}/> Past Editions
                <ChevronDown size={13} style={{transition:'transform 0.2s',transform:edOpen?'rotate(180deg)':'none'}}/>
              </button>
              <div className={`nav-drop${edOpen?' open':''}`}>
                <div style={{padding:'6px 10px 8px',fontSize:10,fontWeight:600,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace'}}>All Editions</div>
                {PAST_EDITIONS.map(ed=>(
                  <a key={ed.year} href={ed.url} target="_blank" rel="noopener noreferrer" style={{
                    display:'flex',alignItems:'center',justifyContent:'space-between',
                    padding:'9px 10px',borderRadius:8,textDecoration:'none',fontSize:13,
                    fontWeight:ed.active?600:500,color:ed.active?'#86efac':'rgba(255,255,255,0.55)',
                    background:ed.active?'rgba(34,197,94,0.08)':'transparent',transition:'background 0.12s',
                  }}
                  onMouseEnter={e=>{if(!ed.active)(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.04)';}}
                  onMouseLeave={e=>{if(!ed.active)(e.currentTarget as HTMLElement).style.background='transparent';}}>
                    <span style={{display:'flex',alignItems:'center',gap:8}}>
                      {ed.active&&<span style={{width:5,height:5,borderRadius:'50%',background:'#4ade80',display:'inline-block'}}/>}
                      EduWeek {ed.year}
                      {ed.active&&<span style={{fontSize:9,fontWeight:700,background:'rgba(74,222,128,0.15)',color:'#86efac',padding:'2px 7px',borderRadius:999}}>Current</span>}
                    </span>
                    <ExternalLink size={11} style={{color:'rgba(255,255,255,0.25)',flexShrink:0}}/>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA + hamburger */}
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <button onClick={()=>go('#contact')} className="btn btn-primary btn-sm hidden lg:inline-flex">Register Free</button>
            <button onClick={()=>setOpen(v=>!v)} className="lg:hidden" style={{
              width:36,height:36,borderRadius:9,
              background:open?'rgba(34,197,94,0.10)':'rgba(255,255,255,0.05)',
              border:'1px solid rgba(255,255,255,0.10)',
              color:'rgba(255,255,255,0.7)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all 0.2s',
            }}>{open?<X size={17}/>:<Menu size={17}/>}</button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div onClick={()=>setOpen(false)} style={{position:'fixed',inset:0,zIndex:98,background:'rgba(0,0,0,0.6)',backdropFilter:'blur(4px)',WebkitBackdropFilter:'blur(4px)',opacity:open?1:0,pointerEvents:open?'auto':'none',transition:'opacity 0.25s'}}/>

      {/* Mobile drawer */}
      <div className="lg:hidden" style={{
        position:'fixed',top:64,left:0,right:0,zIndex:99,
        background:'rgba(5,16,10,0.96)',backdropFilter:'blur(32px)',WebkitBackdropFilter:'blur(32px)',
        borderBottom:'1px solid rgba(255,255,255,0.08)',
        transform:open?'translateY(0)':'translateY(-12px)',
        opacity:open?1:0,pointerEvents:open?'auto':'none',
        transition:'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        maxHeight:'calc(100vh - 64px)',overflowY:'auto',
      }}>
        <div style={{padding:'16px 20px 28px',display:'flex',flexDirection:'column',gap:3}}>
          {NAV_LINKS.map((l:NavLink)=>{
            const isAct=active===l.href.replace('#','');
            return(
              <button key={l.label} onClick={()=>go(l.href)} style={{
                textAlign:'left',padding:'12px 14px',borderRadius:10,border:'none',cursor:'pointer',
                fontFamily:'inherit',fontSize:15,fontWeight:isAct?600:500,
                color:isAct?'#86efac':'rgba(255,255,255,0.65)',
                background:isAct?'rgba(34,197,94,0.08)':'transparent',transition:'all 0.15s',
              }}>{l.label}</button>
            );
          })}
          <div style={{borderTop:'1px solid rgba(255,255,255,0.07)',margin:'8px 0',paddingTop:12}}>
            <div style={{fontSize:9,fontWeight:600,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',padding:'0 14px 10px'}}>Past Editions</div>
            {PAST_EDITIONS.map(ed=>(
              <a key={ed.year} href={ed.url} target="_blank" rel="noopener noreferrer" style={{
                display:'flex',alignItems:'center',justifyContent:'space-between',padding:'11px 14px',
                borderRadius:10,textDecoration:'none',fontSize:14,fontWeight:ed.active?600:500,
                color:ed.active?'#86efac':'rgba(255,255,255,0.5)',
              }}>
                EduWeek {ed.year}
                {ed.active&&<span style={{fontSize:9,background:'rgba(74,222,128,0.15)',color:'#4ade80',padding:'2px 8px',borderRadius:999,fontWeight:700}}>Current</span>}
                <ExternalLink size={12} style={{color:'rgba(255,255,255,0.25)'}}/>
              </a>
            ))}
          </div>
          <button onClick={()=>go('#contact')} className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:8}}>Register Free</button>
        </div>
      </div>
    </>
  );
}
