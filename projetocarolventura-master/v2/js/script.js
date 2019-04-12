let botao = document.querySelector('.sidebar-menu__button');

let lista = document.querySelector('.sidebar-menu');

console.log ('Meu menu inicial é', lista.style.display)
botao.addEventListener('click',function(click){
   
 if (lista.style.display  ==='block'){//Se estiverescondida
    lista.style.display = 'none'; //Mostro a lista
    console.log ('Meu menu inicial aberto é', lista.style.left)
 }else{
    lista.style.display='block'//escondo a lista
    console.log ('Meu menu inicial  escondido é', lista.style.left)
 };
   
});
