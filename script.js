const highlightLayer = document.getElementById('highlight-layer');

// This event fires continuously as you drag your mouse!
document.addEventListener('selectionchange', () => {
    
    // 1. Wipe out the old highlight boxes immediately
    highlightLayer.innerHTML = '';

    const selection = window.getSelection();
    
    // 2. If nothing is selected (you clicked away), stop here!
    if (!selection.rangeCount || selection.isCollapsed) return;

    // 3. Get the exact coordinates of the highlighted text
    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();

    // 4. Draw a new gradient box for every line of text you highlighted
    for (let rect of rects) {
        const box = document.createElement('div');
        box.className = 'gradient-box';
        
        // Match the coordinates of the text perfectly
        box.style.left = `${rect.left + window.scrollX}px`;
        box.style.top = `${rect.top + window.scrollY}px`;
        box.style.width = `${rect.width}px`;
        box.style.height = `${rect.height}px`;

        highlightLayer.appendChild(box);
    }
});
