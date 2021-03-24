---
layout: post
title:  DevRelにおける大規模イベントの種類と目的
date:   2019-05-17 00:00:00
catch: event2.jpg
categories:
- イベント
author: moongift
---


イベントは幾つかの分類が可能です。まず自社イベントがあります。有名なところではBuildであったりde:code、AWS Summitなどがあります。もちろん、そこまで大規模でなくとも構いません。また、自社サービス名を冠しながらも、ユーザ主導の場合もあります。例えばJAWS DAYSであったり、Backlog Worldなどが有名です。

別な見方として、特定の技術に関するイベントもあります。ユーザ主導であれば、RubyKaigiやPyCon、try! Swift、Android Bazaar and Conferenceなど様々なイベントがあります。特定技術ながらも企業が率先してイベントを開催するものもあります。アドテック東京、CloudNative Days、Developers Summitなどはよく知られたイベントです。

![](/images/articles/event-pattern.png)

今回はこの4つのパターンについて、それぞれの特徴を紹介します。

## 自社サービス × 自社開催

自社サービスに関するイベントを自社主導で開催するものです。登壇者は特定技術についての識者であったり、ユーザの中から声をかけて登壇依頼します。有名なところでは以下のようなイベントが知られています。

- [WWDC](https://developer.apple.com/wwdc19/)（Apple）
- [Google I/O](https://events.google.com/io/)（Google）
- [F8](https://www.f8.com/)（Facebook）
- [GitHub Universe](https://githubuniverse.com/)（GitHub）
- [de:code](https://www.microsoft.com/ja-jp/events/decode/2019/default.aspx)（Microsoft）
- [SORACOM Conference Discovery](https://www.discovery2019.soracom.jp/)（SORACOM）
- [Microsoft Build](https://www.microsoft.com/en-us/build)（Microsoft）
- [AWS Summit Tokyo](https://aws.amazon.com/jp/summits/tokyo-2019/)（AWS）
- [LINE DEVELOPER DAY](https://linedevday.linecorp.com/jp/2018/)（LINE）

小さいイベントもありますが、自社イベントを開く規模になると、それなりの大きさ（数百人〜数千人）のものが多くなります。自社だけで行う場合もありますが、パートナーを中心に協賛企業を集める場合も多いです。

イベントの目的としては、自社および自社サービスのプレゼンスを高めることになるでしょう。規模が大きければメディアへの露出が増えたり、ソーシャルメディアでの拡散も行われます。参加者も年に一回しかないチャンスとあれば、全国（または世界中）から集まります。一種のお祭りとして、楽しめます。

イベントの洗練度によって、ロイヤリティを高めるのにも繋がります。普段の勉強会などでは現状をベースに話をしますが、カンファレンスでは未来に出すであろう機能についても発表されます。それらが開発者の期待に応える、またはさらに一歩先行くものであれば開発者が安心してそのサービスを使い続ける気持ちを新たにできるでしょう。

## 自社サービス × ユーザ開催

ユーザ（コミュニティ）主導で行われるイベントです。コミュニティとしては一つの目指すべき形ではないかと思います。自社サービスながら、そのイベント運営には関われないので、よほど熱量がなければ成功はもちろんのこと、開催したいと考えることもないでしょう。

- [JAWS DAYS](https://jawsdays2019.jaws-ug.jp/)（AWS）
- [Backlog World](https://backlog.com/ja/backlog-world/)（Backlog）
- [JP_Stripes Connect](https://connect2019.jpstripes.com/)（Stripe）
- [MTDDC Meetup TOKYO](http://mtddc2018.mt-tokyo.net/)（Movable Type）

ユーザ主導になるので、目的としてはユーザ同士が盛り上がりたい、コミュニケーションしたいというのが主になるでしょう。カンファレンスではその時最も熱い人が委員長になりますが、最も負担が大きいために燃え尽き症候群になる可能性があります。それが良い循環に繋がる場合もありますが、次の主導者を探しておかないと活動が鈍くなる可能性もあります。

## 特定技術 × 自社開催

特定の技術にフォーカスしながらも、特定の企業が主導するイベントです。メリットは開催頻度や規模がコントロールしやすく、かつ技術トレンドに惹かれて集客を行える点にあります。

- [アドテック東京](http://adtech-tokyo.com/ja/)
- [CloudNative Days](https://cloudnativedays.jp/)
- [Developers Summit](https://event.shoeisha.jp/devsumi)
- [THE AI](https://ledge.ai/the-ai-2018/)
- [API the Docs](https://apithedocs.org/)

この場合、自社のプレゼンスをどこに出すかは大きな問題です。あまり前面に出すと、商業イベントと見られてしまいます。あくまでも技術的には中立である点を重視してイベントを行う必要があります。しかし、中立を出し過ぎるとイベントは有名になっても自社や自社プロダクトが知られないと言った問題になったり、コンペティターがスポンサーになって鳶が油揚げをかっさらうような事態になったりします。

## 特定技術 × ユーザ開催

これはいわゆるコミュニティ主催の開発者イベントです。非常に多くのイベントがあり、枚挙にいとまがありません。

- [RubyKaigi](https://rubykaigi.org/2019)
- [PyCon JP](https://pycon.jp/2018/)
- [try! Swift](https://www.tryswift.co/events/2019/tokyo/jp/)
- [builderscon](https://builderscon.io/)
- [Android Bazaar and Conference](https://abc.android-group.jp/)
- [DroidKaigi](https://droidkaigi.jp/)
- [iOSDC Japan](https://iosdc.jp/)

開発者コミュニティが母体として存在し、その中の人たちが自分たちの熱量で開催するのがコミュニティ主催のイベントです。多くの場合、プログラミング言語ごとに行われますが、React ConfやSeleniumConfのようにソフトウェアやフレームワークがターゲットになることもあります。その意味ではconnpassやDoorkeeperで開催されている多くのコミュニティがカンファレンスや大規模イベントを実施する対象になりえるということでしょう。

## まとめ

大規模なイベントを行うのは大変な労力がかかります。企業主体であれば、担当者は仕事として行うことができます。また、予算も会社から割り当てられており、その範囲で実施可能です。ユーザ開催の場合は、製品やサービスに対する熱量がなければ、とても開催に至れないでしょう。

MOONGIFTではイベントの開催、開発者コミュニティの育成を承っています。大規模イベントが開けるレベルの開発者コミュニティを育て上げたい、自社開催できちんとしたイベントを実施したいなど、様々なニーズに対応します。まずは[お気軽にお問い合わせください](/contact)。
