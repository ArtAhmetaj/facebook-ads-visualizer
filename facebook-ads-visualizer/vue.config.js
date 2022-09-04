module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: false, // Previously it was set as true
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
