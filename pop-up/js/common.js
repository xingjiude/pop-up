/**
 * Created by Administrator on 2017/2/15 0015.
 */
//tab切换
//var tabs = document.getElementsByClassName('nav-tabs')[0].getElementsByTagName('li'),
//    contents = document.getElementsByClassName('tab-content')[0].children('div');

//点击切换页面
$(function(){
    $(".nav-tabs>li").click(function(){
        var index = $(".nav-tabs>li").index(this);
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-content>div").eq(index).show().siblings().hide();
    });
})



//创建解析json的方法
function json2htm(json,tabId){
    $.getJSON(json,function(data){
        var jsontip = $(tabId);
        var strHtml = "";//存储数据的变量
        jsontip.empty();//清空数据
        $.each(data,function(infoIndex,info){//遍历data并生产表格
            strHtml += ("<div class='list'><div class='icons'><div class='icon'>"
            +"<img src='"+info["image"]+"'>"+"</div>"+
            "<div class='success'>"+"<img src='"+info["success1"]+"'>"
            +"<img src='"+info["success2"]+"'>"
            +"<img src='"+info["success3"]+"'>"
            +"<img src='"+info["success4"]+"'>"
            +"<img src='"+info["success5"]+"'>"
            +"</div></div>"
            +"<div class='name'><h1>"+info["name"]+"</h1><p>"
            +info["integral"]+"</p></div>"+"<div class='level'><p>"
            +info["level"]+"</p></div></div>");
        });
        jsontip.html(strHtml);//显示处理后的数据
    });
};
//传入不同的json和id
json2htm("test.json","#history");
json2htm("test.json","#today");
json2htm("test.json","#friends");

