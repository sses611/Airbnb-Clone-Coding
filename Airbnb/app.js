window.onload = function() {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener("click", event => {
            document.querySelector('#active-category-btn').removeAttribute('id');

            button.setAttribute('id', 'active-category-btn');
        })
    })
}                                                                                                                   