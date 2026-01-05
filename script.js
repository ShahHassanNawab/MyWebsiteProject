// Order button alert
const orderBtn = document.querySelector(".order-btn");
orderBtn.addEventListener("click", function () {
  alert("Thank you for your interest! Order page will open.");
});

// Image click alert
const images = document.querySelectorAll("img");
images.forEach(function (img) {
  img.addEventListener("click", function () {
    alert("PureDrop Organic Hair Oil Product Image");
  });
});

// Auto update year in footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = "&copy; " + year + " PureDrop Organic Hair Oil";
