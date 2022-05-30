const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.slate[600],
        links: {
          txt: colors.slate[600],
          hover_txt: '#fef5e5',
        },
        loading_spinner: colors.slate[500],
        popups: {
          bg: '#eee3ce',
          txt: colors.slate[800],
          internal_border: '#bbb19e',
        },
        warning: {
          txt: colors.slate[900],
          bg: '#ecd189',
          border: '#ecd189',
        },
        error: {
          txt: colors.slate[100],
          bg: '#8c4646',
          border: '#8c4646',
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: '#eee3ce',
          border: '#bbb19e',
          hover_txt: 'colors.slate[800]',
          hover_bg: colors.slate[100],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: '#eee3ce',
          bg: '#4c6975',
          border: '#bbb19e',
          hover_txt: '#eee3ce',
          hover_bg: '#3b525b',
          hover_border: '#3b525b',
        },
        btn_error: {
          txt: '#eee3ce',
          bg: '#1c1d21',
          border: '#1c1d21',
          hover_txt: '#ded3bf',
          hover_bg: '#5c2e2e',
          hover_border: '#5c2e2e',
        },
        label: colors.slate[600],
        txt_input: {
          txt: colors.slate[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.slate[600],
          focus_bg: colors.slate[50],
          focus_border: colors.slate[300],
        },

        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.slate[100],
        },

        // Mint widget
        token_preview: '#ffffff',
      },
    },
  },
  variants: {},
  plugins: [],
};
