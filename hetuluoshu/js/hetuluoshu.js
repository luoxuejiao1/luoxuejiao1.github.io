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
                i.classList.add("changeBg");
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
            });
            i.addEventListener("mouseleave",function(){
                i.classList.remove("changeBg");
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

            });
        }
    };
    let mysubNAv = new subNav({     //navUl 页面内的导航id
        id : "navUl"
    });
    mysubNAv.showSubnav();
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
    let myset = setInterval( goRight , 2000 );
    $(".bannerBtn").on("mouseenter",function(){
        clearInterval(myset);
    });
    $(".bannerBtn").on("mouseleave",function(){
        myset = setInterval( goRight , 2000 );
    });
    btnNext.addEventListener("click",goRight);
    btnPrev.addEventListener("click",goLeft);
}
//选项卡
{
    function Option(index){
        for(let i=1;i<=8;i++)
        {
            let cont = document.getElementById("option"+i);
            if(i===index)
                cont.style.display="block";
            else
                cont.style.display="none";
        }
    }
}
