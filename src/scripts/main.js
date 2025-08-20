'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const link = e.target.closest('.wall');

  if (!link) {
    return;
  }

  const x = e.pageX - wall.offsetLeft - wall.clientLeft;
  const y = e.pageY - wall.offsetTop - wall.clientTop;
  let leftPosition = x - spider.clientWidth / 2;
  let topPosition = y - spider.clientHeight / 2;

  if (leftPosition < 0) {
    leftPosition = 0;
  }

  if (topPosition < 0) {
    topPosition = 0;
  }

  if (leftPosition > wall.clientWidth - spider.clientWidth) {
    leftPosition = wall.clientWidth - spider.clientWidth;
  }

  if (topPosition > wall.clientHeight - spider.clientHeight) {
    topPosition = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
