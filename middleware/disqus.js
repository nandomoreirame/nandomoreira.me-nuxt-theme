export default function (context) {
  if (context.isClient) {
    (function () {
      const s = document.createElement('script'); s.async = true
      const el = document.getElementById('dsq-count-scr')
      el.parentNode.removeChild(el)

      s.type = 'text/javascript'
      s.id = 'dsq-count-scr'
      s.src = '//fernandomoreira.disqus.com/count.js'

      setTimeout(() => {
        document.getElementsByTagName('BODY')[0].appendChild(s)
      }, 2000)
    }())
  }
}
