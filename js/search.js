function highlightSearchTerm() {
    removeHighlights(); // Ensure old highlights are cleared

    var elements = document.body.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName === 'SCRIPT' || elements[i].tagName === 'STYLE') continue;

        for (var j = 0; j < elements[i].childNodes.length; j++) {
            var node = elements[i].childNodes[j];

            if (node.nodeType === 3) { // Text node
                var text = node.nodeValue.trim();
                if (text.length > 0) {
                    // Wrap every word in a <span> for testing
                    var words = text.split(/\s+/);
                    var newHTML = words.map(word => `<span class="highlight">${word}</span>`).join(' ');

                    var newSpan = document.createElement('span');
                    newSpan.innerHTML = newHTML;

                    elements[i].replaceChild(newSpan, node);
                }
            }
        }
    }
}

// Function to remove existing highlights before applying new ones
function removeHighlights() {
    var highlighted = document.querySelectorAll('.highlight');
    highlighted.forEach(span => {
        span.replaceWith(document.createTextNode(span.textContent));
    });
}
