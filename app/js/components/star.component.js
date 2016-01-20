import {Component} from 'angular2/core';

export default function MilkyWay(){
   return Component({
            selector: 'star',
            inputs: ['star'],
            template: `
            <h1>
               <a href="{{star.html_url}}">{{ star.name }}</a>
            </h1>
            <div>{{ star.description }}</div>`
         }).Class({
            constructor() {}
         });
}
