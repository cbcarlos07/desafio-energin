import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap, timer } from 'rxjs';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
        state('hidden', style({
            opacity: 0,
            bottom: '0px'
        })),
        state('visible', style({
            opacity: 1,
            bottom: '0px'
        })),
        transition('hidden => visible', animate('500ms 0s ease-in')),
        transition('visible => hidden', animate('500ms 0s ease-out'))
      ])
]
})
export class SnackbarComponent implements OnInit {
  message: string = 'Hello there'
  snackVisibility: string = 'hidden'
  constructor(private _notifyService: NotificationService) { }

  ngOnInit(): void {
    this._notifyService.notifier
          .pipe(
            tap(message => {
               this.message = message
               this.snackVisibility = 'visible'
            }),
            switchMap(message => timer(3000))
          ).subscribe( timer => this.snackVisibility ='hidden' )
  }

}


