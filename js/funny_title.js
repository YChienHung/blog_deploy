var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", function () {
    document.hidden ? (document.title = "Not Found 404", clearTimeout(titleTime)) : (document.title = "哈哈哈，你被骗了 ", titleTime = setTimeout(function () {
        document.title = OriginTitile
    }, 2e3))
});