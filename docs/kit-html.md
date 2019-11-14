# kit-html属性

**kit-html**属性を持つ要素の内容をJavaScript式の評価値をHTMLとして解釈したものに変更します。

## 説明

要素の内容を、**kit-html**属性値をJavaScript式として評価した値にします。

属性値の式は、テンプレートのロード([App.loadメソッド](/App.load)および[App.kafメソッド](/App.kaf)による)時に評価され、再びそのテンプレートがロードされるまで再評価はされません。

`kit-html`属性を持つ要素の内容は、任意のHTML(何らかのスクリプトを含む)をkitアプリケーションのテンプレート上に展開できるため、ユーザーによる入力をそのまま受け付けるべきではありません。

> 値をHTMLマークアップとして解釈する必要がない場合は、[kit-text属性](/kit-text)を用いてください。セキュリティ上のリスクが発生する場合があります。

## 例

HTMLコードをスクリプト内で生成、kafデータに設定し、テンプレート内でマークアップを展開する例です。

```javascript
let html_data = `<kit-badge>${y}</kit-badge>${x * Math.PI}`
_app.data('htmlData', html_data)
```

```html
<div kit-html="DATA.htmlData"></div>
```
