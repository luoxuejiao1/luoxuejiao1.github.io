//轮播
{
    let banner = document.getElementById("banner");
    let bannerUl = document.getElementById("bannerUl");
    let ulLis = bannerUl.children;
    let btnPrev = document.getElementById("btnPrev");
    let btnNext = document.getElementById("btnNext");
    let ctrls = document.getElementById("ctrls");

    let index = 0;
    let lisBro = function( tag ){
        let tagParent = tag.parentNode;
        let lisBro = [];
        let tags = tagParent.children;
        for( let ietm of tags ){
            if( ietm === tag ){
                continue;
            }
            lisBro.push(ietm);
        }
        return lisBro;
    };

    let removeLisBroClass = function( tag , classN ){
        let siblings = lisBro(tag);
        for( let i = 0 ; i <= siblings.length-1 ; i++ ){
            siblings[i].classList.remove( classN );
        }
    };

    for( let i = 0; i <= ulLis.length-1 ; i++ ){
        let span = document.createElement("span");
        ctrls.appendChild(span);
    }
    let dots = ctrls.children;

    let showPic = function( index ){
        ulLis[index].classList.add("show");
        removeLisBroClass(ulLis[index],"show");

        dots[index].classList.add("spanOn");
        removeLisBroClass(dots[index],"spanOn");
    };
    showPic( index );
    let goRight = function( event ){
        index++;
        if( index > ulLis.length - 1 ){
            index = 0;
        }
        showPic( index );
    };
    let goLeft = function( event ){
        index--;
        if( index < 0 ){
            index = ulLis.length - 1;
        }
        showPic( index );
    };
    for( let i =0 ; i <= dots.length-1 ; i++ ){
        dots[i].addEventListener("mouseenter",function(){
            index = i;
            showPic( index );
        });
    }
    let myset = setInterval( goRight , 5000 );
    banner.addEventListener("mouseenter",function(){
        clearInterval(myset);
        console.info(1);
    });
    banner.addEventListener("mouseleave",function(){
        myset = setInterval( goRight , 5000 );
    });

    btnNext.addEventListener("click",goRight);
    btnPrev.addEventListener("click",goLeft);
}
//二级导航
{
    let subNav = function( { id = 'navUl' }={} ){
        this.id = id;
    };
    subNav.prototype.showSubnav = function(){
        let ul = document.getElementById( this.id );    //用参数代替获取的id
        let lis = ul.children;
        for( let i of lis ){   //用for-of进行数据的遍历
            i.addEventListener("mouseenter",function(){
                let subUl = i.children[1];
                if( !subUl ){
                    return false;
                }
                subUl.style.display = "block";
                let subLis = subUl.children;
                for( let x of subLis ){
                    x.addEventListener("mouseenter",function(){
                        x.classList.add("showSub");
                    });
                    x.addEventListener("mouseleave",function(){
                        x.classList.remove("showSub");
                    });
                }
                i.classList.add("showLi");
            });
            i.addEventListener("mouseleave",function(){
                let subUl = i.children[1];
                if( !subUl ){
                    return false;
                }
                subUl.style.display = "none";
                let subLis = subUl.children;
                for( let x of subLis ){
                    x.addEventListener("mouseenter",function(){
                        x.classList.add("showSub");
                    });
                    x.addEventListener("mouseleave",function(){
                        x.classList.remove("showSub");
                    });
                }
                i.classList.remove("showLi");
            });
        }
    };
    let mysubNAv = new subNav({     //navUl 页面内的导航id
        id : "navUl"
    });
    mysubNAv.showSubnav();
}
//选项卡
{
    let chiooce = function() {
        let jianzhuUlLi1 = $("#jianzhuUl>li:nth-child(1)");
        let jianzhuUlLi2 = $("#jianzhuUl>li:nth-child(2)");
        let zongshu = $("#zongshu");
        let changsuo = $("#changsuo");
        jianzhuUlLi1.on("mouseover",function(){
            jianzhuUlLi1.css("background-color","#d04242");
            jianzhuUlLi2.css("background-color","#800000");
            zongshu.css("display","block");
            changsuo.css("display","none");
        });
        jianzhuUlLi2.on("mouseover",function(){
            jianzhuUlLi2.css("background-color","#d04242");
            jianzhuUlLi1.css("background-color","#800000");
            changsuo.css("display","block");
            zongshu.css("display","none");
        });
    };
    $(function(){
        chiooce();
    });
}
//锚点返回顶部
{
    $("#goTop").on("click",function(){
        $("html,body").animate({ scrollTop: 0 }, 200);
    });
    $(window).scroll(function () {
        let gun = $(document).scrollTop();
        if (gun <= 400) {
            $("#goTop").hide();
        } else {
            $("#goTop").show();
        }
    });
    $(window).scroll(function () {
        let navStop = $(document).scrollTop();
        if (navStop <= 130) {
            $("#nav").removeClass("navPos");

        } else {
            $("#nav").addClass("navPos");
        }
    });
}
//星星评价及客服
{
    let starPJ = function(){
        let star = $("#starImg");
        let starImg = star.children();
        console.log( starImg );
        starImg.on("click",function(){
            let index = $(this).index();
            let $this = $(this);
            $this.attr({
                src : "images/starOn.png"
            });
            // console.log( $(this).nextAll() );
            $this.nextAll().attr({
                src : "images/star.png"
            });
            $this.prevAll().attr({
                src : "images/starOn.png"
            });
            // console.log( index );
            $("#fenshu").html( index + 1 );
        });
        $("#closeImg").on("click",function(){
            $("#pingjia").hide();
        });
        $("#okBtn").on("click",function(){
            $("#pingjia").hide();
        });
        $("#pingjiaBtn").on("click",function(){
            $("#pingjia").show();
        });
        $("#jianjie").on("click",function(){
            $("#jianjieCont").show();
        });

        $("#closeBtn").on("click",function(){
            $("#jianjieCont").hide();
        });

        $(window).scroll(function () {
            let pingjiaKefu = $(document).scrollTop();
            if (pingjiaKefu <= 1080) {
                $("#pingjiaBtn").css({
                    "display":"none"
                });
                $("#xuanchuan").css({
                    "display":"none"
                });
                $("#jianjie").css({
                    "display":"none"
                });
            } else {
                $("#pingjiaBtn").css({
                    "display":"block"
                });
                $("#xuanchuan").css({
                    "display":"block"
                });
                $("#jianjie").css({
                    "display":"block"
                });
            }
        });
    };

    $(function(){
        starPJ();
    });
}



