document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll('#lunbo img');
    const totalImages = images.length;

    function showNextImage() {
        images[index].classList.remove('active');
        index = (index + 1) % totalImages;
        images[index].classList.add('active');
    }

    images[index].classList.add('active');
    setInterval(showNextImage, 3000); // 每3秒切换一次图片
});
