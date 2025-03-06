/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    const inputVal = document.getElementById("input-el").value 
    renderOutput(inputVal)
})

function renderOutput(val) {
    lengthEl.innerHTML = `${val} meters = ${(val*3.281).toFixed(3)} feet | ${val} feet = ${(val/3.281).toFixed(3)} meters`
    
    volumeEl.innerHTML = `${val} liters = ${(val*0.264).toFixed(3)} gallons | ${val} gallons = ${(val/0.264).toFixed(3)} liters`
    
    massEl.innerHTML = `${val} kilos = ${(val*2.204).toFixed(3)} pounds | ${val} pounds = ${(val/2.204).toFixed(3)} kilos`
}