window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function if no audio found
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
  });

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('transitionend', function() {
      this.classList.remove('playing');
    });
  });