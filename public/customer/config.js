// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "NaNa❼🐾",
    "sidebarTitle": "　color sing",
    "footerText": "",
    "footerSubText": "",
    "footerNote": "",
    "pageTitle": "NaNa❼🐾 - 特典管理",
    "loadingEmoji": "🐾",
    "loadingText": "Loading...",
    "showHeader": true,
    "showTitle": true,
    "titleStyle": "glass",
    "titleGradient": true,
    "titleGradientDirection": "to-r",
    "titleGlow": true,
    "titlePosition": "center",
    "titleSize": "large",
    "titleTextFill": "default",
    "titleGlassBg": 0.35,
    "titleGlassBlur": 12,
    "titlePaddingY": 12,
    "headerOverlayOpacity": 0.3,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0
  },
  "colors": {
    "deepBlue": "#FFF0F5",
    "oceanTeal": "#E8D5E0",
    "lightBlue": "#89CFF0",
    "amber": "#F4A7BB",
    "accent": "#FF69B4",
    "gold": "#FFD700",
    "brightness": "light"
  },
  "colorOverrides": {
    "headerGradientStart": "#FFB6C1",
    "headerGradientEnd": "#89CFF0",
    "titleGradientStart": "#FF69B4",
    "titleGradientMid": "#DDA0DD",
    "titleGradientEnd": "#89CFF0",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#FF69B4",
    "accentText": "#4A90D9",
    "rank1Card": "#FFB6C1",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "",
    "footerText": "",
    "contentText": "",
    "titleColor": "",
    "subText": "",
    "popupOverlayColor": "",
    "popupOverlayOpacity": "",
    "menuCardLabelColor": "",
    "menuCardLabelOpacity": "",
    "glassBgColor": "",
    "glassBgOpacity": ""
  },
  "fonts": {
    "display": "'Zen Maru Gothic', serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap",
    "body": "'M PLUS Rounded 1c', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=M+PLUS+Rounded+1c:wght@400;500;700&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {"id": "home", "label": "Home", "icon": "🏠", "enabled": true},
    {"id": "menu", "label": "特典内容", "icon": "🐾", "enabled": true},
    {"id": "rights", "label": "特典権利者", "icon": "🐕", "enabled": true, "title": "特典権利者一覧"},
    {"id": "icons", "label": "枠内アイコン", "icon": "🖼️", "enabled": true, "title": "枠内アイコン"},
    {"id": "events", "label": "イベント", "icon": "📅", "enabled": false}
  ],
  "benefitTiers": [
    {"key": "1k", "label": "チワワ", "icon": "🐶", "columnIndex": 0, "displayTemplate": "済", "isBoolean": true, "showUsers": false, "showHistory": false},
    {"key": "3k", "label": "パピヨン", "icon": "🦋", "columnIndex": 1, "displayTemplate": "済", "isBoolean": true, "showUsers": false, "showHistory": false},
    {"key": "5k", "label": "柴犬", "icon": "🐕", "columnIndex": 2, "displayTemplate": "強制リクエスト: {value}曲", "showUsers": false, "showHistory": false},
    {"key": "10k", "label": "シベリアン・ハスキー", "icon": "🐺", "columnIndex": 3, "displayTemplate": "済", "isBoolean": true, "showUsers": true, "showHistory": false},
    {"key": "20k", "label": "ドーベルマン", "icon": "🦮", "columnIndex": 4, "displayTemplate": "済", "isBoolean": true, "showUsers": true, "showHistory": true},
    {"key": "30k", "label": "土佐犬", "icon": "🏆", "columnIndex": 5, "displayTemplate": "済", "isBoolean": true, "showUsers": true, "showHistory": true}
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "targetsTitle": "Targets",
    "targetLabels": ["今旬の目標", "今月の目標"],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": []
    }
  },
  "menu": {"title": "特典内容"},
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
    "token": ""
  },
  "admin": {
    "password": "nana7gm",
    "developerKey": "CSadmin"
  }
}
