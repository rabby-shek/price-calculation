function  option_1(){
    let option = document.getElementById('product-1');
    let $option = document.getElementById('product-2');
    let Rate = document.getElementById('rate');
    if(id = 'product-1')
   {
    Rate.innerHTML = "15000";

   }
 else if  (id = 'product-2')
 {
    Rate.innerHTML = "2000";
   }

   else{
    Rate.innerHTML = "000";

   }
    


}


function calculate(){
    let Quantity = Number(document.getElementById('quantity').value);
    let Rate = document.getElementById('rate').innerHTML;
    let Total = document.getElementById('total');
    Total.innerHTML = Quantity * Rate;

   


    
}