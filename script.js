function irAoTopo(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function seletor(){
  location.href = "seletor.html";
}

let info = document.querySelector(".info");
function mostrarInfo(){
  info.style.display = "grid";
}
function esconderInfo(){
  info.style.display = "none";
}