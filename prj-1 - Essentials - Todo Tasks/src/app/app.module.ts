
/* 🧠 BrowserModule
✅ We're trying to Bootstrap the application with the app module, we should make sure that the browser module is 
imported because modules can actually also import other modules and will build another custom our module later. 
But one module that has been built for us by the Angular team which we should import here is the
browser module which is imported from at Angular platform browser. This is a module provided by the Angular team
that in the end provides a collection of things that are needed by every Angular app in order to run correctly.
This includes some generally helpful directives that might be used in your application but also some other crucial f
eatures. Every application needs access to. That's why you must import this here and then also add it to the imports array of your root module.
So of your app module, typically,✅ every Angular application when using Angular modules needs that browser module well✅.
And with that, if you saved it and you reload, you see we got no more errors here and the application indeed again works
as before.And that's therefore all is an example that shows us how we can combine standalone and module based components 
by adding any standalone components to imports and any non standalone components to declarations.
But we're of course still not done with this application here.*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
// import { Card } from './shared/card/card';
// import { Tasks } from './tasks/tasks';
// import { Task } from './tasks/task/task';
// import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}

// Datepipe module  can be added but it is already unlocked by Browser module
