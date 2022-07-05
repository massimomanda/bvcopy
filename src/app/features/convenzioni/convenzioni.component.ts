import { Component, OnInit } from '@angular/core';
import { ConvenzioniService } from 'src/app/shared/uikit/services/convenzioni/convenzioni.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import { toastNames } from 'src/app/shared/utils/constants';
import {
    fadeInOnEnterAnimation,
    fadeOutRightOnLeaveAnimation,
  } from 'angular-animations';

@Component({
  selector: 'app-convenzioni',
  templateUrl: './convenzioni.component.html',
  styleUrls: ['./convenzioni.component.css'],
  animations: [fadeInOnEnterAnimation(), fadeOutRightOnLeaveAnimation()],
})
export class ConvenzioniComponent implements OnInit {
  convenzioni: any = [];
  convenzioniOld:any = [];
  annulla:any;
  loading = false;


  constructor(
    public convenzioniService: ConvenzioniService,
    public loaderService: LoaderService,
    private toastService: ToastService
  ) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.toastService.annulla.subscribe((res)=>{
      if(res){
        this.convenzioni = this.convenzioniOld
        this.toastService.annulla.next(false)
        if(this.annulla){

          this.annulla.unsubscribe()
        }
      }
    } )
    this.convenzioniService.getAllConvenzioni().subscribe((c: any) => {
      this.convenzioni = c;
      this.convenzioniOld = [...this.convenzioni]
    });
  }
  deleteConvenzione(_id: string) {
    this.toastService.isVisibleUndo = true;
    this.convenzioni = this.convenzioni.filter((c:any) => c._id != _id);
    this.toastService.setMessage(toastNames.DELETED_CONV_SUCCESS);
    this.annulla = this.toastService.annullaTimer.subscribe((res)=>{     
      this.convenzioniService.deleteConvenzioni(_id).subscribe(
  (res: any) => {
  },
  (err) => {
    this.toastService.setMessage(toastNames.DELETED_CONV_ERROR);
  }
);
  
})

  }
}
