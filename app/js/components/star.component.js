import {Component} from 'angular2/core';

export default function MilkyWay(){
   return Component({
            selector: 'star',
            inputs: ['star'],
            template: `
            <div class="col s12 m6 l4">
               <div class="card {{getColor(star.language)}} darken-1">
                  <div class="card-content white-text">
                     <span class="card-title"><a href="{{star.html_url}}">{{ star.name }}</a></span>
                     <p>{{ star.description }}</p>
                  </div>
                  <div class="card-action">
                     <i class="small material-icons">star_rate</i>
                     <span class="card-stars">{{star.stargazers_count}}</span>
                  </div>
               </div>
            </div>`
         }).Class({
            constructor() {
               this.getColor = function(color){
                  switch(color) {
                     case 'JavaScript': return 'yellow';
                     case 'HTML': return 'red';
                     case 'C': return 'green';
                     case 'CSS': return 'blue';
                     default: return 'blue-grey';
                  }
               };
            }
         });
}
