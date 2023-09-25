export class ProductEmbedHelper {
    static ProductIframe(shop,product){
        const url=window.URLS.ProductIframeUrl(shop,product)
       return `<iframe src="${url}" style="width:100%; max-width:100%;height: 640px;max-height: 100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    }
}