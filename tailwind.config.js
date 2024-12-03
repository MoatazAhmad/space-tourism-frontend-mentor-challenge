const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        designBlue900: "#0B0D17",
        designBlue300: "#D0D6F9",
      },
      backgroundImage: {
        home: "url('../assets/imgs/Hi-Res-Render-1.png')",
        homeResponsive: "url('../assets/imgs/Hi-Res-Render-1-responsive.png')",
        destination: "url('../assets/imgs/Hi-Res-Render-2.png')",
        crew: "url('../assets/imgs/Hi-Res-Render-3.png')",
        technology: "url('../assets/imgs/Hi-Res-Render-4.png')",

        // add another back grounds here
      },
      fontSize: {
        "fs-28": "28px", // Define your custom font size
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Text Preset 1
        ".text-preset-1": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "144px",
          // lineHeight: "171.9%",
          letterSpacing: "0px",
        },

        // Text Preset 2
        ".text-preset-2": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "100px",
          // lineHeight: "114.6%",
          letterSpacing: "0px",
        },

        // Text Preset 3
        ".text-preset-3": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "56px",
          // lineHeight: "64.2%",
          letterSpacing: "0px",
        },

        // Text Preset 4
        ".text-preset-4": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "32px",
          // lineHeight: "36.7%", // Normal line height is a percentage of the font size
          letterSpacing: "0px",
        },

        // Text Preset 5
        ".text-preset-5": {
          fontFamily: '"Barlow Condensed", sans-serif', // Replace with your desired font
          fontSize: "28px",
          // lineHeight: "33.6%",
          letterSpacing: "4px",
        },

        // Text Preset 6
        ".text-preset-6": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "28px",
          // lineHeight: "32.1%",
          letterSpacing: "0px",
        },

        // Text Preset 7
        ".text-preset-7": {
          fontFamily: '"Barlow Condensed", sans-serif', // Replace with your desired font
          fontSize: "14px",
          // lineHeight: "16.8%",
          letterSpacing: "2px",
        },

        // Text Preset 8
        ".text-preset-8": {
          fontFamily: '"Barlow Condensed", sans-serif', // Replace with your desired font
          fontSize: "16px",
          // lineHeight: "19.2%",
          letterSpacing: "2px",
        },
        ".text-preset-9": {
          fontFamily: '"Barlow", sans-serif', // Replace with your desired font
          fontSize: "18px",
          // lineHeight: "180%",
          letterSpacing: "0px",
        },
        ".text-preset-2-tablet": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "80px",
          // lineHeight: "114.6%",
          letterSpacing: "0px",
        },

        // Text Preset 3
        ".text-preset-3-tablet": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "40px",
          // lineHeight: "64.2%",
          letterSpacing: "0px",
        },

        // Text Preset 4
        ".text-preset-4-tablet": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "24px",
          // lineHeight: "36.7%", // Normal line height is a percentage of the font size
          letterSpacing: "0px",
        },

        // Text Preset 5
        ".text-preset-5-tablet": {
          fontFamily: '"Barlow Condensed", sans-serif', // Replace with your desired font
          fontSize: "20px",
          // lineHeight: "33.6%",
          letterSpacing: "4px",
        },
        ".text-preset-9-tablet": {
          fontFamily: '"Barlow", sans-serif', // Replace with your desired font
          fontSize: "16px",
          // lineHeight: "180%",
          letterSpacing: "0px",
        },
        ".text-preset-1-mobile": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "80px",
          // lineHeight: "171.9%",
          letterSpacing: "0px",
        },

        // Text Preset 2
        ".text-preset-2-mobile": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "56px",
          // lineHeight: "114.6%",
          letterSpacing: "0px",
        },

        // Text Preset 3
        ".text-preset-3-mobile": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "24px",
          // lineHeight: "64.2%",
          letterSpacing: "0px",
        },

        // Text Preset 4
        ".text-preset-4-mobile": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "18px",
          // lineHeight: "36.7%", // Normal line height is a percentage of the font size
          letterSpacing: "0px",
        },
        ".text-preset-6-mobile": {
          fontFamily: '"Bellefair", sans-serif', // Replace with your desired font
          fontSize: "16px",
          // lineHeight: "32.1%",
          letterSpacing: "0px",
        },
        ".text-preset-8-mobile": {
          fontFamily: '"Barlow Condensed", sans-serif', // Replace with your desired font
          fontSize: "14px",
          // lineHeight: "19.2%",
          letterSpacing: "2px",
        },
        ".text-preset-9-mobile": {
          fontFamily: '"Barlow", sans-serif', // Replace with your desired font
          fontSize: "15px",
          // lineHeight: "180%",
          letterSpacing: "0px",
        },
      });
    }),
  ],
};
