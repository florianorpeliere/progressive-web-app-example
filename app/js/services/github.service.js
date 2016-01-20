import {Http} from 'angular2/http';

export default class GithubService {
  constructor(http) {
     this.login = 'florianorpeliere';
     this.url = `https://api.github.com/users/${this.login}/starred?per_page=100`;
     this.http = http;
  }
  getStars() {
    return this.http.get(this.url);
  }
  static get parameters() {
    return [[Http]];
  }
}
