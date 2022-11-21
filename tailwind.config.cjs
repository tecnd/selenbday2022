const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        selen: "#DFBD69",
        discord: "#5865F2",
      },
      keyframes: {
        toZero: {
          to: { width: "0px" },
        },
      },
      animation: {
        "loading-0": "toZero 0.6s cubic-bezier(0.61, 0, 0.6, 1) forwards",
        "loading-100":
          "toZero 0.6s cubic-bezier(0.61, 0, 0.6, 1) forwards 100ms",
        "loading-200":
          "toZero 0.6s cubic-bezier(0.61, 0, 0.6, 1) forwards 200ms",
        "loading-300":
          "toZero 0.6s cubic-bezier(0.61, 0, 0.6, 1) forwards 300ms",
        "loading-400":
          "toZero 0.6s cubic-bezier(0.61, 0, 0.6, 1) forwards 400ms",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      width: {
        "hex-inner": "156px",
        "hex-outer": "173px",
      },
      height: {
        "hex-inner": "90.07px",
        "hex-outer": "99.88px",
        "border-screen": "calc(100vh - 4px)",
      },
      minHeight: {
        "border-screen": "calc(100vh - 4px)",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      rotate: {
        60: "60deg",
        120: "120deg",
      },
      skew: {
        30: "30deg",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },

  plugins: [],
};

module.exports = config;
