/*Header */

//media
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
//home video
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
/*Header end*/
 
//media
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
//home video
videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
}); 



//search
let products = {
    data: [ // data is array of objects
      {
        name: "Seoul",
        country: "South Korea",
        category: "Asia",
        price: "130",
        image: "msg5958717659-14270.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Paris",
        country: "France",
        category: "Europe",
        price: "199",
        image: "msg5958717659-14273.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Rome",
        country: "Italy",
        category: "Europe",
        price: "190",
        image: "msg5958717659-14274.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Berlin",
        country: "Germany",
        category: "Europe",
        price: "180",
        image: "msg5958717659-14275.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "New York",
        country: "USA",
        category: "North-America",
        price: "200",
        image: "photo1691637626.jpeg",
        book: "BOOK NOW!",
      },
      {
        name: "Tokyo",
        country: "Japan",
        category: "Asia",
        price: "149",
        image: "msg5958717659-14271.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Rio deJaneiro",
        country: "Brazil",
        category: "South-America",
        price: "189",
        image: "rio.jfif",
        book: "BOOK NOW!",
      },
      {
        name: "Cario",
        country: "Egypt",
        category: "Africa",
        price: "150",
        image: "cario.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Cape Town",
        country: "South Africa",
        category: "Africa",
        price: "150",
        image: "capeT.jpeg",
        book: "BOOK NOW!",
      },
      {
        name: "Los Angeles",
        country: "USA",
        category: "North-America",
        price: "199",
        image: "LA.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Montreal",
        country: "Canada",
        category: "North-America",
        price: " 170",
        image: "mon.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "Buenos aires",
        country: "Argentina",
        category: "South-America",
        price: "120",
        image: "buenos.webp",
        book: "BOOK NOW!",
      },
      {
        name: "Sao Paulo",
        country: "Brazil",
        category: "South-America",
        price: "170",
        image: "saopaul.jpeg",
        book: "BOOK NOW!",
      },
      {
        name: "Luanda",
        country: "Angola",
        category: "Africa",
        price: "120",
        image: "luanda.jpg",
        book: "BOOK NOW!",
      },
      {
        name: "New Delhi",
        country: "India",
        category: "Asia",
        price: "90",
        image: "newdelhi.jpg",
        book: "BOOK NOW!",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");

    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    //image div
    let imgContainer = document.createElement("div");    //div - card category
    imgContainer.classList.add("image-container");          // image-container - img
                                                            //container - country,price,...
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    

    //product name
    let names = document.createElement("h3");
    names.classList.add("product-name");
    names.innerText = i.name.toUpperCase();
    container.appendChild(names);

    //country
    let countries = document.createElement("h6");
    countries.classList.add("country-name");
    countries.innerText = i.country.toUpperCase();
    container.appendChild(countries);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);



    //link
    let a =document.createElement("a");
    a.classList.add("book");
    a.innerText = i.book.toUpperCase();
    container.appendChild(a);
    a.href = "../book/book.html";
    
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) { //take the value Eg. filterProduct('Asia')

    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {

      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active"); // first All is active because windown onload , value now have class active
      } else {
        button.classList.remove("active");
      }
    });
     
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } 
      else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide"); //display the value
        } else {
          //hide other elements
          element.classList.add("hide");
          $('.notFound').css('display', 'none');//for invalid result    
        }
      }
    });
  }
  
 // Search button click
document.getElementById("search").addEventListener("click", () => {
  // Initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  let found = false; // Add a variable to track if any matching card is found

  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Display matching card
      cards[index].classList.remove("hide");
      found = true; // Set found to true if at least one card is found
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });


  // Show or hide the "Not Found" message based on the 'found' variable
  if (found) {
    $('.notFound').css('display', 'none'); // Hide the Not Found message
  } else {
    $('.notFound').css('display', 'block'); // Display the Not Found message
  }
});

$('#search-input').on('keyup', function(event) {
  if ($('.card:not(.hide)').length === 0) { // Checking if there are no visible cards
    $('.notFound').css('display', 'block'); // Display the Not Found message
  } else {
    $('.notFound').css('display', 'none'); // Hide the Not Found message
  }
});


  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };