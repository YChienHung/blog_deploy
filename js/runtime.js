// start time :07/20/2019 19:21:37

// 添加网站运行时间
function freshtime() {
    let create_time = Math.round(new Date('07/20/2019 19:21:37').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function (h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 24 * 3600) {
        time[0] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[1] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[2] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[3] = nol(second);
    }
    let currentTimeHtml = ""
    currentTimeHtml = `<span class="textTip">本站已经运行了 ${time[0]} 天</span><span id="runtime"> ${time[1]} 小时 ${time[2]} 分 ${time[3]} 秒 </span> <i class="fas fa-heartbeat" style="color:red"></i>`
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}

// 启动时钟刷新页脚
setInterval(() => {
    freshtime()
}, 500);