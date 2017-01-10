## Update

```
npm i
```

And remember to run `node compile.js` after update.

## Quick Snippets

Vanilla JS:

```html
<script>
var xhr = new XMLHttpRequest();
xhr.open('GET', '/efe-meta/html/full-intro.html', true);
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('links').insertAdjacentHTML('beforeend', xhr.responseText);
    }
};
</script>
```

jQuery:

```html
<script>
$.get('/efe-meta/html/full-intro.html').then(function (html) {
    $('#links').append(html);
});
</script>
```
