//part - 01,05 & 06-----------------------------------------
function getInputValue(input_value) {
    const inputMoney = document.getElementById(input_value);
    const inputText = inputMoney.value;
    const newInputMoney = parseFloat(inputText)
    // part - 05 // clear placeHolder part
    inputMoney.value = "";
    return newInputMoney;
};

//part - 02 & 07 newInput.Money ---------------------------
function sowDetaValue(inputTotal_value, amount) {
    const inputTotal = document.getElementById(inputTotal_value);
    const inputTotalText = inputTotal.innerText;
    const inputTotalMoney = parseFloat(inputTotalText);
    // // part - 03 // add-Money // part - 1 and part - 02 money 
    const inputMoneyTotal = inputTotalMoney + amount;
    inputTotal.innerText = inputMoneyTotal;
    return inputTotalMoney;
};
// current Balance----------
function currentBalance() {
    const balance = document.getElementById('balance_total');
    const newBalanceText = balance.innerText;
    const newMoneyBalance = parseFloat(newBalanceText);
    return newMoneyBalance;
};

// part - 05 & 09 (add and minus balance)
function updateBalance(newBalance, isAdd) {
    const balance = document.getElementById('balance_total');
    const newBalanceText = balance.innerText;
    const newMoneyBalance = parseFloat(newBalanceText);
    if (isAdd == true) {
        const totalMoneyBalance = newMoneyBalance + newBalance;
        balance.innerText = totalMoneyBalance;
    } else {
        const totalMoneyBalance = newMoneyBalance - newBalance;
        balance.innerText = totalMoneyBalance;
    }
};

// part -01 // new money input =============
document.getElementById('deposit_button').addEventListener('click', function () {
    /* const inputMoney = document.getElementById('deposit_input');
    const inputText = inputMoney.value;
    const newInputMoney = parseFloat(inputText) */

    // console.log(newDepositInputMoney);

    // // part - 02 // previous money or  deposited money ======
    /* const inputTotal = document.getElementById('deposit_total');
    const inputTotalText = inputTotal.innerText;
    const inputTotalMoney = parseFloat(inputTotalText);
 */

    // part - 03 //add-Money or update Money// part - 1 and part - 02 money ==== 
    // const depositMoneyTotal = inputTotalMoney + newInputMoney;
    // inputTotal.innerText = depositMoneyTotal;


    // part - 04 // clear placeHolder part ===========================
    // depositMoneyInput.value = "";

    // part - 05 // balance // deposit total balance ===============================
    /* const balance = document.getElementById('balance_total');
    const newBalanceText = balance.innerText;
    const newMoneyBalance = parseFloat(newBalanceText);
    const totalMoneyBalance = newMoneyBalance + newInputMoney;
    balance.innerText = totalMoneyBalance;  */
    const newInputMoney = getInputValue('deposit_input')

    if (newInputMoney > 0) {
        sowDetaValue('deposit_total', newInputMoney);
        updateBalance(newInputMoney, true)
    }
});

//part - 06 // withdroll input ====================
document.getElementById('withdraw_button').addEventListener('click', function () {
    /* const inputMoney = document.getElementById('withdraw_input');
    const inputText = inputMoney.value;
    const newInputMoney = parseFloat(inputText); */

    // part - 07 // withdraw_total ======================
    /*   const withdrowTotal = document.getElementById('withdraw_total');
      const withdrowTotalMoneyText = withdrowTotal.innerText;
      const previousWithdrawMoney = parseFloat(withdrowTotalMoneyText);
      const totalWithdrawMoney = previousWithdrawMoney + newInputMoney;
      withdrowTotal.innerText = totalWithdrawMoney; */


    // part - 08 // clear placeHolder part
    // inputMoney.value = '';

    // part - 09 // balance // withdrow total balance ===================
    /* const balance = document.getElementById('balance_total');
    const newBalanceText = balance.innerText;
    const newMoneyBalance = parseFloat(newBalanceText);
    const totalMoneyBalance = newMoneyBalance - newInputMoney;
    balance.innerText = totalMoneyBalance;
 */
    const fundAvilable = getInputValue('withdraw_input')
    const currentWithdrowalBalance = currentBalance()
    if (fundAvilable > 0 && currentWithdrowalBalance > fundAvilable) {
        sowDetaValue('withdraw_total', fundAvilable);
        updateBalance(fundAvilable, false)
    }
    if (currentWithdrowalBalance < fundAvilable) {
        console.log('low balance')
    }

})