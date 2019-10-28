# _app.qsメソッド

セレクターにマッチするアプリのテンプレート内のDOM要素すべてを含む静的なNodeListを取得します。

## 書式

```javascript
_app.qs( [selector1, selector2, ..., selectorN] )
```

- **selector1 ~ selectorN**
  - CSSセレクターとなる文字列です。

## 説明

`_app.qs`メソッドは、0個以上の引数を取ることができます。

- **引数が0個**の場合、アプリウィンドウのテンプレート部分の要素の静的なNodeListを返します。

- **引数が1個以上**ある場合、アプリウィンドウのテンプレート内でそれぞれ引数のセレクタに一致する要素すべてを含む静的なNodeListを返します。

> **注意**：`_app.qs`メソッドは可変長の引数を受け取ります。
> `_app.qs('.foo, .bar')`のように1つの引数内で`,`を用いて複数セレクタを渡すことはできません。
> 必ず`_app.qs('.foo', '.bar')`のようにセレクタごとに別の引数として渡してください。

このメソッドに関連して、[_app.domメソッド](/_app.dom)があります。`_app.qs`メソッドと同じ構文を用いて静的なNodeListを取得するバージョンです。

> このメソッドは、kafが内部的に[System.qsメソッド](/System.qs)メソッドを呼び出しています。

## 例

```javascript
let elems = _app.qs('.foo', '#bar', '[baz]');
for( let elem of elems ) elem.contentText = 'Hello, kit!';
```

ウィンドウのテンプレート内で`.foo` `#bar` `[baz]`というセレクタにマッチする要素すべての内容を"Hello, kit!"に変更するスクリプトの例です。

```javascript
let elemCount = _app.qs()[0].childElementCount
```

引数なしで`_app.qs`メソッドを呼び出し、テンプレート内の子要素の個数を取得する例です。
