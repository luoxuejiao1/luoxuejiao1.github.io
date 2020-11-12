
//二级导航
{
    let navUl = document.getElementById("navUl");
    let navLis = navUl.children;
    // console.log( navLis[2] );
    for( let i = 0; i <= navLis.length-1 ; i++ ){
        navLis[i].addEventListener("mouseenter",function(event){
            navLis[i].classList.add( "nav_on" );
            let nowTag = event.currentTarget;
            let subnav = nowTag.children[1];
            if( !subnav ){
                return false;
            }
            subnav.style.display = "block";
        });
        navLis[i].addEventListener("mouseleave",function(event){
            navLis[i].classList.remove( "nav_on" );
            let nowTag = event.currentTarget;
            let subnav = nowTag.children[1];
            if( !subnav ){
                return false;
            }
            subnav.style.display = "none";
        });
    }
}
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
    let myset = setInterval( goRight , 3000 );
    banner.addEventListener("mouseenter",function(){
        clearInterval(myset);
        console.info(1);
    });
    banner.addEventListener("mouseleave",function(){
        myset = setInterval( goRight , 3000 );
    });

    btnNext.addEventListener("click",goRight);
    btnPrev.addEventListener("click",goLeft);
}
//放大二维码
{
    let erBig = document.getElementById("erBig");
    let footerErwei = document.getElementById("footerErwei");

    footerErwei.addEventListener("mouseenter",function(){
        erBig.style.display = "block";
    });
    footerErwei.addEventListener("mouseleave",function(){
        erBig.style.display = "none";
    });
}
//返回顶部
{
    $("#goTop").on("click",function(){
        $("html,body").animate({ scrollTop: 0 }, 500);
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

