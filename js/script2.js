
let path = ['M229.92,330.75c-94.26-15.77-181.51-60.78-215.27-151.3C-1.89,133.09-5.18,80.54,10.03,33.37,23.4-10.63,73.74-1.82,108.11,9.29c105.62,34.03,240.47,95.93,283.06,211.67,14.06,39.5,6.24,66.42-13.27,84.03-32.52,29.36-97.51,32.88-147.75,25.79l-.22-.03Z',
    'M208.55,343.09c-83.9-1.82-223.19-35.12-207.01-144.84,6.88-46.63,29.75-99.87,51.6-141.35C77.14,11.36,113.24-7.49,164.31,3.15c87.04,18.13,187.25,84.14,211.2,174.44,12.24,46.17-.27,83.99-26.06,111.77-33.16,35.71-88.26,54.83-140.91,53.74Z',
    'M19.83,282.06c-41.6-39.04-8.04-90.21,18.91-126.6,20.96-28.31,45.99-65.04,75.37-95.66C152.33,19.98,197.91-9.52,251.49,3.27c82.27,19.63,150.7,98.9,122.17,185.8-29.36,89.44-131.24,133.91-219.07,134.35-44.22.08-101.17-9.84-134.76-41.36Z',
    'M108.03,281.59c-31.45.2-70.27-4.88-94.56-27.09-27.56-25.19-6.55-56.96,13.59-79.09,46.84-51.46,108.35-96.68,165.42-136.24,51.69-35.83,130.06-65.65,174-.43,39.96,59.31-15.33,130.07-60.04,167.33-52.91,44.1-128.38,77.65-198.39,75.52h0Z',
    'M19.83,282.06c-41.6-39.04-8.04-90.21,18.91-126.6,20.96-28.31,45.99-65.04,75.37-95.66C152.33,19.98,197.91-9.52,251.49,3.27c82.27,19.63,150.7,98.9,122.17,185.8-29.36,89.44-131.24,133.91-219.07,134.35-44.22.08-101.17-9.84-134.76-41.36Z',
    'M208.55,343.09c-83.9-1.82-223.19-35.12-207.01-144.84,6.88-46.63,29.75-99.87,51.6-141.35C77.14,11.36,113.24-7.49,164.31,3.15c87.04,18.13,187.25,84.14,211.2,174.44,12.24,46.17-.27,83.99-26.06,111.77-33.16,35.71-88.26,54.83-140.91,53.74Z']


//morphing animation

var $svg = Snap("#svg_morphing");

console.log(path);

var $pth = $svg.select('path');

var i = 0;

var duration = 30000; // アニメーション時間
var easing = mina.easing; // Snap.svgで定義されているイージング関数

function AnimationSVG() {

    i++;

    if (i === path.length) {
        i = 0;
    }

    $pth.animate({path: path[i],fill:'#ffffff'},duration,easing,AnimationSVG);
    /*
    var bbox = $pth.getBBox();
	$svg.rect(bbox).attr({stroke: "black"});
    $svg.selectAll("rect").attr({fill:"none"});
    */
}
AnimationSVG();