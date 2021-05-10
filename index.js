function getPin(){
    const random = Math.random()*10000;
    const pin =(random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }

}
// display generate pin
function generatePin(){
    const pinInput = document.getElementById("pin");
    pinInput.value =  getPin();
}

// handle calculator button event 
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click",function(event){
    const digit =(event.target.innerText);
    if(isNaN(digit)){
        // handle backspace
        // handle clear
        if(digit === "C"){
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = "";
        }
    }
    else{
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
});
//  veify pin
function varifyPin(){
    const pin =  document.getElementById("pin").value;
   const typedPin = document.getElementById("typed-pin").value;
   if(pin === typedPin){
        const correct = document.getElementById("correct");
        correct.style.display = "block";
        const incorrect = document.getElementById("incorrect");
        incorrect.style.display = "none";
       
        
   }
   else{
         const correct = document.getElementById("correct");
        correct.style.display = "none";
        const incorrect = document.getElementById("incorrect");
        incorrect.style.display = "block";
       
        
   }
}




