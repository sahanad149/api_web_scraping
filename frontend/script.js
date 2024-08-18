document.getElementById('scrape-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('url-input').value;
    const response = await fetch('/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });
    const data = await response.json();
    document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});