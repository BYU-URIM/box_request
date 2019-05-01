const path = require("path")
const webpack = require("webpack")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = (env, { mode }) => {
    return {
        devServer: {
            contentBase: "dist",
            stats: {
                warningsFilter: /export .* was not found in/,
            },
        },
        devtool: "inline-source-maps",
        entry: "./src/main.tsx",
        optimization:
            mode === "production"
                ? {
                      removeAvailableModules: false,
                      removeEmptyChunks: false,
                      splitChunks: false,
                  }
                : {
                      removeAvailableModules: false,
                      removeEmptyChunks: true,
                      splitChunks: {
                          chunks: "all",
                      },
                  },

        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                    test: /\.tsx?$/,
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
            ],
        },
        output: {
            filename: "bundle.js",
            path: path.join(__dirname, "dist"),
            pathinfo: false,
        },
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(env.NODE_ENV),
            }),
            new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx"],
        },
    }
}
