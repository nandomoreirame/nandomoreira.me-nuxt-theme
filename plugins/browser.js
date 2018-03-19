(function () {
  const disqusReset = document.createElement('script')

  disqusReset.async = true
  disqusReset.id = 'dsq-count-scr-reset'
  disqusReset.innerHTML = `DISQUSWIDGETS.getCount({ reset: true });`

  setTimeout(() => {
    document.getElementsByTagName('BODY')[0].appendChild(disqusReset)
  }, 1000);
}());
