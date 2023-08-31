import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
})
export class HeadlineComponent implements OnInit {
  public name: string = '莊晉瑋';

  public title = '軟體工程師';
  constructor() {}

  ngOnInit() {}
}
