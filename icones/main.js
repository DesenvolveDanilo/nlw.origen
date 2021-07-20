
// char  e string
' caracter e texto'
//number
1234556
//bolean
//true or false

/*({
name : 'carro'
cor: 'vermelho'
correr: function()
{
    
}
})*/


const nav = document.querySelector('#header nav')// query = pesquisar query selector pesquisar seletor do css, a constante "nav" recebe esse valor
const toggle = document.querySelectorAll( "nav .toggle")

for (const element of toggle){
    element.addEventListener("click", function(){
    nav.classList.toggle("show")//procura  no nav e usa o toggle=troca para ativar e desativar o show, abrindo e fechando o menu.
    })
}
/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll("nav ul li a")

for(const link of links){

    link.addEventListener("click", function(){
        nav.classList.remove("show")
    })
}
//mudar o header da pagina quando der scroll aplica sombra
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function(){
    if (window.scrollY>=navHeight){// maior que a altura do header
   header.classList.add("scroll")// adiciona a classe scroll que tem a propriedade no css box-shadow
    }else{
        //menor que a altura do header
        header.classList.remove("scroll")//remove o box-shadow
    }
})