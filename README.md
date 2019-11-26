# rz-vue-excel
基于vue实现导出excel表格功能
> 使用到文件 Blob.js Export2Excel.js


### use
```js
npm install --save rz-vue-excel

const Excel = require('rz-vue-excel');

Excel({
  header:[
    "ID",
    "姓名",
    "年龄",
    "性别",
  ],
  filterVal:[
    "id",
    "name",
    "age",
    "sex"
  ],
  list:[
    {
      id:1,
      name:'小明',
      age:19,
      sex:'男'
    },
    {
      id:2,
      name:'小王',
      age:20,
      sex:'男'
    }
  ],
  fileName:'学生信息'
})
```