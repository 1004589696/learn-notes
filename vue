 vue:
  优点：vue是一个轻量级的渐进式框架，简单易用，高效灵活，采用了react的虚拟dom，angular的双向数据绑定，易与和其他框架配合使用，有丰富api和ui组件库；
      vue采用的是mvvm模式，核心是采用简单的模版语法声明式的将数据渲染进dom系统中
      
vue渐进式框架的理解：
  在我看来，渐进式代表的含义是：主张最少。
  每个框架都不可避免会有自己的一些特点，从而会对使用者有一定的要求，这些要求就是主张，主张有强有弱，它的强势程度会影响在业务开发中的使用方式。
  比如说，Angular，它两个版本都是强主张的，如果你用它，必须接受以下东西：
  - 必须使用它的模块机制- 必须使用它的依赖注入- 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）

  所以Angular是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成，这些主张会带来一些困扰。

  比如React，它也有一定程度的主张，它的主张主要是函数式编程的理念，比如说，你需要知道什么是副作用，什么是纯函数，如何隔离副作用。它的侵入性看似没有Angular那么强，主要因为它是软性侵入。

  Vue可能有些方面是不如React，不如Angular，但它是渐进的，没有强主张，你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；也可以整个用它全家桶开发，当Angular用；还可以用它的视图，搭配你自己设计的整个下层用。你可以在底层数据逻辑的地方用OO和设计模式的那套理念，也可以函数式，都可以，它只是个轻量视图而已，只做了自己该做的事，没有做不该做的事，仅此而已。
  渐进式的含义，我的理解是：没有多做职责之外的事。
  
vue.js的两个核心：数据驱动/组件系统

vue的生命周期：
  beforeCreate:数据还没有被初始化
  created：数据已经被初始化，但是el还没有，此钩子函数执行的时候，dom还没有渲染，任何dom操作都无用，所以要放在$nextTick的回调中去，$nextTick目的就是把传进来的函数延迟到dom更新后再使用
  beforeMounte：该钩子函数执行时DOM还没有挂载和渲染，但是可以通过ref找到dom元素
  mounted：该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 
  beforeUpdate
  updated
  beforeDestroy
  destroyed

vue导航守卫：
  全局守卫 router.beforeEach((to, from, next) => {
            //to: Route: 即将要进入的目标 路由对象
            //from: Route: 当前导航正要离开的路由
            //next(): 进行管道中的下一个钩子
            //next(false): 中断当前的导航， URL 地址会重置到 from 路由对应的地址。
            //next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。
          })
          router.afterEach((to, from, next) => {
            
          })
   单个路由的守卫
      beforeEnter: (to, from, next) => {
        // ...
      }
   组件内的守卫
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }

vue路由：
  动态路由：this.$route.prarms
  router.push()
  router.replace()
  router.go(1)

vue父子组件传值 通过props 子组件通过$emit触发父组件的传过来的方法
      vuex localstroage
