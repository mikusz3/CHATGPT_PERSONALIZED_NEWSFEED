let selectedSources = [];

function toggleSource(source) {
  const index = selectedSources.indexOf(source);
  if (index === -1) {
    selectedSources.push(source);
  } else {
    selectedSources.splice(index, 1);
  }

  // Toggle background color to indicate selection
  const sourceElement = document.querySelector(`.source:contains('${source}')`);
  sourceElement.classList.toggle('selected');
}

function getSelectedSources() {
  const articleDisplay = document.getElementById('articleDisplay');
  articleDisplay.innerHTML = ''; // Clear previous articles

  // Fetch articles from selected sources (simulated data)
  selectedSources.forEach(source => {
    const articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';

    const thumbnail = document.createElement('img');
    thumbnail.src = `placeholder_${source}.jpg`; // Replace with actual image URLs
    thumbnail.alt = `${source} thumbnail`;
    thumbnail.className = 'thumbnail';
    articleContainer.appendChild(thumbnail);

    const article = document.createElement('div');
    article.textContent = `Article from ${source}`;
    articleContainer.appendChild(article);

    articleDisplay.appendChild(articleContainer);
  });
}

// Helper function to implement :contains selector
// (not supported in native JavaScript)
// Source: https://stackoverflow.com/a/298758/8713795
;(function(){
  var contains = function(r,o){ 
    var a = r.childNodes, l = a.length, i = -1; 
    while( (i+=1) < l ) if(a[i]===o) return true; 
    return false; 
  };

  HTMLElement.prototype.contains = function(o){ return contains(this, o); };
  NodeList.prototype.contains = HTMLCollection.prototype.contains = function(o){ 
    return contains(this, o); 
  };
})();
