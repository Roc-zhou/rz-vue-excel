const path = require('path')

module.exports = {
  mode: 'production',  // production Or development 环境
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 必须是绝对路径
    filename: "index.js" // 「入口分块(entry chunk)」的文件名模板（出口分块？）rz-vue-page.js
  },
}