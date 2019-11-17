# _app.closeメソッド

プロセスのウィンドウを閉じます。

## 書式

```javascript
_app.close()
```

## 説明

プロセスのアプリケーションウィンドウを閉じます。

「窓を閉じる」や[kit-close属性](/kit-close)と同じ挙動をします。

> このメソッドは、kafが内部的に[System.close](/System.close)メソッドを呼び出しています。

## 例

```javascript
_app.close()
```

## 対応状況
- kit 0.2.1(kaf v2)以降
