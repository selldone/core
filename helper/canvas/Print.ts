/**
 * Print element.
 *
 */
export class Print {
  static PrintCanvas(
    id: string,
    qr_size: number = 400,
    title: string | null = null,
  ) {
    const target = document.getElementById(id);
    if (!target) return;

    let dataUrl: string | null = null;
    let htmlClone: string | null = null;

    if (target instanceof HTMLCanvasElement) {
      try {
        // This method gets the image of the QR code from canvas!
        dataUrl = target.toDataURL();
      } catch (e) {
        console.error(e, target);
      }
    } else if (target instanceof SVGSVGElement) {
      try {
        const serializedSvg = new XMLSerializer().serializeToString(target);
        dataUrl =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(serializedSvg);
      } catch (e) {
        console.error(e, target);
      }
    } else {
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
      "width=" + qr_size * 1.3 + ",height=" + qr_size * 1.3,
    );
    if (!printWin) return;

    function call() {
      console.log("Start printing...");
      printWin!.focus();
      printWin!.print();
      printWin!.document.close();
      printWin!.close();
    }

    printWin.document.open();

    if (dataUrl)
      printWin.document.addEventListener(
        "load",
        function () {
          call();
        },
        true,
      );
    printWin.document.write(windowContent);

    if (!dataUrl) call(); // Fix bug: In appending html 'load' listener not call!
  }
}
