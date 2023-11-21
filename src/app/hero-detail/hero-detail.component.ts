import { Component, Input } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe],
})

export class HeroDetailComponent {
  @Input() hero?: Hero;
}
