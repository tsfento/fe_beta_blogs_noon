import { Component, OnInit } from '@angular/core';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fe_beta_blogs_noon';

  constructor(private notificationService: NotificationService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notifcation => {
      this.snackBar.open(notifcation, 'Dismiss', {
        duration: 3000,
      })
    })
  }
}
