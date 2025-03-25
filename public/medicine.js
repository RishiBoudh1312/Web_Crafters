// function increaseCount(spanId) {
    
//     var countElement = document.getElementById(spanId);
//     var count=prompt("how much to add");
    
//     var currentCount = parseInt(countElement.textContent);
//     if(isValidInteger(count)){
//         var newCount = currentCount + parseInt(count);
//         if (newCount >= 0) {
//             countElement.textContent = newCount;
//           }

//     }
//     else{
//         alert("please enter a vlid integer");
//     }
    

//    // Ensure the count doesn't go below 0
    
    
//   }
//   function decreaseCount(spanId) {
    
//     var countElement = document.getElementById(spanId);
//     var count=prompt("how much it is used");
//     var currentCount = parseInt(countElement.textContent);
//     if(isValidInteger(count)){
//         var newCount = currentCount - parseInt(count);
//         if (newCount >= 0) {
//             countElement.textContent = newCount;
//           }
//           else{
//               alert("can't use this much")
//           }

//     }
//     else{
//         alert("please enter a vlid integer");
//     }
    

//    // Ensure the count doesn't go below 0
    
//   }
//   function isValidInteger(value) {
//     // Check if the value is a non-empty string and can be parsed as an integer
//     return value !== null && value.trim() !== '' && !isNaN(parseInt(value, 10));
//   }
// const adds=document.querySelectorAll(".add");
// const minuses=document.querySelectorAll(".minus");

// adds.forEach(button=>{
//     button.addEventListener('click', ()=>{
//        const index=button.getAttribute("data-id");
//        console.log("ye");
//        update(index,"add")
      
//     })
// })
const show=0;
function update(index, operation){
    if(operation=="add"){
        console.log("clicked");
        show=parseInt(prompt("how much to add"));
    
    }
    if(operation=="subtract"){
        show= parseInt(prompt("how much to subtract"));
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const adds = document.querySelectorAll(".add");
    const minuses = document.querySelectorAll(".minus");

    adds.forEach(button => {
        button.addEventListener('click', () => {
            console.log("ye"); // This should now work
            const index = button.getAttribute("data-id");
            console.log("Ventilator index:", index);
            update(index, "add");
        });
    });

    minuses.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute("data-id");
            console.log("Ventilator index:", index);
            update(index, "subtract");
        });
    });
});