//fun changeImg

function changeImg() {

  document.getElementById("dt").src="bg2.png";

}

function resetImg() {

   document.getElementById("dt").src="bg.png";
 
 }

//fun add user
function addUser() {    
//var username

user_name = document.getElementById("user_name").value;

//save user name in loacal storage 

localStorage.setItem("user_name" , user_name);

//code to navigate to another page

window.location="kwitter_room.html";
}
function about() {
   document.getElementById("yaa").style.visibility="visible";
}