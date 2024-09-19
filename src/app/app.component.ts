import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from "./menubar/menubar.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
    this._AuthService.currentUser.subscribe({
      next: () => {
        if (this._AuthService.currentUser.getValue() !== null) { this.isLogin = true; }
        else { this.isLogin = false; }
      }
    })
  }
}