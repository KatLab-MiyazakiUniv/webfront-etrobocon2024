# Getting Started with Create React App

## ```react-app```以下のプロジェクトのファイルを追加・変更するにあたって使用したツール。
- Node.js 21.6.2
- npm 10.2.4

## yarnを使っている人へ
```docker-compose.yml```では、```npm run start```をしているので、その部分を```yarn start```に変更すれば良いはずです。

## 開発時の注意点
- ```./app```をコンテナにマウントしているので、```npm install```や```yarn add```等は、```app/react-app/```で実行しよう！

### ディレクトリ構成（ざっくり）
- src/
  - App.css: アプリケーション全体のスタイルを定義したCSS
  - App.tsx: アプリケーションのメインコンポーネント
  - index.css: グローバルスタイルを定義したCSS
  - index.tsx: アプリケーションのエントリーポイント
  - components/
    - ChartOptions.ts: グラフのオプション設定に関するファイル
    - ChartSelector.tsx: グラフの種類選択に関するコンポーネント
    - ChartSelector.css: ChartSelectorのスタイルを定義したCSS
    - DataFetcher.ts: APIからのデータ取得に関するファイル
    - LatestSelector.tsx: データ選択に関するコンポーネント
    - LatestSelector.tsx: LatestSelectorのスタイルを定義したCSS
    - RunLogChart.tsx: 走行ログのグラフ表示に関するメインコンポーネント
    - types.ts: 型定義ファイル
- .env バックエンドのURL設定用のファイル
