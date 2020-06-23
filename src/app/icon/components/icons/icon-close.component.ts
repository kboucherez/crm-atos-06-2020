import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-abstract.component.html',
  styleUrls: ['./icon-abstract.component.scss']
})
export class IconCloseComponent implements OnInit {
  public myIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
