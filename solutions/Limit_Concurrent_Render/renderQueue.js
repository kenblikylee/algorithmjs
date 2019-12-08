class renderQueue {
    constructor(max, renderCb) {
        this.max = max
        this.renderCb = renderCb
        this.queue = []
    }
    enQueue(item) {
        this.queue.push(item)
    }
    deQueue() {
        return this.queue.shift()
    }
    empty() {
        this.queue = []
    }
    init(data) {
        let len = data.length
        let N = this.max
        let start = 0
        let end = start + N
        while (start < len) {
            this.queue.push(data.slice(start, end))
            start = end
            end += N
        }
    }
    isEmpty() {
        return this.queue.length === 0
    }
    render(data) {
        this.init(data)
        let that = this
        return new Promise((resolve, reject) => {
            function render() {
                if (that.isEmpty()) {
                    resolve()
                    return
                }
                let data = that.deQueue()
                that.renderCb(data)
                requestAnimationFrame(render)
            }
            render()
        })
    }
}

/**
 * 算法实现
 *
 * @param {array} renderData - 所有待渲染数据
 * @param {function} renderFunction - 渲染函数
 * @return {promise} - 渲染完成处理
 */
function Solution(renderData, renderFunction) {
    return new renderQueue(500, renderFunction).render(renderData)
}

// 模拟异步获取渲染数据
function fetchAllRenderData(n) {
    let data = []
    let i = 0
    while (i++ < n) data.push(parseInt(Math.random() * 100))
    return Promise.resolve(data)
}

fetchAllRenderData(10000).then(allData => {
    console.time('render')
    Solution(allData, data => {
        console.log('rendering: ', data)
    }).then(_ => {
        console.log('render completed.')
        console.timeEnd('render')
    })
})
