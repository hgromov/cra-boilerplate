module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  },
};
