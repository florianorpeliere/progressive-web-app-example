import MilkyWay from './milky-way.component.js';
import {Component} from 'angular2/core';


export default function AppComponent(){
   return Component({
            selector: 'my-app',
            template: `
            <h1>Milky Way</h1>
            <milky-way></milky-way>
            `,
            directives: [MilkyWay()]
         }).Class({
            constructor() {}
         });
}
