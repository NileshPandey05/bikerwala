import { Component } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent, MatButton],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
