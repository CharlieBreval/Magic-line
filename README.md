# H1 Magic Line, a jQuery plugin for your menu?

MagicLine is a jQuery plugin that append a div to your menu, following the user's hover.

#H2 Getting started

All you need is a simple html structure :
```html
<ul>
    <li id="yourNavbar" class="active"><a href="#">First</a></li>
    <li><a href="#">Second</a></li>
    <li><a href="#">Third</a></li>
    <li><a href="#">Fourth</a></li>
    <li><a href="#">Fifth</a></li>
</ul>
```

Add this line to your css
```css
#magic-line{ width: 100px; height: 6px; position: absolute; bottom: 0px; left: 0;  background: @link-color;}
```



Then you need a recent version of jQuery and the following initialization :
```javascript
<script src="/magic-line.js'"></script>

<script>
$(document).ready(function() {
    $('#yourNavbar').magicLine();
});

</script>
```