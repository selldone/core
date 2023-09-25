export const LEVELS={
  DASHBOARD:{name:'admin_shop.menu.dashboard',icon:'dashboard'},
  PRODUCTS:{name:'admin_shop.menu.products',icon:'apps'},
  BLOG:{name:'admin_shop.menu.blog',icon:'fas fa-blog'},
  ORDERS:{name:'admin_shop.menu.process_center' ,icon:'fas fa-cart-arrow-down'},
  CHANNELS:{name:'admin_shop.menu.channels',icon:'mediation'},
  ACCOUNTING:{name:'admin_shop.menu.auditing',icon:'fas fa-cash-register'},
  INCENTIVES:{name:'admin_shop.menu.incentives',icon:'local_play'},
  MARKETING:{name:'admin_shop.menu.marketing',icon:'fas fa-bullhorn'},
  LOGISTIC:{name:'admin_shop.menu.logistic',icon:'fas fa-boxes-packing'},
  CUSTOMERS:{name:'admin_shop.menu.customers',icon:'supervised_user_circle'},
  CATEGORIES:{name:'admin_shop.menu.categories',icon:'category'},
  PAGES:{name:'admin_shop.menu.pages',icon:'fas fa-drafting-compass'},
  ACCESS:{name:'admin_shop.menu.access',icon:'fas fa-id-badge'},
  APPLICATIONS:{name:'admin_shop.menu.application',icon:'fas fa-mobile'},
  AUTOMATION:{name:'admin_shop.menu.automation',icon:'offline_bolt'},
  SETTINGS:{name:'admin_shop.menu.edit',icon:'settings'},

}

export const ShopPermissions = {
  ADMIN: {
    text: "shop_permissions.ADMIN.text",
    code: "ADMIN",
    description: "shop_permissions.ADMIN.description",
    src:require('./assets/permissions/admin.svg'),
    levels:Object.values(LEVELS)
  },
  PRODUCT: {
    text: "shop_permissions.PRODUCT.text",
    code: "PRODUCT",
    description: "shop_permissions.PRODUCT.description",
    src:require('./assets/permissions/product.svg'),
    levels:[LEVELS.PRODUCTS,LEVELS.CATEGORIES,LEVELS.BLOG,LEVELS.LOGISTIC]
  },
  AUDITING: {
    text: "shop_permissions.AUDITING.text",
    code: "AUDITING",
    description: "shop_permissions.AUDITING.description",
    src:require('./assets/permissions/auditing.svg'),
    levels:[LEVELS.ORDERS,LEVELS.ACCOUNTING,LEVELS.INCENTIVES]

  },
  CONTENT: {
    text: "shop_permissions.CONTENT.text",
    code: "CONTENT",
    description: "shop_permissions.CONTENT.description",
    src:require('./assets/permissions/content.svg'),
    levels:[LEVELS.BLOG,LEVELS.PAGES]

  },
  OFFICER: {
    text: "shop_permissions.OFFICER.text",
    code: "OFFICER",
    description: "shop_permissions.OFFICER.description",
    src:require('./assets/permissions/officer.svg'),
    levels:[LEVELS.DASHBOARD,LEVELS.PRODUCTS,LEVELS.BLOG,LEVELS.ORDERS,LEVELS.ACCOUNTING,LEVELS.INCENTIVES,LEVELS.MARKETING,LEVELS.LOGISTIC,LEVELS.CUSTOMERS,LEVELS.CATEGORIES,LEVELS.PAGES,LEVELS.AUTOMATION]

  },
  EMPLOYEE: {
    text: "shop_permissions.EMPLOYEE.text",
    code: "EMPLOYEE",
    description: "shop_permissions.EMPLOYEE.description",
    src:require('./assets/permissions/employee.svg'),
    levels:[LEVELS.PRODUCTS,LEVELS.BLOG,LEVELS.ORDERS,LEVELS.LOGISTIC]

  },
  MARKETING: {
    text: "shop_permissions.MARKETING.text",
    code: "MARKETING",
    description: "shop_permissions.MARKETING.description",
    src:require('./assets/permissions/marketing.svg'),
    levels:[LEVELS.MARKETING]

  },
  VIEWER: {
    text: "shop_permissions.VIEWER.text",
    code: "VIEWER",
    description: "shop_permissions.VIEWER.description",
    src:require('./assets/permissions/viewer.svg'),
    levels:[]

  }
};

