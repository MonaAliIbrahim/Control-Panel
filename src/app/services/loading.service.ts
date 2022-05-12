import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: boolean;

  constructor(private loadingController: LoadingController) { 
    this.isLoading = false;
  }

  showLoading() {
    this.isLoading = true;
    return (
      this.loadingController.create({
        message: 'Loading',
        spinner: 'circles'
      }).then(loading => {
          loading.present().then(() => {
            this.hideLoading();
          })
        })
    )
  }

  hideLoading() {
    this.isLoading = false;
    return (this.loadingController.dismiss(null, 'cancel'));
  }

}
