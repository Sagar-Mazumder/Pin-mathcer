function pinmatch() {
    let theValue = Math.round(Math.random() * 10000)
    let theNewValue = theValue + ''
    if (theNewValue.length == 4) {
        return theValue;
    }
    else {
        return pinmatch()
    }
}
function generate() {
    const pin = pinmatch();
    document.getElementById('show').value = pin
}
// button section
document.getElementById('numbers').addEventListener('click', function (event) {

    const buttonValue = event.target.innerText;
    const displayValue = document.getElementById('displayValue');
    if (isNaN(buttonValue)) {
        if (buttonValue == 'C') {
            displayValue.value = '';
        }
    }
    else {
        const totalValue = displayValue.value + buttonValue;
        displayValue.value = totalValue;
    }
});
function sucess() {
    const display1 = document.getElementById('show').value
    const display2 = document.getElementById('displayValue').value
    const sucessmessage=document.getElementById('notify-sucess')
    const faliedmessage=document.getElementById('notify-falid')
    if (display1 == display2) {
        
        sucessmessage.style.display='block'
        faliedmessage.style.display='none'
    }
    else {
        sucessmessage.style.display='none'
        faliedmessage.style.display='block'
    }
}


