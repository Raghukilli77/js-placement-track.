let mobile = {
    brand: "Samsung",
    model: "M35",
    price: 20000
};
let show = document.querySelector("#show");
let output = document.querySelector("#output");
show.addEventListener("click", () => {
    let { brand, model, price } = mobile;
    output.innerHTML = `Brand: ${brand}<br>Model: ${model}<br>Price: ${price}`;
    console.log(brand);
});
