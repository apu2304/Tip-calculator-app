console.log("Script is loaded")
const form = document.getElementById('bill-form');
const bill = document.querySelector('input[name="billamount"]');
const people = document.querySelector('.people input');
const tipBtns = document.querySelectorAll('.tipbtn input[type="button"]');
const customTipInput = document.querySelector('.tipbtn .custom');
const resetBtn = document.getElementById('reset')
let tipValue = 0;
console.log("Elements selected");
Array.from(tipBtns).forEach(btn => {
  btn.addEventListener('click', (e) => {
    Array.from(tipBtns).forEach(bt => bt.classList.remove('active'));
    e.target.classList.add('active');
    tipValue = parseFloat(e.target.value); 
    console.log(tipValue);
  });
});

customTipInput.addEventListener('input', () => {
  tipValue = parseFloat(customTipInput.value); 
  Array.from(tipBtns).forEach(bt => bt.classList.remove('active')); 
  console.log(tipValue);
});

bill.addEventListener('input', () => { 
console.log(`Bill value: ${parseFloat(bill.value)}`); calculateTip(); }); 
people.addEventListener('input', () => { 
  console.log(`People value: ${parseFloat(people.value)}`); calculateTip(); }); 
function calculateTip() { 
  const billValue = parseFloat(bill.value); 
  const peopleValue = parseFloat(people.value); 
  if (billValue > 0 && peopleValue > 0 && tipValue >= 0) { 
    const totalTip = billValue * (tipValue / 100); 
    const tipPerPerson = totalTip / peopleValue; 
    const total = (billValue + totalTip) / peopleValue; 
    console.log(`Total Tip: ${totalTip}`); 
    console.log(`Tip Per Person: ${tipPerPerson}`); 
    console.log(`Total Per Person: ${total}`); 
    document.getElementById('tipAmount').textContent = `$${tipPerPerson.toFixed(2)}`; 
    document.getElementById('total').textContent = `$${total.toFixed(2)}`; 
  } 
}
resetBtn.addEventListener('click', () => {
  form.reset();
  tipValue = 0;
  document.getElementById('tipAmount').textContent = '0.00'; 
  document.getElementById('total').textContent = '0.00'; 
  console.log("Form reset");
})