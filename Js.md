1、Js六大数据类型：string number boolean undefined null object

    string： 由单引号或双引号来说明，如"string"

    number：什么整数啊浮点数啊都叫数字，你懂的~

    Boolean: 就是true和false啦

    undefined：未定义，就是你创建一个变量后却没给它赋值~

    null: 故名思久，null就是没有，什么也不表示

    object: 这个我也很难解释的说。就是除了上面五种之外的类型

2、typeof 能够判断大多数变量的数据类型，但 null array 例外，null、对象、数组返回的都是object类型。

    typeof '1' 输出"string"
    
    typeof 1 输出"number"
    
    typeof true 输出"boolean" 
    
    typeof undefined 输出"undefined"
    
    typeof null 输出"object"
    
    typeof []; 输出"object"
    
    typeof {}; 输出"object"
    
    typeof function(){}; 输出"function"
 
 3、Js判读数组类型的方法
 
    1. instanceof 判断变量是不是谁的实例 例：判断 变量 a 是不是 Array 的实例    a instanceof Array  如果是返回 true 否则 
