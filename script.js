    const showMenu = (toggleId, navId) =>{ //toggles visibility of nav menu 
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId) //checks if both the conditions of nav and toggle are met and then add the function show menu adds click event listener

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{  //this adds a click event to the toggle element 
            nav.classList.toggle('show') //show class is used to control the appearance in css, if its present when the toggle element is clicked it will be removed otherwise it will be added 
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu') //refers to getting the element with the id nav menu
    navMenu.classList.remove('show') //this removes the show hence no longer making the nav menu visible on the screen
}
navLink.forEach(n => n.addEventListener('click', linkAction)) //for each element in the nav link node or array link action function is executed 


const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{ //defines the scroll active function 
    const scrollDown = window.scrollY

  sections.forEach(current =>{ //iterates over each section element
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58, //calculates the top position of the current section adjusted by 58 pixels
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') //This selects the corresponding navigation menu item with an anchor (<a>) tag that has an 'href' attribute containing the current section's 'id'.
        

              //The combination of these conditions essentially checks if the user's current scroll position falls within the vertical range of the current section. If the conditions are true, it means that the section is currently in view on the page.


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link') 
            
            // This adds the CSS class 'active-link' to the navigation menu item associated with the current section. This is used to visually highlight or indicate the active section in a navigation menu.
            
            //If the conditions are not met (i.e., the section is not in view), the code inside the else block is executed
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 