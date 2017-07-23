import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnChanges {
  @Input() status: string;
  constructor() { }

  ngOnChanges(changes: any) {
    setTimeout(() => {
     this.status = '';
    }, 2000);
  }
}
