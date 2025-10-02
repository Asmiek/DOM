let elementomsg = document.getElementById("msg")

function numero(){

    for(let i = 1;i <= 100;i++){
    
        elementomsg.innerHTML += ` ${i} `
    }
}
numero()
