import { useState, useEffect } from 'react';
export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => { const {scrollTop:s,scrollHeight:sh,clientHeight:ch}=document.documentElement; setP(sh>ch?s/(sh-ch)*100:0); };
    window.addEventListener('scroll',h,{passive:true}); return ()=>window.removeEventListener('scroll',h);
  },[]);
  return <div className="sp-wrap"><div className="sp-fill" style={{width:`${p}%`}}/></div>;
}
