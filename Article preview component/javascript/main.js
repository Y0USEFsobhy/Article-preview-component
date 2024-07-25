let shareBtn = document.getElementById("shareBtn");
let smScreen = document.getElementById("smScreen");

shareBtn.addEventListener("click" , function(){
    if (smScreen.classList.contains("bottom-[-100px]") || smScreen.classList.contains("md:hidden")) {
        smScreen.classList.remove("bottom-[-100px]");
        smScreen.classList.add("bottom-0");

        smScreen.classList.remove("md:hidden");
        smScreen.classList.add("md:flex");
    }else{
        smScreen.classList.remove("bottom-0");
        smScreen.classList.add("bottom-[-100px]");

        smScreen.classList.remove("md:flex");
        smScreen.classList.add("md:hidden");
    }
});
console.log("hhhh")


