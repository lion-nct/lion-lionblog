let products = [
  {
    name: "Lens G24-70mm",
    image1:
      "../images/bucket_001_SEL14F18GM_1.png",
    image2:
      "../images/bucket_003_SEL14F18GM.png",
    old_price: "500",
    curr_price: "600",
  },
  {
    name: "Lens G24-70mm",
    image1:
      "../images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
    image2:
      "../images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
    old_price: "900",
    curr_price: "750",
  },
  {
    name: "Lens G24-35mm",
    image1:
      "../images/bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png",
    image2:
      "../images/bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png",
    old_price: "600",
    curr_price: "400",
  },
  {
    name: "Lens G100-350mm",
    image1:
      "../images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
    image2:
      "../images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
    old_price: "800",
    curr_price: "650",
  },
  {
    name: "Lens G24-35mm",
    image1:
      "../images/bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png",
    image2:
      "../images/bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png",
    old_price: "750",
    curr_price: "600",
  },
  {
    name: "Lens G16-35mm ",
    image1:
      "../images/bucket_SEL100400GM_0000_8ff00e4b015cefaaffa2c79dccc1f65c_1.png",
    image2:
      "../images/bucket_SEL200600G_0000_aa4c806667bb613cd7fbc9fa6ed7c6a3_1.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "Lens G24-70mm",
    image1:
      "../images/bucket_001_SEL14F18GM_1.png",
    image2:
      "../images/bucket_003_SEL14F18GM.png",
    old_price: "900",
    curr_price: "850",
  },
  {
    name: "Lens G100-350mm",
    image1:
      "../images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
    image2:
      "../images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
    old_price: "800",
    curr_price: "650",
  },
];

let product_list = document.querySelector("#products");

renderProducts = (products) => {
  products.forEach((e) => {
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
        <div class="product-card">
            <div class="product-card-img">
                <img src="${e.image1}" alt="">
                <img src="${e.image2}" alt="">
            </div>
            <div class="product-card-info">
                <div class="product-btn">
                    <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                    <button class="btn-flat btn-hover btn-cart-add">
                    <i class="fas fa-cart-plus"></i>
                    </button>
                    <button class="btn-flat btn-hover btn-cart-add">
                    <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="product-card-name">
                    ${e.name}
                </div>
                <div class="product-card-price">
                    <span><del>$${e.old_price}</del></span>
                    <span class="curr-price">$${e.curr_price}</span>
                </div>
                <span class="product-card-info-span span-y span-y-top"></span>
                <span class="product-card-info-span span-y span-y-bottom"></span>
                <span class="product-card-info-span span-x x-left"></span>
                <span class="product-card-info-span span-x x-right"></span>
            </div>
        </div>
    </div>
`;

    product_list.insertAdjacentHTML("beforeend", prod);
  });
};

renderProducts(products);
// x2 
renderProducts(products);

let filter_col = document.querySelector("#filter-col");

document
  .querySelector("#filter-toggle")
  .addEventListener("click", () => filter_col.classList.toggle("active"));

document
  .querySelector("#filter-close")
  .addEventListener("click", () => filter_col.classList.toggle("active"));
