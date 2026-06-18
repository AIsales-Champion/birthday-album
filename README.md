# 老婆生日快乐电子相册

这是一个纯静态生日电子相册网页，可以直接双击 `index.html` 本地预览，也可以部署到 GitHub Pages、Netlify 或普通静态网站空间。

## 文件结构

```text
birthday-album/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── photos/
│   │   ├── 01-young/
│   │   ├── 02-life/
│   │   ├── 03-mother/
│   │   └── 04-now/
│   ├── music/
│   │   └── birthday.mp3
│   └── cover/
│       └── cover.jpg
└── README.md
```

## 如何替换照片

把照片放进对应文件夹：

- `assets/photos/01-young/`：那时的她
- `assets/photos/02-life/`：生活里的她
- `assets/photos/03-mother/`：成为妈妈的她
- `assets/photos/04-now/`：今天的她

默认照片命名为 `001.jpg`、`002.jpg`、`003.jpg`。每章已经在 `script.js` 里预留 6 张示例照片路径。

如果想增加或减少照片，打开 `script.js`，修改 `albumData` 里的 `photos` 数组即可：

```js
{
  src: "assets/photos/01-young/001.jpg",
  caption: "那一年，她还是明亮又自由的女孩。"
}
```

如果某张图片暂时不存在，页面会自动隐藏它，不会影响其他内容显示。

## 如何替换封面

将首页封面照片命名为 `cover.jpg`，放到：

```text
assets/cover/cover.jpg
```

建议使用竖图或主体居中的横图。页面会自动添加模糊、暗角和电影感遮罩。

## 如何替换音乐

将音乐文件命名为 `birthday.mp3`，放到：

```text
assets/music/birthday.mp3
```

浏览器通常会拦截自动播放音乐，所以页面不会使用 `autoplay`。音乐会在点击“点击开启她的生日相册”后播放；如果仍被拦截，可以点击右下角音乐按钮再次播放。

当前已放入一首温柔电影感钢琴纯音乐：

- 曲名：`Touching Moments Two - Higher`
- 作者：Kevin MacLeod
- 来源：Incompetech
- 授权：Creative Commons Attribution 4.0
- 音乐文件：`assets/music/birthday.mp3`
- 下载地址：`https://incompetech.com/music/royalty-free/mp3-royaltyfree/Touching%20Moments%20Two%20-%20Higher.mp3`

如果公开部署，请保留页面结尾处的音乐署名。授权说明见：

```text
https://creativecommons.org/licenses/by/4.0/
```

## 如何修改文案

- 首页标题、副标题和按钮文字：修改 `index.html`
- 每章标题、章节说明、照片说明：修改 `script.js` 里的 `albumData`
- 结尾页生日祝福：修改 `index.html` 里的 `ending` 区域

## 如何修改颜色

打开 `style.css`，修改顶部 CSS 变量：

```css
:root {
  --bg: #fbf6ef;
  --card: rgba(255, 252, 247, 0.88);
  --text: #3c3430;
  --muted: #8c7d75;
  --accent: #c99084;
  --accent-soft: #f3ddd5;
}
```

## 如何本地预览

直接双击 `index.html` 即可预览。

如果浏览器对本地音频或图片限制较多，也可以用一个简单静态服务预览，例如在该文件夹下运行：

```bash
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

## 如何用手机预览

手机不能直接打开电脑上的 `file://` 或 `localhost` 地址。请使用下面方法：

1. 让手机和电脑连接同一个 Wi-Fi。
2. 双击 `start-mobile-preview.bat`。
3. 窗口里会显示类似这样的地址：

```text
手机访问: http://192.168.1.23:8080
```

4. 在手机浏览器里打开这个地址。
5. 预览结束后，关闭命令窗口即可停止服务。

如果手机打不开，请检查 Windows 防火墙是否拦截了 Node.js，或确认手机和电脑是否在同一个 Wi-Fi。

## 如何部署到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把 `birthday-album` 文件夹里的所有文件上传到仓库根目录。
3. 进入仓库 `Settings`。
4. 打开 `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. 分支选择 `main`，目录选择 `/root`。
7. 保存后等待 GitHub 生成访问地址。

也可以直接把整个文件夹上传到 Netlify 或普通静态网站空间。

## 注意事项

- 不依赖外部 CDN，不需要数据库，不需要后端。
- 支持手机端浏览，优先按手机体验设计。
- 音乐需要用户点击后播放，这是浏览器安全策略导致的正常现象。
- 替换照片后，如果图片比例不一致，页面会自动裁切为统一视觉比例。
