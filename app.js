const musics = document.querySelector(".musics");
let i = 1;
musics.innerHTML = `<audio src = './Music/music${i}.mp3' controls autoplay></audio>`
function plus(){
    i++;
    if(i == 7) i=1;
    musics.innerHTML = `<audio src = './Music/music${i}.mp3' controls autoplay></audio>`;
    
}
function minus(){
    i--;
    if(i == 0) i=6;
    musics.innerHTML = `<audio src = './Music/music${i}.mp3' controls autoplay></audio>`;
    
}
function stopped(){
    musics.innerHTML = `<audio src = './Music/music${i}.mp3' controls autoplay></audio>`;
    if(musics.innerHTML === `<audio src = './Music/music${i}.mp3'></audio>`) {
        musics.innerHTML = `<audio src = './Music/music${i}.mp3' controls autoplay></audio>`;
    }
    else{
        musics.innerHTML = `<audio src = './Music/music${i}.mp3'></audio>`;

    }
}
