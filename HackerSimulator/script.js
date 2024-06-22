const randomDelay= ()=>{
    return new Promise((resolve,reject)=>{
        timeOut = 1 + Math.random()*3;
        console.log(timeOut)
        setTimeout(()=>{
            resolve()
        },timeOut*1000)
    })
}

const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.querySelector(".container").append(div);
}



async function main(){
        

    let interval = setInterval(()=>{
        let last = document.querySelector(".container").lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3);

        }
        else
        last.innerHTML += ".";

    },300)


    text = [
        "Initializing hacking",
        "Establishing secure connection",
        "Reading Your files",
        "Decrypting data",
        "Password files Detected",
        "Extracting sensitive information",
        "Encrypting data for transmission",
        "Sending all Password and Personal Information to server",
        "Verifying data integrity",
        "Cleaning Up",
        "Closing connection",
        "Operation completed"
    ]
    
    for (const item of text) {
        await addItem(item)
        
    }
    await randomDelay();
    clearInterval(interval)
    document.querySelector(".container").innerHTML+="Successfully Stolen all the info"
    


}
main()