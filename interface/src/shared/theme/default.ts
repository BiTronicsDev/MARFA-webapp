
export default {
  breakpoints: {
    values: {
      xs: 480,
      sm: 800,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },

  spacing: 4,

  palette: {
    common: {
      black: "#000",
      white: "#FFF",
    },
    primary: {
      main: "#1565C0",
      contrastText: "#FFF",
      dark: "#145197",
      light: "#89B1DF",
    },
    secondary: {
      main: "#FFF",
      contrastText: "#1565C0",
      dark: "#F0F5FF",
      light: "#89B1DF",
    },
    accent: {
      main: "#FA5D55",
      light: "#FCADA9",
      contrastText: "#FFF",
      invert: {
        main: "#FFF",
        contrastText: "#FA5D55",
        light: "#FCADA9",
      },
    },
    additional: {
      dark: "#1B1E24",
      main: "#313439",
      light: "#98999C",
      gray: "#9F9FA2",
      contrastText: "#FFF",
      lightBlue: "#DEE7F2",
      link: "#29147E",
      modal: "#F0F2F9",
      modalBorder: "#C3C3C3",
      invert: {
        light: "#98999C",
        main: "#FFF",
        dark: "#F0F5FF",
        contrastText: "#313439",
      },
    },
    text: {
      active: "#1565C0",
      hover: "#595959",
      fill: "#1F2124",
      disabled: "#EBEBEB",
      error: "#FF564E",
      warning: "#CD8703",
      info: "#0444A3",
      success: "#28C75D",
    },
    error: {
      main: "#FF564E",
      light: "#FFDEDE",
      dark: "#D82E2E",
    },
    warning: {
      main: "#CD8703",
      light: "#FCF4E3",
      dark: "#964002",
    },
    info: {
      main: "#1565C0",
      light: "#DEF3FC",
      dark: "#0444A3",
      lightBlue: "#688FC8",
    },
    success: {
      main: "#28C75D",
      light: "#E6FCDE",
      dark: "#228B45",
    },
    background: {
      main: "#FFF",
      paper: "#F9F9F9",
      default: "#FFF",
      dark: "#313439",
      sidebar: "#233044",
    },
    status: {
      student: "#3EC344",
      mentor: "#FFB22F",
      teacher: "#4AD5DE",
      moderator: "#DF4EF7",
      admin: "#FA5D55",
    },
    action: {
      primary: {
        active: "rgba(21, 101, 192, 1)",
        hover: "rgba(0, 0, 0, 0.2)",
        hoverOpacity: 0.2,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(21, 101, 192, 0.5)",
        disabledBackground: "rgba(255, 255, 255, 1)",
        disabledOpacity: 0.5,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
        inactive: "rgba(235, 235, 235, 1)",
      },
      secondary: {
        active: "#fff",
        hover: "rgba(0, 84, 251, 0.06)",
        hoverOpacity: 0.06,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(255, 255, 255, 0.5)",
        disabledBackground: "rgba(255, 255, 255, 0.5)",
        disabledOpacity: 0.5,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
        inactive: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
}