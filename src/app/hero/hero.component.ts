import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  slidImage: string = '';
  coverImage: string = '';
  rowImage: string = '';
  constructor(private _AuthService: AuthService){}


ngOnInit(): void {
    this.slidImage = this._AuthService.slidPhoto;
    this.coverImage = this._AuthService.coverPhoto 
    this.rowImage = this._AuthService.rowPhoto
}

}
