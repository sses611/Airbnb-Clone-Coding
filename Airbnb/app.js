// alert("hello")

document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener("click", event => {
        console.log("clicked");
    })
})