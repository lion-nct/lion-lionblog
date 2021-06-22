let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

hideAllSlide = () => {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
};

showSlide = () => {
  hideAllSlide();
  slides[slide_index].classList.add("active");
};

nextSlide = () =>
  (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

prevSlide = () =>
  (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

// pause slide when hover slider
document
  .querySelector(".slider")
  .addEventListener("mouseover", () => (slide_play = false));

// enable slide when mouse leave out slider
document
  .querySelector(".slider")
  .addEventListener("mouseleave", () => (slide_play = true));

// slider controll

document.querySelector(".slide-next").addEventListener("click", () => {
  nextSlide();
  showSlide();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  prevSlide();
  showSlide();
});

showSlide();

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
  {
    name: "JBL E55BT KEY BLACK",
    image1:
      "../images/thumbnails_large__default_upload_bucket_001_SEL14F18GM_1.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_003_SEL14F18GM.png.png",
    old_price: "500",
    curr_price: "600",
  },
  {
    name: "JBL JR 310BT",
    image1:
      "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png.png",
    old_price: "900",
    curr_price: "750",
  },
  {
    name: "JBL TUNE 750BTNC",
    image1:
      "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png.png",
    old_price: "600",
    curr_price: "400",
  },
  {
    name: "JBL Horizon",
    image1:
      "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png.png",
    old_price: "800",
    curr_price: "650",
  },
  {
    name: "JBL Tune 220TWS",
    image1:
      "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png.png",
    old_price: "750",
    curr_price: "600",
  },
  {
    name: "UA Project Rock",
    image1:
      "../images/thumbnails_large__default_upload_bucket_SEL100400GM_0000_8ff00e4b015cefaaffa2c79dccc1f65c_1.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_SEL200600G_0000_aa4c806667bb613cd7fbc9fa6ed7c6a3_1.png.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Endurance SPRINT",
    image1:
      "../images/thumbnails_large__default_upload_bucket_001_SEL14F18GM_1.png.png",
    image2:
      "../images/thumbnails_large__default_upload_bucket_003_SEL14F18GM.png.png",
    old_price: "900",
    curr_price: "850",
  },
];

let product_list = document.querySelector("#latest-products");
let best_product_list = document.querySelector("#best-products");

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
  best_product_list.insertAdjacentHTML("afterbegin", prod);
});
