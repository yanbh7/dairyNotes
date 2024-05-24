{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Print to console": {
	  "scope": "javascript,typescript",
	  "prefix": "cll",
	  "body": [
		"console.log(\"Ybh\", \">>>>At $TM_FILENAME Line:$TM_LINE_NUMBER >>>>\");",
		"console.log(\"${1|state.,props.,loacl:|}$0:\", ${1/loacl://}$0);"
	  ],
	  "description": "Log output to console"
	},
	"vueTemplate": {
	  "prefix": "vbase",
	  "body": [
		"<template>",
		"\t<div class=\"$TM_FILENAME_BASE\">\n\t</div>",
		"</template>",
		"",
		"<script>",
		"import { toRefs } from \"vue\";",
		"",
		"export default {",
		"\tname: \"${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/i}}\",",
		"",
		"\tprops: {$0},",
		"",
		"\tsetup(props, ctx) {",
		"",
		"\t\treturn {};",
		"\t},",
		"};",
		"</script>",
		"",
		"<style lang=\"less\" scoped>",
		".$TM_FILENAME_BASE{",
		"}",
		"</style>",
	  ],
	},
	"commentTemp": {
	  "prefix": "dcm",
	  "body": [
		"/*",
		" *",
		" */",
	  ],
	  "description": "document comment"
	},
	"useFunc": {
	  "prefix": [
		"use",
		"combin"
	  ],
	  "body": [
		"import { reactive } from \"vue\";\r\n",
		"class State{",
		"\tconstructor(){",
		"",
		"\t}",
		"}",
		"export default function ${1:${TM_FILENAME_BASE/(.*)/${1:/camelcase}/gi}} (props, ctx) {",
		"\tconst state = reactive(new State());\r\n",
		"\tconst methods = {};\r\n",
		"\treturn {",
		"\t\tstate,",
		"\t\tmethods,",
		"\t}",
		"}",
	  ],
	  "description": "document comment"
	},
	"importTools": {
	  "prefix": [
		"api",
		"tools"
	  ],
	  "body": [
		"import { ${1|$t,$imgViewer,api,$dialog|} } from \"@/${1/api/${1:?api:tools}/gi}\"",
	  ],
	  "description": "document comment"
	},
	"UIFormImport": {
	  "prefix": [
		"fimport",
	  ],
	  "body": [
		"import UIForm from \"@/components/form/form.vue\";",
	  ],
	  "description": "document comment"
	},
	"TableFormImport": {
	  "prefix": [
		"timport",
	  ],
	  "body": [
		"import TablePage from \"@/components/table-page/table-page.vue\";",
	  ],
	  "description": "document comment"
	},
  }
