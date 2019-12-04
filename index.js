
function formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => v[j]));
}

class Excel {
  constructor(params) {
    this.header = params.header;
    this.filterVal = params.filterVal;
    this.list = params.list
    this.fileName = params.fileName;
  }
  export_excel() {
    require.ensure([], async () => {
      const {
        export_json_to_excel
      } = require("./excel/Export2Excel.js");
      export_json_to_excel(
        this.header,
        formatJson(this.filterVal, this.list),
        this.fileName
      );
    });
  }
}


module.exports = Excel