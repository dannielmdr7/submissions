
import { computed, Injectable, OnInit, signal } from '@angular/core';
import { data } from './data';

export enum StatusEnum {
  LowRisk = 'Low Risk',
  Unassigned = 'Unassigned',
  Uncomplete = 'Uncomplete',
}

export interface Submission {
  task: string;
  status: StatusEnum;
  from: string;
  to: string;
  address: string;
  dueDate: string;
  selected: boolean;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {
  private _submissions = signal<Submission[]>([]);
  private _typeOfView = signal<string>('map');
  private filterValue = '';
  private statusValue = ''
  private dateValue = ''
  submissions = computed(() => this._submissions());
  typeOfView = computed(() => this._typeOfView());

  constructor() {
    this._submissions.set(data);
  }

  setTypeOfView(type: string) {
    this._typeOfView.set(type);
  }

  filterByName(name: string) {
    this.filterValue = name;
    this.handleFilters()
  }

  filterByStatus(status: StatusEnum) {
    this.statusValue = status;
    this.handleFilters()
  }

  filterByDate(date: string) {
    this.dateValue = date;
    this.handleFilters()
  }

  handleFilters() {
    this._submissions.set(data);
    const filteredData = this._submissions().filter(item => {
      if (this.filterValue === '') return true;
      const regex = new RegExp(this.filterValue, "i");
      return regex.test(item.task)
    }).filter(item => {
      if (this.statusValue === '') return true;
      return item.status === this.statusValue;
    }).filter((item) => {
      if (this.dateValue === '')return true;
      return new Date(item.dueDate) > new Date(this.dateValue)
    })
    this._submissions.set(filteredData);

  }
}
