# kit-launch属性

**kit-launch**を用いて、要素クリック時のイベントにkitアプリケーションの起動を割り当てることができます。

## 説明

`kit-launch`属性は、要素のクリック時に指定したアプリケーション(起動パス、またはSystem.appdir内のアプリID)を起動します。

> このメソッドは[System.launchメソッド](/System.launch)を呼び出します。アプリケーションに対する引数を渡すことはできません。
>
> 引数を渡してアプリケーションを起動する必要がある場合は、[App.eventメソッド](/App.event)(kaf v2では[_app.eventメソッド](/_app.event)も利用可能です)の機能を利用してください。

## 例

```html
<a class='kit-hl' kit-launch='nqueen'>Nクイーンで遊ぶ</a>
```

## 互換性情報

kaf v1ではこの属性は`launch`メソッドを呼び出します。

kaf v1の`kit-launch`属性ではSystem.appdir内のアプリのIDによる起動のみがサポートされ、起動パスによるアプリケーション起動はサポートされていません。
