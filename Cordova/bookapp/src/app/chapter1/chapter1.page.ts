import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.page.html',
  styleUrls: ['./chapter1.page.scss'],
})
export class Chapter1Page {
}


// chapter = 1;
//   pageNumber = 1;
//   chapterContent;
//   chapterPageLength;

//   lastPage;

//   currentPage = 1;
  
//   pages = [];
  
//   navCtrl: NavController;
//   dataService: DataService;
//   private routeSub: Subscription;

//   // var currentId = $routeParams.id;

//   GetCurrentPage() {
//     // Get current chapter and page number 
//     this.chapter = this.dataService.GetChapterNumber();
//     this.pageNumber = this.dataService.GetPageNumber();

//     // Find pages amounts for all pages
//     let pageAmounts = this.dataService.findPageAmount();

//     // setting up amount of pages to skip
//     let amountOfPages = 0;

//     // setting up last page of current chapter
//     this.chapterPageLength = pageAmounts[this.chapter - 1].pages;

//     // Set up previous pages array
//     let previousPages = pageAmounts.slice();
//     previousPages.length = this.chapter - 1;

//     // Get amount of pages to skip
//     for (let index = 0; index < previousPages.length; index++) {
//       const element = previousPages[index];
//       amountOfPages += element.pages;
//     }
//     // console.log(amountOfPages)
    
//     this.currentPage = amountOfPages + 1;
//     console.log(this.currentPage);
//     // this.currentPage = this.pageNumber;
//     this.chapterContent = this.dataService.GetChapterContent(this.chapter-1); 
//     // console.log(this.chapter);
//     // console.log(this.chapterContent);
//   }

  // SplitText() {
  //   let pageCount = 1;
  //   let text = this.chapterContent[0].content;
  //   let maxWords = 120;
  //   let count = 0;
  //   let wordsArray = text.split(" ");
  //   let tempArray = [];
  //   for (let index = 0; index < wordsArray.length; index++) {
  //     const element = wordsArray[index];
  //     tempArray.push(element);
  //     count ++
  //     if(count >= maxWords) {
  //       count = 0;
  //       let page = {
  //         content: tempArray.toString(),
  //         pageNumber: pageCount
  //       }
  //       pageCount++;
  //       this.pages.push(page);
  //       tempArray = [];
  //     }
  //   }
  // }

  // nextPage() {
  //   this.currentPage++;
  //   this.pageCheck();
  // }

  // previousPage() {
  //   this.currentPage--;
  //   this.pageCheck();
  // }

  // pageCheck() {
  //   let currentPageNumber =this.chapterPageLength - this.currentPage;
  //   console.log(currentPageNumber);

  //   this.currentPage = this.currentPage - currentPageNumber;

  //   if(currentPageNumber >= this.pages.length) {
  //     document.getElementById("nextChpter").innerText = "Next Chapter";
  //     document.getElementById("next").hidden = true;
  //   } else {
  //     document.getElementById("next").hidden = false;
  //   }
  //   if(this.currentPage < 1) {
  //     this.currentPage = 1;
  //     this.navCtrl.navigateRoot('/table-of-contents');
  //   } else {
  //     document.getElementById("previous").hidden = false;
  //   }
  //   this.dataService.SetPageNumber(this.currentPage);
  // }

//   NextChapter() {
//     let currentChapter = this.dataService.GetChapterNumber();
//     this.dataService.SetChapterNumber(currentChapter++);
//     this.navCtrl.navigateRoot('/chapter/' + currentChapter++);


//   }

  // constructor(navCtrl: NavController, dataService: DataService, private route: ActivatedRoute) {
  //   this.dataService = dataService
  //   this.navCtrl = navCtrl; 
  // }

//   ngOnInit() {
    // this.routeSub = this.route.params.subscribe(params => {
    //   this.dataService.SetChapterNumber(params['id']);
    //   this.GetCurrentPage();
    //   this.SplitText();
    //   this.pageCheck();
    // });
    
//   }

//   ngOnDestroy() {
//     this.routeSub.unsubscribe();
//   }
