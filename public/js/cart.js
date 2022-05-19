
        const top_items_count = document.querySelector('.items-count'),
        bottom_items_count = document.querySelector('.bottom-items-count'),
        exit = document.querySelector('.exit'),
        bucket = document.querySelector('.cart').style;

    top_items_count.innerHTML = 0;
    bottom_items_count.innerHTML = 0;

    function openBucket() {
        bucket.visibility = "visible";
        bucket.opacity = "1";
        bucket.zIndex = "9";
        bucket.transition = "all 0.5s";
    }

    exit.addEventListener('click', () => {
        bucket.visibility = "hidden";
        bucket.opacity = "0";
        bucket.zIndex = "-9";
        bucket.transition = "all 0.5s";
    });

    top_items_count.innerHTML = count;
    bottom_items_count.innerHTML = count;
