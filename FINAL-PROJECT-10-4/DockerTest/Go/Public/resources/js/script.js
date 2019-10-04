// CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

async function getData() {
  const api_url = 'http://localhost:8080/products';
  const response = await fetch(api_url);
  const data = await response.json()

  const filteredProducts = data.filter(val => {
    return val.Featured.toLowerCase() === 'featured'
  })

  console.log(filteredProducts);

  generateMarkup(filteredProducts);
}

function generateMarkup(data) {
  let markup = data.map((d) => {
    return `

      <div class="card product-card" id="card-${d.Product_ID}" data-Product_ID=${d.Product_ID}>
        <div class="card-product">
          <a href="watches.html?productid=${d.Product_ID}">
            <h3>${d.Product_Name}</h3>
            <img src="${d.Main_photo}" alt="">
            <h4>$${d.Price}</h4>
          </a>
          <ul class="product-details">
              <li>Stainless steel enclosure</li>
              <li>Classic WVTCH face</li>
              <li>Premium leather band</li>
              <li><a class="btn-full" href="#link1">Add to Cart</a></li>
          </ul>
          </div>
        </div>
    `;
  });

  updateHTML(markup.join(''));
}

function updateHTML(val) {
  document.querySelector('.featured-product').innerHTML = val;
};

window.onload = getData;

// Slideshow
// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1} 
//   x[slideIndex-1].style.display = "block"; 
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
