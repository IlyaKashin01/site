import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent{

  constructor(private csvService: CsvService,) { }
  selectedTab: number = 1;
  
  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
  downloadServices(): void {
    this.csvService.downloadServicesCsv().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'services.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => console.error('Ошибка при загрузке файла CSV:', error)
    );
  }

}
