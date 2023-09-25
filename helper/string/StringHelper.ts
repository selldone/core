export function ToQueryString(obj) {
  if (!obj) return "";
  return Object.keys(obj)
    .map((key) => {
      return key + "=" + obj[key];
    })
    .join("&");
}

export function RandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
