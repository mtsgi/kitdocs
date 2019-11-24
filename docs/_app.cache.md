# _app.cacheオブジェクト

キャッシュとして保存されたアプリの定義ファイルオブジェクトです。

## 説明

`define.json`の読み込み時にアプリのキャッシュ情報として`System.appCache`に格納されるオブジェクトを取り出すことができます。

これは、[define.json](/DEF)の内容を構文解析したオブジェクトであり、[System.appInfoメソッド](/System.appInfo)で得られる情報とほとんどの場合同一です。

## 例

```javascript
let version = _app.cache.version
```

アプリの作者情報やサポート情報など、`define.json`に定義された情報を取得するのに役立ちます。

## 対応状況
- kit 0.2.1(kaf v2)以降
