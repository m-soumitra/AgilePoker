import { CardComponent } from './card/card.component';
import { PokerComponent } from './poker/poker.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TodoComponent } from './todo/todo.component';


export const ROUTES: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'todo/:status', component: TodoComponent },
            { path: 'poker', component: PokerComponent },
            { path: 'poker/t-shirt', component: PokerComponent },
            { path: 'card/:type', component: CardComponent }
        ],
    },
    { path: '**', redirectTo: '/all' }

];
