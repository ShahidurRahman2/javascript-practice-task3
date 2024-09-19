


// to get button at the first time

document.getElementById('login-id').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('clicked login info at the button');

    // second get value

 const phoneNumber=document.getElementById('number-id').value;
 const pinNumber = document.getElementById('pin-id').value;

    //  console.log(number    ,pin);

    // if value is true then it apply

    if(pinNumber === '12345'){
        // to move another page

        window.location.href = 'home.html';

    
    }else{
        // if input would wrong

        alert('wrong input please type right number and pin');
    }

})