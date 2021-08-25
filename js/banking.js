function getInputValue(input){
    const amountInputField = document.getElementById(input);
    const amountInput = parseFloat(amountInputField.value); 
    amountInputField.value = '';
    return amountInput;
}




document.getElementById('deposite-btn').addEventListener('click',function(){
    /* const depositeInputField = document.getElementById('deposite-input');
    const depositeInput = parseFloat(depositeInputField.value);  */  
    const depositeInput = getInputValue('deposite-input'); 
    const depositeTotalField = document.getElementById('deposite-total');
    const depositeTotal = parseFloat(depositeTotalField.innerText);
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
    const newDepositeTotal = depositeTotal + depositeInput;
    depositeTotalField.innerText = newDepositeTotal;
    const newBalanceTotal = balanceTotal + depositeInput;
    balanceTotalField.innerText = newBalanceTotal;

    
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInput = parseFloat(withdrawInputField.value); */    
    const withdrawInput = getInputValue('withdraw-input');
    const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalField.innerText);
    const balanceTotalField = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalField.innerText);
    const newWithdrawTotal = withdrawTotal + withdrawInput;
    withdrawTotalField.innerText = newWithdrawTotal;
    const newBalanceTotal = balanceTotal - withdrawInput;
    balanceTotalField.innerText = newBalanceTotal;


})