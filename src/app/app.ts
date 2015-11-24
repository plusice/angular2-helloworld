// We no longer expect to find our code or any library code in a global namespace. We import exactly what we need, as we need it, from named file and library resources.
import {bootstrap, Component} from 'angular2/angular2';

class Hero {
    id: number;
    name: string;
}

// @Component tells Angular that this class is an Angular component
@Component({
    selector: 'my-app', // The selector specifies a CSS selector for a host HTML element named my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element.
    template:`
            <h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
                <li *ng-for="#hero of heroes"
                    [ng-class]="getSelectedClass(hero)"
                    (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
            </ul>
            <div *ng-if="selectedHero">
                <h2>{{selectedHero.name}} details!</h2>
                <div><label>id: </label>{{selectedHero.id}}</div>
                <div>
                    <label>name: </label>
                    <div><input [(ng-model)]="selectedHero.name" placeholder="name"></div>
                </div>
            </div>
          `,
    styles:[`
            .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
            .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
            .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
            .heroes .badge {
                font-size: small;
                color: white;
                padding: 0.1em 0.7em;
                background-color: #369;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -1px;
            }
            .selected { background-color: #EEE; color: #369; }
        `],
})
class AppComponent {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes = HEROES;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getSelectedClass(hero: Hero) {
      return { 'selected': hero === this.selectedHero };
    }
}


// The bootstrap method tells Angular to start the application with this component at the application root.
bootstrap(AppComponent);


var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
