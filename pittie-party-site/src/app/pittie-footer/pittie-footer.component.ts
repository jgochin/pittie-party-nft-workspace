import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pittie-footer',
  templateUrl: './pittie-footer.component.html',
  styleUrls: ['./pittie-footer.component.scss']
})
export class PittieFooterComponent implements OnInit {
  title: string = "Pitty Party Footer Goes here"

  constructor() { }

  ngOnInit(): void {
  }

}
