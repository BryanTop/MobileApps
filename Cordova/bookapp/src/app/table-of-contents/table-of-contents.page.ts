import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chapter } from '../models/chapter';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.page.html',
  styleUrls: ['./table-of-contents.page.scss'],
})
export class TableOfContentsPage implements OnInit {

  public chapters: Chapter[] = [];
  dataService: DataService;
  navCtrl: NavController;

  constructor(dataService: DataService, navCtrl: NavController) {
    this.dataService = dataService;
    this.navCtrl = navCtrl;
    this.chapters = this.dataService.GetChapters();
   }

  ngOnInit() {
    
  }

  changePage(chapter) {
    this.dataService.SetChapterNumber(chapter.id);
  }

}
