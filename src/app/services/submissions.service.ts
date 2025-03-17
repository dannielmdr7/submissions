
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
export class SubmissionsService  {
  private _submissions = signal<Submission[]>([]);
  submissions = computed(() => this._submissions());
  constructor() {
    this._submissions.set(data);
  }
}
