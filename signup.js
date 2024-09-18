let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";
let inputusername = document.getElementById('username')
let inputname = document.getElementById('name')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')
let signbtn = document.getElementById('signbtn')
let error = document.getElementById('error')
signbtn.addEventListener('click' , ()=>{
   if (inputusername.value.length < 4 || inputPassword.value.length < 4) {
     error.textContent = "user name should be more than 3 letters"
   } else {
       fetch(url , {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               username: inputusername.value,
               firstName: inputname.value,
               email: inputEmail.value,
               password: inputPassword.value
           })
       }).then(response => response.json()).then(
           data => {
               location.assign('index.html'); 
               
           }
       )

   }
})

