const nextBtn = document.getElementById('next-btn');
const billAmount = document.getElementById('bill-amount');
const errorMsg = document.getElementById('error-msg');
const cashLabel = document.getElementById('cash-label');
const cashAmount = document.getElementById('cash-amount');
const calculateBtn = document.getElementById('calculate-btn');
const returnChange = document.getElementById('change-return');
const noOfNotes = document.querySelectorAll('.no-of-notes');
console.log(noOfNotes);

const arrayNoteAmt = [2000, 500, 100, 50, 20, 10, 5, 1];

nextBtn.addEventListener('click', () => {
  if (Number(billAmount.value) < 1) {
    showError('***Enter a valid amount***');
  } else {
    hideError();
    cashLabel.style.display = 'block';
    cashAmount.style.display = 'block';
    nextBtn.style.display = 'none';
    calculateBtn.style.display = 'block';
  }
});

calculateBtn.addEventListener('click', () => {
  const cash = Number(cashAmount.value);
  const bill = Number(billAmount.value);
  if (cash < bill) {
    showError(
      '***Cash given is less then the bill amount. Please enter the cash again***'
    );
  } else if (cash === bill) {
    showError(
      '***Amount paid is equal to the bill, no need to return any change***'
    );
  } else {
    calculateNotes(bill, cash);
  }
});

function calculateNotes(bill, cash) {
  returnChange.style.display = 'block';
  let change = cash - bill;
  for (let i = 0; i < arrayNoteAmt.length; i++) {
    change = compare(change, arrayNoteAmt[i], i);
    console.log(change);
  }
}

function compare(change, amount, idx) {
  if (change >= amount) {
    let notes = Math.floor(change / amount);
    change = change - notes * amount;
    noOfNotes[idx].textContent = `${notes}`;
  } else {
    noOfNotes[idx].textContent = 0;
  }
  return change;
}

function showError(text) {
  errorMsg.style.display = 'block';
  errorMsg.textContent = text;
}

function hideError() {
  errorMsg.style.display = 'none';
}
