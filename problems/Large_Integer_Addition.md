# 大整数加法

```js
/**
 * 腾讯笔试: 大整数加法
 *
 * 实现大整数相加算法，两个数用字符串模拟函数原型：
 * function add(a, b) {}
 * @param {string} a
 * @param {string} b
 * @return {string} - a b 之和
 */
function add(a, b) {}

// 测试用例
// * 用例1:
console.log(add('999', '1') === '1000')
// * 用例2:
console.log(add('1', '999') === '1000')
// * 用例3:
console.log(add('123', '123') === '246')
// * 用例4:
console.log(
    add(
        '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
        '1'
    ) ===
        '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
)
```
