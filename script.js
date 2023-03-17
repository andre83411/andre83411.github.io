var history = '';

    var routes = {
        '':          'index.html',     
        '/':         'index.html',
        '#/index':    'index.html',                
        '#/projects':  'Projects.html',        
        '#/contact':    'contact.html',
    };

    async function router(){
        console.log(location.hash);
        var innerElement = '';

        var link = window.location.hash;

        var count = (link.split("/").length - 1);        
        if (count > 1) {
            
            innerElement = link.split("/")[2];            

            link = '#/' + link.split("/")[1];
        }

        // Remember history to avoid reload        
        if (history === link && innerElement){
            scrollIntoView(innerElement);
            history = link;
            return;            
        }
        history = link;  

        var route = routes[link];

        if (route) loadPage(route, innerElement);
    };
    router();

    async function loadPage(url, innerElement){
        // load page
        const res     = await fetch(url);
        const content = await res.text();
        const element = document.getElementById('content');
        element.innerHTML = content;

        //Scroll
        window.scrollTo(0, 0);


        // element scroll into view
        if (innerElement) {            
            scrollIntoView(innerElement);
        }        
    }

    function scrollIntoView(id){
        document.getElementById(id).scrollIntoView();
    }

    window.addEventListener('hashchange', router);    