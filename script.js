// pardon pour la qualité du code madame.

var a= document.getElementsByClassName("fa-heart")
var quan1,quan2,quan3,price1,price2,price3,total;
price1=100;
price2=200;
price3=300;
function colorchange(){
    this.classList.toggle("red")
}
for(var i=0;i<a.length;i++){
    a[i].addEventListener("click",colorchange)
}
quan1=2;
document.getElementById('quant1').innerHTML = "quantity: "+quan1;
quan2=4;
document.getElementById('quant2').innerHTML = "quantity: "+quan2;
quan3=1;
document.getElementById('quant3').innerHTML = "quantity: "+quan3;

var b= document.getElementsByClassName("fa-plus");
var c= document.getElementsByClassName("fa-minus");
function add1 (){
    quan1=quan1+1;
    document.getElementById('quant1').innerHTML = "quantity: "+quan1;
}
function minus1 (){
   quan1=quan1-1;
    document.getElementById('quant1').innerHTML = "quantity: "+quan1;
}
function add2 (){
    quan2=quan2+1;
    document.getElementById('quant2').innerHTML = "quantity: "+quan2;
}
function minus2 (){
    quan2=quan2-1;
    document.getElementById('quant2').innerHTML = "quantity: "+quan2;
}
function add3 (){
    quan3=quan3+1;
    document.getElementById('quant3').innerHTML = "quantity: "+quan3;
}
function minus3 (){
    quan3=quan3-1;
    document.getElementById('quant3').innerHTML = "quantity: "+quan3;
}

b[0].addEventListener("click",add1);
c[0].addEventListener("click",minus1);
b[1].addEventListener("click",add2);
c[1].addEventListener("click",minus2);
b[2].addEventListener("click",add3);
c[2].addEventListener("click",minus3);

//add total price to html
total=quan1*price1+quan2*price2+quan3*price3;
document.getElementById('global').innerHTML = "your total is:"+total;
document.getElementById('global').style.cssText += 'color: black; padding: 10px; font-size: 20px;display: flex;justify-content: flex-end;margin-right: 80px;font-weight: bolder;letter-spacing: 1px;';


    