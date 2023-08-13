// VARIABLES
const incrementEl = document.getElementById('increment-el')
const decrementEl = document.getElementById('decrement-el')
const saveEl = document.getElementById('save-el')
const countEl = document.getElementById('count-el')
const entriesEl = document.getElementById('entries-el')
const resetEl = document.getElementById('reset-el')
let count = 0

// TRGIGGERED BY ADDEVENTLISTENER
// INCREMENT
incrementEl.addEventListener('click', function () {
    count += 1
    countEl.textContent = count
    saveEl.disabled = false
    saveEl.style.color = 'white'

})
decrementEl.addEventListener('click', function () {
    if( count > 0) {
        count -= 1
        countEl.textContent = count
    } 
})

// SAVE
saveEl.addEventListener('click', function () {
    entriesEl.innerHTML += count + ' - '
    countEl.textContent = 0
    count = 0
    saveEl.disabled = true
    resetEl.disabled = false
    resetEl.style.color = 'white'
    saveEl.style.color = "#45a9f0f4"
})

// RESET
resetEl.addEventListener('click', function () {
    entriesEl.textContent = `Previous entries: `
    resetEl.style.color = "rgb(198, 191, 191)"
})