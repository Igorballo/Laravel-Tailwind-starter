module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                sf: {
                    pink: "#dd163b",
                },
            },
            fontFamily: {
                body: ["Trueno"],
            },
        },
    },

    plugins: [
        // ...
        require("tailwind-scrollbar"),
    ],
};
