// window.addEventListener("scroll", function(event){
//     console.log("произошла прокутка страницы", event)
// })


// let checkout=document.querySelector(".Checkout")
// input.onkeydown=(event)=>{
    
// }

let save = localStorage.getItem("save")
if(!save){
    save=prompt("Введите ваши данные")
if(save){
    localStorage.setItem("save", save)
}
}

let comission = document.querySelector("#Checkout")
    button.onclick=function(){
        window.location="Кухня_Заказ.html"
        }