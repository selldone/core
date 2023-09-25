import SetupService from "./SetupService";
import PlaceholderImages from "../helper/image/PlaceholderImages";

export default class CDN {
  selldone_service_url: string = "";

  shop_cdn_images: string = "";
  shop_cdn_jsons: string = "";
  shop_cdn_temp_files: string = "";
  shop_cdn_ar: string = "";
  shop_cdn_videos: string = "";
  cdn_image_by_id: string = "";
  storage_direct: boolean = false; // Get files directly from cloud storage!
  storage_direct_thumbnails: boolean = false; // Get thumbnail images directly! without check exist by selldone server!
  storage_direct_url: string | null = null;

  constructor() {
    this.selldone_service_url = SetupService.MainServiceUrl();

    this.shop_cdn_images = SetupService.GetSelldoneCDN_Images();
    this.shop_cdn_jsons = SetupService.GetSelldoneCDN_Jsons(); // jsons /lottie ...
    this.storage_direct = SetupService.GetStorageDirect();
    this.storage_direct_thumbnails = SetupService.GetStorageDirectThumbnails();
    this.storage_direct_url = SetupService.GetStorageDirectHost();

    try{
      this.shop_cdn_temp_files = SetupService.GetSelldoneCDNTemp_Files();
    }catch (e){
      console.warn(e)
    }

    this.shop_cdn_ar = SetupService.GetSelldoneCDN_AR();
    try{
    this.shop_cdn_videos = SetupService.GetSelldoneCDN_Videos();
  }catch (e){
    console.warn(e)
  }
    try{
    this.cdn_image_by_id = SetupService.GetSelldoneCDN_ID();
    }catch (e){
      console.warn(e)
    }
  }

  GET_SHOP_IMAGE_PATH(
    file_name: string | null,
    size: number | null = null,
    random_fill: boolean | number = false
  ) {
    //console.log('Debug > GET_SHOP_IMAGE_PATH ',this.shop_cdn_images,file_name,size)
    if (!file_name) {
      if (random_fill && Number.isInteger(random_fill))
        return PlaceholderImages.GetIDImage(random_fill as number);
      if (random_fill) return PlaceholderImages.GetRamonImage();
      return require("../helper/image/assets/image-placeholder.svg");
    }

    // Invalid size mode file formats:
    try {
      if (file_name.endsWith(".svg")) {
        // SVG not supported for direct size mode!
        size = null;
      }
    } catch (e) {
      console.error(e);
      return null;
    }

    //  console.log('GET_SHOP_IMAGE_PATH',file_name,size,file_name.endsWith('.svg'))

    //Check if is absolute path (In the page builder template!):
    if (
      file_name.startsWith("https://") ||
      file_name.startsWith("http://") ||
      file_name.startsWith("/") /*Relative Path*/
    ) {
      // Absolute cdn address: (Can assign size to path!)
      if (file_name.startsWith("https://cdn.selldone.") && size) {
        return `${file_name}${size}.png`;
      } else if (size) {
        // return `${file_name}?size=${size}`; // Important: Some websites like Reddit block added queries!
      }

      return file_name;
    }

    if (
      (!size || this.storage_direct_thumbnails) &&
      this.storage_direct_url &&
      this.storage_direct
    ) {
      // No query only can get directly form cloud storage!

      // Replace _ to slash (File format save in DB to real path)
      file_name = file_name.replace(/_/gi, "/");

      if (file_name.startsWith("repository:")) {
        // Handle repository files address
        file_name = file_name.replace("repository:", "");
        return `${this.storage_direct_url}/repository/${file_name}`;
      } else if (file_name.startsWith("instagram:")) {
        // Handle repository files address
        file_name = file_name.replace("instagram:", "");
        return `${this.storage_direct_url}/instagram/${file_name}`;
      } else {
        // Handle normal files address
        file_name = file_name + (size ? `${size}.png` : "");
        return `${this.storage_direct_url}/app/${file_name}`;
      }
    } else {
      return (
        `${this.shop_cdn_images}/${file_name}` +
        (size !== null ? `?size=${size}` : "")
      );
    }
  }

  GET_PUBLIC_FILE_PATH(file_name: string) {
    file_name = file_name.replace(/_/gi, "/");

    if (this.storage_direct_url && this.storage_direct) {
      return `${this.storage_direct_url}/app/${file_name}`;
    }

    return `${this.selldone_service_url}/cdn-storage-public/${file_name}`;
  }

  GET_SHOP_JSON_PATH(file_name: string) {
    //Check if is absolute path (In the page builder template!):
    if (
      file_name.startsWith("https://") ||
      file_name.startsWith("http://") ||
      file_name.startsWith("/") /*Relative Path*/
    )
      return file_name;

    if (this.storage_direct_url && this.storage_direct) {
      // Replace _ to slash (File format save in DB to real path)
      file_name = file_name.replace(/_/gi, "/");

      return `${this.storage_direct_url}/app/${file_name}`;
    } else {
      return `${this.shop_cdn_jsons}/${file_name}`;
    }
  }

  GET_SHOP_TEMP_FILE_PATH(file_name: string) {
    if (!file_name) return null;

    return `${this.shop_cdn_temp_files}/${file_name}`;
  }

  GET_USER_AVATAR(user_id: number, size:'small' | 'big' | null = "small") {
    if (!user_id) return null;

    return `${this.selldone_service_url}/users/${user_id}/profile/avatar/${size}`;
  }

  GET_SHOP_3D_MODEL_PATH(
    shop_name: string,
    product_id: number,
    variant_id: number | null,
    folder_name: string,
    file_name: string
  ) {
    return `${this.shop_cdn_ar}/@${shop_name}/products/${product_id}/variants/${variant_id}/ar/${folder_name}/${file_name}`;
  }

  /**
   * Get video url (Direct from cloud storage)
   * @param file_name
   */
  GET_VIDEO_URL(file_name: string): string | null {
    if (!file_name) return null;

    if (this.storage_direct_url && this.storage_direct) {
      return `${this.storage_direct_url}/app/${file_name}`;
    }

    return `${this.shop_cdn_videos}/${file_name}`;
  }

  //―――――――――――――――――――――― Images By ID ――――――――――――――――――――

  GET_SHOP_ICON(shop_id: number | string, size: number = 128) {
    return (
      `${this.cdn_image_by_id}/shops/${shop_id}/icon.png` +
      (size !== null ? `?size=${size}` : "")
    );
  }
  GET_CATEGORY_ICON(category_id: number | string, size?: number | null) {
    return (
      `${this.cdn_image_by_id}/shops/categories/${category_id}/icon.png` +
      (size !== null ? `?size=${size}` : "")
    );
  }

  GET_PRODUCT_IMAGE(product_id: number | string, size?: number | null) {
    return (
      `${this.cdn_image_by_id}/shops/products/${product_id}/icon.png` +
      (size !== null ? `?size=${size}` : "")
    );
  }

  GET_DELIVERY_SERVICE_ICON(
    delivery_service_id: number | string,
    size?: number | null
  ) {
    return (
      `${this.cdn_image_by_id}/shops/delivery-services/${delivery_service_id}/icon.png` +
      (size !== null ? `?size=${size}` : "")
    );
  }

  GET_CONNECT_ICON(connect_id: number | string) {
    return `${this.cdn_image_by_id}/shops/connects/${connect_id}/icon.png`;
  }
}
