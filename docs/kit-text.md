# kit-text属性

**kit-text**属性を持つ要素の内容(**テキスト**)をJavaScript式の評価値に変更します。

## 説明

要素のテキスト内容を、**kit-text**属性値をJavaScript式として評価した値にします。

属性値の式は、テンプレートのロード([App.loadメソッド](/App.load)および[App.kafメソッド](/App.kaf)による)時に評価され、再びそのテンプレートがロードされるまで再評価はされません。

> `kit-text`属性を持つ要素のテキスト内容は、HTMLとして解析されません。任意のHTMLコードとして内容を動的に変化させたい場合は、[kit-html属性](/kit-html)を用いてください。

## 例

kitシステムが持つユーザーネームの値を`<span>`要素に表示させる例です。

```html
<strong kit-text="System.username"></strong>
```
