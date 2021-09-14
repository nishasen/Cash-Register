const billAmount = document.querySelector("#bill-amount")
// const btnNext = document.querySelector("#btn-next")
const cashGiven = document.querySelector("#cash-given")
const btnCheck = document.querySelector("#btn-check")
const errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

btnCheck.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value && cashGiven.value){
        if(billAmount.value > 0) {
            if(Number(cashGiven.value) >= Number(billAmount.value)) {
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
            } else {
                showMessage("Do you wanna wash plates?");
            }
        } else {
           showMessage("Bill amount is invalid");
        }
    } else {
        showMessage("Please enter values in both the inputs")
    }
});

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++) {
        const numberOfnOtes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfnOtes;
    }
}


