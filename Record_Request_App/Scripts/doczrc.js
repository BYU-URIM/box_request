const path = require("path")

export default {
    typescript: true,
    modifyBundlerConfig: config => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        })
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: "ts-loader",
            include: path.resolve(__dirname, "./src"),
            exclude: /node_modules/,
            options: {
                transpileOnly: true,
            },
        })
        return config
    },
}
