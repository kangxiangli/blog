/**
 * Created by Administrator on 2016/6/22.
 */
    //¶þÎ¬Âë½¥´ó½¥Ð¡
var oA=document.getElementById("bg-a");
var oImg=document.getElementById("img-t");
oA.onmouseenter=function(){
    oImg.style.width=200+"px";
    oImg.style.height=200+"px";
}
oA.onmouseleave=function(){
    zhufengAnimate(oImg,{"width":0,"height":0},600)
}
