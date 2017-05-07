function fn(a){
    document.getElementById('screenName').value+=document.getElementById(a).value;
}

function cal(b){
    document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
}

function clearScreen(){
    document.getElementById("screenName").value = null;
    //document.getElementById("screenName").focus();
}

function tuige(){
    var arr = document.getElementById("screenName");
    arr.value = arr.value.slice(0,arr.value.length-1);
}