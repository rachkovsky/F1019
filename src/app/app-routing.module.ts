import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SidebarComponent} from './components/sidebar/sidebar.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'

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
    
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
