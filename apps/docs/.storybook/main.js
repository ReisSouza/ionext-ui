module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    // name: '@storybook/react-webpack5', // Remove this
    name: "@storybook/nextjs", // Add this
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  // viteFinal: (config, { configType }) => {
  //   if (configType === "PRODUCTION") {
  //     config.base = "/ionext-ui/";
  //   }
  //   return config;
  // },
  docs: {
    autodocs: true,
  },
};
