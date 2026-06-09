
self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});


self.addEventListener('fetch', (e) => {
 
  e.respondWith(fetch(e.request));
});


function abrirModal() {
    document.getElementById("meuModal").style.display = "block";
}


function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}
