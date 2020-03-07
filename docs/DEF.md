# 定義可能項目の一覧

kitアプリの定義ファイル**define.json**で定義できる項目の一覧です。

`"support"`キーの定義可能項目一覧は[こちら](/DEFS)をご確認ください。

> **define.json**は一般的なJSONフォーマットで書きます。コードを手打ちしたり項目を覚えるのは大変なので、入力された項目からdefine.jsonを自動生成する支援ツール**[defgen](https://mtsgi.github.io/defgen)**を提供しています。

|名前|省略|型|内容|
|-|-|-||
|**id**|不可|String|アプリケーションのIDを定義します。ディレクトリ名と同じにします。他のアプリケーションと重複できません。|
|**name**|不可|String|アプリケーションの名前を定義します。アプリ起動時のデフォルトのウィンドウタイトルになります。|
|**icon**|可|String|アプリのアイコン画像の相対パスを記述します。アイコンなしの場合は省略、または`none`を定義します。|
|**version**|不可|String|バージョン情報を定義します。|
|**author**|不可|String|アプリケーションの作者名を定義します。|
|**support**|可|Object|アプリケーションのサポートする機能を定義します。**support**キーはオブジェクトを持ち、上記のdefine.jsonの例のように`darkmode`などのキーに対してそれぞれBoolean型の値を持ちます。詳細は[supportキーについて](DEFS)を参照してください。省略した場合はすべてデフォルト値になります。|
|**size**|可|Object|`width`と`height`というキーを持ち、ウィンドウのデフォルトの大きさを定義します。省略した場合、それぞれ`auto`になります。|
|**view**|可|String|最初にロードするテンプレートHTMLファイルを定義します。省略した場合、`default.html`をロードします。|
|**script**|可|String|実行されるスクリプトファイルをアプリケーションディレクトリからの相対パスで定義します。使用しない場合は省略、または`none`を定義します。|
|**css**|可|String|使用するカスタムスタイルシートのファイルをアプリケーションディレクトリからの相対パスで定義します。使用しない場合は省略、または`none`を定義します。|

> kit v0.2.0以前では、**icon**、**view**、**script**および**css**項目は省略不可です。使用しない場合には、`none`を明示的に指定する必要があります。

## 例

これは、[はじめてのkitアプリ](/FIRSTAPP)でも紹介したdefine.jsonの書き方の一例です。各アイテムの順番には制限はありません。

```define.json
{
    "id": "bmi",
    "name": "BMI計算",
    "icon": "none",
    "version": "1",
    "author": "kit",

    "support": {
        "darkmode": true,
        "resize": false,
        "fullscreen": false
    },

    "size": {
        "width": "auto",
        "height": "auto"
    },

    "view": "default.html",
    "script": "bmi.js",
    "css": "none"
}
```
