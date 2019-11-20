export const checkLocale = (locale: string) => {
   switch (locale) {
      case "vi":
         return "vi-VN"

      case "en":
         return "en-US"

      default:
         return "en-US"
   }
}
