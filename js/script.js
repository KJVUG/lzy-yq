// script.js
window.onload = function() {
    var textContainer = document.getElementById('textContainer');
    var textContent = "亲爱的宝贝，情人节快乐呀。和你在一起的每一天，都像是一首浪漫的诗，充满了甜蜜和温馨。你是我生命中最美的奇迹，是我永远的宝贝。我会用一生的时间去爱你、宠你、守护你。希望未来的日子里，我们能一起走过更多的春夏秋冬，一起创造更多美好的回忆。点击左边图片查看我们的点点回忆吧~还有一个小秘密哦,点击一下我们的夕阳西下💗";
    var textIndex = 0;
    var typingSpeed = 100; // 打字速度，单位为毫秒

    function typeText() {
        if (textIndex < textContent.length) {
            textContainer.innerText += textContent.charAt(textIndex);
            textIndex++;
            setTimeout(typeText, typingSpeed); // 使用setTimeout来创建打字效果
        }
    }

        // 延迟10秒后开始打字效果
        setTimeout(typeText, 25000); // 10000毫秒等于10秒
};