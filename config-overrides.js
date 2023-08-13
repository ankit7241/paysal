const { ProvidePlugin }= require("webpack")

module.exports = {
  webpack: function (config, env) {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
      }
      return rule;
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      process: require.resolve("process"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
      constants: require.resolve("constants-browserify"), 
      fs: false,
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      assert: require.resolve("assert"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url"),
      util: require.resolve("util"),
      tty: require.resolve("tty-browserify"),
      net: require.resolve("net-browserify"),
      tls: require.resolve("tls-browserify"),
      querystring: require.resolve("querystring-es3"),

    }
    config.ignoreWarnings = [/Failed to parse source map/];
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
      ...config.plugins,
      new ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new ProvidePlugin({
          process: ["process"]
      }),
    ]
    return config;
  },
}
