Vetur

```json
{
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.fontSize": 16,
  // 行宽标尺，规范是不超过 120
  "editor.rulers": [80, 120],
  "extensions.ignoreRecommendations": true,
  "window.zoomLevel": 0,
  "explorer.confirmDragAndDrop": false,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "prettier",
  // vue中使用什么工具格式化
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 120,
      "wrap_attributes": "auto",
      "end_with_newline": false
    },
    "prettier": {
      "printWidth": 120,
      "singleQuote": false,
      "semi": true
    }
  },
  "vetur.validation.template": false,
  // js采用prettier格式化
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.editor.enablePreview": false,
  "files.autoSaveDelay": 0,
  "editor.formatOnSave": true,
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "prettier.printWidth": 120, // 120的长度后自动换行
  "prettier.trailingComma": "es5", // 尾随逗号按es5标准
  "prettier.semi": true, // 结尾补上分号
  "editor.wordWrapColumn": 120
}
```

Volar

```json
{
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.fontSize": 16,
  // 行宽标尺，规范是不超过 120
  "editor.rulers": [80, 120],
  "extensions.ignoreRecommendations": true,
  "window.zoomLevel": 0,
  "explorer.confirmDragAndDrop": false,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // js采用prettier格式化
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.editor.enablePreview": false,
  "files.autoSaveDelay": 0,
  "editor.formatOnSave": true, // 保存时自动格式haul
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "prettier.printWidth": 120, // 120的长度后自动换行
  "prettier.trailingComma": "es5", // 尾随逗号按es5标准
  "prettier.semi": true, // 结尾补上分号
  "prettier.singleQuote": false, // 设置强制单引号, 默认就是双引号
  "editor.wordWrapColumn": 120 // 120列后换行
}
```
