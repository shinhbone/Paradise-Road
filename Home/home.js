/*Header */

//media
let menu = document.querySelector('#menu-bar'); // icon for header bar
let navbar = document.querySelector('.navbar'); //the header link
//home video
let videoBtn=document.querySelectorAll('.vid-btn');// 5 .vid-btn

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
/*Header end*/
 
//media
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times'); //display header bars
    navbar.classList.toggle('active');//display header links(polygon)
});//home video
videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');//the first one is not active anymore
        btn.classList.add('active'); //the one that was click,now is active
        let src= btn.getAttribute('data-src'); //getting the new one active src
        document.querySelector('#video-slider').src=src; // giving the new src to video-slider
    });
}); 

// sign start
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"), //icons
      pwFields = document.querySelectorAll(".password"), // input pw
      signUp = document.querySelector(".signup-link"), // signup form
      login = document.querySelector(".login-link"); //login form

    //Show-Hide password and change icon
    pwShowHide.forEach(eyeIcon =>{  // loop each eyeIcon
        eyeIcon.addEventListener("click", ()=>{  // when click on eyeIcon
            pwFields.forEach(pwField =>{ // loop pwFields= password
                if(pwField.type ==="password"){
                    pwField.type = "text"; // display password
                    pwShowHide.forEach(icon =>{  // looping to change icons
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password"; // do the opposite , remember loops of eyeIcon and pwFields(password)

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // Displaying sign up and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active"); // Mainly opacity 0 to 1 when active
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");//change opacity 0 when active 
    });



    // Object to store registration data
    var users = [];

    // Function to add a user to object
    function addUser(name, email, password) {
        users.push({ name, email, password });
    }

    // Function to check login credentials
    function loginUser(name, password) {
        for (var user of users) { //check the data from users object
            if (user.name === name && user.password === password) {
                return true; // Login successful
            }
        }
        return false; // Login failed
    }
    //e is just a variable that holds the event object
    // Adding event listener for the Signup form
    document.querySelector('.signup form').addEventListener('submit', function (e) { //to find signup form
        e.preventDefault(); // to avoid default page reload
        var name = this.querySelector('input[type="text"]').value;// refer with this key
       var email = this.querySelector('input[type="text"]').value;
        var password = this.querySelector('input[type="password"]').value;
        addUser(name, email, password);
        alert('Registration successful. You can now log in.');
    });

    // Add event listener for the Login form
document.querySelector('.login form').addEventListener('submit', function (e) {//form is descendant of an element with the class signup
    e.preventDefault(); //so that the page doesn't reload. e is an event object
    var name = this.querySelector('input[type="text"]').value;
    var password = this.querySelector('.password').value;
    if (loginUser(name, password)) {
        alert('Login successful. Welcome!');
        window.location.href = '../book/book.html'; // Redirect to home.html upon successful login
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
// sign end

    function booktologin(){
       if(confirm("Are you login?(Click OK if you are else Click Cancel)")){
        return 0;
       }
       else
       {
        window.location.href = '../sign/sign.html';
       }
    }

//book valid start 
function validate() {
    var phone = document.getElementById("phonenumber").value;
    var Preg = /^[\d\s+-]+$/; // Updated regex to allow digits, spaces, and optional plus and hyphen
    var isValidPhone = Preg.test(phone);
  
    var text = document.getElementById("fullname").value;
    var Reg = /^[A-Za-z\s'\-,.]+$/;
    var isValidName = Reg.test(text);
  
    var mail = document.getElementById("emailV").value;
    var Vreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isValidEmail = Vreg.test(mail);
  
    if (isValidPhone) {
      document.getElementById("invalidP").innerHTML = "Valid";
      document.getElementById("invalidP").style.visibility = "visible";
      document.getElementById("invalidP").style.color = "green";
    } else {
      document.getElementById("invalidP").innerHTML = "Invalid";
      document.getElementById("invalidP").style.visibility = "visible";
      document.getElementById("invalidP").style.color = "red";
    }
  
    if (isValidName) {
      document.getElementById("invalid").innerHTML = "Valid";
      document.getElementById("invalid").style.visibility = "visible";
      document.getElementById("invalid").style.color = "green";
    } else {
      document.getElementById("invalid").innerHTML = "Invalid";
      document.getElementById("invalid").style.visibility = "visible";
      document.getElementById("invalid").style.color = "red";
    }
  
    if (isValidEmail) {
      document.getElementById("invalidE").innerHTML = "Valid";
      document.getElementById("invalidE").style.visibility = "visible";
      document.getElementById("invalidE").style.color = "green";
    } else {
      document.getElementById("invalidE").innerHTML = "Invalid";
      document.getElementById("invalidE").style.visibility = "visible";
      document.getElementById("invalidE").style.color = "red";
    }
  
    if (isValidPhone && isValidName && isValidEmail) {
      alert("Booking Successful. Check your email for details!");
      window.location.href = '../Home/home.html';
    }
  }
  function calculatePrice() {
    const selectedCity = document.querySelector("select[name='city']").value;
    const selectedSeating = document.querySelector("select[name='seating']").value;
    const adults = parseInt(document.querySelector("input[name='adult']").value) || 0;
    const children = parseInt(document.querySelector("input[name='children']").value) || 0;
    const infants = parseInt(document.querySelector("input[name='infant']").value) || 0;

    const cityPrices = {
        "New York": {
            "Economy Class": 20,
            "Business Class": 40,
            "First Class": 50,
        },
        "Seoul": {
            "Economy Class": 20,
            "Business Class": 40,
            "First Class": 50,
        },
        "Paris": {
          "Economy Class": 20,
          "Business Class": 40,
          "First Class": 50,
       },
      "Rome": {
          "Economy Class": 20,
          "Business Class": 40,
          "First Class": 50,
       },
       "Berlin": {
        "Economy Class": 20,
        "Business Class": 40,
        "First Class": 50,
    },
    "Tokyo": {
        "Economy Class": 20,
        "Business Class": 40,
        "First Class": 50,
    },
    "Rio de Janeiro": {
      "Economy Class": 20,
      "Business Class": 40,
      "First Class": 50,
   },
  "Cario": {
      "Economy Class": 20,
      "Business Class": 40,
      "First Class": 50,
   },
   "Cape Town": {
    "Economy Class": 20,
    "Business Class": 40,
    "First Class": 50,
},
"Los Angeles": {
    "Economy Class": 20,
    "Business Class": 40,
    "First Class": 50,
},
"Montreal": {
  "Economy Class": 20,
  "Business Class": 40,
  "First Class": 50,
},
"Buenos Aires": {
  "Economy Class": 20,
  "Business Class": 40,
  "First Class": 50,
},
"Sao Paulo": {
  "Economy Class": 20,
  "Business Class": 40,
  "First Class": 50,
},
"Luanda": {
"Economy Class": 20,
"Business Class": 40,
"First Class": 50,
},
"New Delhi": {
"Economy Class": 20,
"Business Class": 40,
"First Class": 50,
},

        // Add prices for other cities here
    };

    const basePrice = cityPrices[selectedCity][selectedSeating];
    const totalPrice = (basePrice * adults) + (basePrice * 0.5 * children) + (basePrice * 0.25 * infants);

    document.getElementById("price").innerHTML = "Booking Price is " + "$" + totalPrice;
    document.getElementById("price").style.visibility = "visible";
}




