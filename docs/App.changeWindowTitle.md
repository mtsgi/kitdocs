# App.changeWindowTitleメソッド
指定したプロセスのウィンドウタイトルを変更します。

## 書式

```javascript
App.changeWindowTitle( pid, title )
```

- **pid**
  - ウィンドウタイトルを変更したい対象のプロセスIDです。
- **title**
  - 新しいウィンドウタイトルです。

## 説明

ウィンドウのタイトルは、アプリケーションの名前とは別にプロセスに保持されています。このメソッドを利用してウィンドウのタイトルを書き換えると、UI上でのウィンドウタイトルの表示が変わるほか、プロセス情報に格納されたウィンドウタイトルも変更されます。

> このメソッドは、[KWS.changeWindowTitleメソッド](/KWS.changeWindowTitle)の代替として実装されました。既に利用できない可能性のあるKWS.changeWindowTitleの代わりにApp.changeWindowTitleを使用してください。

## 例

```javascript
App.changeWindowTitle(_pid, "Sure?")
```

## 対応状況
- kit 0.2.0以降
