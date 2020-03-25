import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SidebarComponent} from './components/sidebar/sidebar.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component';


import { TodoIdResolverService } from './resolvers/todo-id-resolver/todo-id-resolver.service';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {
    path: 'todo/:id',
    component: TodoItemComponent,
    resolve: {
      todo: TodoIdResolverService
    }
    
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // HttpClientModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
