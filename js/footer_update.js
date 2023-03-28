// start time :07/20/2019 19:21:37

// 添加页脚徽标
function freshbadge() {
    if (document.getElementById("badge").innerHTML != "正在加载徽标……")
        return

    let badgetext = "";
    badgetext += `<a target="_blank" href="https://hexo.io" title="本站由Hexo强力驱动"><img src="//image.ivylegends.cn/badges/Frame-Hexo-blue.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://butterfly.js.org/" title="本站主题由Butterfly提供技术支持"><img src="//image.ivylegends.cn/badges/Theme-butterfly.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://github.com/" title="本站由Github提供托管"><img src="//image.ivylegends.cn/badges/Source-Github.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://icp.gov.moe/?keyword=20221799" title="本站已在萌国备案"><img src="//image.ivylegends.cn/badges/萌ICP备-20221799号.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://beian.miit.gov.cn/" title="本站已在鲁备案"><img src="//image.ivylegends.cn/badges/鲁ICP备-2021023817号-1.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" title="本站由又拍云提供加速支持"><img src="//image.ivylegends.cn/badges/cdn-又拍云.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://cloud.tencent.com/" title="本站由腾讯云提供域名"><img src="//image.ivylegends.cn/badges/Hosted-腾讯云.svg"></a>&nbsp;`
    badgetext += `<a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可"><img src="//image.ivylegends.cn/badges/Copyright.svg"></a>`

    document.getElementById("badge").innerHTML = badgetext
}

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
    currentTimeHtml = `<span class='textTip'>本站已经运行了 ${time[0]} 天</span><span id='runtime'> ${time[1]} 小时 ${time[2]} 分 ${time[3]} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
    document.getElementById("workbox").innerHTML = currentTimeHtml
}

// 启动时钟刷新页脚
setInterval(() => {
    freshtime()
}, 500);

setInterval(() => {
    freshbadge()
}, 1000);