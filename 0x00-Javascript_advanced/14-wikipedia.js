// 14-wikipedia

function createElement(data) {
  const P = document.createElement('P');
  P.innerHTML = data;
  document.body.appendChild(P);
}

function queryWikipedia(callback) {
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.onload = () => {
    const { query } = req.response;
    Object.keys(query.pages).forEach((pageId) =>
      callback(query.pages[pageId].extract)
    );
  };
  req.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  );
  req.send();
}

queryWikipedia(createElement);
