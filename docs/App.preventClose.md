# App.preventCloseメソッド
指定したプロセスの終了を防ぎます。

## 書式

```javascript
App.preventClose( pid[, bool] )
```

- **pid**
  - 終了を防ぐ対象のプロセスIDです。
- **bool**
  - `true`で"終了を防ぐ"が有効になります。`false`の場合は解除されます。省略された場合は`true`になります。

## 説明

"終了を防ぐ"を有効にしていると、シャットダウン時にアプリケーションを閉じる前に確認画面が出るようになります。

返り値に`App`を持つため、他のAppクラスのメソッドにメソッドチェーンを組むことができます。


## 例

```javascript
App.preventClose( _pid ).load( _pid, some_path )
```

メソッドチェーンの例です。

## 対応状況
- kit 0.2.0(kaf v1)以降
