/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import scannerIcon from './device/assets/barcode-scanner.svg';
import printerIcon from './device/assets/label-printer.svg';
import customerViewIcon from './device/assets/pos-customer-view.svg';
import cardReaderIcon from './device/assets/pos-card-reader.svg';
import chipReaderIcon from './device/assets/tag-reader.svg';

export const PosDeviceTypes = {
  Scanner: {
    code: "Scanner",
    title: "pos_devices.Scanner",
    desc: "pos_devices.Scanner_desc",
    src: scannerIcon,
    enable: true,
  },
  Printer: {
    code: "Printer",
    title: "pos_devices.Printer",
    desc: "pos_devices.Printer_desc",
    src: printerIcon,
    enable: false,
  },
  CustomerView: {
    code: "CustomerView",
    title: "pos_devices.CustomerView",
    desc: "pos_devices.CustomerView_desc",
    src: customerViewIcon,
    enable: true,
  },
  CardReader: {
    code: "CardReader",
    title: "pos_devices.CardReader",
    desc: "pos_devices.CardReader_desc",
    src: cardReaderIcon,
    enable: false,
  },
  ChipReader: {
    code: "ChipReader",
    title: "pos_devices.ChipReader",
    desc: "pos_devices.ChipReader_desc",
    src: chipReaderIcon,
    enable: false,
  },
};
