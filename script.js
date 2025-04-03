document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 2s";
        document.body.style.opacity = 1;
    }, 500);
});

document.addEventListener("keydown", function(event) {
    if (event.key === "c") {  
        let hiddenPosts = document.querySelectorAll(".hidden-post");
        hiddenPosts.forEach(post => {
            post.style.display = "block";
        });
    }
});
