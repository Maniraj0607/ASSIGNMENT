let allData = new URLSearchParams(window.location.search);

let namee = allData.get("name");
let email = allData.get("email");
let gender = allData.get("gender");
let description = allData.get("description");
let imageurl = allData.get("imageurl");

document.getElementById("username").innerText = namee;
document.getElementById("useremail").innerText = email;
document.getElementById("userdescription").innerText = description;
document.getElementById("profile-img").src = imageurl;

alert("THANK YOU FOR SUBMITING YOUR DETAILS HERE IS YOUR PORTFOLIO ")