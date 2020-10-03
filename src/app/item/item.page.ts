import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  pageTitle = 'Article';
  public item: any = null;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onClickGetItems() {
    this.data.getItems().subscribe((data: any) => {
      this.pageTitle = data.title;
      this.item = data;
    });
  }

}
