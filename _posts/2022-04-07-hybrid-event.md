---
layout: post
title: オンライン/オフライン同時開催型のパネルディスカッションで得られた知見
date:   2022-04-07 00:00:00
catch: hybrid-event.jpeg
image: /images/articles/hybrid-event.jpeg
categories:
- イベント
author: moongift
---

4月6日に[DevRel Meetup in Tokyo #73 〜ソーシャル活用術〜](https://devrel.connpass.com/event/243022/)を開催しました。まん延防止等重点措置が解除され、久々のオフライン会場を用意してのイベントになります。2021年12月にもオンラインとオフライン一緒にイベントを開催したのですが、その時には久々ということもあって、色々足りていませんでした。

今回はその前回の反省を踏まえて取り組んだので、その知見を共有します。

## アーキテクチャ

今回、全体としてのアーキテクチャは次のようになっています。

![](/images/articles/hybrid-architecture.jpeg)

各デバイスは次のように使われています。

### 会議室用スピーカー

会議室用スピーカーとして[Anker PowerConf S500](https://www.amazon.co.jp/Anker-A3305011-PowerConf-S500/dp/B08VWKFPCR)を用意しました。執筆時点で2.5万円くらいです。会議室用スピーカーがあることで、各パネリストやモデレーターの方はマイクやイヤホンの用意が不要になります。発言が混じったとしても、聞き苦しくなりません。

![](/images/articles/ankor.jpg)

参加者がコミュニケーションしている声も遠くの方で聞こえるようで、多少なりともオフラインの雰囲気がオンラインの方々に聞こえたのは良かったと思います。

Anker PowerConf S500の実力としては、10〜15名くらいの箱であれば十分に聞こえるレベルのスピーカーでした。マイクについては、遠くにいる人は少し声を張り上げた方が良さそうです。パネリストやモデレーターの声であればまったく問題なく届けられていました。[Anker PowerConf S500は2台接続も可能](https://www.ankerjapan.com/products/a3305)なので、20人規模の会場であれば2つあった方が良さそうです。

ケーブルはUSB type-A - USB type-C（3m）を利用しています。ケーブルが短いと色々苦労するので、長いものを用意しておくのがお勧めです。

### iPhone

iPhoneはWebカメラとして利用しています。ノートPCのものではカメラ性能が良くありませんし、緊急時にノートPCの向きを変更することもできません。iPhone（またはAndroid）であれば使わなくなった端末があるかと思いますので、それを利用できます。今回はiPhone 6sを使っています。

iPhone 6sはOSがiOS12までしか使えないので、その制約で使えるアプリに限りがあります。今回は[Reincubate Camo](https://reincubate.com/ja/camo/)を使っています。フリー版もあるようですが、画質などで制約があるのでPro版にするのが良いでしょう。ライフタイム（買い切り）で79.99ドルでした。

このReincubate CamoをノートPC、iPhone両方にインストールして、USBケーブルで接続します。ケーブルの取り回しが必要になるので、USB type-A - lightningケーブル（3m）を使っています。また、iPhoneは三脚を用意して、そこで固定しています。

### TV

テレビは予定外でしたが、たまたま部屋にあらかじめあったのでモニターとして利用しました。オンライン側のパネリストを映したり、画面共有を表示するのに使っています。イベントスペースにあるプロジェクターは大抵ルーメンが低く、会場を暗くする必要があります。それだと会場の様子が暗く、見づらいものになるので意外とTVは便利です。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/DevRelJP?src=hash&amp;ref_src=twsrc%5Etfw">#DevRelJP</a> <a href="https://twitter.com/hashtag/DevRel?src=hash&amp;ref_src=twsrc%5Etfw">#DevRel</a> はじまりー。久々のハイブリッド開催！ <a href="https://t.co/FjodVEtOSh">pic.twitter.com/FjodVEtOSh</a></p>&mdash; Atsushi 🇯🇵 DevRel Meetup in 🗼 4/6 (@goofmint) <a href="https://twitter.com/goofmint/status/1511649429522386950?ref_src=twsrc%5Etfw">April 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

なお、TVに付属していた細いHDMIケーブル（3mくらい）の調子が悪く、短いものにせざるを得ませんでした。HDMIケーブルだけでも用意しておけば良かったと後悔しています。

### USBハブ

配信用PCがMacBook Airだったこともあって、接続するUSBデバイスのポートが不足しがちです。USBハブを持っているのですが、久々に使ってみたら調子がとても悪く、接続が瞬断する状態でした…。定期的な確認が必要ですね。

### その他

その他用意していたものです。

#### パネリスト同士の飛沫感染を防止するフィルム

![](/images/articles/film.jpg)

会場ではソファーを使う想定をしていたので、そのソファーの上にかけられる感染防止フィルムを用意しました。購入したのは[飛沫ブロッカー側面用タイプ](https://www.amazon.co.jp/gp/product/B0897KVTXV/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1)です。価格は1万円弱になります。これは片足タイプなので、土台をソファーの下に滑り込ませることで、見た目に邪魔にならないように配置できます。


## 進行

今回の進行はすべてモデレーターでもある[Taiji Eddie Hagino (@taiponrock)](https://twitter.com/taiponrock)さんにお任せとなっています。HDMIケーブルの問題、USBハブの問題があって、たいじさんのPCから画面共有、音声共有を行っています。

実際のイベント中は、こんな感じです。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/DevRelJP?src=hash&amp;ref_src=twsrc%5Etfw">#DevRelJP</a> <a href="https://twitter.com/hashtag/DevRel?src=hash&amp;ref_src=twsrc%5Etfw">#DevRel</a><br><br>会場からはこんな感じ。リアル感ありますね。 <a href="https://t.co/DBFHK6wv9O">pic.twitter.com/DBFHK6wv9O</a></p>&mdash; Shotaro Suzuki (@shosuz) <a href="https://twitter.com/shosuz/status/1511655855057354752?ref_src=twsrc%5Etfw">April 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

今から思ってみると、名刺を忘れていました。ちゃんと持っている方も多くて、素晴らしいなと思います。

## 結果

ツイートは200超（速報値）なので、オンラインだけでイベントをやるよりも比較的伸びたのではないかと思っています。たいじさんからは運営している感があったという意見もあり、確かにそう感じます。オフラインで会場を準備したり、挨拶したりといった体験はオンラインではなかなか得づらいものだなと。

他の人に紹介されて一緒に来たという方もいました。これもオンラインだけでイベントをやっていると、なかなか生まれづらかったものです。オンラインは拡大という意味においては有効ですが、コミュニケーション深度はオフラインには敵わないかと思います。そういった意味で、オンラインとオフラインのハイブリッド開催は両方の良いところ取りができるのでお勧めです。

## Tips

以下はハイブリッド開催にあたってのTipsです。

### 会場について

コロナ禍になって、オフィスを縮小したりリモートワークを強化している企業が増えています。かつてはイベント会場を貸してくれる企業が多数ありましたが、コロナ禍になって利用が難しくなっています。担当者の負担が大きいですし、万一感染が広がる原因になってしまった時のリスクは大きいでしょう。

WeWorkのようなコワーキングスペースを借りている方であればそういった場所を使うこともできます。私の場合はSpaceMarketで探して利用しています。この時大事なのは、単なる会議室ではなく、少しでも非日常が感じられるような空間を選ぶことです。

### オンライン側のファシリテーション

ハイブリッド開催になると、オフラインはもちろんのことオンライン側でもファシリテーターが必要です。運営メンバーも全員オフラインに集まるのではなく、オンライン側の担当者が必要です。

オンライン側の担当者は、以下を担当します。

- 万一のネットワーク問題が発生した際のつなぎ
- イベント後の懇親会

今回、一時的にネットワーク障害が発生し、パネルディスカッションが数分途絶えてしまいました。こうした不測の事態が発生した際に、オンライン会場側の場をつなぐのが役割です。オンラインにいる人たちは、リアルの会場でどういったトラブルが起こっているのか分かりません。何も分からないまま数分放置されるのは苦痛です。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">カメラ高かったのにー！！(´Д` )←外出していない<br>とりあえず配信トラブルを救ってみましたd(´Д` )♪<a href="https://twitter.com/hashtag/DevReljp?src=hash&amp;ref_src=twsrc%5Etfw">#DevReljp</a> <a href="https://twitter.com/hashtag/DevRel?src=hash&amp;ref_src=twsrc%5Etfw">#DevRel</a> <a href="https://t.co/xGlWCLSq57">https://t.co/xGlWCLSq57</a></p>&mdash; odasho@5/25-26 Microsoft Build!! (@MS_odasho) <a href="https://twitter.com/MS_odasho/status/1511673302858997772?ref_src=twsrc%5Etfw">April 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

オンライン側の担当者は、現地のスタッフと連絡を取りつつ、場をつなぐのが大事な役割になります。

イベント後の懇親会についても大事です。試行錯誤しましたが、懇親会をハイブリッドで盛り上げるのはとても難しいです。そこで、今回はパネルディスカッションが終わったらリアル会場とオンライン側で分断し、コミュニケーションタイムとしました。

リアルで会っている場合は、参加者同士で勝手に話し始められるのですが、オンラインではなかなかうまくいかないものです。そうした時にコミュニケーションを促したり、場を盛り上げるのはオンライン側の担当者になります。

## まとめ

今回はパネルディスカッションでしたが、次回はセッション形式を予定しています。感染状況次第ですが、またハイブリッドでの開催を予定しています。セッション方式ではまた違った方式が最適になると思いますので、色々と試行錯誤してみたいと思います。

DevRel Meetup in Tokyoではそうしたトライ&エラーを通して、自社イベントに活かせる学びを得ています。ぜひご参加ください！

[DevRel Meetup in Tokyo - connpass](https://devrel.connpass.com/)
