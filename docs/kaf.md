# kit apps frameworkとは？

kit apps frameworkは、kitアプリの開発をしやすくする開発者のためのフレームワークです。この**kaf**を使うことで、JavaScriptコーディングの量を劇的に少なく、あるいはまったくなくすことができます。

![kaf](images/kaf.png)

> kafの利用はデフォルトで有効になっています。アプリで無効にするにはdefine.jsonのsupportオブジェクトに`kaf: false`を指定します(アプリケーション動作の軽量化が見込める場合があります)。詳細は[supportオブジェクトについて](/DEFS)を参照してください。

kafはHTMLの要素に`kit-`接頭辞を持つ属性を付与することで呼び出すことができます。
