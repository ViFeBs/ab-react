import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Home from './pages/home';
import NotFound from './pages/notfound'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/pagina1" component={Page1} />
            <Route path="/pagina2" component={Page2} />
            <Route path="/pagina3" component={Page3} />
            <Route path="/pagina4" component={Page4} />
            <Route path="/pagina5" component={Page5} />
            <Route path="/pagina6" component={Page6} />
            <Route path="*" component={NotFound} />
        </Switch>
        </BrowserRouter>
    );
}