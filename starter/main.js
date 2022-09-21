

// basic Es5 function declaration
// function name(){}

var myname = "Tobiloba"

function popsomething(){
    alert(myname + " have been coding since 12")
}

// console.log(myname)

// console.log(document)

var ourbody = document.querySelector(".ourpagebody")

// ourbody.style.background = "black"

var hamburger = document.querySelector(".hamburger-container")
var mobilelinkcontainer = document.querySelector(".mobile-link-container")



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkcontainer.classList.toggle('showmobilelink')

}