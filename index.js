function operations(){
    let p = document.getElementById("display").value;
    let q = eval(p);
    document.getElementById("display").value = q;
    if(document.getElementById("display").value.length>30)
        alert("Calulation limit exceeded");
    else
        document.getElementById("display").value = q;
}
// document.getElementById("display").value = q;
// document.getElementById("none").value = q;

function del(){
    document.getElementById("display").value= document.getElementById("display").value.slice(0, - 1);
}

function clearall(){
    document.getElementById("display").value = "";
}

function onScreen(value){
    if(document.getElementById("display").value.length>25)
        alert("Digits Exceeded!");
    else
        document.getElementById("display").value += value;
}

function percentage(){
    let p = document.getElementById("display").value;
    // let l = document.getElementById("display").value;
    let q = p/100;
    document.getElementById("display").value = q;
}



