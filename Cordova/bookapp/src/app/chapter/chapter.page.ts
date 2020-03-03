import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {

  chapter: Chapter;

  currentPage = 1;
  pageNumber = 1;
  maxWords = 120;
  pages = [];


  // injections
  dataService: DataService;
  navCtrl: NavController;
  routeSub: Subscription;

  constructor(navCtrl: NavController, dataService: DataService, private route: ActivatedRoute) {
    this.dataService = dataService
    this.navCtrl = navCtrl; 
  }
  

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.dataService.SetChapterNumber(params['id']);
      this.GetData();
      this.SplitText();
      this.pageCheck();
    });
  }

  SplitText() {
    let currentChapterPages = 1;
    let textArr = this.chapter.content.split(' ');
    let count = 0;
    let tempArray = [];
    count = this.CountArray(textArr, tempArray, count, currentChapterPages);
  }

  nextPage() {
    this.currentPage+=1;
    this.pageNumber+=1;
    this.pageCheck();
  }

  previousPage() {
    this.currentPage-=1;
    this.pageNumber-=1;
    this.pageCheck();
  }

  pageCheck() {
    this.currentPage = this.pageNumber + this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages);
    let pagesAmount = this.chapter.pages + this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages);
    // if(pagesAmount == this.currentPage) {
    //   document.getElementById("nextChpter").innerText = "Next Chapter";
    //   document.getElementById("next").hidden = true;
    // } else {
    //   document.getElementById("next").hidden = false;
    // }

    if(this.currentPage < 1) {
      this.currentPage = 1;
      this.navCtrl.navigateRoot('/table-of-contents');
    } else {
      document.getElementById("previous").hidden = false;
    }

    if((this.currentPage - this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages)) <=0) {
      this.dataService.SetChapterNumber((this.chapter.id - 1));
      let pageNum = this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages) - this.currentPage;
      this.dataService.SetPageNumber(pageNum);
      let previousChapter = this.dataService.GetChapterNumber() - 1;
      this.pageNumber = this.dataService.GetChapterContent(previousChapter).pages;
      this.dataService.SetContentNum(this.pageNumber);
      this.navCtrl.navigateRoot('/chapter/' + (this.chapter.id - 1));
    }
    console.log("currentPage" + this.currentPage);
    if((this.currentPage - this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages)) > this.chapter.pages) {
      console.log("staring next chapter sequrence")
      this.dataService.SetChapterNumber((this.chapter.id + 1));
      let pageNum = this.dataService.FindPageDifference(this.chapter.id, this.chapter.pages) + 1;
      this.dataService.SetPageNumber(pageNum);
     
      let previousChapter = this.dataService.GetChapterContent(this.dataService.GetChapterNumber() + 1);
      this.dataService.SetContentNum((previousChapter.pages + pageNum));
      this.navCtrl.navigateRoot('/chapter/' + (this.chapter.id + 1));
      this.currentPage = 0;
      console.log(this.currentPage);
    }

    // this.dataService.SetPageNumber(this.currentPage);
  }

  private CountArray(textArr: string[], tempArray: any[], count: number, currentChapterPages: number) {
    for (let index = 0; index < textArr.length; index++) {
      const element = textArr[index];
      //counting elements in array
      tempArray.push(element);
      count++;
      ({ count, tempArray, currentChapterPages } = this.MaxWordCheck(count, tempArray, currentChapterPages));
    }
    return count;
  }

  private MaxWordCheck(count: number, tempArray: any[], currentChapterPages: number) {
    if (count >= this.maxWords) {
      count = 0;
      let page = {
        content: tempArray.toString(),
        pageNumber: currentChapterPages
      };
      currentChapterPages++;
      this.pages.push(page);
      tempArray = [];
    }
    return { count, tempArray, currentChapterPages };
  }

  // Get current page using data in service
  GetData() {
    let chapterNumber = this.dataService.GetChapterNumber();
    this.chapter = this.dataService.GetChapterContent(chapterNumber);
    this.currentPage = this.dataService.getContentNum();
    this.pageNumber = this.dataService.getContentNum();
  }

}
