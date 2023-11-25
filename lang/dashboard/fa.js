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

export default {
  commons: {
    pay_today: "پرداختی امروز",
    pay_yesterday: "پرداختی دیروز",
    pay_last30days: "پرداختی 30 روز اخیر",
    create_a_shop: "ساخت فروشگاه",
    start_free: "شروع رایگان",
    featured_apps: "اپلیکیشن های منتخب",
    more_apps: "اپلیکیشن های بیشتر",
    my_public_profile: "صفحه پروفایل عمومی من",
  },

  numbers: {
    infinite: "نامحدود",
  },

  error: {
    not_fount_data: "مقداری یافت نشد",
    license_max_limit: "مجوز شما به حد خود رسید!",
  },

  time_spans: {
    days_range: "بازه زمانی",
    today: "امروز",
    yesterday: "دیروز",
    last_7: "7 روز اخیر",
    last_14: "14 روز اخیر",
    last_30: "30 روز اخیر",
    last_90: "90 روز اخیر",
    custom: "انتخابی",
  },
  device_types: {
    desktop: "رایانه",
    mobile: "موبایل",
    tablet: "تبلت",
  },

  create_website_action: "سایت خود را رایگان بسازید",
  show_shops_action: "لیست فروشگاه های من",

  // Companies:

  Youtube: "یوتیوب",
  Linkedin: "لینکدین",
  Twitter: "توییتر",
  Facebook: "فیسبوک",
  Instagram: "اینستاگرام",
  Reddit: "ردیت",
  Github: "گیت هاب",

  theme: {
    dark_mode: "حالت تاریک",
    dark_mode_description:
      "این گزینه را انتخاب کنید اگر تمایل دارید پس زمینه تاریک با رنگ متن سفید باشد.",
    light_mode: "حالت روشن",
    light_mode_description:
      "این گزینه را انتخاب کنید اگر تمایل دارید پس زمینه روشن و متن رنگ سیاه باشد.",
  },

  // ------------------ Pages Title ------------------
  page_titles: {
    home: "سلدان | فروشگاه ساز حرفه ای ها",
    login: "ورود",
    register: "ثبت نام",
    auth_2fa: "ورود2 مرحله ای 🔐",
    academy: "وبلاگ",
    help: "راهنما",
    price_list: "لیست قیمت",
    my_stores: "فروشگاه های من",
    roles: "نقش های من",
    wallet: "کیف پول",
    personal_info: "اطلاعات شخصی | تایید هویت",
    companies: "شرکت ها",
    access_control: "مدیریت دسترسی ها",
    security_center: "امنیت حساب کاربری",
    gifts: {
      received: "هدایا | دریافتی",
      send: "هدایا | ارسالی",
    },
    monetization: {
      linked_accounts: "کسب درآمد | حساب های متصل",
      plans: "کسب درآمد | برنامه ها و لینک ها",
    },
    affiliate: "همکاری در فروش",
    avocado: "آووکادو — کانال فروش شبکه های اجتمائی",
    guild: "قبیله — فروش جمعی",
    partners_login: "شرکا | ورود کاربران",
  },
  // ---------------------------------------------

  blank_is_all_products: "خالی بگذارید تا شامل تمام محصولات شود!",

  /** @see ShopCautionHelper **/
  cautions: {
    title:
      "با انجام کارهای زیر کسب و کار خود را حرفه ای مدیریت کنید، داشتن یک فروشگاه کامل درآمد شما را زیاد خواهد کرد. ما در این مسیر همراه شما خواهیم بود.",
    no_payment_method: {
      title: "درگاه پرداخت",
      message: "شما بایستی یک درگاه پرداخت برای فروشگاه خود ایجاد نمایید.",
      action: "درگاه های فروشگاه",
    },
    link_account: {
      title: "اتصال حساب",
      message:
        "شما بایستی یک حساب ({currency}) از کیف پول خود را به فروشگاه متصل نمایید.",
      action: "حساب های فروشگاه",
    },
    no_domain: {
      title: "دامنه اختصاصی",
      message:
        "شما می توانید یک یا چند دامنه اختصاصی به فروشگاه خود متصل نمایید. سایت شما بر روی دامنه شما نصب خواهد شد. این فرایند سریع و آسان است.",
    },
    domain_not_approved: {
      title: "تایید دامنه",
      message:
        "دامنه {domain} شما تایید نشده است. تنظیمات DNS را بررسی نموده و اقدام به تایید دامنه نمایید.",
    },
    no_currency: {
      title: "افزودن ارز",
      message: "شما بایستی حداقل یک ارز برای فروشگاه خود تعریف نمایید.",
      action: "مدیریت ارزها",
    },
    no_primary_domain: {
      title: "دامین اصلی",
      message:
        "لطفا یک دامنه را به عنوان دامنه اصلی خود انتخاب نمایید. با کلیک بر روی دکمه ستاره در کنار نام دامنه می توانید دامنه را به عنوان دامنه اصلی سایت خود انتخاب نمایید. این کار برای معرفی سایت شما به موتورهای جستجو حیاتی است. توجه نمایید که سایت شما از طریق تمام دامنه های فعال همچنان در دسترس خواهد بود.",
    },

    shop_complete: {
      title: "تکمیل اطلاعات",
      action: "تنظیمات فروشگاه",
      location_msg: "آدرس خود را اضافه کنید",
      days_open_msg: "روزهای باز بودن فروشگاه را تنظیم کنید ",
      time_open_msg: "زمان باز و بسته شدن فروشگاه را تنظیم کنید",
      description_msg: "شرح مختصری در مورد کسب و کار خود را ینویسید",
      icon_msg: "آرم فروشگاه خود را انتخاب نمایید",
      shop_gateways_msg: "یک روش پرداخت را برای فروشگاه تنظیم نمایید",
      socials_msg: "لینک فروشگاه در شبکه های اجتماعی را اضافه کنید",
      clubs_msg: "باشگاه های مشتری را تنظیم کنید",
      domains_msg: "یک دامنه اختصاصی به فروشگاه خود اضافه نمایید",
      primary_msg: "یک دامنه را به عنوان دامنه اصلی تنظیم کنید",
    },
  },

  /** @see SupportMenu **/
  support: {
    request: "درخواست پشتیبانی",

    category: "واحد",
    title: "پشتیبانی",
    message:
      "هر درخواست یا سوالی دارید از ما بپرسید. بخش پشتیبانی ما شما را راهنمایی خواهد کرد. بهتر است سوال خود را در بخش مرتبط با فروشگاه خود مطرح نمایید. برای مثال اگر سوالی در رابطه با تنظیم دامنه دارید آن را در بخش تنظیم دامنه فروشگاه تان ارسال نمایید.",

    close_at: "در تاریخ {date} بسته شده است.",
    close_ticket_by_user: "سپاس، بستن تیکت",
  },

  /** @see SShopProductRatingView **/
  surveys: ["خیلی ضعیف", "ضعیف", "معمولی", "خوب", "عالی"],

  /** @see SortView **/
  sort: {
    title: "مرتب سازی بر اساس",
    title_small: "مرتب سازی..",
    nothing: "هیچکدام",
    most_views: "پربازدید ترین",
    most_likes: "محبوب ترین",
    most_recent: "جدید ترین",
    most_sell: "پرفروش ترین",
    cheapest: "ارزان ترین",
    most_expensive: "گران ترین",
    only_available: "فقط موجود",
    view_mode: {
      normal: "عادی",
      grid: "فشرده",
      list: "لیست",
      insta: "اینستا",
    },
  },

  /** {@see Helps} **/

  helps: {
    title: "راهنمای سایت و فروشگاه ساز سلدان",
    subtitle:
      "اگر در حال ساخت یک فروشگاه آنلاین جدید یا علاقه مند به استفاده از سلدان به عنوان پلتفرم کسب و کار آنلاین هستید، می توانید اطلاعات بیشتری از نحوه کار با این پلتفرم را در این صفحه پیدا کنید.",
    add_new_help: "راهنمای جدید",
    resources: "دسترسی به منابع",

    categories: {
      Welcome: "شروع",
      Setup: "راه اندازی فروشگاه",
      Sell: "فروش و بازاریابی",
      Developer: "توسعه دهندگان",

      Product: "مدیریت محصولات و دسته بندی ها",
      Blog: "وبلاگ و مدیریت محتوا",
      Order: "مرکز انجام سفارشات",
      Channel: "کانال های فروش",
      Accounting: "حسابداری و روش های پرداخت",
      Incentives: "مشوق ها",
      Marketing: "کمپین های بازاریابی",
      Logistic: "لجستیک و حمل و نقل",
      Customers: "باشگاه مشتریان و مدیریت کاربران",
      Page: "صفحات فرود و صفحات داخلی",
      Access: "مدیریت دسترسی کارکنان / API",
      Application: "اپلیکیشن ها",
      POS: "صندوق فروشگاهی",
    },
    faq: "سوالات متداول",
    github: "پروژه های گیتهاب",
    admin_api_app: "وب سرویس مدیر فروشگاه",
    shop_api_app: "وب سرویس فروشگاه",
    design_kit: "کیت طراحی",
    community: "جامعه کاربران",
  },

  /** {@see Blogs} **/
  /** {@see InterestTopicsView} **/

  blogs: {
    title: "وبلاگ",
    subtitle:
      "درس هایی برای کسب و کار، اعتماد به نفس و دانشی که برای خلق یک کسب و کار پر رونق  نیاز دارید.",
    add_new_blog: "وبلاگ جدید",
    popular: "پرخواننده ترین ها",
    topics: "موضوعات",
    select_topics: "شغلتون رو انتخاب کنید..",
    select_job_topics: "در چه حرفه ای کار می کنید؟",
    select_interested_topics: "به چه موضوعاتی علاقه دارید؟",
  },

  /** {@see ApiDocs} **/
  api: {
    title: "وب سرویس",
    message:
      "یکی از ویژگی های کلیدی سلدان ارائه API های قوی و امن برای مدیریت و اتصال فروشگاه ها به سرویس های دیگر مانند سرویس های انبارداری، حسابداری و غیره می باشد. همچنین شما می توانید اپلیکیشن و وب اپلیکیشن های اختصاصی برای فروشگاه خود طراحی نمایید بدون آنکه نگران بخش سرور و مدیریت داده های خود باشید. تنها کافیست از API های سلدان استفاده نمایید. تمام مراحل مدیریت کاربران، تایید هویت و دیگر امکانات سلدان در اختیار شما خواهد بود.",
  },

  /** {@see UserDashboardPage} **/
  user_dashboard: {
    title: "آشیانه من در سلدان",
    subtitle: "کسب و کار خود را با اطلاعات کافی و به روز شده مدیریت نمایید.",
    menu: {
      affiliate: "بازاریابی",
      monetize: "کسب درآمد",
      gift: "هدیه",
      security: "امنیت",
      access: "دسترسی ها",
      business: "تجاری",
      wallet: "کیف پول",
      identification: "هویت",
      stores: "فروشگاه ها",
      roles: "نقش ها",
      home: "خانه",
      expert: "متخصص",
      deals: "قراردادها",
      providers: "ارائه دهندگان",
    },
    shops: {
      create_new: "ایجاد فروشگاه جدید",
      create_new_sub: "رایگان",
      create_new_sub_need_initial_charge:
        "ساخت اولین فروشگاه رایگان است، احتمالا همان یک فروشگاه برای کسب و کار شما کافی است اما اگر نیاز به ساخت فروشگاه بیشتری دارید هزینه ساخت فروشگاه جدید 100 هزار تومان می باشد. این مبلغ از حساب کیف پول شما کسر خواهد شد.",
      menu: {
        title: "فروشگاه های من",
        shops: "فروشگاه ها",
        new: "جدید",
      },
      accept_invite_question: "آیا این دعوت نامه را می پذیرید؟",

      /** {@see SShopCard} **/

      shop_card: {
        menu_orders: {
          physical: "سفارش های کالای فیزیکی",
          virtual: "سفارش های کالای مجازی",
          files: "سفارش های کالای فایل",
          services: "سفارش های کالای خدمات",
          subscriptions: "سفارشات اشتراک",
        },
        status: "وضعیت",
        license: "پلن",
        volume: "حجم مصرفی",
        expire: "اتمام پلن",
        products: "محصولات",
        page_views: "نمایش",
        user_behavior: "رفتار کاربران",
        time_span: "از {time} تا کنون",
        finance_report: "گزارش مالی",
        buys: "خرید ها",
        payments: "پرداخت ها",
        orders: "سفارش ها",
        currency: "ارز",
      },
    },
  },

  widgets: {
    /** {@see OverviewWidget} **/
    overview: {
      title: "نظرات کاربران",
      title_small: "نمای کلی",
      wishlist: "محصولات مورد علاقه",
      comments: "نظرات",
      likes: "لایک ها",
      favorites: "علاقه مندی ها",
      powers: "امتیازها",
      views: "نمایش",
      report_today: "گزارش امروز",
      report_last7days: "گزارش 7 روز اخیر",
      report_last30days: "گزارش یک ماه اخیر",
    },
  },

  /** {@see AdminShopPage} **/
  admin_shop: {
    title: "فروشگاه",
    menu: {
      edit: "تنظیمات",
      automation: "اتوماسیون",
      application: "اپلیکیشن",
      access: "دسترسی",
      pages: "صفحات",
      channels: "کانال ها",
      categories: "دسته بندی",
      marketing: "مارکتینگ",
      customers: "کاربران",
      logistic: "لجستیک",
      auditing: "حسابداری",
      incentives: "مشوق ها",
      process_center: "سفارش ها",
      blog: "وبلاگ",
      products: "محصولات",
      shops: "فروشگاه ها",
      dashboard: "داشبورد",
      autopilot: "خودکار",
      apps: "افزونه ها",
      pos: "صندوق",
      seo: "سئو",
      localization: "بومی سازی",
    },

    /** {@see ShopDashboard} **/
    dashboard: {
      title: "داشبورد فروشگاه",
      online_staff: "کارمندان آنلاین",

      notify_referral: {
        message:
          "دوستان خود را با لینک اختصاصیتان دعوت نمایید تا کارت هدیه و لایسنس رایگان دریافت کنید.",
        action: "لینک دعوت من",
      },

      /** {@see ShopInfoWidget} **/
      info: {
        title: "مشخصات",
        subtitle:
          "نمای کلی مشخصات فنی سیستم و تنظیمات سیستم عامل کسب و کار شما.",

        shop_name: "نام اختصاصی",
        shop_link: "لینک فروشگاه",
        site_map: "نقشه سایت",
        shop_domains: "دامنه ها",
        shop_domains_msg: "لیست دامنه های متصل به سرویس.",

        home_msg:
          "صفحه اصلی پیش فرض وب سایت خود را تنظیم کنید. برای هر دامنه سفارشی قابل تغییر است.",

        add_domain: "افزودن دامین اختصاصی",
        currencies: "ارزهای فروشگاه",
        currencies_alert: "حداقل یک ارز برای فروشگاه انتخاب نمایید!",
        status: "وضعیت",
        license: "پلن",
        expire: "تاریخ اتمام پلن",
        upgrade_license_action: "ارتقاء به {name}",
        wage: "کارمزد",
        cpu_message:
          "تعداد منابعی که متناسب با پلن خریداری شده شما برای سایت تان اختصاص داده شده است.",
        hide_domains: "مخفی کردن دامنه ها",
        show_domains: "نمایش دامنه های من",

        /** {@see ShopDomains} **/
        table: {
          primary: "اصلی",
          url: "آدرس",
          site_map: "نقشه سایت",
          enable: "فعال",
          indexed: "ایندکس",
          and_more: "و بیشتر",
          auto_repair: "عیب یابی",
        },
        add_dialog: {
          title: "تنظیم دامنه فروشگاه",
          step1:
            "مقدار IP رکورد A را برای DNS دامنه یا زیر دامنه یکی از مقادیر زیر تعریف نمایید:",
          step2: "مقدار رکورد TXT را برای DNS دامنه تنظیم نمایید:",
          set_ip_alert:
            "مقدار IP رکورد A را<b>{ip}</b>تنظیم نمایید - اگر از طریق CDN اضافه نشده است.",
          input_domain: "آدرس دامنه",
          correct: "تنظیمات دامنه صحیح است.",
          set_message: "مقدار رکورد CNAME را {cname} تنظیم نمایید.",
          input_domain_message: "نام دامنه را بدون http و https وارد نمایید.",
          ssl_message:
            "نگران تاییدیه SSL برای فروشگاه خود نباشید. این تاییدیه توسط سلدان به صورت رایگان برای سایت شما صادر خواهد شد.",
          active: "دامنه فعال است",
          inactive: "دامنه غیر فعال است",
          success_message:
            "تبریک، سایت شما بر روی دامنه {domain} فعال است. می توانید کسب و کار و برند خود را از طریق این دامنه به دنیا معرفی نمایید.",

          delete_action: "حذف دامنه؟",
        },
        set_home_dialog: {
          title: "تنظیم صفحه اصلی دامنه",
        },
        notification: {
          add_message: "آدرس دامنه با موفقیت ثبت گردید.",
          update_message: "دامنه با موفقیت به روزرسانی گردید.",
          delete_domain_message: "دامنه با موفقیت حذف گردید.",
        },
        alert: {
          title: "حذف دامنه",
          message:
            "آیا می خواهید این دامنه را حذف نمایید؟ دقت نمایید برای جلوگیری از سوء استفاده دیگران مقادیر رکورد DNS دامنه خود را به حالت قبل بازگردانید.",
        },
      },
      /** {@see ShopActiveOrdersWidget} **/
      active_orders: {
        title: "سفارشات",
        title_small: "در صف انتظار",
        pending_orders: "عدد سفارش فعال",
        physical: "سفارش کالاهای فیزیکی",
        virtual: "سفارش کالاهای مجازی",
        file: "سفارش فایل",
        service: "سفارش خدمات",
      },
      /** {@see ShopProductsOverviewWidget} **/
      products: {
        title: "محصولات",
        title_small: "کالا، خدمات، فایل",
        total_products: "تعداد تنوع کالا",
      },
      /** {@see ShopFinanceWidget} **/
      finance: {
        title: "مالی",
        title_small: "گزارش مالی",
        total_30days_title: "مجموع مقدار فروش",
        last_30_day: "30 روز اخیر",
        pay_amount_chart_title: "پرداخت",
        sell_amount_chart_title: "فروش",
        discount_amount_chart_title: "تخفیف",
        currency_convert_to: "تبدیل به ارز",
        active_currencies: "ارز های فعال",
        sell_count_chart_title: "تعداد فروش به تفکیک تنوع",
        active_gateways: "درگاه فعال",
        received_last_24h: "دریافتی ۲۴ ساعت گذشته",
        pie: {
          title: "نسبت فروش امروز",
          no_data: "امروز فروشی نداشتید",
        },
        pay_amount: "مبلغ پرداخت",
        sell_amount: "مبلغ فروش",
        discount_amount: "مبلغ تخفیف",
        sell_count: "تعداد فروش",
        table: {
          currency: "ارز",
          total_sell_30days: "مجموع فروش 30 روزه",
          sell_daily: "میزان فروش روزانه",
          sell: "فروش",
          pay: "پرداخت",
        },
      },
      /** {@see ShopUsersWidget} **/
      customers: {
        title: "کاربران فروشگاه",
        title_small: "گزارش فعالیت",
        total_customers: "تعداد کل",
        new_customers_today: "امروز",
        new_customers_week: "7 روز اخیر",
        orders_count: "تعداد سفارشات",
        days_range: "بازه زمانی",
        new_users: "اعضای جدید",

        chart: {
          new_customers: "عضو جدید",
          customers: "کاربران",
        },
      },
      /** {@see ShopPluginsWidget} **/
      plugins: {
        title: "افزونه ها",
        title_small: "نصب شده",
      },

      /** {@see ShopPerformanceWidget} **/
      performance: {
        title: "امروز",
        title_small: "تعداد کاربران و فروش",
        users: "کاربران",
        views: "نمایش ها",
        orders: "تعداد سفارشات",
        payments: "میزان درآمد",
        no_visitor_today: "امروز بازدید کننده ای از فروشگاه تان نداشتید.",
      },
    },

    /** {@see ProductsManagement} **/
    products: {
      title: "لیست محصولات",
      products_list: "لیست محصولات",
      products_menu: "مدیریت محصولات",
      process_que: "درحال پردازش و افزودن محصولات",
      view_que_list: "لیست محصولات در صف",
      menu_products_list: "لیست محصولات",
      menu_export: "دانلود لیست محصولات",
      menu_import: "افزودن محصولات (csv)",
      menu_show_deletes: "نمایش محصولات حذف شده",
      drop_import_message:
        "فایل فهرست محصولات (فرمت CSV، XLS، XLSX) را در اینجا رها کنید تا وارد کردن محصولات انبوه شروع شود. مطمئن شوید که فایل دارای فرمت استاندارد فهرست محصولات سلدان است.",
      menu_advanced_options: "تنظیمات پیشرفته",

      /** {@see WidgetProductCard} **/
      product_widget: {
        product_type: "نوع کالا",
        price: "قیمت",
        value_added: "کمیسون",
        discount: "تخفیف",
        in_stock: "موجودی",
        product_unit: "عدد",
        total_sell: "کل فروش",
        total_view: "تعداد بازدید",
        view_unit: "مرتبه",
        review_unit: "نفر",
      },

      /** {@see WidgetFolderCard} **/
      folder_widget: {
        products: "محصولات",
        products_unit: "نوع",
        sub_categories: "زیر دسته",
        sub_categories_unit: "عدد",
        views: "نمایش",
        views_unit: "مرتبه",
      },
    },

    /** {@see AdminShop_Blogs} **/
    blogs: {
      new: "جدید",
      blogs: "وبلاگ ها",

      /** {@see AdminShopBlogsList} **/
      list: {
        title: "مقالات من",
        subtitle:
          "مطلب برای معرفی خود و کسب و کارتان با یک ویرایشگر حرفه ای بنویسید. محتوای خوب اولین چیزی است که باید هنگام نوشتن یک پست وبلاگ بر روی آن تمرکز کنید سپس بر روی سئو کردن تمرکز کنید.",
        waiting_message: "در حال دریافت اطلاعات... لطفا منتظر بمانید",
        published: "منتشر شده",
        draft: "پیش نویس",
        private: "خصوصی",
        public: "عمومی",
        table: {
          title: "عنوان",
          author: "نویسنده",
          claps: "تشویق",
          like: "لایک",
          comments: "نظرات",
          views: "نمایش",
          publish_state: "وضعیت انتشار",
          created_at: "تاریخ ایجاد",
          updated_at: "آخرین بروز رسانی",
        },
      },
    },

    /** {@see ShopProcessCenter} **/
    orders: {
      /** {@see ShopProcessCenterTemplate} **/
      physical: {
        waiting_message: "در حال دریافت اطلاعات... لطفا منتظر بمانید",
        rejected: "رد شده است",
        delivery: "حمل و نقل",
        discount: "تخفیف",
        not_paid: "پرداخت نشده",

        table: {
          order_number: "کد سفارش",
          order_date: "تاریخ ثبت",
          status: "آخرین وضعیت",
          price: "مبلغ کل",
          payment_status: "وضعیت پرداخت",
        },
      },

      /** {@see ShopProcessCenter_Virtual} **/
      virtual: {
        waiting_message: "در حال دریافت اطلاعات... لطفا منتظر بمانید",

        discount: "تخفیف",
        table: {
          order_number: "کد سفارش",
          product: "محصول",
          order_date: "تاریخ ثبت",
          status: "آخرین وضعیت",
          price: "مبلغ کل",
          payment_status: "وضعیت پرداخت",
        },
      },
    },

    /** {@see AdminShopFinance} **/
    auditing: {
      menu: {
        exchange: "نرخ ارز",
        gateway: "درگاه",
        invoice: "صورت حساب",
        report: "گزارش",
        tax: "مالیات",
        drop_shipping: "تسویه دراپ شیپینگ",
        reseller_accounts: "حساب های دراپ شیپینگ",
        valuations: "قیمت گذاری",
      },

      /** {@see AdminShopFinance_Bill} **/
      invoice: {
        title: "حساب های پرداخت فروشگاه",
        subtitle:
          "مبلغ شارژ، کارمزد و هزینه های فروشگاه از این حساب ها کسر می گردد.",
        title_add: "اتصال حساب جدید کیف پول سلدان",

        subtitle_add:
          "بایستی برای هر ارز یک حساب اعتباری سلدان ایجاد نموده و به فروشگاه خود متصل نمایید. مبالغ هزینه ها از این حساب کسر خواهد گردید.",
        add_account: "افزودن حساب",
        charge_account: "شارژ حساب",
        show_transaction: "نمایش تراکنش ها",

        table: {
          currency: "ارز",
          account_number: "شماره حساب",
          account_name: "نام حساب",
          balance: "موجودی",
          free_balance: "موجودی آزاد",
          actions: "حذف از فروشگاه",
        },
        add_account_dialog: {
          title: "اتصال حساب اعتباری به فروشگاه",
          subtitle:
            " شما نزد سلدان یک حساب اعتباری باز می کنید. ما به شما اعتباری مانند هر کارت اعتباری دیگر خواهیم داد. کارمزد فروش سلدان از این حساب برداشت می شود، اما در صورتی که موجودی حساب شما کافی نباشد، این مبلغ به صورت بدهی ثبت خواهد شد. هر مقدار که نیاز دارید از خدمات سلدان استفاده نمایید.",
          account_number: "شماره حساب",
          account_number_input_message:
            "فروشگاه به این حساب متصل می گردد. مبالغ کارمزد و هزینه ها از این حساب کسر خواهد گردید.",
          balance: "موجودی حساب",
          connect_account_to_shop: "اتصال حساب به فروشگاه",
        },
        notifications: {
          connect_account_success: "حساب با موفقیت افزوده شد.",
          delete_account_success: "حساب با موفقیت از فروشگاه حذف شد.",
        },
        alert: {
          delete_account: "قطع اتصال حساب",
          delete_account_message:
            "آیا می خواهید این حساب را از لیست حساب های فروشگاه خارج نمایید؟",
          delete_account_action: "حذف حساب",
        },
        inform_charge_account: "حساب خود را شارژ نمایید!",
        inform_charge_account_critical:
          "برای جلوگیری از قطع سرویس، حساب خود را شارژ نمایید!",
      },

      /** {@see AdminShopFinanceGateway} **/
      gateway: {
        title: "درگاه های پرداخت",
        sub_title:
          "لیست درگاه های فعال فروشگاه خود را در زیر مشاهده می نمایید. در صورتی که قصد افزودن درگاه جدیدی به فروشگاه خود دارید بر روی کلید زیر کلیک نمایید.",
        add_gateway: "افزودن درگاه جدید",

        add_gateway_dialog: {
          title: "انتخاب ارز درگاه",
          country_currencies: "ارزهای رسمی",
          crypto_currencies: "رمز ارزها",
          active_gateways: "درگاه های فعال",

          confirm: "افزودن درگاه",
        },
      },

      /** {@see AdminShopFinanceExchangeRate} **/
      exchange: {
        title: "ارزهای فعال فروشگاه",
        subtitle:
          "کاربران قادر خواهند بود یکی از ارزهای فعال را انتخاب نموده و قیمت محصولات بر اساس آن محاسبه و نمایش داده می شود. وارد نمودن نرخ تبدیل ارزها بر عهده فروشنده می باشد.",
        shop_currencies_input: "ارزهای فعال برای کاربران",
        shop_currencies_input_error: "حداقل یک ارز را انتخاب نمایید",
        rates: {
          title: "نرخ تبدیل میان ارزها",
          sub_title:
            "می توانید قیمت محصولات را بر اساس هر یک از ارزهای زیر وارد نموده و قیمت محصولات به صورت خودکار با نرخ های تبدیل میان ارزهای شما محاسبه می گردد.",
          message:
            "با وارد نمودن نرخ های تبادلی میان ارزها، قیمت محصولات شما به صورت خودکار محاسبه و به روز خواهند گردید.",
          add_new_rate: "افزودن نرخ جدید",
        },
        table: {
          waiting_receive_data: "در حال دریافت اطلاعات... لطفا منتظر بمانید",
          rate_input: "نرخ تبدیل",
          from: "از",
          to: "به",
          exchange_rate: "نرخ تبدیل",
          edit: "ویرایش",
          delete: "حذف",
          auto: "نرخ خودکار",
        },
        add_rate_dialog: {
          title: "ثبت نرخ تبادل ارزی",
          message:
            "در ورود اطلاعات دقت نمایید. قیمت محصولات شما بر اساس نرخ های وارد شده در اینجا محاسبه خواهند شد.",
          currency_from: "ارز مبدا",
          currency_to: "ارز مقصد",
          exchange_rate: "نرخ تبدیل",
        },
        alert: {
          title: "حذف نرخ تبدیل",
          message: "آیا می خواهید این نرخ تبدیل را حذف نمایید؟",
          action: "حذف",
        },
        notifications: {
          delete_success: "نرخ تبادلی حذف گردید.",
          add_success: "نرخ تبادلی ثبت گردید.",
          update_success: "ارزهای فعال فروشگاه به روز گردید.",
        },
      },
    }, // End of auditing

    /** {@see AdminShopLogistics} **/
    logistic: {
      /** {@see AdminShopLogistics_Warehouse} **/
      warehouses: {
        title: "انبارها",
        subtitle: "لیست انبارهای من.",
      },
      warehouse_btn: "افزودن انبار جدید",
      warehouse_btn_error:
        "انبار، فروشگاه یا مبدا کسب و کار خود را تنظیم کنید. این طالاعات در محاسبه هزینه حمل و نقل و فرآیند ثبت سفارش ضروری است.",
      size_unit: {
        title: "واحد اندازه",
        subtitle: "واحد اندازه گیری طول، عرض و ارتفاع.",
      },
      mass_unit: {
        title: "واحد وزن",
        subtitle: "واحد مورد استفاده برای اندازه گیری وزن.",
      },

      menu: {
        return_request: "مرجوعی",
        delivery: "حمل و نقل",
        inventory: "موجودی",
        warehouse: "انبار",
        logistic_apps: "اپلیکیشن های لجستیک",
        profiles: "پروفایل ها",
        includes: "محتویات",
      },

      /** {@see AdminShopLogistics_Inventory} **/
      warehouse: {
        title: "انبار فروشگاه",
        sub_title: "این آدرس به عنوان مبدا ارسال مرسولات در نظر گرفته می شود.",
        table: {
          title: "لیست موجودی",
          sub_title:
            "لیست کلیه کالاهای فروشگاه شامل کالاهای فیزیکی، مجازی، فایل و خدمات",
        },
      },

      /** {@see AdminShopLogistics_Transportations} **/
      delivery: {
        title: "روش های ارسال مرسولات",

        sub_title:
          "با تنظیم مقادیر این بخش، روش های ارسال متنوعی برای خریداران شما فعال می گردد. همچنین امکان پرداخت وجه در محل در این بخش قابل فعال سازی است.",
        add_transportation: "افزودن روش ارسال",

        /** {@see DeliveryFormWidget} **/
        delivery_form: {
          payment: "تنظیمات پرداخت",
          limits: "محدودیت ها",

          currency_input: "ارز مرجع محاسبه هزینه",
          currency_input_message: "هزینه ها بر اساس این ارز محاسبه می گردد",
          distance_input: "فاصله تحت پوشش از انبار",
          distance_input_message: "مقدار 0 یا -1 به معنی عدم محدودیت می باشد.",
          max_weight_input: "حداکثر وزن بسته قابل پذیرش",
          max_weight_input_message:
            "مقدار 0 یا -1 به معنی عدم محدودیت می باشد.",
          max_size_input: "حداکثر ابعاد بسته",
          width: "عرض",
          length: "طول",
          height: "ارتفاع",
          days_input: "روز های قابل انتخاب برای دریافت",
          days_input_nodata: "حداقل یک روز را انتخاب نمایید",
          hours_input: "ساعت های قابل انتخاب برای دریافت",
          hours_input_nodata: "حداقل یک بازه زمانی را انتخاب نمایید",
          vacation_input: "آیا روزهای تعطیل رسمی هم خدمات می دهید؟",
          cod_input:
            "آیا امکان پرداخت هزینه سفارش (سبد خرید) در محل وجود دارد؟",
          cod_input_message:
            "از ارائه این خدمات توسط سرویس حمل و نقل خود اطمینان حاصل نمایید.",

          pricing: "محاسبه قیمت",
          const_input: "هزینه ثابت",
          distance_cof_input: "ضریب هزینه به فاصله",
          distance_cof_input_dim: "به ازای هر {dim}",
          weight_cof_input: "ضریب هزینه به وزن",
          weight_cof_input_dim: "به ازای هر {dim}",
          price_cof_input: "ضریب هزینه به قیمت کالا",
          price_cof_input_message:
            "شامل هزینه بیمه و خدمات جانبی مثل پرداخت در محل.",
          price_cof_input_dim: "به ازای هر {dim}",
          distance_weight_cof_input: "ضریب هزینه به فاصله ضرب در وزن",
          distance_weight_cof_input_dim: "به ازای هر {weight} در هر {distance}",
          free_shipping_input: "آیا ارسال رایگان دارد؟",
          free_shipping_limit_input: "حداقل مبلغ سفارش برای ارسال رایگان",

          shipping_cost_calculation: "محاسبه هزینه ارسال",
          sod_true: " پرداخت هزینه حمل و نقل در محل (پس کرایه)",
          sod_true_message:
            "از امکان پس کرایه توسط سرویس حمل و نقل خود اطمینان حاصل نمایید.",
          sod_false: "محاسبه خودکار هزینه",

          notifications: {
            update_success: "تنظیمات سرویس ارسال با موفقیت ثبت گردید.",
          },
        },
      },
    }, // End of logistic

    /** {@see ShopUsers} **/
    users: {
      menu: {
        customers: "مشتریان",
        contact_form: "فرم ارتباط",
        faq: "سوالات متداول",
        club: "باشگاه",
        report: "گزارش",
      },

      /** {@see ShopUsers_Report} **/
      report: {
        title: "گزارش کاربران فروشگاه",
        sub_title:
          "وضعیت فروشگاه خود را به صورت زنده در این بخش مشاهده می نمایید.",
        report_30days_by_time:
          "فعالیت کاربران بر اساس روز و ساعت در 30 روز گذشته",
        report_30days_by_location:
          "فعالیت کاربران بر اساس موقعیت جغرافیایی در 30 روز گذشته",
      },
      /** {@see ShopUsers_Club} **/
      club: {
        title: "باشگاه مشتریان",
        sub_title:
          "برای فعال شدن هر سطح، ارز و مقدار خرید ماهانه و سالانه را وارد نمایید. کاربران شما با رسیدن به شرایط هر یک از موارد ماهانه یا سالانه، وارد آن دسته در باشگاه مشتریان شما می گردند.",
        item: {
          members_count: "تعداد اعضا",
          purchases_count: "دفعات خرید",
          monthly: "ماهانه",
          annually: "سالانه",
          discount_percent: "درصد تخفیف",
          discount_limit: "سقف تخفیف",
        },

        edit_dialog: {
          title: "مدیریت سطح مشتریان",
          currency_input: "واحد ارزی",
          currency_input_message: "مجموع خرید بر اساس این ارز محاسبه می شود.",
          free_shipping_input: "ارسال رایگان",
          monthly_input: "میزان خرید ماهانه",
          annually_input: "میزان خرید سالانه",
          discount_percent_input: "درصد تخفیف برای مشتریان این سطح",
          discount_limit_input: "سقف مبلغ تخفیف",
          description_input: "توضیحات",
          description_input_message:
            "توضیحات مختصری درباره این سطح وارد نمایید.",
        },
        notifications: {
          update_success: "تغییرات بر روی باشگاه مشتریان اعمال گردید.",
        },
      },
      /** {@see ShopUsers_FAQ} **/
      faq: {
        title: "سوالات متداول",
        sub_title: "پرسش های مطرح شده در بخش پرسش و پاسخ فروشگاه.",
      },
    }, // End of users

    /** {@see AdminShopMarketing} **/
    marketing: {
      menu: {
        campaigns: "کمپین ها",
        cross_selling: "کالکشن",
        affiliate: "مشارکت",
        emails: "ایمیل",
        funnel: "فیلتر",
      },

      /** {@see AdminShopMarketing_Campaign} **/
      campaign: {
        name_input_name: "نام کمپین",
        name_input_placeholder: "عنوان کمیپن خود را وارد نمایید.",
        create_campaign_action: "ایجاد کمپین جدید",
        table: {
          title: "عنوان",
          state: "وضعیت",
          discount: "تخفیف",
          landing: "صفحه لندینگ",
          start: "شروع",
          end: "پایان",
        },
        notifications: {
          add_success_title: "ایجاد کمپین",
          add_success: "کمپین شما ایجاد گردید.",
        },
      },
    }, // End of marketing

    /** {@see CategoriesManagement} **/
    categories: {
      title: "لیست دسته بندی ها",
      subtitle:
        "دسته بندی ها ویژگی کلیدی فروشگاه اینترنتی شما هستند. ما شما را تشویق می کنیم که از این ابزارهای طبقه بندی قدرتمند برای ساخت ویترین فروشگاهی مدرن و آسان کردن یافتن محصولات برای مشتریان خود استفاده کنید.",

      menu: {
        add_new: "ایجاد دسته جدید",
        categories_list: "لیست دسته بندی ها",
        export: "دریافت لیست دسته بندی ها",
        import: "وارد کردن دسته بندی ها (CSV)",
      },
      /** {@see categoriesGraph} **/
      graph: {
        title: "سلسله مراتب دسته بندی ها",
        subtitle:
          "می توانید یک  تصویر کامل از دسته بندی های فروشگاه خود و مسیر حرکت کاربران در آن ها داشته باشید. با چینش صحیح سدته بندی ها سرعت یافتن محصولات برای مشتریان و در نتیجه نرخ تبدیل فروش شما افزایش خواهد یافت.",

        visits_count: "تعداد بازدید",
        normal: "ساده",
        items_count: "تعداد ایتم ها",
        home: "خانه",
      },
      /** {@see WidgetCategoryCard} **/
      category_widget: {
        parent: "دسته مادر",
        not_exist: "ندارد",
        children: "دسته های زیر مجموعه",
        delete_alert: {
          title: "حذف دسته بندی فرزند",
          message:
            "آیا می خواهید {title} را از لیست زیر مجموعه های  {parent_title} خارج نمایید؟",
          action: "حذف",
        },
        notifications: {
          edit_success: "دسته بندی ویرایش شد.",
        },
      },
    }, // End of categories

    /** {@see AdminShopApps} **/
    apps: {
      menu: {
        app_store: "فروشگاه اپ",
        my_apps: "اپلیکیشن ها",
      },
      /** {@see AdminShopApps_List} **/
      my_apps: {
        title: "اپلیکیشن های فعال فروشگاه",
        subtitle: "اپلیکیشن های سایت خود را در این بخش مدیریت نمایید.",
        all: "همه",
      },
      /** {@see AdminShopApps_Store} **/
      store: {
        title: "فروشگاه اپلیکیشن",
        subtitle:
          "خدمات مورد علاقه خود را با خیال راحت و ایمن به کسب و کار خود متصل کنید. ما افزونه ها و برنامه ها را بر اساس درخواست مشتریان خود اضافه می کنیم.",

        nodata: "افزونه ای یافت نشد.",
        all: "همه",
        more: "بیشتر",
      },
    }, // End of apps

    /** {@see PagesManagement} **/
    pages: {
      menu: {
        new_page: "صفحه جدید",
        contact_us: "تماس با ما",
        privacy: "حریم",
        terms: "قوانین",
        about_us: "درباره ما",
        landings: "لندینگ",
        popup: "پنجره بازشو",
        static: "استاتیک",
      },
    }, // End of pages

    /** {@see AdminShopPermission} **/
    permissions: {
      menu: {
        persons: "کارمندان",
        roles: "نقش ها",
        api: "API",
      },
      /** {@see AdminShopPermission_Personnel} **/
      shop_permissions: {
        menu: {
          users: "لیست کارمندان",
          new_user: "کارمند جدید",
          new_user_message:
            "افرادی که به داشبورد و بخش مدیریت این فروشگاه دسترسی خواهند داشت.",
          email_input_placeholder: "ایمیل",
          email_input: "آدرس ایمیل کارمند",
          level_input: "سطح دسترسی",
          add_user_action: "افزودن کارمند",
        },
        delete_alert: {
          title: "حذف دسترسی",
          message: "آیا می خواهید دسترسی این کاربر را حذف نمایید؟",
          action: "حذف",
        },
        notifications: {
          add_success_title: "افزودن دسترسی",
          add_success: "دسترسی جدید اضافه شد.",
          delete_success_title: "حذف دسترسی",
          delete_success: "دسترسی حذف شد.",
        },
      },

      /** {@see AdminShopPermission_API} **/
      shop_api: {
        title: "کلیدهای دسترسی به فروشگاه",
        message:
          "این کلیدها برای ایجاد کدهای دسترسی (Access Token) توسط سرور شما استفاده می گردد. توجه داشته باشید این کلید ها محرمانه بوده و تنها بر روی سرور قرار داده شود، به نحوی که توسط دیگران قابل مشاهده نباشد.",
      },
    }, // End of permissions

    /** {@see AdminShop_Applications} **/
    applications: {
      /** {@see AdminShop_Applications_PWA} **/
      pwa: {
        title: "وب اپلیکیشن",
        sub_title: "وب اپلیکیشن فروشگاه خود را اینجا مشاهده نمایید.",
        message:
          "توجه: صفحه خوش آمد گویی وب اپ شما در گوشی های iPhone و iPad را در بخش اپلیکیشن iOS می توانید ویرایش نمایید.",
        ios_app: "اپلیکیشن iOS",
      },

      /** {@see AdminShop_Applications_iOS} **/
      ios: {
        title: "اپلیکیشن iOS",
        sub_title:
          "به زودی امکان ساخت اپلیکیشن iOS برای فروشگاه شما فراهم خواهد آمد.",
        message:
          "حداکثر حجم فایل :512 کیلوبایت، شما می توانید فایل هایی تا حجم 1MB را نیز آپلود نمایید به شرط آنکه سیستم فشرده سازی ما قادر به کاهش حجم آن تا 512KB باشد. تصویر آپلود شده توسط شما به صورت هوشمند به سایز مناسب تغییر داده خواهد شد.",
      },
      /** {@see AdminShop_Applications_Android} **/
      android: {
        title: "اپلیکیشن اندروید",
        sub_title: "اپلیکیشن اندروید خود را بسازید.",
        message:
          "این فرم را پر نموده و در انتها کلید ساخت اپلیکیشن را بزنید. نیازی به هیچ کار دیگری نخواهد بود. تمام مراحل Build و Sign اپلیکیشن شما در سرور های سلدان انجام میگیرد. اپلیکیشن نهایی قابل آپلود در تمام اپ استور ها خواهد بود.",
        server_un_available:
          "به صورت آزمایشی، سرور سازنده اپلیکیشن فعلا متصل نمی باشد.",
        app_building_progress: "اپلیکیشن شما درحال ساخت است.",
        app_build_success: "اپلیکیشن شما آماده است.",
        download_app_action: "دریافت اپلیکیشن",
        firmware_version: "ورژن نسخه اصلی",
        main_info: "اطلاعات اصلی اپلیکیشن",
        package_name_input_message:
          "از یکتا بودن نام پکیج اطمینان حاصل نمایید.",
        package_name_input_alert:
          "درصورت تغییر این نام دیگر قادر به آپدیت اپلیکیشن های قبلی خود در اپ استور نخواهید بود و بایتسی یک اپلیکیشن جدید نصب نمایید. دقت نمایید که کاربران نسخه های پیشین اپلیکیشن شما نیز قادر به ورود به حساب کاربری شان در آن اپلیکیشن ها نخواهند بود.",
        version_input: "ورژن",
        version_input_message:
          "این عدد بایستی همواره بیشتر از مقدار قبلی آن باشد.",
        version_name_input: "نام ورژن",
        version_name_input_message:
          "یک نام دلخواه برای این ورژن از اپ وارد نمایید.",
        use_selldone_key: "کلیدهای پیشفرض سلدان",
        use_last_key: "کلید ذخیره شده",
        use_new_key: "کلید جدید",
        appearance: "مشخصات ظاهری",
        app_name_input: "نام اپلیکیشن",
        app_name_input_message: "این نام اصلی اپلیکیشن شما خواهد بود.",
        app_title_input: "عنوان اپلیکیشن",
        app_title_input_message: "این عنوان بالای اپ نمایش داده می شود.",
        app_title_input_placeholder: "یک عنوان وارد نمایید",
        app_icon_input: "آیکون اپلیکیشن",
        app_icon_input_placeholder:
          "فایل zip  ایکون های اپلیکیشن را انتخاب نمایید.",
        generate_icon_pack_action: "ساخت بسته آیکون",
        splash_design: "طراحی صفحه معرفی",
        splash_logo_input: "لوگوی صفحه معرفی",
        splash_logo_input_placeholder: "تصویری برای این صفحه انتخاب نمایید.",
        splash_title_input: "عنوان صفحه معرفی",
        splash_title_input_placeholder: "یک عنوان وارد نمایید",
        splash_title_input_message: "این عنوان به صورت بزرگ نمایش داده می شود.",
        splash_message_input: "پیام صفحه معرفی",
        splash_message_input_placeholder: "پیام...",
        splash_message_input_message:
          "این پیام به صورت کوچک در زیر عنوان نمایش داده می شود.",

        dark_theme: "تم تیره",
        light_theme: "تم روشن",
        build: "ساخت",
        building_info:
          "ساخت اپلیکیشن در سرور های سلدان نیازمند صرف زمانی از 10 ثانیه تا چند دقیقه است. لطفا شکیبا باشید. پس از ایجاد اپلیکیشن آدرس دریافت فایل در اینجا نمایش داده خواهد شد.",
        update_mode_action: "به روز رسانی",
        build_mode_action: "ساخت اپلیکیشن",
        notifications: {
          icon_pack_not_valid_error: "فایل صحیح نمی باشد.",
          start_building_title: "در حال ساخت...",
          start_building_message: "درخواست ساخت اپلیکیشن اندروید ثبت گردید.",
          build_success_title: "تبریک",
          build_success:
            "اپلیکیشن اندروید شما آماده است، آن را در همین بخش، بالای صفحه دانلود نمایید.",
        },
      },
    }, // End of applications

    /** {@see ShopAutomation} **/
    automation: {
      menu: {
        autopilot: "خودکار",
      },
    },

    /** {@see ShopEditPage} **/
    edit: {
      menu: {
        delete: "حذف فروشگاه",
        activity_time: "زمان فعالیت",
        footer: "منو",
        info: "اطلاعات کلی",
        notification: "نوتیفیکیشن",
        home: "خانه",
        locations: "محدوده",
        license: "لایسنس",
        theme: "قالب",
        sms: "پیامک",
        email: "ایمیل",
        domain: "دامنه",
        verifications: "تاییدیه",
        flow: "جریان",
        business_model: "مدل کسب",
      },
      delete_dialog: {
        title: "حذف فروشگاه",
        message: "آیا می خواهید فروشگاه <b>{title}</b> را حذف نمایید؟",
        action: "حذف فروشگاه",
      },

      notifications: {
        delete_success: "فروشگاه حذف شد.",
      },

      /** {@see ShopEdit_Info} **/
      info: {
        title_tab: {
          title: "تنظیمات نام و زبان",
          subtitle: "یک نام عمومی و زبان پیش فرض فروشگاه خود را تنظیم کنید.",
        },
        name_tab: {
          title: "نام کاربری فروشگاه",
          subtitle: "این یک نام لاتین منحصر به فرد برای فروشگاه شما است.",
        },

        description_tab: {
          title: "داستان کسب و کار من",
          subtitle:
            "درباره کسب و کار خود و ارزش پیشنهادی منحصر به فرد آن بگویید.",
        },
        contact_tab: {
          title: "اطلاعات تماس",
          subtitle: "اطلاعات تماس عمومی و تنظیمات کسب و کارهای محلی در گوگل.",
        },
        image_tab: {
          title: "نشان تجاری",
          subtitle: "یک نشان برجسته و منحصر به فرد برای برند خود ثبت نمایید.",
        },
      },

      /** {@see ShopEdit_Badges} **/
      badge: {
        external_title: "مدیریت نشان های خارجی",
        external_message:
          "آدرس تصویر نشان و لینک مربوط به آن را میتوانید در این بخش وارد نمایید. آدرس ها باید از یک سایت مورد تایید باشد.",
      },
      /** {@see ShopEdit_Menu} **/
      edit_menu: {
        title: "منوها",

        footer: {
          title: "منوی پایین صفحه",
          sub_title:
            "شما می توانید منوی پایین صفحه فروشگاه خود را در اینجا تعریف نمایید. این منوها می تواند صفحات اصلی، صفحات طراحی شده و یا لینک های خارجی باشد.",
        },

        header: {
          title: "منوی بالای صفحه",
          sub_title:
            "این منو تنها در صفحه های نمایش بزرگتر از تلفن همراه، بالای صفحه اصلی، دسته بندی محصولات، لندینگ ها و صفحه محصول نمایش داده می شود.",
        },

        save_menu: "ذخیره منو",
        dialog: {
          main_pages: "صفحات اصلی",
          custom_pages: "صفحات اختصاصی",
        },
        table: {
          home: "خانه",
          shop: "فروشگاه",
          blogs: "وبلاگ",
          about_us: "درباره ما",
          privacy: "حریم خصوصی",
          terms: "قوانین استفاده",
          faq: "پرسش و پاسخ",
          contact_us: "تماس با ما",
        },
        notifications: {
          save_success: "ثبت منو",
        },
      },

      /** {@see ShopEdit_Footer} **/
      social: {
        title: "شبکه های اجتماعی",
        message:
          "لینک شبکه های رسمی خود را در این بخش وارد نمایید. جهت تایید آدرس ها طبق راهنمای هر مورد عمل نمایید.",
      },

      /** {@see ShopEdit_Time} **/
      time: {
        title: "روزهای فعالیت کسب و کار شما",
        sub_title: "تنظیم روزها و ساعت های فعالیت فروشگاه",
        days_open_input: "روزها",
        days_open_input_nodata: "حداقل یک روز را انتخاب نمایید",
        start_time_input: "ساعت شروع فعالیت فروشگاه",
        start_time_input_hint: "ساعات شروع فعالیت فروشگاه",
        end_time_input: "ساعت پایان فعالیت فروشگاه",
        end_time_input_hint: "ساعات پایان فعالیت فروشگاه",
        customer_support_service: "پاسخگویی و خدمات مشتریان شما",
        response_time_input: "وضعیت خدمات مشتریان",
        support_24h: "24 ساعت 7 روز هفته",
        support_normal: "تنها در ساعات اداری",
        no_service: "ندارد",
        notifications: {
          update_success: "فروشگاه ویرایش شد.",
        },
      },
    }, // End of edit
  }, // End of admin_shop

  /** {@see CategorySelect} **/
  category_select: {
    category_input_no_category: "بدون دسته بندی",
  },

  /** {@see AddProduct} **/
  add_product: {
    title_new: "محصول جدید",
    title_new_category: "دسته بندی جدید",
    title_new_drop_shipping: "افزودن محصول دراپ شیپینگ",

    title_edit: "ویرایش محصول",
    delete: "حذف محصول",
    completed: "تکمیل",

    menu: {
      type: "نوع محصول",
      general_info: "مشخصات کلی",
      rating: "نظر سنجی و ویژگی ها",
      spec: "مشخصات",
      images: "تصاویر",
      price: "قیمت",
      inputs: "ورودی",
      outputs: "خروجی",
      extra: "مشخصات آماده سازی",
      review: "نقد و بررسی محصول",
      inventory: "موجودی / تنوع",
      change_status: "تغییر وضعیت",
    },

    select_type: {
      title: "نوع محصول، خدمات و یا کالای خود را انتخاب نمایید.",
    },

    /** {@see ProductEditInfo} **/
    edit_info: {
      category_input: "دسته بندی",

      product_name: "نام محصول*",
      product_name_placeholder: "گوشی آیفون مدل...",
      product_code: "نام محصول (انگلیسی)",
      sku: "SKU",
      sku_message: "کد انبار محصول",
      mpn: "MPN",
      mpn_message: "کد محصول سازنده",
      status: "وضعیت",
      external_link: "لینک خارجی",
      brand: "برند",
      brand_placeholder: "برند محصول مانند اپل و ...",
      warranty: "گارانتی",
      is_original: "این کالا اصل (اورجینال) است؟",
      is_original_message:
        "اگر اصل بودن محصول را تایید نکنید بدج غیر اصل برای محصول نشان داده خواهد شد.",
      return_warranty: "این محصول چند روز ضمانت بازگشت کالا دارد؟",
      warehouse_section: "انبارداری و تولید",
      conditions_section: "شرایط محصول",
      warranty_section: "گارانتی و ارسال",

      unit: "واحد محصول",
      unit_message:
        "درصورت نیاز واحد دلخواه وارد نمایید. مانند: کلیوگرم، متر و ...",

      condition: "وضعیت محصول در فروشگاه شما",
      condition_message:
        "لطفا وضعیت این محصول را از نظر نو یا دست دوم بودن انتخاب کنید.",

      unit_section: "واحد محصول",
      unit_float: "مقدار اعشاری برای واحد (به زودی)",
      unit_float_hint:
        "برای مثال کاربر می تواند مقدار 3 کیلوگرم میوه سفارش بدهد اما مقدار ارسالی برای مشتری با این مقدار کمی فرق دارد.",
      unit_float_message:
        "درهنگام پردازش سفارش مقدار واقعی ممکن است با مقدار سفارش داده شده متفاوت باشد، سیستم هزینه این تفاوت را به صورت خودکار محاسبه کرده و به عنوان طلب یا بدهی مشتری برای وی ثب می نماید تا در سفارش بعدی اعمال گردد.",
    },

    /** {@see ProductEditRatingsProsCons} **/
    rating_pros_cons: {
      title: "نظر سنجی",
      message:
        "لیست ویژگی های محصول که کاربران می توانند به آن ها امتیاز دهند را وارد نمایید. وجود مواردی همچون موارد پیشنهاد داده شده، برای هر کالا و خدماتی امتیاز محسوب می شود. (حداکثر 5 مورد)",
      rating_input: "موارد نظرسنجی",
      rating_input_message: "شما می توانید 5 مورد برای نظر سنجی اضافه نمایید.",
      rating_input_placeholder:
        "سوال نظرسنجی خود را اینجا بنویسید...و enter را فشار دهید!",

      item_unit: "مورد",

      pros_title: "مزایا",
      pros_message: "ویژگی های محصول را وارد نمایید. (حداکثر 5 مورد)",
      pros_input_title: "عنوان ویژگی",
      pros_input_value: "مقدار برای ویژگی",
      pros_group: "مزایای محصول",
      pros_group_messages: "مزایای کلیدی محصول",

      cons_title: "معایب",
      cons_message: "ویژگی های منفی محصول را وارد نمایید. (حداکثر 5 مورد)",
      cons_input_title: "عنوان عیب",
      cons_input_value: "مقدار برای عیب",
      cons_group: "معایب محصول",
      cons_group_messages: "معایب اصلی محصول",

      select_from_list: "انتخاب از لیست",

      suggestion_rating: [
        "کیفیت ساخت",
        "ارزش خرید به نسبت قیمت",
        "نوآوری",
        "امکانات و قابلیت ها",
        "سهولت استفاده",
        "طراحی و ظاهر",
        "عملکرد قابل اعتماد",
        "پشتیبانی مشتری مؤثر",
        "زمان تحویل رضایت بخش",
        "محصول با توضیحات مطابقت دارد",
        "ماندگار و طولانی مدت",
        "اقتصادی",
        "بسته بندی جذاب",
        "طراحی نوآورانه",
        "دوستدار محیط زیست",
        "دستورالعمل/راهنمای کافی",
        "به انتظارات رسید",
        "رابط کاربری دوستانه",
        "بازده بالا",
        "خدمات پس از فروش عالی",
        "قابلیت های چند منظوره",
        "قیمت گذاری رقابتی",
        "دسترسی به قطعات یدکی/لوازم جانبی",
        "برند قابل اعتماد",
        "استفاده امن",
        "خدمات سریع و دقیق",
      ],

      notifications: {
        add_rating_success: `گزینه  {rating_name} قابل ارزیابی کاربران افزوده شد.`,
        delete_rating_success: `گزینه  {rating_name} قابل ارزیابی کاربران حذف شد.`,

        add_pros_success: "ویژگی محصول افزوده شد.",
        delete_pros_success: "ویژگی محصول حذف شد.",

        add_cons_success: "عیب محصول افزوده شد.",
        delete_cons_success: "عیب محصول حذف شد.",
      },
    },

    /** {@see ProductEditSpec} **/
    edit_spec: {
      title: "مشخصات",
      sub_title:
        "به کمک این گزینه می توانید مشخصات کالای دیگر را برای این کالا وارد نمایید.",

      import_action: "وارد کردن",
      group_input_header: "افزودن تیتر گروه",
      item_title_header: "افزودن مشخصه",
      group_input: "تیتر گروه",
      group_input_message: "تیتر را وارد نمایید.",
      group_add_action: "افزودن تیتر",

      item_title_input: "عنوان",
      item_title_input_message: "عنوان مشخصه را وارد نمایید.",

      item_value_input: "مقدار",
      item_value_input_message: "مقدار مشخصه را وارد نمایید.",

      add_item_action: "افزودن مشخصه",

      dialog: {
        title: "وارد کردن مشخصات",
        code_input: "کد محصول",
        code_input_message: "کد محصول: P0000...",
        spec_view_title: "مشخصات محصول انتخاب شده",
        set_spec_action: "بارگذاری مشخصات",
      },
      notifications: {
        enter_group_title_error: "مقدار تیتر را وارد نمایید",
        enter_item_title_and_value_error: "عنوان و مقدار مشخصه را وارد نمایید",
        spec_saved_success: "مشخصات محصول ذخیره شد.",
      },
    },
    /** {@see ProductEditImages} **/
    edit_images: {
      title: "تصویر اصلی",
      main_image_input_nodata: "تصویر محصول را آپلود نمایید.",
      main_image_input_message: "این تصویر در لیست محصولات نمایش داده می شود.",
      preview: "نمایش در لیست محصولات",
      image_style: "سبک تصویر",
      background_is_white: "پس زمینه سفید",
      background_is_white_msg: "آیا تصویر با پس زمینه سفید است؟",
      images: {
        title: "گالری تصاویر محصول",
        sub_title:
          "تصاویر محصول، مشترک میان تمام تنوع های محصول را در این بخش بارگذاری نمایید.",
      },
      video: {
        title: "ویدئو",
        sub_title:
          "ابتدا ویدیوی محصول خود را در یوتیوب آپلود کنید و سپس آدرس ویدیو یا شناسه ویدیو را در اینجا قرار دهید.",
      },
    },
    /** {@see ProductEditPrice} **/
    pricing: {
      edit_price: "قیمت گذاری",
      price_input: "قیمت",
      currency_input: "واحد ارزی",
      currency_input_messages: "قیمت بر اساس این ارز محاسبه می شود.",
      commission_input: "کمیسیون",
      commission_message:
        "این فقط به قیمت اضافه می کند و به محاسبه مالیات سفارشات اضافه نمی کند. این گزینه فقط برای موارد خاص مانند عمده فروشگان کاربرد دارد. اگر شما یک عمده فروش نیستید این گزینه را خالی رها کنید. درصد مالیات را در حسابداری > مالیات تنظیم کنید.",
      add_commission_action: "افزودن کمیسیون یا ارزش افزوده",

      price_label_input: "برچسب قیمت",
      price_label_message:
        "افزودن اطلاعات بیشتر به قیمت. ، مانند ( $1.5/Fl Oz ). موارد استفاده: سوپرمارکت ها و کالاهای پر مصرف.",
      add_price_label_action: "افزودن برچسب قیمت",
      discount_input: "تخفیف",
      discount_input_message: "میزان تخفیف",
      has_discount_period_input: "آیا این تخفیف در بازه زمانی خاصی اعمال گردد؟",
      discount_timespan: "دوره تخفیف را وارد نمایید.",
      start_input: "شروع",
      end_input: "پایان",
      start_input_placeholder: "زمان شروع تخفیف را انتخاب نمایید",
      end_input_placeholder: "زمان پایان تخفیف را انتخاب نمایید",
      independent_price: "قیمت گذاری تنها برای این تنوع",
      same_price: "قیمت گذاری برای محصول اصلی",
      variant_pricing_message:
        "با انتخاب این گزینه قیمت این تنوع از کالا مستقل از کالای اصلی قابل تعیین خواهد بود.",
    },
    /** {@see ProductEditInputs} **/
    inputs_edit: {
      title: "فرم ورودی اطلاعات خریدار محصول",
      sub_title:
        "شما می توانید برای هر محصول یک فرم ورود اطلاعات ایجاد نمایید، به این ترتیب خریداران در هنگام خرید محصول اطلاعاتی را برای شما ارسال می نمایند. برای مثال این اطلاعات میتواند نامی برای حک بر روی یک سنگ باشد.",
      message_input: "پیغام برای کاربر",
      message_input_message: "این پیام هنگام خرید به کاربر نشان داده می شود.",
      inputs_form: "ساختار اطلاعات دریافتی (ورودی)",
    },

    /** {@see ProductEditExtra} **/
    extra_edit: {
      physical: {
        title: "اطلاعات ارسال کالا",
        sub_title:
          "هزینه و زمان آماده سازی بر اساس اطلاعات این بخش محاسبه می گردد. دقت نمایید اطلاعات را مطابق واحدهای انتخابی برای فروشگاه (وزن، ابعاد، فاصله) وارد نمایید..",
      },
      notifications: {
        save_title: "ثبت اطلاعات",
        save_msg: "مشخصات کالا به روز شد.",
      },
    },

    variants: {
      not_available:
        "در حال حاضر امکان انتخاب تنوع برای این نوع کالا وجود ندارد.",
    },

    delete_product: {
      title: "حذف محصول",
      message: `آیا می خواهید این کالا <b>{product_title}</b> را حذف نمایید؟`,
    },
  },

  /** {@see ProductAdminPage} **/
  product_admin: {
    products_list: "لیست محصولات",
    product: "محصول",

    menu: {
      edit: "ویرایش",
      review: "نقد و بررسی",
      orders: "سفارشات",
      inventory: "موجودی",
      dashboard: "داشبورد",
      back_to_products: "محصولات",
      drop_shipping: "دراپ شیپینگ",
    },

    /** {@see ProductDashboard} **/
    dashboard: {
      /** {@see ProductInfoWidget} **/
      info: {
        title: "مشخصات",
        title_small: "محصول",
        category: "دسته بندی محصول",
        link: "لینک محصول",
        type: "نوع",
        inputs: "اطلاعات ورودی",
        outputs: "اطلاعات خروجی",
        user_data_form: "فرم اطلاعات خریدار",
      },
      /** {@see ProductActiveOrdersWidget} **/
      orders: {
        title: "سفارشات",
        title_small: "پردازش نشده",
        physical_orders_title: "سبدهای خریدی که این کالا در آن ها وجود دارد",
        send_30days_title: "تعداد ارسال در 30 روز اخیر",
        downloads_30days_title: "تعداد دانلودها در 30 روز اخیر",
        virtual_orders_title: "سفارشات این کالا که در انتظار تکمیل هستند",
      },

      /** {@see ProductInventoryWidget} **/
      inventory: {
        title: "موجودی",
        title_small: "انبار",
        total_sell: "تعداد کل فروش",
        total_sell_today: "فروش امروز",
        total_sell_30days: "فروش ۳۰ روز اخیر",
        chart: {
          labels: ["موجودی", "فروش"],
        },
        subscribers_title: "مشترکین",
        subscribers_title_small: "مجموع سفارشات مشترک شده",
      },

      /** {@see ProductFinanceWidget} **/
      finance: {
        title: "مالی",
        title_small: "گزارش خرید ۱ ماه اخیر",
        select_mode_title: "نمایش بر اساس",
        modes: {
          sell: "فروش",
          payment: "پرداخت",
          discount: "تخفیف",
        },
        currency_select_title: "قیمت بر اساس ارز انتخابی",
        sell_today: "فروش امروز",
        product_price: "قیمت محصول",
        currency_unit: "واحد ارزی",
        sell_30days: "فروش 30 روز",
        sell_daily: "مقدار فروش روزانه",
        sell_yesterday: "فروش دیروز",
      },

      /** {@see ProductSurveyWidget} **/
      survey: {
        title: "امتیاز محصول",
        title_small: "گزارش رضایت خریداران",
        total_participation: "تعداد کل مشارکت",
        today_participation: "مشارکت امروز",
        last7days_participation: "مشارکت هفت روز اخیر",
        chart: {
          participate: "مشارکت",
          participate_title: "تعداد مشارکت",
          score: "امتیاز",
        },
      },

      /** {@see ProductInformWidget} **/
      inform: {
        title: "انتظارات مشتریان",
        title_small: "در انتظار تخفیف یا موجود شدن",
        message:
          "می توانید کاربرانی که در انتظار این محصول هستند را از موجود شدن کالا و یا حراج آن با خبر سازید.",
        waiting_for_auction: "منتظر حراج کالا.",
        waiting_for_available: "منتظر موجود شدن کالا.",
        unit: "نفر",
      },
    },

    /** {@see ProductInventoryPage} **/
    inventory: {
      /** {@see ProductVariantsList} **/
      variants: {
        inventory_list: "لیست موجودی",
        add_variant: "افزودن تنوع محصول",

        title: "تعداد موجودی کالا / لیست تنوع کالا",
        sub_title:
          "در صورتی که این کالا بیش از یک تنوع دارد، آن ها را در این بخش وارد نمایید. شما می توانید میزان موجودی، قیمت و شرایط تخفیف هر تنوع رو به صورت مجزا تعریف نمایید؛ در غیر این صورت مقادیر پیش فرض کالا برای قیمت گذاری اعمال خواهد گردید.",
        add_action: "افزودن تنوع",
        count_input: "موجودی",
        count_input_action: "ثبت موجودی کالا",
        management_title: "مدیریت موجودی و تنوع کالا",
        add_title: "افزودن تنوع کالا",
        edit_title: "ویرایش تنوع کالا",
        notifications: {
          add_success: "تنوع محصول اضافه گردید.",
          delete_success: "تنوع محصول حذف گردید.",
          save_product_inventory_success: "موجودی کالا ذخیره گردید.",
        },
      },

      /** {@see VirtualItemsList} **/
      variant_item: {
        price: "قیمت",
        same_as_product: "مشابه محصول اصلی",
        in_stock: "موجودی انبار",
        delete_dialog: {
          title: "حذف تنوع کالا",
          message: "آیا می خواهید این دسته از کالا را حذف نمایید؟",
        },
      },
      /** {@see ProductVariantAddEdit} **/
      variant_add_edit: {
        title: "تعریف تنوع محصول",
        message: "شماره یکتای نوع محصول",
        active_input: "آیا این تنوع فعال باشد؟",
        sku: "SKU",
        sku_tips: "کد انبارداری محصول.",
        mpn: "MPN",
        mpn_tips:
          "کد محصول که توسط تولید کننده بر روی بسته بندی محصول درج می گردد.",
        variant_variable: "مشخصات این نوع",
        pricing: "قیمت گذاری",
        has_pricing_input: "آیا قیمت گذاری متفاوتی از محصول اصلی دارد؟",
        inventory: "موجودی",
        inventory_unit: "عدد",
        delivery_info: "مشخصات ارسال",
        images: "تصاویر اختصاصی این نوع",
        images_message:
          "پس از ذخیره سازی این تنوع قادر به افزودن تصویر در اینجا خواهید بود.",
      },
    },

    /** {@see ProductAdminEditArticle} **/
    edit_article: {
      menu: {
        tags: "تگ ها",
        article: "مطلب",
      },
    },
  }, // product_admin

  /** {@see ProductExtraPhysicalForm} **/
  product_extra_physical: {
    weight: "وزن کالا",
    weight_unit: "کیلوگرم",
    size: "ابعاد کالا",
    dimension: "سانتی متر",
    width: "عرض",
    length: "طول",
    height: "ارتفاع",
    lead_time_title: "مدت زمان آماده سازی",
    lead_time: "زمان آماده سازی",
    lead_time_dimension: "ساعت",
    bulk_action: "تغییر فله ای",
    bulk_action_input: "به روز رسانی تمام تنوع ها",
    bulk_action_msg:
      "زمان بسته بندی و آماده سازی محصول را برای همه تنوع ها تنظیم کنید.",
  },

  /** {@see ProductImagesList} **/
  product_images_list: {
    upload_button: "تصویرهای بیشتر محصول",
    upload_an_image: "یک تصویر انتخاب نمایید.",
    notifications: {
      update_sort_success: "ترتیب تصاویر ذخیره گردید",
      delete_image_title: "حذف تصویر محصول",
      delete_image_success: "تصویر با موفقیت حذف شد",
    },
  },

  /** {@see ProductVariantsView} **/
  variants_view: {
    prices: "قیمت ها",
    inventory: "موجودی انبار",
    discount: "تخفیف",
  },

  /** {@see GiftCardTypeEdit} **/
  gift_card_type_edit: {
    title_input: "عنوان",
    color_input: "رنگ کارت",
    charge_input: "شارژ اولیه",
    charge_input_hint: "شارژ اولیه هر کارت",
    currency_input: "واحد ارزی",
    currency_input_message: "تنها برای خرید با این ارز",
    lifetime_input: "مدت اعتبار (ماه)",
    lifetime_input_message:
      "مدت اعتبار کارت های صادر شده بر اساس ماه از تاریخ صدور",
    card_image_input: "تصویر کارت",
    notifications: {
      create_success: "کارت ایجاد گردید",
      update_success: "کارت به روز رسانی شد",
    },
  },

  /** {@see AdminShopLogisticsWarehouseEditor} **/
  shop_warehouse_edit: {
    title: "افزودن انبار",
    message: "آدرس و مشخصات انبار خود را جهت محاسبه هزینه ارسال وارد نمایید.",
    name_input: "نام انبار",
    address: "آدرس",
    name_input_message: "یک نام مستعار برای انبار خود وارد نمایید.",
    person_name: "نام مسئول انبار",
    phone_number: "شماره تماس",
    map_title: "آدرس انبار فروشگاه",
    confirm_action: "تایید انبار",
    address_name: "انبار",
    notifications: {
      success_save: "تغییرات با موفقیت ثبت گردید.",
    },
  },

  /** {@see AdminShopLogisticsWarehouseInventoryList} **/
  inventory_list: {
    search_input: "جستجو در محصولات...",
    search_input_title: "جستجو در میان کالاهای فروشگاه",
    apply_filter: "اعمال فیلتر",
    inventory: "لیست موجودی انبار",
    export: "خروجی اکسل",
    import: "واردکردن موجودی با فایل",
    bulk_price: "تغییر قیمت کلی",
    bulk_discount: "اعمال تخفیف کلی",
    category_filter_msg:
      "⚡ برای همه زیرمجموعه ها و محصولات آن ها اعمال می شود!",

    table: {
      waiting: "در حال دریافت اطلاعات... لطفا منتظر بمانید",
      open_state: "فعال",
      close_state: "غیرفعال",
      image: "تصویر",
      product: "نام محصول",
      code: "کد محصول",
      sku: "SKU",
      mpn: "MPN",
      original: "اصل",
      status: "وضعیت",
      in_stock: "موجودی",
      edit: "تغییر موجودی",
    },
    bulk_price_dialog: {
      title: "تغییر کلی > قیمت",
      message:
        "توجه: مقدار زیر به صورت درصدی بر روی قیمت کلیه محصولات فروشگاه شما اعمال خواهد شد. همچنین مقادیر محاسبه شده قیمت به صورت هوشمند به نزدیکترین عدد رند بر اساس ارز انتخابی تبدیل خواهند شد. در وارد کردن مقادیر دقت نمایید.",
      check: "تغییرات قیمت را تایید می کنم.",

      add_percent_tab: "تغییر درصدی",
      add_constant_tab: "تغییر قیمت ثابت",
      ending_tab: "گرد کردن",
    },
    bulk_discount_dialog: {
      title: "تغییر کلی > تخفیف",
      message:
        "توجه: مقدار زیر به صورت درصدی بر روی تخفیف کلیه محصولات فروشگاه شما اعمال خواهد شد. همچنین مقادیر محاسبه شده تخفیف به صورت هوشمند به نزدیکترین عدد رند بر اساس ارز انتخابی تبدیل خواهند شد. در وارد کردن مقادیر دقت نمایید.",
      check: "تغییرات تخفیف را تایید می کنم.",
    },
    notifications: {
      save_success: "موجودی کالا ذخیره گردید.",
    },
  },

  /** {@see ProductSpecView} **/
  spec_view: {
    auto_save_input: "ذخیره خودکار",
  },

  /** {@see TimeProgressBar} **/
  time_progress_bar: {
    title_before_start: "مانده تا شروع",
    title_between_start_end: "مانده تا پایان",
    title_after_end: "پایان یافته",
    title_no_start_end: "بدون بازه زمانی",
  },

  /** {@see GeoMap} **/
  geo_map: {
    views: "بازدید کنندگان",
    views_unit: "نفر",
    product_views: "بازدید محصول",
    buys: "خریدها",
    buys_unit: "سفارش",
    baskets: "سبد خرید",
    added_items: "افزودن محصول",
    removed_items: "حذف محصول",
  },

  /** {@see FaqRequestsList} **/
  faq_list: {
    table: {
      nodata: "سوالی یافت نشد.",
      more_data_action: "سوالات بیشتر..",
      user: "کاربر",
      tag: "تگ",
      question: "سوال",
      officer: "مسئول",
      answer: "پاسخ",
      created_at: "تاریخ",
      priority: "اولویت",
      edit: "ویرایش",
    },
    dialog: {
      add_new_action: "ثبت سوال جدید",
      edit_action: "ویرایش سوال و جواب",
      question_input: "سوال",
      question_input_placeholder: "متن سوال را وارد نمایید..",
      link_input: "لینک",
      link_input_placeholder: "در پاسخ می توانید به یک لینک ارجاع دهید.",
      answer_input: "جواب",
      answer_input_placeholder: "متن جواب را وارد نمایید..",
      tag_input: "تگ (عنوان دسته بندی)",
      tag_input_placeholder: "یک عنوان کوتاه وارد نمایید",
      priority_input: "اولویت: (0 تا 10)",
    },
    delete_alert: {
      title: "حذف سوال",
      message: "آیا می خواهید این سوال را حذف نماید؟",
      action: "حذف",
    },
    notifications: {
      send_success: "جواب شما با موفقیت ثبت گردید.",
      delete_success: "سوال حذف گردید.",
    },
  },

  /** {@see ContactMessagesList} **/
  contact_messages_list: {
    load_more_action: "پیام های بیشتر..",

    table: {
      nodata: "سوالی یافت نشد.",
      user: "کاربر",
      message: "متن پیام",
      category: "دسته",
      officer: "مسئول",
      answer: "جواب",
      created_at: "تاریخ",
      contact: "تماس",
      edit: "ویرایش",
    },

    dialog: {
      title: "پاسخ به پیام ارسالی",
      category: "دسته بندی",
      user_name: "نام",
      email: "ایمیل",
      phone: "شماره تماس",
      message: "متن پیام",
      status: "وضعیت پاسخ دهی",
      status_answered: "پاسخ داده شده است",
      status_waiting: "در انتضار پاسخ",
      answer_input: "متن پاسخ",
      mail_input: "ارسال ایمیل",
      mail_input_message:
        "در صورت فعال بودن، ایمیلی حاوی پاسخ شما برای کاربر ارسال خواهد شد.",
    },
    delete_alert: {
      title: "حذف پیام",
      message: "آیا می خواهید این پیام را حذف نماید؟",
      action: "حذف",
    },
    notifications: {
      send_success: "درخواست شما با موفقیت اعمال گردید.",
      delete_success: "پیام حذف گردید.",
    },
  },

  /** {@see AdminShopCampaignPage} **/
  campaign: {
    title: "کمپین",
    menu: {
      setting: "تنظیمات",
      return: "بازگشت",
      dashboard: "داشبورد",
      links: "لینک ها",
      landing: "لندینگ",
      ads: "تبلیغات",
      finance: "مالی",
    },
    /** {@see AdminShopCampaignPage_Dashboard} **/
    dashboard: {
      title: "داشبورد",
      status: "وضعیت کمپین",
      sessions: "ورود کاربران",
      links_overview: "وضعیت لینک های کمپین",
      orders: "سفارشات",
      performance: "بازدهی کمپین",
      links_funnel: "بازدهی به تفکیک لینک ها",
      no_links:
        "داده به میزان کافی وجود ندارد. حداقل یک لینک برای کمپین خود بسازید.",
      social: "ورودی از شبکه های اجتماعی",
      conversion_over_time: "نرخ تبدیل در طی زمان",
      total_campaign_sell: "مجموع فروش با این کمپین",
    },
    /** {@see AdminShopCampaignPage_Finance} **/
    finance: {
      title: "گزارش مالی",
      campaign_revenue: "درآمد کمپین",
      total_revenue: "مجموع درآمد کمیپین",
      links_revenue: "درآمد از لینک های کمپین",
      payments_over_time: "میزان فروش در طی زمان",
      all_links: "همه لینک ها",
    },
    /** {@see AdminShopCampaignPage_Landing} **/
    landing: {
      empty_message: "یک صفحه   برای کمپین خود انتخاب نمایید!",
      set_landing: "افزودن صفحه لندینگ",
      create_landing: "ساخت صفحه لندینگ جدید",
    },

    /** {@see AdminShopCampaignPage_Links} **/
    links: {
      title: "لینک های کمپین",
      url_input_message: "آدرس صفحه مورد نظر را وارد نمایید",
    },

    /** {@see AdminShopCampaignPage_Setting} **/
    setting: {
      menu: {
        config: "پیکربندی",
        timespan: "بازه زمانی",
        banner: "بنر",
        Notification: "نوتیفیکیشن",
      },
      general_setting: {
        title: "تنظیمات کلی کمپین",
        sub_title: "نام، صفحه لندینگ و کد تخفیف",

        name_input: "نام کمپین",
        name_input_hint: "یک نام برای کمپین خود بگذارید",
        enable_input: "آیا کمپین فعال است؟",
        page_input: "صفحه لندینگ",
        discount_code_input: "کد تخفیف",
        limit: "سقف تخفیف",
        max_count: "تعداد",
        max_count_unit: "عدد",
        start: "شروع",
        end: "پایان",
        notification_enable_input: "نوتیفیکیشن فعال است؟",

        landing_page: "صفحات لندینگ",
        discount_code: "کد تخفیف",

        auto: "کمپین پیشفرض",
        auto_message: "کمپین پیشفرض که در فروشگاه شما فعال خواهد بود",
      },
      time_setting: {
        title: "بازه زمانی",
        sub_title: "تاریخ و ساعت شروع / تاریخ و ساعت پایان",
        start_input: "شروع",
        start_input_placeholder: "زمان شروع کمپین را انتخاب نمایید",
        end_input: "پایان",
        end_input_placeholder: "زمان پایان کمپین را انتخاب نمایید",
      },
      banner_setting: {
        title: "بنر بالای فروشگاه",
        sub_title: "محل نمایش: بالای صفحه فروشگاه",

        message_input: "متن پیام",
        message_input_placeholder: "جشنواره ویژه...",
        message_input_hint: "متن پیام بنر بالای فروشگاه",
        bg_image_input: "آدرس تصویر پس زمینه",
        bg_image_input_hint: "آدرس کامل تصویر پس زمینه",
        repeat_pattern: "تکرار الگو",
        simple: "ساده",
        dark_input: "تم تیره؟",
        icon_input: "آیکون",
        icon_input_hint: "نام آیکون متریال دیزاین یا fontawsom : fas fa-star",
        anim_input: "آدرس انیمیشن",
        anim_input_message: "آدرس فایل انیمیشن lottie",
        preview: "پیش نمایش",
        preview_update_action: "به روز رسانی پیش نمایش",
        bg_color: "رنگ پس زمینه",
        icon_bg: "رنگ پس زمینه آیکون",
      },
      notifications: {
        title: "نوتیفیکیشن",
        sub_title: "نوتیفیکیشن ایجاد کنید و آن را به کمپین خود پیوند دهید.",
        update_success: "کمپین شما به روز گردید.",
        action_button: "کلید",
        background_color: "رنگ پس زمینه",
        text_color: "رنگ نوشته",
        action_color: "رنگ کلید",
        action_text_color: "رنگ متن کلید",
        notification_image: "تصویر نوتیفیکیشن",
        notification_bg: "تصویر پس زمینه نوتیفیکیشن",
        show_preview: "پیش نمایش",
        persistence: "ماندگار",
        persistence_message:
          "آیا با هر دفعه ورد خریدار به صفحه شما، مجدد نمایش داده شود؟",
        radius: "شعاع گوشه ها",
        show_delay: "تاخیر نمایش",
      },
    },
  },

  /** {@see AddCategory} **/
  add_category: {
    title_edit: "ویرایش دسته بندی",
    title_update: "افزودن دسته بندی به لیست",
    menu: {
      delete: "حذف دسته",
      filter: "فیلترها",
      settings: "تنظیمات",
      back: "بازگشت",
    },
    title_input: "عنوان دسته*",
    title_input_error: "یک عنوان برای دسته انتخاب نمایید",
    name_input: "نام دسته (انگلیسی)*",
    name_input_error: "یک نام یکتا برای دسته انتخاب نمایید",
    description_input: "توضیحات دسته",
    description_input_message: "توضیحات مختصری در مورد دسته وارد نمایید..",
    parent_input: "دسته پدر",
    parent_input_message: "این دسته در صفحه اصلی فروشگاه نمایش داده می شود.",
    image_input: "تصویر دسته",
    image_input_placeholder: "تصویری برای دسته انتخاب نمایید",
    edit_action: "ویرایش دسته",
    add_action: "افزودن دسته",
    back_action: "بازگشت",
    no_category: "بدون دسته بندی",
    star: "ویژه",

    filter: {
      title: "فیلتر های دسته بندی",
      sub_title:
        "مدیریت فیلترها و دسته بندی های قابل اعمال بر روی محصولات این دسته.",
      message:
        "عنوان مشخصه فنی مشترک میان محصولات این دسته را در کادر زیر وارد نموده و ذخیره نمایید. پس از ذخیره نمودن، لیست دسته بندی های فیلتر به همراه محتویات هر دسته نشان داده خواهد شد. مقادیر رنگ، وزن، حجم، برند و ... به صورت خودکار از تنوع محصولات استخراج می گردد.",
    },
    delete_alert: {
      title: "حذف دسته بندی",
      message: "آیا می خواهید دسته بندی {title} را حذف نمایید؟",
      action: "حذف",
    },
    notifications: {
      add_success: "دسته جدید افزوده شد.",
      edit_success: "دسته ویرایش شد.",
      delete_success: "دسته {title} حذف شد.",
    },
    /** {@see CategoriesManagementFilter} **/
    edit_filter: {
      spec_input: "لیست عناوین مشخصه های فنی",
      spec_input_message: "لیست عناوین مشصه های فنی قابل فیلتر کردن",
      price: "قیمت",
      min: "حداقل",
      max: "حداکثر",
      suggested_list: {
        brand: "برند",
        colors: "رنگ",
        styles: "طرح",
        volumes: "حجم",
        weights: "وزن",
        packs: "تعداد در بسته",
        types: "نوع",
      },
      notifications: {
        edit_success: "دسته ویرایش شد.",
      },
    },
  },

  /** {@see AppsList} **/
  apps_list: {
    nodata: "اپلیکیشنی بر روی فروشگاه شما نصب نیست.",
    inactive: "غیر فعال",
    my_apps: "اپلیکیشن های من",
    app_store: "نصب اپلیکیشن",
  },

  /** {@see AddShop} **/
  add_shop: {
    menu: {
      shop_title: "عنوان فروشگاه",
      shop_name: "نام انگلیسی",
      description: "توضیحات",
      contact: "اطلاعات تماس",
      image: "تصویر",
    },
    title_input: "عنوان",
    title_input_tips: "نام فروشگاه، برند و یا شرکت خود را وارد نمایید.",
    active_message: "فروشگاه با وضعیت فعال برای عموم در دسترس خواهد بود.",
    language_input_message: "زبان فروشگاه را انتخاب نمایید.",
    name_input: "نام",
    name_input_message: "یک نام با حروف لاتین برای فروشگاه خود وارد نمایید.",
    name_input_tips:
      "نام لاتین، حتما از فاصله و حروف الفبای انگلیسی استفاده نمایید، درصورت عدم استفاده از زبان انگلیسی ممکن است نام فروشگاه به درستی نشان داده نشود.",
    description_input: "توضیح درباره فروشگاه",
    description_input_message: "توضیح کوتاه در رابطه با کسب و کارتان بنویسید.",
    address_input: "آدرس فروشگاه",
    address_input_message: "آدرس دقیق محل فروشگاه را وارد نمایید.",

    phone_input: "شماره تلفن",
    phone_input_message: "شماره تماس برای مشتریان",
    phone_input_tips:
      "شماره تلفن بین المللی، شماره تماس به همراه کد کشور وارد نمایید. از این شماره همچنین برای نمایش اطلاعات در جستجوی گوگل استفاده می گردد.",
    email_input: "ایمیل",
    email_input_message: "آدرس ایمیل برای مشتریان",
    locality_input: "محل",
    locality_input_message: "محل فروشگاه",
    region_input: "ایالت یا استان",
    region_input_message: "ایالت یا استانی که در آن فعالیت می نمایید",
    country_input: "کشور",
    country_input_message: "کشور محل فعالیت فروشگاه",
    postal_code_input: "کد پستی",
    postal_code_input_message: "کد پستی فروشگاه",
    image_input: "تصویر فروشگاه",

    map: {
      title: "آدرس فروشگاه",
      confirm: "ثبت آدرس",
      address: "آدرس",
      receptor: "فروشگاه",
    },

    create_shop_action: "ایجاد فروشگاه",
    update_shop_action: "به روز رسانی",

    notifications: {
      copy_success: "آدرس فروشگاه کپی شد.",
      name_available: `این نام ({name}) آزاد است.`,
      add_success: `فروشگاه {title} ایجاد شد.`,
      edit_success: "فروشگاه ویرایش شد.",
    },
  },

  /** {@see VirtualItemsList} **/
  virtual_items_list: {
    add_virtual_item: "افزودن آیتم مجازی",
    add_virtual_item_desc:
      "برای فروش محصولات مجازی بایستی آن ها را در این بخش اضافه نمایید. تعداد موجودی آیتم های کالای مجازی برابر با تعداد آیتم های آزاد در این بخش می باشد. بعد از تکمیل خرید و پرداخت توسط خریدار، اطلاعات آیتم خریداری شده برای ایشان ارسال خواهد شد.",
    filter_action: "اعمال فیلتر",
    not_processed: "سفارشات پردازش نشده",
    title: "لیست آیتم ها",
    vew_order: "مشاهده سفارش",

    table: {
      nodata: "هیچ آیتمی وجود ندارد",
      product: "محصول",
      data: "مقدار",
      status: "وضعیت",
      user_message: "فرم اطلاعات",
      updated_at: "تاریخ",
      order: "سفارش",
      delete: "حذف",
    },
    notifications: {
      delete_success: "آیتم با موفقیت حذف شد.",
    },
  },

  /** {@see AddVirtualItem} **/
  add_virtual_item: {
    title_edit: "ویرایش مقادیر",
    title_add: "افزودن آیتم به محصول",
    sub_title: "ایجاد و ویرایش آیتم های محصولات دیجیتال",
    message:
      "مدیر فروشگاه می تواند مقادیری را بعد از خرید و پرداخت کاربر به وی نشان دهد. این مقادیر بایستی در فرم زیر وارد گردد. ساختار این فرم در بخش ویرایش کالا > ویرایش اطلاعات خروجی تنظیم می گردد.",
    edit_outputs: "ویرایش فرم خروجی",
    notifications: {
      edit_success: "آیتم ویرایش گردید.",
      add_success: "آیتم به لیست افزوده شد.",
    },
  },

  /** {@see ShopProcessCenterVirtualOrderPage} **/
  virtual_process_center: {
    title: "مرکز پردازش",
    sub_title: "پردازش سفارش",
    virtual_product: "کالای مجازی",

    menu: {
      report: "گزارش",
      timeline: "جدول زمانی",
      order: "سفارش",
    },

    /** {@see OrderVirtualListWidget} **/
    list_widget: {
      title: "مشخصات سفارش",
      product_name: "نام محصول",
    },

    /** {@see VirtualOutputsWidget} **/
    outputs_widget: {
      title: "اطلاعات خروجی",
      table: {
        title: "عنوان",
        value: "مقدار",
      },
      tips: [
        "پس از انجام و تکمیل درخواست مشتری، کلید تایید انجام سفارش را زده تا اتمام مراحل سفارش را به خریدار اعلام نمایید.",
        "پس از تایید سفارش امکان اعمال تغییرات در اطلاعات ورودی توسط خریدار وجود نخواهد داشت.",
      ],
      alerts: {
        order_completed_by_admin: "سفارش توسط شما اجرا و تایید شده است.",
        order_completed_by_buyer: "دریافت سفارش توسط خریدار تایید شده است.",
        waiting_for_buyer: "در انتظار تایید خریدار..",
      },
    },
  },

  /** {@see ShopProcessCenterFileOrderPage} **/
  file_process_center: {
    title: "مرکز پردازش",
    sub_title: "پردازش سفارش",
    menu: {
      report: "گزارش",
      timeline: "جدول زمانی",
      order: "سفارش",
    },
  },

  /** {@see OrderPageDashboardTemplate} **/
  process_order_page_dashboard: {
    title: "پردازش سفارشات",
    cancel_order_action: "لغو سفارش",
    open_basket_cation:
      "این سبد خرید باز است، یعنی مشتری در حال خرید بوده و سفارش خود را ارسال ننموده است.",

    reject_dialog: {
      title: "دلیل لغو سفارش",
      message:
        "دلیل رد این سفارش را از گزینه های زیر انتخاب کنید. حتما با مشتری تماس گرفته و روند لغو و بازپرداخت را به او اطلاع دهید. بازپرداخت باید در کمتر از 12 ساعت توسط شما برای مشتری انجام شود.",
      confirm_action: "لغو سفارش",
      dismiss_reject_action: "انصراف از فرایند لغو",
    },

    notifications: {
      update_status_success: "وضعیت سفارش به روز شد.",
      reject_update_success: "سفارش در وضعیت لغو قرار گرفت.",
      dismiss_reject_success: "وضعیت سفارش به حالت عادی برای پردازش تغییر کرد.",
      set_tracking_success: "کد پیگیری اراسل با موفقیت ثبت گردید.",
    },
  },

  /** {@see ShopProcessCenterPhysicalOrderPage} **/
  /** {@see ShopProcessCenterVirtualOrderPage} **/
  /** {@see ShopProcessCenterFileOrderPage} **/
  /** {@see ShopProcessCenterServiceOrderPage} **/
  process_center: {
    title: "مرکز پردازش",
    sub_title: "پردازش سفارش",
    physical_product: "کالای فیزیکی",
    menu: {
      label: "لیبل بسته",
      receipt: "فاکتور",
      back: "بازگشت",
      return: "مرجوعی",
      report: "گزارش",
      timeline: "جدول زمانی",
      inputs: "ورودی",
      order: "سفارش",
    },
    cancel_order_action: "لغو سفارش",

    /** {@see OrderPaymentWidget} **/
    payment_widget: {
      title: "پرداخت",
      checklist: [
        "مبلغ سفارش و پرداخت مشتری را بررسی نمایید.",
        "آدرس گیرنده را بررسی نمایید.",
        "در صورتی که پرداخت در محل گیرنده است از صحت اطلاعات وارد شده اطمینان حاصل نمایید.",
      ],
      action_cod_pay: "تایید پرداخت وجه توسط مشتری",
      action_dir_pay: "تایید رسید پرداخت وجه توسط مشتری",
      payment_receipt_not_uploaded_error:
        "رسید پرداخت توسط مشتری آپلود نشده است.",

      waiting_for_pay: "در انتظار پرداخت",
      processing_payment: "پردازش تراکنش",
      processing_cancel: "رد تراکنش",
      paid: "پرداخت شده",
      cod_pay_info:
        "پس از دریافت سفارش توسط مشتری امکان تایید پرداخت و تکمیل سفارش برای شما فراهم می شود.",
      dir_pay_info:
        "فیش واریزی توسط مشتری در بالا نشان داده خواهد شد. قبل از تایید سفارش صحت واریز مبلغ و اطلاعات فیش را با بانک خود چک نمایید.",

      created_date: "تاریخ ایجاد",
      pay_date: "تاریخ پرداخت",
      payment_gateway: "درگاه پرداخت",
      payment_method: "روش پرداخت",
      risk: "مقدار ریسک",
      billing_details: "جزئیات صورتحساب",

      add_transaction: "افزودن صورت حساب جدید",
      add_transactions_message:
        "شما بایستی برای این سفارش حداقل یک تراکنش ایجاد نمایید. در برخی مواقع نیاز است تا پرداخت در چند مرحله صورت گیرد. برای این کار می توانید مبلغ سفارش را به هر تعداد که می خواهید تقسیم نموده و متناسب با هر مقدار یک تراکنش ایجاد نمایید. اینکه کدام تراکنش ها را بایستی کاربر پرداخت نماید توسط شما در طی انجام کار مشخص خواهد شد.",

      add_bill_dialog: {
        title: "افزودن صورت حساب",
        message:
          "شما می توانید برای این سفارش یک یا چند صورت حساب جدید اضافه نمایید. مشتری این صورت حساب ها را دیده و متناسب با پیشرفت کار هر یک را به ترتیب پرداخت خواهد کرد.",
        amount_input: "مبلغ صورت حساب",
        action: "ثبت صورت حساب",
      },
      edit_bill_dialog: {
        title: " ویرایش صورت حساب",
        message:
          "صورت حساب هایی در وضعیت انتظار هستند را می توانید ویرایش کنید.",
        action: "ویرایش صورت حساب",
      },
      bill_cash_payment_dialog: {
        title: "ثبت پرداخت نقدی",
        message:
          "در صورتی که خریدار مبلغ این صورت حساب را به صورت نقدی یا روشی غیر از پرداخت آنلاین پرداخت کرده است، در این بخش با انتخاب یک گزینه، پرداخت وی را ثبت و تایید نمایید. در این بخش تنهادرگاه های پرداخت نقدی فروشگاه شما نمایش داده می شود. اگر چنین گزینه ای نمیبینید بایستی یک درگاه پرداخت نقدی با ارز انتخاب شده برای این سفارش در فروشگاه خود فعال نمایید.",
        action: "تایید پرداخت صورت حساب",
      },

      table: {
        title: "عنوان",
        amount: "مقدار",
        description: "توضیحات",
        info: "اطلاعات",
      },
      user_payment: "واریز خریدار",
      cod: "پرداخت در محل",
      gateway_wage: "کارمزد درگاه",
      gift_card: "کارت هدیه",
      discount_code: {
        title: "کد تخفیف",
        code: "کد",
        percent: "درصد",
        limit: "سقف",
      },
      club: {
        title: "باشگاه مشتریان",
        percent: "درصد",
        limit: "سقف",
      },
      coupon: {
        title: "کوپن",
        percent: "درصد",
        limit: "سقف",
        charge: "شارژ",
      },
      delivery: {
        title: "هزینه ارسال",
        not_paid: "پس کرایه",
      },
      samin: {
        title: "هزینه سرویس",
        description: "این مبلغ از حساب شما در کیف پول سلدان کسر گردیده است.",
        tooltip: "محاسبه با توجه به روش پرداخت",
        percent: "درصد",
      },
      affiliate: {
        title: "پورسانت همکار فروش",
        affiliate_message:
          "شما باید این مبلغ را به همکار فروشتان پرداخت نمایید. پرداخت توسط شما انجام میگیرد.",
      },
      total_price: "قیمت مجموع اقلام",
      total_items_discount: "تخفیف محصولات",
      total_price_after_offers: "قیمت مجموع بعد از اعمال پیشنهاد ویژه",
      total_order_price_before_tax: "مجموع قبل از اعمال مالیات",

      user_payment_amount: "مبلغ پرداختی خریدار",
      samin_wage: "کارمزد سلدان",
      pay_cod_dialog: {
        title: "آیا وجه سفارش را دریافت نموده اید؟",
        message:
          "در روش پرداخت در محل، بعد از اطمینان از پرداخت مبلغ کامل سفارش توسط مشتری، این گزینه را تایید نمایید.",
        confirm_action: "تایید دریافت وجه از مشتری",
      },

      pay_dir_dialog: {
        title: "آیا وجه سفارش را دریافت نموده اید؟",
        message:
          "در روش پرداخت مستقیم، بعد از اطمینان از پرداخت مبلغ کامل سفارش توسط مشتری، این گزینه را تایید نمایید. حتما مبلغ و اطلاعات رسید پرداخت را با بانک خود چک نمایید.",
        confirm_action: "تایید دریافت وجه از مشتری",
      },
      notifications: {
        pay_confirm_message:
          "پرداخت تایید می شود. <br> درگاه:  {gateway_name}  <br> تاریخ: {payment_at} ",
        pay_fail_title: "عدم پرداخت",
        pay_fail_message: "پرداخت تایید نمی شود.",
      },
    },
    /** {@see OrderBasketListWidget} **/
    basket_list: {
      checklist: [
        "بررسی موجودی کالا.",
        "در صورتی که کالا موجود نباشد بایستی مبلغ پرداخت شده برای آن سفارش به مشتری بازگردد.",
      ],
      message:
        "در صورتی که هر یک از آیتم های سفارش داده شده در انبار شما موجود نبوده یا امکان فروش آن وجود ندارد، تیک موجود در مقابل آن را از لیست زیر برداشته و بر روی کلید<b>تایید سفارش</b>کلیک نمایید.",
      action: "تایید سفارش",
      list_of_items: "لیست سبد خرید",
      apply_change_action: "اعمال تغییرات",
      cant_apply_change: "امکان اعمال تغییرات نیست",
      lottery_prize_inform:
        "مشتری شما یک محصول برنده شده است. این محصول را به همراه سفارش، ارسال نمایید.",
    },

    /** {@see OrderPreparingWidget} **/
    preparing: {
      title: "آماده سازی",
      packing_weight: "وزن بسته بندی",
      delivery_type: "روش ارسال",
      packing_size: "ابعاد بسته بندی",
      distance_warning: "از محدوده فاصله مجاز فراتر رفته است.",
      weight_warning: "از حداکثر وزن مجاز فراتر رفته است.",
      volume_warning: "بیشتر از حداکثر ابعاد قابل حمل است.",

      message:
        "درصورتی که سفارش آماده ارسال است بر روی کلید<b> سفارش آماده ارسال است</b> کلیک نمایید.",
      action: "سفارش آماده ارسال است",
      checklist: [
        "بسته بندی سفارش در جعبه به صورت استاندارد انجام گیرد.",
        "لیست موجودی کالا پرینت شده و در داخل پاکت در بسته ارسالی قرار گیرد.",
        "لیبل بسته پرینت و بر روی جعبه چسبانده شود.",
      ],
    },

    basket_items: "لیست محتویات سبد خرید",

    reject_dialog: {
      title: "انتخاب دلیل رد سفارش",
      message:
        "دلیل رد این سفارش را از میان گزینه های زیر انتخاب نمایید. حتما با مشتری تماس گرفته و وی را در جریان لغو سفارش و مراحل بازگرداندن وجه قرار دهید. بازگشت وجه بایستی در کمتر از 12 ساعت صورت گیرد.",
      confirm_action: "لغو سفارش",
      dismiss_reject_action: "انصراف از لغو سفارش",
    },
    delivered_dialog: {
      title: "آیا این سفارش به دست مشتری رسیده است؟",
      message:
        "تنها در صورتی این گزینه را تایید نمایید که از رسیدن سفارش به دست مشتری اطمینان حاصل نمایید.",
      confirm_action: "تایید دریافت توسط مشتری",
    },
    return_delivery_dialog: {
      title: "آیا ارسال این سفارش به مشکلی برخورده یا برگشت خورده است؟",
      message:
        "درصورتی گزینه بازگشت مرسوله را تایید نمایید که سفارش پس از ارسال به دلایلی بازگشت خورده و نیاز به ارسال مجدد مرسوله وجود دارد.",
      confirm_action: "تایید بازگشت مرسوله",
    },

    notifications: {
      update_status_success: "وضعیت سفارش به روزرسانی شد.",
      reject_update_success: "وضعیت لغو سفارش به روزرسانی شد.",
      dismiss_reject_success: "سفارش از حالت لغو خارج شد.",
      pay_cod_success: "پرداخت توسط مشتری در محل تایید گردید.",
      pay_dir_success:
        "پرداخت توسط پرداخت کارت به کارت یا واریز وجه تایید گردید.",
      set_tracking_success:
        "مقادیر مربوط به رهگیری سفارش با موفقیت ذخیره گردید.",
      new_bill_success: "صورت حساب جدید با موفقیت افزوده شد.",
      edit_bill_success: "صورت حساب با موفقیت به روز رسانی شد.",
      update_bill_status_success: "وضعیت صورت حساب با موفقیت تغییر کرد.",
      set_payment_in_cash_success: "پرداخت نقدی صورت حساب ثبت گردید.",
    },
    delete_bill_dialog: {
      title: "حذف صورت حساب",
      message: "آیا از حذف این صورت حساب اطمینان دارید؟",
      action: "بله، حذف شود",
    },
  },

  /** {@see AdminShopGatewayManagementPage} **/
  shop_gateway: {
    title: "درگاه",
    menu: {
      dashboard: "داشبورد",
      edit: "ویرایش",
      transactions: "تراکنش ها",
      back: "درگاه ها",
    },

    /** {@see AdminShopGatewayManagement_DashboardPage} **/
    dashboard: {
      title: "مدیریت درگاه",

      /** {@see GatewayDataWidget} **/
      gateway_data_widget: {
        title: "گزارش پرداخت از",
        title_small: "درگاه",
        chart: {
          times: "مرتبه",
          buys: "دفعات خرید",
          pays: "پرداخت موفق",
          amount_pay: "مبلغ پرداختی",
          amount_wage: "کارمزد",
        },
      },

      /** {@see GatewayInfoWidget} **/
      gateway_info_widget: {
        title: "مشخصات",
        title_small: "درگاه",
        status: "وضعیت",
        cod_transportation: "روش های ارسال با قابلیت پرداخت در محل",
        cod_transportations_error:
          "حداقل برای یک روش ارسال، امکان پرداخت در محل را فعال نمایید!",
        payment_type: "نوع پرداخت",
        cod: " پرداخت در محل",
        online: "پرداخت آنلاین",
        wage_percent: "درصد کارمزد",
        min_wage: "حداقل کارمزد",
        max_wage: "حداکثر کارمزد",
        min_amount: "حداقل مبلغ تراکنش",
        max_amount: "حداکثر مبلغ تراکنش",
        timeout: "مدت زمان اعتبار برای پرداخت",
        timeout_unit: "ثانیه",
        link: "لینک درگاه",
        your_gateway_status: "وضعیت درگاه فروشگاه",
        config_extra_info: "اطلاعات برای تنظیم درگاه",
        oauth2_button: "اتصال خودکار به {gateway}",
        fee_payment_message:
          "تمام مبلغ پرداختی توسط مشتری به حساب شما واریز میگردد. کارمزد سلدان از کیف پول شما در سلدان کم خواهد شد.",
      },
    },

    /** {@see AdminShopGatewayManagement_EditPage} **/
    edit: {
      title: "ویرایش درگاه",
      menu: {
        delete: "حذف درگاه",
      },
      edit_action: "ویرایش درگاه",
    },

    /** {@see AdminShopGatewayManagementPage_Transactions} **/
    transactions: {
      title: "تراکنش ها",
      table: {
        amount: "مقدار",
        currency: "ارز",
        livemode: "نوع تراکنش",
        status: "وضعیت",
        target_id: "سفارش",
        risk: "ریسک",
        card: "کارت",
        issued_at: "تاریخ ایجاد",
        payment_at: "تاریخ پرداخت",
      },
      live_mode: "واقعی",
      test_mode: "آزمایشی",
    },
  },

  /** {@see AddEditGatewayForm} **/
  edit_gateway: {
    public_keys: "کلید های عمومی",
    private_keys: "کلید های خصوصی (محرمانه)",
    link: "لینک سایت",
    state_title: "وضعیت درگاه پرداخت",
    gateway_status: "تنظیمات درگاه پرداخت",
    wallet: "کیف پول بلاکچین",
    developer_title: "وضعیت توسعه دهنده",
    developer_message:
      "درصورتی که درگاه وضعیت آزمایشی را پشتیبانی نماید می توانید تراکنش های آزمایشی را با فعال کردن این گزینه انجام دهید.",
    live_mode_message: "تمام تراکنش ها به صورت واقعی صورت خواهد گرفت.",

    notifications: {
      edit_success: "درگاه {gateway_name} ویرایش گردید.",
    },
    developer_setting: "تنظیمات توسعه دهنده",
  },

  /** {@see AdminGiftCardPage} **/
  gift_card: {
    title: "کارت های هدیه",
    menu: {
      edit: "ویرایش",
      new_card: "ایجاد کارت",
      list: "کارت ها",
      orders: "سفارشات",
      dashboard: "داشبورد",
      back: "کارت های هدیه",
    },

    /** {@see AdminGiftCardDashboardPage} **/
    dashboard: {
      title: "پنل مدیریت کارت هدیه",

      /** {@see GiftCardAmountWidget} **/
      amount_widget: {
        title: "پرداخت با کارت",
        title_small: "30 روز",
        chart_amount_pay: {
          y: "مبلغ",
          label: "پرداخت",
        },
        chart_buys: {
          y: "مرتبه",
          label: "خرید",
        },
        total_buy: "مقدار کل خرید",
        total_pay_30days: "مجموع مقدار پرداختی 30 روز",
        total_pay_today: "مقدار پرداختی امروز",
      },

      /** {@see GiftCardCountWidget} **/
      count_widget: {
        title: "تعداد کارت های صادر شده",
        title_small: "30 روز",
        total_cards: "تعداد کل کارت ها",
        used_cards_30days: "تعداد مصرف 30 روز",
        used_today: "تعداد مصرف امروز",
        chart: {
          new_cards: "کارت های جدید",
          used_cards: "کارت های مصرف شده",
          new_card_name: "کارت جدید",
          used_card_name: "مصرف شده",
        },
      },

      /** {@see GiftCardExportWidget} **/
      export: {
        title: "دریافت خروجی",
        cards_list: "دریافت لیست کارت ها",
        get_report: "دریافت گزارش",
      },
    }, // End of dashboard

    /** {@see AdminGiftCardManagementPage} **/
    cards: {
      title: "لیست کارت های صادر شده",
      loading_message: "در حال دریافت اطلاعات... لطفا منتظر بمانید",
      issue_to_user: "ارسال برای کاربر",
      table: {
        card_number: "شماره کارت",
        balance: "موجودی",
        paid: "مقدار مصرف شده",
        edit: "ویرایش",
        delete: "حذف",
        expire: "انقضا",
        user: "کاربر",
      },
      delete_alert: {
        title: "حذف کارت",
        message: "آیا مطمئن هستید که می خواهید این کارت را حذف نمایید؟",
        action: "حذف",
      },
      notifications: {
        delete_success: "کارت هدیه حذف گردید.",
        edit_success: "تغییرات اعمال گردید.",
        issue_success: "کارت هدیه با موفقیت برای کاربر صادر گردید.",
      },
      issue_dialog: {
        title: "ارسال کارت هدیه برای کاربر",
        action: "تایید، کارت هدیه را صادر کن",
      },
    }, // End of cards

    /** {@see GiftCardEdit} **/
    gift_card_edit: {
      title: "ایجاد کارت هدیه",
      validity: "اعتبار",
      validity_unit: "ماه",
      currency: "ارز",
      initial_balance: "شارژ اولیه",
      count: "تعداد",
      count_unit: "عدد",
      enable_input_message: "وضعیت کارتهای ایجاد شده",
      notifications: {
        create_success_title: "ذخیره",
        create_success: "تعداد {count} عدد کارت جدید ایجاد گردید",
      },
    },

    /** {@see AdminGiftCardEditPage} **/
    gift_card_edit_page: {
      title: "ویرایش کارت هدیه",
    },
  },

  /** {@see AdminDiscountCodePage} **/
  shop_discount: {
    title: "کد تخفیف",
    up_to: "تا سقف",
    menu: {
      dashboard: "داشبورد",
      orders: "سفارشات",
      back: "کدهای تخفیف",
    },

    /** {@see AdminDiscountCodeDashboardPage} **/
    dashboard: {
      title: "پنل مدیریت کد تخفیف",
      chart_amount_buy: {
        y: "مبلغ خرید {currency}",
        label: "خرید",
      },
      chart_amount_discount: {
        y: "مبلغ تخفیف {currency}",
        label: "تخفیف",
      },
      chart_used: {
        y: "تعداد استفاده",
        label: "تعداد دفعات استفاده",
      },
    },
  },

  /** {@see AdminCouponPage} **/
  shop_coupon: {
    title: "کوپن ها",
    up_to: "تا تاریخ",
    menu: {
      dashboard: "داشبورد",
      back: "کوپن ها",
      orders: "سفارشات",
    },

    /** {@see AdminCouponDashboardPage} **/
    dashboard: {
      title: "پنل مدیریت کوپن",
      chart_amount_buy: {
        y: "مبلغ خرید {currency}",
        label: "خرید",
      },
      chart_amount_discount: {
        y: "کوپن {currency}",
        label: "کوپن",
      },
      chart_used: {
        y: "تعداد استفاده",
        label: "مرتبه",
      },
    },
  },

  /** {@see AdminOfferPage} **/
  shop_offer: {
    title: "پیشنهاد ویژه",
    up_to: "تا تاریخ",
    menu: {
      dashboard: "داشبورد",
      orders: "سفارشات",
      back: "پیشنهاد های",
    },

    /** {@see AdminOfferDashboardPage} **/
    dashboard: {
      title: "پنل مدیریت پیشنهاد ویژه",
      chart_amount_buy: {
        y: "مبلغ خرید {currency}",
        label: "خرید",
      },
      chart_amount_discount: {
        y: "مبلغ پیشنهاد ویژه {currency}",
        label: "پیشنهاد ویژه",
      },
      chart_used: {
        y: "تعداد استفاده",
        label: "مرتبه",
      },
    },
  },

  /** {@see WidgetAccount} **/
  account_card: {
    pay_create_receipt: "پرداخت مبلغ فعال سازی",
    balance: "موجودی",
    locked: "مسدود",
    transfer: "انتقال",
    charge: "واریز",
  },

  /** {@see TimelineStatus} **/
  timeline: {
    note: "{message}",
    info: "{message}",
    error: "{message}",

    buy: "تایید سبد توسط خریدار",
    payment: "پرداخت مبلغ سفارش",

    confirm:
      "تایید سفارش، <b>{success}</b> مورد تایید و <b>{fail}</b> مورد رد گردید",
    prepare: "آماده سازی سفارش.",
    send: "سفارش توسط <b>{delivery}</b> ارسال گردید",
    delivered: "سفارش تحویل مشتری گردید.",
    "fill-inputs": "فرم اطلاعات ورودی توسط خریدار تکمیل شد.",
    "return-add": "ثبت درخواست بازگشت کالا، {product}",
    "return-accept": "درخواست مرجوعی {return_code} تایید گردید.",
    "return-reject": "درخواست مرجوعی {return_code} رد شد.",

    "reject-order": "رد سفارش. کد: {reject_code}",
    "reject-order-clear": "حذف رد سفارش. کد: {reject_code}",

    "email-buy": "ارسال ایمیل تایید سفارش برای مشتری.",
    "email-payment": "ارسال ایمیل تایید پرداخت برای مشتری.",
    "delivery-returned":
      "سفارش ارسالی به دست مشتری نرسیده و برگشت خورده است. نیاز به ارسال مجدد مرسوله می باشد.",
    "delivery-canceled":
      "ارسال لغو شده است.  نیاز به ارسال مجدد مرسوله می باشد",
    "edit-receiver-info": "آدرس ارسال سفارش توسط خریدار ویرایش گردید.",
    "edit-billing-info": "آدرس فاکتور توسط خریدار ویرایش گردید.",
    "payment-cod-confirm": "پرداخت در محل تایید گردید.",
    "payment-cash-confirm":
      "پرداخت صورت حساب به مبلغ {amount} {currency} به صورت نقدی تایید گردید.",
    "payment-dir-confirm": "فیش پرداخت مستقیم تایید گردید.",

    vendor: "وضعیت سفارش فروشنده از <b>{from}</b> به <b>{to}</b> تغییر کرد.",

    "connect-sync": "سفارش توسط Connect OS همگام‌سازی شد.",
    "connect-shipped": "سفارش کانکت توسط {shipping} ارسال شده است.",
    "connect-returned": "سفارش کانکت توسط {shipping} برگردانده شد.",
    "connect-failed": "انجام سفارش توسط شریک انجام نشد. {reason}",
    "connect-cancelled": "سفارش توسط شریک لغو شد. {reason}",
    "connect-action-cancel": "درخواست لغو سفارش. {reason}",
    "connect-put-hold": "سفارش در حالت تعلیق قرار گرفت. {reason}",
    "connect-remove-hold": "سفارش از حالت انتظار حذف شد. {reason}",
    "connect-confirmed": "سفارش تایید شد.",

    "email-vendor":
      "🔔 ایمیل اطلاع رسانی سفارش به <b>{vendor}</b> | ارسال شد {email}.",
    "vendor-payout": "💸 تسویه با فروشنده.",
  },

  /** {@see FinanceInlineChart} **/
  inline_chart: {
    today: "امروز",
    last_days: "{days} روز پیش",
  },

  /** {@see ProductsSelectAdmin} **/
  products_select: {
    move_category: "انتقال دسته بندی<b> {category} </b>به یک دسته دیگر",
    move_product: "انتقال محصول<b> {product} </b>به دسته بندی",
    product_menu: {
      dashboard: "داشبورد محصول",
      inventory: "مدیریت موجودی و تنوع",
    },
    notifications: {
      copy_success: "محصول کپی شد.",
      change_category_success: "دسته بندی محصول ویرایش شد.",
    },
  },

  /** {@see ShopProcessCenterPhysicalOrderPage_Track} **/
  physical_order_track: {
    title: "گزارشات و ارزیابی ریسک",
  },
  /** {@see ShopProcessCenterVirtualOrderPage_Track} **/
  virtual_order_track: {
    title: "گزارشات و ارزیابی ریسک",
  },
  /** {@see ShopProcessCenterVirtualOrderPage_Timeline} **/
  virtual_order_timeline: {
    title: "جدول زمانی",
  },
  /** {@see ShopProcessCenterPhysicalOrderPage_Timeline} **/
  physical_order_timeline: {
    title: "جدول زمانی",
  },

  /** {@see ShopProcessCenterPhysicalOrderPage_Inputs} **/
  physical_order_inputs: {},

  /** {@see OrderTimeline} **/
  order_timeline: {
    message_input: "متن پیام",
    pin_action: "چسباندن به بالا",
    unpin_action: "حذف پین",
    copy_html: "کپی کد Html",

    notifications: {
      add_note_success: "یاداشت اضافه شد.",
      edit_note_success: "یاداشت ویرایش شد.",
      delete_note_success: "یاداشت حذف گردید.",
    },
    delete_dialog: {
      title: "حذف یاداشت",
      message: "آیا می خواهید این یاداشت را حذف نمایید؟",
      action: "حذف یادداشت",
    },
    resend_dialog: {
      title: "ارسال مجدد اییمل",
      message: "آیا می خواهید این ایمیل مجددا برای مشتریتان ارسال گردد؟",
      action: "بله، ارسال مجدد ایمیل",
      success: "ایمیل با موفقیت برای مشتریتان ارسال گردید.",
    },
  },

  /** {@see Accounts} **/
  accounts: {
    title: "کیف پول من",
    message:
      "شما می بایست حداقل یک حساب با ارز مورد مبادله خود در سلدان ایجاد نمایید. این حساب برای را برای پرداخت هزینه های سرویس بایستی شارژ نمایید.",
    add_new: "ایجاد حساب جدید",
    new_account: "ساخت حساب کیف پول",
    new_account_dialog: {
      title: "حساب جدید",
      account_name_input: "نام حساب",
      currency_input: "واحد ارزی",
      currency_input_message:
        "حساب ایجاد شده تنها مقادیر این ارز را نگهداری خواهد کرد.",
      new_account_wage: "هزینه ایجاد حساب جدید: رایگان برای اولین حساب",
      create_account_action: "ایجاد حساب",
    },
  },

  /** {@see UserGifts} **/
  user_gifts: {
    menu: {
      send_gift: "ارسال هدیه",
      sent: "ارسالی",
      received: "دریافتی",
    },

    /** {@see UserGiftSend} **/
    send_gifts: {
      title: "لیست هدایای ارسالی",
      sub_title:
        "شما می توانید برای دوستان و یا هر فردی دیگیری در سلدان مبلغی را به صورت هدیه ارسال نمایید. گیرنده می تواند این مبلغ را بپذیرد یا آن را رد نماید. مبلغ در حساب شما قفل شده و در صورت تایید گیرنده برداشت می گردد. در غیر این صورت این مبلغ در حساب شما آزاد خواهد شد.",
      table: {
        user: "گیرنده",
        amount: "مبلغ",
        currency: "ارز",
        account_name: "حساب مبدا",
        status: "وضعیت",
        message: "پیام",
        created_at: "تاریخ",
      },
    },

    /** {@see UserGiftReceived} **/
    received_gifts: {
      title: "لیست دریافتی ها",
      sub_title: "تمامی هدایای دریافتی از طرف سلدان و دیگر افراد به شما.",

      table: {
        amount: "مبلغ",
        currency: "ارز",
        account_from: "حساب مبدا",
        status: "وضعیت",
        message: "پیام",
        created_at: "تاریخ",
        receive: "دریافت",
      },
    },
  },

  /** {@see GetGiftDialog} **/
  get_gift_dialog: {
    title: "دریافت هدیه",
    more: "بیشتر..",
    amount: "مبلغ",
    message: "پیام",
    account_to_input: "حساب مقصد",
    account_to_input_message: "مبالغ هدایا به این حساب واریز می گردد.",
    get_action: "دریافت هدیه",
    notifications: {
      received_success_title: "تبریک",
      received_success:
        "مبلغ هدیه {amount} {currency}  به حساب شما واریز گردید.`",
    },
  },
  /** {@see SendGiftDialog} **/
  send_gift_dialog: {
    title: "ارسال هدیه",
    account_from_input: "حساب مبدا",
    account_from_input_message: "مبالغ هدایا از این حساب برداشت می گردد.",
    receiver_input: "دریافت کننده",
    receiver_input_message:
      "می توانید آدرس ایمیل و یا شماره تماس گیرنده را وارد نمایید.",
    message_input: "پیام",
    message_input_message: "می توانید پیامی برای دریافت کننده بگذارید.",
    amount_input: "مبلغ",
    currency_input: "واحد ارزی",
    currency_input_message: "قیمت بر اساس این ارز محاسبه می شود.",
    send_action: "ارسال هدیه",
    notifications: {
      send_success:
        "هدیه ای به مبلغ   {amount}  {currency} برای  {receiver} ارسال شد.",
    },
  },

  /** {@see AccountList} **/
  account_list: {
    account_input: "شماره حساب",
    account_input_message: "مبالغ هدایا برای این ارز به این حساب واریز میگردد.",
    free_balance: "موجودی آزاد",
    account_name: "نام حساب",
  },

  /** {@see UserMonetizeAccounts} **/
  user_monetize_accounts: {
    title: "حساب های واریز",
    sub_title: "مبلغ هدیه به صورت خودکار به این حساب ها واریز می گردد.",
    message:
      "سلدان بابت فعالیت شما در شبکه های اجتماعی، مشارکت در توسعه سلدان، معرفی به دوستان و غیره به حساب شما مبالغی را واریز می نماید. با انتخاب یک حساب جهت واریز برای هر ارز، مبالغ مربوط به هدیه به صورت خودکار به آن حساب شما در سلدان واریز می گردد. این مبالغ به صورت اعتبار در سلدان قابل خرج است. برداشت نقدی مبالغ تنها برای شرکای تجاری ممکن خواهد بود.",
    add_account_action: "افزودن حساب",
    add_dialog: {
      title: "اتصال حساب و دریافت خودکار هدایا",
      account_input: "شماره حساب",
      account_input_message:
        "مبالغ هدایا برای این ارز به این حساب واریز میگردد.",
      set_as_default_action: "انتخاب به عنوان حساب پیشفرض",
    },
    table: {
      currency: "ارز",
      account_number: "شماره حساب",
      account_name: "نام",
      payment: "مبلغ واریزی",
      reset_at: "ریست شده در",
      delete: "حذف",
    },
    notifications: {
      set_success: "حساب با موفقیت افزوده شد.",
      delete_success:
        "حساب با موفقیت از لیست حساب های پیشفرض دریافت هدیه حذف شد.",
    },
    delete_alert: {
      title: "حذف حساب",
      message:
        "آیا می خواهید این حساب را از لیست حساب های دریافت هدیه خارج نمایید؟",
      action: "حذف",
    },
  },

  /** {@see UserMonetize} **/
  user_monetize: {
    title: "کسب درآمد",
    menu: {
      plans: "پلن ها",
      accounts: "حساب ها",
    },
  },

  /** {@see UserMonetizePlans} **/
  user_monetize_plans: {
    title: "طرح های همکاری و کسب درآمد",
    sub_title:
      "بابت همکاری شما مبالغی به عنوان هدیه به شما داده خواهد شد. این مبالغ به عنوان شارژ در حساب شما منظور می گردد و امکان برداشت تنها برای شرکای تجاری سلدان ممکن است. شما می توانید این مبالغ را به عنوان مبالغ شارژ و خرید خدمات سایت در سلدان هزینه نمایید و یا برای دیگران ارسال کنید.",

    discount: "تخفیف",
    your_income: "درآمد شما",
    level_2: "از سطح دوم",
    level_3: "از سطح سوم",
    link_message: "تعداد عضویت: {registered}  ،  تعداد پذیرفته شده: {accepted}",
    link_tip:
      "شما می توانید عبارت ?ref={link_code} را در انتهای هر آدرسی که به اشتراک می گذارید قرار دهید.",
    table: {
      currency: "ارز",
      amount: "مبلغ",
      total: "مجموع پرداخت ها",
      payment_date: "آخرین تاریخ پرداخت",
      withdraw: "برداشت",
    },

    notifications: {
      get_credit_success: "مبلغ درخواستی به حساب شما واریز گردید.",
    },
  },

  /** {@see BasicInformation} **/
  basic_information: {
    title: "اطلاعات هویتی و پروفایل من",
    email: "آدرس ایمیل",
    tel: "شماره تلفن همراه",
    address: "آدرس",
    payment: "تایید تراکنش",
    personal_information: "اطلاعات هویتی",

    main_profile: "پروفایل اصلی",
    main_profile_subtitle:
      "این اطلاعات به صورت عمومی برای همگان قابل دسترس می باشد.",
    kyc_waiting_info:
      "در حال بررسی صحت اطلاعات وارد شده توسط شما، هستیم. این فرایند مطابق قوانین KYC الزامی بوده و موجب کاهش ریسک در تراکنش های مالی می گردد. با فعالیت و انجام تراکنش، تایید توسط افراد دیگر اعتبار شما در شبکه سلدان افزایش یافته و می توانید از مزایای کنونی و آینده این سرویس استفاده بیشتری نمایید.",

    personal_info_dialog: {
      title: "اطلاعات هویتی",
      name_input: "نام",
      family_name_input: "نام خانوادگی",
      number_input: "شماره پاسپورت (یا کد ملی)",
      birthday_input: "تاریخ تولد",
      birthday_input_placeholder: "تاریخ تولد خود را وارد نمایید",
      address_input: "آدرس",
      postcode_input: "کد پستی",
      tel_input: "شماره تماس",
      passport_image_input: "انتخاب تصویر پاسپورت",
      passport_image_input_message: "تصویر اسکن پاسپورت خود را آپلود نمایید.",
      personal_image_input: "انتخاب تصویر خود",
      personal_image_input_message:
        "تصویر اسکن پشت و روی کارت ملی خود را در یک تصویر بارگذاری نمایید.",
    },
    profile_dialog: {
      title: "پروفایل اصلی",
      full_name_input: "نام کامل",
      tel_input: "شماره تماس",
      email_input: "ایمیل",
      website_input: "وبسایت",
      address_input: "آدرس",
      about_input: "درباره من",
      about_long_input: "متن طولانی درباره من",
      image_input: "انتخاب تصویر پروفایل",
      image_input_message:
        "تصویر خود را آپلود نمایید. این تصویر به عنوان تصویر پروفایل شما استفاده می گردد.",
      notifications: {
        update_profile_success: "پروفایل شما به روز شد.",
        update_personal_info_success: "اطلاعات شما با موفقیت ثبت گردید",
      },
    },
    charge_account_approve_message:
      "حساب خود را یک بار با حساب بانکی خود شارژ نمایید تا تایید تراکنش بانکی را دریافت نمایید.",
    payment_approval: "پرداخت تایید شد",
    residential_address_checking:
      "درخواست تایید آدرس محل سکونت شما در صف انجام قرار دارد.",
    add_residential_address: "آدرس خود  و مدارک اثبات آن را اضافه کنید.",
  },
  /** {@see PhoneVerifyDialog} **/
  phone_verify: {
    title: "شماره تلفن همراه",
    step1_title: "شماره تلفن همراه خود را وارد نمایید.",
    phone_number_input: "شماره تلفن همراه",
    next: "مرحله بعد",
    sms_code_input: "کد تایید",
    sms_code_message: "کد تایید 6 رقمی به شماره {phone_number} ارسال شده است.",

    notifications: {
      duplicated_number_error: "این شماره قبلا توسط شما تایید شده است.",
      send_activation_code_success_title: "کد تایید",
      send_activation_code_success:
        "کد تایید به شماره  {phone_number} ارسال گردید.",
      verify_success: "شماره تلفن همراه شما تایید گردید",
    },
  },

  /** {@see UserCompanies} **/
  companies: {
    title: "حساب های تجاری من",
    message:
      "حساب های تجاری، شرکت و تیم هایی که قصد توسعه محصولات و اپلیکیشن بر پایه سرویس سلدان را دارند بایستی یک پروفایل تجاری در اینجا برای خود بسازند.",
    new_company: "شرکت جدید",
  },

  /** {@see AddCompany} **/
  add_company: {
    name_input: "نام شرکت",
    website_input: "وب سایت",
    email_input: "ایمیل",
    address_input: "آدرس",
    tel_input: "تلفن",
    mobile_input: "موبایل",
    edit_action: "ویرایش شرکت",
    create_action: "ایجاد شرکت",
    notifications: {
      add_success: "حساب تجاری  {name} ایجاد شد.",
      edit_success: "حساب تجاری ویرایش شد.",
    },
  },
  /** {@see UserAccessControl} **/
  user_access_control: {
    menu: {
      personal_key: "شخصی",
      shop_key: "کلاینت ها",
      apps: "اپلیکیشن ها",
    },
    connected_apps_title: "اپلیکیشن های متصل",
    connected_apps_message:
      "لیست تمام فروشگاه ها و اپلیکیشن هایی که به حساب کاربری سلدان شما متصل است را در زیر مشاهده می نمایید. می توانید دسترسی به هر یک از آن ها را حذف نمایید.",
    shop_keys_title: "کلیدهای دسترسی به فروشگاه",
    shop_keys_message:
      "این کلیدها برای ایجاد کدهای دسترسی (Access Token) توسط سرور شما استفاده می گردد. توجه داشته باشید این کلید ها محرمانه بوده و تنها بر روی سرور قرار داده شود، به نحوی که توسط دیگران قابل مشاهده نباشد.",
    personal_keys_title: "کلید های دسترسی شخصی",
    personal_keys_message:
      "شما می توانید کلیدهای دسترسی به حساب کاربری خود را در اینجا ایجاد نمایید. دقت نمایید این کلیدها امکان دسترسی به حساب شما را خواهند داشت و تنها در صورتی این کلیدها را ایجاد و مصرف نمایید که دقیقا از کاری که می کنید اطلاع داشته باشید.",
  },
  /** {@see UserSecurityControl} **/
  user_security_control: {
    title: "امنیت حساب",
    message: "تنظیمات امنیتی حساب خود را در اینجا می توانید انجام دهید.",
    delete: {
      title: "حذف حساب کاربری",
      subtitle:
        "قبل از حذف حساب خود، مطمئن شوید که همه فروشگاه ها را حذف کرده اید.",
      action: "مطمئنم حسابم را پاک میکنم",
      agreement:
        "من می پذیرم که تمام اطلاعاتم از روی سرور حذف و یا مخدوش شود. اطلاعات شما طبق زمانبندی که ما مناسب می دانیم حذف می گردد تا جلو هرگونه کلاه برداری و تخلف قوانونی از طرف شما گرفته شود.",
    },

    list: {
      email: {
        title: "ایمیل اصلی",
        sub_title: "شما امکان بروزرسانی ایمیل اصلی مرتبط با این حساب را دارید.",
        action_title: "تغییر ایمیل اصلی",
        action: "ارسال لینک تأیید",
      },

      password: {
        title: "رمز عبور",
        sub_title: "یک رمز عبور قوی برای حساب کاربری خود انتخاب نمایید.",
        action_title: "رمز دسترسی به حساب",
        not_exist: "وارد نشده است",
        action: "تغییر رمز عبور",
      },
      phone: {
        title: "شماره تلفن همراه",
        sub_title:
          "شماره تلفن همراه خود را تایید نماید. شما قادر به ورود از طریق این شماره خواهید بود.",
        action_title: "شماره تلفن اصلی حساب",
        action: "تایید شماره",
      },

      two_step: {
        title: "ورود دو مرحله ای",
        sub_title:
          "شماره تلفن همراه خود را تایید نمایید. شما قادر به ورود از طریق این شماره خواهید بود.",
        action_title: "افزایش امنیت حساب",
        activated_action: "فعال است",
        active_action: "فعال کردن",
      },
    },
    two_step_auth: {
      step_1: {
        title: "نصب اپلیکیشن Google Authenticator",
      },
      step_2: {
        title: "ثبت کد رمز در اپلیکیشن",
        message:
          "با استفاده از ویژگی ورود دو مرحله ای، شما برای ورود نیاز به وارد کردن یک کد 6 رقمی خواهید داشت. این کد توسط الگورتمی در نر افزار گوشی تلفن همراه شما ایجاد می گردد. شما می توانید اپ مربوطه را از طریق لینک زیر دریافت نمایید. کلید ایجاد کد رمز را فشار داده تا QR کدی حاوی کلید رمز برایتان ایجاد گردد.",
        qr_code_info:
          "در صورتی که امکان اسکن وجود ندارد، می توانید این کد را کپی و در اپ به صورت دستی پیست نمایید:",
        create_new_code: "ایجاد کد جدید",
        qr_code_scanning:
          "تصویر QR کد ایجاد شده را توسط نرم افزار Google Authenticator Mobile App اسکن نموده و کد ایجاد شده را برای تایید در کادر مربوطه در این صفحه وارد نمایید.",
        qr_code_regenerate_info:
          " توجه: با فشار کلید فوق یک کلید رمز جدید ایجاد شده و کلید قبلی غیر قابل استفاده خواهد بود. بایتسی کلید جدید را در نرم افزار گوشی خود اضافه نمایید.",
      },
      step_3: {
        title: "ورود کد دسترسی ایجاد شده",
        message: "کد دسترسی ایجاد شده در اپلیکیشن را در فیلد زیر وارد نمایید.",
        activation_key_input: "کد دسترسی",
      },
      activated_alert: "ورد دو مرحله ای فعال است.",
      activated_message:
        "ورود دو مرحله ای برای حساب شما فعال شده است. از این پس برای دسترسی به حساب بایستی کد دوم را که هر 30 ثانیه تغییر می کند، وارد نمایید. برای غیر فعال کردن ورود دو مرحله ای، کافیست کلید لغو ورود دو مرحله ای را فشار داده و مراحل مربوطه را طی نمایید.",
      cancel_two_step_login_action: "لغو ورود دو مرحله ای",
      cancel_two_step_login_info:
        "درصورتی که می خواهید تایید دو مرحله ای غیر فعال گردد، رمز خود را وارد نموده و بر روی کلید غیر فعال نمودن ورود دو مرحله ای کلیک نمایید.",
      password_input: "رمز عبور",
      cancel_2fa_action: "لغو ورود دو مرحله ای",
    },

    change_password_dialog: {
      title: "تغییر رمز عبور",
      message:
        "از یک عبارت پیچیده و قابل یاد آوری برای کلمه عبور استفاده نمایید.",
      password_input: "رمز عبور فعلی",
      new_password_input: "رمز عبور جدید",
      re_new_password_input: "تکرار رمز عبور جدید",
      tips: {
        length: "حداقل طول رمز عبور 8 کاراکتر باشد.",
        chars: "حداقل یک حرف بزرگ و یک عدد.",
        match: "همخوانی رمز عبور وارد شده.",
      },
      change_password_action: "تغییر رمز عبور",
      notifications: {
        change_password_title: "تغغیر رمز",
        change_password: "کلمه عبور با موفقیت تغییر یافت.",
      },
    },
  },
  /** {@see AuthorizedClients} **/
  authorized_clients: {
    title: "لیست فروشگاه ها / اپلیکیشن های متصل",
    table: {
      name: "نام",
      app: "اپلیکیشن",
      scopes: "دسترسی ها",
      shop: "محدود به فروشگاه",
    },
    remove_action: "حذف دسترسی",
    delete_alert: {
      title: "حذف",
      message:
        "آیا می خواهید این دسترسی را لغو نمایید؟ توجه داشته باشید که این اپلیکیشن دیگر به حساب شما دسترسی نخواهد داشت.",
      action: "لغو دسترسی",
    },
  },
  /** {@see Clients} **/
  clients: {
    title: "کلید کلاینت ها",
    create_new_action: "ساخت کلاینت جدید",
    table: {
      client_id: "شماره",
      app: "اپلیکیشن",
      name: "نام مستعار",
      secret_key: "محرمانه",
    },
    create_dialog: {
      title: "ایجاد Client",
      error_msg: "<strong>خطا!</strong> متاسفانه خطایی رخ داده است!",
      name_input: "نام",
      name_input_message: "چیزی که کاربران شما تشخیص داده و اعتماد کنند.",
      redirect_input_message: "آدرس بازگشت به سایت شما.",
    },
    edit_dialog: {
      title: "ویرایش دسترسی",
    },
    delete_alert: {
      title: "حذف",
      message: "آیا می خواهید این کلاینت را حذف نمایید؟",
      action: "حذف",
    },
  },
  /** {@see PersonalAccessTokens} **/
  personal_access_tokens: {
    title: "لیست توکن های دسترسی های شخصی (Personal Access Tokens)",
    create_action: "ساخت توکن جدید",
    table: {
      name: "نام",
      scopes: "دسترسی ها",
      expire_at: "تاریخ اعتبار",
    },
    create_dialog: {
      title: "ساخت توکن",
      error_message: "<strong>خطا!</strong> متاسفانه خطایی رخ داده است!",
      name_input: "نام مستعار",
      name_input_message: "نام دلخواه برای توکن ایجاد شده.",
      scopes_list: "لیست دسترسی های توکن",
    },
    access_token_dialog: {
      title: "کلید دسترسی شخصی",
      message:
        "در اینجا کلید (توکن) دسترسی شخصی شما نشان داده شده است. این تنها زمانی است که این توکن نشان داده خواهد شد، بنابراین آن را از دست ندهید! اکنون می توانید از این نشانه برای درخواست API استفاده کنید.",
    },
    delete_alert: {
      title: "حذف",
      message: "آیا می خواهید این توکن دسترسی را حذف نمایید؟",
      action: "حذف",
    },
  },

  /** {@see Scopes} **/
  scopes: {
    profile: {
      name: "پروفایل",
      description:
        "خواندن اطلاعات پروفایل شامل نام، آدرس ایمیل، تصویر و وضعیت تایید هویت.",
    },
    phone: { name: "شماره تلفن", description: "دسترسی به شماره تماس." },
    address: {
      name: "آدرس ها",
      description: "خواندن آدرس از دفترچه آدرس های ذخیره شده.",
    },

    buy: { name: "خرید", description: "ثبت سفارش و خرید از فروشگاه." },
    "order-history": {
      name: "تاریخچه سفارشات",
      description: "خواندن تاریخچه سفارشات.",
    },
    "my-gift-cards": {
      name: "کارت های هدیه",
      description: "دسترسی به گیفت کارت های من.",
    },

    articles: { name: "ویرایش مطالب", description: "ویرایش مقالات." },
    notifications: {
      name: "ارسال و دریافت نوتیفیکیشن",
      description: "ارسال و دریافت نوتیفیکیشن.",
    },

    "read-shops": {
      name: "لیست فروشگاه ها",
      description: "خواندن لیست فروشگاه ها.",
    },

    "shop-edit": {
      name: "مدیریت فروشگاه",
      description: "دسترسی ویرایش فروشگاه.",
    },

    "shop-contacts": {
      name: "مدیریت فرم تماس",
      description: "دریافت و ویرایش فرم های تماس.",
    },
    "shop-gift-cards": {
      name: "مدیریت کارت های هدیه",
      description: "ایجاد، ویرایش و مدیریت گیفت کارت ها.",
    },
    "shop-faqs": {
      name: "مدیریت سوال و جواب",
      description: "ایجاد، ویرایش و مدیریت سوالات متداول.",
    },

    "shop-categories": {
      name: "مدیریت دسته بندی ها",
      description: "ایجاد، ویرایش و مدیریت دسته بندی ها.",
    },
    "shop-products": {
      name: "مدیریت محصولات",
      description: "ایجاد، ویرایش و مدیریت محصولات.",
    },
    "shop-read-reports": {
      name: "خواندن گزارشات",
      description: "خواندن اطلاعات و گزارشات.",
    },
    "shop-socials": {
      name: "مدیریت شبکه های اجتماعی",
      description: "ویرایش شبکه های اجتماعی فروشگاه.",
    },
    "shop-accounts": {
      name: "مدیریت حساب های مالی",
      description: "ویرایش و حذف حساب های مالی متصل به فروشگاه.",
    },
    "shop-menus": {
      name: "مدیریت منوها",
      description: "ویرایش منو های فروشگاه.",
    },
    "shop-pages": {
      name: "مدیریت صفحات",
      description: "ویرایش صفحات فروشگاه.",
    },
    "shop-warehouse": {
      name: "مدیریت انبار",
      description: "ویرایش انبار فروشگاه.",
    },
    "shop-permissions": {
      name: "مدیریت دسترسی ها",
      description: "مشاهده و ویرایش دسترسی های فروشگاه.",
    },
    "shop-process-center": {
      name: "مدیریت سفارشات",
      description: "مدیریت سفارشات دریافتی.",
    },
    "shop-profile": {
      name: "مدیریت پروفایل ها",
      description: "مدیریت پروفایل های فروشگاه.",
    },
    "shop-discount-code": {
      name: "مدیریت کدهای تخفیف",
      description: "مدیریت، ویرایش و افزودن کدهای تخفیف فروشگاه.",
    },
  },

  /** {@see AdminCompanyPage} **/
  company_page: {
    title: "تجاری",
    create_app: "ساخت اپلیکیشن جدید",
    menu: {
      edit: "ویرایش",
      apps: "اپ ها",
      dashboard: "داشبورد",
      companies: "شرکت ها",
    },

    /** {@see AdminCompanyPage_Dashboard} **/
    dashboard: {
      /** {@see CompanyInfoWidget} **/
      info_widget: {
        title: "مشخصات ثبتی شرکت",
        address: "آدرس",
        website: "وبسایت",
        email: "ایمیل",
        phone: "شماره تلفن",
        register: "رجیستر",
        developer: "توسعه دهنده",
        verified: "تایید شده",
        golden: "طلایی",
      },
    },
    /** {@see AdminCompanyPage_Develop} **/
    developer: {
      title: "توسعه دهندگان",
      menu: {
        new: "جدید",
        apps: "اپ ها",
      },
    },
    /** {@see AdminCompanyPage_Edit} **/
    edit: {
      title: "ویرایش",
    },
  },

  /** {@see AddApp} **/
  add_app: {
    category_input: "دسته بندی",
    code_input: "کد",
    name_input: "نام",
    description_input: "توضیحات",
    video_input: "لینک ویدیو",
    public_form: "ساختار اطلاعات عمومی",
    private_form: "ساختار اطلاعات خصوصی",
    icon_input: "آیکون اپلیکیشن",
    logo_input: "لوگو اپلیکیشن",
    enable_input: "اپلیکیشن فعال است؟",
    edit_action: "ویرایش اپلیکیشن",
    create_action: "ایجاد اپلیکیشن",
    notifications: {
      add_success: "حساب تجاری  {name} ایجاد شد.",
      delete_success: "حساب تجاری ویرایش شد.",
    },
  },

  /** {@see AppPage} **/
  app_page: {
    title: "اپلیکیشن",
    menu: {
      edit: "ویرایش",
      publish: "انتشار",
      history: "ورژن ها",
      dashboard: "داشبورد",
      company: "شرکت",
      api: "وب سرویس",
      images: "تصاویر",
    },
    /** {@see AppPage_Dashboard} **/
    dashboard: {
      /** {@see AppInfoWidget} **/
      app_info_widget: {
        title: "اپلیکیشن",
        app_code: "کد اپلیکیشن",
        category: "دسته بندی",
        name: "نام",
        installs: "نصب اپلیکیشن",
        uninstalls: "حذف اپلیکیشن",
        actives: "اپلیکیشن فعال",
        description: "توضیحات",
        published: "منتشر شده",
        waiting_for_review: "در انتظار تایید",
        app_mode: "وضعیت اپلیکیشن",
      },
    },
  },

  /** {@see ShopPermissions} **/
  shop_permissions: {
    ADMIN: {
      text: "مالک",
      description: "دسترسی کامل به تمام بخش های فروشگاه.",
    },
    PRODUCT: {
      text: "مدیر محصولات",
      description: "افزودن، تغییر و مدیریت محصولات فروشگاه.",
    },
    AUDITING: {
      text: "مدیر مالی",
      description: "مشاهده اطلاعات مالی و پرداخت ها.",
    },
    CONTENT: {
      text: "مدیر محتوا",
      description: "پاسخ به سوالات، نوشتن وبلاگ و طراحی صفحات.",
    },
    OFFICER: {
      text: "مسئول ارشد",
      description: "مشاهده و نظارت بر فعالیت کارمندان.",
    },
    EMPLOYEE: {
      text: "کارمند",
      description: "مشاهده سفارشات و انجام و تکمیل سفارش.",
    },
    MARKETING: {
      text: "مارکتینگ",
      description:
        "دسترسی به تنظیمات و ایجاد کمپین، ایمیل مارکتینگ و دیگر بخش های مرتبط با مارکتینگ.",
    },
    VIEWER: {
      text: "بازدید کننده",
      description:
        "امکان مشاهده اطلاعات فروشگاه بدون قابلیت ایجاد ویرایش و تغییرات.",
    },
  },

  /** {@see ShopRoles} **/
  shop_roles: {
    PhysicalOrdersChecking: {
      text: "بررسی سفارشات فیزیکی",
      description: "سفارشات جدید کالا های فیزیکی را بررسی می نماید.",
    },
    PhysicalOrdersPackaging: {
      text: "بسته بندی سفارشات فیزیکی",
      description: "سفاراشات فیزیکی را آماده و بسته بندی می نماید.",
    },
    PhysicalOrdersDelivery: {
      text: "ارسال سفارشات فیزیکی",
      description: "سفارشات فیزیکی را ارسال می نماید.",
    },
    PhysicalOrdersSupport: {
      text: "پشتیبانی سفارشات فیزیکی",
      description: "خدمات پس از فروش و مرجودی سفارشات فیزیکی را انجام می دهد",
    },
  },

  /** {@see AccountStatus} **/
  account_status: {
    Checking: "در انتظار",
    Approved: "فعال",
    Rejected: "رد",
    Deleted: "حذف",
    Banned: "بلاک",
    Payment: "پرداخت",
    SelldoneSprite: "حساب مجازی رسمی سلدان",
    SelldoneStorage: "فضای ذخیره رسمی سلدان",
  },

  /** {@see AccountPage} **/
  account_page: {
    title: "حساب",
    menu: {
      setting: "تنظیمات",
      charge: "شارژ",
      transfer: "انتقال وجه",
      transactions: "تراکنش ها",
      history: "تاریخچه",
      cards: "حساب متصل",
    },

    /** {@see AccountPage_Transactions} **/
    transactions: {
      title: "تراکنش های حساب",
      detail: {
        title: "تراکنش",
        amount: "مبلغ",
        description: "توضیحات",
        from: "از",
        to: "به",
        created_at: "تاریخ",
        receipt: "رسید",
        receipt_note: "توضیحات رسید",
      },
      table: {
        type: "نوع",
        from: "حساب مبدا",
        to: "حساب مقصد",
        amount: "مبلغ",
        receipt: "رسید",
        created_at: "تاریخ",
        description: "توضیحات",
      },
    },

    /** {@see AccountPage_Transfer} **/
    transfer: {
      title: "انتقال شارژ",
      form: {
        title: "فرم درخواست انتقال وجه",
        sub_title: "انتال وجه به حساب های سلدان خود و یا دیگران",
        message:
          "در انتقال وجه دقت نمایید، در صورت تکمیل انتقال وجه توسط شما امکان بازگشت وجود نخواهد داشت.",
      },
    },
    /** {@see AccountPage_Deposit} **/
    deposit: {
      form: {
        title: "شارژ حساب",

        sub_title:
          "برای خرید لایسنس، ارتقاء حساب و پرداخت رسید های سیستم، بایستی موجودی حساب خود را شارژ نمایید.",
        amount_input: "مبلغ",
        charge_action: "شارژ حساب",
      },
      notifications: {
        qr_title: "پرداخت",
        qr_message: `آدرس پرداخت {currency} ایجاد شد.`,
        gateway_title: "پرداخت",
        gateway_message: "در حال اتصال به درگاه پرداخت.",
      },
    },
    /** {@see AccountPage_Edit} **/
    setting: {
      title: "تنظیمات حساب",
      account_name_input: "نام حساب",
      notifications: {
        updated_success: "حساب شما با موفقیت به روز گردید.",
      },
    },
  },

  /** {@see ReceiptPaymentDialog} **/
  receipt_payment_dialog: {
    title: "پرداخت رسید",
    /*  message: 'در صورتی که اطلاعات زیر صحیح است کلید تایید تراکنش را زده تا تراکنش صورت گیرد.',
    to: 'حساب مقصد',
    amount: 'مبلغ',
    receipt: 'رسید',
    description: 'توضیحات',
    status_paid: 'این رسید قبلا پرداخت شده است.',
    status_canceled: 'این رسید لغو شده است.',
    pay_action: 'پرداخت از طریق درگاه',
    pay_internal_action: 'پرداخت از حساب سلدان',*/
  },
  /** {@see TransactionForm} **/
  transaction_form: {
    title: "انتقال وجه",
    from_input: "شماره حساب مبدا",
    to_input: "شماره حساب مقصد",
    from_input_message: "مبلغ از این حساب برداشت خواهد شد.",
    account_name: "نام",
    currency: "ارز",
    free_balance: "موجودی آزاد",
    to: "حساب مقصد",
    amount: "مبلغ",
    receipt_title: "پرداخت برای رسید",
    receipt_input: "شماره رسید",
    paid_status: "این رسید قبلا پرداخت شده است.",
    paid_canceled: "این رسید لغو شده است.",
    description: "توضیج",
    created_at: "تاریخ",
    duration: "اعتبار تا",
    unlimited: "نامحدود",
    add_note_action: "افزودن توضیحات",
    note: "توضیحات",
    transfer_action: "انتقال وجه",
    confirmation: {
      title: "ارسال وجه",
      subtitle: "تایید تراکنش",
      message:
        "در صورتی که اطلاعات زیر صحیح است کلید تایید تراکنش را زده تا تراکنش صورت گیرد.",
      from: "حساب مبدا",
      to: "حساب مقصد",
      amount: "مبلغ واریزی",
      fee: "هزینه تراکنش",
      total_pay: "مبلغ برداشت شده از حساب شما",
      receipt: "رسید",
      description: "توضیحات",
      accept_action: "تایید تراکنش",
    },
    enter_account_number: "شماره حساب را وارد نمایید.",
    currency_not_match: "ارز حساب مقصد با مبدا یکسان نیست.",
    account_number_not_valid: "شماره حساب اشتباه است.",
    account_number_is_valid: "شماره حساب صحیح است.",
    receipt_not_valid: "شماره رسید اشتباه است.",
    receipt_is_valid: "شماره رسید صحیح است.",

    notifications: {
      confirm_success: "تراکنش با موفقیت انجام شد.",
    },
  },

  /** {@see PriceCalculator} **/
  price_calculator: {
    title: "ماشین حساب | بر اساس نیاز خود بخرید",
    description:
      "با وارد کردن میزان حدودی فروش ماهانه خود، بهترین پلن توسط سیستم برای شما محاسبه می گردد. همچنین میزان صرفه جویی ماهانه با خرید این پلن را می توانید در همین بخش مشاهده نمایید.",
    sale_input: "فروش ماهانه شما",
    hypernova_plan: "برای پلن بدون کارمزد هایپرنوا درخواست خود را ثبت نمایید!",
    show_normal_mode: "نمایش ماشین حساب",
    show_hypernova_mode: "میزان فروش من بیشتر از این مبالغ است!",
  },

  /** {@see PriceCard} **/
  price_card: {
    billed_monthly: "صورت حساب ماهانه به مبلغ {amount}.",
    billed_yearly: "صورت حساب سالانه به مبلغ {amount}.",
    buy_license_action: "خرید لایسنس",
    select_your_store: "انتخاب فروشگاه",
  },

  /** {@see ShopSessionsWorldMap} **/
  shop_session_widget: {
    total_sessions: "کل کاربران(sessions)",
  },

  /** {@see UserActivityWorldMap} **/
  user_activities_keys: {
    add_baskets: "افزودن به سبد خرید",
    remove_baskets: "حذف از سبد خرید",
    buys: "خرید",
    products_views: "نمایش محصول",
  },

  /** {@see ShopVisitorsWidget} **/
  shop_visitors_widget: {
    title: "گزارش بازدید کنندگان",
    new_visitors: "بازدید کننده جدید",
    amp: "AMP نمایش",
    returning_visitors: "بازدیدکنندگان بازگشته",
    page_views: "نمایش صفحات",
    other_pages: "باقی صفحات",
    from_previous_7_days: "از 7 روز پیش",
  },

  /** {@see AppLevelSelector}   {@see AppLevel}  **/
  app_levels: {
    title: "سطح  تجربه کاربر",
    Newbie: "تازه وارد",
    Beginner: "مبتدی",
    Novice: "متوسط",
    Intermediate: "پیشرفته",
    Advanced: "حرفه ای",
  },

  /** {@see Login} **/
  login: {
    register_title: "قوی شروع کنید,<br>با تجربه ای لذت بخش تر از همیشه",
    register_subtitle:
      "ساخت فروشگاه در سلدان رایگان است، برترین ابزارهای فروش در اختیار شماست تا کسب و کار آنلاین خود را توسعه داده و مشتریانتان را خوشحال نگهدارید.",

    password_recovery_title: "بازیابی رمز عبور",
    password_recovery_message:
      "درصورتی که رمز عبور خود را فراموش کرده اید، آدرس ایمیل حساب کاربری خود را وارد نموده و کلید تایید را فشار دهید. برای شما ایمیلی حاوی یک لینک جهت تغییر رمز عبور ارسال می گردد.",
    email: "آدرس ایمیل",
    password_recovery_action: "دریافت ایمیل بازیابی",

    register_google: "ثبت نام با گوگل",
    register_apple: "ثبت نام با اپل",
    continue_with: "ثبت نام با ",
    register_linkedin: "ثبت نام با لینکدین",
    register_facebook: "ثبت نام با فیسبوک",
    register_github: "ثبت نام با گیتهاب",
    create_your_account: "ساخت حساب کاربری",
    password_8_chars: "طول رمز عبور باید حداقل 8 کاراکتر باشد.",
    password_upercase_number: "حداقل 1 عدد و 1 حرف بزرگ در رمز عبور.",
    password_confirm: "مطابقت رمز عبور وارد شده.",
    privacy_agreement:
      "با ثبت نام شما <a href='/terms' target='_blank'>شرایط استفاده</a> و سیاست های <a href='/privacy' target='_blank'>حفظ حریم خصوصی </a> سلدان را می پذیرید.",
    register_action: "تکمیل ثبت نام، رایگان است!",
    login_action: "ورود",
    already_signup: "آیا قبلا ثبت نام نموده اید؟",
    login_your_account: "ورود به حساب کاربری",
    login_google: "ورود با گوگل",
    login_linkedin: "ورود با لینکدین",
    login_facebook: "ورود با فیسبوک",
    login_github: "ورود با گیتهاب",
    remember_me: "من را به خاطر بسپار.",
    login_button: "ورود",
    two_step_problem: "آیا با گذرواژه دو مرحله ای مشکل دارید؟",
    two_step_problem_action: "می خواهم ورود دو مرحله ای را غیرفعال کنم.",
    two_step_confirm: "تایید کد دسترسی",
    forgot_password: "رمز عبور خود را فراموش کرده اید؟",
    signup_free: "عضویت رایگان",
    checking_robot_message: "بررسی اینکه شما ربات نیستید..",
    notifications: {
      step2_login_success: "ورود خودکار به حساب کاربری",
    },
    signup_email: "عضویت با ایمیل",

    name_placeholder: "نام",
    email_placeholder: "ایمیل",
    email_or_username_placeholder: "ایمیل، نام کاربری یا شماره تلفن همراه",
    password_placeholder: "رمز عبور",
    re_password_placeholder: "تکرار رمز عبور",
    new_in_samin: "کاربر جدید سلدان هستید؟",
    auto_create_shop: "ساخت فروشگاه خودکار",
  },

  /** {@see Layout} **/
  layout: {
    logout: "خروج از حساب کاربری",
    menu: {
      personal_information: "اطلاعات شخصی و پروفایل",
      wallet: "کیف پول و حساب ها",
      companies: "شرکت ها و حساب های تجاری",
      access: "دسترسی ها به حساب من",
      security: "توسعه دهندگان و کلید های دستسرسی",
      preferences: "ترجیحات کاربر و شخصی سازی",
      my_subscriptions: "آبونامان های من",
    },
  },

  /** {@see PageBuilder} **/
  page_builder: {
    title: "طراحی صفحات سایت",
    menu: {
      user_view: "مشاهده",
      design: "طراحی",
      behavior: "بازخورد",
      seo: "سئو",
      setting: "تنظیمات",
      embed: "کد صفحه",
    },
    waiting_fetch: "در حال دریافت اطلاعات..",

    /** {@see SettingCustomPage} **/
    setting: {
      title_input: "عنوان صفحه",
      description_input: "توضیحات صفحه",
      name_input: "آدرس صفحه (حروف و اعداد لاتین)",
      bg_color_input: "رنگ پس زمینه",
      bg_style_input: "استایل پس زمینه",
      page_label_input: "رنگ لیبل",
      page_dir_input: "جهت صفحه",
      ltr: "چپ چین",
      rtl: "راست چین",
      designer_note: "یادداشت طراح",
    },
    history: {
      title: "تاریخچه ذخیره شده صفحه",
    },

    /** {@see SPageEditor} **/
    design: {
      themes: {
        title: "دستیار طراحی صفحات لندینگ",
        message:
          "بدون نیاز به کد نویسی بهترین صفحات را برای کسب و کار خود طراحی کنید.",
        page_title_input: "عنوانی برای صفحه خود وارد نمایید",
      },
      tools: {
        rearrange: "ترتیب",
        tools: "ابزارها",
        history: "تاریخچه",
        style: "استایل",
        typography: "تایپوگرافی",
      },
      no_category: "بدون دسته بندی",
    },

    /** {@see SPageBuilderSeo} **/
    seo: {
      message: "تنظیمات SEO به صورت خودکار توسط موتور SEO سلدان انجام می گیرد.",
    },
  },
  /** {@see VerifyEmailCaution} **/
  verify_email_caution: {
    title: "آدرس ایمیل خود را تایید نمایید",
    message:
      "لینک تایید و فعال سازی جدید به ایمیل شما به آدرس {email} ارسال گردید. پیش از هر اقدامی ایمیل خود را چک نمایید. لینک فعال سازی برای شما ارسال شده است.",
    resend_message:
      "اگر لینک فعال سازی و تایید آدرس پست الکترونیک برای شما ارسال نشده است، دکمه زیر را کلیک نموده تا لینک جدید مجددا برای شما ارسال گردد.",
    resend_action: "ارسال مجدد لینک فعال سازی",
    resend_notice: "لینک فعال سازی ارسال گردید.",
  },

  /** {@see ShopAutomation_Autopilot} **/
  autopilot: {
    start: "زمان شروع",
    end: "زمان پایان",
  },

  /** {@see Help} **/
  help: {
    menu: "منو",
    more_helps: "بیشتر بخوانید",
  },

  /** {@see WidgetCompanyCard} **/
  company_card: {
    pending_state: "در انتظار بررسی",
    register: "ثبت شده",
    developer: "توسعه دهنده",
    verified: "تایید شده",
    premier: "نشان ویژه",
  },

  /** {@see ShopSubscriptionList} **/
  shop_license: {
    add: "افزودن پلن",
    only_last: "تنهاآخرین پلن",
    vouchers: "کوپن",
    buy: "خرید پلن ",
    monthly: "ماهانه",
    yearly: "سالانه",
    start_date: "تاریخ شروع",
    end_date: "تاریخ پایان",
    price: "قیمت",
    terms: "من شرایط و قوانین سایت را مطالعه کرده و با آن موافق هستم.",
    need_charge: "نیاز به شارژ حساب",
    buy_now: "تایید خرید",
    use_voucher_now: "استفاده از ووچر",

    auto_renewal: "تمدید خودکار",
    plan_placeholder: "پلن مورد نظرتان را انتخاب نمایید",
    plan: "نوع پلن",
    use_date: "تاریخ افزودن",
    license_duration: "مدت اعتبار",
    validity_duration_hint:
      "با خرید لایسنس 12 ماهه شما 30% تخفیف دریافت خواهید کرد.",

    active_license: {
      title: "پلن فعال",
      subtitle: "پلن فعال بر روی فروشگاه شما.",
      subtitle_partner: "پلن فعال {name} بر روی فروشگاه شما.",
    },
    licenses_table: {
      title: "پلن های خریداری شده",
      subtitle: "مجوز های فعال و در انتظار شروع.",
    },
    license_detail: {
      title: "جزئیات پلن",
      subtitle: "محدودیت های پلن کنونی شما.",
    },

    table: {
      plan: "نوع",
      start_date: "تاریخ شروع",
      end_date: "تاریخ پایان",
      renewal: "تمدید خودکار",
      linked_account: "حساب متصل / کوپن",
      payment: "پرداخت",
      cancel: "لغو",
    },
    notifications: {
      subscribe_success: "پلن با موفقیت خریداری شد.",
      cancel_success: "پلن با موفقیت لغو گردید.",
    },
    cancel_dialog: {
      title: "تایید لغو پلن",
      message: "آیا مطمعن هستید که می خواهید این پلن را لغو نمایید؟",
      action: "بله، لغو پلن",
    },
  },

  /** {@see AdminShopLayout} **/

  admin_shop_layout: {
    download_txt: "دانلود فایل متنی داده ها",
    download_excel: "دانلود فایل اکسل داده ها",
  },
  /** {@see UserPreferences} **/
  user_preferences: {
    access: "دسترسی",
    template: "قالب",
    feedback: "بازخورد",

    company: "حساب های تجاری",
    company_message:
      "اگر شما صاحب شرکت رسمی هستید و قصد انتشار اپلیکیشن دارید.",
    access_keys: "کلید های دسترسی",
    access_keys_message: "نمایش کلاینت ها و توکن ها.",
    rating: "چه میزان از تجربه خود در سلدان راضی هستید؟",
    large_font: "اندازه فونت بزرگ",
    large_font_message: "نمایش متن ها با فونت بزرگتر",
    samples: "نمایش فروشگاه های نمونه",
    samples_message:
      "با فعال بودن این گزینه چند فروشگاه نمونه در پنل شما نمایش داده خواهد شد.",

    automation: "اتوماسیون",
    automation_message: "نمایش تب اتوماسیون در داشبورد فروشگاه.",
  },

  /** {@see ShopEdit_Locations} **/
  shop_locations: {
    title: "محدوده جغرافیایی تحت پوشش",
    sub_title:
      "کشور هایی که به آنها سرویس می دهید را از لیست زیر انتخاب نمایید.",

    delete_restriction: "حذف محدودیت ها",
    set_restriction: "اعمال محدودیت ها",
    notifications: {
      locations_update: "محدودیت های جغرافیایی با موفقیت اعمال گردید.",
    },
    table: {
      country: "کشور",
      currency: "ارز",
      available: "وضعیت",
    },
  },

  /** @see ProductCard **/
  product_card: {
    sold_out: "تمام شد!",
    review_unit: "نفر",
    not_original: "کالای غیر اصل",
  },

  /** @see AddProductStudio **/
  product_studio: {
    add_mode: "افزودن جزئیات بیشتر",
    add_by_sku: "افزودن سریع با بارکد",
    auto_category: "دسته بندی هوشمند محصول",
    add_in_current_category: "افزودن محصول در دسته بندی کنونی",
    category_mode_message:
      "درصورت فعال بودن این گزینه، محصول در دسته بندی پیشفرض ذخیره می گردد.",
    sku_name_input: "SKU / نام",
  },
  /** @see Affiliates **/
  my_affiliate: {
    title: "قراردادهای همکاری در فروش",
    message: "لیست قراردادهای همکاری در فروش من با فروشگاه ها.",
  },
  /** @see AdminShopMarketing_Affiliate **/
  affiliates: {
    title: "همکاران فروش",
    subtitle:
      "همکاران فروش (افیلیت) ایجاد کنید، عملکرد آنها را در طول زمان پیگیری کنید و اقداماتی را بر اساس اطلاعات دقیق در یک مکان انجام دهید. ما به شما و شرکایتان برای ایجاد رابطه ی سالم و قابل اعتماد کمک می کنیم.",

    affiliate_code: "کد همکار فروش",
    crate_date: "تاریخ ایجاد",
    last_payment_date: "آخرین تاریخ پرداخت",
    for_all_products: "اعمال برای تمام محصولات",
    balance: "مجموع پورسانت",
    fix_commission: "کمیسیون ثابت",
    percent_commission: "کمیسیون درصدی",
    total_payment: "مبلغ تسویه شده",
    new_affiliate: "همکار فروش جدید",
    new_affiliate_message: "افزودن برنامه همکاری در فروش",
    link_domain: {
      title: "اتصال دامنه",
      subtitle:
        "شما می توانید یکی از دامنه های خود را به این همکار متصل نمایید. به این ترتیب این همکار به عنوان معرف  هر فردی که از طریق این دامنه وارد فروشگاه شما شده و خرید می کند شناخته خواهد شد.",
    },
    dialog: {
      new: "همکار فروش جدید",
      edit: "ویرایش همکار فروش",
      user: "کاربر (اختیاری)",
      bank_info: "اطلاعات حساب بانکی",
      restriction: "محدودیت ها",
      select_products: "انتخاب محصولات",
      select_products_message: "پورسانت برای این محصولات اعمال می گردد",
      edit_action: "ویرایش اطلاعات",
      add_action: "افزودن همکار فروش",
      affiliate_name: "نام مستعار همکار فروش",
      payment_info: "تنظیمات مالی",
      enable_switch: "آیا فعال است؟",
      affiliate_info: "اطلاعات همکار فروش",
    },
    link_factory: {
      title: "لینک ساز همکار فروش",
      link_input: "لینک مورد نظر",
      link_output: "لینک همکار خروجی",
    },
  },

  /** @see AdminGiftcardPage_Orders **/
  gift_card_orders: {
    title: "سفارشات با گیفت کارت",
    table: {
      order: "سفارش",
      order_price: "مبلغ سفارش",
      paid_by_card: "پرداخت شده با کارت",
      payment_status: "وضعیت پرداخت",
      date: "تاریخ",
    },
  },
  /** @see AdminOfferPage_Orders **/
  offer_orders: {
    title: "سفارشات با پیشنهاد ویژه",
    table: {
      order: "سفارش",
      order_price: "مبلغ سفارش",
      offer_amount: "مبلغ پیشنهاد ویژه",
      payment_status: "وضعیت پرداخت",
      product: "محصول",
      date: "تاریخ",
    },
  },

  /** @see AdminCouponPage_Orders **/
  coupon_orders: {
    title: "سفارشات با کوپن",
    table: {
      order: "سفارش",
      order_price: "مبلغ سفارش",
      coupon_amount: "مبلغ کوپن",
      payment_status: "وضعیت پرداخت",
      date: "تاریخ",
    },
  },
  /** @see AdminDiscountPage_Orders **/
  discount_code_orders: {
    title: "سفارشات با کد تخفیف",
    table: {
      order: "سفارش",
      order_price: "مبلغ سفارش",
      discount_amount: "مبلغ تخفیف",
      payment_status: "وضعیت پرداخت",
      date: "تاریخ",
    },
  },

  /** @see AdminShopIncentives **/
  incentives: {
    discount_code: "کد تخفیف",
    coupon: "کوپن",
    offer: "پیشنهاد ویژه",
    gift_card: "کارت هدیه",
    lottery: "بازی",
  },

  /** {@see AdminShopDiscountCode} **/
  discount_codes: {
    title: "کد تخفیف",
    sub_title:
      "شما در این بخش قادر خواهید بود کوپن های تخفیف را مطابق خواسته و نیازتان طراحی نمایید. این تخفیف ها مجزا از تخفیف هر محصول بوده و بر روی مبلغ نهایی سفارش کاربر اعمال خواهد شد.",
    add_new: "ایجاد کد تخفیف",
    card: {
      created: "ایجاد",
      start: "شروع",
      end: "پایان",
      currency: "ارز",
      discount_percentage: "درصد تخفیف",
      discount_limit: "سقف تخفیف",
      state: "وضعیت کنونی",
      enabled: "اکنون فعال است",
      disabled: "اکنون غیر فعال است",
      used: "مصرف شده",
      count: "تعداد",
      unit: "عدد",
    },
    /** {@see DiscountCodeEditForm} **/
    dialog: {
      title_edit: "ویرایش کد تخفیف",
      title_add: "کد تخفیف جدید",
      discount_code_input: "کد تخفیف",
      discount_percent_input: "درصد تخفیف",
      discount_percent_input_hint: "میزان درصد تخفیف از مبلغ خرید",
      count_input: "تعداد",
      count_input_hint: "حداکثر تعداد استفاده از این کد",
      limit_input: "سقف تخفیف",
      limit_input_hint: "حداکثر میزان تخفیف بر اساس ارز",
      currency_input_message: "تخفیف برای این ارز فعال خواهد بود.",
      limit_input_message:
        "مقدار 0 برای سقف تخفیف به منزله عدم وجود سقف برای میزان تخفیف می باشد.",
      title_input: "عنوان",
      title_input_hint: "می توانید برای این کد تخفیف عنوانی وارد نمایید",
      description_input: "توضیحات",
      description_input_hint:
        "می توانید برای این کد تخفیف توضیحاتی وارد نمایید",
      date_start_input: "شروع",
      date_start_input_placeholder: "زمان شروع تخفیف را انتخاب نمایید",
      date_end_input: "پایان",
      date_end_input_placeholder: "زمان پایان تخفیف را انتخاب نمایید",
      notifications: {
        add: "کد تخفیف با موفقیت افزوده شد.",
        edit: "کد تخفیف با موفقیت ویرایش شد.",
      },
    },
    delete_alert: {
      title: "حذف کد تخفیف",
      message: "آیا می خواهید این کد تخفیف را حذف نمایید؟",
      action: "حذف تخفیف",
    },
    notifications: {
      delete_success: "نظر شما با موفقیت حذف شد",
    },
  },

  /** {@see AdminShopGiftCard} **/
  gift_cards: {
    title: "کارت هدیه",
    sub_title:
      "ابتدا یک نوع کارت هدیه تعریف نموده و سپس به هر تعداد می خواهید کارت هدیه ایجاد نمایید. این کارت ها حاوی شارژ می باشند و کاربران با استفاده از این کارت ها تنها از فروشگاه شما امکان خرید خواهند داشت.",

    create_new: "ایجاد یک دسته کارت جدید",
    card: {
      created: "ایجاد",
      lifetime: "مدت اعتبار",
      lifetime_unit: "ماه از زمان ایجاد هر کارت",
      currency: "ارز",
      initial_balance: "شارژ اولیه",
      count: "تعداد",
      count_unit: "عدد",
      used: "مصرف شده",
    },
    dialog: {
      title: "طراحی کارت هدیه",
    },
    alert: {
      title: "حذف کارت هدیه",
      message:
        "آیا می خواهید این کارت هدیه و تمام کارت های هدیه صادر شده در آن را حذف نمایید؟",
      action: "حذف",
    },
    notifications: {
      delete_title: "حذف کارت هدیه",
      delete_message: "نظر شما با موفقیت حذف شد.",
    },
  },

  /** {@see AdminShopCoupon} **/
  coupons: {
    title: "کوپن ها",
    sub_title:
      "درصورتی که قصد دارید به مشتریان خود تخفیفی بدهید که با شرایط خاصی قابل استفاده باشد می توانید کوپن ایجاد نمایید. کوپن ها می توانند شامل تخفیف درصدی با سقف و یا مبلغ ثابت یا ترکیبی از هر دو باشند.",
    create_new: "ساخت کوپن جدید",
    qualified_products: "محصولات واجد شرایط",
    min_purchase: "حداقل مبلغ خرید",
    only_first_order: "تنها برای اولین خرید",
    one_time_use: "یکیار مصرف",
    multiple_use: "چندبار مصرف",

    amount_usage: "میزان مصرف",

    delete_alert: {
      title: "حذف کوپن",
      message: "آیا مطمئن هستید که می خواهید این کوپن را حذف نمایید؟",
      action: "بله، حذف کوپن",
    },
    notifications: {
      delete_success: "کوپن با موفقیت حذف گردید.",
    },
  },

  /** {@see CouponEditForm} **/
  coupon_edit: {
    title_edit: "ویرایش کوپن",
    title_add: "کوپن جدید",
    discount_charge: "تخفیف و شارژ اولیه",
    charge: "شارژ",
    charge_message: "مبلغ شارژ هر کوپن",
    percent: "درصد تخفیف",
    percent_message: "میزان درصد تخفیف از مبلغ سفارش",
    limit_input: "سقف تخفیف",
    limit_input_hint: "حداکثر مبلغ تخفیف برای هر سفارش",
    currency_input_message: "مبلغ شارژ بر اساس این ارز محاسبه می گردد.",

    count_input: "تعداد",
    count_input_hint: "حداکثر تعداد کل کوپن های قابل استفاده",
    limit_input_message:
      "مقدار 0 به منزله ی نبود سقف برای تعداد کوپن ها می باشد.",
    date_start_input: "شروع",
    date_start_input_placeholder: "زمان شروع اعتبار کوپن ها را انتخاب نمایید",
    date_end_input: "پایان",
    date_end_input_placeholder: "زمان پایان اعتبار کوپن ها را انتخاب نمایید",
    title_input: "عنوان",
    title_input_hint:
      "شما می توانید برای کوپن خود عنوانی وارد نمایید. این عنوان به مشتریان نشان داده می شود.",
    description_input: "توضیحات",
    description_input_hint:
      "برای کوپن توضیحات وارد نمایید. این متن به مشتریان نشان داده می شود.",
    coupon_code: "کد فعال سازی",
    need_code: "نیاز به کد فعال سازی؟",

    coupon_color: "رنگ کوپن",
    min_purchase_amount: "حداقل مبلغ خرید",
    min_purchase_amount_hint:
      "مبلغ خرید مشتری باید بیشتر یا مساوی این مبلغ باشد.",
    should_exist_product: "حداقل یکی از این محصولات در سبد خرید مشتری باشد",
    apply_for_first_order: "تنها برای اولین خرید",
    apply_for_first_order_on:
      "این کوپن تنها برای اولین خرید مشتری قابل استفاده است!",
    apply_for_first_order_off:
      "محدودیت در تعداد استفاده از این کوپن توسط هر خریدار در زیر قابل تنظیم است.",

    has_qualify_constraints: "آیا شرایط بیشتری میخواهید تعریف کنید؟",
    has_qualify_constraints_message:
      "اعمال شرایط بیشتر برای واجد شرایط شدن مشتری در استفاده از این کوپن",
    one_time_use: "یک بار مصرف",
    one_time_use_message:
      "مشتری تنها یک بار می تواند از این کوپن استفاده نماید.",
    daily_limit: "محدودیت روزانه هر مشتری",
    no_limit: "بدون محدودیت",
    daily_limit_message: "حداکثر تعداد قابل استفاده در روز برای هر مشتری",

    monthly_limit: "محدودیت ماهانه هر مشتری",
    monthly_limit_message: "حداکثر تعداد قابل استفاده در ماه برای هر مشتری",

    yearly_limit: "محدودیت سالانه هر مشتری",
    yearly_limit_message: "حداکثر تعداد قابل استفاده در سال برای هر مشتری",

    notifications: {
      add: "کوپن جدید با موفقیت ساخته شد.",
      edit: "تغییرات کوپن با موفقیت ذخیره گردید.",
    },
  },

  /** {@see AdminShopOffer} **/
  offers: {
    title: "پیشنهاد ویژه",
    sub_title:
      "میتوانید پیشنهادات ویژه ای را برای مشتریان خود ایجاد نمایید به این ترتیب که درصورتی که مشتری یک محصول را خرید محصول دیگری با شرایط ویژه مانند درصد تخفیف یا کاملا رایگان دریافت نماید.",
    create_new: "ایجاد پیشنهاد ویژه جدید",
    qualified_products: "محصولات واجد شرایط",
    min_quantity: "حداقل تعداد در سبد خرید",
    min_purchase: "حداقل مبلغ خرید",
    discounted_products: "محصول هدف (تخفیف خورده)",
    amount_usage: "میزان مصرف",

    delete_alert: {
      title: "حذف پیشنهاد ویژه",
      message: "یا از حذف این پیشنهاد ویژه مطمئن هستید؟",
      action: "بله، حذف پیشنهاد ویژه",
    },
    notifications: {
      delete_success: "پیشنهاد ویژه با موفقیت حذف گردید.",
    },
  },

  /** {@see OfferEditForm} **/
  offer_edit: {
    title_edit: "ویرایش پیشنهاد ویژه",
    title_add: "ایجاد پیشنهاد ویژه",

    design_style: "طراحی",
    eligible_constraints: "محدودیت های واجد شرایط شدن مشتری",

    title_input: "عنوان",
    title_input_hint:
      "شما می توانید یک عنوان برای پیشنهاد خود وارد نمایید. این عنوان به مشتری نشان داده می شود.",
    description_input: "توضیح",
    description_input_hint:
      "شما می توانید  توضیح برای پیشنهاد خود اضافه نمایید. این متن به مشتری نشان داده می شود.",

    currency_input_message: "مبلغ  بر اساس این ارز محاسبه می گردد.",
    qualified_products: "محصولات واجد شرایط",
    qualified_products_message:
      "کالاها یا مجموعه های واجد شرایط ، تعداد کالاها در سبد خرید مشتری باید برابر یا بیشتر از حداقل مقدار باشند.",
    min_items: "حداقل تعداد در سبد خرید",
    min_items_message:
      "حداقل تعداد از محصولات واجد شرایط که باید در سبد خرید مشتری باشد",
    discounted_products: "محصولات تخفیف خورده",
    offered_products: "محصولات هدف",
    offered_products_message:
      "درصورتی که یکی از این کالا ها در سبد خرید مشتری باشد، تخفیف این پیشنهاد ویژه بر روی آن اعمال می گردد.",
    discount_percent: "درصد تخفیف",
    discount_percent_message: "درصد تخفیف برای محصولات هدف.",
    discount_percent_hint: "میزان تخفیف که میخواهید به محصولات هدف اعمال گردد.",

    per_order: "تکرار برای هر سفارش",
    per_order_message: "حداکثر تعداد پیشنهاد ویژه قابل اعمال به هر سفارش",

    count_input: "تعداد",
    count_input_hint:
      "حداکثر تعداد قابل استفاده از این پیشنهاد ویژه در فروشگاه",

    min_purchase: "حداقل مبلغ خرید",
    min_purchase_hint: "مبلغ خرید بایستی بیشتر یا مساوی این مبلغ باشد",
    limitation: "محدودیت ها",

    date_start_input: "شروع",
    date_start_input_placeholder:
      "زمان شروع اعتبار پیشنهاد ویژه را انتخاب نمایید",
    date_end_input: "پایان",
    date_end_input_placeholder:
      "زمان پایان اعتبار پیشنهاد ویژه را انتخاب نمایید",
    max_actives_is_3: "حداکثر تعداد پیشنهادهای ویژه اتومات فعال 3 عدد می باشد.",
    enable: "فعال",

    notifications: {
      add: "پیشنهاد ویژه با موفقیت ایجاد گردد.",
      edit: "تغییرات بر روی پیشنهاد ویژه با موفقیت ثبت گردید.",
    },
  },

  /** {@see AdminShopCampaignPage_Ads} **/
  campaign_ads: {
    menu: {
      banner: "بنر",
      reportage: "رپورتاژ",
      social: "شبکه اجتماعی",
      offline: "آفلاین",
    },
  },

  /** {@see AdminShopMarketing_EmailMarketing} **/
  emails: {
    title: "ایمیل مارکتینگ",
    subtitle:
      "ایمیل‌ها را با کشیدن و رها کردن طراحی، برنامه‌ریزی و ارسال کنید. کمپین‌های ایمیل مارکتینگ اطلاعات قابل اعتماد و دقیقی از تعداد مشاهده ها و میزان فروش به شما در اینجا ارائه خواهند کرد.",
    cation_message: "⚠ برای کاربران تایید نشده محدود است. (بتا)",

    subject: "عنوان",
    from: "فرستنده",
    in_que: "در صف",
    schedule_at: "تاریخ ارسال",
    sent: "ارسال",
    sends: "ارسال",
    delivers: "رسیده",
    views: "دیده شده",
    clicks: "کلیک",
    buys: "خرید",
    new_email: "ایمیل جدید",
    new_email_message: "یک ایمیل جدید ایجاد نمایید",
  },

  /** {@see AdminShopEmailPage_Dashboard} **/
  email_dashboard: {
    review: "بازخوانی",
    waiting_for_approve: "در انتظار تایید توسط {name}",
    approved_by: "ایمیل توسط {name} تایید و ارسال شد.",
    not_submitted_send_request:
      "شما هیچ درخواستی برای ارسال این ایمیل ثبت نکرده اید.",
    reviewed_by: "بازخوانی شده توسط {name}",
    status: "وضعیت ایمیل",
    conversion: "نرخ های تبدیل",

    sell_performance: "بازده فروش",
    total_buys: "تعداد فروش ها",
    amount_buy: "مجموع مبلغ فروش",
    average_sell: "میانگین هر سفارش",
    sessions: "ورود کاربران",
    overview: "نمای کلی",
    purchase_amount: "مبلغ خرید",
    actions: "فعالیت کاربر",
  },

  /** {@see AdminShopEmailPage} **/
  email_page: {
    emails: "ایمیل ها",
    edit: "ویرایش",
  },

  /** {@see AdminShopAffiliatePage} **/
  affiliate_page: {
    affiliates: "همکاران تجاری",
    orders: "سفارشات",
    payments: "پرداخت ها",
  },

  /** {@see AdminShopAffiliatePage_Dashboard**/
  affiliate_dashboard: {
    link: "لینک همکار",
    fix_commission: "پورسانت ثابت",
    percent_commission: "پورسانت درصدی",
    last_payment: "آخرین پرداخت",
    balance: "موجودی",
    total_payment: "مجموع پرداخت",
    status: "وضعیت و محدودیت های همکاری",
    available_for: "برای محصولات",
    orders_count: "تعداد سفارشات",
    orders_accepted: "سفارشات تایید شده",
    finance: "گزارش مالی",

    amount_accepted: "مبلغ تایید شده",
    amount_paid: "مبلغ پرداخت شده",
    sessions: "ورودی کاربران",
    affiliate_payment: "پرداخت ها به همکار",
    amount_payment: "مقدار پرداخت",
    amount_payment_hint: "مقدار دقیق تراکنش",
    i_paid: "اینجانب مبلغ {amount} {currency} به {name} پرداخت کردم.",
    pay_now: "تسویه حساب",
  },

  /** {@see AdminShopPermission_Role**/
  permission_roles: {
    new_role: "نقش جدید",
    new_role_message: "با تعریف نقش ها، کار تیمی در مقیاس بزرگ را آسان نمایید.",
    new_role_action: "ایجاد نقش جدید",
  },

  /** {@see Affiliate**/
  user_affiliates: {},

  /** {@see AdminShopLottery**/
  shop_lotteries: {
    title: "بازی",
    sub_title:
      "کاربران شما می توانند بازی هایی را انجام داده و برنده جوایزی شوند که شما برای آن ها در نظر گرفته اید. مشتریان فروشگاه شما برای هر بار بازی بایستی ۱۰ ژتون مصرف نمایند. به طورمثال اگر قصد دارید مشتریانتان در ازای  ۱ میلیون تومان یک شانس برای بازی داشته باشند بایستی مبلغ هر ژتون را ۱۰۰ هزار تومان تعیین نمایید. مبلغ ۰ برای هر ژتون به معنی آن است که خریدار در ازای هر خرید یک ژتون دریافت خواهد نمود.",
    manually_send_chip: "آیا میخواهید به کاربرانتان دستی ژتون بدهید؟",
    lottery_enable: "آیا بازی فعال است؟",
    chip_price_input: "قیمت هر ژتون",
    zero_chip_message: "یک ژتون به ازای هر خرید.",
    chip_has_price_message: "به ازای هر {amount} {currency} خرید یک ژتون.",
    chip_disabled_message: "دادن ژتون ها متوقف شده است.",
    create_new: "جایزه جدید",
    delete_alert: {
      title: "حذف جایزه",
      message: "آیا مطمئن هستید که این جایزه را برای همیشه حذف می کنید؟",
      action: "بله، حذف شود",
    },
    notifications: {
      delete_success: "جایزه با موفقیت حذف شد.",
    },
  },

  /** {@see LotteryEditForm**/
  lottery_edit: {
    title_edit: "ویرایش جایزه",
    title_add: "جایزه جدید",
    general_config: "تنظیمات کلی",
    design_style: "ظاهر و طراحی",
    enable: "فعال است؟",
    enable_message: "بیشترین تعداد جایزه های هر بازی 14 عدد خواهد بود.",
    title_input: "عنوان",
    title_input_hint: "یک عنوان کوتاه برای جایزه وارد نمایید.",
    description_input: "توضیحات",
    description_input_hint: "در باره این جایزه مطلبی بنویسید.",
    quantity: "تعداد",
    quantity_message: "موجودی",
    image: "تصویر",
    image_placeholder: "یک تصویر انتخاب نمایید",
    chance: "شانس",
    chance_message: "درصد شانس برنده شدن این جایزه.",
    free_for_first: "آیا برای کاربران جدید رایگان است؟",
    free_for_first_message: "کاربران جدید می توانند این آیتم را برنده شوند.",
    prize: "جایزه",
    amount: "مبلغ جایزه",
    amount_hint:
      "این مبلغ را میتوان برای پرداخت بخشی از مبلغ سفارش استفاده کرد.",
    currency_message: "مبالغ بر اساس این ارز محاسبه می شود.",
    discount: "درصد تخفیف",
    discount_message: "درصد تخفیفی که به سفارش مشتری اعمال می گردد",
    discount_limit: "سقف تخفیف",
    discount_limit_hint: "حداکثر مبلغ تخفیف داده شده به مشتری.",
    color: "رنگ",
    condition: "شرایط",

    notifications: {
      add: "آیتم جدید بازی ایجاد گردید.",
      edit: "تغییرات آیتم با موفقیت ذخیره گردید.",
    },
  },

  /** {@see SelectGiftCardType**/
  gift_card_types_list: {
    label: "نوع کارت هدیه",
    message: "نوع کارت هدیه را از لیست انتخاب کنید.",
  },

  /** {@see EmailBuilder**/
  email_builder: {
    service_unavailable: "سرویس ایمیل در حساب شما فعال نیست.",
    design_section: "صفحه طراحی ایمیل",
    schedule_switch: "ارسال برای زمان دیگری برنامه ریزی گردد؟",
    schedule_placeholder: "زمان ارسال را انتخاب نمایید",
  },

  /** {@see ShopUsersFunnelFactory**/
  user_funnel: {
    REGISTER_DATE: {
      title: "تاریخ عضویت",
      description: "فیلتر بر اساس بازه زمانی عضویت کاربر.",
    },
    LAST_BUY_DATE: {
      title: "آخرین خرید",
      description: "زمان آخرین خرید کاربر.",
    },
    LOGIN_DATE: {
      title: "آخرین ورود",
      description: "بازه زمانی آخرین فعالیت کاربر.",
    },
    LEVEL: {
      title: "باشگاه مشتریان",
      description: "مشتریانی که عضو باشگاه مشتریان باشند.",
    },
    SUBSCRIBED: {
      title: "اشتراک",
      description: "داشتن اشتراک دریافت ایمیل.",
    },
    NOT_PURCHASED: {
      title: "بدون خرید",
      description: "کاربرانی که تا به حال خریدی نداشته اند.",
    },
    SEX: {
      title: "جنسیت",
      description: "فیلتر بر اساس جنسیت کاربر.",
    },
    LOCATION: {
      title: "موقعیت",
      description: "فیلتر بر اساس موقعیت کاربر.",
    },

    LIMIT: {
      title: "محدودیت",
      description: "محدود کردن حداکثر تعداد کاربران.",
    },
  },

  /** {@see InlineHelp**/
  inline_help: {
    helps_title: "راهنمای استفاده از سرویس",
    blogs_title: "مطالب مرتبط در وبلاگ سلدان",
  },

  /** {@see AdminShopFinance_Tax**/
  shop_tax: {
    region: "ناحیه",
    label: "برچسب",
    country_tax: "مالیات کشور",
    customer_tax: "ارزش افزوده برای اشخاص",
    business_tax: "ارزش افزوده برای شرکت",
    shipping: "حمل و نقل",
    override: "بازنویسی",
    country: "کشور",
    vat_range: "رنج مالیات",
    custom: "تغییرات",
    regions: "نواحی",
    rest_world: "باقی جهان",
    overrides: "تنظیم",
    dialog_set_title: "تنظیمات مالیات",

    tax_setting: "تنیظیمات مالیات",
    vat: "ارزش افزوده",

    calculate_tax_input: "اعمال خودکار مالیات",
    calculate_tax_message:
      "با فعال کردن این گزینه مالیات بر ارزش افزوده برای سفارشات شما محاسبه و اعمال خواهد شد.",

    tax_number: "شماره مالیاتی",
    tax_number_message:
      "کد مالیاتی خود را وارد نمایید. این کد در فاکتور خریدار ثبت می گردد.",

    tax_included_in_price_input: "مالیات در قیمت محصولات لحاظ شده است",
    tax_included_in_price_message:
      "اگر مبلغ مالیات را در قیمت محصول خود لحاظ کرده اید، این گزینه را انتخاب نمایید. مبلغ مالیات با فرمول زیر محاسبه خواهد شد:",
    tax_included_in_price_formula:
      "مالیات = (قیمت * نرخ ارزش افزوده) / ( 1+ نرخ ارزش افزوده)، برای مثال مبلغ مالیات برای یک کالا به قیمت 1000 تومان با نرخ ارزش افزوده 9% می شود 82 تومان.",

    tax_on_shipping_input: "اعمال مالیات بر روی هزینه حمل و نقل",
    tax_on_shipping_message:
      "با انتخاب این گزینه، مالیات بر روی هزینه حمل و نقل اعمال خواهد شد.",

    fixed_tax_rate: "نرخ مالیات ثابت",
    dynamic_tax_rate: "مالیات بر اساس مکان",

    locations_tip:
      "در لیست فوق تنها کشورهایی نمایش داده می شوند که در بخش تنظیمات فروشگاه > محدوده، به عنوان کشورهایی که به آنها سرویس می دهید، انتخابشان نموده اید.",
    locations_action: "تنظیمات محدوده تحت پوشش فروشگاه",

    save_alert: "تنظیمات ذخیره نشده است!",

    pos_tax_setting: "تنظیمات مالیات صندوق فروش",
  },

  /** {@see AdminShopTransportationPage**/
  transportation_page: {
    menu: {
      dashboard: "داشبورد",
      transportations: "سرویس ها",
      orders: "سفارشات",
      setting: "تنظیمات",
      delivery_services: "سرویس ها",
      delivery_persons: "سفیرها",
    },
    go_to_courier_list: "مشاهده لیست پیک های من",
    go_to_service_list: "مشاهده لیست سرویس های حمل",
  },

  /** {@see AdminShopTransportationPage_Persons**/
  transportation_persons: {
    title: "مدیریت سفیران",
    notifications: {
      success_add: "سفیر افزوده شد.",
      success_reset: "آمار مربوط به سفیر ریست گردید.",
      success_remove: "سفیر با موفقیت حذف گردید.",
      success_update: "اطلاعات سفیر با موفقیت به روز گردید.",
    },
    reset: {
      title: "ریست آمار",
      message: "آیا از ریست آمار این سفیر اطمینان دارید؟",
      action: "بله، ریست کن",
    },
    remove: {
      title: "حذف سفیر",
      message: "آیا می خواهید این سفیر را از لیست حذف نمایید؟",
      action: "بله، حذف کن",
    },
    add_dialog: {
      title: "افزودن سفیر جدید",
      action: "افزودن سفیر",
    },
  },
  /** {@see AdminShopTransportationPage_Orders**/
  transportation_orders: {
    title: "سفارشات ارسالی",
    notifications: {
      success_update: "وضعیت ارسال مرسوله با موفقیت به روز شد.",
      success_payment: "پرداخت در محل با موفقیت تأیید شد.",
    },
  },
  /** {@see DeliveryPersonPage**/
  delivery_person: {
    actions_title: "منوی سفیر",
    action_delivered: "ارسال شد",
    action_paid: "تایید پرداخت",
    action_returned: "برگشت خورد",
    cod_confirm_action: "تایید پرداخت در محل",

    pickup_dialog: {
      title: "آیا مامور پیک این بسته هستید؟",
      message:
        "در صورتی که شما مسئول حمل این مرسوله هستید گزینه بله را انتخاب نمایید، در غیر این صورت گزینه خیر را بزنید.",
    },
    status_dialog: {
      title: "تغییر وضعیت به {status}",
      message: "آیا از تغییر وضعیت مرسوله به {status} اطمینان دارید؟",
      action: "بله، تایید می کنم!",
    },
    cod_dialog: {
      title: "تایید پرداخت در محل",
      message: "آیا دریافت مبلغ سفارش از خریدار را تایید می نمایید؟",
      action: "بله، پرداخت را تایید می کنم!",
    },
  },

  /** {@see AdminShopTransportationPage_Services**/
  transportation_services: {
    title: "مدیریت سرویس های ارسال",
    notifications: {
      success_add: "سرویس افزوده شد.",
      success_reset: "آمار مربوط به سرویس ریست گردید.",
      success_remove: "سرویس با موفقیت حذف گردید.",
      success_update: "اطلاعات سرویس با موفقیت به روز گردید.",
    },
    reset: {
      title: "ریست آمار",
      message: "آیا از ریست آمار این سرویس اطمینان دارید؟",
      action: "بله، ریست کن",
    },
    remove: {
      title: "حذف سرویس",
      message: "آیا می خواهید این سرویس را از لیست حذف نمایید؟",
      action: "بله، حذف کن",
    },
    add_dialog: {
      title: "افزودن سرویس جدید",
      action: "افزودن سرویس",
    },
  },
  /** {@see AdminShopTransportationPage_PickupAddresses**/
  transportation_pickups: {
    addresses: {
      title: "آدرس های پیکآپ",
      subtitle:
        "آدرس‌های تحویل را در اینجا اضافه و ویرایش کنید. کاربر خواهد توانست آدرس تحویل را در صفحه تسویه حساب انتخاب کند.",
      add_action: "افزودن آدرس جدید",
    },
  },

  /** {@see DeliveryReceiptWidget**/
  delivery_receipt: {
    title: "رسید پیک",
    has_return: "بازگشت پیک",
    cashed: "پرداخت نقدی",
  },

  /** {@see AdminShop_DeliveryService_Dashboard**/
  delivery_dashboard: {
    select_destinations: "افزودن سفارشات به لیست",
    price_calculation: "برآورد هزینه حمل و نقل",
    price_calculation_action: "محاسبه قیمت",
    add_request: "درخواست سرویس",
    add_request_action: "ثبت درخواست سرویس",
    refresh_action: "به روز رسانی اطلاعات",
  },

  /** {@see DeliveryOrderWidget**/
  delivery_order: {
    title: "سفارش حمل بار",
    has_return: "بازگشت پیک",
    cashed: "پرداخت نقدی",
  },
  /** {@see TransportationOrderStatus**/
  transportation_order_status: {
    PENDING: "در انتظار",
    DELIVERED: "ارسال شده",
    RETURNED: "برگشت خورده",
    CANCELED: "لغو شده",
  },

  /** {@see CashRegisterPage**/
  cash_register: {
    menu: {
      panel: "صندوق",
      orders: "سفارشات",
      customers: "مشتریان",
      devices: "دستگاه ها",
      inventory: "موجودی",
    },
    payment_confirm: "تایید پرداخت",
    payment_confirm_msg: "سفارش {basket_id} توسط مشتری پرداخت گردید.",
  },
  /** {@see BarcodeScannerConnectWidget**/
  barcode_scanner: {
    wifi_pass: "رمز اتصال به شبکه بیسیم",
    message: "رمز وای فای خود را وارد نموده و کد بالا را اسکن نمایید.",
    wifi_ssid: "نام شبکه",
    ssid_message: "نام شبکه بیسیم (SSID) خود را وارد نمایید.",
  },
  /** {@see PosDeviceTypes**/
  pos_devices: {
    Scanner: "بارکد اسکنر",
    Scanner_desc:
      "برای استفاده از بارکد اسکنر بایستی کد SKU محصول را به درستی در تنظیمات محصول وارد نموده باشید.",
    Printer: "پرینتر",
    Printer_desc:
      "با اتصال به یک لیبل پرینتر فاکتور مشتریانتان را پرینت نمایید.",
    CustomerView: "نمایشگر مشتری",
    CustomerView_desc:
      "این صفحه امکان نمایش جزئیات خرید و مبلغ سفارش را برای مشتریان شما فراهم می آورد.",
    CardReader: "کارتخوان",
    CardReader_desc: "دستگاه کارت خوان برای پرداخت در محل توسط مشتریانتان.",
    ChipReader: "تگ",
    ChipReader_desc:
      "تگ خوان NFC برای اضافه کردن کالا به سبد با استفاده از تگ.",
  },
  /** {@see CashRegister_Devices**/
  pos_register_devices: {
    delete_dialog: {
      title: "حذف دستگاه",
      message: "آیا می خواهید این دستگاه را از پروفایل صندوق خود حذف نمایید؟",
      action: "بله، حذف شود",
    },
  },

  /** {@see ShopProcessCenterPOSOrderPage**/
  pos_process_center: {
    title: "سفارش صندوق",
    menu: {
      label: "لیبل",
      receipt: "فاکتور",
      back: "بازگشت",
      timeline: "جدول زمانی",
      order: "سفارش",
    },
  },
  /** {@see CashRegister_Dashboard**/
  pos: {
    name: "صندوق فروشگاهی",

    message:
      "صندوق های فروشگاهی آنلاین خود را با هزینه نصب صفر داشته باشید، آن را روی هر تلفن هوشمند، تبلت و رایانه شخصی اجرا کنید، یا سفارشات را به صورت دستی ایجاد کنید.",

    add_customer: "انتخاب مشتری",
    set_delivery: "ارسال درب منزل",
    add_giftcards: "افزودن کارت هدیه",
    add_discount_code: "افزودن کد تخفیف",
    add_coupon: "افزودن کوپن",
    set_campaign: "انتخاب کمپین",
    select_buyer: "مشتری را انتخاب نمایید!",
    send_to_pos: "ارسال به دستگاه کارتخوان",
    print_receipt: "پرینت رسید",
    confirm_cash_payment: "تایید پرداخت نقدی",
    payment_cod: {
      title: "پرداخت در محل",
      message:
        "مبلغ این سفارش موقع تحویل پرداخت خواهد شد. شما بایستی پس از دریافت مبلغ از خریدار، تایید پرداخت را برای این سفارش انجام دهید. به این ترتیب سفارش در سیستم تکمیل خواهد شد.",
    },
    payment_online: {
      title: "انتخاب کانال ارسال لینک پرداخت",
      message:
        "با انتخاب هر یک از گزینه های زیر یک لینک پرداخت ایجاد شده و برای خریدار ارسال می گردد. با پرداخت این لینک، وضعیت سفارش به حالت پرداخت شده تغییر خواهد کرد. لینک پرداخت از طریق اسکن کد QR ایجاد شده در صفحه نمایش مشتری، پیامک و یا ایمیل قابل دسترس خواهد بود. برای فعال نمودن هر کانال ارسال لینک بر روی آن گزینه کلیک کرده و سپس کلید ارسال رسید برای خریدار را بزنید.",
    },
    notifications: {
      success_pay: "پرداخت سفارش تایید گردید.",
      success_order:
        "سفارش با موفقیت ثبت گردیده و در انتظار پرداخت توسط مشتری می باشد.",
    },
    payment_dialog: {
      check_pay_now: "بررسی دستی پرداخت",
      close_action: "بستن صفحه، نمی خواهم منتظر پرداخت مشتری بمانم",
      go_to_order: "برو به صفحه سفارش",
      paid_by_gift_card_msg:
        "تمام مبلغ سفارش از کارت های هدیه برداشت شد! خریدار نیازی به پرداخت وجه بیشتری ندارد.",
      cod_msg: "مشتری در زمان دریافت کالا مبلغ سفارش را پرداخت خواهد کرد.",
      online_msg: "از مشتری بخواهید کد QR را روی صفحه مشتری اسکن کند.",
    },
  },
  /** {@see ProductsManagement_Importer**/
  exporter: {
    title: "گرفتن خروجی اطلاعات",
    subtitle:
      "داده های شما مال شماست! شما می توانید اطلاعات کسب و کار خود را در قالب استاندارد در هر زمان دانلود کنید. اما به حریم خصوصی مشتریان خود احترام بگذارید، آنها را اسپم نکنید و هرگز اطلاعات آنها را با خدمات شخص ثالث به اشتراک نگذارید. رعایت حریم خصوصی مشتریان خط قرمز است.",

    excel:
      "لیست تمام {type} فروشگاه را به همراه اطلاعات کامل در فرمت اکسل دریافت خواهید نمود.",
    csv: "لیست تمام {type} فروشگاه را به همراه اطلاعات کامل در فرمت csv دریافت خواهید نمود. این فرمت مطابق به فرمت استاندارد سلدان برای وارد نمودن لیست {type} به فروشگاه است.",
  },
  /** {@see ProductsManagement_Importer**/
  importer: {
    category: {
      title: "وارد کردن دسته بندی ها",
      subtitle:
        "فایل CSV دسته ها را اینجا آپلود کنید. مطمئن شوید که از فرمت استاندارد پیروی می کنید.",
    },
    product: {
      title: "وارد کردن محصولات",
      subtitle:
        "فایل CSV محصولات را اینجا آپلود کنید. مطمئن شوید که از فرمت استاندارد پیروی می کنید.",
    },
    product_images: {
      title: "دریافت تصاویر",
      subtitle:
        "دریافت اطلاعات تصاویر زمانبر است. دقت داشته باشید که در زمان وارد کردن تصاویر حق کپی رایت را رعایت نمایید.",
    },
    inventory: {
      title: "آپدیت کلی انبار",
      subtitle:
        "آپلود فایل CSV موجودی انبار. اطمینان حاصل کنید که ابتدا از موجودی انبار خروجی CSV گرفته و سپس آن فایل را ویرایش کنید.",
    },

    back_to_products: "بازگشت به لیست محصولات",
    back_to_categories: "بازگشت به لیست دسته بندی ها",
    back_to_inventory: "بازگشت به لیست انبار",

    step_select_file: "انتخاب فایل CSV",
    step_send_to_server: "بارگذاری",
    step_view_result: "نمایش نتایج",
    step_view_que: "لیست صف اجرا",
    send_to_server_action: "تایید و ارسال",

    shop_license: "پلن فروشگاه",
    max_items_limit: "محدودیت بیشترین تعداد",
    total_items: "تعداد آیتم ها",
  },
  /** {@see AdminShopMarketingCampaign**/
  campaigns: {
    title: "کمپین ها",
    subtitle:
      "کمپین ها و لینک های قابل ردیابی را ایجاد کنید و اطلاعات قابل اعتماد و دقیق را از کارآمدی کمپین های خود در یک مکان مشاهده کنید. ما به شما کمک می کنیم تا تصمیمات مبتنی بر داده های بهتری بگیرید.",
    add_action: "ایجاد کمپین جدید",
    empty_message: "اولین کمپین فروش خود را بسازید!",
    delete: {
      title: "حذف کمپین",
      message: "آیا مطمئن هستید که این کمپین و تمام داده های آن را حذف کنید؟",
      action: "بله، حذف شود",
    },
  },

  landing_categories: {
    raw: "تمپلیت خام",
    all: "همه تمپلیت ها",

    marketing: "بازاریابی و تبلیغات",
    product: "معرفی محصول",
    health: "سلامت و تناسب اندام",
    food: "مواد غذایی",
    house: "فروش و اجاره مسکن",
    device: "تجهیزات و قطعات",
    car: "خودرو",
    software: "نرم افزار",
    clothing: "لباس و کفش",
    jewellery: "جواهرات",
  },
  /** {@see ShopEdit_Theme**/
  shop_theme: {
    theme_colors: "رنگبندی سایت",
    products_view_mode: "نمایش لیست محصولات",
    products_view_mode_desc:
      "شما می توانید مدل نمایش محصولات را در فروشگاه خود بر اساس سایز صفحه مشخص نمایید. این مقادیر به عنوان پیشفرض در نظر گرفته خواهد شد و درصورتی که کاربر روش نمایش را تغییر دهد، این مقادیر اعمال نخواهد شد.",

    color_light: " رنگ اصلی روشن",
    color_dark: "رنگ اصلی تیره",
    color_deep_dark: "تاریک ترین رنگ",
    color_info: "لینک ها",
    light_checkout: "تم فرم ثبت سفارش",
    light_header: "تم منوی بالا",
    light_footer: "تم منوی پایین",
    light_filter: "تیم فیلتر دسته بندی",

    product_page: "صفحه محصول",
    typography: "تایپوگرافی",
    header: "هدر",
    custom_code: "کد سفارشی",
    custom_css: "سفارشی CSS",
    custom_variants: "انواع",
  },

  /** {@see AppTemplates**/
  app_templates: {
    default: "پیش فرض",
    blue: "اقیانوس",
    amber: "کهربایی",
    green: "استوایی",
    red: "خون آشام",
    magenta: "ارغوانی",
    master: "استاد",
    black: "دارک ساید",
  },

  /** {@see AdminShopAffiliatePage_Orders**/
  affiliate_orders: {
    title: "سفارشات نمایندگی",
    table: {
      order_price: "مبلغ سفارش",
      order_payment: "وضعیت پرداخت سفارش",
      order_link: "لینک سفارش",
      commission_status: "وضعیت کمیسیون",
      commission_amount: "مبلغ کمیسیون",
      items: "آیتم ها",
      actions: "تایید / رد",
      create_date: "تاریخ ایجاد",
    },
    notifications: {
      update_success: "وضعیت افیلیت با موفقیت به روز رسانی شد.",
    },
  },

  /** {@see AdminShopAffiliatePage_Payments**/
  affiliate_payments: {
    title: "پرداخت ها به نمایندگی",
    table: {
      staff: "مسئول",
      amount: "مبلغ تراکنش",
      note: "توضیحات",
      date: "تاریخ",
    },
  },
  /** {@see MyRolesList**/
  my_roles: {
    title: "نقش های من",
    message:
      "نقش ها دسترسی ها محدودی هستند که به کارمندان یک فروشگاه داده می شود. برای مثال مسئول ارسال سفارشات و یا بسته بندی سفارشات.",
  },

  /** {@see WidgetMyRoleCard**/
  role_card: {
    complete_tasks: "کارهای انجام شده",
    reject_tasks: "کارهای رد شده",
    last_check: "آخرین بررسی",
  },

  /** {@see ReferralLinkWidget**/
  referral_widget: {
    apply_now: "برای این برنامه اکنون اقدام نمایید!",
    no_bonus: "با دعوت از یک دوست اولین جایزه را دریافت نمایید.",
    your_gift: "هدیه شما",
    invited_gift: "هدیه مدعو",
    percent_bonus: "پاداش درصد فروش",
    discount_bonus: "پاداش تخفیف",
    registered: "عضو جدید",
    accepted: "عضو تایید شده",
  },

  /** {@see AppConfigDialog**/
  app_config: {
    reviews: "نظرات",
    rate_now: "نظر دهید",
    category: "دسته بندی",
    uninstall: "حذف برنامه",
    get_app: "نصب برنامه",
    public_keys: "کلیدهای عمومی",
    private_keys: "کلیدهای خصوصی (امنیتی)",
    config: "تنظیمات اپلیکیشن",
    app_status: "وضعیت اپلیکیشن",
    app_info: "اطلاعات اپلیکیشن",
    update_at: "آخرین به روز رسانی",
    visit_website: "وبسایت سازنده",
    privacy: "سیاست حفظ حریم خصوصی",
    installs: "نصب ها",
    basic_profile_permission: "دسترسی پایه به اطلاعات پروفایل",
    developer: "توسعه دهنده",
    permissions: "دسترسی ها",
    total_comments: "تعداد نظرات",
    delete_dialog: {
      title: "حذف اپلیکیشن",
      message: "آیا می خواهید این اپلیکیشن را از فروشگاهتان حذف نمایید؟",
      action: "بله، حذف برنامه",
    },
    notifications: {
      uninstall_success: "اپلیکیشن با موفقیت حذف گردید.",
    },
  },

  /** {@see AdminShop_Channels_Bots**/
  shop_bots: {
    not_set: "تنظیم نشده!",
    tokens: "توکن (ها)",
    webhook: "وب هوک",
    calls: "تعداد فراخوانی",
    dialog: {
      title: "تنظیمات بات {name}",
      message:
        "با یک کلیک بات فروشگاهی برای خود خواهید ساخت. مشتریانتان از طریق این بات قادر به خرید از شما خواهند بود.",
    },
  },
  /** {@see ShopUsers_Customers**/
  shop_customers: {
    title: "مدیریت کاربران",

    all_customers: "دانلود فایل اکسل تمام مشتریان",
    filtered_customers: "فیلتر مشتریان",
    dialog_chips: {
      title: "تنظیم تعداد ژتون های کاربر",
    },
    dialog_club: {
      title: "تعیین سطح کاربر",
    },
  },
  /** {@see AppPageDashboard**/
  app_dashboard: {
    status: "وضعیت انتشار",
    statistics: "آمار نصب",
  },
  /** {@see AppPage_Publish**/
  app_publish: {
    production_version: "نسخه نهایی",
    beta_version: "نسخه بتا",
    alpha_version: "نسخه آلفا",
  },
  /** {@see AppPublishWidget**/
  app_publish_widget: {
    header: "هدر وبسایت فروشگاه",
    header_code: "کد هدر",
    admin_page: "صفحات بخش مدیریت",
    name: "نام",
    icon: "آیکون",
    url: "آدرس",
  },
  /** {@see AppPage_API**/
  app_api: {
    title: "وب سرویس",
    revoke_api: "ریست API",
    api_key: "کلید API",
    secret: "کلید رمز",
    client: "کلاینت",
    redirect_url: "آدرس بازگشت",
    client_name: "نام کلاینت",
  },
  /** {@see ApplicationLoaderPage**/
  app_loader_page: {
    no_ui_title: "این اپلیکیشن فاقد واسط کاربری است!",
    no_ui_desc:
      "برخی از اپلیکیشن ها نیازی به واسط کاربری در بخش ادمین خود ندارند. ممکن است این اپلیکیشن تنها کدی را به بخش هدر سایت فروشگاه شما اضافه نماید.",
    header: "کد هدر",
  },
  /** {@see AdminShopFinance_Report**/
  finance_report: {
    export_title: "دریافت داده های مالی",
    export_sub_title: "دانلود فایل اکسل لیست فروش ها",
    start_input_placeholder: "تاریخ شروع گزارش را انتخاب نمایید",
    end_input_placeholder: "تاریخ پایان گزارش را انتخاب نمایید",
    download_action: "دانلود فایل مالی",
  },
  /** {@see ShopEdit_Notifications**/
  shop_notifications: {
    title: "نوتیفیکیشن های فروشگاه",
    sub_title: "بات ها, ایمیل, پیامک, ... ",
    message:
      "شما می توانید نوتیفیکیشن های فروشگاه خود را در این بخش مدیریت و ویرایش نمایید.",
    channel: "کانال",
    status: "وضعیت",
    events: "رویداد",
    info: "اطلاعات",
    actions: "اقدامات",
    connected: "متصل است",
    not_connected: "عدم اتصال!",
    connect_now: "اکنون متصل شوید",
    send_test: "ارسال پیام آزمایشی",
    disconnect: "قطع اتصال",

    dialog: {
      title: "تنظیمات بات",
      message:
        "سلدان یک سرویس اطلاع رسانی جامع و همه جانبه برای فروشگاه شما فراهم آورده است. به کمک این سرویس از آخرین وضعیت فروشگاه و سفارشات آن مطلع خواهید شد.",
      action: "اینجا را کلیک نمایید!",
      set_config: "دخیره تنظیمات",
    },
  },
  notification_events: {
    new_order: "🛍️ سفارش",
    payment: "💳 پرداخت",
    return: "📦 برگشت محصول",
    weekly_report: "📈 گزارش هفتگی",
  },

  /** {@see OrderDeliveryWidget} **/
  order_delivery: {
    title: "ارسال",
    add_to_delivery_que_action: "افزودن به لیست ارسال مرسولات",
    in_que: "در لیست ارسال",
    message:
      "زمانی که بسته را به مامور ارسال تحویل دادید بر روی کلید<b>تایید تحویل به مامور ارسال</b> کلیک نمایید.",
    message_add_to_service:
      "اگر می خواهید این بسته را با <b>سرویس حمل بار</b> ارسال کنید ، روی دکمه زیر کلیک کنید.",

    action: "تایید تحویل به مامور ارسال",
    pickup_action: "تایید دریافت سفارش",

    checklist: [
      "کارت شناسایی مامور ارسال را بررسی نمایید.",
      "می توانید از سرویس درخواست باربری استفاده نمایید.",
      "سلامت فیزیکی بسته بندی و آراستگی مامور تحویل می تواند به بازگشت مشتریان شما کمک نماید.",
    ],
    manual: {
      title: "در انتظار تایید دریافت بسته توسط مشتری.",
      action_received: "تایید دریافت توسط خریدار",
      action_returned: "برگشت مرسوله",
      message:
        "توجه: تایید دریافت مرسوله بایستی توسط خریدار و یا سیستم صورت گیرد. تنها در مواردی که از رسیدن مرسوله به دست مشتری اطمینان حاصل کرده و مشتری تایید دریافت را انجام نداده باشد؛ از این گزینه برای اتمام روند سفارش استفاده نمایید. برخی سرویس های حمل و نقل در سیستم عملیات تایید دریافت مرسوله را به صورت خودکار انجام خواهند داد.",
    },
    auto_complete_note:
      "بعد از گذشت یک بازه زمانی مشخص، سیستم سفارش را به حالت تحویل داده شد تغییر وضعیت خواهد داد. این بازه زمانی بسته به نوع سفارش متغییر بوده وتوسط سیستم تعیین می گردد.",

    received: {
      title: "مرسوله تحویل مشتری داده شد.",
      delivered_date: "تاریخ تحویل",
    },
    receiver: "گیرنده",
    bill: "فاکتور",

    tracking: {
      title: "افزودن کد و لینک رهگیری",
      code: "کد رهگیری",
      url: "لینک رهگیری",
      message:
        "اگر مرسوله را توسط سرویسی ارسال نموده اید که کد رهگیری برای مرسوله در اختیار شما قرار می دهد، می توانید این کد و لینک مربوطه را در این بخش وارد نمایید. این اطلاعات به مشتری نشان داده خواهد شد.",
    },
    preferred_delivery_time: "زمان تحویل ترجیحی",
    manage_couriers: "مدیریت پیک ها",
    manage_service: "مدیریت سرویس",

    option_deliver_by_courier: "گزینه 1: تحویل توسط پیک های شما.",
    option_add_to_que: "گزینه 2: اضافه کردن به صف ارسال.",
    option_instant_shipping: "گزینه 3: ارسال فوری از طریق سرویس حمل.",
  },
  /** {@see ShopEdit_Home} **/
  shop_home_edit: {
    title: "تنظیمات صفحه اصلی فروشگاه",
    sub_title: "انتخاب دامنه و صفحه اصلی (خانه) فروشگاه",

    default_home: "صفحه خانه پیشفرض",
    default_home_placeholder: "صفحه فروشگاه، صفحه اصلی سایت است",
  },

  /** {@see ReferralLinkPage_Dashboard} **/
  selldone_referral_page: {
    title: "داشبورد کسب اعتبار از معرفی به دوستان",
    referral_link: "لینک معرفی",
    registered: "تعداد اعضا جدید",
    accepted: "تعداد اعضا تایید شده",
    bank: "بانک",
    bank_title: "اطلاعات بانکی برای واریز",
    new_users: "اعضای جدید",
    performance: "عملکرد",
    credit_mode: "پرداخت به صورت اعتبار",
    get_stickers: " دریافت کد Html استیکرها",
    click_copy_sticker_code: "برای کپی کردن کد هر استیکر روی آن کلیک کنید.",
  },
  /** {@see ReferralLinkPage_Payments} **/
  selldone_referral_payment: {
    title: "پرداخت ها",
    officer: "مسئول",
    amount: "میزان تراکنش",
    note: "یادداشت",
    date: "تاریخ",
  },
  /** {@see WidgetShopGateway} **/
  widget_shop_gateway: {
    link_account_caution:
      "شما بایستی یک حساب در کیف پولتان با ارز ({currency}) را به فروشگاه خود اضافه نمایید! کلیک نمایید..",
  },
  /** {@see ProductSellWidget} **/
  product_sell_widget: {
    title: "بازدهی فروش محصول",
  },

  /** {@see OrderFulfillmentWidget} **/
  fulfilment_order_widget: {
    title: "وضعیت فروش دراپ شیپینگ",
    check_action: "تایید دراپ شیپینگ",
    uncheck_action: "لیست تایید شده است",
    pay_action: "پرداخت به فروشنده..",
    pay_completed: "تایید پرداخت",
    list_of_items: "لیست آیتم ها",

    checklist: [
      "مبلغ محصولاتی که به صورت غیر مستقیم می فروشید را به فروشنده اصلی پرداخت نمایید.",
      "پرداخت و تسویه حساب هزینه کالاها به تامین کننده را می توانید به صورت یکجا در بخش حسابداری > دراپ شیپینگ فروشگاه انجام دهید.",
      "پس از پرداخت، تامین کننده سفارش شما را دریافت و پس از آماده سازی مستقیما برای خریدار ارسال خواهد نمود.",
    ],
    message:
      "پس از پرداخت هزینه سفارش به تامین کننده مراحل پیشرفت ارسال سفارش را در این بخش مشاهده نمایید.",
  },

  /** {@see DropshippingPage} **/
  drop_shipping: {
    menu: {
      dashboard: "داشبورد",
      orders: "سفارشات",
      inventory: "انبار",
      shops: "فروشنده ها",
      requests: "درخواست ها",
    },
    drop_shipping_charge: "شارژ دراپ شیپینگ",
  },

  /** {@see DropshipRequestStatus} **/
  dropship_request_status: {
    PENDING: "در انتظار تایید",
    ACCEPT: "تایید شده",
    REJECT: "رد شده",
  },

  /** {@see DropshippingShopPage} **/
  dropshipping_reseller_page: {
    menu: {
      dashboard: "داشبورد",
      orders: "سفارشات",
      wallet: "کیف پول",
    },
  },

  /** {@see DropshippingShopPage_Dashboard} **/
  dropshipping_reseller_dashboard: {
    title: "داشبورد فروشنده واسط",
  },

  /** {@see DropshippingShopPage_Orders} **/
  dropshipping_reseller_orders: {
    title: "سفارشات فروشنده واسط",
  },

  /** {@see DropshippingShopPage_Wallet} **/
  dropshipping_reseller_wallet: {
    title: "حساب های فروشنده واسط",
  },

  /** @see MasterPaymentDialog **/
  master_payment: {
    notifications: {
      payment_success_title: "تایید پرداخت",
      payment_success: "پرداخت تکمیل شده است.",
      buy_title: "خرید",
      pay_by_giftcards: "سفارش شما با کارت هدیه پرداخت گردید.",
      free_order: "سفارش شما رایگان می باشد.",
      pay_by_cod:
        "سفارش شما ثبت گردید. مبلغ سفارش در هنگام دریافت سفارش دریافت خواهد شد.",
      pay_by_dir:
        "سفارش شما ثبت گردید. لطفا مبلغ سفارش را به حساب مشخص شده واریز کرده و فیش واریز را در بخش سفارش آپلود نمایید.",
      pay_title: "پرداخت",
      qr_code_payment: "آدرس پرداخت ایجاد گردید.",
      connecting_to_online_gateway: "در حال اتصال به درگاه پرداخت.",
    },
  },

  /** @see DropShippingAccountCharges **/
  dropship_charges: {
    notifications: {
      pay_confirm_message: "پرداخت تایید می شود.  <br> تاریخ: {payment_at} ",
      pay_fail_title: "عدم پرداخت",
      pay_fail_message: "پرداخت تایید نمی شود.",
    },
  },

  /** @see AdminShopFinance_DropShippingCheckout **/
  dropship_checkout: {
    pay_dialog: {
      title: "پرداخت مبلغ سفارش عمده فروش",
      balance: "موجودی حساب شما",
      total_cost: "مجموع هزینه سفارشات",
      need_charge: "نیاز به شارژ",
      no_account_cation:
        "شما حسابی ندارید، از فروشنده اصلی بخواهید تا برای شما حسابی ایجاد نماید.",
      orders: "سفارشات",
    },
    notifications: {
      success_pay: "پرداخت شما برای این سفارشات تایید و تکمیل گردید.",
    },
  },

  /** @see AdminShopFinance_DropShippingAccounts **/
  dropship_accounts: {
    charge_account: "شارژ حساب",
    charge_dialog: {
      title: "شارژ کیف پول",
      amount_input: "مبلغ شارژ",
      charge_now: "پرداخت مبلغ",
    },
  },

  /** @see Dropshipping_Dashboard **/
  dropship_admin_dashboard: {
    title: "درخواست های خرده فروشی",
    today_order_count: "تعداد سفارشات امروز",
    yesterday_order_count: "تعداد سفارشات دیروز",
    total_7_days: "مجموع سفارشات 7 روز اخیر",
  },
  /** @see DropShippingSelectProducts **/
  dropshipping_products: {
    no_shops:
      "متاسفانه فروشگاهی یافت نشد. در آینده فروشگاه های بیشتری وجود خواهند داشت تا شما محصولات آن ها را در فروشگاه خود قرار دهید.",
    show_all_shops: "نمایش همه",
    show_eligible_shops_message: "نمایش فروشگاه های واجد شرایط",
    show_all_message: "نمایش تمام فروشگاه ها",
    current_shop: "همین فروشگاه",
    request_account: "درخواست حساب",
    request_accepted: "درخواست تایید شده",
    request_rejected: "درخواست رد شده",
    request_pending: "در انتظار بررسی..",
    notifications: {
      add_product: "محصول به فروشگاه شما اضافه شد.",
      request_access: "درخواست دسترسی به فروشگاه با موفقیت ارسال شد.",
    },
  },

  /** @see ProductDropShippingMiddleSellerWidget **/
  product_dropshipping: {
    need_re_enable:
      "این کالا توسط فروشنده اصلی تغییر کرده است، این تغییرات در قیمت موجب غیر فعال شدن محصول در فروشگاه شما شده است. تغییرات را بررسی نمایید و در صورت موافقت با فعال شدن مجدد محصول، کلید زیر را بزنید.",
    need_re_enable_action: "موافقم، اعمال تغییرات و فعال سازی",
    changed_value:
      "این کالا توسط فروشنده اصلی تغییر کرده است. تغییرات را بررسی نمایید و در صورت موافقت برای اعمال تغییرات در محصول خود، کلید زیر را بزنید.",
    changed_value_action: "موافقم، اعمال تغییرات",
    parent_deleted: "این کالا توسط فروشنده اصلی حذف شده است.",
    parent_closed:
      "این کالا توسط فروشنده اصلی غیر فعال شده است! شما قادر به فروش این محصول در فروشگاه خود نیستید، اما اگر فروشنده اصلی محصول را مجددا فعال نماید شما قادر به فعال نمودن مجدد این محصول در فروشگاه خود خواهید بود.",
    notifications: {
      re_enable_success: "این محصول مجددا فعال شد.",
      update_success:
        "اطلاعات این محصول با اطلاعات محصول اصلی به روز رسانی شد.",
    },
  },
  /** @see ProductDropShippingPage **/
  product_dropshipping_admin: {
    title: "دراپ شیپینگ",
    save_alert:
      "تنظیمات دراپ شیپینگ این محصول تغییر کرده است. آیا می خواهید تغییرات را ذخیره نمایید؟",
    reselling_message:
      "با فعال کردن این گزینه، فروشندگان قادر به قرار دادن محصول شما در فروشگاه خود خواهند بود.",
    reselling: "فعال سازی دراپ شیپینگ",
    price_merchants: "قیمت برای فروشنده ها",
    price_commission: "کمیسیون فروشنده (ثابت)",
  },

  /** @see SShopBuyButton **/

  buy_button: {
    waiting_for_availability: "منتظر این کالا هستم",
    inform_me_when_available: "منتظرید موجود بشه؟",
    pay_buy: "خرید و پرداخت",
    quantity: "تعداد",
    quantity_in_basket: "تعداد در سبد خرید",
    count_unit: "عدد",
    remove: "حذف",
    add_to_basket: "افزودن به سبد خرید",
    book_now: "ثبت نام کردن",
    reserve_now: "رزرو کردن",
    buy_now: "خرید",

    buy: "خرید",
    notifications: {
      inform_add_success: "هروقت موجود شد خبرتان می کنیم.",
      inform_remove_success: "از لیست در انتظار موجود شدن خارج شدید.",
    },
  },

  /** @see ProductInfo **/
  product_info: {
    fake: "غیر اصل",
    action: "حراج",
    compare_limit: "حداکثر 10 کالا",
    compare_add: "افزودن به مقایسه",
    compare_be_in_list: "در لیست مقایسه",

    type: "نوع",
    brand: "برند",
    category: "دسته بندی",
    discount: "تخفیف",
    track_price: "دنبال کردن قیمت",
    waiting_for_auction: "منتظر حراجید؟",
    inform_auction: "از حراج با خبرم کن",
    return_in_days: "{days} روز ضمانت بازگشت",
    support24h7: "پشتیبانی 24 ساعت 7 روز",
    support_normal: "پشتیبانی در ساعات اداری",
    original_guarantee: "ضمانت اصل بودن کالا",
    cod_payment: "امکان پرداخت در محل",

    pros: "ویژگی ها",
    cons: "معایب",

    external_link: "اطلاعات بیشتر",
    notifications: {
      congratulation: "تبریک",
      waiting_list_add_success: "موقع حراج این محصول خبرتان می کنیم.",
      waiting_list_delete_success: "از لیست منتظران تخفیف خارج شدید",
    },

    offer_message:
      "با خرید {min_quantity} عدد از این محصول {percent}% از محصولات زیر تخفیف بگیرید",
    up_to: "تا {per_order} مرتبه در هر سفارش",
    get_free: "رایگان",
    get_off: "تا {percent}% تخفیف بگیرید",
  },

  /** @see SStyler **/
  styler: {
    size_class: "سایز و کلاس",
    delete_bg: "حذف تصویر پس زمینه",
    bg_color: "رنگ پس زمینه",
    section_style: "انتخاب استایل",
    link: "انتخاب لینک",
    show_products: "مدیریت لیست محصولات  / دسته بندی ها",
    show_product: "انتخاب محصول",
    delete_section: "حذف بخش",
    text_color: "رنگ متن",
    tex_align: "چینش متن",
    text_style: "استایل نوشته",
    bg_image: "تصویر پس زمینه",

    product: {
      title: "انتخاب محصول",
    },

    /** @see SPageProductsFilter **/
    products: {
      title: "مدیریت لیست محصولات  / دسته بندی ها",
      sort_options: "انتخاب تنطیمات مرتب سازی و نمایش.",
      item_types: "انتخاب نوع آیتم های نمایش داده شده.",
      product_only: "فقط محصولات",
      category_only: "فقط دسته بندی ها",
      no_category: "دسته بندی در فروشگاه شما یافت نشد.",
      limit: "حداکثر تعداد محصول",
      limit_message: "حداکثر تعداد محصولات نمایش داده شده را انتخاب نمایید.",
      select_categories: "انتخاب محدودیت دسته بندی ها.",
    },
  },

  /** @see ShopUsersContactForm **/
  shop_contacts: {
    popup: "چت باکس پشتیبانی",
    popup_message:
      "با فعال کردن این گزینه، کلید پشتیبانی در سمت راست و پایین فروشگاه شما دیده خواهد شد.",
  },

  /** @see ShopPopupBuilderPage **/
  popup_page: {
    preview: "پیش نمایش",

    menu: {
      design: "طراحی",
      appearance: "ظاهر",
      filter: "فیلتر",
      setting: "تنظیمات",
    },
    notifications: {
      save: "نوتیفیکیشن با موفقیت ذخیره شد.",
      edit: "نوتیفیکیشن با موفقیت به روز شد.",
    },
  },
  /** @see SettingPopupAppearance **/
  popup_appearance: {
    position: "موقعیت",
    position_desc: "موقعیت نمایش این نوتیفیکیشن را در صفحه مشخص نمایید.",
    width: "عرض",
    width_desc: "حداکثر عرض صفحه را می توانید مشخص نمایید.",
    height: "ارتفاع",
    height_desc: "حداکثر ارتفاع صفحه را می توانید مشخص نمایید.",
    radius: "شعاع گوشه",
    radius_desc:
      "در بخش می توانید شعاع انحنای گوشه های نوتیفیکیشن را مشخص نمایید.",
    shadow: "سایه",
    shadow_desc: "آیا می خواهید پنجره بازشو سایه داشته باشد؟",
    delay: "تاخیر نمایش",
    delay_desc:
      "بعد از ورود کاربر به فروشگاه شما، بعد از سپری شدن این مقدار زمان، نوتیفیکیشن به کاربر نشان داده می شود.",
    hide: "تاخیر بستن",
    hide_desc:
      "می توانید مشخص کنید چند ثانیه بعد از نمایش، نوتیفیکیشن به صورت خودکار بسته شود. مقدار 0 به معنی عدم بسته شدن خودکار نوتیفیکیشن است.",
    transition: "انیمیشن",
  },

  /** @see SettingPopupFilter **/
  popup_filter: {
    registered: "شرط عضویت و ورود کاربر",
    registered_desc:
      "می توانید انتخاب کنید که این نوتیفیکیشن تنها به کاربران فروشگاه یا مهمانان نمایش داده شود.",
    only_guests: "افراد غیر عضو",
    only_users: "اعضای وارد شده",
    purchased: "سابقه خرید",
    purchased_desc:
      "می توانید انتخاب کنید که این نوتیفیکیشن تنها به کاربرانی که قبلا خرید کرده اند یا آن هایی که تا کنون خریدی نداشته اند نمایش داده شود.",
    no_purchase: "تاکنون خرید نکرده اند",
    yes_purchase: "قبلا خرید کرده اند",
    sex: "جنسیت",
    sex_desc:
      "آیا می خواهید این نوتیفیکیشن تنها به کاربرانی با جنسیتی مشخص نشان داده شود؟",
    age: "حداقل سن",
    age_desc:
      "در صورت ورود هر مقدار بیشتر از 6 بایستی کاربر لاگین کرده باشد و حتما تاریخ تولد خود را وارد نموده باشد.",
    levels: "سطح های باشگاه مشتریان",
    levels_desc:
      "در صورتی که کاربر یکی از سطح های انتخاب شده زیر را داشته باشد، این نوتیفیکیشن به وی نمایش داده می شود.",
    countries: "محدودیت جغرافیایی",
    countries_desc:
      "آیا می خواهید این نوتیفیکیشن تنها به کاربرانی که از یک کشور خاص وارد می شوند نمایش داده شود؟",
  },
  /** @see SettingPopup **/
  popup_setting: {
    published: "منتشر شده",
    repeat: "تکرار نمایش",
    repeat_msg:
      "آیا می خواهید این نوتیفیکیشن بیش از یک بار به کاربر نشان داده شود؟",
    intervals: "فاصله زمانی نمایش",
    intervals_msg:
      "حداقل فاصله زمانی که میان نمایش  نوتیفیکیشن ها به یک کاربر بایستی گذشته باشد.",
    designer_zone: "مشخصات طراح",
    title: "عنوان نوتیفیکیشن",
    note: "یادداشت طراح",
    image: "تصویر نوتیفیکیشن",
    delete: {
      title: "حذف",
      sub_title:
        "آیا می خواهید این نوتیفیکیشن را حذف نمایید؟ توجه داشته باشید بعد از حذف امکان بازگشت وجود ندارد.",
      action: "بله، حذف نوتیفیکیشن",
    },
    notifications: {
      delete: "نوتیفیکیشن با موفقیت حذف گردید.",
    },
  },
  /** @see ShopEdit_Sms **/
  shop_sms: {
    title: "مدیریت پیامک ها",
    sub_title: "الگوی پیامک ها",
    message:
      "محتوای پیامک های ارسالی فروشگاه خود را در اینجا مشاهده می نمایید. به دلیل محدودیت در ثبت الگوهای اعتبارسنجی در سرویس ارسال پیامک، امکان شخصی سازی پیامک ها در حال حاضر فراهم نیست.",
  },
  /** @see ShopEdit_Emails **/
  shop_emails: {
    title: "مدیریت ایمیل ها",
    sub_title:
      "لیست ایمیل های ارسالی فروشگاه به مشتریان و مدیران را در این بخش مشاهده می نمایید. ایمیل ها به صورت خودکار و بر اساس اطلاعاتی که برای فروشگاه خود وارد نموده اید طراحی و ساخته می شوند. همچنین امکان شخصی سازی پیام ها و تصاویر در آینده برای عموم فعال خواهد شد.",
  },

  /** @see InstagramViewMedias **/
  /** @see AdminShop_Channels_Instagram **/
  instagram: {
    title: "فروش در اینستاگرام",
    message:
      "به کمک این ابزار شما می توانید اینستاگرام خود را تبدیل به یک فروشگاه نمایید. تنها کافیست حساب اینستاگرام خود را در این بخش به فروشگاه اضافه و تایید کرده، سپس شما قادر خواهید بود روی هر پست یا استوری یک یا چند محصول از لیست محصولاتتان اضافه و تگ نمایید یا آن پست را تبدیل به یک محصول جدید کنید، با این کار تصویر پست به عنوان تصویر محصول در نظر گرفته شده و به لیست محصولات فروشگاه شما نیز افزوده خواهد شد.",
    add_product: "افزودن محصول جدید",
    create_product: "ایجاد محصول",
    link_box_msg:
      "این لینک را در بایو اینستاگرام، تلگرام و یا دیگر شبکه های اجتماعیتان قرار دهید تا مخاطبانتان سریعتر، ساده تر، دقیقتر و در نهایت بیشتر از شما خرید کنند.",
    remove_account: "حذف / تغییر حساب متصل ایسنتاگرام",
    sync: "درخواست به روزرسانی (هر 60 دقیقه)",
  },

  /** @see ServiceBillingItem **/
  service_bill: {
    task: {
      title: "لیست کارها",
      message:
        "عناوین کارهایی که می خواهید انجام داده و میزان پیشرفت آن را به اطلاع خریدار برسانید مشخص نمایید.",
    },
    booking: {
      title: "رزرو",
      message:
        "این سفارش در بازه زمانی مشخص انجام خواهد شد، مشتری بازه مورد نظر خود را انتخاب کرده است، در صورتی که هر تغییر در بازه زمان انتخابی می خواهید بدهید، آن را به اطلاع مشتری برسانید.",

      selected_checkin: "تاریخ انتخابی ورود مشتری",
      selected_checkout: "تاریخ انتخابی خروج مشتری",
      change_days_question:
        "آیا نیاز به تغییر در بازه روزهای انتخابی مشتری دارید؟",
      show_calendar: "نمایش تقویم سفارشات",
    },
    pricing: {
      title: "قیت گذاری سرویس",
      message: "چه مبلغی برای این سرویس تعیین می کنید؟",
    },
    subscription: {
      title: "اشتراک",
      message:
        "مدت زمان اشتراک با خرید این سرویس رابر اساس روز می توانید انتخاب نمایید. در صورتی که می خواهید مقادیر پیش فرضی که قبلا وارد کرده اید را تغییر دهید، خریدار را مطلع سازید.",
      duration: "Subscription period",
    },
    charge: {
      title: "شارژ",
      message:
        "شما برای این آیتم یک مقدار شارژ مشخص کرده اید. می توانید مقدار شارژ را برای آیتم خریداری شده توسط مشتری تغییر دهید.",
      charge: "شارژ",
    },

    save_item: "تایید و ثبت اطلاعات",
    start_service: "شروع انجام خدمت",
    end_service: "پایان خدمت",
  },
  /** @see ServiceTasksTableWidget **/
  service_tasks: {
    notification_finish: {
      title: "اتمام خدمت",
      message:
        "در صورتی که این کار انجام شده است برای اتمام و بستن سفارش کلید تایید را بزنید.",
      action: "تایید و تکمیل سفارش",
    },
  },

  /** {@see ProductEditOutputs} **/
  product_outputs: {
    outputs_form: "ساختار نمایش اطلاعات (خروجی)",

    virtual: {
      title: "فرم اطلاعات خروجی محصول",
      sub_title:
        "اطلاعاتی که می خواهید پس از خرید به کاربر نمایش داده شود. این فرم به ویژه برای فروش کالا های مجازی کاربردی است. مانند فروش شارژ و یا لینک های دانلود یک بار مصرف.",
    },

    service: {
      title: "طراحی خدمت",
      sub_title:
        "ابتدا نوع سرویس خود را انتخاب نموده و اطلاعات مورد نیاز را وارد نمایید. برای مثال می توانید لیست وظایف تعریف نمایید یا از مشتری بازه زمانی برای بوکینگ یا دریافت وقت ملاقات دریافت نمایید.",
    },
  },

  /** {@see ServiceDesign} **/
  service_design: {
    type: "نوع خدمت",
    type_message:
      "نوع خدماتی که برای این محصول ارائه می دهید را انتخاب نمایید. با انتخاب هر مورد فرم مشخصات مربوط به آن نمایش داده می شود. بر اساس نوع سرویس انتخابی شما، ممکن است از مشتری در هنگام ثبت سفارش اطلاعات بیشتری دریافت شود.",
  },

  /** ServiceTypes **/
  ServiceTypes: {
    DEMAND: {
      title: "بر اساس تقاضا",
      desc: "مثل تعمیرات منزل، رنگکاری، تعمیر ماشین و ...",
    },
    BOOKING: {
      title: "رزرو",
      desc: "مثل سفارش هتل و یا ویلا.",
    },
    APPOINTMENT: {
      title: "وقت ملاقات",
      desc: "مثل وقت پزشک یا آموزش در محل.",
    },
    RENTAL: {
      title: "اجاره",
      desc: "مثل اجاره یک چیز و یا جا هست.",
    },
    SUBSCRIPTION: {
      title: "اشتراک یا ابونمان",
      desc: "مثل عضویت در باشگاه و ...",
    },
    CHARGE: {
      title: "شارژ",
      desc: "مثل شارژ حساب، شارژ استفادهاز وسیله یا اپلیکیشنی.",
    },
    CUSTOM: {
      title: "سفارشی",
      desc: "اگر سرویسی که ارائه میدهید هیچ کدام از موارد فوق نیست این گزینه را انتخاب نمایید.",
    },
  },

  /** {@see AvocadoHomePage} **/
  avocado: {
    name: "آووکادو",
    title: "فروش سریع، دقیق و لذت بخش در تمام شبکه های اجتماعی",
    message:
      "یک مبلغ و یک عنوان تنها چیزی است که برای دریافت پول از مشتریانتان نیاز دارید! پول مستقیم به حساب شما واریز می شود و مشتریانتان تجربه بی نظیری از خرید خواهند داشت.",
    new_order: "صورت حساب جدید",
    create_by_seller_title: "ایجاد صورتحساب",
    create_by_seller_message:
      "در صورتی که قصد دارید یک صورت حساب با مبلغ مشخصی ایجاد کرده و برای فردی ارسال نمایید می توانید کلید زیر را زده تا فرم ساخت صورت حساب به شما نشان داده شود. پس از پر کردن فرم و زدن کلید تایید، یک لینک به شما نشان داده خواهد شد، این لینک را به خریدار دهید تا از طریق این لینک قادر به پرداخت و پیگیری این صورت حساب باشد. زمانی از این روش استفاده کنید که شما قصد ثبت سفارش و ایجاد صورت حساب برای مشتری خود را دارد. در غیر این صورت مشتری شما می تواند از طریق فرم ثبت سفارش آووکادو سفارش خود را ثبت نماید.",

    create_by_buyer_title: "فرم ثبت سفارش",
    create_by_buyer_message:
      "با فعال کردن این بخش یک لینک به شما نشان داده خواهد شد، این لینک را در اختیار خریداران خود قراردهید تا از طریق آن سفارش خود را برای شما ثبت نمایند.",

    orders_list: "لیست سفارشات",
    active_mode: "فعال بودن دریافت سفارش",
    inactive_mode: "غیر فعال",
    active_message:
      "در صورت فعال کردن این سرویس، مشتریانتان قادر به ثبت سفارش محصول از طریق یک فرم درخواست که در زیر می بینید، خواهند بود.",
    avocado_form_link_message:
      "این لینک را در بایو اینستاگرام، تلگرام و یا دیگر شبکه های اجتماعی قرار دهید تا مخاطبانتان سریعتر، ساده تر، دقیقتر و در نهایت بیشتر از شما خرید کنند.",
    need_address: "دریافت آدرس",
    need_address_msg:
      "در صورتی که نیاز به دریافت موقعیت مکانی و آدرس خریدار دارید این گزینه را انتخاب نمایید.",
    avocado_link_message:
      "تنها کافیست لینک فوق را در اختیار مشتری قرار داده تا از طریق آن اقدام به پرداخت نماید. مشتری از طریق این لینک قادر به پیگیری سفارش نیز می باشد.",
    edit_order: "ویرایش سفارش",
    progress: "میزان پیشرفت",
    buyer_link: "لینک خریدار",
    buyer_link_message:
      "این لینک را در اختیار خریدارتان قرار دهید. خریدار از طریق این لینک قادر به پرداخت و پیگیری سفارشش خواهد بود. این لینک کد گذاری شده است، در صورتی که این لینک در اختیار هر فردی قرار گیرد وی قادر به پرداخت و دیدن اطلاعات خواهد بود. این لینک برای مدت 60 روز فعال خواهد بود. برای کپی روی لینک زیر کلیک کنید.",
    OrderConfirm_done: "سفارش تایید شده است.",
    OrderConfirm_message:
      "در صورتی که پرداخت و صحت سفارش را تایید می کنید، کلید زیر را بزنید.",
    OrderConfirm_action: "تایید سفارش",
    PreparingOrder_message:
      "در صورتی که سفارش مشتری آماده ارسال است، کلید تایید زیر را بزنید.",
    PreparingOrder_action: "سفارش آماده ارسال است",
    finish_message:
      "در صورتی که انجام این سفارش به پایان رسیده است، کلید پایان سفارش را زده تا این سفارش بسته شود.",
    finish_action: "اتمام انجام سفارش",
    finish_dialog: {
      title: "تکمیل سفارش",
      message: "آیا این سفارش تکمیل شده است و از بستن آن اطمینان دارید؟",
      action: "بله، تایید تکمیل سفارش",
    },
    configuration: "تنظیمات آووکادو",
    delivery_price: "هزینه ارسال",
    edit_avocado_action: "ویرایش اطلاعات",
    submit_pricing_avocado_action: "تایید و ثبت سفارش",
    add_avocado_action: "ایجاد لینک صورت حساب",
    avocados_list: "لیست صورت حاساب ها",
    not_pricing: "این آیتم قیمت گذاری نشده اشت!",

    show_all: "نمایش همه",
    show_accepted: "نمایش موارد تایید شده",

    notifications: {
      update_success: "آوواکادو با موفقیت ویرایش شد.",
      add_success: "آووکادو با موفقیت ایجاد گردید.",
    },
  },

  /** {@see ShopActiveAvocadosWidget} **/
  avocado_orders: {
    title: "سرویس فروش آووکادو",
    title_small: "گزارش سفارشات",
    pending_orders: "عدد سفارش فعال",
    avocado: "سفارش آووکادو",
  },

  /** {@see AvocadoAddEdit} **/
  avocado_process: {
    step1: " قیمت گذاری",
    step1_msg:
      "قیمت هر آیتم را وارد و تیک سبز رنگ را بزنید. در صورتی که امکان فروش آیتمی وجود نداشت وضعیت آن را به حالت رد شده تغییر دهید.",
    step2: "تایید صورت حساب",
    step2_msg:
      "برای این سفارش صورت حساب ایجاد نمایید. می توانید برای صورت حساب یک عنوان و توضیح وارد نمایید. مبلغ سفارش به صورت خودکار بر اساس مجموع قیمت اقلام محاسبه شده است.",
    title_input: "عنوان صورت حساب*",
    show_to_customer: "این اطلاعات به خریدار نشان داده می شود.",
    description_msg:
      "توضیح یا اطلاعاتی برای این سفارش می خواهید ثبت کنید؟ این اطلاعات به خریدار نشان داده می شود.",
    price_input: "مبلغ سفارش*",
    tax_none: "بدون مالیات",
    tax_included: "لحاظ در قیمت",
    tax_add: "افزودن مالیات",
    tax_message: "می توانید انتخاب نمایید مالیات در قیمت لحاظ شده است یا خیر.",
    tax_included_messages: "مالیات در قیمت لحاظ شده است.",
    tax_add_messages: "مالیات به مبلغ نهایی افزوده شود.",
  },

  /** {@see ProductHyperPage} **/
  /** {@see AdminShop_Channels_Hyper} **/
  hyper: {
    name: "هایپر",
    print_label: "لیبل زیر را پرینت کرده و در مقابل محصول بگذارید",
    hyper_form_link_product_message:
      "مشتریان شما قادر به خرید سریع {product} از طریق این لینک خواهند بود. همچنین با اسکن کد QR وارد همین لینک خواهند شد.",
    title: "فروش سریع هایپر",
    message:
      "به کمک کانال فروش هایپر سلدان مشتریان شما قادر به انتخاب محصولات با اسکن یک کد QR و پرداخت بدون نیاز به انجام کار یا فرایندی توسط شما به عنوان فروشنده خواهند بود. از این روش برای فروش آیتم های محدود به تعداد بالا و سرعت بالا در فستیوال ها، نمایشگاه ها و یا هرجای دیگری که نیاز به سرعت دارید استفاده نمایید. بعد از فعال کردن هایپر در این بخش، شما می توایند برای محصولات فیزیکی در بخش مدیریت محصول، اقدام به ساخت کد QR هایپر آن نمایید.",
    orders_list: "لیست سفارشات هایپر",
    active_mode: "کانال فروش هایپر فعال است",
    inactive_mode: "غیر فعال",
    active_message:
      "در صورت فعال کردن این گزینه امکان ساخت کدهای فروش سریع در بخش مدیریت هر محصول نمایش داده خواهد شد.",
    hyper_form_link_message: "لینک صفحه هایپر فروشگاه شما",
    configuration: "تنظیمات هایپر",
  },

  /** {@see ShopActiveHyperWidget} **/
  hyper_orders: {
    title: "سرویس فروش هایپر",
    title_small: "گزارش فروش",
    hyper: "سفارشات دریافتی",
  },

  /** {@see ProductFilesManagement} **/
  product_file: {
    no_file: "هیچ فایلی آپلود نشده است!",
    delete_dialog: {
      title: "حذف فایل",
      message: "آیا از حذف این فایل اطمینان دارید؟",
      action: "بله، حذف فایل",
    },
    notifications: {
      delete_success: "فایل با موفقیت حذف شد.",
    },
  },

  /** {@see NotificationTopBar} **/
  notification_top_bar: {
    free_charge:
      "🎊 حساب خود را {amount} شارژ کنید تا {amount_total} شارژ دریافت نمایید.",
    charge_action: "دریافت شارژ رایگان",
    claim_title: "شارژ رایگان خود را دریافت نمایید",
    claim_charge_caution:
      "توجه: امکان تبدیل ارزها در میان حساب های کیف پول شما وجود ندارد. در نتیجه حسابی را انتخاب نمایید که متناسب با ارز مبادله شده در فروشگاه شما است.",
    account_input: "حساب مقصد",
    account_msg: "حسابی که قصد واریز شارژ هدیه را دارید انتخاب نمایید.",
  },

  /** {@see SelldoneApplicationsWidget} **/
  selldone_applications: {
    title: "از سفارشات جدید در لحظه خبردار شوید!",
    msg: "کسب و کار خود را در هر مکان و هر زمان مدیریت کنید.",
  },

  /** {@see ShopEdit_SEO**/
  shop_seo: {
    title: "تنظیمات سئو سایت",
    msg: "با استفاده از بهینه سازی برای موتورهای جستجو، کانال فروش اورگانیک خود را تقویت نمایید.",
    auto: {
      title: "موتور سئو خودکار",
      msg: "ارائه یک تجربه سریع و یکپارچه در وب برای مخاطبان و موتورهای جستجو سایت.",
    },

    amp: {
      title: "AMP",
      msg: "تولید خودکار صفحات موبایلی سریع.",
    },
  },

  /** {@see ShopEdit_Emails} **/
  shop_preferences: {
    order: {
      title: "سفارش ها",
      desc: "در صورت پرداخت سبد خرید توسط مشتری، یک ایمیل حاوی اطلاعات سفارش به این آدرس ارسال خواهد شد.",
    },
    return: {
      title: "مرجوعی کالا",
      desc: "در صورت بازگشت محصول توسط خریدار، ارسال خواهد شد. ارسال این ایمیل بستگی به پلن خریداری شده تسوط شما دارد.",
    },
    pos: {
      title: "صندوق فروشگاهی",
      desc: "گزارش خریدهای صندوق های فروش به این ایمیل ارسال می گردد.",
    },
    avocado: {
      title: "آووکادو",
      desc: "ارسال گزارش روزانه سفارشات آووکادو.",
    },
    accounting: {
      title: "حسابداری",
      desc: "گزارش های و اعلان های مالی فروشگاه.",
    },
    subscription: {
      title: "اشتراک ها",
      desc: "آخرین وضعیت پلن های خریداری شده و اعلام شروع و پایان حق اشتراک.",
    },
    technical: {
      title: "موضوعات فنی",
      desc: "اعلان های فنی در مورد دامنه و وضعیت سرویس.",
    },
    report: {
      title: "گزارش ها",
      desc: "گزارش های هفتگی و ماهانه به این ایمیل ارسال می گردد",
    },
    review: {
      title: "بررسی و تاییدها",
      desc: "در صورت نیاز به تایید یک فرایند در فروشگاه، ایمیل مربوطه به این آدرس ارسال خواهد شد. برای مثل برای تایید ارسال ایمیل مارکتینگ به کاربران فروشگاه.",
    },
  },
  /** {@see ShopEdit_Languages} **/
  shop_languages: {
    title: "زبان های فروشگاه",
    sub_title: "نصب و فعال سازی پکیج های ترجمه خودکار فروشگاه.",
    message:
      "شما می توانید تا 10 بسته زبانی را در فروشگاه خود نصب نماید. در صورت نیاز به نصب پکیج های بیشتر با ما تماس بگیرید.",
  },

  /** {@see InviteFriendsDialog} **/
  invite_friends: {
    title: "کسب و کارتان را به دوستانتان معرفی نمایید!",
    msg: "یک دوست را به سلدان معرفی کنید. آنها هنگام ثبت نام یک کوپن 99 دلاری دریافت می کنند، پس از اولین شارژ ایشان، شما نیز یک کوپن 15 دلاری دریافت خواهید کرد.",
    invite: {
      title:
        "به فروشگاه ساز سلدان بپیوندید تا یک هدیه 99 دلاری رایگان دریافت کنید.",
      description:
        "من شما را به سلدان دعوت می کنم تا کسب و کار خود را به صورت آنلاین و با یک ابزار فوق العاده شروع کنید.",
      hashtags: "فروشگاه_ساز,فروش_آنلاین",
      quot: "من یک فروشگاه آنلاین توسط سلدان ساختم، شما هم اکنون می توانید تجارت خود را آنلاین کنید.",
    },
  },

  /** {@see ShopsListPage} **/
  shops_list: {
    title: "فروشگاه های من",
    message:
      "لیست فروشگاه های من، فروشگاه های دارای دسترسی و فروشگاه های نمونه.",
  },

  /** {@see DeliveryServiceProcessingTable} **/
  shipping: {
    warehouse_error:
      "ابتدا انبار خود را تنظیم کنید! این آدرس به عنوان مبدأ حمل و نقل استفاده خواهد شد.",
    errors: {
      set_origin: "نقشه موقعیت مکانی خود را تنظیم کنید.",
      set_country: "کشور خود را تنظیم کنید.",
      set_address: "آدرس خود را تنظیم کنید.",
      set_zip: "کد پستی خود را تنظیم کنید.",
    },
    set_warehouse: "تنظیم انبار",
    pickup_location: "محل تحویل",
    refresh_rates: "به روزرسانی نرخ",
    no_rate: "بدون نرخ...",
    view_messages: "مشاهده پیام‌ها...",
    not_set_yet: "هنوز تنظیم نشده است!",
    drop_orders_here: "سفارش را اینجا بندازید...",
  },

  /** {@see AdminShop_Blog_Categories} **/
  blog_category: {
    title: "دسته بندی مقالات",
    add_action: "ایجاد دسته بندی جدید",
    add_dialog: {
      title: "ایجاد و ویرایش دسته",
      force_edit: "تغییر آدرس دسته",
      force_edit_msg: "نام دسته را تغییر دهید و همه مقالات را به روز کنید.",
      star_msg: "دسته های ستاره دار، دارای اولویت نمایش در وبلاگ هستند.",
      star: "ویژه",
      delete_action: "حذف دسته",
      add_action: "افزودن دسته",
      edit_action: "ویرایش دسته",
    },
  },

  /** {@see PagesManagement_AboutUs} **/
  about_us: {
    title: "صفحه درباره ما",
    subtitle:
      "یک مقاله درباره کسبو کار خود بنویسید تا در صفحه درباره ما نشان داده شود. این صفحه به شناخت برند و کسب و کار شما برای مخاطبانتان کمک خواهد کرد.",
  },
  /** {@see PagesManagement_Terms} **/
  terms: {
    title: "صفحه شرایط استفاده",
    subtitle:
      "شرایط خرید و استفاده از خدمات خود را برای مشتریانتان توضیح دهید.",
  },
  /** {@see PagesManagement_Privacy} **/
  privacy: {
    title: "صفحه سیاست حفظ حریم خصوصی",
    subtitle:
      "سیاست حفظ حریم خصوصی یک بیانیه یا سند قانونی است که برخی یا همه روش‌های جمع‌آوری، استفاده، افشای و مدیریت داده‌های مشتری یا مشتری را توسط یک طرف مشخص می‌کند.",
  },
  /** {@see PagesManagement_ContactUs} **/
  contact_us: {
    title: "صفحه ارتباط با ما",
    subtitle:
      "اطلاعات تماس، آدرس و شماره تماس خود را در این بخش بنویسید تا به مشتریان شما در صفحه تماس با ما نشان داده شود.",
  },
  /** {@see AdminShop_Applications_Metaverse} **/
  metaverse: {
    title: "پل متاورس",
    subtitle:
      "سلدان 100% خدمات مبتنی بر API را در فضای بازرگانی ارائه می دهد. توسعه دهندگان بازی، بلاک چین و متاورس می توانند از این API های قدرتمند برای اتصال مشاغل، مشتریان و خدمات در آینده فضاهای کار، زندگی و تجارت استفاده کنند.",
    message: "دسترسی زودهنگام برای توسعه دهندگان بازی",
  },

  /** {@see ShopProcessCenterBulkExportActionsBasket} **/
  orders_bulk_export: {
    title: "دستیار سفارشات",
    timespan: {
      title: "بازه زمانی",
      subtitle: "تاریخ شروع و پایان ثبت سفارشات را انتخاب کنید.",
    },
    tasks: {
      title: "خروجی وظایف",
      subtitle:
        "لیست وظایف برای پردازش سفارشات انبوه را دانلود کنید. نتیجه فقط شامل سفارشات پرداخت شده و یا پرداخت در محل است.",
      export_title: "لیست وظایف",
    },
    labels: {
      title: "برچسب جعبه ها",
      subtitle:
        "لیست تمام برچسب های سفارشات را در بازه زمانی انتخابی و وضعیت انتخابی بارگیری کنید. نتیجه فقط شامل سفارشات پرداخت شده و COD است.",
      export_title: "برچسب بسته ها",
    },
  },

  /** {@see AdminShopMarketing_Funnels} **/
  customers_funnel: {
    title: "جمعیت شناسی مشتریان",
    subtitle:
      "مشتریان خود را فیلتر کنید و به صورت یک فایل خروجی بگیرید.  با این اطلاعات می توانید تصمیمات بهتری برای ارتقاع خدماتتان بگیرید.  لطفا به حریم خصوصی مشتریان خود احترام بگذارید و هرگز ایمیل های انبوه برای آنها ارسال نکنید! هرگز اطلاعات مشتریان خود را با شرکت های ثالث بدون کسب اجازه از تک تک مشتریان، به اشتراک نگذارید.",
  },

  /** {@see AffiliatePage_Dashboard} **/
  affiliate_pos: {
    title: "پنل ثبت سفارش",
    open_pos_action: "ثبت سفارش سریع",
    description:
      "این گزینه برای ادمین های پیج های اینستاگرام و دیگر شبکه های اجتمائی مناسب است. زمانی که شما سفارشات را مستقیما از مشتریان دریافت می کنید این گزینه برای شما مناسب است. تنها کافیست سفارش را در پوز ثبت کرده و فیش واریز را آپلود نمایید تا کارمندان فروشگاه سفارش شما را دریافت نموده و پس از تایید برای مشتری نهایی ارسال کنند.",
  },

  /** {@see ShopEdit_Shop} **/
  shop_configuration: {
    login: {
      title: "روش های ورود",
      subtitle: "روش های ورود کاربران به فروشگاه خود را شخصی سازی نمایید.",
    },

    /** {@see ShopConfigurationCheckout} **/
    checkout: {
      title: "مراحل خرید",
      subtitle:
        "شما می توانید مسیر مشتری و مراحل خرید در فروشگاه را سفارشی کنید.",
      map: {
        title: "نقشه",
        subtitle:
          "کاربران باید محل تحویل را روی نقشه (مانند اوبر) انتخاب کنند.",
        subtitle_no_map:
          "در صورت عدم وجود مکان در آدرس ارائه شده توسط مشتری، فاصله در محاسبه حمل و نقل صفر در نظر گرفته می شود.",
      },
      mode: {
        title: "نقطه ورود مشتری",
        default: {
          title: "پیشفرض",
          msg: "کاربران در اسرع وقت وارد سایت می شوند. (نرخ تبدیل بیشتر)",
        },
        on_checkout: {
          title: "در زمان تایید سفارش",
          msg: "کاربران در مرحله پرداخت وارد می شوند.",
        },
        login_free: {
          title: "ورود اختیاری",
          msg: "ورود اختیاری برای کاربر پس از پرداخت.",
        },
      },

      express: {
        title: "هدایت مشتری بعد از افزودن محصول به سبد خرید",

        false: {
          title: "حالت عادی",
          msg: "کاربر در صفحه مانده و به خرید خود ادامه خواهد می دهد.",
        },
        true: {
          title: "حالت اکسپرس",
          msg: "هدایت کاربر به صفحه تکمیل سفارش پس از افزودن محصول به سبد خرید.",
        },
      },

      shipping_address: {
        title: "پرسیدن آدرس ارسال",
      },
    },
  },

  /** {@see CheckoutOptions} **/
  checkout_options: {
    default: {
      title: "فیزیکی و خدماتی (پیش فرض)",
      desc: "از مشتری خواسته خواهد شد که آدرسی را در مرحله تایید سفارشات فیزیکی و خدماتی وارد کند.",
    },
    physical: {
      title: "تنها فیزیکی",
      desc: "از مشتری خواسته خواهد شد که آدرسی را در مرحله تایید سفارشات فیزیکی وارد کند.",
    },
    off: {
      title: "غیرفعال",
      desc: "هرگز آدرس دریافت پرسیده نمی شود. ⚠ اگر قصد دارید با انتخاب نوع فیزیکی حتی برای محصولات خدماتی خود تنوع (رنگ، وزن و ...) بسازید، از این گزینه استفاده کنید.",
    },
  },

  /** {@see ShopEdit_BusinessModel} **/
  business_model: {
    title: "تنظیمات مدل کسب و کار",
    subtitle:
      "مدل کسب و کار خود را تنظیم کنید، و باقی کار را به سلدان بسپارید! ما سیستم عامل شما را در پشت صحنه پیکربندی می کنیم.",
  },
  business_type: {
    title: "انواع کالا ها",
    subtitle:
      "نوع محصولاتی را که می خواهید در فروشگاه خود بفروشید تنظیم کنید. انواع محصول در سلدان چیزی بیش از تعریف یک نوع برای محصولات است. تنوع ها تعیین کننده فرآیند پردازش سفارشات است.",

    send_activation_request_to_support:
      "درخواست فعالسازی را در یک تیکت پشتیبانی ارسال کنید.",
    require_kyc: "احراز هویت مالک فروشگاه.",
    needs_enterprise_license: "نیاز به لایسنس سازمانی.",
    marketplace_caution_message:
      "با انتخاب  مدل کسب و کار مارکتپلیس عمیقاً بر پیکربندی سیستم عامل کسب و کار شما تأثیر می گذارد. به عنوان مثال، شما باید حداقل یک تامین کننده (وندور و یا فروشنده)، یا بیشتر، برای هر محصول با قیمت گذاری و موجودی مستقل تعریف کنید. مشتریان نمی توانند محصولاتی را بخرند که تامین کننده ای ندارند.",
  },

  /** {@see BusinessModelView} **/
  business_model_view: {
    normal: {
      title: "فروشگاه معمولی",
      desc: "معمولاً یک SME یا کسب و کار خانگی - که محصول خود را مستقیماً به مشتریان می فروشد یا محصولات تأمین کنندگان عمده را می فروشد.",
    },
    dropshipping: {
      title: "دراپشیپینگ",
      desc: "هیچ محصول و موجودی ندارید - شما به شخص ثالث، معمولاً یک عمده فروش یا سازنده، پول می پردازید، و آنها در پشت صحنه سفارشات را انجام می دهند.",
    },

    wholesaler: {
      title: "تامین کننده دراپشیپینگ",
      desc: "معمولاً یک عمده فروش یا یک تولید کننده - که سفارشات را مستقیماً به مصرف کننده نهایی ارسال می کند. فروشندگان دیگر در سلدان می توانند محصولات شما را در فروشگاهشان دراپشیپ نمایند.",
    },
    marketplace: {
      title: "مارکتپلیس",
      desc: "بازار آنلاینی که خریداران و فروشندگان را در یک پلت فرم اختصاصی و متمرکز به هم متصل می کند.",
    },

    franchise: {
      title: "فرانچایز / شعبه",
      desc: "رنچایز روشی برای توزیع محصولات یا خدمات است که شامل یک امتیاز دهنده است که برند شما را ایجاد می کند (فرانچایز) یا محصولات شما را با نام تجاری خود به فروش می رساند (شعبه).",
    },
  },

  /** {@see MarketplacePage} **/
  marketplace: {
    vendor_wallets: "کیف پول ها",
    pricing_models: "قیمت گذاری",
    add_vendor: "افزودن فروشنده",
    requests: "درخواست ها",
  },

  price_input_type: {
    title: "نوع ورودی قیمت",
    default: {
      title: "پیش فرض",
      desc: "یک مقدار را به عنوان تعداد در سبد خرید انتخاب می شود.",
    },
    area: {
      title: "مساحت",
      desc: "عرض و طول به عنوان ورودی برای محاسبه تعداد وارد کنید.",
    },
    volume: {
      title: "حجم",
      desc: "عرض، طول و ارتفاع به عنوان ورودی برای محاسبه تعداد وارد کنید.",
    },
    custom: {
      title: "سفارشی (توسط فرم ورودی)",
      desc: "بدون نیاز به صدها تنوع، یک فرم محاسبه هزینه برای محصولات قابل سفارشی سازی و یا با تنوع زیاد ایجاد کنید.",
    },
  },

  /** {@see VendorsList} **/
  vendors_list: {
    title: "وندورهای من",
    message: "لیست فروشگاهایی که به عنوان تامین کننده به آنها اضافه شده ام.",
  },

  vendor_page: {},

  /** {@see ShopDomains} **/
  domains: {
    message:
      "چندین دامنه را به سیستم عامل کسب و کار خود متصل کنید و همه آنها را در یک مکان مدیریت کنید. می توانید از ویژگی چند دامنه برای ایجاد دامنه های اختصاصی برای هر قسمت از وب سایت خود مانند وبلاگ و انجمن استفاده کنید یا از دامنه های اختصاصی برای  هر یک از شرکای تجاری خود  و افیلیت ها استفاده کنید.",
  },

  /** {@see TeamNoteButton}   {@see TeamNoteDialog} **/
  notes: {
    add_action: "اضافه کردن یادداشت برای تیم",
    notifications: {
      success_add: "یادداشت با موفقیت اضافه شد.",
      success_delete: "یادداشت با موفقیت حذف شد.",
    },
  },

  /** {@see WidgetAppCard} **/
  app_card: {
    category: "دسته بندی",
    installs: "نصب",
    actives: "فعال",
    uninstalls: "حذف",
    app_code: "کد اپلیکیشن",
    app_mode: "نوع اپلیکیشن",
  },

  product_status: {
    open: {
      name: "فعال",
      title: "فعال | فروش آنلاین و غیر حضوری",
      description: "این محصول برای سفارش آنلاین در دسترس خواهد بود.",
    },
    close: {
      name: "غیر فعال",
      title: "غیر فعال | فقط فروش حضوری",
      description: "این محصول برای سفارش آنلاین در دسترس نخواهد بود.",
    },
    pending: {
      name: "در انتظار",
      title: "در انتظار",
      description: "قبل از فعال شدن، نیاز به بررسی بازار است.",
    },
    rejected: {
      name: "رد شده",
      title: "رد شده",
      description: "این محصول توسط بازار رد شده است.",
    },
  },

  /**
   * AUto fill suggestions
   */
  suggestions: {
    /**
     * Vendor Payment
     */
    vendor_payment: {
      note: [
        "پرداخت برای فروش انجام شده",
        "پرداخت کمیسیون فروشنده.",
        "تراکنش با موفقیت انجام شد.",
        "حواله برای فروش های اخیر.",
        "انتقال موفق برای خدمات فروشنده.",
      ],
      /**
       * Reverse fund
       */
      reverse_fund_reason: [
        "بازگشت وجوه: انتقال از بانک به کیف پول فروشنده.",
        "شارژ مجدد کیف پول فروشنده: بازگشت وجوه از حساب بانکی.",
        "معامله معکوس: انتقال وجه از بانک به کیف پول فروشنده.",
        "بازپرداخت: برگشت سپرده بانکی به کیف پول فروشنده.",
        "برگشت وجوه: تکمیل مجدد کیف پول فروشنده از بانک.",
      ],
    },

    /**
     * Email Marketing
     */
    shop_email: {
      name: [
        "پرتاب آخر هفته صرفه جویی بی نظیر",
        "باز کردن معاملات داخلی انحصاری",
        "دسترسی VIP شما به تخفیفات برتر",
        "شادی فصلی فروش بزرگ",
        "باز کردن بهشت خرید شما",
        "کارناوال بزرگ خریداری",
        "سرگرمی خرید بهاری",
        "معاملات پاییزی که نمی توانید مقاومت کنید",
        "شگفتی های زمستانی: معاملات گرم در روزهای سرد",
        "شمارش معکوس روزهای پایان تابستان",
        "جشنواره بلک فرایدی: دسترسی پرنده زود هنگام",
        "سلام تعطیلات: راهنمای هدیه شما و بیشتر",
        "یافته های تازه: ورودی های جدید فقط برای شما",
        "پاداش وفاداری: تخفیفات انحصاری درون",
      ],
      subject: [
        "⏰ پیشنهاد محدود در زمان! همین حالا مورد دلخواه خود را بگیرید",
        "🌼 فصل جدید، سبک‌های جدید - کاوش در آخرین مجموعه ما",
        "👑 حراج VIP انحصاری فقط برای شما",
        "💃 با ورود محصولات جدید ما به شگفتی بینایی ها را در بر بگیرید",
        "🔚 آخرین فرصت برای استفاده از ۲۰٪ تخفیف بر روی همه",
        "🎁 یک هدیه برای شما: کردیت ۱۰ دلاری درون",
        "☀️ آماده شوید برای تابستان با معاملات داغ ما",
        "🛍️ به طور شکیلی کمدتان را بروز کنید - شایستگی شما",
        "👀 نگاهی به محصولات جدیدی که به زودی عرضه می‌شوند",
        "🎂 تولدتان مبارک! هدیه ویژه شما منتظر است",
      ],
    },

    /**
     * Discount code
     */
    discount_code: {
      code: [
        "WELCOME10",
        "SUMMER20",
        "VIPSALE30",
        "BDAY15",
        "BLACKFRIDAY",
        "CYBERMONDAY",
        "FREESHIPPING",
        "FLASHSALE",
        "CLEARANCE",
        "EARLYBIRD",
        "STUDENT10",
        "WINTER25",
        "SPRING15",
        "FALL20",
        "BESTSELLER10",
        "HOLIDAY30",
        "VALENTINE20",
        "MOTHERSDAY",
        "FATHERSDAY",
        "ENDOFYEAR",
      ],
      title: [
        "حراج فوری: ۲۰٪ تخفیف!",
        "تخفیف دسترسی زودهنگام VIP",
        "معامله آخر هفته: همین حالا صرفه جویی کنید!",
        "امروز ۱۵٪ تخفیف لذت ببرید",
        "حراج تابستانی: ۱۰٪ اضافی تخفیف",
        "حراج تخلیه! صرفه جویی بزرگ",
        "پیشنهاد ویژه: ارسال رایگان",
        "۲ به ۱: تنها امروز!",
        "پیشنهاد ویژه تعطیلاتی: ۲۵٪ تخفیف",
        "تخفیف انحصاری ۳۰٪",
        "شگفتی! ۲۰٪ اضافی تخفیف",
        "صرفه جویی فصلی درون",
        "عمومیت مرز بیشه: ۱۰٪ تخفیف",
        "به زودی تمام می‌شود: ۱۵٪ تخفیف بر روی همه",
        "خانواده و دوستان: ۲۰٪ تخفیف",
        "صرفه جویی بزرگ این آخر هفته",
        "جمعه سیاه: ۴۰٪ تخفیف",
        "تخفیف زودنگری: ۳۰٪ تخفیف",
      ],
      description: [
        "پیشنهاد ویژه خود را ادعا کنید! مدت محدود",
        "شتاب کنید! صرفه جویی انحصاری در سبد خرید شما در انتظار است.",
        "صرفه جویی بزرگ فقط یک کلیک دور است!",
        "از این معامله قبل از اینکه دیر شود استفاده کنید.",
        "تخفیف ویژه در انتظار است! از دست ندهید.",
        "روح خریدتان را با پیشنهاد ما تقویت کنید!",
        "سفارش بعدی شما ممکن است کمتر از آنچه فکر می‌کنید باشد!",
        "این زمان مناسب است تا آن آیتمی را که می‌خواستید بگیرید.",
        "یک چیز کوچک برای روزتان روشن‌تر.",
        "آماده به صرفه‌جویی هستید؟ یک تخفیف جالب در انتظار است!",
        "به دلیل اینکه شما ویژه هستید، یک معامله ویژه برای شما.",
        "آیا نظرتان به چیزی افتاده است؟ اینجا یک ترغیب است!",
        "هیچ وقت زمان مناسبی برای صرفه جویی وجود ندارد.",
        "این معامله را از دست ندهید! خیلی خوب است که ردش کنید.",
        "اخبار عالی! خرید شما تنخواه شدنی شد.",
        "شتاب کنید، تخفیف انحصاری شما به زودی منقضی می‌شود!",
        "اینجا یک تشکر کوچک برای وفاداری شما است.",
      ],
    },
    /**
     * Coupon
     */
    coupon: {
      title: [
        "ذخیره‌ها به آزادی رسید",
        "تخفیف را باز کنید",
        "صرفه‌جویی فوق‌العاده",
        "معامله انحصاری",
        "صرفه‌جویی اضافی",
        "تخفیف VIP",
        "پیشنهاد ویژه",
        "صرفه‌جویی اضافی",
        "هشدار تخفیف",
        "آرامش برای بودجه",
        "شادی اقتصادی",
        "امتیاز ارزش",
        "کاهش قیمت",
        "صرفه‌جویی خوشحالی",
        "صرفه‌جویی بیشتر، خرید بیشتر",
        "معامله فوری",
        "صرفه‌جویی پربازده",
        "صرفه‌جویی فوری",
        "معامله روز",
        "سرقت فصلی",
      ],

      description: [
        "از معامله شیرین ما لذت ببرید! در خرید بعدی خود صرفه جویی کنید.",
        "ما به مشتریان خود ارزش قائلیم - از این پیشنهاد انحصاری استفاده کنید.",
        "بیشتر از آنچه دوست دارید با قیمت کمتر. تخفیف به عهده ما!",
        "آماده برای صرفه جویی؟ یک پیشنهاد انحصاری منتظر است!",
        "چون شما ویژه هستید! از تخفیف در سفارش بعدی خود لذت ببرید.",
        "خود را به یک خرید شیک دعوت کنید و صرفه جویی کنید!",
        "آماده برای خرید تا اواخر شب - و صرفه جویی!",
        "فصل را با تخفیف ویژه جشن بگیرید.",
        "از مشتریان وفادار خود با تخفیف انحصاری تشکر می‌کنیم.",
        "صرفه جویی های بی نظیر در خرید بعدی خود را کشف کنید.",
        "یک نگاهی به صرفه جویی انحصاری خود بیندازید.",
        "تخفیف سورپرایز خود را از ما کشف کنید!",
        "تجربه خرید خود را با پیشنهاد انحصاری ما ارتقا دهید.",
        "صرفه جویی های خود را با پیشنهاد ویژه ما آغاز کنید.",
        "خود را با یک چیز کمی اضافی - یک تخفیف ویژه - شانس بدهید.",
        "ماجرای خرید بعدی شما هم اکنون ارزانتر شده است!",
        "چون خرید با تخفیف هیجان بیشتری دارد.",
      ],
    },

    /**
     * Offer
     */
    offer: {
      title: [
        "پکیج و صرفه جویی بزرگ!",
        "بیشتر بخرید، بیشتر صرفه جویی کنید!",
        "معاملات هوشمند برای خریداران هوشمند",
        "هشدار تخفیف! صرفه جویی در پکیج",
        "پیشنهاد کمبو - بیشتر با کمتر",
        "صرفه جویی انحصاری در پکیج ها",
        "بیشتر بگیرید با پول کمتر!",
        "هنگامی که پکیج بخرید، صرفه جویی کنید",
        "معاملات ویژه در کمبوها",
        "صرفه جویی بزرگ در فروشگاه!",
        "بهترین پکیج ها با ارزش",
        "معاملات محدود زمانی در پکیج ها",
        "تخفیف های بزرگ در کمبوها",
        "صرفه جویی هوشمند در محصولات انتخابی",
        "معاملات بی نظیر در پکیج ها",
        "تخفیفات چند خرید در دسترس است",
        "دو برابر بگیرید با کمتر",
        "خرید عمده = صرفه جویی بزرگ",
      ],
      description: [
        "در هنگام بسته بندی محصولات انتخابی، از تخفیفات بزرگ بهره ببرید. عجله کنید، پیشنهاد محدود در زمان!",
        "معاملات هوشمند منتظر شما هستند! بیشتر صرفه جویی کنید هنگامی که محصولات برجسته ما را باهم خریداری می کنید.",
        "روش هوشمند برای صرفه جویی را کشف کنید! محصولات مورد علاقه خود را بسته بندی کنید و قیمت را کاهش دهید.",
        "از تخفیفات انحصاری لذت ببرید هنگام خرید محصولات انتخاب شده به صورت کمبو. همین الان عمل کنید!",
        "بیشتر بخرید، بیشتر صرفه جویی کنید! تخفیفات بی نظیر در بسته بندی های ویژه محصولات ما.",
        "با پیشنهادهای ویژه ما هوشمندانه خرید کنید. قیمت های تخفیف دار بر روی بسته بندی محصولات انتخابی.",
        "بیشتر بگیرید با کمترین هزینه! تخفیفات شگفت انگیز هنگام خرید بسته بندی های انتخاب شده ما.",
        "زمانی که بسته بندی می کنید، بزرگ صرفه جویی کنید! پیشنهادات انحصاری در مورد محصولات انتخابی برای مدت محدود.",
        "ترکیب کنید و صرفه جویی کنید! تخفیفات انحصاری هنگام خرید محصولات انتخاب شده ما با هم.",
        "هر چه بیشتر بخرید، بیشتر صرفه جویی کنید! با بسته بندی های ویژه ما هوشمند باشید.",
      ],
    },

    /**
     * Gift card type
     */
    gift_card_type: {
      title: [
        "خودت را مدل کن!",
        "فقط برای شما!",
        "خرید خوشحال کننده!",
        "از روی ما لذت ببرید!",
        "کمی لذت ببرید",
        "چون شما ویژه هستید",
        "یکی کوچک وجود دارد",
        "روزتان را خوش بگذرانید",
        "برای شماست",
        "شادی را منتشر کنید",
        "یک هدیه عشق آمیز",
        "با لذت خرید کنید",
        "نشان از سپاسگزاری",
        "وقتی است که خرج کنید",
        "لحظه را لذت ببرید",
        "علاقه مندی های خود را پیدا کنید",
        "انتخاب با شماست",
        "به خودتان بیاندیشید",
        "جادو را کشف کنید",
        "سبک خود را آزاد کنید",
      ],
    },

    /**
     * Refund vendor order
     */
    vendor_refund_order: {
      note: [
        "وجوه از کیف پول مجازی شما کسر و به کیف پول بازار برگشت داده شده است.",
        "یک بازپرداخت صادر شده است، موجب کاهش موجودی کیف پول مجازی شما شده است.",
        "بازپرداخت انجام شد. کیف پول بازار از کیف پول مجازی شما مجدداً پر شده است.",
        "کیف پول مجازی شما به دلیل بازپرداخت اخیر بدهی شده است.",
        "موجودی کیف پول مجازی شما به دلیل بازپرداخت اخیر تنظیم شده است.",
        "یک بازپرداخت انجام شده است، مبلغ را از کیف پول مجازی شما کسر می کند.",
        "موجودی کیف پول مجازی شما به دلیل بازپرداخت به کیف پول بازار کاهش یافته است.",
        "یک معامله بازپرداخت انجام شده است، وجوه را از کیف پول مجازی شما به بازگشت به بازار می برد.",
      ],
    },

    /**
     * Product
     */
    product: {
      warranty: [
        "گارانتی طلایی 24 ماهه",
        "حفاظت پلاتینیم برای دو سال",
        "بیمه الماس برای 36 ماه",
        "سپر نقره ای: گارانتی یک ساله",
        "تضمین نخبه دو ساله",
        "حفاظت پرمیوم برای 24 ماه",
        "پشتیبانی برنز: گارانتی یک ساله",
        "گارانتی سه ساله با زمان بی وقفه بیشتر",
        "وعده امنیتی 24 ماهه",
        "حفاظت از آرامش خاطر برای 36 ماه",
      ],

      pros_name: [
        "کارایی افزایش یافته",
        "راه حل هزینه کارآمد",
        "کیفیت تضمین شده",
        "دوستانه کاربر",
        "صرفه جویی در زمان",
        "قابلیت اطمینان تضمین شده",
        "استفاده چند منظوره",
        "تکنولوژی پیشرفته",
        "دوستدار محیط زیست",
        "کارایی استثنایی",
      ],

      pros_value: [
        "صرفه جویی در زمان قابل توجه با عملیات سریع و کارآمد.",
        "استفاده از تکنولوژی پیشرفته برای کارایی بی نظیر.",
        "کاهش هزینه ها و افزایش بهره وری.",
        "ارائه یک رابط کاربری دوستانه برای مرور آسان.",
        "تضمین عملکرد قابل اطمینان و مداوم.",
        "فراهم کردن برنامه های چند منظوره در سراسر وظایف مختلف.",
        "استفاده از مواد و فرآیندهای دوستدار محیط زیست.",
        "طراحی با تکنولوژی پیشرفته برای نتایج برتر.",
        "طراحی با کیفیت بالا برای دوام طولانی مدت.",
        "ارائه پشتیبانی مشتری در سراسر شبانه روز.",
      ],

      cons_name: [
        "سرمایه گذاری گران قیمت",
        "سازگاری محدود",
        "راه اندازی پیچیده",
        "نیاز به آموزش",
        "عملکرد زیر استاندارد",
        "فقدان چند منظوره بودن",
        "پشتیبانی محدود",
        "نیاز به نگهداری مکرر",
        "مصرف انرژی بالا",
        "عمر مفید کوتاه",
      ],

      cons_value: [
        "سرمایه اولیه بیشتری نسبت به جایگزین ها می طلبد.",
        "ممکن است با تمام سیستم ها یا دستگاه ها سازگار نباشد.",
        "فرآیند راه اندازی می تواند بسیار پیچیده باشد.",
        "ممکن است آموزش اضافی برای استفاده لازم باشد.",
        "کارایی ممکن است به اندازه انتظارات نباشد.",
        "در عملکرد محدود یا فاقد چند منظوره است.",
        "پشتیبانی مشتری ممکن است در همه ساعات در دسترس نباشد.",
        "نیاز به تعمیر و نگهداری مکرر، منجر به هزینه های بیشتر می شود.",
        "مصرف مقادیر زیادی از انرژی، بر هزینه های کاربری تأثیر می گذارد.",
        "طول عمر محصول ممکن است به اندازه انتظارات طولانی نباشد.",
      ],
    },
    /**
     * Blog Category
     */
    blog_category: {
      category: [
        "بررسی‌های تکنولوژی",
        "پیداهای خوراکی",
        "سفرنامه‌ها",
        "نکات بهداشتی",
        "پرفروش‌های مد",
        "گفت‌و‌گوی کسب و کار",
        "داستان‌های زندگی",
        "آخرین اخبار ورزشی",
        "برجسته‌های هنر",
        "راهنمایی برای والدین",
      ],
      description: [
        "مقالات مفید در موضوعات مختلف را کشف کنید.",
        "کالکشن پست‌های اطلاعاتی ما را کاوش کنید.",
        "اطلاعات جذاب دسته‌بندی بلاگ ما را دنبال کنید.",
        "از مقالات جذاب و تفکربرانگیز دسته‌بندی بلاگ الهام بگیرید.",
        "دانش خود را با موضوعات متنوع دسته‌بندی بلاگ ما گسترش دهید.",
        "با آخرین بروزرسانی‌های جذاب دسته‌بندی بلاگ ما همراه باشید.",
        "با عمق بیشتر در محتوای جذاب دسته‌بندی بلاگ ما آشنا شوید.",
        "اطلاعات ارزشمند را در بایگانی دسته‌بندی بلاگ ما کشف کنید.",
        "از راهنمایی‌های مفید دسته‌بندی بلاگ ما چیزی یاد بگیرید.",
        "با مقالات و پست‌های غنی‌کننده دسته‌بندی بلاگ ما درگیر شوید.",
      ],
    },

    /**
     * Partner Plan
     */
    partner_plan: {
      name: [
        "بسته مبتدی",
        "طرح اساسی",
        "مجموعه حرفه‌ای",
        "نسخه سازمانی",
        "سطح پیشرفته",
        "بسته پرمیوم",
        "راه حل نهایی",
        "سطح نخبه",
        "شتاب‌دهنده رشد",
        "قدرت پلاتینیوم",
      ],
    },

    /**
     * Tax Profile
     */
    tax_profile: {
      name: [
        "غذاها",
        "وسایل الکترونیکی",
        "لباس و پوشاک",
        "کتاب و مقالات تحریر",
        "محصولات بهداشتی و زیبایی",
        "مبلمان",
        "کالاهای ورزشی",
        "اسباب بازی و بازی ها",
        "جواهرات و اکسسوری ها",
        "قطعات خودرو",
        "باغ و فضای باز",
        "لوازم آشپزخانه",
        "تزئینات خانه",
        "سازهای موسیقی",
        "لوازم حیوانات خانگی",
        "کفش",
        "کیف و چمدان",
        "لوازم اداری",
        "ابزارهای سخت افزاری",
        "مواد غذایی",
      ],

      label: [
        "ارزش افزوده", // Value-Added Tax
        "مالیات بر کالاها و خدمات", // Goods and Services Tax
        "مالیات فروش استانی", // Provincial Sales Tax
        "مالیات فروش هماهنگ", // Harmonized Sales Tax
        "مالیات فروش کبک", // Quebec Sales Tax
        "مالیات فروش مرکزی", // Central Sales Tax
        "مالیات اکسیز", // Excise Tax
        "گمرک", // Import Duty
        "مالیات خدمات", // Service Tax
        "مالیات لوکس", // Luxury Tax
      ],
    },
    /**
     * Cluster
     */
    cluster: {
      name: [
        "برجسته‌های فروش", // Sale Highlights
        "کدهای تخفیف", // Promo Codes
        "کمپین‌های ویژه", // Featured Campaigns
        "واردات جدید", // New Arrivals
        "پرفروش‌ترین‌ها", // Best Sellers
        "ویژه‌های فصلی", // Seasonal Specials
        "پیشنهادهای محدود", // Limited Offers
        "تخفیف‌های رویداد", // Event Deals
        "ویژه‌های VIP", // VIP Exclusives
        "کالاهای انبار", // Clearance Items
        "بسته‌های تعطیلات", // Holiday Bundles
        "مجموعه‌های موضوعی", // Theme Collections
        "نمایش برندها", // Brand Showcases
        "مورد علاقه‌های اعضا", // Member Favorites
        "تخفیف‌های فوری", // Flash Discounts
        "ویژگی‌های فروشگاه", // Shop Essentials
        "منابع دیجیتال", // Digital Resources
        "ایده‌های هدیه", // Gift Ideas
        "انتخاب‌های زیست محیطی", // Eco-friendly Picks
        "توصیه‌های کارکنان", // Staff Recommendations
      ],
    },
    /**
     * Popup
     */
    popup: {
      title: [
        "پیشنهاد ویژه!",
        "محصولات جدید",
        "زمان محدود",
        "تخفیف!",
        "معاملات انحصاری",
        "فروش داغ!",
        "هشدار تخلیه انبار",
        "حمل و نقل رایگان",
        "هدیه درون!",
        "برنده جوایز شوید",
        "مزایای اعضا",
        "فروش فوری",
      ],
    },

    /**
     * Campaign
     */
    campaign: {
      name: [
        "فروشگاه تا آخرین قطره",
        "تب خرید",
        "فروش فوری جشن",
        "کلیک، خرید، صرفه جویی",
        "تخفیف ویژه",
        "تخفیف‌های الکترونیکی",
        "تخفیف‌های بزرگ",
        "صرفه‌جویی‌های سایبری",
        "روزهای تخفیف دیجیتال",
        "کارناوال تجارت الکترونیک",
        "فروشگاه آنلاین",
        "شتاب فروشگاهی",
        "فروش انبار فروشگاه وب",
        "بهشت خریداران الکترونیکی",
        "سفر تخفیف مجازی",
        "تخفیف‌های دیجیتال",
        "پاک‌سازی سبد خرید الکترونیکی",
        "مسابقه خرید آنلاین",
        "فروش ویژه سایبری",
        "تخفیف‌های الکترونیکی",
      ],
    },

    /**
     * Valuation
     */
    valuation: {
      title: [
        "قیمت‌گذاری سفارشی تی‌شرت",
        "ارزش‌گذاری جواهرات دست‌ساز",
        "قیمت‌گذاری کفش سفارشی",
        "ارزش‌گذاری آثار هنری سفارشی",
        "قیمت‌گذاری کت و شلوار سفارشی",
        "هزینه سفارشی‌سازی وسایل الکترونیکی",
        "ارزش‌گذاری عطر شخصی",
        "قیمت‌گذاری کیف سفارشی",
        "ارزش‌گذاری لباس سفارشی",
        "قیمت‌گذاری جلد کتاب شخصی",
        "ارزش‌گذاری مبلمان سفارشی",
        "قیمت‌گذاری ساعت مخصوص",
        "ارزش‌گذاری اسباب‌بازی شخصی",
        "قیمت‌گذاری کلاه سفارشی",
        "ارزش‌گذاری محصولات مراقبت از پوست سفارشی",
        "قیمت‌گذاری دکور منزل مخصوص",
        "ارزش‌گذاری وسایل آشپزخانه سفارشی",
        "قیمت‌گذاری لوازم التحریر شخصی",
        "ارزش‌گذاری لوازم جانبی مو سفارشی",
        "قیمت‌گذاری تجهیزات ورزشی سفارشی",
      ],
      structure: {
        title: [
          "طراحی چاپ تی‌شرت",
          "نوع فلز جواهرات",
          "انتخاب مواد کفش",
          "اندازه قاب هنری",
          "انتخاب پارچه کت و شلوار",
          "گزینه رنگ وسایل الکترونیکی",
          "پروفایل بوی عطر",
          "مواد و اندازه کیف",
          "طول و سبک لباس",
          "مواد جلد کتاب",
          "نوع چوب مبلمان",
          "مواد بند ساعت",
          "ویژگی‌های اسباب‌بازی سفارشی",
          "اندازه و رنگ کلاه",
          "ترجیحات مواد مراقبت از پوست",
          "موضوع دکور منزل",
          "مواد وسایل آشپزخانه",
          "نوع کاغذ لوازم التحریر",
          "مواد لوازم جانبی مو",
          "اندازه تجهیزات ورزشی",
        ],
      },
    },
  },
};
