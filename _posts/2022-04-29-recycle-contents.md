---
layout: post
title: 認知特性に合わせたコンテンツの作り方・使い方
date:   2022-04-29 00:00:00
catch: ear-eye-text.png
image: /images/articles/ear-eye-text.png
categories:
- コンテンツ
author: moongift
---

先日こんなツイートを見かけました。ヒデさんはStripeのデベロッパーアドボケイトです。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">認知特性はDevRelのコンテンツ配信チャンネルどこにするかでも考えないとよなーとたまに思う。<br>ブログだけだと視覚と聴覚の人がしんどいかもって <a href="https://t.co/43o4NbXqpG">https://t.co/43o4NbXqpG</a></p>&mdash; hide@Stripe Developer Advocate 🐈🐈🦓🥑 (@hide__dev) <a href="https://twitter.com/hide__dev/status/1517900873065984000?ref_src=twsrc%5Etfw">April 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

簡単に言えば、人の認知特性は次の3つに分かれます。そして、それぞれ得意とする情報処理領域があります。

<table class="table">
  <thead>
    <tr>
      <th>分類</th>
      <th>得意とする領域</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>視覚優位</td>
      <td>動画、ビジュアライズ、プレゼンテーション</td>
    </tr>
    <tr>
      <td>言語優位</td>
      <td>ブログ、ドキュメント、メーリングリスト</td>
    </tr>
    <tr>
      <td>聴覚優位</td>
      <td>ポッドキャスティング</td>
    </tr>
  </tbody>
</table>

それぞれ得意とする領域が異なるので、各領域に対して情報発信する必要があるよね、という話です。

これだけ考えると、YouTubeに流せば良いとかブログ記事を書けば良いのかという各論の話になってしまうので、注意してください。皆さんの開発者が、この3つの領域のいずれかにいるのではなく、すべての領域に存在することに気付いてください。さらに言えば、視覚100%で他は0%に得意領域が割り振られている訳ではありません。多くの人は、どちらかと言えば視覚が好き…といった程度です。

たとえばSORACOMのMAXさんはこうツイートしています。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">YouTubeの15分コンテンツって、テキストにすると2〜3分で読み切れる内容なのは、なぜなんだぜ。しかも検索できないから、知りたいことを得るために全部見る必要があるし、7割位の確率でハズレだったりする。つらい。</p>&mdash; 松下享平(Max)/ソラコム (@ma2shita) <a href="https://twitter.com/ma2shita/status/1517156968213118976?ref_src=twsrc%5Etfw">April 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

実際、動画は冗長的だったり、検索が弱かったりするという難点があります。各領域ごとにPro/Conをまとめるとこんな感じでしょうか。

<table class="table">
  <thead>
    <tr>
      <th>分類</th>
      <th>メリット</th>
      <th>デメリット</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>視覚優位</td>
      <td>全体の操作などが分かりやすい。話し言葉で理解しやすい。</td>
      <td>検索しづらい。ブックマークしづらい。TVなどのコンテンツと比べると面白くない。</td>
    </tr>
    <tr>
      <td>言語優位</td>
      <td>検索容易性。ブックマークできる。コピペできる。</td>
      <td>テキストだけでは分かりづらいことがある。長文はそれだけで嫌がられる。</td>
    </tr>
    <tr>
      <td>聴覚優位</td>
      <td>耳だけで良い。仕事をしながら、移動しながら聞ける。</td>
      <td>ブックマークしづらい。検索しづらい。</td>
    </tr>
  </tbody>
</table>

いずれの場合においても、個人が自分にとって理解しやすい方法を選ぶのと同時に、メリットやデメリットが存在します。作り手側を考えると、言語 > 視覚 > 視覚くらいの順番で作成に時間がかかるかも知れません。

## 大事なのは組み合わせと再利用

そこで考えなければいけないポイントが2つあります。

1. 組み合わせ
2. 再利用

### 組み合わせ

組み合わせは各要素を単独で使うのではなく、補助し合う存在として使うことです。

例えばプレゼン動画を作成したとします。それだけ見れば、視覚優位なコンテンツです。その話している内容をすべてテキスト起こしして、ブログ記事にします。こうすることで、言語優位なコンテンツになります。さらに、ブログ記事から喋っている部分に飛べるリンクを用意したり、埋め込み動画も使います。こうすることで、テキストから気になった部分を即座に再生して、内容を確認できます。

### 再利用

1つのコンテンツを視覚・言語・聴覚領域のいずれかに全振りするのではなく、積極的に使い回しましょう。イベントの動画をテキスト起こししてブログで紹介したり、プレゼンテーション動画で使ったスライドを共有サイトにアップロードする、投稿したブログ記事の補足説明をポッドキャスティングで行うと言った具合です。

普段ブログ記事は書いているのに、動画コンテンツを作ろうと思ったら一から企画を考えるというのはよくある間違いです。すでに種（ブログ記事）はあるので、それを再利用する方が継続性が見込めます。考える負担も少なくて済みます。コンテンツの重複を恐れるかも知れませんが、そもそも届く範囲が異なるので問題ありません。テキストが好きな人にはブログ記事、動画を好む人にはYouTubeで届ければ良いだけです。

## 他の特性

今回は認知特性だけに注目しましたが、他にも領域が異なる話題はよくあります。例えばTwitter派とFacebook派、チャット派とメール派、日本語と英語などです。それぞれ棲み分けがあるので、幅広く情報を配信する必要があります。

とはいえ、各領域ごとに一からコンテンツを作るのは労力がかかりすぎるのでお勧めしません。ツールを使って複数プラットフォーム向けに配信したり、テキスト起こしや翻訳を自動化するなどして、なるべく低コストで届けられる領域を増やしましょう。

---

結論としては、人によって認知特性が異なるので、それぞれに向けてコンテンツを配信するようにしましょう。ツールは増えているので、領域を増やすのに必要なコストはぐっと下がっているはずです。

後は作成したコンテンツを1つの領域だけに提供するのは勿体ないので、なるべく使い回すようにしましょう。

MOONGIFTではブログの執筆や動画作成など、コンテンツ作成に関するサポートを行っています。ぜひ[お問い合わせください](/contact)！
