import { Component, OnInit, NgZone } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  getId:any;
  updateForm:FormGroup;

  constructor(public formBuider:FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudService.GetProduct(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          price: res['price'],
          detail: res['detail']
        })
      })
      this.updateForm = this.formBuider.group({
        name: [''],
        price: [''],
        detail: ['']
      })
    }

  ngOnInit(): void {
  }
  onUpdate():any{
    this.crudService.EditProduct(this.getId, this.updateForm.value).subscribe(()=>{
      console.log('Updated');
      this.ngZone.run(()=>this.router.navigateByUrl('/product'))
    },(err)=>{
      console.log(err);
    })
    
  }
}
