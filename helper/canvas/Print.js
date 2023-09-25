export class Print {
  static PrintCanvas(id, qr_size = 400, title = null) {
    const target = document.getElementById(id);

    let dataUrl = null;
    let htmlClone = null;
    try {
      // This method get the image of QR code from canvas!
      dataUrl = target.toDataURL();
    } catch (e) {
      htmlClone = target.cloneNode(true).innerHTML;
    }

    let windowContent = "<!DOCTYPE html>";
    windowContent += "<html>";
    windowContent += "<head><title>" + title + "</title></head>";
    windowContent += `<body style='text-align: center; font-weight: 500;  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";'>`;

    if (dataUrl)
      windowContent +=
        '<img src="' +
        dataUrl +
        '" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">';

    if (htmlClone) windowContent += htmlClone;

    windowContent += "</body>";
    windowContent += "</html>";

    const printWin = window.open(
      "",
      "",
      "width=" + qr_size * 1.3 + ",height=" + qr_size * 1.3
    );

    function call() {
      console.log("Start printing...");
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    }

    printWin.document.open();

    if (dataUrl)
      printWin.document.addEventListener(
        "load",
        function () {
          call();
        },
        true
      );
    printWin.document.write(windowContent);

    if (!dataUrl) call(); // Fix bug: In appending html 'load' listener not call!
  }
}
