import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.css'
})
export class Table1Component implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'unit', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  position: number;
  name: string;
  unit: string;
  price: number;
}
const ELEMENT_DATA : PeriodicElement[] = [
  { position: 1, name: 'Рентгенографическое исследование в 1 проекции', unit: '1 снимок', price: 1700 },
  { position: 2, name: 'Рентгенографическое исследование в 2 проекциях', unit: '2 снимка', price: 2950 },
  { position: 3, name: 'Рентгенографическое исследование в 3 проекциях', unit: '3 снимка	', price: 4200 },
  { position: 4, name: 'Рентгенографическое исследование в 4 проекциях', unit: '4 снимка', price: 5500 },
  { position: 5, name: 'Рентгенографическое исследование в ночное время для исключения патологий, требующих экстренного лечения', unit: '1 снимок', price: 1300 },
  { position: 6, name: 'Рентген брюшной полости', unit: '2 снимка', price: 2950 },
  { position: 7, name: 'Рентген грудной клетки', unit: '3 снимка', price: 4200 },
  { position: 8, name: 'Рентген черепа', unit: '3 снимка', price: 3800 },
  { position: 9, name: 'Рентгенографическое исследование мелких птиц/грызунов (1 проекция)', unit: '1 снимок', price: 1600 },
  { position: 10, name: 'Рентгенографическое исследование крупных птиц (1 проекция)', unit: '1 снимок', price: 1600 },
  { position: 11, name: 'Рентгенографическое исследование мелких птиц ( 2 проекции)', unit: '2 снимка', price: 2650 },
  { position: 12, name: 'Рентгенографическое исследование крупных птиц (2 проекции)', unit: '2 снимка', price: 3150 },
  { position: 13, name: 'Рентгеноконтрастная цистография с учетом уретрального катетера и катетеризации, без стоимости лекарственных препаратов', unit: '1 исслед.', price: 6700 },
  { position: 14, name: 'Рентгеноконтрастное исследование желудочно-кишечного тракта с сульфатом бария, без учета контрастного вещества', unit: 'серия', price: 8400 },
  { position: 15, name: 'Введение контрастного вещества с целью проведения миелографии,  включая стоимость контрастного вещества, без стоимости общей анестезии', unit: '1 процед.', price: 5250 },
  { position: 16, name: 'Снимок на дентальном визиографе', unit: '1 снимок', price: 650 },
  { position: 17, name: 'Фистулография, без стоимости контрастного вещества', unit: '1 исслед.', price: 3150 },
  { position: 18, name: 'Экскреторная урография, без стоимости контрастного вещества', unit: '1 исслед.', price: 6450 },
  { position: 19, name: 'Проведение манипуляций под контролем УЗИ', unit: '1 голова', price: 650 },
  { position: 20, name: 'Пункционная биопсия под контролем УЗИ, с учетом расходных материалов', unit: '1 процед.', price: 5750 },
  { position: 21, name: 'Ультразвуковое исследование брюшной полости детализированное', unit: '1 исслед.', price: 4500 },
  { position: 22, name: 'Ультразвуковое исследование брюшной полости обзорное для онкологических пациентов в динамике', unit: '1 исслед.', price: 3050 },
  { position: 23, name: 'Ультразвуковое исследование брюшной полости у птиц', unit: '1 исслед.', price: 1600 },
  { position: 24, name: 'Ультразвуковое исследование  желудочно-кишечного тракта, печени, поджелудочной железы и селезенки', unit: '1 исслед.', price: 2100 },
  { position: 25, name: 'Ультразвуковое исследование  желудочно-кишечного тракта', unit: '1 исслед.', price: 1300 },
  { position: 26, name: 'Ультразвуковое исследование глаза и подлежащих структур', unit: '1 исслед.', price: 2100 },
  { position: 27, name: 'Ультразвуковое исследование головного мозга', unit: '1 исслед.', price: 2100 },
  { position: 28, name: 'Ультразвуковое исследование грудной полости', unit: '1 исслед.', price: 1900 },
  { position: 29, name: 'Ультразвуковое исследование одного патологического очаг', unit: '	1 исслед.', price: 650 },
  { position: 30, name: 'Ультразвуковое исследование двух патологических очагов', unit: '1 исслед.', price: 1300 },
  { position: 31, name: 'Ультразвуковое исследование мочевыделительной системы', unit: '1 исслед.', price: 1900 },
  { position: 32, name: 'Ультразвуковое исследование на выявление сосудистых аномалий', unit: '1 исслед.', price: 3200 },
  { position: 33, name: 'Ультразвуковое исследование на наличие свободной жидкости в брюшной/грудной полост', unit: '	1 исслед.', price: 650 },
  { position: 34, name: 'Ультразвуковое исследование надпочечников', unit: '1 исслед.', price: 1500 },
  { position: 35, name: 'Ультразвуковое исследование области шеи (щитовидной и слюнных желез, лимфатических узлов)', unit: '1 исслед.', price: 2100 },
  { position: 36, name: 'Ультразвуковое исследование репродуктивной системы', unit: '1 исслед.', price: 2000 },
  { position: 37, name: 'Холтеровское мониторирование (расшифровка холтера)', unit: '1 исслед.', price: 6750 },
  { position: 38, name: 'Холтеровское мониторирование (установка холтера', unit: '	1 исслед.', price: 750 },
  { position: 39, name: 'Холтеровское мониторирование (установка и расшифровка холтера)', unit: '1 исслед.', price: 7500 },
  { position: 40, name: 'Скрининг ЭХОКГ (только для кошек)', unit: '1 исслед.', price: 2600 },
  { position: 41, name: 'Фокусное ЭХОКГ', unit: '1 исслед.', price: 1300 },
  { position: 42, name: 'Электрокардиограмма', unit: '1 исслед.', price: 1550 },
  { position: 43, name: 'Предоперационная электрокардиограмма собакам (выполняется кардиологом)', unit: '1 исслед.', price: 1800 },
  { position: 44, name: 'ЭХО-кардиограмма', unit: '1 исслед.', price: 3850 },
  { position: 45, name: 'Комплексное кардиологические исследование сердца перед анестезией	1 компл', unit: 'кс ислед.', price: 5000 },
  ];