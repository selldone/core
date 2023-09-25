export class HierarchyHelper {
  /**
   * Admin shop page.
   *
   * @param root_name
   * @param parent_folders
   * @param hash
   * @param last_disabled
   * @param dialog_mode
   * @param home_image
   * @returns {[]}
   * @constructor
   */
  static GenerateCategoryHierarchy(
    root_name,
    parent_folders,
    hash,
    last_disabled = true,
    dialog_mode = false, // Not push to other page!
    home_image = null, // Raw address
    IS_VENDOR_PANEL=false,   /*🟢 Vendor Panel 🟢*/
  ) {
    let out = [];

    out.push({
      text: root_name,
      disabled: false,
      to: {
        name: dialog_mode ? undefined : (IS_VENDOR_PANEL?'VendorPageProducts':"ProductsManagement"),
        hash: hash,
        query: { dir: "", "no-scroll": dialog_mode },
      },
      // to: { name: 'ShopPage' },
      href: "#",
      icon: !home_image ? "shopping_bag" : null,
      image: home_image,
    });

    if (parent_folders) {
      if (parent_folders.parent) {
        if (parent_folders.parent.parent) {
          if (parent_folders.parent.parent.parent) {
            out.push({
              text: parent_folders.parent.parent.parent.title,
              image: parent_folders.parent.parent.parent.icon,
              disabled: false,
              to: {
                name: dialog_mode ? undefined : (IS_VENDOR_PANEL?'VendorPageProducts':"ProductsManagement"),
                hash: hash,
                query: {
                  dir: parent_folders.parent.parent.parent.id,
                  "no-scroll": dialog_mode,
                },
              },
              // to: { name: 'ShopCategoryPage', params: { category_name: parent_folders.parent.parent.parent.name } }
            });
          }

          out.push({
            text: parent_folders.parent.parent.title,
            image: parent_folders.parent.parent.icon,
            disabled: false,
            to: {
              name: dialog_mode ? undefined : (IS_VENDOR_PANEL?'VendorPageProducts':"ProductsManagement"),
              hash: hash,
              query: {
                dir: parent_folders.parent.parent.id,
                "no-scroll": dialog_mode,
              },
            },
            // to: { name: 'ShopCategoryPage', params: { category_name:  parent_folders.parent.parent.name } }
          });
        }

        out.push({
          text: parent_folders.parent.title,
          image: parent_folders.parent.icon,
          disabled: false,
          to: {
            name: dialog_mode ? undefined : (IS_VENDOR_PANEL?'VendorPageProducts':"ProductsManagement"),
            hash: hash,
            query: { dir: parent_folders.parent.id, "no-scroll": dialog_mode },
          },
          //to: { name: 'ShopCategoryPage', params: { category_name: parent_folders.parent.name } }
        });
      }

      out.push({
        text: parent_folders.title,
        image: parent_folders.icon,
        disabled: last_disabled,
        to: {
          name: dialog_mode ? undefined : (IS_VENDOR_PANEL?'VendorPageProducts':"ProductsManagement"),
          hash: hash,
          query: { dir: parent_folders.id, "no-scroll": dialog_mode },
        },
        // to: { name: 'ShopCategoryPage', params: { category_name: parent_folders.name } }
      });
    }
    return out;
  }

  /**
   * Customer shop page.
   *
   * @param root_name
   * @param parent_folders
   * @param shop_name
   * @param product
   * @returns {[]}
   * @constructor
   */
  static GenerateCategoryHierarchyGeneral(
    root_name,
    parent_folders,
    shop_name,
    product = null,
    root_icon='home'
  ) {
    let out = [];

    out.push({
      id: -1,

      text: root_name,
      icon: root_icon,
      disabled: false,
      // to: {name: "ShopPage", params: { shop_name: shop_name }, hash: "#"},
      to: { name: "ShopPage", params: { shop_name: shop_name } },
      href: "#",
    });

    if (parent_folders) {
      if (parent_folders.parent) {
        if (parent_folders.parent.parent) {
          if (parent_folders.parent.parent.parent) {
            const category = parent_folders.parent.parent.parent;
            out.push({
              id: category.id,
              text: category.title,
              image: category.icon,
              disabled: false,
              // to: {name: "ShopPage", params: { shop_name: shop_name }, query: {dir: category.id,}}
              to: {
                name: "ShopCategoryPage",
                params: { shop_name: shop_name, category_name: category.name },
              },
            });
          } // End Parent > Parent > Parent
          const category = parent_folders.parent.parent;

          out.push({
            id: category.id,
            text: category.title,
            image: category.icon,
            disabled: false,
            // to: {name: "ShopPage", params: { shop_name: shop_name }, query: {dir: category.id,}}
            to: {
              name: "ShopCategoryPage",
              params: { shop_name: shop_name, category_name: category.name },
            },
          });
        } // End Parent > Parent
        const category = parent_folders.parent;

        out.push({
          id: category.id,
          text: category.title,
          image: category.icon,
          disabled: false,
          // to: {name: "ShopPage", params: { shop_name: shop_name }, query: {dir: category.id,}}
          to: {
            name: "ShopCategoryPage",
            params: { shop_name: shop_name, category_name: category.name },
          },
        });
      } // End Parent
      const category = parent_folders;

      if(category.title)  // Solve initial wrong show
      out.push({
        id: category.id,
        text: category.title,
        image: category.icon,
        disabled: false,
        //to: {name: "ShopPage", params: { shop_name: shop_name }, query: {dir: category.id,}}
        to: {
          name: "ShopCategoryPage",
          params: { shop_name: shop_name, category_name: category.name },
        },
      });
    }

    if (product)
      out.push({ id: -2, text: product.title,  image: product.icon,disabled: true, href: "" });

    return out;
  }

  static GeneratePageHierarchy(root_name, page_name) {
    let out = [];

    out.push({
      id: -1,

      text: root_name,
      icon: "home",
      disabled: false,
      to: {
        name: "ShopPage",
      },
      href: "#",
    });

    out.push({
      id: -2,
      text: page_name,
      disabled: true,
      href: "#",
    });

    return out;
  }
}
