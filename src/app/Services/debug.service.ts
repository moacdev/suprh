import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  cardModels = [ "simple", "standard", "modern" ];

  constructor() { }
}
