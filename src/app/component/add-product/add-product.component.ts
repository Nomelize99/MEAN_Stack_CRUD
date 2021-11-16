import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router'
import { CrudService} from './../../service/crud.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: CrudService
  ) { 
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      detail: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.crudService.AddProduct(this.productForm.value)
    .subscribe(() => {
      console.log("Product Added");
      this.ngZone.run(()=>this.router.navigateByUrl('/product'))
    }, (err) => {
      console.log(err);
    })
  }

}
