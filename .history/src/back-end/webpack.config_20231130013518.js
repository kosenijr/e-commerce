module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      fs: false, // or require.resolve('fs'),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      net: false, // or require.resolve('net'),
      tls: false, // or require.resolve('tls'),
      constants: require.resolve("constants-browserify"),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
    },
  },
};
