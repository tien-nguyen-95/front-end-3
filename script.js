window.onload = function(){
    let img  = document.getElementById("myImage");
    let ul = document.getElementById("list-menu");
    img.onclick = function() {
        let nameImg = this.src.split('-');
        if(nameImg[nameImg.length-1] == "hamburger.svg")
        {
            this.src = "./images/icon-close.svg";
            ul.style.display = "flex";
            document.getElementsByClassName("banner")[0].style.filter = "brightness(50%)";
            document.getElementsByClassName("banner")[0].style.backgroundColor = "hsl(0, 0%, 98%)";
            document.getElementsByClassName("banner-info")[0].style.backgroundColor = "hsl(0, 0%, 98%)";
        }
        else
        {
            this.src = "./images/icon-hamburger.svg";
            ul.style.display = "none"
            document.getElementsByClassName("banner")[0].style.filter = "brightness(100%)";
            document.getElementsByClassName("banner")[0].style.backgroundColor = "white";
            document.getElementsByClassName("banner-info")[0].style.backgroundColor = "white";
        }
    }
}
