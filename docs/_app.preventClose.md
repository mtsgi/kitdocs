# _app.preventCloseメソッド
アプリのプロセス終了を防ぎます。

## 書式

```javascript
_app.preventClose( [bool] )
```

- **bool**
  - `true`で"終了を防ぐ"が有効になります。`false`の場合は解除されます。省略された場合は`true`になります。

## 説明

"終了を防ぐ"を有効にしていると、シャットダウン時にアプリケーションを閉じる前に確認画面が出るようになります。

> このメソッドは、kafが内部的に[App.preventClose](/App.preventClose)メソッドを呼び出しています。

## 例

```javascript
if( _app.d.prop ) _app.preventClose()
```
