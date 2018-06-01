const path = require('path');
const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css",".pcss"],
        // alias: {
            // react: path.resolve(__dirname, './node_modules/react'),
            // 'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        //   }
    }

};
module.exports = config;