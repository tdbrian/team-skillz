import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home/home';
import {Members} from './members/members';
import {Skills} from './skills/skills';
import {Products} from './products/products';

import {AppNav} from './shell/nav';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [AppNav, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/home', name: 'Home', component: Home, useAsDefault: true},
	{path: '/members', name: 'Members', component: Members},
	{path: '/skills', name: 'Skills', component: Skills},
	{path: '/products', name: 'Products', component: Products}
])
export class AppComponent {}