import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  @Input() English: any;

  public headEnglish: any = { title: '專業技能', subtitle: '' };
  public head: any = this.headEnglish;

  public skill_1: any = [
    [
      {
        title: 'Angular',
        progress: 90,
      },
    ],
    [
      {
        title: 'HTML',
        progress: 95,
      },
    ],
    [
      {
        title: 'Typescript',
        progress: 95,
      },
    ],
    [
      {
        title: 'CSS',
        progress: 80,
      },
    ],
  ];

  public skill_2: any = [
    [
      {
        title: 'Java(Spring Boot)',
        progress: 90,
      },
    ],
    [
      {
        title: 'Node.js',
        progress: 90  ,
      },
    ],
    [
      {
        title: '.Net',
        progress: 80  ,
      },
    ],
  ];

  public skill_3: any = [
    [
      {
        title: 'MongoDB',
        progress: 95,
      },
    ],
    [
      {
        title: 'My SQL',
        progress: 95,
      },
    ],
  ];

  public skillEnglish: any = [
    { title: '前端', info: this.skill_1 },
    { title: '後端', info: this.skill_2 },
    { title: '資料庫', info: this.skill_3 },
  ];
  // END ENGLISH

  // DEFAULT
  public skills: any = this.skillEnglish;

  ngOnInit() {}
}
