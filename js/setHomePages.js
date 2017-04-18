(function() {
  var getBtn = document.getElementById('addHomePage');
  var getBehavior;
  var getHomePage;
  var url = window.location.href,
    title = 'title';

  var checkDevice = function() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var checkDeviceObj = {
      Opera: isOpera,
      Firefox: isFirefox,
      Safari: isSafari,
      IE: isIE,
      Edge: isEdge,
      Chrome: isChrome,
      Blink: isBlink
    };

    var returnCheck = [];

    for (var variable in checkDeviceObj) {
      if (checkDeviceObj.hasOwnProperty(variable)) {
        if (checkDeviceObj[variable]) {
          returnCheck.push(variable);
        }
      }
    }

    return returnCheck;
  }

  var setHome = function() {
    var checkBrowersDevice = checkDevice();
    for (var i = 0; i < checkBrowersDevice.length; i++) {
      if(checkBrowersDevice[i] == 'IE'){
        setHomeMethod();
      }else{
        console.log('The browser not support this method.');
      }
    }
    var setHomeMethod = function() {
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
  }
  getBtn.addEventListener('click', function(e) {
    e.preventDefault();
    setHome();
    if (typeof ga != 'undefined') {
      ga('send', 'event', 'click', 'setHome', 'setHomePage');
    }
  });
}());
