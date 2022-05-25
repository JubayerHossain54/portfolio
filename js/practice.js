

for(var i=0; i<4;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        this.classList.toggle('addclass');
    });
}
