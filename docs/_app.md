# _appインスタンス

**kit apps framework v2**では、アプリごとに`App`クラスのインスタンスが生成され、`app`という変数に格納された上で`_app`という名前でインスタンスを受け取ることができます。

## _appを受け取る

**kaf v1**では、アプリのスクリプトの雛形は以下のようなものでした。

```javascript
((_pid) => {
    //ここにスクリプトを記述
})(pid);
```

**kaf v2**では、これに加え、`app`変数を`_app`という名前で引数として受け取ることができます。

```javascript
((_pid, _app) => {
    //ここにスクリプトを記述
})(pid, app);
```

## 何ができるの？

これによって次のようなことが可能になります。例えば、今まであるプロセスのウィンドウを閉じる場合、以下のようなコードを記述していました。

```javascript
System.close(_pid);
```

しかし、`_app`の登場でこれは以下のように書けます。

```javascript
_app.close();
```

これは、`_app`が`App`クラスから生成された(`new App()`式を用いて生成された)インスタンスであり、**自身のプロセスIDやその他のアプリ情報を保持している**からです。

同様に、あるプロセスのウィンドウ内のDOM要素をセレクタから取得する場合のコードは、

```javascript
let hoge = System.dom(_pid, '.some-class');
```

のようなPIDを必要とする方法から、

```javascript
let hoge = _app.dom('.some-class');
```

のような簡潔な記述に置き換えることができます。

## インスタンスの持つメソッド

上で見たように、`_app`はSystemクラスのメソッドやKWS(kit Window System)、Appクラスのメソッドなどをpidを必要としない形でラップしたメソッドを持っています。

`_app`インスタンスの持つメソッドと値の一覧は以下のとおりです。

- [_app.argsオブジェクト](/_app.args)
- [_app.changeWindowTitleメソッド](/_app.changeWindowTitle)
- [_app.closeメソッド](/_app.close)
- [_app.dオブジェクト](/_app.d)
- [_app.dataメソッド](/_app.data)
- [_app.domメソッド](/_app.dom)
- [_app.eオブジェクト](/_app.e)
- [_app.eventメソッド](/_app.event)
- [_app.getPathメソッド](/_app.getPath)
- [_app.infoオブジェクト](/_app.info)
- [_app.kafメソッド](/_app.kaf)
- [_app.loadメソッド](/_app.load)
- [_app.ntfメソッド](/_app.ntf)
- [_app.preventCloseメソッド](/_app.preventClose)
- [_app.processオブジェクト](/_app.process)
- [_app.qsメソッド](/_app.qs)
