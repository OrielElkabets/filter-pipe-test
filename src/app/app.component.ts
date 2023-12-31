import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, TableValue } from './models/table-value';
import { FilterPipe } from "./pipes/filter.pipe";
import { FilterBy } from './models/filterBy';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, FilterPipe, FormsModule]
})
export class AppComponent {
  title = 'filterPipeTest';

  users = [
    new TableValue("אוריאל", new Address("ירושלים", "בעל השאילתות")),
    new TableValue("יהודה", new Address("ירושלים", "מרכזית")),
    new TableValue("אברהם", new Address("בית שמש", "שאול המלך")),
  ]

  byName = new FilterBy("name", "אוריאל")
  byCity = new FilterBy("address.city", "ירושלים")
  trigger = true
}
