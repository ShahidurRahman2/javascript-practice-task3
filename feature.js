



// cash btn a click korle kash out dekabe

document.getElementById('cashout-btn').addEventListener('click',function(){

    const x=document.getElementById('cash-hidden-id').classList.remove('hidden');
    const y=document.getElementById('add-hidden-id').classList.add('hidden');
})

document.getElementById('add-btn').addEventListener('click',function(){

    const x=document.getElementById('add-hidden-id').classList.remove('hidden');
    const y=document.getElementById('cash-hidden-id').classList.add('hidden');
})