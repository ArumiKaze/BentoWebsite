import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currLang!: string;

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.currLang = this.generalService.GetLanguage();
  }
}
