var xia = document.getElementById("xia");
    var xiala = document.getElementById("xiala");
    xia.onclick = function (e) {
        xiala.style.display = "block";
        e.cancelBubble = true;
        e.stopPropagation();

    };
document.body.onclick=function(e){
    xiala.style.display = "none";
};



