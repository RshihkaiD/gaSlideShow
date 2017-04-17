(function() {
    var sendInit = {
        id: 'UA-97482190-1',
        method: 'create'
    };

    var GASlideShow = new(function() {
        this.init = function(param) {
            includeGAProgram(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga(param.method, param.id, 'auto');
            ga('send', 'pageview');
        };

        var includeGAProgram = function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        }
    })();

    GASlideShow.init(sendInit);
}());
