

var swiper = new Swiper (".swiper-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
})

//contact valid

function contactValid(){
        var textName = document.getElementById("contactN").value;
        var Reg = /^[A-Za-z\s'\-,.]+$/;
        var isValidName = Reg.test(textName);
        var phone = document.getElementById("contactT").value;
        var Preg = /^[\d\s+-]+$/; // Updated regex to allow digits, spaces, and optional plus and hyphen
        var isValidPhone = Preg.test(phone);
        var mail = document.getElementById("contactE").value;
        var Vreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var isValidEmail = Vreg.test(mail);


if (isValidName) {
    document.getElementById("invalidCN").innerHTML = "Valid";
    document.getElementById("invalidCN").style.visibility = "visible";
    document.getElementById("invalidCN").style.color = "green";
  } else {
    document.getElementById("invalidCN").innerHTML = "Invalid";
    document.getElementById("invalidCN").style.visibility = "visible";
    document.getElementById("invalidCN").style.color = "red";
  }


if (isValidPhone) {
    document.getElementById("invalidCT").innerHTML = "Valid";
    document.getElementById("invalidCT").style.visibility = "visible";
    document.getElementById("invalidCT").style.color = "green";
  } else {
    document.getElementById("invalidCT").innerHTML = "Invalid";
    document.getElementById("invalidCT").style.visibility = "visible";
    document.getElementById("invalidCT").style.color = "red";
}
if (isValidEmail) {
    document.getElementById("invalidCE").innerHTML = "Valid";
    document.getElementById("invalidCE").style.visibility = "visible";
    document.getElementById("invalidCE").style.color = "green";
  } else {
    document.getElementById("invalidCE").innerHTML = "Invalid";
    document.getElementById("invalidCE").style.visibility = "visible";
    document.getElementById("invalidCE").style.color = "red";
  }

  if (isValidPhone && isValidName && isValidEmail) {
    alert("Message Sent!");
    if(confirm("Do you want to go to the Main page?")){
    window.location.href = '../Home/home.html';}
  } }