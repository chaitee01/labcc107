function change(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    document.getElementById("result").innerHTML = "สวัสดี คุณ " + firstName + "  " + lastName ;
    
    
};

var input = document.getElementById("lastName");
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("eventclick").click();
    }
    console.log(event.keyCode);
});


function showDate(){
    let dt = new Date();
    let DD = ("0" + dt.getDate()).slice(-2);


    let MM = ("0" + (dt.getMonth() + 1)).slice(-2);

    let YYYY = dt.getFullYear();

    let hh = ("0" + dt.getHours()).slice(-2);

    let mm = ("0" + dt.getMinutes()).slice(-2);

    let ss = ("0" + dt.getSeconds()).slice(-2);

    let date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
    
    let inputbox = document.getElementById("showdate");
    
    inputbox.setAttribute("value",YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss);
}

function multi(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = num1 * num2;
    document.getElementById("answer").innerHTML = ans;
    
}
function devide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = num1 / num2;
    document.getElementById("answer").innerHTML = ans;
    
}