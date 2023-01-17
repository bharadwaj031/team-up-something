module.exports = {
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine":"auto",
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "parser": "typescript",
  "overrides": [
    {
      "files": "*.js",
      "options": {
        "parser": "babylon"
      }
    },
    {
      "files": "*.tsx",
      "options": {
        "parser": "typescript",
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "arrowParens": "always",
        "endOfLine":"auto",
        "printWidth": 120,
        "tabWidth": 2,
        "useTabs": false
      }
    }
  ]
}
