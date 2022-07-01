module.exports = {
    "extends": [
        "react-app",
        "react-app/jest",
        "airbnb-typescript",
    ],
    "parserOptions": {
        "project": `./tsconfig.json`
    },
    "rules": {
        "react/jsx-indent": [1, 2],
        'react/jsx-indent-props': ['error', 2],
        "react/jsx-max-props-per-line": [1, { "maximum": 1 }]
    }
};
