/* PawTint Motion Controller — event-driven, single active motion per mascot */
(()=> {
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const targets=[
  {el:document.querySelector('#mascot-art'),idle:['pawtint-walk','pawtint-hop'],selectors:'#species button,#traits button',action:'walk',jump:'#make-card'},
  {el:document.querySelector('.pet img'),idle:['pawtint-walk','pawtint-hop'],selectors:'.room a,.room button:not(#garden-task)',action:'walk'},
  {el:document.querySelector('.pet img'),idle:['pawtint-walk','pawtint-hop'],selectors:'#garden-task',action:'hop'},
  {el:document.querySelector('.birdy-home img'),idle:['pawtint-walk','pawtint-hop'],selectors:'#garden-task,#birdy-next',action:'hop'},
  {el:document.querySelector('.birdy-guide img'),idle:['pawtint-walk','pawtint-hop'],selectors:'.choice,#next-question,#new-mission,.mystery-box,#mood-choices button',action:'hop'}
 ].filter(x=>x.el);
 const durations={'pawtint-walk':950,'pawtint-hop':880,'is-reacting':820};
 const timers=new WeakMap();
 function clear(el){el.classList.remove('pawtint-walk','pawtint-hop','is-reacting');const timer=timers.get(el);if(timer)clearTimeout(timer);timers.delete(el);delete el.dataset.motionState;}
 function trigger(el,kind){if(reduce.matches)return;clear(el);const token=Symbol(kind);el.dataset.motionToken=String(token);el.dataset.motionState=kind;void el.offsetWidth;el.classList.add(kind);const timer=setTimeout(()=>{if(el.dataset.motionToken===String(token)){el.classList.remove(kind);delete el.dataset.motionState;delete el.dataset.motionToken;timers.delete(el)}},durations[kind]||820);timers.set(el,timer)}
 document.addEventListener('click',e=>{
  if(reduce.matches)return;
  for(const t of targets){if(t.selectors&&e.target.closest(t.selectors)){trigger(t.el,t.action==='react'?'is-reacting':t.action==='hop'?'pawtint-hop':'pawtint-walk');}
   if(t.jump&&e.target.closest(t.jump))trigger(t.el,'pawtint-hop');
  }
 });
 targets.forEach(t=>t.el.addEventListener('animationend',e=>{if(['pawtint-walk','pawtint-hop','mascot-react','mascot-home-react','birdy-guide-react'].includes(e.animationName))clear(t.el)}));
 reduce.addEventListener?.('change',()=>{if(reduce.matches)targets.forEach(t=>clear(t.el))});
})();