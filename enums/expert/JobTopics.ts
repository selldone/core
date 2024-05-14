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

import {JobTopicsCategory} from "./JobTopicsCategory";
import storeDesignImg from './job-topic/assets/store-design.jpg';
import storeConfigurationImg from './job-topic/assets/store-configuration.jpg';
import storeOptimizationImg from './job-topic/assets/store-optimization.jpg';
import domainImg from './job-topic/assets/domain.jpg';
import pageDesignImg from './job-topic/assets/page-design.jpg';
import addProductImg from './job-topic/assets/add-product.jpg';
import paymentImg from './job-topic/assets/payment.jpg';
import taxImg from './job-topic/assets/tax.jpg';
import emailMarketingImg from './job-topic/assets/email-marketing.jpg';
import seoImg from './job-topic/assets/seo.jpg';
import searchAdsImg from './job-topic/assets/search-adds.jpg';
import socialMarketingImg from './job-topic/assets/social-marketing.jpg';
import contentMarketingImg from './job-topic/assets/content-marketing.jpg';
import saleChannelsImg from './job-topic/assets/sale-channels.jpg';
import conversionImg from './job-topic/assets/conversion.jpg';
import analyzeImg from './job-topic/assets/analyze.jpg';
import brandStrategyImg from './job-topic/assets/brand-strategy.jpg';
import migrationImg from './job-topic/assets/advise.jpg';
import appProgrammerImg from './job-topic/assets/app-programmer.jpg';
import appInstallImg from './job-topic/assets/app-install.jpg';
import uxDesignImg from './job-topic/assets/ux-designer.jpg';
import debugImg from './job-topic/assets/debug.jpg';
import strategyImg from './job-topic/assets/strategy.jpg';
import productsGuideImg from './job-topic/assets/products-guide.jpg';
import setupGuideImg from './job-topic/assets/setup-guide.jpg';
import marketingGuideImg from './job-topic/assets/marketing-guide.jpg';
import productDescriptionImg from './job-topic/assets/product-description.jpg';
import contentWriteImg from './job-topic/assets/marketing-content.jpg';
import logoDesignImg from './job-topic/assets/logo-design.jpg';
import bannerDesignImg from './job-topic/assets/banner-designer.jpg';
import videoImg from './job-topic/assets/video.jpg';
import photographyImg from './job-topic/assets/photography.jpg';
import photoEditorImg from './job-topic/assets/photo-editor.jpg';
import threeDImg from './job-topic/assets/3d.jpg';
import dropshippingImg from './job-topic/assets/dropshipping.jpg';
import resellingImg from './job-topic/assets/reseller.jpg';
import posSetupImg from './job-topic/assets/pos-setup.jpg';

export const JobTopics = {
  // SETUP
  "store-design": {
    code: "store-design",
    title: "topics.store-design.title",
    image: storeDesignImg,
    desc: "topics.store-design.desc",
    category: JobTopicsCategory.SETUP,
  },
  "store-configuration": {
    code: "store-configuration",
    title: "topics.store-configuration.title",
    image: storeConfigurationImg,
    desc: "topics.store-configuration.desc",
    category: JobTopicsCategory.SETUP,
  },
  "store-optimization": {
    code: "store-optimization",
    title: "topics.store-optimization.title",
    image: storeOptimizationImg,
    desc: "topics.store-optimization.desc",
    category: JobTopicsCategory.SETUP,
  },

  domain: {
    code: "domain",
    title: "topics.domain.title",
    image: domainImg,
    desc: "topics.domain.desc",
    category: JobTopicsCategory.SETUP,
  },

  // ADD_PAGE
  "page-design": {
    code: "page-design",
    title: "topics.page-design.title",
    image: pageDesignImg,
    desc: "topics.page-design.desc",
    category: JobTopicsCategory.ADD_PAGE,
  },

  // ADD_PRODUCT
  "add-product": {
    code: "add-product",
    title: "topics.add-product.title",
    image: addProductImg,
    desc: "topics.add-product.desc",
    category: JobTopicsCategory.ADD_PRODUCT,
  },

  // PAYMENT
  payment: {
    code: "payment",
    title: "topics.payment.title",
    image: paymentImg,
    desc: "topics.payment.desc",
    category: JobTopicsCategory.PAYMENT,
  },
  tax: {
    code: "tax",
    title: "topics.tax.title",
    image: taxImg,
    desc: "topics.tax.desc",
    category: JobTopicsCategory.PAYMENT,
  },

  // MARKETING

  "email-marketing": {
    code: "email-marketing",
    title: "topics.email-marketing.title",
    image: emailMarketingImg,
    desc: "topics.email-marketing.desc",
    category: JobTopicsCategory.MARKETING,
  },
  seo: {
    code: "seo",
    title: "topics.seo.title",
    image: seoImg,
    desc: "topics.seo.desc",
    category: JobTopicsCategory.MARKETING,
  },
  "search-ads": {
    code: "search-ads",
    title: "topics.search-ads.title",
    image: searchAdsImg,
    desc: "topics.search-ads.desc",
    category: JobTopicsCategory.MARKETING,
  },
  "social-marketing": {
    code: "social-marketing",
    title: "topics.social-marketing.title",
    image: socialMarketingImg,
    desc: "topics.social-marketing.desc",
    category: JobTopicsCategory.MARKETING,
  },
  "content-marketing": {
    code: "content-marketing",
    title: "topics.content-marketing.title",
    image: contentMarketingImg,
    desc: "topics.content-marketing.desc",
    category: JobTopicsCategory.MARKETING,
  },
  "sale-channels": {
    code: "sale-channels",
    title: "topics.sale-channels.title",
    image: saleChannelsImg,
    desc: "topics.sale-channels.desc",
    category: JobTopicsCategory.MARKETING,
  },
  conversion: {
    code: "conversion",
    title: "topics.conversion.title",
    image: conversionImg,
    desc: "topics.conversion.desc",
    category: JobTopicsCategory.MARKETING,
  },
  analyze: {
    code: "analyze",
    title: "topics.analyze.title",
    image: analyzeImg,
    desc: "topics.analyze.desc",
    category: JobTopicsCategory.MARKETING,
  },

  "brand-strategy": {
    code: "brand-strategy",
    title: "topics.brand-strategy.title",
    image: brandStrategyImg,
    desc: "topics.brand-strategy.desc",
    category: JobTopicsCategory.MARKETING,
  },

  // MIGRATION
  migration: {
    code: "migration",
    title: "topics.migration.title",
    image: migrationImg,
    desc: "topics.migration.desc",
    category: JobTopicsCategory.MIGRATION,
  },

  // APP_SETUP
  "app-programmer": {
    code: "app-programmer",
    title: "topics.app-programmer.title",
    image: appProgrammerImg,
    desc: "topics.app-programmer.desc",
    category: JobTopicsCategory.APP_SETUP,
  },
  "app-install": {
    code: "app-install",
    title: "topics.app-install.title",
    image: appInstallImg,
    desc: "topics.app-install.desc",
    category: JobTopicsCategory.APP_SETUP,
  },
  "ux-design": {
    code: "ux-design",
    title: "topics.ux-design.title",
    image: uxDesignImg,
    desc: "topics.ux-design.desc",
    category: JobTopicsCategory.APP_SETUP,
  },
  debug: {
    code: "debug",
    title: "topics.debug.title",
    image:debugImg,
    desc: "topics.debug.desc",
    category: JobTopicsCategory.APP_SETUP,
  },

  // MANAGEMENT
  strategy: {
    code: "strategy",
    title: "topics.strategy.title",
    image: strategyImg,
    desc: "topics.strategy.desc",
    category: JobTopicsCategory.MANAGEMENT,
  },
  "products-guide": {
    code: "products-guide",
    title: "topics.products-guide.title",
    image: productsGuideImg,
    desc: "topics.products-guide.desc",
    category: JobTopicsCategory.MANAGEMENT,
  },
  "setup-guide": {
    code: "setup-guide",
    title: "topics.setup-guide.title",
    image:setupGuideImg,
    desc: "topics.setup-guide.desc",
    category: JobTopicsCategory.MANAGEMENT,
  },
  "marketing-guide": {
    code: "marketing-guide",
    title: "topics.marketing-guide.title",
    image: marketingGuideImg,
    desc: "topics.marketing-guide.desc",
    category: JobTopicsCategory.MANAGEMENT,
  },

  // CONTENT
  "product-description": {
    code: "product-description",
    title: "topics.product-description.title",
    image:productDescriptionImg,
    desc: "topics.product-description.desc",
    category: JobTopicsCategory.CONTENT,
  },
  "content-write": {
    code: "content-write",
    title: "topics.content-write.title",
    image: contentWriteImg,
    desc: "topics.content-write.desc",
    category: JobTopicsCategory.CONTENT,
  },

  // PHOTOGRAPHY
  "logo-design": {
    code: "logo-design",
    title: "topics.logo-design.title",
    image: logoDesignImg,
    desc: "topics.logo-design.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },
  "banner-design": {
    code: "banner-design",
    title: "topics.banner-design.title",
    image: bannerDesignImg,
    desc: "topics.banner-design.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },
  video: {
    code: "video",
    title: "topics.video.title",
    image:videoImg,
    desc: "topics.video.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },
  photography: {
    code: "photography",
    title: "topics.photography.title",
    image: photographyImg,
    desc: "topics.photography.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },
  "photo-editor": {
    code: "photo-editor",
    title: "topics.photo-editor.title",
    image: photoEditorImg,
    desc: "topics.photo-editor.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },
  "3d": {
    code: "3d",
    title: "topics.3d.title",
    image: threeDImg,
    desc: "topics.3d.desc",
    category: JobTopicsCategory.PHOTOGRAPHY,
  },

  // DROP_SHIPPING
  dropshipping: {
    code: "dropshipping",
    title: "topics.dropshipping.title",
    image:dropshippingImg,
    desc: "topics.dropshipping.desc",
    category: JobTopicsCategory.DROP_SHIPPING,
  },
  reselling: {
    code: "reselling",
    title: "topics.reselling.title",
    image:resellingImg,
    desc: "topics.reselling.desc",
    category: JobTopicsCategory.DROP_SHIPPING,
  },

  // POS_SETUP
  "pos-setup": {
    code: "pos-setup",
    title: "topics.pos-setup.title",
    image: posSetupImg,
    desc: "topics.pos-setup.desc",
    category: JobTopicsCategory.POS_SETUP,
  },
};
