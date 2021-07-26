# 仿写花瓣网-静态页面

本项目为本人在初学前端期间仿写的花瓣网，基于自己封装的类似于JQuery函数库，实现了瀑布流无限滚动的效果。

页面中的图片数据均为本地读取，瀑布流循环加载图片。

具体思想：在页面滚动到底部时，获取需要再加载的图片数据，根据一个高度数组来判断需要把图片放在哪一列。

瀑布流核心代码：

```
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
```

