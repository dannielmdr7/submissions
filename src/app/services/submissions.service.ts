
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
  latitude?: number;
  longitude?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {
  private _submissions = signal<Submission[]>([]);
  private _typeOfView = signal<string>('list');
  submissions = computed(() => this._submissions());
  typeOfView = computed(() => this._typeOfView());

  constructor() {
    this._submissions.set(data);
  }

  setTypeOfView(type: string) {
    this._typeOfView.set(type);
  }

  filterByName(name: string) {
    if (!name.trim()) {
      this._submissions.set(data);
      return;
    }
    this._submissions.set(data);
    const regex = new RegExp(name, "i");
    const filteredDate = this._submissions().filter(item => regex.test(item.task));
    this._submissions.set(filteredDate);
  }
}
