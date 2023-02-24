// querySelectorAll 与 getElementById  的区别，foreach函数无法对后者起作用

// 箭头函数的this指向
// const panel = document.getElementsByTagName('div')
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })  
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}