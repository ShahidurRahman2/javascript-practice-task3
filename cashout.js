


// document.getElementById('cashout-money').addEventListener('click', function(event){
//     event.preventDefault();
// const inputMoney=document.getElementById('cashout-input-id').value;
// const deduct = parseFloat(inputMoney);
// const inputPin=document.getElementById('pin-id').value;

// if(inputPin === 1234){
//     const mainBalance=document.getElementById('balance').innerText;
//     const main = parseFloat(mainBalance);

//     const cashout = main - deduct;
//     document.getElementById('balance').innerText = cashout;

// }else{
//     alert('tomar input bul oise');
// }

// })

//    how to cash out money banking

document.getElementById('cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    const inputManey = document.getElementById('cashout-input-id').value;
    const deduct = parseFloat(inputManey)
    const inputPin = document.getElementById('pin-id').value;
    // console.log(inputManey, inputPin)
    if(inputPin === "1234"){
        const mainBalance=document.getElementById('balance').innerText;
    const main = parseFloat(mainBalance);
    const cashout = main - deduct;
    document.getElementById('balance').innerText = cashout;
    }else{
        alert('failed to the cahs out')
    }


})