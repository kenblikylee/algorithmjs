# 限制并发渲染

设计一个算法，解决在浏览器环境下单次渲染大量数据造成页面“卡死”的问题。这是一个的典型的浏览器端 Javascript 性能问题，本质是浏览器 Js 线程与 GPU 渲染线程是互斥的，长时间执行 Javascript ，会阻塞页面渲染（与用户的交互），给用户的直观感受就是页面卡顿，所有交互操作被得不到即时响应，情况较差时（长时间阻塞），就是整个页面处于“卡死”状态。

算法与实际业务相关的渲染数据解耦，以便可以在不同业务页面复用，并提供算法使用示例。可参考的使用方式如下：

``` js
/**
 * 算法实现
 * 
 * @param {array} renderData - 所有待渲染数据
 * @param {function} renderFunction - 渲染函数
 * @return {promise} - 渲染完成处理
 */
function Solution(renderData, renderFunction) {
    /* your algorithm implementation */
}

// 模拟异步获取渲染数据
function fetchAllRenderData (n) {
    let data = []
    let i = 0
    while (i++ < n) data.push(parseInt(Math.random() * 100))
    return Promise.resolve(data)
}

fetchAllRenderData(100).then(allData => {
    console.time('render')
    Solution(allData, data => {
        console.log('rendering: ', data)
    }).then(_ => {
        console.log('render completed.')
        console.timeEnd('render')
    })
})
```