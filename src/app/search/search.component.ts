import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { RootObject } from '../index/model/meme';
import { MemeserviceService } from '../services/memeservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public memes:RootObject;

  public rechercheForm: FormGroup;
  public afficher:boolean;
  constructor(private formBuilder: FormBuilder,
    private memeservice:MemeserviceService) { }

  ngOnInit(): void {
    this.rechercheForm = this.formBuilder.group({
      question: '',
      limit: '',
     
    });
    this.afficher=false;
    document.getElementById("search").classList.add('active');
    document.getElementById("home").classList.remove('active');
    document.getElementById("trends").classList.remove('active');
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


}
