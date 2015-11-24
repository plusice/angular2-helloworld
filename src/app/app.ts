// We no longer expect to find our code or any library code in a global namespace. We import exactly what we need, as we need it, from named file and library resources.
import {bootstrap, Component} from 'angular2/angular2';

// @Component tells Angular that this class is an Angular component
@Component({
    selector: 'my-app', // The selector specifies a CSS selector for a host HTML element named my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element.
    template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent { }


// The bootstrap method tells Angular to start the application with this component at the application root.
bootstrap(AppComponent);
