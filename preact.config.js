export default (config, env, helpers) => {
  const wpLoaders = config.module.loaders;
  wpLoaders.push(        {
    test: /\.pdf$/,
    loader: "file-loader?name=[name].[ext]"
  })
};