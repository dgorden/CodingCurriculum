async function getUrl() {
    let urlParams = new URLSearchParams(window.location.search);
    let urlStr = urlParams.toString();
    let urlId = urlStr.split('=');
    console.log(urlStr, urlId, urlId[1]);
    const api_url = 'http://localhost:8080/products/' + urlId[1];
    const response = await fetch(api_url);
    const productData = await response.json();
    console.log(productData);
    generateMarkup(productData);

};

function generateMarkup(d) {
    const markup = `
      <div class="row">
      <h1 class="product-heading">${d.Product_Name}</h1>
  </div>

  <section class="product-page">
      <div class="product-container">
          <div class="card product-card">
              <img src="${d.Main_photo}" alt="">
          </div>
          <div class="card product-card product-card-details" id="features-list">
              <ul>
                  <li>
                      <h4>$${d.Price}</h4>
                  </li>
                  <li>${d.Case_Material}</li>
                  <li>${d.Face_Style}</li>
                  <li>${d.Band_Material}</li>
                  <li><select class="product-page-select" name="quantity" id="quantity">
                          <option value="">-Quantity-</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select></li>
                  <li><select class="product-page-select" name="style" id="style">
                          <option value="">-Style-</option>
                          <option value="classic">Classic</option>
                          <option value="marble">Marble</option>
                          <option value="wood">Wood</option>
                      </select></li>
                  <li><a class="btn-full" href="#link1">Add to Cart</a></li>
              </ul>
          </div>
      </div>
  </section>
  <section class="product-details">
      <h4 class="description-header">Product Details</h4>
      <hr>
      <p class="product-description">${d.Product_Description}</p>
  </section>
      `;
    updateHTML(markup);
};

function updateHTML(val) {
    document.querySelector('#product-insert').innerHTML = val;
};

window.onload = getUrl;