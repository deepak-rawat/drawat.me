(() => {
    const cmdEl = document.getElementById('cmd');
    const cursorEl = document.getElementById('cursor');
    const outputEl = document.getElementById('output');
    const text = 'whoami';
    let i = 0;

    function type() {
        if (i < text.length) {
            cmdEl.textContent += text.charAt(i++);
            setTimeout(type, 90 + Math.random() * 80);
        } else {
            setTimeout(reveal, 450);
        }
    }

    function reveal() {
        cursorEl.remove();
        outputEl.hidden = false;
    }

    // Start after a brief pause
    setTimeout(type, 600);
})();
