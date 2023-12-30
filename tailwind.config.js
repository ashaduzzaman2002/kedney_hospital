module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_99: "#ffffff99",
          A700_4c: "#ffffff4c",
          A700_0c: "#ffffff0c",
          A700_0f: "#ffffff0f",
          A700_66: "#ffffff66",
          A700: "#ffffff",
        },
        blue_gray: {
          100: "#d6d6d6",
          200: "#afb9cd",
          300: "#97a3be",
          400: "#888888",
          600: "#445b89",
          700: "#385182",
          900: "#032342",
          "100_66": "#d9d9d966",
          "900_01": "#292d32",
          "700_19": "#38508119",
          "700_14": "#38518214",
          "700_7f": "#3851827f",
          "900_1e": "#0323421e",
          "900_33": "#03234233",
          "700_01": "#2d4472",
          "700_19_01": "#354d7c19",
          "100_01": "#ccd1dc",
          "900_0a": "#0323420a",
          "700_38": "#37508038",
          "700_33": "#38518233",
          "700_d6": "#385182d6",
        },
        blue: {
          50: "#d4e2ff",
          200: "#94bdff",
          A200: "#4f86ed",
          "50_01": "#dfe9ff",
        },
        indigo: {
          50: "#e2e5ed",
          300: "#6285ca",
          400: "#5f81c4",
          800: "#2b4b8b",
          "400_3f": "#5373b03f",
          "50_01": "#e8edf7",
          "50_02": "#e6e9ef",
          "300_01": "#6285c9",
          "400_02": "#407cb7",
          "400_01": "#506da7",
          "300_4c": "#6285ca4c",
          "300_26": "#6285ca26",
        },
        purple: { A200: "#ed51eb" },
        gray: {
          50: "#f3fcfd",
          100: "#f5f6f9",
          200: "#e8e8e8",
          600: "#757575",
          "100_01": "#f1f5ff",
        },
        amber: { 500: "#fec107" },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_11": "#00000011",
          "900_19": "#00000019",
          "900_14": "#00000014",
          "900_1c": "#0000001c",
          "900_26": "#00000026",
          "900_33": "#00000033",
        },
        red: { A400: "#fb142f", A100: "#fa7e8e" },
        orange: { 300: "#e4b268" },
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000000c",
        bs10: "0px 0px  129px -1px #0000001c",
        bs: "0px -2px  14px 0px #0000000c",
        bs3: "0px 10px  11px 0px #0000000c",
        bs2: "5px 10px  20px 0px #5373b03f",
        bs8: "0px 22px  52px 0px #00000026",
        bs4: "-10px -16px  56px -1px #0000000c",
        bs9: "10px 14px  56px -1px #00000011",
        bs5: "10px 14px  56px -1px #00000014",
        bs6: "21px 52px  79px 0px #38508119",
        bs7: "38px 50px  73px 0px #03234233",
        bs8: "18px 39px 73px 0px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        gradient: "linear-gradient(130deg ,#2d4472,#5f81c4)",
        gradient1: "linear-gradient(281deg ,#ffffff4c,#ffffff4c)",
        gradient2: "linear-gradient(180deg ,#385182d6,#37508038)",
        gradient3: "linear-gradient(155deg ,#e8edf7,#ffffff)",
        gradient4: "linear-gradient(245deg ,#ffffff,#d4e2ff)",
        gradient5: "linear-gradient(93deg ,#2b4b8b,#407cb7)",
        gradient6: "linear-gradient(138deg ,#e6e9ef,#dfe9ff,#f1f5ff)",
        gradient7: "linear-gradient(151deg, #E8EDF7 3.71%, #FFF 82.26%)",
      },
      fontFamily: {
        dmsans: "DM Sans",
        fredoka: "Fredoka",
        jost: "Jost",
        cormorantgaramond: "Cormorant Garamond",
        crimsonpro: "Crimson Pro",
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '2/3': '2 / 3',
        '5/4': '5 / 4',
      },
      rotate: {
        '0': '0deg',
        '15': '15deg',
        '-12': '-12deg',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
