import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  isLogened: boolean;
  userInfo: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService,
    private actionSheetController: ActionSheetController
    ) {
      this.userInfo = '';
    }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  showUserMenu() {
    this.actionSheetController.create({
      header: 'Do you want to exit ?',
      cssClass: 'actionsheet-custom-class',
      buttons: [{
        text: 'Logout',
        role: 'destructive',
        icon: 'exit',
        handler: () => {
          this.loadingService.showLoading();
          this.authService.logout();
          this.loadingService.hideLoading();
          this.router.navigate(['login']);
        }
      }]
    }).then(action => action.present());
  }

  ngOnInit() {
    this.authService.isLogined().subscribe((auth) => {
      if (auth) {
        this.isLogened = true;
        this.userInfo = auth.email;
      }else {
        this.isLogened = false;
      }
    });
  }

}
