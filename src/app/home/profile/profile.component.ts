import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public titleEnglish: string = 'TITLE';
  public subtitleEnglish: string = 'SUB TITLE';

  public title = this.titleEnglish;
  public subtitle = this.subtitleEnglish;

  // You can use a HTML tags in 'data'
  public profileEnglish: any = {
    title: '',
    data:
      `<p>【關於我】
      我是一位出生於1996年的高雄人。我的個性比較慢熟，但在人際交往方面沒有問題。當我下定決心要做某件事情時，我會全力以赴，毅力和不屈不撓的精神是我的優勢，能夠讓我不斷努力達成目標。我的持之以恒反映出我對工作的認真態度和高要求。` +
      `<BR>【樂於學習】
      在多年的軟體工程師生涯中，除了在工作上累積了程式開發的經驗。同時，我也喜歡將所學應用到自己感興趣的領域。在我製作的 Side Project 中，我開發了 Chrome Extension，目前仍有約1700人在使用；我也使用 Node.js 開發了對話機器人，並部署到 Heroku 和 Render 上，巔峰時約有2000人使用。
      因為對全端程式開發有濃厚的興趣，我希望能夠不斷提升自己的專業技能。因此，我持續精進前端的畫面設計，參加了 The F2E 相關活動。同時，我也閱讀相關演算法書籍，積極學習 Docker 佈署工具等技術。</p>`,
    contact: '聯絡資訊',
    sp: '社群網站',
  };

  public profile = this.profileEnglish;
  @Input() English: any;
  constructor() {}

  ngOnInit() {}
}
