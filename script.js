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


let lastMinuteImages = [
    { name: "SVALBARD", url: "https://mediaim.expedia.com/destination/1/99ab483f8a6c8cdde760150d34bac04e.jpg" },
    { name: "SAN FRANCISCO", url: "https://images.ctfassets.net/bth3mlrehms2/5D89r4pwpt9FyGctr3sOcP/b5d8c3dc072812ed8c3f5381ba290fc9/Nordamerika_USA_San_Francisco_Golden_Gate_Bridge.jpg?w=3863&h=2578&fl=progressive&q=50&fm=jpg" },
    { name: "COREA DEL SUD", url: "https://strapi-imaginary.weroad.it/resource/cover/39849/Cover-Picture-1.jpg" },
    { name: "SRI LANKA", url: "https://static1.evcdn.net/images/reduction/1681995_w-3840_h-2160_q-70_m-crop.jpg" },
    { name: "MADAGASCAR", url: "https://itravel.it/app/uploads/2023/01/VIAGGIO-ORGANIZZATO-MADAGASCAR-1.jpg" },
    { name: "ISLANDA", url: "https://www.helvetia.com/it/web/it/chi-siamo/blog/articoli-piu-consultati/viaggi/Autunno_in_Islanda/_jcr_content/teaserimage/image.1694610040439.transform-fp/1920x1080/Islanda_in_autunno.png" },
    { name: "SICILIA", url: "https://www.helvetia.com/it/web/it/chi-siamo/blog/articoli-piu-consultati/viaggi/viaggio-sicilia-autunno/_jcr_content/whitelabelparsys-01/storystage_copy_1249/image.1664265570420.transform-fp/1920x1080/viaggio-sicilia-autunno.png" },
    { name: "BOLIVIA", url: "https://www.dove-e-quando.it/site/images/illustration/bolivie_685.jpg" },
    { name: "AGRA", url: "https://static.ohga.it/wp-content/uploads/sites/24/2021/04/iStock-1152168512.jpg" },
];

function createLastMinuteImages() {
    let container = document.querySelector('#lastMinute + div');

    for (let image of lastMinuteImages) {
      let colDiv = document.createElement('div');
      colDiv.className = 'col';

      let img = document.createElement('img');
      img.src = image.url;
      img.alt = image.name;

      let span = document.createElement('span');
      span.innerText = image.name;

      colDiv.appendChild(img);
      colDiv.appendChild(span);
      container.appendChild(colDiv);
    }
}


createLastMinuteImages();



  