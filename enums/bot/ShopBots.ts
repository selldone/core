export const ShopBots = [
  {
    driver: "Telegram",
    icon: require("@components/assets/tradmark/telegram.svg"),
    name: "Telegram",
    token: "Bot API Key",
    placeholder: "",
    available: true,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/telegram-${secret}`;
    },
  },
  {
    driver: "Slack",
    icon: require("@components/assets/tradmark/slack.svg"),
    name: "Slack",
    token: "Token",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/slack-${secret}`;
    },
  },
  {
    driver: "AmazonAlexa",
    icon: require("@components/assets/tradmark/alexa.svg"),
    name: "Amazon Alexa",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/amazon-${secret}`;
    },
  },

  {
    driver: "CiscoSpark",
    icon: require("@components/assets/tradmark/cisco.svg"),
    name: "Cisco Spark",
    token: "Token",
    token2: "Secret",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/cisco-${secret}`;
    },
  },

  {
    driver: "Facebook",
    icon: require("@components/assets/tradmark/facebook-messenger.svg"),
    name: "Facebook Messenger",
    token: "Token",
    token2: "App Secret",
    token3: "Verification",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/facebook-${secret}`;
    },
  },

  {
    driver: "Hangouts",
    icon: require("@components/assets/tradmark/google-hangouts.svg"),
    name: "Hangouts Chat",
    token: "Token",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/hangouts-${secret}`;
    },
  },
  {
    driver: "HipChat",
    icon: require("@components/assets/tradmark/hipchat.svg"),
    name: "HipChat",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/hipchat-${secret}`;
    },
  },
  {
    driver: "BotFramework",
    icon: require("@components/assets/tradmark/microsoft.svg"),
    name: "Microsoft Bot Framework / Skype",
    token: "API ID",
    token2: "API Key",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/microsoft-${secret}`;
    },
  },
  /* {
    driver: "Nexmo",
    icon: require("./../assets/tradmark/nexmo.svg"),
    name: "Nexmo",
    token: "Key",
    token2: "Secret",
    available:false,
    getWebhookURL:(shop_id,secret)=>{return `https://bots.selldone.com/${shop_id}/nexmo-${secret}`}
  },*/

  {
    driver: "Twilio",
    icon: require("@components/assets/tradmark/twilio.svg"),
    name: "Twilio",
    token: "Token",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/twilio-${secret}`;
    },
  },
  {
    driver: "WeChat",
    icon: require("@components/assets/tradmark/wechat.svg"),
    name: "WeChat",
    token: "App ID",
    token2: "App Key",
    token3: "Verification",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/wechat-${secret}`;
    },
  },
];
