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
        name: "Lens G16-35mm",
        image1: "../images/bucket_001_SEL14F18GM_1.png",
        image2: "../images/bucket_003_SEL14F18GM.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "Lens G24-70mm",
        image1: "../images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
        image2: "../images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "Lens G24-70mm",
        image1:
          "../images/bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png",
        image2: "../images/bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "Lens G100-350mm",
        image1: "../images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
        image2: "../images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "Lens G24-70mm",
        image1: "../images/bucket_SEL100400GM_0000_8ff00e4b015cefaaffa2c79dccc1f65c_1.png",
        image2: "../images/bucket_SEL200600G_0000_aa4c806667bb613cd7fbc9fa6ed7c6a3_1.png",
        old_price: "400",
        curr_price: "300",
      },
      {
        name: "Lens G24-35mm",
        image1:
          "../images/bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png",
        image2: "../images/bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png",
        old_price: "400",
        curr_price: "300",
      },
      
    ];
  
  let product_list = document.querySelector("#related-products");
  
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

  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  

  function zoom(event){
    var zoomer = event.currentTarget;
    x = event.offsetX/zoomer.offsetWidth*100;
    y = event.offsetY/zoomer.offsetHeight*100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }