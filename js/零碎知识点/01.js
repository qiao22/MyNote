// g是global在正则中 表示替换全局都用  在下列中会表示替换全部的  如果没有就是只替换一个
//
// 大写换成小写 小写换成大写
// let str = 'zhuzhuxia是真的SHUAI'
// str = str.replace(/[a-zA-Z]/g, res => {
//     return res.toUpperCase() === res ? res.toLowerCase() : res.toUpperCase()
// })
// console.log(str)



// 实现indexOf   从一个字符串中查找一个字母 如果存在返回字符串位置 不存在返回-1
// function myIndexOf(t) {
//     let strLength = this.length
//     let tLength = t.length
//     res = -1
//    /*这里如果传入的字符串都比父级字符串大，肯定就是不存在了  返回-1
//      如果return后面只有一个结果可以省略{}同箭头函数
//    */
//     if (strLength < tLength) return res
//     for (let i = 0; i < strLength - tLength; i++) {
//         if (this.substr(i, tLength) === t) {
//             res = i
//             break
//         }
//     }
//     return res
// }
// // 这里参照jqurey里面自定义原型
// String.prototype.myIndexOf = myIndexOf
//
// let str = 'zhuzhuxiaqiao22'
// let t = 'xia'
// console.log(str.myIndexOf(t))


// 求结果
/*function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}*/

// Foo.prototype.a = function () {
//     console.log(3)
// }
// Foo.a = function () {
//     console.log(4)
// }
// Foo.a()   /*4     此时还没调用Foo函数*/
// let obj = new Foo()   /*调用了函数  将foo.a改为函数里面的  this是obj调用的 所有下面结果是2  最下面是1*/
// obj.a()    /*2*/
// Foo.a()    /*1*/
