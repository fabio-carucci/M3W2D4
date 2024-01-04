//Set the starting point of the main content based on the variable height of the fixed-position navbar
document.querySelector('main').style.marginTop = document.querySelector('nav.navbar').offsetHeight + 20 + 'px';

//Function that brings the window to the navbar link, preventing it from ending up below it.
//It remove the class "show" from the .navbar-collapse when a nav-link is clicked.
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelector('.navbar-collapse').classList.remove('show');

        let linkId = link.getAttribute('href').substring(1);
        let linkElement = document.getElementById(linkId);

        window.scrollTo(0, linkElement.offsetTop - document.querySelector('nav.navbar').offsetHeight);
    });
});
