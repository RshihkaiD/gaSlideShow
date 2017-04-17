(function() {
    var getBtn = document.getElementById('addHomePage');
    var getBehavior;
    var getHomePage;
    var gogogo = function() {
        var url = window.location.href,
            title = 'title';

        $('#bookmarkme').click(function(e) {
            addFavorite(url, title);
            e.preventDefault();
        });

        function addFavorite(url, title) {
            if (window.external && 'addFavorite' in window.external) { // IE
                window.external.addFavorite(url, title);
            } else if (window.sidebar && window.sidebar.addPanel) { // Firefox23后被弃用
                window.sidebar.addPanel(url, title);
            } else if (window.opera && window.print) { // rel=sidebar，读取a链接的href，title 注：opera也转战webkit内核了
                this.title = title;
                return true;
            } else { // webkit - safari/chrome
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
            }
        }
    }
    getBtn.addEventListener('click', function(e) {
    	console.log('click');
        gogogo();
    });
}());
