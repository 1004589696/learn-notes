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

8、数组API

    var a = [1,2], b = [3,4]

    concat();用于两个数组的连接，不会改变元素组，只返回新数组； a.concat(b); //[1,2,3,4]
    join();将数组中的每一项用指定的字符连接起来，不会改变原数组 a.join("-"); //"1-2"

    sort();将数组进行排序，改变原数组，可接受一个比较器函数，如果没有传函数作为参数，则按Ascii编码进行排序，
    reverse();翻转数组，改变原数组

    slice();从数组中选择一段，作为新数组返回，不会改变原数组；接受两个参数（start, end）如果为负值则倒数，不包括 end 位的值；
    splice();会改变原数组，添加、替换、删除； .splice(index, num, addoption);

    pop();后面弹出
    push();后面添加
    shift();前面弹出
    unshift();前面添加 都会改变原数组

    arr.some(function(item,index,arr){
        //条件 return 值
        //依次执行数组中的每个元素，如果有一个元素满足条件就返回 true 否则返回 false
        //遇到满足条件的则不会继续执行下面的循环
        //返回值 true false
        //不会改变原数组
    })

    arr.every(function(item,index,arr){
        //条件 return 值
        //依次执行数组中的每个元素，如果每一个元素满足条件就返回 true 否则返回 false
        //返回值  true false
        //不会改变原数组
    })

    arr.filter(function(item,index,arr){
        //依次执行数组中的每个元素，如果元素满足条件就返回 true 否则返回 false
        //返回值是一个新的数组，如果没有满足条件的返回空数组
        //不会改变原数组
    })

    arr.map(function(item,index,arr){
        //按照原始数组元素顺序依次处理元素,返回相同长度的数组，如果此项没有return,则返回undefined,作为此项的值
        //依次执行数组中的每个元素，对数组中的每个元素进行处理；
        //不会改变原数组
    })

    arr.forEach(function(item,index,arr){

    })
    
    es6数组扩展
    
        arr.fill();//数组填充，填充，可接受三个参数，第一个必选，为要填充的值，如果为引用类型，则为浅拷贝；改变原数组，且返回新数组
        
        arr.find();//接受一个函数参数，里面为判断条件，满足条件返回 true 且中断循环，如果数组中没有满足条件的返回 undefiend，有则返回当前第一个满足条件的值；
        
        arr.findIndex();//接受一个函数参数，里面为判断条件，满足条件返回 true 且中断循环，如果数组中没有满足条件的返回 undefiend，有则返回当前第一个满足条件的下标；
        
        copyWithin();//将指定位置的成员，复制到指定位置，改变原数组。第一个参数是即将被替代的开始位置必选，第二个参数是复制开始的位置，第三个是复制结束的位置；
        
        Array.of();//将参数转为数组
        
        Array.from();//将类数组转为数组
        
        ...arr;//将数组转为用逗号分隔的参数序列
        
        arr.includes(*);//是否包含某个值
        
        keys() vaules() entries()//返回的都是遍历器对象
        
9、对象的创建方式

    1.字面量方式创建 var obj = {attr:1};
    2.通过 new 关键字创建 var obj = new Object({attr:1});
    2.通过构造函数创建;
    3.通过 Object.create() 创建;
    4.通过 Object.setPrototypeOf() 创建;

10、事件流
    
    分为三种模式
        ie的冒泡型事件流：低版本的ie也支持，建议兼容性方面建议使用；目标元素先触发，父元素再一次触发
        Netscape捕获事件流：父元素先触发，再一次向子元素触发到目标元素
        dom事件流：以上两种模式都存在；分三个阶段 事件捕获阶段，处于目标阶段，事件冒泡阶段；
    
        addEventListener Dom事件绑定，有三个参数，第一个表示事件，第二个表示触发逻辑事件，第三个表示采用冒泡(false) 还是捕获(true)类型,省略默认为冒泡类型
        
    阻止冒泡：e.stopPropagation();
             e.cancelBubble = true;
             
    不支持事件冒泡:mouseEnter mouseLeave blur focus resize scroll
    
    
11、阻止默认行为
    
    e.preventDefault();
    e.returnVaule = false;
    
12、事件委托（事件代理）
  
    利用冒泡原理实现的；将目标元素的逻辑事件，委托给父级元素代为触发；
    好处：不用给每个子元素都绑定事件，减少内存、新添加的元素也不用重复绑定事件
    
13、什么是函数节流，怎么实现，应用于什么场景，优点；

    函数节流就是做监听的时候会连续触发事件，但本意并不是是为了要连续触发，例如：监听窗口变化，鼠标位置，页面滚动，键盘按下抬起等的监听时，回调函数会连续触发，但事实上并不需要连续触发；
    实现方式是加一个定时器，在一定的时间内，如果再次触发，则清除这个定时器，重新定义新的定时器，在定时其中做操作，可以做事件停止一段时间后才执行；
    应用场景是监听窗口变化，鼠标位置，页面滚动，键盘按下抬起等的监听时；
    函数连续触发，如果会有dom操作，会占用大量内存和cpu,导致性能体验下降，节流可以提高性能和体验；
    
14、函数调用this指向

    谁调用指向谁，没有调用者就指向window
    改变指向用call apply bind 三者的区别是call和apply，bind的第一个参数是this，后面的参数就是要传入的参数，不同的是call参数是打散的参数，apply的是数组，而bind是返回一个新的函数，且不会立即执行，原函数中的this并没有改变；
    
function getObj(attr,arr1,arr2){
	var num = attr.length;
	for(var i=0;i<arr1.length;i++){
		for(var j=0;j<arr2.length;j++){
            var isnum = 0;
            for(var z=0;z<num;z++){
                if(arr1[i][attr[z]]&&(arr1[i][attr[z]] == arr2[j][attr[z]])){
                    isnum++;
                }else{
					break;
				}
            }
            if(isnum == num){
				console.log(i,j);
            }
		}
	}	
};
