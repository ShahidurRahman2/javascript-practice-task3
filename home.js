
// how to add money in mobile banking

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

    const inputmoney=document.getElementById('add-input-id').value;
    
    const inputpin=document.getElementById('ppin-id').value;
    if(inputpin=== '12345'){
        const mainBalance =document.getElementById('balance').innerText;
        const money=parseFloat(inputmoney);
        const  mbalance=parseFloat(mainBalance);
        const mnewbalance =money + mbalance;
       document.getElementById('balance').innerText=mnewbalance;
    }else{
        alert('wrong pin........');
    }

})