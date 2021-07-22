module.exports = {
  module: {
    rules: [
      {
        test: /\.(vert|frag)$/i,
        use: ['raw-loader', 'glslify-loader'],
      },
    ],
  },
};
