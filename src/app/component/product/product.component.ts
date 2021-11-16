import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetProducts().subscribe((res)=>{
      console.log(res);
      this.product = res;
    })
  }
  
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Really?')) {
      this.crudService.DeleteProduct(id).subscribe((res)=>{
        this.product.splice(i,1);
      })
    }  
  }

}
