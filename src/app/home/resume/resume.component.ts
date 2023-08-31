import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  @Input() English: any;

  public jobs: any = [];
  jobsEnglish: Job[];

  public headEnglish: any = {
    title: 'RESUME',
    subtitle: '學歷/經歷',
  };
  public head: any = this.headEnglish;

  constructor() {
    const job_1: Job = new Job(
      '',
      '2023/05-present',
      '資旅軟體開發有限公司',
      '<P>前端工程師(Angular)</P>',
      1
    );
    const job_2: Job = new Job(
      '',
      '2020/10-2023/03',
      '極簡科技股份有限公司',
      `<P>全端工程師(Angular/Java)</P> 
      <ul>
        <li>舊專案改寫並新增功能 (Angular/Java + MongoDB)</li>
        <li>舊資料轉檔 (MySQL > Mongodb，10萬筆以上資料)</li>
      </ul>`,
      1
    );

    const school_1: Job = new Job(
      '資訊工程研究所',
      '2018/09-2020/08',
      '國立東華大學',
      '碩士論文：<a href="https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22108NDHU5392019%22.&searchmode=basic" target="_blank">二步支配問題在區塊圖上之研究</a>',
      1
    );

    const school_2: Job = new Job(
      '資訊工程學系',
      '2018/09-2020/08',
      '國立台東大學',
      `<ul>
        <li>科技部計畫－研究助理(基於深度學習之後5G行動網路-子計畫四：基於深度學習之後5G行動邊緣霧運算研究)</li>
        <li>教育部計畫－研究助理(行動寬頻課程推廣計畫)</li>
      </ul>`,
      1
    );

    this.jobsEnglish = [job_1, job_2, school_1, school_2];
    this.jobs = this.jobsEnglish;
  }

  ngOnInit() {}
}
