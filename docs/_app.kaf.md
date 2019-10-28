# _app.kafメソッド

アプリケーションに対して**kit apps framework**を初期化します。

## 書式

```javascript
_app.kaf()
```

## 説明

アプリのプロセスにkafを初期化します。**kafの初期化**は、アプリケーションにテンプレートがロードされるたびに実行される必要がありますが、テンプレートのロードを担う[App.loadメソッド](/App.load)が自動的に実行するため、通常は`_app.kaf()`を呼び出す必要はありません。

詳細は[App.kafメソッド](/App.kaf)をご覧ください。

> このメソッドは、kafが内部的に[App.kafメソッド](/App.kaf)メソッドを呼び出しています。

## 例

```javascript
_app.kaf()
```
