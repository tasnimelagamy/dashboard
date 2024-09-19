import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { MenubarComponent } from "../menubar/menubar.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MenubarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }
  coverImage: string = '';

ngOnInit(): void { this.coverImage = this._AuthService.coverPhoto }
    
}



 
