let const

  es6中新添加了let关键字用于声明变量，const关键字用于声明常量，es5中关键字var声明变量
  let和const声明的变量和常量，不存在变量提升，所以在声明之前使用会抛出错误，而var存在变量提升，所以会是undefined
  let/const因为不会变量提升，所以会存在暂时性死区
  let/const声明的变量不能重复声明，否则报错
  es6中除了let const外，还有import class用于声明变量
  
字符串
  
  增加了for of循环字符串
  includes api

module
  es6模块的思想是，静态化，编译时就能确定依赖关系，输入变量和输出变量；
  CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
  
modulees6模块的思想是，静态化，编译时就能确定依赖关系，输入变量和输出变量，而CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

Promise是异步操作的一种解决方式，提供了promise对象，其实也是一个容器，存着一个异步操作，可以获取异步操作的结果消息。
Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败），它的状态不受外界影响，且一旦状态改变，就不会再变
Promise缺点。
  首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
  其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
  第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

Promise对象是一个构造函数，用来生成Promise实例。
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject
