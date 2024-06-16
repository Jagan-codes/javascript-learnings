var a=document.querySelector(".navbar-menu-toggle")
var b=document.querySelector(".side-navbar")
a.addEventListener("click",function()
{
b.style.left="0px"
})
var c=document.getElementById("xmark")
c.addEventListener("click",function()
{
    
   b.style.left="-60%"

})



//this is for collection.html
var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var productList=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function()
{
   var enteredvalue=event.target.value.toUpperCase()
   for( var i=0;i<productList.length;i++)
   {
       var productname=productList[i].querySelector("p").textContent
       if(productname.toUpperCase().indexOf(enteredvalue)<0)
       {
           productList[i].style.display="none"
       }
       else{
           productList[i].style.display="block"
       }
   }
})

var a=document.querySelector("same")
a.addEventListener("click",function()
{
   a.style.border="bottom-border"

})
