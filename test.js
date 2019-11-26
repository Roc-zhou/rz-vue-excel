const Excel = require('./index')
function exportData() {
  console.log(123);
  Excel({
    header: [
      "ID",
      "姓名",
      "年龄",
      "性别",
    ],
    filterVal: [
      "id",
      "name",
      "age",
      "sex"
    ],
    list: [
      {
        id: 1,
        name: '小明',
        age: 19,
        sex: '男'
      },
      {
        id: 2,
        name: '小王',
        age: 20,
        sex: '男'
      }
    ],
    fileName: '学生信息'
  }).export_excel()
}
