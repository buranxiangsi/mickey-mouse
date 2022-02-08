import {string} from './css.js'



let n = 1
demo1.innerText=string.substr(0, n+'/n')
demo2.innerHTML=string.substr(0,n) 

let id =setInterval(() => {
  n+=1
  if(n>string.length){
    window.clearInterval(id)
    return
  }

  console.log(n + ':' + string.substr(0, n))
  demo1.innerText=string.substr(0, n)
  demo2.innerHTML=string.substr(0,n) 
  demo1.scrollTop = demo1.scrollHeight//滚动条总是在最新的一行
}, 100);


