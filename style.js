let menu = document.querySelector('#menu-bars');
let hero = document.querySelector('.hero');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  hero.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

// toggleBtn.onclick = () =>{
//   themeToggler.classList.toggle('active');
// }

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  hero.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

document.getElementById("submit").addEventListener('click',(e)=>{e.preventDefault();
 var userid = "lbrM71-nZ-_Rs7oGC";
 emailjs.init(userid);
var email=document.getElementById('mail').value
var contactDetail={
  formEmail:email
  }
  emailjs.send('service_tcrfqi8','template_bi2r7od',contactDetail)
  alert("Email sent");
});

  // document.getElementById("done").addEventListener('click',(e)=>{ e.preventDefault();
  //  var userid = "lbrM71-nZ-_Rs7oGC";
  //  emailjs.init(userid);
  // var email=document.getElementById('submit').value
  // var contactDetail={
    // formEmail:email
    // }
    // emailjs.send('service_tcrfqi8','template_bi2r7od',contactDetail)
    // alert("Email sent");
// });