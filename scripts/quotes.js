(function () {
    chrome.storage.sync.get({
        quotes: '', // Not used because we want to capture both unconfigured and empty options situations.
    }, function (results) {
        // Defaults
        let quote = 'This is a custom quote that can be configured on the extension options page';
        let author = 'Unknown';

        let quotes = results.quotes.split(/\n/);
        let quote_chosen = quotes[Math.floor(Math.random() * quotes.length)];
        let quote_split = quote_chosen.split(/\|/);

        if (quote_split[0] !== '') {
            quote = quote_split[0];
        }
        document.getElementById('quote').textContent = quote;

        if (quote_split[1] !== undefined) {
            author = quote_split[1];
        }
        document.getElementById('author').textContent = author;
    });
})();
