import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bradcrumb',
  templateUrl: './bradcrumb.component.html',
  styleUrls: ['./bradcrumb.component.css']
})
export class BradcrumbComponent implements OnInit {
  @Input() title: string = 'Title'
  @Input() subtitle: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
