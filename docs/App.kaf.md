# App.kafメソッド
指定したプロセスに対し**kit apps framework**を初期化します。

## 書式

```javascript
App.kaf( pid )
```

- **pid**
  - 初期化対象のプロセスIDです。

## 説明

このメソッドは内部的に、[App.loadメソッド](/App.load)が呼び出された場合に自動的に実行されます。そのため、アプリの開発者が明示的に`App.kaf()`を呼び出す場面はあまりないでしょう。

define.jsonの[supportキー](/DEFS)内でkafを無効にしている場合に、一時的にkafの機能を使用する場合に利用することができます。この場合、次にテンプレートがロードされると再びkafは使用できなくなります。


## 例

```javascript
App.kaf(_pid)
```

## 対応状況
- kit 0.2.0(kaf v1)以降
