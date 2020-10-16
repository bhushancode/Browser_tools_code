document.addEventListener('copy', function(e) {
  const text_only = document.getSelection().toString();
  const clipdata = e.clipboardData || window.clipboardData;  
  clipdata.setData('text/plain', text_only);
  clipdata.setData('text/html', text_only);
  e.preventDefault();
});
