export default function (context) {
  if (context.isClient) {
    (function () {
      const sreset = document.createElement('script')
      const elreset = document.getElementById('dsq-count-scr-reset')

      elreset.parentNode.removeChild(elreset)

      sreset.async = true
      sreset.id = 'dsq-count-scr-reset'
      sreset.innerHTML = `(function () { DISQUSWIDGETS.getCount({ reset: true }); }())`

      setTimeout(() => {
        document.getElementsByTagName('BODY')[0].appendChild(sreset)
      }, 1000)
    }())
  }
}
