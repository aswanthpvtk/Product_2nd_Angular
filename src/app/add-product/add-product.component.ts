import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  pcode=""
  pname=""
  brand=""
  mdate=""
  edate=""
  price=""
  sname=""
  dname=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"pcode":this.pcode,"pname":this.pname,"brand":this.brand,"mdate":this.mdate,"edate":this.edate,"price":this.price,"dname":this.dname}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Successfully added")
  
          this.pcode=""
  
          this.pname=""

          this.brand=""
  
          this.mdate=""
  
          this.edate=""
  
          this.price=""

          this.dname=""
  
        } else {
  
          alert("Something went wrong")
  
        }
      }
    )
  }

}

