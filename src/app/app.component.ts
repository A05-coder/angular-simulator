import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'Р У М Т И Б Е Т'

  //задание 2
  isPrimaryColor(color: Color): boolean {
    const primaryColor = [Color.RED, Color.GREEN, Color.BLUE]
    return primaryColor.includes(color);
  }
 
  //задание 3 и 4
  private readonly LAST_VISIT_KEY = 'last_visit_date';
  private readonly QUANTITY_VISIT_KEY = 'visit_count';

  savingLastVisit(): void {
    const currentDate: string = new Date().toISOString();
    localStorage.setItem(this.LAST_VISIT_KEY, currentDate);
  }

  savingQuantityVisit(): void {
    const savedCount: string | null = localStorage.getItem(this.QUANTITY_VISIT_KEY);
    const currentCount: number = savedCount ? Number(savedCount) : 0;
    const newCount: number = currentCount + 1;
    
    localStorage.setItem(this.QUANTITY_VISIT_KEY, String(newCount));
  }
}

