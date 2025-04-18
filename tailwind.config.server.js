module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          dark: "#333333",
          secondary: "#00afef"
        },
        screens: {
          mmd: "860px",
        },
        keyframes: {
          "slide-in": {
            "0%": {
              "-webkit-transform": "translateX(120%)",
              transform: "translateX(120%)",
            },
            "100%": {
              "-webkit-transform": "translateX(0%)",
              transform: "translateX(0%)",
            },
          },
        },
        animation: {
          "slide-in": "slide-in .2s ease-out",
        },
      },
    },
    plugins: [],
  };
  