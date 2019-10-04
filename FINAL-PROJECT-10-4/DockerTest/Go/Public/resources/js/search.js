let searchBtn = document.getElementById('search-button');

let sortMenu = document.getElementById('search-sort');

sortMenu.addEventListener('change', getProducts);

async function getProducts(e) {
    const api_url = 'http://localhost:8080/products'
    const response = await fetch(api_url);
    const data = await response.json();

    if (e.target.value === 'low-to-high') {
        sortProductsAsc(data)
    } else {
        sortProductsDesc(data)
    }
};

function sortProductsAsc(d) {
    let sortedDataAsc = d.sort(function (a, b) {
        return a.Price - b.Price;
    })
    generateMarkup(sortedDataAsc);
}

function sortProductsDesc(d) {
    let sortedDataDesc = d.sort(function (a, b) {
        return b.Price - a.Price;
    })
    generateMarkup(sortedDataDesc);
}

searchBtn.addEventListener('click', listProducts);

async function listProducts(e) {

    e.preventDefault();

    let searchVal = document.getElementById('category').value;

    const api_url = 'http://localhost:8080/products'
    const response = await fetch(api_url);
    const data = await response.json();

    const filteredProducts = data.filter(
        val => {
            return val.Face_Style.toLowerCase().includes(searchVal.toLowerCase()) ||
                val.Product_Name.toLowerCase().includes(searchVal.toLowerCase()) ||
                val.Case_Material.toLowerCase().includes(searchVal.toLowerCase());
        })

    generateMarkup(filteredProducts);
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