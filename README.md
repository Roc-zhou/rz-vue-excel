# rz-vue-excel
基于vue实现导出excel表格功能
> 使用到文件 Blob.js Export2Excel.js


### use
```js
npm install --save rz-vue-excel

// 导出方法
exportExcel() {
  const Excel = require("rz-vue-excel");
  new Excel({
    header: ["ID", "姓名", "年龄", "性别"],  // 表格表头
    filterVal: ["id", "name", "age", "sex"], // 对应字段
    list: [ // data
      {
        id: 1,
        name: "小明",
        age: 19,
        sex: "男"
      },
      {
        id: 2,
        name: "小王",
        age: 20,
        sex: "男"
      }
    ],
    fileName: "学生信息" // 导出表格名称
  }).export_excel();
}

```