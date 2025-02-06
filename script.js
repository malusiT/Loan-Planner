const outputText = document.querySelector("#output-amount")

const calculateBtn = document.querySelector("#calculate-button");
const resetButton = document.querySelector("#reset"); 
 
function calculateForOne(value){
    
    let interestRate = document.querySelector("#interest-rate").value
    interestRate = parseFloat(interestRate);

    let adminFee = document.querySelector("#admin-fee").value;
    adminFee = parseFloat(adminFee);

    return (value + adminFee + (value * (interestRate/100))).toFixed(2);
}

function calculateForTwo(value){
    let interestRate = document.querySelector("#interest-rate").value
    interestRate = parseFloat(interestRate);


    let adminFee = document.querySelector("#admin-fee").value;
    adminFee = parseFloat(adminFee);
    //eg value = R 2000

    let initRepayment = Number((value + adminFee + (value * (interestRate/100))).toFixed(2)); // R 1330
    console.log(initRepayment);

    let divByTwo = initRepayment / 2; // R 1330
    console.log(divByTwo);

    let addedTwoMonthInterest = divByTwo * (interestRate/100); // R 394.5
    console.log(addedTwoMonthInterest);

    let totalForSecondMonth = addedTwoMonthInterest + divByTwo; // R 1709.5
    console.log(totalForSecondMonth);

    let totalLoanInterest = totalForSecondMonth + divByTwo; //R 3024.5
    console.log( totalLoanInterest);

    return totalLoanInterest.toFixed(2);
}

calculateBtn.addEventListener("click", () =>{
    let loanAmount = document.querySelector("#loan-amount").value
    loanAmount = parseFloat(loanAmount)
    
    let interestRate = parseFloat(document.querySelector("#interest-rate").value);
    let adminFee = parseFloat(document.querySelector("#admin-fee").value);
    let loanPeriod = parseFloat(document.querySelector("#months").value);

    

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(adminFee) || isNaN(loanPeriod)) {
        outputText.textContent = "Please enter valid numbers in all fields.";
    }else {
        if (loanPeriod === 1){
            outputText.textContent = `Loan Repayment for R${loanAmount} = R${calculateForOne(loanAmount)}`;
        }else if(loanPeriod === 2){
            let totalRepaymentForTwo = calculateForTwo(loanAmount);
            outputText.textContent = `Loan Repayment for R${loanAmount} = R${totalRepaymentForTwo}`;
            outputText.textContent += `\n R${(totalRepaymentForTwo/2).toFixed(2)} per month `
        }
        
    }
})
 
resetButton.addEventListener("click", () =>{
    
    document.querySelector("#loan-amount").value = "";
    document.querySelector("#interest-rate").value = "30";
    document.querySelector("#admin-fee").value ="30";
    document.querySelector("#months").value = "1"; // Reset to the first option in the select element
    outputText.textContent = "R0";

})