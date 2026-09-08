// Workaround: SEB pastes into Ace's hidden input without firing the DOM input event.
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
        setTimeout(() => {
            const input = editor.textInput.getElement();
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }, 10);
    }
}, true);
