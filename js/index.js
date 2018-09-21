var btn2 = $("btn2");


// 5. 监听点击按钮
btn2.onclick = function () {
    $("panel").style.display = "block";
    $("login").style.display = "block";
    document.body.style.overflow = "hidden";
};
$("close").onclick = function () {
    $("panel").style.display = "none";
    $("login").style.display = "none";
    document.body.style.overflow = "auto";
};

// btn2.onclick = function (event) {
//     // 阻止冒泡
//     if (event && event.stopPropagation){
//         event.stopPropagation();
//     }else {
//         window.event.cancelBubble = true;
//     }
//
//     $("panel").style.display = "block";
//     $("login").style.display = "block";
//
//     // 隐藏滚动条
//     document.body.style.overflow = "hidden";
// };

// document.onclick = function (event) {
//     var e = event || window.event;
//     var targetId = e.target ? e.target.id : e.srcElement.id;
//     if (targetId !== "login") {
//         $("panel").style.display = "none";
//         $("login").style.display = "none";
//
//         document.body.style.overflow = "auto";
//     }
// };


var adv_top = $("adv_top");
var imgs = adv_top.getElementsByTagName("img");

var iNow = 0;
imgs[iNow].style.opacity = "1";
setInterval(function () {
    // clearInterval(timer);
    buffer(imgs[iNow],{opacity:0});
    if (iNow === 6){
        iNow = 0;
    }else {
        iNow++;
    }
    buffer(imgs[iNow],{opacity:1});
},1000);


var tab_header = $("tab_header");
var tab = $("tab");
var allList = tab_header.getElementsByTagName("li");
var allDom = tab.getElementsByClassName("dom");
var cho = 0;

allList[cho].className = "choose";
for (var i = 0; i < allList.length; i++){
    (function (index) {
        allList[index].onmousedown = function () {

            allList[index].className = "choose";
            allDom[index].style.display = "block";

            allList[cho].className = "";
            allDom[cho].style.display = "none";

            cho = index;
        }
    })(i);
}



autoCreateImg();
function autoCreateImg() {
    // 1.1 数据
    var json = [
        {txt: '当我们正在为生活疲于奔命的时候，生活已经离我们而去。——约翰·列侬', pic: 'images/0.jpg'},
        {txt: '活在世上，不必什么都知道，只知道最好的就够了。——王小波', pic: 'images/1.jpg'},
        {txt: '世界上任何书籍都不能带给你好运，但是它们能让你悄悄变成你自己。——黑塞', pic: 'images/2.jpg'},
        {txt: '很多人不需要再见，只是路过而已。——《彼岸花》', pic: 'images/3.jpg'},
        {txt: '人生最困难的三件事：保守秘密，忘掉所受的创伤，充分利用余暇。——吉罗', pic: 'images/4.jpg'},
        {txt: '有些人是离开后，才会发觉那个人是最喜欢的。——《东邪西毒》', pic: 'images/5.jpg'},
        {txt: '我总是在日暮时分,书影与书影之间,宁静的悲哀里,最想念你。——亦舒', pic: 'images/6.jpg'},
        {txt: '再长的路，一步步地能走完，再短的路，不迈开双脚也无法到达。', pic: 'images/7.jpg'},
        {txt: '哪里会有人喜欢孤独，不过是不喜欢失望。——村上春树', pic: 'images/8.jpg'},
        {txt: '人时已尽，人世很长，我在中间，应当休息。——顾城', pic: 'images/9.jpg'},
        {txt: '信任的深浅，不在于会不会对你笑，而在于愿不愿意在你面前哭。', pic: 'images/10.jpg'},
        {txt: '有一种旅行，不为跋涉千里的向往，只为漫无目的的闲逛，不为人山人海的名胜，只为怡然自乐的街景...', pic: 'images/11.jpg'},
        {txt: '人都会孤独，但唯独他，可以越过这尘世的热闹，一眼明白这世间所有的繁华不过是他身边的过眼云烟。', pic: 'images/12.jpg'},
        {txt: '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', pic: 'images/13.jpg'},
        {txt: '每一个人都需要这样一个朋友：当以为自己再也笑不出来的时候，他能让你开怀大笑！', pic: 'images/14.jpg'},
        {txt: '咖啡苦与甜，不在于怎么搅拌，而在于是否放糖；一段伤痛，不在于怎么忘记，而在于是否有勇气重新开始。', pic: 'images/15.jpg'},
        {txt: '其实我不是一定要等你，只是等上了，就等不了别人了。——《朝露若颜》', pic: 'images/16.jpg'},
        {txt: '一切都是瞬间，一切都会过去，一切过去了的都会变成亲切的怀念。——普希金', pic: 'images/17.jpg'},
        {txt: '多少人曾爱慕你年轻时的容颜，可知谁愿承受岁月无情的变迁', pic: 'images/18.jpg'},
        {txt: '不在任何东西面前失去自我，哪怕是教条，哪怕是别人的目光，哪怕是爱情。——《成为简·奥斯汀》', pic: 'images/19.jpg'},
        {txt: '你如果认识从前的我，也许你会原谅现在的我。——张爱玲', pic: 'images/20.jpg'},
        {txt: '简约不是少，而是没有多余。足够也不是多，而是刚好你在。', pic: 'images/21.jpg'},
        {txt: '若只是喜欢 何必夸张成爱。——林夕', pic: 'images/22.jpg'},
        {txt: '梦里出现的人，醒来时就该去见她，生活就是这么简单。——《新桥恋人》', pic: 'images/23.jpg'},
        {txt: '与众不同的你是幸运的，何必让自己变得与别人一样。', pic: 'images/24.jpg'},
        {txt: '阳光温热，岁月静好，你还不来，我怎敢老。', pic: 'images/25.jpg'},
        {txt: '一个人知道自己为什么而活，就能忍受任何生活。——尼采', pic: 'images/26.jpg'},
        {txt: '我们已经出发了太久，以至于我们忘了为什么要出发。——纪伯伦', pic: 'images/27.jpg'},
        {txt: '水来，我在水中等你；火来，我在灰烬中等你。——《你是我的独家记忆》', pic: 'images/28.jpg'},
        {txt: '天下就没有偶然，那不过是化了妆的，戴了面具的必然。——钱钟书', pic: 'images/29.jpg'}
    ],str,txt,pic,htmlStr;

    // 1.2 遍历数据
    for (var i = 0; i < json.length; i++){
        // 1.2.0 获取父标签的文本
        str = $("dom_content").innerHTML;


        // 1.2.1 取出图片的地址和文字
        txt = json[i].txt;
        pic = json[i].pic;

        // 1.2.2 创建子标签
        htmlStr = "<div class='box'>" +
                        "<div class='pic'>" +
                            "<img src= "+ pic +" alt=''>" +
                            "<div class='cover'></div>" +
                        "</div>" +
                        "<p>"+ txt +"</p>" +
                        "<div class='btn'>" +
                            "<a href='#' class='collect'>采集</a>" +
                            "<a href='# ' class='like'>" +
                                "<span class='heart'></span>" +
                            "</a>" +
                        "</div>" +
                    "</div>";

        // 1.2.3 拼接
        str += htmlStr;
        $("dom_content").innerHTML = str;

        var warpPic = $("dom_content").getElementsByClassName("pic");
        var warpBox = $("dom_content").getElementsByClassName("box");
        for (var j = 0; j < warpBox.length; j++){
            warpBox[j].onmouseover = function () {
                this.childNodes[2].style.display = "block";
            };

            warpBox[j].onmouseout = function () {
                this.childNodes[2].style.display = "none";
            };


            warpPic[j].onmouseover = function () {
                this.childNodes[1].style.display = "block";
            };

            warpPic[j].onmouseout = function () {
                this.childNodes[1].style.display = "none";
            };
        }
    }
}

setTimeout(function () {
    waterFull("dom_content","box");
},200);

function waterFull(parent, child) {
    // 1.父盒子居中
    // 1.1 获取所有盒子
    var box = $(parent).getElementsByClassName(child);
    // 1.2 获取子盒子的宽度
    var boxWidth = box[0].offsetWidth;
    // 1.3 获取屏幕的宽度
    var screenW = document.documentElement.clientWidth;
    // 1.4 求出列数
    var cols = parseInt(screenW / boxWidth) - 1;


    var xyMargin = 14;


    // 2.子盒子的定位
    // 2.1 定义高度数组
    var heightArr = [], boxHeight, minBoxHeight = 0, minBoxIndex = 0;
    // 2.2 遍历子盒子
    for (var i = 0; i < box.length;i ++){
        boxHeight = box[i].offsetHeight + xyMargin;
        if (i < cols){
            heightArr.push(boxHeight);
            box[i].style = "";

            box[i].style.position = "absolute";
            box[i].style.top = xyMargin + "px";
            box[i].style.left = i * (boxWidth + xyMargin) + "px";
        }else {
            minBoxHeight = Math.min.apply(this,heightArr);

            minBoxIndex = minboxIndex(heightArr,minBoxHeight);

            box[i].style.position = "absolute";
            box[i].style.top = minBoxHeight + xyMargin + "px";
            box[i].style.left = minBoxIndex * (boxWidth + xyMargin) + "px";

            heightArr[minBoxIndex] += boxHeight;
        }
    }
    // 5. 更新父盒子的高度
    var parentHeight = box[box.length - 1].offsetTop + box[box.length - 1].offsetHeight;
    $(parent).style.height = parentHeight + "px";
}

function minboxIndex(Arr,val) {
    for (var i = 0; i < Arr.length; i++){
        if (Arr[i] === val){
            return i;
        }
    }
}

var content_nav = $("content_nav");
var returnTop = document.getElementsByClassName("return-top")[0];
var add = document.getElementsByClassName("add")[0];

returnTop.onmouseover = function () {
    returnTop.style.backgroundColor = "black";
};
add.onmouseover = function () {
    add.style.backgroundColor = "black";
};
returnTop.onmouseout = function () {
    returnTop.style.backgroundColor = "rgba(0,0,0, 0.7)";
};
add.onmouseout = function () {
    add.style.backgroundColor = "rgba(0,0,0, 0.7)";
};

window.onscroll = function () {
    if (checkWillLoadImg()) {
        autoCreateImg();
        waterFull("dom_content","box");
    }

    var navScr = scroll().top;
    if (navScr >= 200){
        content_nav.style.display = "block";
        content_nav.style.position = "fixed";
        content_nav.style.top = 50 + "px";

        returnTop.style.display = "block";
    }else {
        content_nav.style.display = "none";

        returnTop.style.display = "none";
    }
};
function checkWillLoadImg() {
    // 1.获取最后一个盒子
    var allBox = document.getElementsByClassName("box");
    var lastBox = allBox[allBox.length - 1];

    // 2.求出最后一个盒子自身高度的一半 加上 offsetTop
    var lastBoxDis = lastBox.offsetHeight / 2 + lastBox.offsetTop;

    // 3.求出屏幕的高度
    var screenH = document.body.clientHeight || document.documentElement.clientHeight;

    // 4.求出页面偏离浏览器的高度
    var scrollH = scroll().top;

    return lastBoxDis <= screenH + scrollH;
}





