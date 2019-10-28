# _app.changeWindowTitleメソッド

プロセスのウィンドウタイトルを変更します。

## 書式

```javascript
_app.changeWindowTitle( title )
```

- **title**
  - 新しいウィンドウタイトルです。

## 説明

ウィンドウのタイトルは、アプリケーションの名前とは別にプロセスに保持されています。このメソッドを利用してウィンドウのタイトルを書き換えると、UI上でのウィンドウタイトルの表示が変わるほか、プロセス情報に格納されたウィンドウタイトルも変更されます。

> このメソッドは、kafが内部的に[App.changeWindowTitle](/App.changeWindowTitle)メソッドを呼び出しています。

## 例

```javascript
_app.changeWindowTitle('Sure?')
```
