import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AttributeClassStyleBindingComponent } from './attribute-class-style-binding/attribute-class-style-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventsComponent } from './events/events.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule  } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { DriverComponent } from './driver/driver.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    HelloWorldComponent,
    AttributeClassStyleBindingComponent,
    DirectivesComponent,
    EventsComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostComponent,
    PostsComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
