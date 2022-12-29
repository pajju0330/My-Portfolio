const work  = document.getElementById('work');
const award  = document.getElementById('award');
const about  = document.getElementById('about');
const contact  = document.getElementById('contact');
const toggler = document.getElementById('toggler');
const menuIcons = document.getElementsByClassName('nav-link');
let arr = [work,award,about,contact];
// arr.push(work);
for(let i = 0; i < arr.length; ++i){
    arr[i].onmouseenter = () => {
        for(let j = 0; j < arr.length; ++j){
            if(i != j){
                arr[j].style.opacity = '0.2';
            }
        }
    }
}
for(let i = 0; i < arr.length; ++i){
    arr[i].onmouseleave = () => {
        for(let j = 0; j < arr.length; ++j){
            if(i != j){
                arr[j].style.opacity = '1';
            }
        }
    }
}
let flag = 1;
toggler.onclick = () =>{
    console.log('hello');
    for(let i = 0; i < menuIcons.length; ++i){
        if(menuIcons[i].style.display === 'none'){
            menuIcons[i].style.display = 'inline';
        }
        else{
            menuIcons[i].style.display = 'none';
        }
    }
}