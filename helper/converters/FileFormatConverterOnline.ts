import { UploadHelper } from "@/Components/utils/upload/UploadHelper";

export class FileFormatConverterOnline {
  static VendorConvertToCsv(vue, vendor_id, file, success) {
    const url = window.VAPI.POST_MY_VENDOR_CONVERTER_EXCEL_CSV(vendor_id);

    UploadHelper.UploadFile(
      vue,
      null,
      url,
      file.name,
      file,
      "file",
      null,
      true,
      (data) => {
        //console.log("success", data);

        if (success) {
          success(data);
        }
      },
      "amber"
    );
  }

  static ConvertToCsv(vue, shop_id, file, success) {
    const url = window.API.POST_CONVERTER_EXCEL_CSV(shop_id);

    UploadHelper.UploadFile(
      vue,
      null,
      url,
      file.name,
      file,
      "file",
      null,
      true,
      (data) => {
        //console.log("success", data);

        if (success) {
          success(data);
        }
      },
      "amber"
    );
  }

  static ConvertWordToHtml(vue, url, file, success) {
    UploadHelper.UploadFile(
      vue,
      null,
      url,
      file.name,
      file,
      "file",
      null,
      true,
      (data) => {
        //console.log("success", data);

        if (success) {
          success(data);
        }
      },
      "amber"
    );
  }
}
