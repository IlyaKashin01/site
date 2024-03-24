import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  getDataFromCsv: any;

  constructor(private http: HttpClient) { }

  downloadServicesCsv(): Observable<Blob> {
    // Здесь нужно указать путь к файлу CSV на сервере
    const url = 'https://example.com/services.csv';
    return this.http.get(url, { responseType: 'blob' });
  }
  readFile(filePath: string) {
    return this.http.get(filePath, { responseType: 'text' });
  }
}
