import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { MenubarComponent } from "../menubar/menubar.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [HeroComponent, MenubarComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit {
 
  constructor(private _AuthService: AuthService) { }
  errImage: string = '';

ngOnInit(): void { this.errImage = this._AuthService.errPhoto }
}