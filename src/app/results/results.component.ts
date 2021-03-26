import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular.json-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  @Input() childResult:number;

  ngOnInit(): void {
  }

}
