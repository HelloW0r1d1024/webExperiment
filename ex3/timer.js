// timer.js
var oList = document.getElementsByTagName("input");
var oTxt = oList[0];
var oStart = oList[1];
var oStop = oList[2];
var oReset = oList[3];
var n = 0, timer = null;

//开始计时
oStart.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        n++; // n每10ms增加1
        var m = parseInt(n/100/60); // 分钟数
        var s = parseInt(n/100 % 60); // 秒数
        var ms = parseInt(n%100); // 毫秒数
        oTxt.value = toDub(m)+":"+toDub(s)+"."+toDub(ms);
    }, 10);
}

oStop.onclick = function () {
    clearInterval(timer);
} // 暂停并且清空计时器

oReset.onclick = function () {
    oTxt.value = "00:00.00";
    n = 0;
} // 重置

function toDub(n){
    return n<10 ? "0"+n : ""+n;
} // 补零