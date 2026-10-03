(()=>{const r=document.body.dataset.root||'',p=r+'src/pages/',cur=location.pathname.split('/').pop()||'index.html';
const links=[['Home',r+'index.html'],['About',p+'about.html'],['Contact',p+'contact.html'],['Sign In',p+'signin.html']];
const a=([t,h])=>`<a href="${h}" class="${h.endsWith(cur)?'text-[#f25a47]':'text-[#0b2557]'} hover:text-[#f25a47] transition font-medium">${t}</a>`;
document.getElementById('nav').className='sticky top-0 z-50';document.getElementById('nav').innerHTML=`<header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200"><div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<a href="${r}index.html" class="flex items-center gap-2 text-xl font-bold text-[#0b2557]"><img src="${r}assets/images/favicon.svg" class="w-8 h-8" alt="logo">Shaban<span class="text-[#f25a47]">.dev</span></a>
<nav class="hidden md:flex items-center gap-8">${links.map(a).join('')}<a href="${p}signup.html" class="px-4 py-2 rounded-lg bg-[#f25a47] text-white font-semibold hover:bg-[#e0452f] transition">Sign Up</a></nav>
<button id="mb" aria-label="Menu" class="md:hidden p-2 text-slate-700 text-2xl">☰</button></div>
<nav id="mm" class="hidden md:hidden flex-col gap-4 px-4 pb-4">${links.map(a).join('')}<a href="${p}signup.html" class="text-[#f25a47] font-semibold">Sign Up</a></nav></header>`;
document.getElementById('mb').onclick=()=>{const m=document.getElementById('mm');m.classList.toggle('hidden');m.classList.toggle('flex')};
document.getElementById('foot').innerHTML=`<footer class="bg-[#0b2557] border-t border-white/10 mt-20"><div class="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
<div><h3 class="text-xl font-bold text-white mb-3">Shaban<span class="text-[#f25a47]">.dev</span></h3><p class="text-slate-300 text-sm">Web Technologies student building responsive, modern websites with HTML5 &amp; Tailwind CSS.</p></div>
<div><h4 class="font-semibold text-white mb-3">Quick Links</h4><div class="flex flex-col gap-2 text-sm text-slate-300">${links.map(([t,h])=>`<a class="hover:text-[#f25a47]" href="${h}">${t}</a>`).join('')}<a class="hover:text-[#f25a47]" href="${p}signup.html">Sign Up</a></div></div>
<div><h4 class="font-semibold text-white mb-3">Contact</h4><ul class="text-sm text-slate-300 space-y-2"><li>📧 shaban.info.pk@gmail.com</li><li>📞 0323 7899701</li><li>📍 Mustafa Town, Lahore</li></ul></div></div>
<div class="border-t border-white/10 py-4 text-center text-xs text-slate-400">© 2026 Muhammad Shaban. All rights reserved.</div></footer>`;
const f=document.getElementById('authForm');if(f)f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').classList.remove('hidden');f.reset()});
})();
