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
    
    typeof NaN 输出"number"
    
    typeof true 输出"boolean" 
    
    typeof undefined 输出"undefined"
    
    typeof null 输出"object"
    
    typeof []; 输出"object"
    
    typeof {}; 输出"object"
    
    typeof function(){}; 输出"function"
 
 3、Js判读数组类型的方法
 
    1. instanceof 判断变量是不是谁的实例 例：判断 变量 a 是不是 Array 的实例    a instanceof Array  如果是返回 true 否则 false
    
    2. constructor 判断变量的构造函数 例：判断 变量 a 的构造函数是不是 Array   a.constructor === Array  如果是返回 true 否则 返回 false
    
    3. Object.prototype.toString.call(o) === '[object Array]';
    
        引申出1.

            Object.prototype.toString.call(['1']) === "[object Array]"

            Object.prototype.toString.call(null) === "[object Null]"

            Object.prototype.toString.call(1) === "[object Number]"

            Object.prototype.toString.call(NaN) === "[object Number]"

            Object.prototype.toString.call('1') === "[object String]"

            Object.prototype.toString.call(undefined) === "[object Undefined]"

            Object.prototype.toString.call(true) === "[object Boolean]"
    
        引申出2.

            [].constructor === Array

            {}.constructor === Object

            "string".constructor === String

            (123).constructor === Number

            NaN.constructor === Number

            true.constructor === Boolean

            function a(){}
            a.constructor === Function
            
        引申出3.
         
            判断变量的某个属性是否可枚举，例：变量 a 的 length 属性是否可枚举，a.propertyIsEnumerable('length') 可枚举返回 true 否则 false

4、Js本地对象:
    
    与宿主无关，ECMAScript 提供的对象（ECMA-262 定义的引用类），使用时需要用关键字 new 进行实例对象;
    Object
    Array
    Date
    Error
    String 
    Boolean
    Number
    RegExp
    Function
    Math
    等等

5、Js内置对象：

    与宿主无关，ECMAScript 提供的对象，在js程序执行前就已经存在，无需实例化，是本地对象的子集；
    Math
    Global
    Json
    
6、Js宿主对象：

    宿主环境提供的对象，自定义类对象都是宿主对象，所有非本地对象都是宿主对象，浏览器提供的对象 
    Widow
    Doument
    Bom
    Dom
    Location
    History
    Navigator
    Screen
   
7、全局函数（顶层函数）：
    
    encodeURI();把字符串编码为URI，不会编码特殊字符
    decodeURI();
    encodeURIComponent();把字符串编码为URI，会编码特殊字符
    decodeURIComponent();
    escape();
    unescape();
    String();
    Number();
    ParseInt();
    parseFloat();
    isFinite();
    isNaN();
    eval();
    
   
