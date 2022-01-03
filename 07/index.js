const countE1 = document.getElementsById('website-counter');

updatecount();
 
function updatecount(){
    fetch('https://api.countapi.xyz/update/ifenium/meee/?amount=1').then(res => res.json()).then(res => {
      countE1.innerHTML = res.value;
    });
}