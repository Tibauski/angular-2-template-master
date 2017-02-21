import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

export class Date{
  day: number;
  month: number;
  year: number;
}
export class Task{
  id: number;
  compolete: boolean;
  title: string;
  description: string;
  tags: string[];
  category: number;
  date: Date;
  creationDate: Date;
  completeDate: Date;
}
