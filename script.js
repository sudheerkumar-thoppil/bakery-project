function addtoCart(){
    total=[];
    
    var carts = document.getElementById("btn").innerHTML;
    carts = parseInt(carts);
    if(carts>0){
        carts=carts+1;
        document.getElementById("btn").innerHTML=carts;
        alert("One More Item Added To Cart")
        total =this.productname;
        alert("item is"+ total);
        
    }
    else
        {
        carts=1;
        document.getElementById("btn").innerHTML=carts;
        alert("One Item Added To Cart");
    
        }
    
}

   