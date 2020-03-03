import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageNumber = 1;
  chapterNum = 1;
  chapter;
  dataService: DataService;

  GetPage() {
    this.pageNumber = this.dataService.GetPageNumber();
    this.chapterNum = this.dataService.GetChapterNumber();

    this.chapter = "chapter/" + this.chapterNum;
  }

  constructor(dataService: DataService) {
    this.dataService = dataService
  }

  ngOnInit() {
    this.GetPage();
  }

}
