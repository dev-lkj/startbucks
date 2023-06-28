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



// FOOTER 영역 날짜 올해 날짜로 갱신하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 숫자가 나옴 2023