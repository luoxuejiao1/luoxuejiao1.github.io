{
    let navUl = document.getElementById("navUl");
    let img = document.getElementById("img");
    let indexNav = document.getElementById("indexNav");
    let navD3Ul = document.getElementById("navD3Ul");
    let govNav = document.getElementById("govNav");

    let lis = navUl.children;
    let navLis = indexNav.children;
    let D3Lis = navD3Ul.children;
    let govLis = govNav.children;
    console.log(lis.length);

    function Tab(num)
    {
        for(let i=1;i<=lis.length;i++)
        {
            let cont = document.getElementById("d"+i);
            if(i===num){
                cont.style.display="block";
                if( i === 1){
                    lis[0].classList.add("nav_title_on");
                    lis[0].classList.remove("nav_title_off");
                }else if( i>1&&i<=lis.length ){
                    lis[i-1].classList.add("nav_on");
                    lis[i-1].classList.remove("nav_off");
                }
            }else{
                cont.style.display="none";
                if( i === 1){
                    lis[0].classList.remove("nav_title_on");
                    lis[0].classList.add("nav_title_off");
                }else if( i>1&&i<=lis.length ){
                    lis[i-1].classList.remove("nav_on");
                    lis[i-1].classList.add("nav_off");
                }
            }
        }
    }

    function chicoe(num){
        for( let i = 1;i<=navLis.length;i++ ){
            let cont = document.getElementById("indexNav"+i);
            if( i===num ){
                cont.style.display = "block";
                navLis[i-1].classList.add("show_bottom");
            }else {
                cont.style.display = "none";
                navLis[i-1].classList.remove("show_bottom");
            }
        }
    }

    function navDt(num){
        for( let i = 1 ;i <= D3Lis.length; i++ ){
            let cont = document.getElementById("navRight"+i);
            if(i===num){
                cont.style.display = "block";
                if(i===1){
                    D3Lis[0].classList.add("d3_nav_li1_on");
                    D3Lis[0].classList.remove("d3_nav_li1_off");
                }else if(i===2){
                    D3Lis[1].classList.add("d3_nav_li2_on");
                    D3Lis[1].classList.remove("d3_nav_li2_off");
                }else if(i===3){
                    D3Lis[2].classList.add("d3_nav_li3_on");
                    D3Lis[2].classList.remove("d3_nav_li3_off");
                }else if(i===4){
                    D3Lis[3].classList.add("d3_nav_li4_on");
                    D3Lis[3].classList.remove("d3_nav_li4_off");
                }else if(i===5){
                    D3Lis[4].classList.add("d3_nav_li5_on");
                    D3Lis[4].classList.remove("d3_nav_li5_off");
                }
            }else {
                cont.style.display = "none";
                if(i===1){
                    D3Lis[0].classList.remove("d3_nav_li1_on");
                    D3Lis[0].classList.add("d3_nav_li1_off");
                }else if(i===2){
                    D3Lis[1].classList.remove("d3_nav_li2_on");
                    D3Lis[1].classList.add("d3_nav_li2_off");
                }else if(i===3){
                    D3Lis[2].classList.remove("d3_nav_li3_on");
                    D3Lis[2].classList.add("d3_nav_li3_off");
                }else if(i===4){
                    D3Lis[3].classList.remove("d3_nav_li4_on");
                    D3Lis[3].classList.add("d3_nav_li4_off");
                }else if(i===5){
                    D3Lis[4].classList.remove("d3_nav_li5_on");
                    D3Lis[4 ].classList.add("d3_nav_li5_off");
                }
            }
        }
    }

    function gov_nav(num){
        for( let i = 1;i<=govLis.length;i++ ){
            let cont = document.getElementById("govNav"+i);
            if( i===num ){
                cont.style.display = "block";
                govLis[i-1].classList.add("gov_on");
                govLis[i-1].classList.remove("gov_off");
            }else {
                cont.style.display = "none";
                govLis[i-1].classList.remove("gov_on");
                govLis[i-1].classList.add("gov_off");
            }
        }
    }

}
{
    // let ctrls = document.getElementById("ctrls");
    let ctrls = document.querySelector("#ctrls");
    let dots = ctrls.children ;   // 所有的点
    let picUl = document.querySelector("#picUl");  // 图片ul
    let lis = picUl.children ;  // 所有的图片内容

    /* 找所有的兄弟节点的函数 */
    let findSiblings = function( tag ){
        let  child = tag.parentNode.children ; // 找到所有的 子标签，包括 tag
        let  siblings = [] ; // 空数组，存放兄弟们
        for( let i=0 ; i <= child.length - 1 ; i++){
            if(  child[i] === tag ){
                continue;
            }
            siblings.push( child[i] ); // 把兄弟放入数组中。给数组添加元素
        }
        return siblings ; // 返回兄弟节点
    };

    for( let i=0  ; i <= dots.length-1 ; i++ ) {
        dots[i].addEventListener("click", function (event) {
            let nowDot = event.currentTarget;
            /* 当前点击的那个标签 span */
            let nowSibings = findSiblings(nowDot);  // 当前点的兄弟，数组
            nowDot.classList.add("on");
            // 去掉所有兄弟的 class on
            for (let j = 0; j <= nowSibings.length - 1; j++) {
                nowSibings[j].classList.remove("on");
            }
            // 当前图片增加 show 类，其他（兄弟节点）去掉 show 类
            lis[i].classList.add("show");
            let picSibings = findSiblings(lis[i]);
            for (let k = 0; k <= picSibings.length - 1; k++) {
                picSibings[k].classList.remove("show");
            }
        });
    }
}
{
    $("#goTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 0);
    });
    $(window).scroll(function () {
        let gun = $(document).scrollTop();
        if (gun <= 400) {
            $("#goTop").hide();
        } else {
            $("#goTop").show();
        }
    });

}
{
    let k = 0;
    $(document).ready(function(){
        rr();
    });
    function rr(){
        $("#linkUl>li").hover(
            function(){
                k = $(this).attr("value");
                $("#linkUl>li").css({
                    background:"#fff",
                    color:"#333"
                });
                $("#xx>div").hide();

                $(this).css({
                    background:"#f7f7f7",
                    color:"#0b67d4"
                });
                $("#x"+k).show();
                $("#footer").css("top","200px");
                event.preventDefault();
            },
            function(){}
        );

        $("#interLink").hover(
            function(){},
            function(){
                $("#linkUl>li").css({
                    background:"#fff",
                    color:"#333"
                });
                $("#xx>div").hide();
                $("#footer").css("top","0");
            }
        )
    }
}
