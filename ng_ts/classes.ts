export class AppComponent {
  title = 'Welcome to Angular Application';
  user: User;
  
  constructor() {
  this.user = new User();
  this.user.userName = 'Ankit';
  this.user.mobileNo = 9898343434;
  this.user.emailId = 'ankit@ngdevelop.tech';
  }
}
--------------------
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
------------------------------
