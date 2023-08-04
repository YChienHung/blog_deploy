var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

//cookie函数


function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
//纪念日

if (m == 9 && dd == 18) {
    console.log("勿忘国耻，振兴中华！\n\n今天是1931年9月18日九一八事变" + (y - 1931).toString() + "周年纪念日！\n=================================================================")
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(100%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是1931年9月18日九一八事变" + (y - 1931).toString() + "周年纪念日。\n勿忘国耻，振兴中华！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 7) {
    console.log("勿忘国耻，振兴中华！\n\n今天是1937年7月7日卢沟桥事变" + (y - 1937).toString() + "周年纪念日！\n=================================================================")
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(100%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是1937年7月7日卢沟桥事变" + (y - 1937).toString() + "周年纪念日。\n勿忘国耻，振兴中华！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 13) {
    console.log("勿忘国耻，振兴中华！\n\n今天是1937年12月13日南京大屠杀" + (y - 1931).toString() + "周年纪念日！为遇难的无辜同胞们缅怀！\n=================================================================")
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(100%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是1937年12月13日南京大屠杀" + (y - 1937).toString() + "周年纪念日，希望你能停下来缅怀遇难的无辜同胞们。\n勿忘国耻，振兴中华！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 14) {
    console.log("勿忘国耻，振兴中华！\n\n今天是8月14日世界慰安妇纪念日！\n=================================================================")
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(100%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是8月14日世界慰安妇纪念日，希望你能停下来了解一下来为历史作证，为曾经的无辜妇女发声。\n勿忘国耻，振兴中华！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

//节假日

if (m == 10 && dd 