let text= document.getElementById('text');
let number= document.getElementById('number');
let output= document.getElementById('output');

function replicator(){
    let textvalue=" "+text.value;
    let replicatedText=textvalue.repeat(number.value);
    output.textContent=replicatedText;
}

function copyreplicatedText(){
    navigator.clipboard.writeText(output.textContent);
}

function shareOnwhatsapp(){
    let link = `whatsapp://send?text=${output.textContent}`
    let a = document.createElement("a")
    a.href = link
    a.click()
}