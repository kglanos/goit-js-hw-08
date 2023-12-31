import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

const saveTimeToLocalStorage = throttle(function(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000); 

player.on('play', function() {
    console.log('Play video!');
});

player.on('pause', function() {
    console.log('Pause video!');
});

player.on('loaded', async () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        await player.setCurrentTime(parseFloat(savedTime));
        console.log('Automatyczny zapis - oglądaj dalej!');
    }
});

player.on('timeupdate', function(data) {
    saveTimeToLocalStorage(data.seconds);
});

player.ready()