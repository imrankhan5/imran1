var fruits = ['apple', 'orange', 'mango', 'pine apple', 'jack fruits'];
var imran = document.getElementById('imran');
var text = "<h1>imran world from  js. I live in feni. I am a web developer</h1><p>this is paragraph</p>";

text += '<p>this pargraph from anoter assigning</p>';

text += '<ul>';

for (var n = 0; n < fruits.length; n++ ) {
    text += '<li>' + fruits[n] + '</li>';
}



text += '</ul>';

imran.innerHTML = text;