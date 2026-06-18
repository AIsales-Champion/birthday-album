// 相册配置区：后续替换照片和文案，主要改这里即可。
const albumData = [
  {
    title: "那时的她",
    subtitle: "眼里有光，笑起来像春天。",
    folder: "01-young",
    intro: "从青涩的笑脸到旅途里的风景，那时的她明亮、自由，带着一点好奇，也带着不被生活催促的轻盈模样。",
    photos: [
      { src: "assets/photos/01-young/01.JPG", caption: "人偶旁边，她笑得很轻快。" },
      { src: "assets/photos/01-young/02.JPG", caption: "冬日山路上，她笑容很亮。" },
      { src: "assets/photos/01-young/03.JPG", caption: "冰瀑前的她，清透也勇敢。" },
      { src: "assets/photos/01-young/04.JPG", caption: "旅途人群里，她也有自己的光。" },
      { src: "assets/photos/01-young/05.jpg", caption: "湖边的风，吹亮她的笑意。" },
      { src: "assets/photos/01-young/06.jpg", caption: "回望那一刻，温柔刚刚好。" },
      { src: "assets/photos/01-young/07.jpg", caption: "林间阳光里，她笑得安静。" },
      { src: "assets/photos/01-young/08.jpg", caption: "红叶映着她，像一场小节日。" },
      { src: "assets/photos/01-young/09.JPG", caption: "山水之间，她自在又明亮。" },
      { src: "assets/photos/01-young/10.jpg", caption: "蓝裙捧花，像被春天照见。" },
      { src: "assets/photos/01-young/11.JPG", caption: "站在远方，也站在光里面。" },
      { src: "assets/photos/01-young/12.JPG", caption: "云海很远，她的心很自由。" }
    ]
  },
  {
    title: "生活里的她",
    subtitle: "她把很多普通日子，过成了让人安心的样子。",
    folder: "02-life",
    intro: "生活里的她，有认真也有松弛。山路、街角、花影和笑容，都记录着她把平常日子过得温热而好看的样子。",
    photos: [
      { src: "assets/photos/02-life/13.JPG", caption: "云海铺开，日子慢慢下来。" },
      { src: "assets/photos/02-life/14.JPG", caption: "林荫路长，生活慢慢有序。" },
      { src: "assets/photos/02-life/15.JPG", caption: "光穿过树林，安静也动人。" },
      { src: "assets/photos/02-life/16.jpg", caption: "低头一笑，是日常的温柔。" },
      { src: "assets/photos/02-life/17.jpg", caption: "红裙走过旧巷，明艳从容。" },
      { src: "assets/photos/02-life/18.jpg", caption: "花影落在身上，气质温润。" },
      { src: "assets/photos/02-life/19.JPG", caption: "台阶上的她，松弛又可爱。" },
      { src: "assets/photos/02-life/20.JPG", caption: "围巾裹着风，也裹着暖意。" },
      { src: "assets/photos/02-life/21.JPG", caption: "花前一笑，日子变得柔软。" },
      { src: "assets/photos/02-life/21-1.JPG", caption: "童话街口，她保留孩子气。" },
      { src: "assets/photos/02-life/22.JPG", caption: "红衣站定，心里很有力量。" },
      { src: "assets/photos/02-life/23.JPG", caption: "山风很大，她仍然很从容。" },
      { src: "assets/photos/02-life/24.jpg", caption: "手心一朵花，送给自在的她。" }
    ]
  },
  {
    title: "成为妈妈的她",
    subtitle: "成为妈妈以后，她多了一份柔软，也多了一份铠甲。",
    folder: "03-mother",
    intro: "后来，她身边多了一个小小的人。她依然是她自己，只是在陪伴儿子长大的路上，更多了细腻、耐心和坚定。",
    photos: [
      { src: "assets/photos/03-mother/25.JPG", caption: "怀着小小期待，依然明亮。" },
      { src: "assets/photos/03-mother/26.JPG", caption: "初见小小的他，笑得柔软。" },
      { src: "assets/photos/03-mother/27.JPG", caption: "抱着儿子时，她眼里有光。" },
      { src: "assets/photos/03-mother/28.JPG", caption: "生日布景前，拥抱很踏实。" },
      { src: "assets/photos/03-mother/29.jpg", caption: "牵着小手走，风也变温柔。" },
      { src: "assets/photos/03-mother/30.jpg", caption: "草地上的笑，是母子默契。" },
      { src: "assets/photos/03-mother/30-1.jpg", caption: "小小节日里，她陪他发光。" }
    ]
  },
  {
    title: "今天的她",
    subtitle: "今天的她，比从前更坚定，也更值得被温柔以待。",
    folder: "04-now",
    intro: "今天的她，经历过岁月，也仍然有明亮的心。愿新的一岁，她少些操心，多些自在，把喜欢的生活慢慢过出来。",
    photos: [
      { src: "assets/photos/04-now/31.jpg", caption: "秋色很浓，她站得很自在。" },
      { src: "assets/photos/04-now/32.jpg", caption: "水天之间，她安静看风景。" },
      { src: "assets/photos/04-now/33.jpg", caption: "山色辽阔，她仍有少年气。" },
      { src: "assets/photos/04-now/34.jpg", caption: "盐湖风光里，她干净明亮。" },
      { src: "assets/photos/04-now/35.jpg", caption: "陪儿子九岁，温柔在身旁。" }
    ]
  }
];

const cover = document.querySelector("#cover");
const album = document.querySelector("#album");
const chaptersRoot = document.querySelector("#chapters");
const startBtn = document.querySelector("#startBtn");
const replayBtn = document.querySelector("#replayBtn");
const autoPlayBtn = document.querySelector("#autoPlayBtn");
const autoPlayer = document.querySelector("#autoPlayer");
const autoPhoto = document.querySelector("#autoPhoto");
const autoChapter = document.querySelector("#autoChapter");
const autoCaption = document.querySelector("#autoCaption");
const autoCount = document.querySelector("#autoCount");
const autoPauseBtn = document.querySelector("#autoPauseBtn");
const autoExitBtn = document.querySelector("#autoExitBtn");
const music = document.querySelector("#bgm");
const musicToggle = document.querySelector("#musicToggle");
const musicTip = document.querySelector("#musicTip");
const audioFallback = document.querySelector("#audioFallback");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImg");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");

music.volume = 0.45;
music.muted = false;

let autoPhotos = [];
let autoIndex = 0;
let autoTimer = null;
let autoPlaying = false;
let autoPaused = false;
let musicLoadFailed = false;

function createChapter(chapter, index) {
  const section = document.createElement("section");
  section.className = "chapter reveal";

  section.innerHTML = `
    <div class="chapter-title">
      <div>
        <span class="chapter-index">第 ${index + 1} 章</span>
        <h2>${chapter.title}</h2>
      </div>
      <p>${chapter.subtitle}<br />${chapter.intro}</p>
    </div>
    <div class="photo-grid"></div>
  `;

  const grid = section.querySelector(".photo-grid");

  chapter.photos.forEach((photo, photoIndex) => {
    const figure = document.createElement("figure");
    figure.className = "photo-card reveal";
    figure.style.setProperty("--delay", `${Math.min(photoIndex * 70, 280)}ms`);

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `查看照片：${photo.caption}`);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption;
    img.loading = "lazy";

    // 如果图片暂时不存在，隐藏对应卡片，避免页面报错或出现破图。
    img.addEventListener("error", () => {
      figure.remove();
    });

    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption;

    button.appendChild(img);
    button.appendChild(caption);
    figure.appendChild(button);
    grid.appendChild(figure);

    button.addEventListener("click", () => openLightbox(photo));
  });

  return section;
}

function renderAlbum() {
  const fragment = document.createDocumentFragment();
  albumData.forEach((chapter, index) => {
    fragment.appendChild(createChapter(chapter, index));
  });
  chaptersRoot.appendChild(fragment);
  autoPhotos = getAutoPhotos();
}

function getAutoPhotos() {
  return albumData.flatMap(chapter =>
    chapter.photos.map(photo => ({
      ...photo,
      chapterTitle: chapter.title
    }))
  );
}

function observeReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

async function playMusic() {
  if (musicLoadFailed || !music.getAttribute("src")) {
    musicTip.textContent = "未找到音乐文件：请放入 assets/music/birthday.mp3。";
    updateMusicButton();
    return;
  }

  try {
    if (!music.paused) {
      hideAudioFallback();
      updateMusicButton();
      musicTip.textContent = "";
      return;
    }

    music.muted = false;
    music.volume = 0.45;
    if (music.readyState === 0) {
      music.load();
    }
    await music.play();
    hideAudioFallback();
    updateMusicButton();
    musicTip.textContent = "";
  } catch (error) {
    const missingFile = music.error && music.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;
    musicTip.textContent = missingFile
      ? "音乐文件无法播放，请确认 assets/music/birthday.mp3 存在且格式正确。"
      : "浏览器拦截了音乐播放，请再点右下角音乐按钮。";
    showAudioFallback();
    updateMusicButton();
  }
}

function updateMusicButton() {
  if (musicLoadFailed) {
    musicToggle.textContent = "无音乐";
    musicToggle.setAttribute("aria-label", "未找到音乐文件");
    return;
  }

  musicToggle.textContent = music.paused ? "静音" : "♪";
  musicToggle.setAttribute("aria-label", music.paused ? "播放音乐" : "暂停音乐");
}

function openAlbum() {
  album.classList.remove("hidden");
  requestAnimationFrame(() => {
    cover.classList.add("is-leaving");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.setTimeout(() => {
    cover.classList.add("hidden");
  }, 900);

  playMusic();
}

function replayAlbum() {
  stopAutoPlay();
  music.pause();
  music.currentTime = 0;
  updateMusicButton();
  cover.classList.remove("hidden", "is-leaving");
  album.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startAutoPlay() {
  if (!autoPhotos.length) {
    return;
  }

  if (music.paused) {
    playMusic();
  }

  autoIndex = 0;
  autoPlaying = true;
  autoPaused = false;
  autoPlayer.classList.remove("hidden");
  autoPauseBtn.textContent = "暂停播放";
  autoPlayer.scrollIntoView({ behavior: "smooth", block: "start" });
  showAutoPhoto(true);
  scheduleNextPhoto();
}

function scheduleNextPhoto() {
  clearAutoTimer();
  if (!autoPlaying || autoPaused) {
    return;
  }

  autoTimer = window.setTimeout(() => {
    autoIndex += 1;

    if (autoIndex >= autoPhotos.length) {
      finishAutoPlay();
      return;
    }

    showAutoPhoto(false);
    scheduleNextPhoto();
  }, 5000);
}

function showAutoPhoto(immediate) {
  const photo = autoPhotos[autoIndex];

  const updateContent = () => {
    autoPhoto.src = photo.src;
    autoPhoto.alt = photo.caption;
    autoChapter.textContent = photo.chapterTitle;
    autoCaption.textContent = photo.caption;
    autoCount.textContent = `${autoIndex + 1} / ${autoPhotos.length}`;
  };

  if (immediate) {
    updateContent();
    autoPhoto.classList.remove("is-fading");
    return;
  }

  autoPhoto.classList.add("is-fading");
  window.setTimeout(() => {
    updateContent();
    autoPhoto.classList.remove("is-fading");
  }, 260);
}

function toggleAutoPause() {
  if (!autoPlaying) {
    startAutoPlay();
    return;
  }

  autoPaused = !autoPaused;
  autoPauseBtn.textContent = autoPaused ? "继续播放" : "暂停播放";

  if (autoPaused) {
    clearAutoTimer();
  } else {
    scheduleNextPhoto();
  }
}

function finishAutoPlay() {
  clearAutoTimer();
  autoPlaying = false;
  autoPaused = false;
  autoPauseBtn.textContent = "暂停播放";
  autoPlayer.classList.add("hidden");
  document.querySelector("#ending").scrollIntoView({ behavior: "smooth", block: "start" });
}

function stopAutoPlay() {
  clearAutoTimer();
  autoPlaying = false;
  autoPaused = false;
  autoPlayer.classList.add("hidden");
  autoPauseBtn.textContent = "暂停播放";
}

function clearAutoTimer() {
  if (autoTimer) {
    window.clearTimeout(autoTimer);
    autoTimer = null;
  }
}

function showAudioFallback() {
  if (!audioFallback.contains(music)) {
    audioFallback.appendChild(music);
  }
  music.controls = true;
  audioFallback.classList.remove("hidden");
}

function hideAudioFallback() {
  music.controls = false;
  document.body.insertBefore(music, document.querySelector(".app"));
  audioFallback.classList.add("hidden");
}

function skipBrokenAutoPhoto() {
  if (!autoPlaying) {
    return;
  }

  autoIndex += 1;

  if (autoIndex >= autoPhotos.length) {
    finishAutoPlay();
    return;
  }

  showAutoPhoto(true);
  scheduleNextPhoto();
}

function openLightbox(photo) {
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

renderAlbum();
observeReveal();
updateMusicButton();

startBtn.addEventListener("click", openAlbum);
replayBtn.addEventListener("click", replayAlbum);
autoPlayBtn.addEventListener("click", startAutoPlay);
autoPauseBtn.addEventListener("click", toggleAutoPause);
autoExitBtn.addEventListener("click", stopAutoPlay);
autoPhoto.addEventListener("error", skipBrokenAutoPhoto);

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    playMusic();
  } else {
    music.pause();
    updateMusicButton();
  }
});

music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);
music.addEventListener("error", () => {
  musicLoadFailed = true;
  musicTip.textContent = "未找到音乐文件：请放入 assets/music/birthday.mp3。";
  updateMusicButton();
});
music.addEventListener("canplay", () => {
  musicLoadFailed = false;
  updateMusicButton();
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.classList.contains("hidden")) {
    closeLightbox();
  }
});
