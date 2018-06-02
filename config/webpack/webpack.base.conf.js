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
			BizUtils: path.resolve(__dirname, "app/utils"),
		}
	}

};
module.exports = config;