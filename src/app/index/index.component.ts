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

 public memes:RootObject;

  public rechercheForm: FormGroup;
  public afficher:boolean;
  public translate:boolean;
  public trends:trends;
  public translateObject:translate;
  public translateform:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private memeservice:MemeserviceService) { }

  ngOnInit(): void {
    this.rechercheForm = this.formBuilder.group({
      question: '',
      limit: '',
     
    });
    this.translateform=this.formBuilder.group({
    
      limit:''
    });
    this.afficher=false;
    this.translate=false;

  }


  onSubmitForm() {
    const formValue = this.rechercheForm.value;
    let question=formValue['question'];
    let limit=formValue['limit'];
 
    this.memeservice.getGifs(question,limit).subscribe(
      data=>{
        this.memes=data,
        this.afficher=true;
        //console.log("memes = "+this.memes.data[1].images.url);
      }
    )
    
  }

  translateS(){
    const formValue = this.translateform.value;
    let limit=formValue['limit'];
    this.memeservice.tranding(limit).subscribe(
      data=>{
        this.translate=true,
        this.trends=data
      }
    )

  }


}
