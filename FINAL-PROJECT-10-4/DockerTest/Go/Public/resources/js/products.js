async function getData() {
  const api_url = 'http://localhost:8080/products';
  const response = await fetch(api_url);
  const data = await response.json();

  generateMarkup(data);

};

let filterMenu = document.getElementById('category');

filterMenu.addEventListener('change', listProducts);

async function listProducts(e) {
  const api_url = 'http://localhost:8080/products'
  const response = await fetch(api_url);
  const data = await response.json();

  const dropdownResults = data.filter(val => {
    if (e.target.value === 'all-products') {
      return true;
    }

    return val.Face_Style.toLowerCase().includes(e.target.value.toLowerCase());

  })

  generateMarkup(dropdownResults);

  console.log(dropdownResults);
};

function generateMarkup(data) {
  let markup = data.map((d) => {
    return `
     <div class="card product-card" data-Product_ID=${d.Product_ID}>
        <div>
          <a href="watches.html?productid=${d.Product_ID}">
              <h3>${d.Product_Name}</h3>
              <img src="${d.Main_photo}" alt="">
              <h4>$${d.Price}</h4>
          </a>

          <ul class="product-details">
              <li>${d.Case_Material}</li>
              <li>${d.Face_Style}</li>
              <li>${d.Band_Material}</li>
              <li><a class="btn-full" href="#link1">Add to Cart</a></li>
          </ul>
        </div>
      </div>
    `;
  });

  updateHTML(markup.join(''));
}

function updateHTML(val) {
  document.querySelector('.container').innerHTML = val;
};