fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const productContainer = document.getElementById("container");

    products.forEach((p) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("img-c");
      const productTitle = document.createElement("h2");
      productTitle.textContent = p.title;
      const productImage = document.createElement("img");
      productImage.src = p.image;
      productImage.alt = p.title;
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${p.price}`;
      const rateSpan = document.createElement("span");
      rateSpan.classList.add("ratings");
      const productRate = document.createElement("p");
      productRate.classList.add("rate");
      const rateCount = document.createElement("p");
      rateCount.classList.add("count");
      rateCount.textContent = `(${p.rating.count})`;
      productRate.textContent = p.rating.rate;

      
      productCard.appendChild(imgContainer);
      imgContainer.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productPrice);
      productCard.appendChild(rateSpan);
      rateSpan.appendChild(productRate);
      rateSpan.appendChild(rateCount);
      productContainer.appendChild(productCard);
    });
  })
  .catch((e) => console.error("Error fetching the products", e.message));