import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trends } from '../index/model/tranding';
import { MemeserviceService } from '../services/memeservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {


  public translate:boolean;
  public trends:trends;
  public translateform:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private memeservice:MemeserviceService) { }
    
  ngOnInit(): void {
    this.translateform=this.formBuilder.group({
    
      limit:''
    });
    this.translate=false
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
