let saveEl = document.getElementById("save-el") // What appears in the saved entries box
let countEl = document.getElementById("count-el") // What appears in the current count box
let totalEl = document.getElementById("total") // What appears next to total, adds up all saved entries
let sum = 0
let savedNumbers = [] // Empty array to hold the current count values
let count = 0
const str = "Total: "


/****************************************************************************************************************************
✅ Increments the current count by 1 when the increment button is pressed
****************************************************************************************************************************/
function increment() {
    count += 1
    countEl.textContent = count   
}
/****************************************************************************************************************************
✅ deducts the current count by 1 when the decrement button is pressed
****************************************************************************************************************************/

function decrement() {
    count -= 1
    countEl.textContent = count  
    
}
/*****************************************************************************************************************************
✅ Saves the count when the save button is clicked
*****************************************************************************************************************************/

  
function save() {
   let countStr = count + " + "
    saveEl.textContent += countStr
  //displays zero in the count box
    countEl.textContent = 0
    //adds every count into the array
   savedNumbers.push(count)
  
    total(savedNumbers)
   
    //reset the count back to zero
    count = 0
 
}
/****************************************************************************************************************************
✅ Clears the saved entries, and the total displayed, when the Clear button is pressed
****************************************************************************************************************************/
function cleared() {
 saveEl.textContent = " "
 totalEl.textContent = "Total: "
 sum = 0
 }

/*****************************************************************************************************************************
✅ Adds up the total of the saved entries which are stored in the array
*****************************************************************************************************************************/
function total(array){

   console.log(array)
for (let i = 0; i < array.length; i++) {
    sum += array[i];
  // array = 0
clearArray()
  totalEl.textContent = str + sum 
  }
  // clearArray()
}

/****************************************************************************************************************************
✅ Clears the arrays contents
****************************************************************************************************************************/
function clearArray(){
  savedNumbers.length = 0 
}
