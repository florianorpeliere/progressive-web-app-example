import {Component} from 'angular2/core';

import Star from './star.component.js';
import GithubService from '../services/github.service.js';

export default function MilkyWay(){
   return Component({
            selector: 'milky-way',
            template: `
            <h1>Your GitHub stars</h1>
            <div class="row">
               <star *ngFor="#star of githubStars" [star]="star"></star>
            </div>
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
