function getPin(){
    const random = Math.random()*10000;
    const pin =(random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        console.log("pin")
        return getPin();
    }

}