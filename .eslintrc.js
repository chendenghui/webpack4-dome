module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended" //增加
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [ "react"],
    "rules": {
      "function-paren-newline": "off",
      "import/no-extraneous-dependencies": "off",
      "react/no-unused-state": "warn",
      "comma-dangle": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "react/forbid-prop-types": "warn",
      "react/no-unused-prop-types": "warn",
      "react/prop-types": "warn",
      "react/self-closing-comp": "warn",
      "class-methods-use-this": "off",
      "react/jsx-filename-extension": "off",
      "react/prefer-stateless-function": "off",
      "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "no-unused-vars": "warn",
      "no-path-concat": 1,
      "max-len": 0,//关闭单行字符长度限制
      "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
    }
};
