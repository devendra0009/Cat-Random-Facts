let content=document.getElementById('content')
let btn=document.getElementById('fetch')
let img=document.getElementById('catImg')

btn.addEventListener('click',()=>{
    fetch('https://catfact.ninja/fact#').then(res=> res.text())
    .then(data=>{
        // console.log(data);
        let text="Fact:- "+data.slice(9,data.length-15)
        content.innerText=text
    })
})

//To fetch random images from an API
// btn.addEventListener("click", function() {
//     var XHR = new XMLHttpRequest();
    
//     XHR.onreadystatechange = function() {
//       if (XHR.readyState == 4 && XHR.status == 200) {
//         img.src = JSON.parse(XHR.responseText).file;  
//       }
//     }
//     XHR.open("GET", "https://aws.random.cat/meow");
//     XHR.send();
//   });


//For hardcoded random images
btn.addEventListener('click',()=>{
    let rand=Math.floor(Math.random()*5+1)
    img.setAttribute('src',`/images/cat${rand}.png`)
})