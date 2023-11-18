export const EmailProviders = [
  {
    driver: "mailgun",
    title: "Mailgun",
    icon: require("@components/assets/tradmark/mailgun.svg"),
    options: ["host", "endpoint", "api"],
    host_msg: "Match with your verified domain in Mailgun.",
  },
  /*  {
        driver: "smtp",
        title: "SMTP (Not recommended - slow)",
        icon: require("@components/assets/icons/smtp.svg"),
        options: ["host", "port", "username", "password"],

        host_placeholder: "smtp.mail-provider.com",
        host_msg: "Your SMTP host address.",
      },*/
];
