interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6n61wNf0a806B5DlepwhtAe8LY8BnYN4',
  domain: 'myangular.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
