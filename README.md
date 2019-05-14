# react-coreui

## 参考URL

- [CoreUI GitHub](https://github.com/coreui/coreui-free-react-admin-template)
- [CoreUI for React 公式ページ](https://coreui.io/react/)
- [Live preview](https://coreui.io/react/demo/#/dashboard)


## Command

```
$ npm start
$ npm run duild
```

## What's included
```
CoreUI-React#v2.0.0
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html temlpate
│
├── src/             #project root
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

## memo

- /src/containers/DefaultLayout/DefaultLayout.js
- /src/_nav.js
- /src/routes.js

new menu  => (Home )


## Branch

|ブランチ名|issue|
|-|-|
|master|最小限のコンテンツ|
|coreui|オリジナル|
|test0|nari19ディレクトリ作成/headerコメントアウト/menuコメントアウト(_nav.js)/リダイレクトをnari19に変換(DefaultLayout.js L71)|
|test1|MDediter, MemoPrint 作成|
|test2|_nav.js,routes.js メニューを最小限に減らす|
|test3|DefaultHeader整理|
|test4|"Memo print"記述 logic.js 作成|
|test5|MemlPrint.js 記述2|