import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `Welcome to Angular!`,
})

@Component({
  selector:'app-root',
  template: `Hello`,
  styles: `
  :host{
    color:blue;
  },
  `
})

/*export class App{}*/

@Component({
  selector:'app-user',
  template:`Username:{{username}}`,
})
export class User{
  username = 'youngTech';
}
@Component({
  selector:'app-root',
  template:``,
  imports:[],
})

/*@Component({
  ...
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
  `,
})
export class App {
  isLoggedIn = true;
}*/
@Component({
  selector: 'app-root',
  template: ` <span>Yes, the server is running</span> `,
})

/*@Component({
  ...
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
})
export class App {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
} */
/*<img alt="photo" [src]="imageURL" />*/

/*@Component({
  ...
  template: `<button (click)="greet()">`
})
export class App {
  greet() {
    console.log('Hello, there 👋');
  }
} 
  
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class App {
  message = '';

  showSecretMessage() {}
}

class User {
  occupation = input<string>();
}
@Component({
  ...
  template: `<p>The user's occupation is {{occupation()}}</p>`
})
@Component({...})
class Child {
  incrementCountEvent = output<number>();
}
  class Child {
  ...
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
*/

/*import {Component, output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  addItem() {}
} */


  /*import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article></article>
      <comments />
    </div>
  `,
  imports: [Comments],
})
export class App {}
*/


/*import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/logo.svg" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" />
      </li>
    </ul>
  `,
  imports: [],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}*/

/*import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  `,
  imports: [RouterOutlet],
})
export class App {}*/
export class App{}


