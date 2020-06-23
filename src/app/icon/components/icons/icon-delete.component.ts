import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-abstract.component.html',
  styleUrls: ['./icon-abstract.component.scss']
})
export class IconDeleteComponent implements OnInit {
  public myIcon = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
