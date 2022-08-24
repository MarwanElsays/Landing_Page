/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//create section
let sec = document.createElement('section');
let d = document.createElement('div');
let head = document.createElement('h2');
let p =document.createElement('p');
let p1 = document.createElement('p');
let id4 = document.createAttribute("id");
let c4 = document.createAttribute("class");
d.setAttributeNode(c4);
d.setAttribute("class","landing__container");
sec.setAttributeNode(id4);
sec.setAttribute("id","section4");

head.innerText = 'Section 4';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
p1.innerText ='Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
const f= document.createDocumentFragment();
f.appendChild(head);
f.appendChild(p);
f.appendChild(p1);
d.appendChild(f);
sec.appendChild(d);

const mainn = document.getElementById('m');
mainn.appendChild(sec);




// build the nav
const navbar = document.querySelector('#navbar__list');
const frag=document.createDocumentFragment();
for(let i=1;i<=4;i++)
{
    let list = document.createElement('li');
    let l = document.createElement('a');
    let h = document.createAttribute("href");
    let c = document.createAttribute("class");
    let c1 = document.createAttribute("class");
    l.setAttributeNode(h);
    list.setAttributeNode(c);
    l.setAttributeNode(c1);
    l.setAttribute("href","#section"+i);
    l.classList.add("menu__link");
    l.innerText='section'+i;
    list.classList.add("section"+i);
    list.appendChild(l);
    frag.appendChild(list);
}
navbar.appendChild(frag);

// Add class 'active' to section when near top of viewport
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
window.addEventListener("scroll", () => {
  let current = "";
  let s="";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      s=section;
    }
  });

    s.classList.add("your-active-class");
    sections.forEach((section) => {
        section.classList.remove("your-active-class");
        if (section == s) {
          section.classList.add("your-active-class");
        }
      });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});


// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

let icon = document.getElementById("icon");
let menu = document.getElementById("navbar__list");

icon.addEventListener("click",function(){
     menu.classList.toggle("show");
     icon.classList.toggle("show1");
});



// Build menu 

// Scroll to section on link click

// Set sections as active


