# kit-bind属性
`<input>`要素に**kit-bind**属性を用いて名前を定義することで、**「データ」**に紐付けを行い、リアルタイムにデータを監視・変更・取得することができるようになります。

## 説明

`<input>`要素の内容が書き換えられるたび**データ**も変化し、そのデータは[App.dataメソッド](/App.data)から簡単に取り出すことができます。さらに、別の要素に[kit-observe属性](/kit-observe)を付与すれば、このデータの中身を監視することもできます。

> kit apps frameworkでは、それぞれのアプリケーションのプロセスに対してデータ(キーと値の組み合わせ)を保持しており、アプリ内で設定されたkit-bind属性は、同一のプロセス内のデータのみ変更します。

## 例

次のようにすると、`<input>`タグに入力された内容はリアルタイムに`foobar`という名前でデータに格納されるようになります。

```html
<input type="text" class="textbox m" kit-bind="foobar">
```
リアルタイムでデータが紐付けられていることkit-observe属性を使用してを確認することもできます。

```html
<code kit-observe="foobar"></code>
```
アプリケーションのスクリプト側からは次のようにすることで、入力されたデータを受け取ることができます。いちいち要素のDOMを特定してからvalueを取得する必要はもうありません。

```javascript
App.data(_pid).foobar
```
> これは、`App.data(_pid, 'foobar')`および`App.data(_pid)['foobar']`と等価です。詳細は[App.dataメソッド](/App.data)を参照してください。