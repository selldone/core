const ProductSection = {
  cross: {
    code: "cross",
    title: "global.commons.cross_sell",
    icon: "fas fa-random",
  },
  offer: { code: "offer", title: "global.commons.offer", icon: "fas fa-tag" },

  spec: {
    code: "spec",
    title: "global.commons.spec",
    icon: "fas fa-sliders-h",
  },
  includes: {
    code: "includes",
    title: "global.commons.included_in_the_product",
    icon: "fas fa-box-open",
  },

  pros: {
    code: "pros",
    title: "global.commons.pros_and_cons",
    icon: "fas fa-balance-scale",
  },
  review: {
    code: "review",
    title: "global.commons.description",
    icon: "fas fa-feather-alt",
  },

  contents: {
    code: "contents",
    title: "global.commons.contents",
    icon: "fas fa-folder",
  },
  files: {
    code: "files",
    title: "global.commons.files_list",
    icon: "fas fa-file",
  },

  shipping: {
    code: "shipping",
    title: "global.commons.shipping",
    icon: "fas fa-shipping-fast",
  },
  warranty: {
    code: "warranty",
    title: "global.commons.warranty",
    icon: "fas fa-certificate",
  },
  return_policy: {
    code: "return-policy",
    title: "global.commons.return_policy",
    icon: "fas fa-people-carry",
  },
  guide: {
    code: "guide",
    title: "global.commons.guide",
    icon: "fas fa-life-ring",
  },

  page: { code: "page", title: "global.commons.page", icon: "fas fa-file" },

  comments: {
    code: "comments",
    title: "global.commons.reviews",
    icon: "fas fa-comments",
  },

  related_products: {
    code: "related-products",
    title: "global.commons.related_products",
    icon: "fas fa-link",
  },
  related_categories: {
    code: "related-categories",
    title: "global.commons.related_categories",
    icon: "fas fa-tags",
  },
  badges: {
    code: "badges",
    title: "global.commons.badges",
    icon: "fas fa-award",
  },
};
export default ProductSection;
export function ProductSectionFind(code) {
  return Object.values(ProductSection).find((x) => x.code === code);
}
