//get input value
function getInputValue(inputId){
    const value= document.getElementById(inputId);
    const valueText =value.value;
    const valueAmount = parseFloat(valueText);
    value.value='';
    return valueAmount;
}
//get set inner text 
function getInnerText(inputId,amount){
    const text= document.getElementById(inputId);
    const innerText = text.innerText;
    const oldamount = parseFloat(innerText);
    const total = oldamount+amount;
    text.innerText=total;   
}
//current balance
function currentBalance(){
    const text= document.getElementById("balance");
    const innerText = text.innerText;
    const oldbalance = parseFloat(innerText);
    return oldbalance;
}
//update balance
function updateBalanceText(amount,isAdd){
    const text= document.getElementById("balance");
    const oldbalance = currentBalance();
    if(isAdd==true){
        text.innerText=oldbalance+amount;
    }else{
        text.innerText=oldbalance-amount;
    } 
}

//deposit event handle
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount= getInputValue('deposit');
    //validation check
    if (depositAmount>0){
        //update field
        getInnerText('depo-total',depositAmount);
        //update balance
        updateBalanceText(depositAmount,true);
    }else{
        alert('please input a valid amount')
    }
    
})
// withdraw event handle
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawAmount = getInputValue('withdraw');
    const balance= currentBalance();
    //validation check
    if(newWithdrawAmount>0 && newWithdrawAmount< balance){
        //update field
         getInnerText('withdraw-balance',newWithdrawAmount);
        //reduce total balance 
        updateBalanceText(newWithdrawAmount,false)
    }else{
        alert('please input a valid amount')
    }
})