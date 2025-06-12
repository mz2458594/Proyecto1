import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { CategoriaComponent } from './categoria/categoria.component';

@Component({
    selector: 'app-root',
    imports: [AccordionModule, CategoriaComponent, TableModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Proyecto1';
}
