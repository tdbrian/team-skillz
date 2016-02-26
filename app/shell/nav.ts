import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'app-nav',
    templateUrl: 'app/shell/nav.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppNav {}