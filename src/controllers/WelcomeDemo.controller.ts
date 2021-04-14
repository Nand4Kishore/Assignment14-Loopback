import {get} from '@loopback/rest';

export class WelcomeController {
  @get('/welcome')
  hello(): string {
    return 'Welcome to demo of Loopback an Automatic API Generator tools';
  }
}