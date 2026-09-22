# 心动便利店 — 菜单网页维护指南

## 文件说明

| 文件 | 作用 | 你需要改吗 |
|------|------|------------|
| `index.html` | 主页面（内嵌全部 CSS + JS） | 只在改视觉风格时动 |
| `data.js` | 所有菜单数据 | 日常改价/加菜/换图只动这个 |
| `README.md` | 本文件 | 不用动 |

---

## 1. 改颜色

打开 `index.html`，找到顶部 `:root` 区块（亮色模式）和 `[data-theme="dark"]`（暗色模式），修改对应变量：

```css
:root {
  --bg: #FAF5EF;            /* 底色（暖奶油）*/
  --text-primary: #2C1810;  /* 主文字（深咖棕）*/
  --text-secondary: #7A6655;/* 次要文字（暖褐灰）*/
  --accent: #C24A32;        /* 点缀色（砖红）*/
  --divider: #E8DFD3;       /* 分隔线 */
}
```

换主题色只需改 `--accent`。比如换成暖橙：`--accent: #D4772A`。

---

## 2. 改店名、标语、营业时间

打开 `data.js`，修改 `shop` 部分：

```js
shop: {
  name: '心动便利店',
  slogan: '24小时，温暖不打烊。',
  status: 'open',           // 'open' = 营业中 / 'closed' = 准备中
  hours: '00:00–24:00',
  closedDay: '全年无休'
}
```

`status` 改为 `'closed'` 时，状态点会变成空心圈、文字变为"准备中"。

---

## 3. 加商品 / 删商品 / 改价

在 `data.js` 的 `items` 数组中操作。每个商品结构如下：

```js
{
  id: 'coffee',             // 唯一ID，只用于代码识别
  name: '热美式咖啡',
  price: 12,
  desc: '现磨阿拉比卡，提神醒脑',    // 卡片上显示的短描述
  detail: '选用埃塞俄比亚与哥伦比亚拼配豆...',  // 点击后弹窗显示的长描述
  signature: true,          // true = 显示"推荐"标签
  media: [                  // 图片/视频数组，空数组 = 自动显示首字占位图
    'images/coffee-1.jpg',
    'videos/coffee-pour.mp4'
  ],
  allergens: ['乳']         // 可选，留空或不写此行
}
```

**加一个商品**：在 `items` 数组末尾加一个对象即可。`id` 不要与已有重复。
**改价格**：直接改 `price` 数字，页面自动格式化为 `¥12`。

---

## 4. 换商品图片和视频

商品支持图片和视频混放，代码根据文件后缀自动识别。

**media 数组**（图片 + 视频混放，详情页可左右滑动切换）：
```js
media: [
  'images/coffee-1.jpg',
  'videos/coffee-pour.mp4',     // 视频
  'images/coffee-2.jpg',
  'images/coffee-3.jpg'
]
```

**纯图片**：
```js
media: ['images/latte.jpg']
```

**无图无视频**（自动显示首字占位图）：
```js
media: []
```

图片建议：不低于 600×450px，格式 jpg / png / webp。  
视频建议：5-15 秒，720p/1080p，H.264 编码，单个不超过 10MB。  
具体命名对照见 `images/README.txt` 和 `videos/README.txt`。

---

## 5. 暗色模式

- 点击页脚"暗色模式"按钮切换
- 选择会保存在浏览器 `localStorage`，下次打开自动应用
- 暗色色值在 `index.html` 的 `[data-theme="dark"]` 区块修改

---

## 6. 搜索功能

页面顶部有搜索框，输入商品名或描述关键词即时筛选，不匹配的商品自动隐藏。

---

## 7. 打印纸质菜单

`Ctrl+P`（Mac: `Cmd+P`）直接打印。页面已内置打印样式：
- 隐藏搜索、页脚、纸纹
- 商品卡片避免跨页断裂
- 输出双栏纸质菜单效果

---

## 8. 上线部署

三个文件放同一目录，上传到任意静态托管（GitHub Pages / Vercel / Netlify / 阿里云 OSS / 七牛云等），直接访问 `index.html` 即可。无需服务器、无需构建。

---

## 文件关系

```
你的网站目录/
├── index.html    ← 双击即开
├── data.js       ← 改数据只动这个
├── README.md     ← 维护说明
├── images/       ← 商品图片放这里
│   ├── coffee-1.jpg
│   ├── coffee-2.jpg
│   ├── onigiri-1.jpg
│   └── ...
└── videos/       ← 商品视频放这里
    ├── coffee-pour.mp4
    ├── hotdog-cheese-pull.mp4
    └── ...
```
