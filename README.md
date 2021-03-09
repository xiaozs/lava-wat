# lavats-wat
lavats-wat是lavats-wasm的拓展模块，支持将wat字符串转换为Module。
lavats-wat依赖于lavats。

## 安装
在命令行中输入：
```
npm install lavats
npm install lavats-wat
```

## 引入

### cmd
```javascript
var lavatsWasm = require("lavats-wasm");
require("lavats-wat");
```

### amd
```javascript
require(["lavats-wasm", "lavats-wat"], function(lavatswat) {

})
```
```javascript
define(["lavats-wasm", "lavats-wat"], function(lavatsWasm) {

})
```

### es6
```javascript
import * as lavatsWasm from "lavats-wasm";
import "lavats-wat";
```

### \<script>
```html
<script src="./node_modules/lavats/dist/index.js"></script>
<script src="./node_modules/lavats-wasm/dist/index.js"></script>
<script src="./node_modules/lavats-wat/dist/index.js"></script>
<script>

lavatsWasm

</script>
```

## 使用
```js
import { Module } from "lavats-wasm";
import "lavats-wat";

let wat = `
(module 

)
`;

let module = Module.fromWat(wat);
```