# vscode 代码片段

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2025-06-03" />
</div>

在左下角设置中进入代码片段，设置 *typescript* 的代码片段，设置 *json* 文件

```json
{
	"fn": {
		"prefix": "fn",
		"body": [
			"() {",
			"\t$1",
			"}"
		],
		"description": "Function definition"
	},
	"clo": {
		"prefix": "clo",
		"body": [
			"console.log('$1 >>',$1);"
		],
		"description": "Console log with variable"
	},
	"clg": {
		"prefix": "clg",
		"body": [
			"console.log('$1');"
		],
		"description": "Console log"
	},
	"fre": {
		"prefix": "fre",
		"body": [
			"$1.forEach((item, index) => {",
			"\t$2",
			"})"
		],
		"description": "forEach"
	},
	"fin": {
		"prefix": "fin",
		"body": [
			"for (const item in $1){",
			"\t$2",
			"}"
		],
		"description": "for in"
	},
	"fof": {
		"prefix": "fof",
		"body": [
			"for (const [key, value] of $1){",
			"\t$2",
			"}"
		],
		"description": "for in"
	},
    /** cocos 专属代码片段 */
	"prob": {
		"prefix": "prob",
		"body": [
			"@property(Button)",
			"$1: Button = null"
		],
		"description": "property button"
	},
	"pron": {
		"prefix": "pron",
		"body": [
			"@property(Node)",
			"$1: Node = null"
		],
		"description": "property node"
	},
	"prol": {
		"prefix": "prol",
		"body": [
			"@property(Label)",
			"$1: Label = null"
		],
		"description": "property label"
	},
	"pros": {
		"prefix": "pros",
		"body": [
			"@property(sp.Skeleton)",
			"$1: sp.Skeleton = null;"
		],
		"description": "property skeleton"
	},
}

```


