// 13-bind_user

class user {
  hobby = 'Calligraphy';
  favoriteSport = 'Hockey';
  astrologicalSign = 'Aries';
  firstName = 'Buillaume';
  lastName = 'Ialva';
  location = 'Telaviv';
  occupation = 'Engineer';

  constructor() {
    this.bindLogWelcomeUser = this.logWelcomeUser.bind(this);
  }

  logWelcomeUser = (welcomeString) =>
    console.log(
      `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
    );
}
