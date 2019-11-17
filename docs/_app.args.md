# _app.argsオブジェクト

アプリの起動時に渡された引数が格納されたオブジェクトです。

## 説明

アプリの起動時に、以下のように`launch`メソッドの第2引数にアプリケーションの引数を渡すことができます。

```javascript
launch('browser', { url: some_url });
```

`_app.args`にはこの**引数**が格納されています。これは`System.args[_pid]`と等価です。

## 例

```javascript
let url = _app.args.url
```

アプリ引数内の`url`というキーの値を取得する例です。

## 対応状況
- kit 0.2.1(kaf v2)以降
