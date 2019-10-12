// g是global在正则中 表示替换全局都用  在下列中会表示替换全部的  如果没有就是只替换一个

// 大写换成小写 小写换成大写
let str = 'zhuzhuxia是真的SHUAI'
str = str.replace(/[a-zA-Z]/g,res=>{
    console.log(res);
})
