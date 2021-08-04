// const request = axios.get("https://jsonplaceholder.typicode.com/todos")

// request.then((response)=>{
//     console.log(response.data)
// })
function validateForm(){


var pw1 = document.getElementById("password").Value;
var pw2 = document.getElementById("confirm_password").value; 

if(pw1 =="") {
    document.getElementById("message1").innerHTML = "**Fill the password please!";  
     return false;  
}
if(pw2 =="") {
    document.getElementById("message2").innerHTML = "**Fill the password please!";  
     return false;  
}
if(pw1.length < 6) {  
    document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
 }  
 

 if(pw1.length > 8) {  
    document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
 } 
 
 else {  
    alert("Password is correct");  
 }  

 if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Passwords are not same";  
    return false;  
}
else {  
    alert ("Your password created successfully");  
    document.write("JavaScript form has been submitted successfully");  
  }  

}


 