import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemeserviceService } from '../services/memeservice.service';
import {  RootObject } from './model/meme';
import { trends } from './model/tranding';
import { translate } from './model/translate';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  

  }




}
