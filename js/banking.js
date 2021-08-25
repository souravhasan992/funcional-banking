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
function updateBalance(depositeInput, isAdd){
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
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
    const depositeInput = getInputValue('deposite-input'); 
    /* const depositeTotalField = document.getElementById('deposite-total');
    const depositeTotal = parseFloat(depositeTotalField.innerText);
    depositeTotalField.innerText = depositeTotal + depositeInput; */
    updateTotalField('deposite-total',depositeInput);
    
    /* const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
    balanceTotalField.innerText = balanceTotal + depositeInput; */
    updateBalance(depositeInput, true)
    
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputField.value); */    
    const withdrawInput = getInputValue('withdraw-input');
   /*  const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalField.innerText); 
    withdrawTotalField.innerText = withdrawTotal + withdrawInput; */

    updateTotalField('withdraw-total',withdrawInput);

    /* const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);    
    balanceTotalField.innerText = balanceTotal - withdrawInput; */

    updateBalance(withdrawInput , false);
})