export const SmsTemplateMode = {
  text: {
    code: "text",
    title: "Plain Text",
    desc: "Message will be created from a text with auto replace parameters and send.",
    icon: 'subject',
  },

  template:  {
    code: "template",
    title: "Structural Template",
    desc: "An object will be created from parameters and send to the provider.",
    icon: 'data_object',
  },
}