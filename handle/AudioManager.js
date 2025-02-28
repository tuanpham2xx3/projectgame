class AudioManager {
    constructor() {
        this.sounds = {};
    }

    loadSound(name, src) {
        const audio = new Audio(src);
        this.sounds[name] = audio;
    }

    playSound(name) {
        if (this.sounds[name]) this.sounds[name].play();
    }
    setVolume(soundName, volume) {
        if (this.sounds[soundName]) {
            this.sounds[soundName].volume = volume;
        }
    }
}