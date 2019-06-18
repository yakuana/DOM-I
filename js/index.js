const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]); 

const headerImg = document.getElementById("cta-img"); 
headerImg.setAttribute('src', siteContent["cta"]["img-src"]); 

const middleImg = document.getElementById("middle-img"); 
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]); 

// Updated header text 
const header1 = document.querySelector("h1"); 
header1.textContent = siteContent["cta"]["h1"]; 

// Created nav bar and updated nav text 
const navigation = document.querySelectorAll("nav a"); 
for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)]; 
  navigation[i].style.color = 'green';
}; 

// Updated button text 
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]; 

// Updated all text within main content 
const textContent = document.querySelectorAll("p"); 
textContent[0].textContent = siteContent["main-content"]["features-content"]; 
textContent[1].textContent = siteContent["main-content"]["about-content"]; 
textContent[2].textContent = siteContent["main-content"]["services-content"]; 
textContent[3].textContent = siteContent["main-content"]["product-content"]; 
textContent[4].textContent = siteContent["main-content"]["vision-content"]; 

// Updated text within contact 
textContent[5].textContent = siteContent["contact"]["address"];
textContent[6].textContent = siteContent["contact"]["phone"];
textContent[7].textContent = siteContent["contact"]["email"];

// Updated text within footer 
textContent[8].textContent = siteContent["footer"]["copyright"]

// Updated all h4 titles 
const header4 = document.querySelectorAll("h4"); 
header4[0].textContent = siteContent["main-content"]["features-h4"]; 
header4[1].textContent = siteContent["main-content"]["about-h4"]; 
header4[2].textContent = siteContent["main-content"]["services-h4"]; 
header4[3].textContent = siteContent["main-content"]["product-h4"]; 
header4[4].textContent = siteContent["main-content"]["vision-h4"]; 
header4[5].textContent = siteContent["contact"]["contact-h4"]


// let contactH4 = document.querySelector("h4.contact"); 
// contactH4.textContent = siteContent["contact"]["contact-h4"]; 

// Jason's Code 
let newElement = document.createElement('a');
newElement.textContent= 'Home';

let newElementTwo = document.createElement('a'); 
newElementTwo.textContent = 'Sign Up'; 

const nav = document.querySelector('nav');
nav.prepend(newElement);
nav.append(newElementTwo); 