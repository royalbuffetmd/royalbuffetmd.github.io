function highlightSearchTerm() {
    // Get the search term from the input field
    var searchTerm = document.getElementById('search-input').value.trim();

    // Exit the function if the search term is empty
    if (searchTerm === '') return;

    // Create a regular expression to search for the term
    var regExp = new RegExp(`(${searchTerm})`, 'gi');
    
    // Get all elements in the document
    var elements = document.body.getElementsByTagName('*');

    // Loop through all elements
    for (var i = 0; i < elements.length; i++) {
        // Skip script and style elements
        if (elements[i].tagName === 'SCRIPT' || elements[i].tagName === 'STYLE') continue;

        // Loop through all child nodes of each element
        for (var j = 0; j < elements[i].childNodes.length; j++) {
            var node = elements[i].childNodes[j];

            // Check if the node is a text node
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var newText = text.replace(regExp, '<span class="highlight">$1</span>');

                // If there was a match, replace the text node with the highlighted version
                if (newText !== text) {
                    var newNode = document.createElement('span');
                    newNode.innerHTML = newText;
                    elements[i].replaceChild(newNode, node);
                }
            }
        }
    }
}