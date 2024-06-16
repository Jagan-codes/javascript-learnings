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