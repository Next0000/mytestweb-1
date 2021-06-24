//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const logo = document.getElementById('title');
  logo.classList.add('move');

//ふわっと
var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);




}
