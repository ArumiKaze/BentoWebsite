import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private currLang: string = "EN";

  constructor() { }

  GetLanguage(): string {
    return this.currLang;
  }
}
