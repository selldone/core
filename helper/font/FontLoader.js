export class FontLoader {
  static AddStylesheetURL(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);

   // console.log("Load: ", link);
  }
  static LoadFonts(fonts) {
    if (!fonts || !fonts.length) return;

   // console.log("Load fonts: ", fonts);

    let missed = "";
    fonts.forEach((font) => {
      // const check= document.fonts.check(`12px ${font}`);
      missed += `&family=${font.trim().replace(" ", "+")}`;
    });
    const url = `https://fonts.googleapis.com/css2?display=swap${missed}`;

    this.AddStylesheetURL(url);
  }



}

export const FONTS=['Roboto','Neonderthaw','Dongle','Open Sans','Rubik Beastly','Mochiy Pop P One','Montserrat','Roboto Condensed',
'Outfit','Source Sans Pro','Poppins','Oswald','Luxurious Roman','Roboto Mono','Noto Sans','Raleway',
'Ubuntu','Nunito','PT Sans','Playfair Display','Open Sans Condensed','Rubik','Josefin Sans','Bebas Neue',
   'Cabin','Lobster','Anton','Dancing Script','Cairo','Fjalla One','Kanit','Sedgwick Ave','Pacifico',
   'Architects Daughter','Teko','Abril Fatface','Permanent Marker','Satisfy','Cookie','Righteous','Lobster Two',
   'Creepster','Russo One','Kaushan Script','Press Start 2P','News Cycle','Titan One','Ultra','Handlee',
   'Moo Lah Lah','Bangers','Black Ops One'

];

