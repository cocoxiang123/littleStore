const img = document.getElementById("product_img");
const container = document.getElementById("img_container ");

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = `scale(1.8)`;
});

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});
