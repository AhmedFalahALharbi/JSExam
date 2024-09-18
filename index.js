let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";
let username = document.getElementById('username');
let inputPassword = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');

loginbtn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let loginSuccessful = false; 
            data.forEach(element => {
                if (username.value === element.username && inputPassword.value === element.password) {
                    loginSuccessful = true;
                    username = element.username; 
                }
            });

            if (loginSuccessful) {
                localStorage.setItem('username', `${username}`);
                location.assign('home.html');
            } 
        })
        
});

