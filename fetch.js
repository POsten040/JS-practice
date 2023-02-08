
fetch('https://cdn.britannica.com/26/188626-050-9934FA95/Characters-The-Simpsons-Marge-Lisa-Maggie-Bart.jpg')
.then((response) => response.blob())
.then((data) => {console.log(data.stream())});

