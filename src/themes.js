const standard = {
    shadows: {
        black80: "0 0 50px #00000080",
        black40: "0 0 50px #00000040",
        white80: "0 2px 10px #ffffff80",
        accent: "0px 8px 4px -4px #F1D00A80"
    },
    toast: {
        success: "#12FA8b",
        error: "#FA1233",
        neutral: "#999999"
    }
};

export const themes = [
    {
        name: "horizon",
        colors: {
            primary: "#21325E",
            secondary: "#3E497A",
            accent: "#F1D00A",
            detail: "#F0F0F0"
        },
        ...standard
    },
    {
        name: "comodo",
        colors: {
            primary: "#141E27",
            secondary: "#203239",
            accent: "#E0DDAA",
            detail: "#EEEDDE"
        },
        ...standard
    },
    {
        name: "africa",
        colors: {
            primary: "#004445",
            secondary: "#2C786C",
            accent: "#F8B400",
            detail: "#FAF5E4"
        },
        ...standard
    },
    {
        name: "meshno",
        colors: {
            primary: "#0A1931",
            secondary: "#185ADB",
            accent: "#FFC947",
            detail: "#EFEFEF"
        },
        ...standard
    },
    {
        name: "avocado",
        colors: {
            primary: "#1C1427",
            secondary: "#40394A",
            accent: "#7ECA9C",
            detail: "#CCFFBD"
        },
        ...standard
    },
    {
        name: "jungle",
        colors: {
            primary: "#071A52",
            secondary: "#086972",
            accent: "#A7FF83",
            detail: "#17B978"
        },
        ...standard
    },
    {
        name: "freeze",
        colors: {
            primary: "#212121",
            secondary: "#323232",
            accent: "#0D7377",
            detail: "#14FFEC"
        },
        ...standard
    },
    {
        name: "latte",
        colors: {
            primary: "#8E806A",
            secondary: "#C3B091",
            accent: "#FFE6BC",
            detail: "#E4CDA7"
        },
        ...standard
    },
    {
        name: "blueberry",
        colors: {
            primary: "#421B9B",
            secondary: "#A06EE1",
            accent: "#CBBCF6",
            detail: "#CEF9E2"
        },
        ...standard
    }
];
