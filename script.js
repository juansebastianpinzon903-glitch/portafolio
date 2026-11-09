const menuToggle=document.getElementById("menuToggle");const mainNav=document.getElementById("mainNav");const themeToggle=document.getElementById("themeToggle");
menuToggle?.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú")});
themeToggle?.addEventListener("click",()=>{const light=document.body.classList.toggle("light");try{localStorage.setItem("portfolio-theme",light?"light":"dark")}catch(e){}themeToggle.setAttribute("aria-pressed",String(light))});
try{if(localStorage.getItem("portfolio-theme")==="light")document.body.classList.add("light")}catch(e){}
