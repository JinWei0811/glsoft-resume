import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {User} from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuEnglish: any = {
    home: '主頁',
    profile: '關於我',
    skills: '相關技能',
    resume: '學歷/經歷',
  };

  public menu: any = this.menuEnglish;

  isNavbarCollapsed: boolean = true;
  English: boolean = true;
  @Output() lenguage: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
  }
}
