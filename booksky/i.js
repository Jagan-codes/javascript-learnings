var a=document.querySelector(".overlay")
var b=document.querySelector(".pbox")
var c=document.getElementById("abtn")
c.addEventListener("click",function()
{
    a.style.display="block"
    b.style.display="block"
})
var cb=document.getElementById("cancel")
cb.addEventListener("click",function(event)
{
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"

})
// select container ,add book,book title,book author, book description-input
var container=document.querySelector(".contain")
var addbook=document.getElementById("ab")
var booktitleinput=document.getElementById("bti")
var bookauthorinput=document.getElementById("bai")
var bookdescribinput=document.getElementById("bdi")
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookco")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescribinput.value}</p>
    <button onclick="dele(event)" >Delete</button>`
    container.append(div)
    a.style.display="none"
    b.style.display="none"
})

function dele(event){
    event.target.parentElement.remove()

}

