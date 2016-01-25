import {Component} from 'angular2/core';

export default function MilkyWay(){
   return Component({
            selector: 'star',
            inputs: ['star'],
            template: `
            <div class="col xs12 s6 m4">
               <div class="card {{color}} darken-1">
                  <div class="card-content white-text">
                     <span class="card-title"><a href="{{star.html_url}}">{{ star.name }}</a></span>
                     <p>{{ star.description }}</p>
                  </div>
                  <div class="card-action">
                     <a href="#">This is a link</a>
                  </div>
               </div>
            </div>`
         }).Class({
            constructor() {
               this.color = 'blue-grey';
            }
         });
}
