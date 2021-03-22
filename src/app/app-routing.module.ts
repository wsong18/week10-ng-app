import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AttributeClassStyleBindingComponent } from './attribute-class-style-binding/attribute-class-style-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DriverComponent } from './driver/driver.component';
import { EventsComponent } from './events/events.component';
import { FooComponent } from './foo/foo.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'helloworld', component: HelloWorldComponent },
  { path: 'foo', component: FooComponent },
  { path: 'acs', component: AttributeClassStyleBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'driver', component: DriverComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
