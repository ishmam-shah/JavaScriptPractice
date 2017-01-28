/**
 * Created by Noxbond on 1/27/2017.
 */
var inputString;
var inputStringLength;
var charAmountList=[];

function whenTextAreaChanged() {
    inputString=document.getElementById("inputString").value;
    inputStringLength=inputString.length;
    if(inputStringLength>0){
        $("#enteredCharNo").addClass("alert alert-success");
        $("#eachCharAmountTable").addClass("table table-bordered");
    }
    if(inputStringLength<=100) {
        document.getElementById("enteredCharNo").innerHTML = "You have entered " + inputStringLength + " character";
        if(inputStringLength>80) {
            document.getElementById("restCharNo").innerHTML = "You have " + (100 - inputStringLength) + " character to enter yet";
            $("#restCharNo").addClass("alert alert-danger");
        }
        else {
            document.getElementById("restCharNo").innerHTML = "";
            $("#restCharNo").removeClass("alert alert-danger");
        }
        getAmountOfChar();
        $("#eachCharAmountTable tbody").empty();
        for(var i=0;i<charAmountList.length;i++){
            $('#eachCharAmountTable tbody').append('<tr><td class="info">'+charAmountList[i].char+'</td><td class="success">'+charAmountList[i].amount+'</td></tr>');
        }
    }
    else{
        document.getElementById("inputString").disabled = true;
    }
}

function getAmountOfChar() {
    charAmountList=[];
    for(var i=0;i<inputStringLength;i++){
        var charObject={
            char:"",
            amount:""
        }
        var character=inputString[i];
        var ifCharCounted=ifCharAlreadyCounted(character);
        if(ifCharCounted==true)
            continue;
        var counter=1;
        for(var j=i+1;j<inputStringLength;j++){
            if(character==inputString[j])
                counter++;
        }
        charObject.char=character;
        charObject.amount=counter;
        charAmountList.push(charObject);
    }
}
function ifCharAlreadyCounted(character) {
    for(var i=0;i<charAmountList.length;i++){
        if(charAmountList[i].char==character)
            return true;
    }
    return false;
}