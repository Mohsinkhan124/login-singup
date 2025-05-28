const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const button = document.querySelector('.btn');
const closebtn = document.querySelector('.close-icon');

registerlink.addEventListener("click", () => {
     wrapper.classList.add('active');
});

loginlink.addEventListener("click", () => {
     wrapper.classList.remove('active');
});

button.addEventListener("click", () => {
      wrapper.classList.add('active-popup');
});

closebtn.addEventListener("click", () => {
     wrapper.classList.remove('active-popup');
});

// // login form validation
// const loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//      e.preventDefault(); // Stop the default form action

//      const email = loginForm.querySelector('input[type="email"]').value.trim();
//      const password = loginForm.querySelector('input[type="password"]').value.trim();

//      if (email === "" || password === "") {
//           alert("Please fill in all fields.");
//      }  else {
//           // Here you can add your login logic, e.g., sending data to the server
//           alert("Login successful!");
//           // Reset the form
//           loginForm.reset();
//           wrapper.classList.remove('active');
//            window.location.href = "home.html"; 
     
//      }
// });

// // Register form
// const registerForm = document.getElementById("registerForm");

// registerForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const username = registerForm.querySelector('input[type="text"]').value.trim();
//     const email = registerForm.querySelector('input[type="email"]').value.trim();
//     const password = registerForm.querySelector('input[type="password"]').value.trim();

//     if (username === "" || email === "" || password === "") {
//         alert("Please fill all the fields");
//     } else {
//         // Redirect to home page
//         window.location.href = "home.html"; 
//     }
// });

 let registeredEmail = "";
let registeredPassword = "";

// Handle registration
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        alert("⚠️ Please fill all fields.");
    } else {
        registeredEmail = email;
        registeredPassword = password;
        alert("✅ Registered Successfully! Now login.");
        wrapper.classList.remove('active'); // Switch to login form
    }
});

// Handle login
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        alert("⚠️ Please enter both email and password.");
        return;
    }

    if (email === registeredEmail && password === registeredPassword) {
        alert("✅ Login successful!");
        window.location.href = "home.html"; // Your home page here
    } else {
        alert("❌ Invalid email or password.");
    }
});