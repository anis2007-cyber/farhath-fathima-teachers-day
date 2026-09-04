const PASSWORD="TeacherDay2026";

document.body.classList.add("locked");
const gate=document.getElementById("passwordGate");
const passwordInput=document.getElementById("passwordInput");
const unlockBtn=document.getElementById("unlockBtn");
const passwordError=document.getElementById("passwordError");

function unlock(){
  if(passwordInput.value===PASSWORD){
    document.body.classList.remove("locked");
    gate.style.display="none";
    document.getElementById("passwordInput").value="";
  }else{
    passwordError.style.display="block";
    passwordInput.focus();
  }
}
unlockBtn.addEventListener("click",unlock);
passwordInput.addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});

const openBtn=document.getElementById("openBtn");
const surprise=document.getElementById("surprise");
const envelope=document.getElementById("envelope");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

openBtn.addEventListener("click",()=>{
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({behavior:"smooth"});
  music.play().then(()=>{musicBtn.textContent="🔊"}).catch(()=>{});
});
function toggleLetter(){envelope.classList.toggle("open")}
envelope.addEventListener("click",toggleLetter);
envelope.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggleLetter()}});

musicBtn.addEventListener("click",()=>{
  if(music.paused){music.play();musicBtn.textContent="🔊"}
  else{music.pause();musicBtn.textContent="🔇"}
});
