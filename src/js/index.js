
function updateName(){
    let name = document.querySelector("#name");
    let theName = document.querySelector(".name-exp .name");
    theName.innerText = name.value;    
    theName.style.color = "hsl(0, 0%, 100%)";
    theName.style.fontSize = "0.7rem";
    theName.style.textTransform = "uppercase";
}
function updateNums(){
    let nums = document.querySelector("#number");
    let theNums = document.querySelectorAll(".card-nums p");
    for(let i = 0; i < 16; i++){
        theNums[i].innerText = nums.value[i];
        if(nums.value[i] == undefined){
            theNums[i].innerText = 0;
        }
        theNums[i].style.textTransform = "uppercase";
    }

}
function updateMonth(){
    let month = document.querySelector("#month");
    let theMonth = document.querySelector(".exp .month");
    theMonth.innerText = month.value;
}
function updateYear(){
    let year = document.querySelector("#year");
    let theYear = document.querySelector(".exp .year");
    theYear.innerText = year.value;
}
function updateCvc(){
    let cvc = document.querySelector("#cvc");
    let theCvc = document.querySelector(".cvc p");
    theCvc.innerText = cvc.value;
}
function checkError(e){
    event.preventDefault();
    let white = document.querySelector(".white");
    let whiteSuccess = document.querySelector(".white-success");
    let parName = document.querySelector(".white .card-holder p");
    let parNumsBlank = document.querySelector(".white .card-number .blank");
    let parNumsWrong = document.querySelector(".white .card-number .wrong");
    let parDate = document.querySelector(".white .exp-date .blank");
    let parDateWrong = document.querySelector(".white .exp-date .wrong");
    let parCvc = document.querySelector(".white .cvc-num .blank");
    let parCvcWrong = document.querySelector(".white .cvc-num .wrong");
    let name = document.querySelector("#name");
    let nums = document.querySelector("#number");
    let month = document.querySelector("#month");
    let year = document.querySelector("#year");
    let cvc = document.querySelector("#cvc");
    if(checkName() == "true"){
        parName.style.display = "block";
        name.style.border = "1px solid hsl(0, 100%, 66%)";
    }
    else {
        parName.style.display = "none";
        name.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checknums() == "true"){
        parNumsBlank.style.display = "block";
        nums.style.border = "1px solid hsl(0, 100%, 66%)";
    }
    else{
        parNumsBlank.style.display = "none";
        nums.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checknums() == "false"){
        parNumsWrong.style.display = "block"; 
        nums.style.border = "1px solid hsl(0, 100%, 66%)";     
    }
    else if(checknums() == "neither"){
        parNumsWrong.style.display = "none"; 
        nums.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checkMonth() == "true" || checkYear() == "true"){
        parDate.style.display = "block";
        if(checkMonth() == "true"){
            month.style.border = "1px solid hsl(0, 100%, 66%)";
        }  
        if(checkYear() == "true"){
            year.style.border = "1px solid hsl(0, 100%, 66%)";
        }
    }
    else{
        parDate.style.display = "none";
        month.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checkMonth() == "false" || checkYear() == "false"){
        parDateWrong.style.display = "block";
        if(checkMonth() == "false"){
            month.style.border = "1px solid hsl(0, 100%, 66%)";
        }
        if(checkYear() == "false"){
            year.style.border = "1px solid hsl(0, 100%, 66%)";
        }
    }
    if(checkMonth() == "neither" && checkYear() == "true"){
        parDateWrong.style.display = "none";
    }
    else if(checkMonth() == "true" && checkYear() == "neither"){
        parDateWrong.style.display = "none";
    }
    else if(checkMonth() == "neither" && checkYear() == "false"){
        parDateWrong.style.display = "block";
        year.style.border = "1px solid hsl(0, 100%, 66%)";
        month.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    else if(checkMonth() == "false" && checkYear() == "neither"){
        parDateWrong.style.display = "block";
        month.style.border = "1px solid hsl(0, 100%, 66%)";
        year.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    else if(checkMonth() == "neither" && checkYear() == "neither"){
        parDateWrong.style.display = "none";
        year.style.border = "1px solid hsl(110, 80%, 80%)";
        month.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checkCvc() == "true"){
        parCvc.style.display = "block";
        cvc.style.border = "1px solid hsl(0, 100%, 66%)";
    }
    else{
        parCvc.style.display = "none";
        cvc.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checkCvc() == "false"){
        parCvcWrong.style.display = "block";  
        cvc.style.border = "1px solid hsl(0, 100%, 66%)";    
    }
    else if (checkCvc() == "neither"){
        parCvcWrong.style.display = "none"; 
        cvc.style.border = "1px solid hsl(110, 80%, 80%)";
    }
    if(checkName()== "neither" && checknums()== "neither" && checkMonth()== "neither" && checkYear()== "neither" && checkCvc()=="neither"){
        white.style.display = "none";
        whiteSuccess.style.display = "block";
    }
}
function checkName(){
    let name = document.querySelector("#name");
    if(name.value == ""){
        return "true";
    }
    return "neither";
}
function checknums(){
    let nums = document.querySelector("#number");
    if(nums.value == ""){
        return "true";
    }
    for(let i = 0; i < nums.value.length; i++){
        let val = parseInt(nums.value[i]);
        if(isNaN(val)){
            return "false";
        }
    }
    return "neither";
}
function checkMonth(){
    let month = document.querySelector("#month");
    if(month.value == ""){
        return "true";
    }
    for(let i = 0; i < month.value.length; i++){
        let val = parseInt(month.value[i]);
        if(isNaN(val)){
            return "false";
        }
    }
    return "neither";
}
function checkYear(){
    let year = document.querySelector("#year");
    if(year.value == ""){
        return "true";
    }
    for(let i = 0; i < year.value.length; i++){
        let val = parseInt(year.value[i]);
        if(isNaN(val)){
            return "false";
        }
    }
    return "neither";
}
function checkCvc(){
    let cvc = document.querySelector("#cvc");
    if(cvc.value == ""){
        return "true";
    }
    for(let i = 0; i < cvc.value.length; i++){
        let val = parseInt(cvc.value[i]);
        if(isNaN(val)){
            return "false";
        }
    } 
    return "neither";   
}
function value(){
    let nums = document.querySelector("#number");
    for(let i = 0; i < nums.value.length; i++){
        console.log(parseInt(nums.value[i]));
    }
}
function reset(){
    let white = document.querySelector(".white");
    let whiteSuccess = document.querySelector(".white-success");
    white.style.display = "block";
    whiteSuccess.style.display = "none";
}