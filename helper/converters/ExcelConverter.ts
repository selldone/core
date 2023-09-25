export default (function () {
  let Workbook,
    WorkbookStart = null;
  const WorkbookEnd = "</ss:Workbook>";
  let fs: string,
    SheetName = null,
    styleID = 1,
    fileName = "file-name",
    uri: string,
    link: HTMLAnchorElement ;
  const columnWidth = 120;

  class ExcelConverter {
    constructor(o, title, sheetName = "Selldone Data") {
      this.fileName = title;
      this.SheetName = sheetName;
      WorkbookStart =
        '<?xml version="1.0"?><ss:Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">';
      let respArray = JSON.parse(o);
      respArray = respArray.map((item) => {
        delete item.id;
        return flatten(item);
      });
      fs = JSON.stringify(respArray).replace(/&/gi, "&amp;");
    }

    downLoad() {
      const Worksheet = myXMLWorkSheet(SheetName, fs);

      WorkbookStart += myXMLStyles(styleID);

      Workbook = WorkbookStart + Worksheet + WorkbookEnd;

      uri = "data:text/xls;charset=utf-8," + encodeURIComponent(Workbook);
      link = document.createElement("a");
      link.href = uri;
      link.style.visibility = "hidden";
      link.download = fileName + ".xls";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clear data:
      WorkbookStart = null;
      Workbook = null;
    }

    get fileName() {
      return fileName;
    }

    set fileName(n) {
      fileName = n;
    }

    get SheetName() {
      return SheetName;
    }

    set SheetName(n) {
      SheetName = n;
    }

    get styleID() {
      return styleID;
    }

    set styleID(n) {
      styleID = n;
    }
  }

  const myXMLStyles = function (id) {
    const Styles =
      '<ss:Styles><ss:Style ss:ID="' +
      id +
      '"><ss:Font ss:Bold="1"/></ss:Style></ss:Styles>';

    return Styles;
  };

  const myXMLWorkSheet = function (name, o) {
    const Table = myXMLTable(o);
    const WorksheetStart = '<ss:Worksheet ss:Name="' + name + '">';
    const WorksheetEnd = "</ss:Worksheet>";

    return WorksheetStart + Table + WorksheetEnd;
  };

  const myXMLTable = function (o) {
    let TableStart = "<ss:Table>";
    const TableEnd = "</ss:Table>";

    const tableData = JSON.parse(o);

    if (tableData.length > 0) {
      const columnHeader = Object.keys(tableData[0]);
      let rowData;
      for (let i = 0; i < columnHeader.length; i++) {
        TableStart += myXMLColumn(columnWidth);
      }
      for (let j = 0; j < tableData.length; j++) {
        rowData += myXMLRow(tableData[j], columnHeader);
      }
      TableStart += myXMLHead(1, columnHeader);
      TableStart += rowData;
    }

    return TableStart + TableEnd;
  };

  const myXMLColumn = function (w) {
    return '<ss:Column ss:AutoFitWidth="0" ss:Width="' + w + '"/>';
  };

  const myXMLHead = function (id, h) {
    let HeadStart = '<ss:Row ss:StyleID="' + id + '">';
    const HeadEnd = "</ss:Row>";

    for (let i = 0; i < h.length; i++) {
      const Cell = myXMLCell(h[i].toUpperCase());
      HeadStart += Cell;
    }

    return HeadStart + HeadEnd;
  };

  const myXMLRow = function (r, h) {
    let RowStart = "<ss:Row>";
    const RowEnd = "</ss:Row>";
    for (let i = 0; i < h.length; i++) {
      const Cell = myXMLCell(r[h[i]]);
      RowStart += Cell;
    }

    return RowStart + RowEnd;
  };

  const myXMLCell = function (n) {
    let CellStart = "<ss:Cell>";
    const CellEnd = "</ss:Cell>";

    const Data = myXMLData(n);
    CellStart += Data;

    return CellStart + CellEnd;
  };

  const myXMLData = function (d) {
    const DataStart = '<ss:Data ss:Type="String">';
    const DataEnd = "</ss:Data>";

    return DataStart + d + DataEnd;
  };

  const flatten = function (obj) {
    const flattened = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          (typeof obj[key] === "object" && obj[key] !== null) ||
          Array.isArray(obj[key])
        ) {
          // Instead of flattening, stringify the object and save it.
          flattened[key] = JSON.stringify(obj[key]);
        } else {
          flattened[key] = obj[key];
        }
      }
    }
    return flattened;
  };

  const flatten_full = function (obj) {
    const obj1 = JSON.parse(JSON.stringify(obj));
    const obj2 = JSON.parse(JSON.stringify(obj));
    if (typeof obj === "object") {
      for (const k1 in obj2) {
        if (obj2.hasOwnProperty(k1)) {
          if (typeof obj2[k1] === "object" && obj2[k1] !== null) {
            delete obj1[k1];
            for (const k2 in obj2[k1]) {
              if (obj2[k1].hasOwnProperty(k2)) {
                obj1[k1 + "-" + k2] = obj2[k1][k2];
              }
            }
          }
        }
      }
      let hasObject = false;
      for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
          if (typeof obj1[key] === "object" && obj1[key] !== null) {
            hasObject = true;
          }
        }
      }
      if (hasObject) {
        return flatten(obj1);
      } else {
        return obj1;
      }
    } else {
      return obj1;
    }
  };

  return ExcelConverter;
})();
