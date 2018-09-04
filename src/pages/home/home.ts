import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SportNewsProvider} from '../../providers/sport-news/sport-news';
import { MenuPage } from '../../pages/menu/menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[SportNewsProvider]

})
export class HomePage {
  public news: any;


  constructor(public navCtrl: NavController,public sportService: SportNewsProvider) {
    this.loadNews();
  }

  openModal(){
    this.navCtrl.push(MenuPage);
  }

  loadNews(){
    this.sportService.load()
    .then(data => {
      this.news = data.articles.map((item,index) => {
        if(item.title && item.description && item.urlToImage){
          return {
            author:item.author,
            title:item.title.length > 30 ? this.cutString(item.title,30) : item.title,
            description: item.description.length > 50 ? this.cutString(item.description,50) : item.description,
            urlToImage: item.urlToImage,
            url:item.url
          }
        }else{
          return ''
        }
      })
    });
  }

  cutString(textData:string,numSlice:number): string{
    return textData.slice(0,numSlice)+"..."
  }


}
