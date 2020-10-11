function save_options() {
    let quotes = document.getElementById('quotes').value.replace(/^\s*[\r\n]/gm, '');
    chrome.storage.sync.set({
        quotes: quotes
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        quotes: 'This is a custom quote that can be configured on the extension options page|Author',
    }, function(items) {
        document.getElementById('quotes').value = items.quotes;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
