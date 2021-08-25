function getInputValue(input){
    const amountInputField= document.getElementById(input);
    const amountInput= parseFloat(amountInputField.value); 
    amountInputField.value = '';
    return amountInput;
}
function updateTotalField (totalFieldId,input){
    // debugger;
    const totalField = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalField.innerText);
    totalField.innerText = previousTotal + input;
}
function getCurrentBalance(){
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
    return balanceTotal;
}
function updateBalance(depositeInput, isAdd){
    const balanceTotalField = document.getElementById('balance-total');
    /* const balanceTotal = parseFloat(balanceTotalField.innerText); */
    const balanceTotal = getCurrentBalance();
    if( isAdd == true){
        balanceTotalField.innerText = balanceTotal + depositeInput;
    }
    else{
        balanceTotalField.innerText = balanceTotal - depositeInput;
    }
    
}


document.getElementById('deposite-btn').addEventListener('click',function(){
    /* const depositeInputField = document.getElementById('deposite-input');
    const depositeInput = parseFloat(depositeInputField.value);  */  
     
    /* const depositeTotalField = document.getElementById('deposite-total');
    const depositeTotal = parseFloat(depositeTotalField.innerText);
    depositeTotalField.innerText = depositeTotal + depositeInput; */
    
    
    /* const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
    balanceTotalField.innerText = balanceTotal + depositeInput; */
    const depositeInput = getInputValue('deposite-input');
    if( depositeInput > 0){
        updateTotalField('deposite-total',depositeInput);
        updateBalance(depositeInput, true);
    }        
})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputField.value); */    
    
   /*  const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalField.innerText); 
    withdrawTotalField.innerText = withdrawTotal + withdrawInput; */
    

    /* const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);    
    balanceTotalField.innerText = balanceTotal - withdrawInput; */
    const balanceTotal = getCurrentBalance();
    const withdrawInput = getInputValue('withdraw-input');
    if(withdrawInput > 0 && withdrawInput <= balanceTotal){
        updateTotalField('withdraw-total',withdrawInput);
        updateBalance(withdrawInput , false);
    }
    if (withdrawInput > balanceTotal){
        alert("You can't withdraw more than what you have in your account");
    }
})