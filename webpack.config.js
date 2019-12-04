const path = require('path')

module.exports = {
  mode: 'production',  // production Or development 环境
  entry: {
    entry: "./main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 必须是绝对路径
    filename: "index.js"
  },
}