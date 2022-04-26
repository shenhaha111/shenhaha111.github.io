let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/picture1.jpg') {
      myImage.setAttribute('src', 'images/picture2.jpg');
    } else {
      myImage.setAttribute('src', 'images/picture1.jpg');
    }
}
let mybutton=document.querySelector('button');
let myheading=document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字:');
    localStorage.setItem('name', myName);
    myheading.textContent = '阿尔卑斯山欢迎您：' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = '阿尔卑斯山欢迎您：' + storedName;
  }
mybutton.onclick = function() {
    setUserName();
 }
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myheading.innerHTML = '阿尔卑斯山欢迎您：' + myName;
    }
  }