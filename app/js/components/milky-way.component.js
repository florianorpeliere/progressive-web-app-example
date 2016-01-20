import {Component} from 'angular2/core';

import Star from './star.component.js';
import GithubService from '../services/github.service.js';

export default function MilkyWay(){
   return Component({
            selector: 'milky-way',
            template: `
            <h1>Welcome Florian</h1>
            <star *ngFor="#star of githubStars" [star]="star"></star>
            `,
            directives: [Star()],
            bindings: [GithubService],
            providers: [GithubService]
         }).Class({
            constructor: [GithubService, function(GithubService) {
               GithubService
                     .getStars()
                     .subscribe(res => this.githubStars = res.json());
            }]
         });
}
