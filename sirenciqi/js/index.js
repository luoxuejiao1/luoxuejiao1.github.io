{
    $(function(){
        subnav( "#navUl>li" , "#contMain>div" );
        subnav( "#shangpinUl>li" , "#singlePro>div" );
        subnav( "#shoppingUl>li" , "#shoppingPro>div" );
        show( "#shangpinUl>li" , "#singlePro" ,"#allPro" );
        show( "#shoppingUl>li" , "#shoppingPro" ,"#shoppingAll" );
    });
    function subnav( navTit , contMain ){
        let $Ul = $(navTit);
        $Ul.on("click",function(){
            //当前li添加show类，其兄弟标签移除show类
            $(this).addClass("changeUl");
            $(this).siblings().removeClass("changeUl");
            //当前标签索引相对应的内容板块添加active，其兄弟标签移除active类
            $(contMain).eq($(this).index()).addClass("active").siblings().removeClass("active");
            // $("#cont>li").eq($(this).index()).siblings().removeClass("active");
        });
    }
    function show( onclickTit , contMain , allPro ){
        $(onclickTit).on("click", function(){
            $(contMain).css("display","block");
            $(allPro).css("display","none");
        });
    }
}
{
    $(window).scroll(function(){
        let topH = $(document).scrollTop();
        if( topH <= 82 ){
            $("#top").removeClass("topStop");
        }else {
            $("#top").addClass("topStop");
        }
    });
}
