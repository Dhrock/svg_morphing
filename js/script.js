/*--------------------------------
Snap.svg　アニメーション
--------------------------------*/
// オリジナルのパス
const path = [
    'M-4.1048 112.9943c-38.73 1.43-90.85-15.54-96.83-53.97-1.81-15.84 2.44-31.72 9.24-47.33 7.5-17.22 18.1-34.13 27.09-50.34C-42.0948-78.2257-24.1948-107.9057 2.7652-112.1257c12.25-1.92 26.37 1.42 43.64 11.47 28.61 17.49 45.58 43.73 52.23 71.89 8.46 35.84.19 74.8-22.11 102.79-18.11 22.72-45.46 38.22-80.62 38.97Z',
    'M-24.58 111.96c-22.07 1.26-89.17-1.7-105.28-46.74-8.31-23.22 10.18-49.83 24.94-69.76 16.72-22.58 37.17-52.89 61.67-75.59C-18.77-102.83 9.76-117.93 42.62-110.08c21.81 5.25 42.52 16.55 58.5 32.17 17.63 17.22 29.5 39.69 30.73 65.07 1.99 45.01-31.43 79.94-55.38 95.38-40.18 28.45-83.26 29.2-101.05 29.42Z',
    'M-56.96 100.6c-11.36.47-46.64 1.47-67.69-19.39-19.52-18.99-5.23-39.63 9.73-56.61C-81.42-12.2-37.41-44.56 3.49-72.92 25.97-88.5 55.5-102.5 82.27-100.61c17.29 1.22 33.43 9.06 45.77 27.38 9.13 13.54 7.39 34.68-1.05 56.75-8.55 22.35-23.96 45.66-41.93 63.03-42.53 39.68-99.36 52.27-142.02 54.05Z',
    'M-24.58 111.96c-22.07 1.26-89.17-1.7-105.28-46.74-8.31-23.22 10.18-49.83 24.94-69.76 16.72-22.58 37.17-52.89 61.67-75.59C-18.77-102.83 9.76-117.93 42.62-110.08c21.81 5.25 42.52 16.55 58.5 32.17 17.63 17.22 29.5 39.69 30.73 65.07 1.99 45.01-31.43 79.94-55.38 95.38-40.18 28.45-83.26 29.2-101.05 29.42Z',
    'M10.75 100.67c-25.72-.56-60.3-6.15-86.13-20.53C-99.05 66.96-115.38 46.41-110.84 15.6c4.04-27.39 17.48-58.66 30.31-83.03C-66.44-94.18-45.24-105.25-15.23-99c25.56 5.33 53.06 17.68 75.92 35.33 22.87 17.65 41.1 40.61 48.13 67.12 7.99 30.14-1.97 54.22-20.64 70.88-19.73 17.61-49.18 26.92-77.43 26.34Z',
    'M49.68 100.96c-34.19 1.32-76.92-7.49-110.6-27.45-24.7-14.63-44.54-35.26-52.58-62.27C-118.89-6.93-121.57-28.75-121.85-47.78-121.63-63.41-122.88-92.35-105.51-98.4c32.84-11.42 100.9 16.38 136.13 39.08 24.69 15.91 44.13 32.96 62.09 53.07 24.39 27.32 33.78 54.07 27 74.02s-29.74 33.09-70.03 33.19Z',
    'M10.75 100.67c-25.72-.56-60.3-6.15-86.13-20.53C-99.05 66.96-115.38 46.41-110.84 15.6c4.04-27.39 17.48-58.66 30.31-83.03C-66.44-94.18-45.24-105.25-15.23-99c25.56 5.33 53.06 17.68 75.92 35.33 22.87 17.65 41.1 40.61 48.13 67.12 7.99 30.14-1.97 54.22-20.64 70.88-19.73 17.61-49.18 26.92-77.43 26.34Z']

//morphing animation

var snap = Snap("#svg-morphing");

var pa = snap.select("path");

var i = 0;
var duration = 10000; // アニメーション時間
var easing = mina.easing; // Snap.svgで定義されているイージング関数

let fadeStartTime = null; // フェードアウト開始時刻
const fadeDuration = 3000; // フェードアウト完了までの時間（ミリ秒）
let isFadingOut = false; // フェードアウトが既に始まったかどうかを管理するフラグ
let finalScale = 20; // フェードアウト後の最終スケール

const svg_path = document.getElementById("svgScale");

// window.onload = resizeSVG();
// window.addEventListener("resize", function () {
//   resizeSVG();
// });

setTimeout(AnimationSVG,500);

// スクロールイベントでフェードアウトをトリガー
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const triggerScroll = 10; // フェードアウト開始のスクロール量

    if (scrollY > triggerScroll) {
        // startFadeOut();
        // svg_path.classList.add("blur");
        // document.getElementById("mask_background").classList.add("fadeOut");
    }
});


// SVG morphing アニメーション
function AnimationSVG() {
    i++;

    if (i === path.length) {
        i = 0;
    }

    pa.animate({ path: path[i] }, duration, easing, AnimationSVG);
}

// SVG リサイズ
function resizeSVG() {
    if (isFadingOut) {
        return; // フェードアウトが既に始まっていれば何もしない
    } else {
        const svgAspect = (window.innerHeight / 720) * 2.3;
        svg_path.style.transform = `translate(50vw, 50vh) scale(${svgAspect})`;
    }

}

// カスタムイージング関数 (easeOutQuad)
function easeOutQuad() {
    return mina.easeout;
}

function updateMaskSizeAndOpacity(timestamp) {
    if (!fadeStartTime) fadeStartTime = timestamp; // 初回呼び出しで時刻を記録

    const elapsed = timestamp - fadeStartTime; // 経過時間の計算
    let scale = 2.3; // 初期のスケール

    if (elapsed <= fadeDuration) {
        // 経過時間に応じて拡大とフェードアウトを計算
        const progress = elapsed / fadeDuration; // 進捗率（0〜1）
        const easedProgress = easeOutQuad(progress); // イージング関数で進捗率を変換
        scale = 2.3 + (elapsed / fadeDuration) * (finalScale - 2.3); // 拡大
    } else {
        // フェードアウトが完了した後は最終スケールを固定
        scale = finalScale;
        return; // アニメーションを停止
    }

    const element = document.getElementById("svgScale");
    element.style.transform = `translate(50vw, 50vh) scale(${scale})`;

    // アニメーションを継続
    requestAnimationFrame(updateMaskSizeAndOpacity);
}

// フェードアウトを開始する関数
function startFadeOut() {
    if (isFadingOut) return; // フェードアウトが既に始まっていれば何もしない
    isFadingOut = true;
    requestAnimationFrame(updateMaskSizeAndOpacity);
}

/*--------------------------------
canvas
--------------------------------*/



/*--------------------------------
observer API
--------------------------------*/
const nextSection = document.querySelector(".secContainer");
const mvFixed = document.querySelector(".mv_img");

let observer_nav =new IntersectionObserver(function (entries) {
    if(entries[0].isIntersecting) {
        mvFixed.style.position = "relative";
    } else {
        // mvFixed.style.position = "fixed";
    }
},{
    threshold: 0.5
});

observer_nav.observe(nextSection);