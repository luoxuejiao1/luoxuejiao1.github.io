
//导航
{
    let  navUl = document.getElementById("navUl");
    let  li = navUl.children ;
    for( let i=0 ; i <= li.length-1 ; i++){
        li[i].addEventListener("mouseenter",function(event){
            console.log( i );
            let  nowLi = event.currentTarget;
            let ul = nowLi.children[1] ;
            if( !ul ){        // 判断标签是否存在，不存在
                return false;  // 终止函数运行
            }
            // 显示标签, 增加类 on
            ul.classList.add("nav_block");
        });

        li[i].addEventListener("mouseleave",function(event){
            let  nowLi = event.currentTarget;
            let ul = nowLi.children[1] ;
            if( !ul ){        // 判断标签是否存在，不存在
                return false;  // 终止函数运行
            }
            // 隐藏，去掉类 on
            ul.classList.remove("nav_block");
        });
    }
}




//图片切换
{
    let pics = [
        "images/banner01.png",
        "images/banner02.png",
        "images/banner03.png"
    ]; // 图片数据，数组管理。最大索引为 4 ，pics.length-1
    let index = 0 ;
// 1. 找标签
    let myPic = document.getElementById("myPic");
    let imgl = document.getElementById("imgl");
    let imgc = document.getElementById("imgc");
    let imgr = document.getElementById("imgr");
// 2. 事件处理函数
    let  changePic = function( event ){
        index++ ;
        if( index > pics.length-1 ){
            index = 0 ;
        }
        myPic.src = pics[index] ;
        console.log(index);
    };
    let leftClick = function( event ){
        myPic.src = pics[0];
        imgl.style.backgroundColor = "#e43749";
        imgc.style.backgroundColor = "#606368";
        imgr.style.backgroundColor = "#606368";
    };
    let centerClick = function( event ){
        myPic.src = pics[1];
        imgl.style.backgroundColor = "#606368";
        imgc.style.backgroundColor = "#e43749";
        imgr.style.backgroundColor = "#606368";
    };
    let rightClick = function( event ){
        myPic.src = pics[2];
        imgl.style.backgroundColor = "#606368";
        imgc.style.backgroundColor = "#606368";
        imgr.style.backgroundColor = "#e43749";
    };
// 3. 添加事件监听
    myPic.addEventListener("click", changePic );
    imgl.addEventListener("click", leftClick);
    imgc.addEventListener("click", centerClick);
    imgr.addEventListener("click", rightClick);
}