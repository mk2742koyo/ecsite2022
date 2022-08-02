let a = document.querySelectorAll(".zaiko")
for(let i=0;i<a.length;i++){
    let text = a[i].innerText;
    if(text == "true"){
        a[i].remove();
    }else{
        a[i].innerText="売り切れ"
    }
}

let mainimg= document.querySelector(".goodsmain");
let listimg = document.querySelectorAll(".goodslist")
for(let i=0;i<listimg.length;i++){
    listimg[i].addEventListener("click",function(){
        console.log(listimg)
        let code =listimg[i].getAttribute("src");
        mainimg.setAttribute("src",code)
    })
    
}

let item = document.querySelectorAll(".content");
let n = 0;
let btn = document.querySelector(".btn");
item[item.length-1].classList.add("remove");
btn.addEventListener("click",function(){
    if(n == 0){
        item[item.length-1].classList.remove("remove");
        n = 1;
        btn.innerText="とじる";
    }else{
        item[item.length-1].classList.add("remove");
        n = 0;
        btn.innerText="もっとみる";
    }
});