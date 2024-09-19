import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink ],
  
templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
  user: any = {};
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  logoImage: string = '';
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { 
    
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() !== null) { this.isLogin = true }
      else { this.isLogin = false }
    })
  }
  logout() {
    this._AuthService.logout();
    this._Router.navigate(['/login'])

  }

  

  openMenu(){
    this.menuValue =! this.menuValue ;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
   closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  ngOnInit(): void {
    this.user = this._AuthService.currentUser.getValue();
    this.logoImage = this._AuthService.logoPhoto
  }
}