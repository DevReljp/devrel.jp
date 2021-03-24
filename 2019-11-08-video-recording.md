---
layout: post
title:  "勉強会やカンファレンスで使える動画撮影について"
date:   2019-11-07 00:00:00
catch: 
categories:
- 動画
author: moongift
---

実際の動画としてはこんな感じです。アニメーションGIF化しています。

ポイントは次のようになります。


使っているのはOBSになります。OBS、めっちゃ便利。

## 利用している機材について

この手の仕組みを作るのに必要なのは、とにかくハードウェアです。色々試しましたが、以下の組み合わせが良いんじゃないかと思います。

- [I-O DATA HDMI キャプチャーボード](https://www.amazon.co.jp/gp/product/B07SB93BXH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=moongift-22&creative=1211&linkCode=as2&creativeASIN=B07SB93BXH&linkId=66bc174667359f9aee4fed376b959206)
- [三脚](https://www.amazon.co.jp/gp/product/B07QQPVSMC/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07QQPVSMC&linkCode=as2&tag=moongift-22&linkId=e6b5a8816d22e4374254291c86c7281f)
- [HDMIスプリッター](https://amzn.to/2rq7p3f)
- [WEBカメラ eMeet C960](https://amzn.to/36Je3l0)

キャプチャーボードを安価に済ませたい場合には、[LKV373](https://amzn.to/36SQLJM)を使うこともできます。利用法は[OBS Studioで使えるHDMIキャプチャを5000円で手に入れる - Write and Run](https://diary.hatenablog.jp/entry/2018/11/23/010746)とか[PHPerKaigi 2019でコアスタッフをして音響･映像関連を頑張った #phperkaigi - rela1470のブログ](https://rela1470.hatenablog.jp/entry/2019/04/11/095524)を参考にすると良いでしょう。筆者環境ではobs-lenkengがビルドできず、断念しました…。

## キャプチャーボードについて

このキャプチャボードはPC（MacBook）につないで、OBSに入力ソースとして認識されます。特別なソフトウェアを使わずに入力ソースとして認識されるものは多くないのでお薦めです。

## 三脚について

[三脚](https://www.amazon.co.jp/gp/product/B07QQPVSMC/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07QQPVSMC&linkCode=as2&tag=moongift-22&linkId=e6b5a8816d22e4374254291c86c7281f)は見た目結構貧相なのですが（安っぽいプラスチック製）、軽くて持ち運びが簡単、高さが1mまで伸ばせる、何よりレバーがついているので登壇者が移動した時にカメラの移動が簡単という点で購入しています。とは言え、ちゃちな作りが気になるので[こちら](https://amzn.to/2Nv29UB)の方が良い気がしています。三脚にはWebカメラを付けています。

## HDMIスプリッターについて

多くの場合、HDMIスプリッターを付けなくてもプロジェクターに投影できるのですが、プロジェクター投影時はHDCPで保護する場合もあります。そうした時には一旦HDMIスプリッターで分けないといけません。

HDMIスプリッターも色々あって、試した限りでは[これ](https://amzn.to/2rq7p3f)がちゃんと動いてくれます。あくまでも筆者の場合ですが[こちら](https://amzn.to/2WTq82A)のスプリッターは正しく動かず終いでした…。

## 背景画像について

背景画像は1920x1080の画像を作成します。これはKeynoteで作ってPNG画像出力しています。そのPNG画像のスライド部分と登壇者の撮影部分を透過にして、OBSに読み込んでいます。

## 音声について

音声がMacBookまたはWebカメラのスピーカーから取り込んでいるのですが、ここは改善の余地があるかなと思っています。登壇者の声が撮りづらいのもそうですが、マイクそばの笑い声も入ってしまうのが難点です。指向性のあるマイクを用意した方が良い気がしています。


