import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'Home',
    templateUrl: 'app/home/home.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Home {}