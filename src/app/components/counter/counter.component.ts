import { Component, OnInit } from '@angular/core';

type Diff = {
  years: number; months: number; days: number;
  hours: number; minutes: number; seconds: number;
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  startDate = new Date('2024-08-24T14:35:00');

  diff: Diff = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  ngOnInit(): void {
    this.update();
    setInterval(() => this.update(), 1000);
  }

  private update() {
    const now = new Date();
    this.diff = this.diffCalendar(this.startDate, now);
  }

  // Diferença por calendário (anos/meses/dias reais) + resto de horas/min/seg
  private diffCalendar(start: Date, end: Date): Diff {
    let s = new Date(start);
    let e = new Date(end);

    if (e < s) [s, e] = [e, s];

    // Anos
    let years = e.getFullYear() - s.getFullYear();
    const eMonth = e.getMonth();
    const sMonth = s.getMonth();
    if (eMonth < sMonth || (eMonth === sMonth && e.getDate() < s.getDate())) {
      years--;
    }
    const afterYears = new Date(s);
    afterYears.setFullYear(s.getFullYear() + years);

    // Meses
    let months = e.getMonth() - afterYears.getMonth();
    if (e.getDate() < afterYears.getDate()) {
      months--;
    }
    if (months < 0) months += 12;
    const afterMonths = new Date(afterYears);
    afterMonths.setMonth(afterYears.getMonth() + months);

    // Dias
    let days = Math.floor((e.getTime() - afterMonths.getTime()) / (1000 * 60 * 60 * 24));

    // Resto (horas, minutos, segundos)
    const afterDays = new Date(afterMonths);
    afterDays.setDate(afterMonths.getDate() + days);

    let remainingMs = e.getTime() - afterDays.getTime();
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    remainingMs -= hours * 3600000;
    const minutes = Math.floor(remainingMs / (1000 * 60));
    remainingMs -= minutes * 60000;
    const seconds = Math.floor(remainingMs / 1000);

    return { years, months, days, hours, minutes, seconds };
  }
}
