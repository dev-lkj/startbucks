
// search 아이콘 눌렀을 떄 input focus 되게 하기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // searchEl 안에서 찾은 input

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// badge 효과
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        
    }

},300)); // loadsh 라이브러리
// .throttle(함수, 시간)