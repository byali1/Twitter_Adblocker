
//Latest update: 23.10.23

const targetClass = 'css-1dbjc4n r-18u37iz';

function processTweetElement(element) {
    const spanElements = element.querySelectorAll('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');

    spanElements.forEach(spanElement => {
        if (spanElement.textContent === 'Ad') {
            let currentElement = element;

            while (currentElement) {
                if (currentElement.className === targetClass) {
                    currentElement.remove();
                    break;
                }

                currentElement = currentElement.parentElement;
            }
        }
    });
}

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        
        
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const elements = node.getElementsByClassName(targetClass);
                for (let i = 0; i < elements.length; i++) {
                    processTweetElement(elements[i]);
                }
            }
        });
    });
});

const config = { childList: true, subtree: true };

const targetNode = document.body; 
observer.observe(targetNode, config);
