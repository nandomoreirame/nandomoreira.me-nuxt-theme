const env = (process.env.NODE_ENV === 'production');

/*
** Include Google Analytics Script
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (!env) return;

  /*
  ** Set the current page
  */
  ga('create', 'UA-52446115-1', 'auto');

  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.afterEach((to, from) => {
    /*
    ** We tell Google Analytic to add a page view
    */
    ga('set', 'page', to.fullPath);
    ga('send', 'pageview');

    console.log(to.name);
  });
}

const trackEvents = e => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (!env) return;

  ga('send', 'event', {
    eventCategory: 'Link',
    eventAction: 'click',
    eventLabel: e.target.innerText
  });
}

document.addEventListener('click', e => trackEvents(e));

!function() {
  var t;
  if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
  t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
  t.factory = function(e) {
    return function() {
      var n;
      return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
    };
  }, t.methods.forEach(function(e) {
    t[e] = t.factory(e);
  }), t.load = function(t) {
    var e, n, o, i;
    e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
    n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
  });
}();

drift.SNIPPET_VERSION = '0.3.1';
drift.load('37btheykpfby');

// setTimeout(function () {
//   let d = document
//     , s = d.createElement('script')
//   s.setAttribute('id', 'dsq-count-scr')
//   s.setAttribute('data-timestamp', +new Date())
//   s.type = 'text/javascript'
//   s.async = true
//   s.src = '//fernandomoreira.disqus.com/count.js'
//   ;(d.head || d.body).appendChild(s)
// }, 5)
