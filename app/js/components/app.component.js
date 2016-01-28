import MilkyWay from './milky-way.component.js';
import {Component} from 'angular2/core';


export default function AppComponent(){
   return Component({
            selector: 'my-app',
            template: `
            <milky-way></milky-way>
            `,
            directives: [MilkyWay()]
         }).Class({
            constructor() {}
         });
}
