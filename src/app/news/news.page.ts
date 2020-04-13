import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news;

  constructor(private apiSvc: ApiService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.apiSvc.getNews().subscribe((data) => {
      this.news = data['articles'];
    });
  }
}
