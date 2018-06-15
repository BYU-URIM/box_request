var path = require("path")
var webpack = require("webpack")

module.exports = function(env) {
    return {
        devServer: {
            contentBase: "dist"
        },
        entry: "./src/main.tsx",
        output: {
            filename: "bundle.js",
            path: path.join(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        },
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(env.NODE_ENV),
            }),
        ],
    }
}
