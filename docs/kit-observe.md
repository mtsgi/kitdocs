# kit:observe属性
**kit:observe**属性をを要素に付与することで、特定のkafデータの内容を監視することができます。

## 説明

kit:observe属性を持つ要素の内容(contentText)は、[App.dataメソッド](/App.data)や、[kit:bind属性](/kit-bind)を付与されたinput要素によってkafデータの内容が変更されるたびにそれを追従します。

## 例

```html
<input type="text" class="textbox m" kit:bind="foobar">
<code kit:observe="foobar"></code>
```

`foobar`という名前のkafデータを作成し、それを監視する`<code>`要素を配置する例です。

```javascript
_app.data('foobar', 2000)
```

のように、[_app.dataメソッド](/_app.data)を使用してkafデータに変更を加えた場合にも、`kit:observe`属性を持つ要素の内容はそれを監視し、追従します。

## 互換性情報

kaf v1ではこの属性は`kit-observe`という名前の属性でしたが、v2でkafデータに紐づく属性の属性名に`:`を使用するように変更されました。
kaf v1が実装されている、kit 0.2.0では`kit:observe`の代わりに`kit-observe`属性を使用してください。
