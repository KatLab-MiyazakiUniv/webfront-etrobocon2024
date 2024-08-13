#webfront-etrobocon2024
ETロボコン グラフ可視化ツールのフロントです。
バックエンドは[別のリポジトリ](https://github.com/KatLab-MiyazakiUniv/etrobocon2024-camera-system)の```src/server```にあります。

## 外観
<img width="1437" alt="et2024_webfront" src="https://github.com/user-attachments/assets/b286868d-7d97-416c-a249-fa7ed01b6a69">

## 起動方法
1. Dockerを起動する
2. このプロジェクトを以下のコマンドでクローン
```$ git clone https://github.com/KatLab-MiyazakiUniv/webfront-etrobocon2024```
3. プロジェクトの直下に移動する
```$ cd webfront-etrobocon2024```
4. dockerイメージを以下のコマンドで作成
```$ docker-compose build```
5. dockerコンテナを以下のコマンドで起動
```$ docker-compose up -d```
6. ブラウザを起動して、```http://localhost:3000```にアクセスすればサイトを確認できます。
7. 以下のコマンドでdockerコンテナの停止
```$ docker-compose down```

## 準備
上記に示したバックエンドサーバーを起動し、出力されたURLの情報を```app/react-app/.env```ファイルに記入し、dockerコンテナを再起動。
具体的には、
```REACT_APP_API_URL=http://123.4.5.6:8000```みたいな記述になるはず。
そうすれば、[バックエンド](https://github.com/KatLab-MiyazakiUniv/etrobocon2024-camera-system)からのデータフェッチが上手くいくはずです。

## 開発者に向けて
開発方法やコードの中身についての説明は```app/react-app/README.md```に書いています。
