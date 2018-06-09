const path = require("path");
const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
	newEntry[name] = entry[name][0];
}
let config = {
	entry: newEntry,
	resolve: {
		extensions: [".js", ".json", ".jsx", ".css",".pcss"],
		alias: {
			BizComponent: path.resolve(__dirname, "../../src/component"),
			BizUtils: path.resolve(__dirname, "../../src/utils"),
			BizPublic: path.resolve(__dirname, "../../src/public"),
			BizAssets: path.resolve(__dirname, "../../src/assets"),
			BizConfig: path.resolve(__dirname, "../../src/config"),
		}
	}

};
module.exports = config;