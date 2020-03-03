import { Injectable } from '@angular/core';
import { Chapter } from '../models/chapter';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pagenumber = 1;
  chapter = 1;
  chapters: Chapter[] = [
    {
      id: 1,
      title: "Chapter 1 | the begining",
      url: "/chapter/1",
      name: "The begining",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed risus sed enim fringilla sollicitudin. Praesent urna nisi, cursus in quam ac, tristique condimentum magna. Nullam semper rutrum tellus, ut malesuada ante vehicula in. In hac habitasse platea dictumst. Nunc eget imperdiet ex. Curabitur non ex in nibh ultricies vestibulum id id neque. Phasellus ac tempor metus. Etiam pharetra sit amet nisi ut mollis. Nunc maximus risus sit amet enim bibendum tempus. Aliquam lorem purus, consequat nec orci vel, egestas venenatis tellus. Pellentesque placerat dolor eget tincidunt faucibus. Donec pulvinar rutrum nulla vitae placerat. Aenean malesuada leo ante, a vehicula nulla mattis sit amet. Nulla id est ante. Cras eu luctus sapien. Curabitur sollicitudin lacus eu bibendum venenatis. Vestibulum vestibulum eros nulla, sit amet condimentum odio molestie vitae. Nunc aliquam varius enim, vel placerat nulla dignissim at. Nulla id vulputate nunc. Maecenas et mattis nisl. Donec condimentum leo vitae scelerisque euismod. Nullam nibh neque, maximus sit amet eleifend quis, facilisis eu elit. Suspendisse viverra, odio id placerat varius, ipsum ligula varius arcu, non volutpat mauris ligula et quam. Nulla facilisi. Sed blandit luctus tortor. Morbi suscipit metus at nunc placerat aliquam. Integer pharetra ligula at nulla faucibus viverra. Cras consectetur placerat euismod. Morbi et velit auctor, convallis nulla eget, consectetur nibh. Fusce aliquam fringilla tellus vel sagittis. Integer mauris ante, malesuada eget lacus ut, convallis pharetra massa. Aliquam volutpat ullamcorper bibendum. Pellentesque nec accumsan enim. Vivamus sit amet rutrum ligula, auctor rhoncus augue. Aliquam ut magna porta, suscipit dolor eget, molestie nisl. Donec egestas nunc vitae efficitur semper. Proin rhoncus nulla augue, eu tristique arcu efficitur eget. Suspendisse porttitor ultricies odio, ac mattis arcu. Etiam quis sapien nec lacus sollicitudin finibus. Nulla odio neque, venenatis nec lorem sed, facilisis eleifend ligula. Quisque gravida quis ligula eu pellentesque. Integer iaculis rhoncus sem vehicula pretium. Sed ultricies leo id elit accumsan ultricies. Integer feugiat elit eget felis scelerisque, eu dignissim nunc suscipit. Curabitur venenatis pellentesque lacus quis accumsan. Proin vel malesuada tellus, nec dapibus leo. Nulla feugiat augue quis aliquet ultricies. Proin laoreet dolor nec eros pretium tempus. Vivamus accumsan non mauris vitae commodo. Vivamus nisi diam, commodo id nunc cursus, dapibus gravida elit. Praesent ut sapien eu dolor feugiat molestie. Quisque nec gravida eros. Donec sapien dolor, consectetur quis fringilla vel, vehicula vitae purus. Sed at velit et nunc viverra aliquet. Nunc cursus viverra felis, vitae fermentum elit dignissim nec. Nunc in efficitur eros. Integer interdum ipsum vel justo tincidunt, nec dignissim sem iaculis. Vestibulum eget ligula tristique, elementum ipsum a, lobortis sapien. Sed a molestie leo, non fermentum lorem. Donec volutpat fringilla egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin sit amet fermentum lectus. Cras convallis orci non dolor mattis, sed volutpat erat dapibus. Curabitur rutrum ut diam vitae tincidunt. Praesent ex neque, bibendum eget ex eget, cursus lacinia nisi. Maecenas accumsan, est a mattis ultricies, turpis ex ultricies risus, bibendum imperdiet lacus est eget tortor. Sed erat est, vestibulum ut ultrices quis, viverra sed dui. Aliquam nec odio eget est rutrum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin viverra ac lectus tincidunt faucibus. Ut semper orci id neque consectetur, et porttitor ligula tincidunt. Praesent lacinia enim a diam efficitur vestibulum. Sed semper ligula ligula, quis semper mi rhoncus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id vulputate leo, rutrum luctus justo. Etiam mauris turpis, pellentesque eu elit vel, fermentum mollis odio. Aliquam tincidunt euismod lectus ut tempor. Nunc facilisis odio at condimentum congue. Aliquam eleifend sapien et nisl facilisis, in cursus magna accumsan. Duis et ipsum elit. Nulla facilisi. Mauris tempus accumsan erat, eget sagittis sapien maximus a. Etiam in felis ac arcu cursus tempor. Vivamus eget euismod metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent viverra facilisis tellus, non consequat sapien cursus id. Morbi mollis nec quam vitae efficitur. Aenean pulvinar vestibulum cursus. Proin eu tellus tincidunt, placerat est et, lacinia purus. Nunc quam nisl, volutpat a tincidunt eu, pharetra sit amet tortor. Donec risus nibh, mollis ut euismod a, posuere scelerisque ligula. Etiam pulvinar convallis imperdiet. Sed a aliquam leo. Phasellus lobortis eu magna quis mattis. Vestibulum feugiat sed felis eget mattis. Vestibulum luctus tellus eget tortor tempor molestie. Nulla suscipit ex lectus, eu aliquam augue venenatis vitae. Sed diam odio, viverra nec fringilla et, scelerisque id tellus. Vestibulum convallis lacinia sollicitudin. Morbi semper tellus id nibh suscipit elementum. Aenean at efficitur risus, id mattis ante. Sed sed imperdiet felis, vitae ultricies enim. Duis eu interdum urna. Morbi sit amet tristique nibh. Nulla consequat dui a facilisis consectetur. Aliquam aliquam elementum consectetur. Cras auctor dictum eros, quis dictum nisi suscipit eget. Proin eu purus ullamcorper nulla blandit tempor eget vitae tortor. Proin feugiat odio vel felis posuere blandit. Proin vitae sagittis magna. Donec efficitur rhoncus enim, vel posuere lorem sagittis a.",
      pages: 1
    },
    {
      id: 2,
      title: "Chapter 2 | the Middle",
      url: "/chapter/2",
      name: "The begining",
      content: "consectetur adipiscing elit. Etiam sed risus sed enim fringilla sollicitudin. Praesent urna nisi, cursus in quam ac, tristique condimentum magna. Nullam semper rutrum tellus, ut malesuada ante vehicula in. In hac habitasse platea dictumst. Nunc eget imperdiet ex. Curabitur non ex in nibh ultricies vestibulum id id neque. Phasellus ac tempor metus. Etiam pharetra sit amet nisi ut mollis. Nunc maximus risus sit amet enim bibendum tempus. Aliquam lorem purus, consequat nec orci vel, egestas venenatis tellus. Pellentesque placerat dolor eget tincidunt faucibus. Donec pulvinar rutrum nulla vitae placerat. Aenean malesuada leo ante, a vehicula nulla mattis sit amet. Nulla id est ante. Cras eu luctus sapien. Curabitur sollicitudin lacus eu bibendum venenatis. Vestibulum vestibulum eros nulla, sit amet condimentum odio molestie vitae. Nunc aliquam varius enim, vel placerat nulla dignissim at. Nulla id vulputate nunc. Maecenas et mattis nisl. Donec condimentum leo vitae scelerisque euismod. Nullam nibh neque, maximus sit amet eleifend quis, facilisis eu elit. Suspendisse viverra, odio id placerat varius, ipsum ligula varius arcu, non volutpat mauris ligula et quam. Nulla facilisi. Sed blandit luctus tortor. Morbi suscipit metus at nunc placerat aliquam. Integer pharetra ligula at nulla faucibus viverra. Cras consectetur placerat euismod. Morbi et velit auctor, convallis nulla eget, consectetur nibh. Fusce aliquam fringilla tellus vel sagittis. Integer mauris ante, malesuada eget lacus ut, convallis pharetra massa. Aliquam volutpat ullamcorper bibendum. Pellentesque nec accumsan enim. Vivamus sit amet rutrum ligula, auctor rhoncus augue. Aliquam ut magna porta, suscipit dolor eget, molestie nisl. Donec egestas nunc vitae efficitur semper. Proin rhoncus nulla augue, eu tristique arcu efficitur eget. Suspendisse porttitor ultricies odio, ac mattis arcu. Etiam quis sapien nec lacus sollicitudin finibus. Nulla odio neque, venenatis nec lorem sed, facilisis eleifend ligula. Quisque gravida quis ligula eu pellentesque. Integer iaculis rhoncus sem vehicula pretium. Sed ultricies leo id elit accumsan ultricies. Integer feugiat elit eget felis scelerisque, eu dignissim nunc suscipit. Curabitur venenatis pellentesque lacus quis accumsan. Proin vel malesuada tellus, nec dapibus leo. Nulla feugiat augue quis aliquet ultricies. Proin laoreet dolor nec eros pretium tempus. Vivamus accumsan non mauris vitae commodo. Vivamus nisi diam, commodo id nunc cursus, dapibus gravida elit. Praesent ut sapien eu dolor feugiat molestie. Quisque nec gravida eros. Donec sapien dolor, consectetur quis fringilla vel, vehicula vitae purus. Sed at velit et nunc viverra aliquet. Nunc cursus viverra felis, vitae fermentum elit dignissim nec. Nunc in efficitur eros. Integer interdum ipsum vel justo tincidunt, nec dignissim sem iaculis. Vestibulum eget ligula tristique, elementum ipsum a, lobortis sapien. Sed a molestie leo, non fermentum lorem. Donec volutpat fringilla egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin sit amet fermentum lectus. Cras convallis orci non dolor mattis, sed volutpat erat dapibus. Curabitur rutrum ut diam vitae tincidunt. Praesent ex neque, bibendum eget ex eget, cursus lacinia nisi. Maecenas accumsan, est a mattis ultricies, turpis ex ultricies risus, bibendum imperdiet lacus est eget tortor. Sed erat est, vestibulum ut ultrices quis, viverra sed dui. Aliquam nec odio eget est rutrum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin viverra ac lectus tincidunt faucibus. Ut semper orci id neque consectetur, et porttitor ligula tincidunt. Praesent lacinia enim a diam efficitur vestibulum. Sed semper ligula ligula, quis semper mi rhoncus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id vulputate leo, rutrum luctus justo. Etiam mauris turpis, pellentesque eu elit vel, fermentum mollis odio. Aliquam tincidunt euismod lectus ut tempor. Nunc facilisis odio at condimentum congue. Aliquam eleifend sapien et nisl facilisis, in cursus magna accumsan. Duis et ipsum elit. Nulla facilisi. Mauris tempus accumsan erat, eget sagittis sapien maximus a. Etiam in felis ac arcu cursus tempor. Vivamus eget euismod metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent viverra facilisis tellus, non consequat sapien cursus id. Morbi mollis nec quam vitae efficitur. Aenean pulvinar vestibulum cursus. Proin eu tellus tincidunt, placerat est et, lacinia purus. Nunc quam nisl, volutpat a tincidunt eu, pharetra sit amet tortor. Donec risus nibh, mollis ut euismod a, posuere scelerisque ligula. Etiam pulvinar convallis imperdiet. Sed a aliquam leo. Phasellus lobortis eu magna quis mattis. Vestibulum feugiat sed felis eget mattis. Vestibulum luctus tellus eget tortor tempor molestie. Nulla suscipit ex lectus, eu aliquam augue venenatis vitae. Sed diam odio, viverra nec fringilla et, scelerisque id tellus. Vestibulum convallis lacinia sollicitudin. Morbi semper tellus id nibh suscipit elementum. Aenean at efficitur risus, id mattis ante. Sed sed imperdiet felis, vitae ultricies enim. Duis eu interdum urna. Morbi sit amet tristique nibh. Nulla consequat dui a facilisis consectetur. Aliquam aliquam elementum consectetur. Cras auctor dictum eros, quis dictum nisi suscipit eget. Proin eu purus ullamcorper nulla blandit tempor eget vitae tortor. Proin feugiat odio vel felis posuere blandit. Proin vitae sagittis magna. Donec efficitur rhoncus enim, vel posuere lorem sagittis a.",
      pages: 1
    },
    {
      id: 3,
      name: "The begining",
      title: "Chapter 3 | the End",
      url: "/chapter/3",
      content: "tristique condimentum magna. Nullam semper rutrum tellus, ut malesuada ante vehicula in. In hac habitasse platea dictumst. Nunc eget imperdiet ex. Curabitur non ex in nibh ultricies vestibulum id id neque. Phasellus ac tempor metus. Etiam pharetra sit amet nisi ut mollis. Nunc maximus risus sit amet enim bibendum tempus. Aliquam lorem purus, consequat nec orci vel, egestas venenatis tellus. Pellentesque placerat dolor eget tincidunt faucibus. Donec pulvinar rutrum nulla vitae placerat. Aenean malesuada leo ante, a vehicula nulla mattis sit amet. Nulla id est ante. Cras eu luctus sapien. Curabitur sollicitudin lacus eu bibendum venenatis. Vestibulum vestibulum eros nulla, sit amet condimentum odio molestie vitae. Nunc aliquam varius enim, vel placerat nulla dignissim at. Nulla id vulputate nunc. Maecenas et mattis nisl. Donec condimentum leo vitae scelerisque euismod. Nullam nibh neque, maximus sit amet eleifend quis, facilisis eu elit. Suspendisse viverra, odio id placerat varius, ipsum ligula varius arcu, non volutpat mauris ligula et quam. Nulla facilisi. Sed blandit luctus tortor. Morbi suscipit metus at nunc placerat aliquam. Integer pharetra ligula at nulla faucibus viverra. Cras consectetur placerat euismod. Morbi et velit auctor, convallis nulla eget, consectetur nibh. Fusce aliquam fringilla tellus vel sagittis. Integer mauris ante, malesuada eget lacus ut, convallis pharetra massa. Aliquam volutpat ullamcorper bibendum. Pellentesque nec accumsan enim. Vivamus sit amet rutrum ligula, auctor rhoncus augue. Aliquam ut magna porta, suscipit dolor eget, molestie nisl. Donec egestas nunc vitae efficitur semper. Proin rhoncus nulla augue, eu tristique arcu efficitur eget. Suspendisse porttitor ultricies odio, ac mattis arcu. Etiam quis sapien nec lacus sollicitudin finibus. Nulla odio neque, venenatis nec lorem sed, facilisis eleifend ligula. Quisque gravida quis ligula eu pellentesque. Integer iaculis rhoncus sem vehicula pretium. Sed ultricies leo id elit accumsan ultricies. Integer feugiat elit eget felis scelerisque, eu dignissim nunc suscipit. Curabitur venenatis pellentesque lacus quis accumsan. Proin vel malesuada tellus, nec dapibus leo. Nulla feugiat augue quis aliquet ultricies. Proin laoreet dolor nec eros pretium tempus. Vivamus accumsan non mauris vitae commodo. Vivamus nisi diam, commodo id nunc cursus, dapibus gravida elit. Praesent ut sapien eu dolor feugiat molestie. Quisque nec gravida eros. Donec sapien dolor, consectetur quis fringilla vel, vehicula vitae purus. Sed at velit et nunc viverra aliquet. Nunc cursus viverra felis, vitae fermentum elit dignissim nec. Nunc in efficitur eros. Integer interdum ipsum vel justo tincidunt, nec dignissim sem iaculis. Vestibulum eget ligula tristique, elementum ipsum a, lobortis sapien. Sed a molestie leo, non fermentum lorem. Donec volutpat fringilla egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin sit amet fermentum lectus. Cras convallis orci non dolor mattis, sed volutpat erat dapibus. Curabitur rutrum ut diam vitae tincidunt. Praesent ex neque, bibendum eget ex eget, cursus lacinia nisi. Maecenas accumsan, est a mattis ultricies, turpis ex ultricies risus, bibendum imperdiet lacus est eget tortor. Sed erat est, vestibulum ut ultrices quis, viverra sed dui. Aliquam nec odio eget est rutrum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin viverra ac lectus tincidunt faucibus. Ut semper orci id neque consectetur, et porttitor ligula tincidunt. Praesent lacinia enim a diam efficitur vestibulum. Sed semper ligula ligula, quis semper mi rhoncus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam id vulputate leo, rutrum luctus justo. Etiam mauris turpis, pellentesque eu elit vel, fermentum mollis odio. Aliquam tincidunt euismod lectus ut tempor. Nunc facilisis odio at condimentum congue. Aliquam eleifend sapien et nisl facilisis, in cursus magna accumsan. Duis et ipsum elit. Nulla facilisi. Mauris tempus accumsan erat, eget sagittis sapien maximus a. Etiam in felis ac arcu cursus tempor. Vivamus eget euismod metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent viverra facilisis tellus, non consequat sapien cursus id. Morbi mollis nec quam vitae efficitur. Aenean pulvinar vestibulum cursus. Proin eu tellus tincidunt, placerat est et, lacinia purus. Nunc quam nisl, volutpat a tincidunt eu, pharetra sit amet tortor. Donec risus nibh, mollis ut euismod a, posuere scelerisque ligula. Etiam pulvinar convallis imperdiet. Sed a aliquam leo. Phasellus lobortis eu magna quis mattis. Vestibulum feugiat sed felis eget mattis. Vestibulum luctus tellus eget tortor tempor molestie. Nulla suscipit ex lectus, eu aliquam augue venenatis vitae. Sed diam odio, viverra nec fringilla et, scelerisque id tellus. Vestibulum convallis lacinia sollicitudin. Morbi semper tellus id nibh suscipit elementum. Aenean at efficitur risus, id mattis ante. Sed sed imperdiet felis, vitae ultricies enim. Duis eu interdum urna. Morbi sit amet tristique nibh. Nulla consequat dui a facilisis consectetur. Aliquam aliquam elementum consectetur. Cras auctor dictum eros, quis dictum nisi suscipit eget. Proin eu purus ullamcorper nulla blandit tempor eget vitae tortor. Proin feugiat odio vel felis posuere blandit. Proin vitae sagittis magna. Donec efficitur rhoncus enim, vel posuere lorem sagittis a.",
      pages: 1
    }
  ]
  contentNum: number = 1;

  findPageAmount() {
    let pageCount = 0;
    let maxWords = 120;
    

    for (let index = 0; index < this.chapters.length; index++) {
      const chapter = this.chapters[index];
      let text = chapter.content;
      let wordsArray = text.split(" ");
      let tempArray = [];
      let count = 0;
      
      for (let index = 0; index < wordsArray.length; index++) {
        const element = wordsArray[index]; // every word
        tempArray.push(element);
        
        if(count >= maxWords) {
          count = 0;
          pageCount++;
        }
        if(index == wordsArray.length -1) {
          chapter.pages = pageCount;
          tempArray = [];
          pageCount = 0; 
        }
        
        count++;
      }
    }
  }

  FindPageDifference(id, numOfPages) {
    let pagesToDelete = 0;
    for (let index = 0; index < id-1; index++) {
      const element = this.chapters[index];
      pagesToDelete += element.pages;
    }

    return pagesToDelete;
  }

  SetContentNum(num) {
    this.contentNum = num;
  }
  getContentNum(): number {
    return this.contentNum;
  }
  constructor() { 
    this.findPageAmount();
  }

  SetPageNumber(number) {
    this.pagenumber = number;
  }
  GetPageNumber() {
    return this.pagenumber;
  }
  SetChapterNumber(number) {
    this.chapter = number;
  }
  GetChapterNumber() {
    return this.chapter;
  }

  GetChapterContent (id): Chapter {
    id--;
    let arr = this.chapters.slice();
    let chapter = arr.splice(id, 1);
    return chapter[0];
  }

  GetChapters(): Chapter[] {
    let arr = this.chapters.slice();
    return arr;
  }

}
