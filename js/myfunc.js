function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

// 获取网页滚动出去的部分
function scroll() {
    if (window.pageYOffset !== null) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }
    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}

/**
 * 获取屏幕的宽度和高度
 * @returns {{width: number, height: number}}
 */
function client() {
    if (window.innerWidth){
        return{
            width : innerWidth,
            height : innerHeight
        }
    }else if (document.compatMode === "CSS1Compat") {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

/**
 * 匀速动画函数
 * @param {object}obj
 * @param {number}target
 * @param {number}speed
 */
function constant(obj, target, speed) {
    clearInterval(obj.timer);

    // 判断方向
    var dir = obj.offsetLeft < target ? speed : -speed ;

    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + dir + "px";

        if (Math.abs(target - obj.offsetLeft) < Math.abs(dir)){
            clearInterval(obj.timer);

            obj.style.left = target + "px";
        }
    },20)
}

/**
 * 获取css的样式值
 * @param {object}obj
 * @param {string}attr
 * @returns {*}
 */
function getCssAttrValue(obj, attr) {
    if (obj.currentStyle){ // IE opera
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

/**
 * 缓动动画
 * @param obj
 * @param json
 * @param fn
 */
function buffer(obj, json, fn) {
    clearInterval(obj.timer);


    var begin = 0, target = 0, speed = 0;
    obj.timer = setInterval(function () {

        // 旗帜
        var flag = true;

        for (var key in json) {
            // 获取初始值
            if ("opacity" === key) { // 透明度
                begin = parseInt(parseFloat(getCssAttrValue(obj, key)) * 100);
                target = parseInt(parseFloat(json[key])*100);
            }else if ("scrollTop" === key) {
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[key]);
            } else { // 其他情况
                begin = parseInt(getCssAttrValue(obj, key)) || 0;
                target = parseInt(json[key]);
            }

            speed = (target - begin) * 0.2;

            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

            if ("opacity" === key) { // 透明度
                // w3c浏览器
                obj.style[key] = (speed + begin) / 100;
                // ie
                obj.style.filter = 'alpha(opacity:' + (speed + begin) + ')';
            }else if ("scrollTop" === key) {
                obj.scrollTop = speed + begin;
            }else if ("zIndex" === key){
                obj.style[key] = json[key];
            }
            else {
                obj.style[key] = speed + begin + "px";
            }

            if (begin !== target) {
                flag = false;
            }
        }

        // 清除定时器
        if (flag) {
            clearInterval(obj.timer);

            // 判断有没有回调函数
            if (fn) {
                fn();
            }
        }
    }, 20);

}