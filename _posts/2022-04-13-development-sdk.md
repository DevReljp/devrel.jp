---
layout: post
title:  お前は今までに作成したSDKの数を覚えているか？
date:   2022-04-13 00:00:00
catch: sdk.jpg
image: /images/articles/sdk.jpg
categories:
- 開発
- SDK
author: moongift
---

こんなツイートをたまたま見てしまったがために…。

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="ja" dir="ltr">DevRel と SDK 開発の兼任ってめちゃくちゃ格好いいですね……😍</p>&mdash; lettenj61 (@lettenj61) <a href="https://twitter.com/lettenj61/status/1514088366928973825?ref_src=twsrc%5Etfw">April 13, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

ということで、これまでDevRelサポートを提供する中で開発してきたSDKをリストアップしてみようと思います。これは2022年4月現在です。

## [NCMB（ニフクラ mobile backend）](https://mbaas.nifcloud.com/)

NCMBは一番サービス提供の歴史が長いので、多いですね。私が開発していない[PHP SDK](https://github.com/NCMBMania/php-ncmb)もあります。公式SDKはJavaScript/Swift/Objective-C/Java（Android）/Kotlin（Android）/Unity向けがあります。足りない部分を私が開発している形です。

* [Dart & Flutter.](https://github.com/NCMBMania/ncmb-dart)
* [TypeScript & Deno](https://github.com/NCMBMania/ncmb_deno)
* [Google Apps Script](https://github.com/NCMBMania/ncmb_gas)
* [JavaScript SDK（軽量版）](https://github.com/NCMBMania/ncmb_js_light)
* [React Native](https://github.com/NCMBMania/ncmb-react-native)
* [Ruby](https://github.com/NCMBMania/ncmb-ruby-client)
* [C# & Xamarin](https://github.com/NCMBMania/ncmb_xamarin)
* [Python](https://github.com/NCMBMania/ncmb_py)
* [Java](https://github.com/NCMBMania/java-sdk)
* [Excel VBA](https://github.com/NCMBMania/ncmb-excel)

## [Customers Mail Cloud](https://smtps.jp/)

メール配信サービスです。ブログ記事執筆を提供する中で生まれたSDKです。

* [Node.js](https://github.com/goofmint/CustomersMailCloud-js)
* [Java](https://github.com/goofmint/Customers-Mail-Cloud-Java)
* [Excel VBA](https://github.com/goofmint/Customers-Mail-Cloud-VBA)
* [Ruby](https://github.com/goofmint/CustmersMailCloud-rb)
* [Python](https://github.com/goofmint/CustomersMailCloudPy)

## [Quality Forward](https://www.veriserve.co.jp/qualityforward/)

テストのクラウド管理サービスを提供しています。

* [Ruby](https://github.com/goofmint/qualityforward-rb)
* [Python](https://github.com/goofmint/qualityforward-py)
* [Node.js](https://github.com/goofmint/qualityforward-node)

## [blastengine](https://blastengine.jp/)

エンジニアフレンドリーなメール配信サービスです。最近サービス提供を開始したこともあり、今後SDK拡充予定です。

* [Java](https://github.com/blastengineMania/blastengine-java)
* [Node.js](https://github.com/blastengineMania/blastengine-node)

## なぜSDKを開発するのか

APIを提供するサービスがあったとして、それをわざわざHTTPライブラリから直接操作したいと思うでしょうか。コードがごちゃっとしますし、仕様を理解してコーディングするのは苦痛です。私ならSDKがあるサービスとないサービスの2つがあれば、SDKがあるサービスを選ぶでしょう。

ということで、開発者にとってのペインポイントを除去し、かつ選ばれる理由を提供するためにSDKを開発しています。全機能を網羅していないものも多いですが、その辺りは利用者の需要に合わせて開発しています。

後はブログ記事のネタとして使えるのが良いです。SDKを開発して、それの使い方をブログ記事にするというマッチポンプ的なことをよく行っています。

例）  
[blastengineのJava SDKを使ってメール送信を行う - Qiita](https://qiita.com/goofmint/items/b7498e17e6e3b136660d)

## 言語選定

色々な言語で開発していますが、極力そのサービス利用者が使っている言語を優先的に採用しています。サーバーサイドの場合、Java需要が強いように感じます。その後はPHP、Node.js、Python、Rubyでしょうか。

アプリ界隈であれば最近ならFlutter、ついでReact Nativeになるかなと。Xamarinはコロナ感染チェックアプリで一躍有名になったので、開発してみました。

正直得意ではない言語も多いので、その辺りはテストを書きつつググりながら実装していたりします。C#とかJavaは得意ではないですが、IDEがあるので安心ですね（それでも苦戦することが多いですが）。

## パッケージ管理への登録

RubyであればRubygems、Pythonであればpipなどが有名なパッケージ管理システムです。この辺りへの登録はもちろん行っています。

各パッケージ管理のプロフィールページです。

- [PyPI](https://pypi.org/user/goofmint/)
- [RubyGems.org](https://rubygems.org/profiles/moongift)
- [npm](https://www.npmjs.com/~moongift)
- [NuGet](https://www.nuget.org/profiles/goofmint)
- [Dart](https://pub.dev/packages/ncmb)

この辺りはインストールのしやすさはもちろん、個人のブランディングとして行っている面もあります。なお、JavaのMaven Central Repositoryはとても面倒なイメージがあって登録していません…。

## まとめ

今後はGo言語やRust辺りでも開発していきたいのと、PHPは自分の中で歴史がバージョン5で終わってしまっているので、SDK開発を通して勉強し直したいと思っています。

SDK開発はDevRelにおいて、コーディングスキルが活かせる場面だと思うので、ぜひ取り組んでみると良いでしょう。

[MOONGIFTではブログ執筆を通してSDKを開発したり、単体でSDK開発も承りますのでぜひお問い合わせください](/contact)。
