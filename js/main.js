// window.addEventListener("scroll", function () {
//   if (window.scrollY > 150) {
//     this.document.querySelector("#navbar").style.opacity = 0.9;
//   } else {
//     this.document.querySelector("#navbar").style.opacity = 1;
//   }
// });
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    var ab = document.querySelector(".main-navi");
    var text = this.document.querySelectorAll(".main-navi a");
    var logo = this.document.querySelector(".main-navi .logo i");
    // this.console.log("스크롤");
    ab.style.background = "none";
    ab.style.backgroundColor = "#fff";
    ab.style.border = "1px solid #ebebeb";
    // ab.style.backgroundlineargradient = "rgba(0,0,0,0)";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#222";
    }
    logo.style.color = "rgb(255, 56, 92)";
  } else {
    var ab = document.querySelector(".main-navi");
    var text = this.document.querySelectorAll(".main-navi a");
    var logo = this.document.querySelector(".main-navi .logo i");
    // ab.stlye.backgroundColor = "rgba(0,0,0,0)";
    ab.style.background =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))";
    ab.style.border = "none";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "white";
    }
    logo.style.color = "whitesmoke";
  }
});
