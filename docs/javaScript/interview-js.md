---
outline: deep
---

# 前端面试题

::: details 1.Event Loop(事件循环)

### 1. JavaScript 的 Engine 和 Runtime

简单来说，为了让 JavaScript 运行起来，要完成两部分工作（当然实际比这复杂得多）：

第一部分是 Engine（JS 引擎）：编译并执行 JavaScript 代码，完成内存分配、垃圾回收等；
第二部分是 Runtime（运行时）：为 JavaScript 提供一些对象或机制，使它能够与外界交互。

举个例子：

Chrome 浏览器 和 Node.js 都使用了 V8 Engine。V8 实现并提供了 ECMAScript 标准中的所有数据类型、操作符、对象和方法（注意并没有 DOM）。 但它们的 Runtime 并不一样：Chrome 提供了 window、DOM，而 Node.js 则是 require、process 等等。

### 2.浏览器的线程

JS 引擎是单线程的，但是浏览器是多线程的。现代浏览器的一个 tab ，其中的线程包括但不局限于：

- GUI 渲染线程
- JS 引擎线程
- 事件触发线程
- 定时器触发线程
- 异步 http 请求线程

JavaScript 中的异步回调是通过 WebAPIs 去支持的，常见的有 XMLHttpRequest，setTimeout，事件回调（onclik, onscroll 等）。而这几个 API 浏览器都提供了单独的线程去运行，所以才会有合适的地方去处理定时器的计时、各种请求的回调。即当代码中出现这几个定义的异步任务，是由浏览器实现了它们与 JS 引擎的通信，与 JS 引擎不在同一个线程。

另外，GUI 渲染和 JavaScript 执行是互斥的。虽然两者属于不同的线程，但是由于 JavaScript 执行结果可能会对页面产生影响，所以浏览器对此做了处理，大部分情况下 JavaScript 线程执行，执行渲染（render）的线程就会暂停，等 JavaScript 的同步代码执行完再去渲染。

### 3.任务队列

#### 1.MacroTask Queue（宏任务队列）

在 HTML 标准中，定义了几种常见的 Task Source：

- DOM manipulation（DOM 操作）；
- User interaction（用户交互）；
- Networking（网络请求）；
- History traversal（History API 操作）。
  MacroTask Source 的定义非常的宽泛，常见的鼠标、键盘事件，AJAX，数据库操作（例如 IndexedDB），以及定时器相关的 setTimeout、setInterval 等等都属于 Task Source，所有来自这些 MacroTask Source 的 MacroTask 都会被放到对应的 MacroTask Queue 中等待处理。

#### 2.MicroTask Queue（微任务队列）

MicroTask Queue 与 MacroTask Queue 类似，也是一个有序列表。不同之处在于，一个 Event Loop 只有一个 MicroTask Queue。

在 HTML 标准中，并没有明确规定 MicroTask Source，通常认为有以下几种：

- Promise

  > 在 Promises/A+ Note 3.1 中提到了 then、onFulfilled、onRejected 的实现方法，但 Promise 本身属于平台代码，由具体实现来决定是否使用 Microtask，因此在不同浏览器上可能会出现执行顺序不一致的问题。不过好在目前的共识是用 Microtask 来实现事件队列。

- MutationObserver
- Object.observe (已废弃)

### 4.Event loop 的定义

Event Loop（事件循环） 是让 JavaScript 做到既是单线程，又绝对不会阻塞的核心机制，也是 JavaScript 并发模型（Concurrency Model）的基础，是用来协调各种事件、用户交互、脚本执行、UI 渲染、网络请求等的一种机制。Event Loop 的作用很简单： 监控调用栈和任务队列（见 壹.2.8.3），如果调用栈是空的，它就会取出队列中的第一个"callback 函数"，然后将它压入到调用栈中，然后执行它。

总的来说，Event Loop 是实现异步回调的一种机制而已。

1. 主线程不断循环；
2. 对于同步任务，创建执行上下文（Execution Context），按顺序进入调用栈；
3. 对于异步任务：

   - 与步骤 2 相同，同步执行这段代码；
   - 将相应的 MacroTask（或 Microtask）添加到任务队列；
   - 由其他线程来执行具体的异步操作。

:::

::: details 2.原型链的 6 中继承方式
This is a details block.
:::

::: details 3.var let const 的区别
This is a details block.
:::

::: details 4.防抖和节流
This is a details block.
:::

::: details 5.JS 的数据类型有哪些
This is a details block.
:::

::: details 6.说说你对闭包的理解
This is a details block.
:::

::: details 7.说说你对作用域链的理解
This is a details block.
:::

::: details 9.说说你对 this 的理解
This is a details block.
:::

::: details 10.call,apply,bind 的区别与作用
This is a details block.
:::

::: details 11.说说 new 操作符具体做了什么
This is a details block.
:::

::: details 12.重排（回流）重绘
This is a details block.
:::

::: details .FetchAPI(可取消执行的 Promise)
This is a details block.
:::

::: details .前端强缓存和协商缓存的区别
This is a details block.
:::

::: details .webRTC 的特点
This is a details block.
:::

::: details .HTTP 对队头阻塞的解决，QUIC 是基于 TCP 吗
This is a details block.
:::

