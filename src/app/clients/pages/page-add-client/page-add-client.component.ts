import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/orders/services/clients.service';
@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public init = new Client();

  constructor(private os: ClientsService, private router: Router) { }

  ngOnInit(): void {
  }
  public add(item: Client) {
    this.os.add(item).subscribe((res) => {
     // console.log(res);
     this.router.navigate(['clients']);
    });
  }
}
