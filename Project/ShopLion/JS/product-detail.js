document.querySelectorAll(".product-img-item").forEach((e) => {
    e.addEventListener("click", () => {
      let img = e.querySelector("img").getAttribute("src");
      document.querySelector("#product-img > img").setAttribute("src", img);
    });
  });
  
  document
    .querySelector("#view-all-description")
    .addEventListener("click", () => {
      let content = document.querySelector(".product-detail-description-content");
      content.classList.toggle("active");
      document.querySelector("#view-all-description").innerHTML =
        content.classList.contains("active") ? "view less" : "view all";
    });
  
    let products = [
      {
        name: "JBL E55BT KEY BLACK",
        image1: "../images/thumbnails_large__default_upload_bucket_001_SEL14F18GM_1.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_003_SEL14F18GM.png.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "JBL JR 310BT",
        image1: "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "JBL TUNE 750BTNC",
        image1:
          "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "JBL Horizon",
        image1: "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "UA Project Rock",
        image1: "../images/thumbnails_large__default_upload_bucket_SEL100400GM_0000_8ff00e4b015cefaaffa2c79dccc1f65c_1.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_SEL200600G_0000_aa4c806667bb613cd7fbc9fa6ed7c6a3_1.png.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "JBL Tune 220TWS",
        image1:
          "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png.png",
        image2: "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png.png",
        old_price: "400",
        curr_price: "300",
      },
      
    ];
  
  let product_list = document.querySelector("#related-products");
  
  renderProducts = (products) => {
    products.forEach((e) => {
      let prod = `
              <div class="col-4 col-md-6 col-sm-12">
                  <div class="product-card">
                      <div class="product-card-img">
                          <img src="${e.image1}" alt="">
                          <img src="${e.image2}" alt="">
                      </div>
                      <div class="product-card-info">
                          <div class="product-btn">
                              <a href="../product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                              <button class="btn-flat btn-hover btn-cart-add">
                                  <i class='bx bxs-cart-add'></i>
                              </button>
                              <button class="btn-flat btn-hover btn-cart-add">
                                  <i class='bx bxs-heart'></i>
                              </button>
                          </div>
                          <div class="product-card-name">
                              ${e.name}
                          </div>
                          <div class="product-card-price">
                              <span><del>$${e.old_price}</del></span>
                              <span class="curr-price">$${e.curr_price}</span>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      product_list.insertAdjacentHTML("beforeend", prod);
    });
  };
  
  renderProducts(products);
  