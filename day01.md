1、 Json 是一种轻量级数据交换、存储格式；也是一种JS对象表示法；类似xml；
    具有自我描述性，有层级关系易于理解，是纯文本，可通过JS解析，ajax传输；
    特点是更小，更快，更容易解析
    主要用于服务器端与客户端做数据传输
    
    Json数组 '[{"key":"value"},{"key":"value"},...]'
    Json对象 '{"key":"value"}'

2、 ajax 是异步的 javascript 和 xml ；一种前后台做数据交换的技术，可以不刷新整个页面，局部刷新部分页面，提高了用户体验
    
    ajax的四步骤
    
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xhr.onreadystatechange = function(){
        xhr.readyState == 4
        xhr.status == 200
    }
    
    xhr.open('get/post',url,true/false);
    
    xhr.send(null/object);
    
3、 http code

    400：坏的请求
    401：未授权/未登录
    403：服务器拒绝访问
    404：请求资源不存在
    405：请求方法不对
    413：请求实体太大
    414：请求url太长
    415：请求数据媒体类型不支持
    
    500：服务器内部有问题
    502：网管错误
    504：网关超时
    505：http协议不支持
    
4、cookie用于客户端存储数据的，每次请求都会将cookie发送给服务端，列如
   
   Set-Cookie: "name=value;domain=.domain.com;path=/;expires=Sat, 11 Jun 2016 11:29:42 GMT;HttpOnly;secure"
   
   cookie 有域和路径的概念，只会向指定域和路径发送cookie
    

