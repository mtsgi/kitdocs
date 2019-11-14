# kaf変数

**kit apps framework**を用いたアプリのテンプレート内では、プロセスID、プロセスの引数、**kafデータ**を**kaf変数**として利用することができます。

## 説明

[kit-text属性](/kit-text)や[kit-if属性](/kit-if)のような、JavaScript式を評価するkaf属性の中で、次の変数を使用することができます。

|変数名|説明|
|-|-|
|`PID`|プロセスID|
|`ARGS`|プロセスの引数|
|`DATA`|プロセスのkafデータ|

## 例

プロセスの引数にフラグが指定されている場合にのみメッセージを表示する例です。

```html
<div kit-if="ARGS.flag">Flagged process</div>
```
