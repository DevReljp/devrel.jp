---
layout: post
title: SaaS企業が本当に提供すべきだったもの
date:   2023-12-06 00:00:00
catch: 
categories:
- ブログ
author: moongift
---

今はSaaS全盛といって良いくらい、さまざまなサービスがクラウド化しています。そして、多くのサービスがAPIを提供していたり、何らかの形で開発者向けの機能を提供しています。パブリッククラウドなどは、まさにその典型でしょう。

そうしたSaaS企業においては、開発者が使ってもらうことが収益に直結します。そのため、DevRelを行うことが企業活動に直接的なメリットをもたらします。ブランディング目的などと比べると、分かりやすくDevRelの意義があると言えるでしょう。

今回はそうしたSaaS企業におけるDevRelに対して、私が思う本当に提供すべきだったものを紹介します。

## エミュレーター

SaaSを使ってサービスを開発する際に、開発者は常にAPIを呼び出さなければなりません。つまりインターネット接続が必須であり、オンラインの状態でないと開発・テストができません。もしあなたのSaaSがメンテナンスモードになったら、その間は開発がままならなくなります。

最近では、パブリッククラウドをはじめとしてローカル開発時に使えるエミュレーターを提供する企業が増えています（公式・非公式問わず）。

- [LocalStack](https://www.localstack.cloud/)  
AWSのローカルエミュレーター
- [gcloud beta emulators](https://cloud.google.com/sdk/gcloud/reference/beta/emulators)  
GCPのローカルエミュレーター（公式）
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)  
Cloudflare Workersのローカルエミュレーター（公式）

こうしたエミュレーターを提供することで、開発者はオフラインでも開発・テストができるようになります。これは開発者にとって大きなメリットです。

## オープンソース・ソフトウェア

オープンソース版があることで、開発者は必要に応じてサービスを使い分けられます。小規模なものであればオープンソース版を使い、より大規模になったときにクラウド版を採用することもあるでしょう。また、自分でマネジメントしたくないユーザーにとっては、クラウド版の方が魅力的に見えることもあります。

オープンソースを使ったビジネスについてはすでに成功例が多数あります。

- [GitLab](https://about.gitlab.com/)
- [Mattermost](https://mattermost.com/)
- [Discourse](https://www.discourse.org/)
- [WordPress](https://wordpress.org/)
- [MySQL](https://www.mysql.com/jp/)

一部、元々オープンソースだった中で論争があり、ライセンスを変更してしまったケースもあります。この辺りはオープンソース・ソフトウェアを使ったビジネスモデルの課題と言えるでしょう。

- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Elasticsearch](https://www.elastic.co/jp/)
- [RHEL](https://www.redhat.com/ja/technologies/linux-platforms/enterprise-linux)

最近では企業買収された際に、その資産をオープンソース化するケースもあります。

- [Parse Platform](https://parseplatform.org/)  
Metaの買収・サービス終了によりオープンソース化
- [Apache Cordova](https://cordova.apache.org/)（元PhoneGap）  
Adobeの買収・サービス終了によりオープンソース化
- [Etherpad](https://etherpad.org/)  
Googleの買収・サービス終了によりオープンソース化
- [Element](https://element.io/)  
GitLabの買収・サービス終了によりオープンソース化

## 開発者メリット

オープンソース・ソフトウェアやエミュレーターを使うメリットは、サービス終了（最近ではサ終と呼ばれたりします）した際のリスクを減らせるということです。また、サービス終了までいかなかったとしても、料金体系の変更や機能制限などのリスクを減らせます。

