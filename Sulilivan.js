// 目前没有功能性 JS，如需交互可在此添加
console.log("欢迎来到沙粒文的主页！");

document.querySelectorAll('#github a').forEach(function(link) {
    link.addEventListener('click', function() {
        console.log("正在跳转到：" + link.href);
    });
});