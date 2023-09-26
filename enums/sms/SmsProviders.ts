export const SmsProviders = [
  /*▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅ Default ▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅*/

  {
    driver: "default",
    title: "Default",
    description: "Utilize the integrated SMS provider offered by Selldone.",
    icon: require("@/Components/assets/tradmark/selldone.svg"),
    tokens: [],
    messages: [
      "⚠️ Due to concerns over SMS fraud, this option is currently disabled. If you would like to enable SMS login and order notifications, please add your own custom service provider.",
      /*  "Authentications (OTP) will be sent.",
      "Messages will be sent if the destination country is on the zero-cost SMS providers list.",
      "Available for the enterprise license and will be charged per message.",*/
    ],
    support_text: false, // Support text mode.
    support_template: false, // Support template mode.
  },
  /*▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅ Twilio ▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅*/

  {
    driver: "twilio",
    title: "Twilio",
    description:
      "A sms platform enabling businesses to build and manage SMS, voice, and messaging applications. Ensure you input a valid account SID (ACxxx...) into the SID field.",
    icon: require("@/Components/assets/tradmark/twilio.svg"),
    tokens: [
      "Auth token" /*token_1*/,
      "Account SID" /*token_2*/,
      "Number" /*token_3*/,
      "Service SID" /*token_4*/,
    ],
    placeholders:[
        "Find this in your Twilio dashboard! ex. 8754...",
      "Find this in your Twilio dashboard! ex. AC...",
      "Find it in your Twilio dashboard! ex. +1...",
      "Find or create it in your Twilio > Verify > Services! ex. VA...",

    ],
    support_text: true, // Support text mode.
    support_template: false, // Support template mode.
    link: "https://www.twilio.com",
  },
  /*▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅ SMS-iT ▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅*/
  {
    driver: "smsit",
    title: "SMS-iT",
    description: "A reliable and efficient SMS messaging service.",

    icon: require("@/Components/assets/tradmark/smsit.png"),
    tokens: ["Auth token" /*token_1*/, "Number" /*token_2*/],
    messages: [
      "Make sure you added a phone number and verified it on Smsit.",
      "To sync contacts, you should create a group with <b>Selldone</b> as its name.",
    ],
    support_text: true, // Support text mode.
    support_template: false, // Support template mode.
    link: "https://smsit.ai",
    actions: ["sync" /*Add sync contacts button in provider page*/],
    networks: [
      // Some provider has multiple services! It will show as an option that user must select.
      {
        value: "cloud",
        title: "Cloud Version",
        description:
          "The Cloud plan is using Smsit network and cloud rates for Text, Voice, and OTP.",
      },
      {
        value: "decentralize",
        title: "Decentralize Version",
        description:
          "The Decentralized Plan uses your network carrier ( Tello, ATT, MetroPCS, etc.)It requires a physical sim card and phone. ",
      },
    ],
  },
  /*▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅ Kavenegar ▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅*/

  {
    driver: "kavenegar",
    title: "Kavenegar",
    description: "",
    icon: require("@/Components/assets/tradmark/kavenegar.png"),
    tokens: ["Auth token" /*token_1*/, "Number" /*token_2*/],
    locals: ["IR"], // Only for some local services : SetupService.LocalServiceCountry()

    support_text: true, // Support text mode.
    support_template: true, // Support template mode.
    //link:'https://kavenegar.com'
  },
];
