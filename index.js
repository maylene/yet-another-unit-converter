//Color switcher
//idea: https://webdesign.tutsplus.com/tutorials/color-schemes-with-css-variables-and-javascript--cms-36989
//further explanation: https://www.w3schools.com/Js/js_arrow_function.asp
const setTheme = theme => document.documentElement.className = theme;

//Dark mode toggle: a mixture of two tutorials
//https://www.w3schools.com/howto/howto_css_switch.asp
//https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

//Allow user to enter a number
//Save number to a variable
const userEl = document.getElementById("user-el")
userEl.value = 0 //starter value
let someNum = 0

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

//Automatically do calcs and display the results
//Round numbers to 3 decimal places
function calcAll(someNum) {
    someNum = userEl.value;

    let impL = (someNum * 3.2808399).toFixed(3)
    let metricL = (someNum * 0.3048).toFixed(3)
    let impV = (someNum * 0.26417).toFixed(3)
    let metricV = (someNum * 3.7854).toFixed(3)
    let impM = (someNum * 2.204623).toFixed(3)
    let metricM = (someNum * 0.45359).toFixed(3)

    volumeEl.innerHTML = `${someNum} liters = ${impV} gallons | ${someNum} gallons = ${metricV} liters`
    lengthEl.innerHTML = `${someNum} meters = ${impL} feet | ${someNum} feet = ${metricL} meters`
    massEl.innerHTML = `${someNum} kilos = ${impM} pounds | ${someNum} pounds = ${metricM} kilos`

}

//Gradient generator: https://www.joshwcomeau.com/gradient-generator/