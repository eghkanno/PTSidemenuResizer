# Resizable side menu for Pivotal Tracker v1.0

## description 
Chrome extension that allows to make [Pivotal Tracker](https://www.pivotaltracker.com)'s side menu resizable.

## install
### A. From [webstore](https://chrome.google.com/webstore/detail/resizable-side-menu-for-p/ildfbdokcicojjoookcdhjdpannnbikn)

### B. From repository(Developper mode)
1. Download the repository.
2. Open extension settings(chrome://extensions)
3. Enable developer mode.
4. From 'Load unpacked extension' Select the downloaded directory

## TODO

## 概要
[Pivotal Tracker](https://www.pivotaltracker.com)の左側のサイドメニューの幅を狭くしてページを見やすくするChrome拡張機能です。

## 導入方法
### A. [webstore](https://chrome.google.com/webstore/detail/resizable-side-menu-for-p/ildfbdokcicojjoookcdhjdpannnbikn)から

### B. リポジトリから(開発者モード)
1. 適当な箇所にファイルを展開する。
2. 拡張機能設定(chrome://extensions)を開く。
3. 最上部の「デベロッパーモード」チェックボックスを有効化する。
4. 「パッケージ化されていない拡張機能を読み込む」から先程展開したフォルダ(manifest.jsonが入っているフォルダ)を選択する。

## TODO

## DONE
- ドラッグで幅変更
- 待ち時間を秒数決め打ちからループでDOMを確認する方式へと変更
- 謎のスクロールバーが出現するようになったのを消したい
- パッケージ化
- アイコン作成
- ウェブストア登録
- 各パネルの幅の自動補正