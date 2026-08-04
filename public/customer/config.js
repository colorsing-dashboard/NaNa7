// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "NaNa❼🐾の犬小屋",
    "sidebarTitle": "　color sing",
    "footerText": "NaNa❼🐾の犬小屋",
    "footerSubText": "応援ギフトは保護犬活動の場へ寄付します🐾",
    "footerNote": "",
    "pageTitle": "NaNa❼🐾 - 特典管理",
    "loadingEmoji": "🐾",
    "loadingText": "Loading...",
    "showHeader": true,
    "showTitle": true,
    "titleStyle": "gradient",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": false,
    "titlePosition": "bottom-right",
    "titleSize": "large",
    "titleOffsetY": -0.12,
    "titleTextFill": "default",
    "titleGlassBg": 0.05,
    "titleGlassBlur": 3,
    "titlePaddingY": 20,
    "headerOverlayOpacity": 0.3,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0,
    "glassTint": 0.08,
    "glassReflection": 0.75,
    "glassSpecular": 0.95,
    "glassEdge": 60
  },
  "colors": {
    "deepBlue": "#F5CAD3",
    "oceanTeal": "#F5CAD3",
    "lightBlue": "#0087dd",
    "amber": "#F4A7BB",
    "accent": "#FF69B4",
    "gold": "#FFD700",
    "brightness": "light"
  },
  "colorOverrides": {
    "headerGradientStart": "",
    "headerGradientEnd": "",
    "titleGradientStart": "#FF69B4",
    "titleGradientMid": "#a3edf8",
    "titleGradientEnd": "#ff93dd",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#904AE8",
    "accentText": "#2866ff",
    "rank1Card": "#ff61a5",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "#904AE8",
    "footerText": "#f792ff",
    "contentText": "#6f36d9",
    "titleColor": "#fcb5d5",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": 0.9,
    "menuCardLabelColor": "#FFB6C1",
    "menuCardLabelOpacity": "",
    "tierCardBgColor": "#FFFFFF",
    "tierCardBgOpacity": 0.9,
    "menuCardBgColor": "",
    "menuCardBgOpacity": "",
    "sidebarBgColor": "#ffffff",
    "sidebarBgOpacity": 1,
    "bottomNavBgColor": "#75d8ff",
    "bottomNavBgOpacity": 0.55,
    "glassBgColor": "#fffbfb",
    "glassBgOpacity": 0.44999999999999996
  },
  "fonts": {
    "display": "'Dancing Script', cursive",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
    "body": "'Yu Gothic Medium', 'YuGothic', sans-serif",
    "bodyUrl": "",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
  },
  "images": {
    "headerDesktop": "https://drive.google.com/file/d/1R4RJ8MMFZ1yKfHtTRPDB3mjjeK-Ze971/view?usp=drivesdk",
    "headerMobile": "https://drive.google.com/file/d/1vLmHNKf1B4x8wvu_h5VsTGyI3XYCgjqY/view?usp=drivesdk",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1yIKQpqzA4OJ7WGsyFBI28L9QeTGrV2dM9-_glgO9o5o",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "Home",
      "icon": "home",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "特典内容",
      "icon": "book-open",
      "enabled": true
    },
    {
      "id": "rights",
      "label": "特典権利者",
      "icon": "user-check",
      "enabled": true,
      "title": "特典権利者一覧"
    },
    {
      "id": "icons",
      "label": "枠内アイコン",
      "icon": "gift",
      "enabled": true,
      "title": "枠内アイコン"
    },
    {
      "id": "events",
      "label": "イベント",
      "icon": "calendar-days",
      "enabled": true
    }
  ],
  "benefitTiers": [
    {
      "key": "1k",
      "label": "チワワ",
      "icon": "🦊",
      "columnIndex": 0,
      "displayTemplate": "済",
      "isBoolean": true,
      "showUsers": false,
      "showHistory": false
    },
    {
      "key": "3k",
      "label": "パピヨン",
      "icon": "🐶",
      "columnIndex": 0,
      "displayTemplate": "済",
      "isBoolean": true,
      "showUsers": false,
      "showHistory": false
    },
    {
      "key": "10k",
      "label": "シベリアン・ハスキー",
      "icon": "🦁",
      "columnIndex": 2,
      "displayTemplate": "済",
      "isBoolean": true,
      "showUsers": true,
      "showHistory": false
    },
    {
      "key": "20k",
      "label": "ドーベルマン",
      "icon": "🐲",
      "columnIndex": 3,
      "displayTemplate": "5曲特別セトリ配信",
      "isBoolean": true,
      "showUsers": true,
      "showHistory": true
    },
    {
      "key": "5k",
      "label": "柴犬",
      "icon": "🐯",
      "columnIndex": 1,
      "displayTemplate": "呼び名",
      "showUsers": false,
      "showHistory": false,
      "isBoolean": false
    },
    {
      "key": "30k",
      "label": "土佐犬",
      "icon": "🦄",
      "columnIndex": 4,
      "displayTemplate": "済",
      "isBoolean": true,
      "showUsers": true,
      "showHistory": true
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "pointsUnit": "k",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今月の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "accordion": true,
      "title": "📝 FAQ・注意事項",
      "items": [
        {
          "question": "枠内のお願い🐾",
          "answer": "元気！楽しい！平和！な枠をみなさんと一緒に作っていきたいです🐾 他の人がいやだな〜って思うような言動はやめてぇね🐾 ただ、人それぞれの価値観があるのも当たり前なので、少しの余白を置いてくれるとうれしいです🐾 "
        },
        {
          "question": "特典の使用方法🐾",
          "answer": "収録プレゼント、特別配信は月内希望者の方へのみになります！！\n"
        }
      ]
    }
  },
  "menu": {
    "title": "特典内容"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "#FFB6C1",
    "particleSize": 0.5,
    "particleOpacity": 0.8
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "NaNa7",
    "branch": "main",
    "token": "rev:oPS7zKTvOEHLXGBXHBmOPwZ4BqrJgUwLXqCSsDzA6mJ9Vn5ipeDYGYuqca5_VtdgF2Yik9tg0IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "nana7gm",
    "developerKey": "CSadmin"
  }
}
