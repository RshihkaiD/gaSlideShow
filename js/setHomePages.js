(function() {
    var getBtn = document.getElementById('addHomePage');
    var getBehavior;
    var getHomePage;
    var url = window.location.href,
        title = 'title';

    var setHome = function() {
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        } else if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } catch (e) {
                    console.log('the web is not support');
                }
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);　　　　
            prefs.setCharPref('browser.startup.homepage', url);
        }
    }
    getBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('click');
        setHome();
        if (typeof ga != 'undefined') {
            ga('send', 'event', 'click', 'setHome', 'setHomePage');
        }
    });
}());
