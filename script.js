const productArray = [];

function addProduct() {
  let input = document.getElementById("product").value;
  productArray.push(input);
  document.getElementById("product").value = "";

  let output = document.getElementById("output");
  output.innerHTML = "";

  productArray.forEach(updateProductList);

  function updateProductList(item) {
    output.appendChild((output.innerHTML = `${productArray[i].input}`));
    console.log(item);
  }

  return false;
}
console.log(productArray);
