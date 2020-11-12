//登录正则验证
{
    let myForm = document.forms["login"];  //从页面中获取id为 login 的表单
    let uname = myForm.elements["uname"];
    let pwd = myForm.elements["pwd"];
    let denglu = myForm.elements["denglu"];
    let checkInput = myForm.elements["checkInput"];

    // console.log( checkInput.checked );

    let re_uname = /^\w{4,12}$/i;    //用户名由4-12位字母、数字、下划线组成
    let re_pwd = /^\S{6,20}$/i;      //密码由长度为6-20的字符组成
    let goLogin = function( event ){
        if( re_uname.test( uname.value ) === false ){
            alert("用户名输入错误！！！");
            uname.focus();
            event.preventDefault();    //阻止跳转
            return false;
        }
        if( re_pwd.test( pwd.value ) === false ){
            alert("密码输入错误！！！");
            pwd.focus();
            event.preventDefault();
            return false;
        }
        // if( checkInput.checked === false ){
        //     alert("本次信息没有进行保存,是否继续？");
        // }
    };
    denglu.addEventListener("click",goLogin);
}