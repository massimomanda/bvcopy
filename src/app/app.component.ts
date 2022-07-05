import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation } from 'angular-animations';
import jwtDecode from 'jwt-decode';
import { NgxPermissionsService } from 'ngx-permissions';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './shared/uikit/services/auth/auth.service';
import { BachecaService } from './shared/uikit/services/bacheca/bacheca.service';
import { ToastService } from './shared/uikit/services/toast/toast.service';
import { slideInAnimation } from './shared/utils/animation';
import { Post } from './shared/utils/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation, fadeInUpOnEnterAnimation(), fadeOutDownOnLeaveAnimation()],
})
export class AppComponent implements OnInit {
  title = 'badgeverso';
  rottaAttuale: string = '';

  @Output('undo') undo = new EventEmitter();
  
  isVisible: boolean = false;
  text: any;
  icon: any;

  constructor(
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService,
    private contexts: ChildrenOutletContexts,
    private toastService:ToastService

  ) { }

  isAdminOrUser(token: any) {
    this.permissions.loadPermissions(token.admin ? ['ADMIN'] : ['USER']);
  }

  ngOnInit() {
    let token: any = localStorage.getItem('token');
    if (token) {

      let decodedToken: any = jwtDecode(token);
      this.isAdminOrUser(decodedToken);
      this.authService.setLoginResponse(decodedToken);

    }

    this.toastService.newEvent.subscribe((res:any) => {
      this.isVisible = true;
      timer(4000).subscribe(() => {
        this.toastService.overlayVisible = false;
        this.isVisible = false;
        this.toastService.isVisibleUndo = false;
      });

      this.text = res.message;
      this.icon = res.icon;
    });

  }

  undoAction() {
    switch (this.router.url) {
      case '/home/bacheca': {
        break;
      }
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
