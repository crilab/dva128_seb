// Workaround: SEB (Windows/CEF) fails to trigger Ace's render cycle on paste until the next keypress.
editor.textInput.getElement().addEventListener('paste', (e) => {
    const text = (e.clipboardData || window.clipboardData)?.getData('text');
    if (text) {
        e.preventDefault();
        editor.insert(text);
        editor.renderer.update(true);
    }
});
