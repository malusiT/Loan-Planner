const outputText = document.querySelector("#output-amount")

const calculateBtn = document.querySelector("#calculate-button");
const resetButton = document.querySelector("#reset"); 
 
function calculate(value){
    
    let interestRate = document.querySelector("#interest-rate").value
    interestRate = parseFloat(interestRate)

    let loanPeriod = document.querySelector("#months").value;
    loanPeriod = parseFloat(loanPeriod)

    let adminFee = document.querySelector("#admin-fee").value;
    adminFee = parseFloat(adminFee)

    return (value + adminFee + (value * (interestRate/100) * loanPeriod)).toFixed(2);
}

calculateBtn.addEventListener("click", () =>{
    let loanAmount = document.querySelector("#loan-amount").value
    loanAmount = parseFloat(loanAmount)
    
    let interestRate = parseFloat(document.querySelector("#interest-rate").value);
    let adminFee = parseFloat(document.querySelector("#admin-fee").value);
    let loanPeriod = parseFloat(document.querySelector("#months").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(adminFee) || isNaN(loanPeriod)) {
        outputText.textContent = "Please enter valid numbers in all fields.";
    } else {
        if (loanPeriod === 1){
            outputText.textContent = `Loan Repayment for R${loanAmount} = R${calculate(loanAmount)}`;
        }else if(loanPeriod === 2){
            outputText.textContent = `Loan Repayment for R${loanAmount} = R${calculate(loanAmount)}`;
            outputText.textContent += `\n R${calculate(loanAmount)/2} per month`
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