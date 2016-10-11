window.onload=function(){
    var music = document.getElementById('play'),
        audio = document.getElementsByTagName('audio')[0],
        page1 = document.getElementById('page1'),
        page2 = document.getElementById('page2');
        page3 = document.getElementById('page3');

    audio.addEventListener('ended', function(e){
        audio.pause();
        music.setAttribute('class','');
    })
    music.addEventListener('touchstart',function(e){
        e.stopPropagation();
        if (audio.paused) {
        audio.play();
        this.setAttribute('class','play');
      }else {
        audio.pause();
        this.setAttribute('class','');
      }
    });
    page1.addEventListener('touchstart',function(){
        this.setAttribute('class','page fadeout ');
        page2.setAttribute('class', 'page show');
    });
    page2.addEventListener('touchstart',function(){
        this.setAttribute('class','page show fadeout ');
        page3.setAttribute('class', 'page show');
    });
}
