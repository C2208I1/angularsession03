import { Component } from '@angular/core';
import { faCoffee,faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    in4:any = {};
    faHeart = faHeart;
    listEx = [
      {id:1,fullName:'Đinh Hương',wishList:false,image:'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',adress:"Thái Bình"},
      {id:2,fullName:'Quên Lê',wishList:false,image:'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',adress:"Thái Bình"},
      {id:3,fullName:'Minh Phươn',wishList:false,image:'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',adress:"Thái Bình"},
      {id:4,fullName:'Lan Thy',wishList:false,image:'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',adress:"Thái Bình"},
      {id:5,fullName:'Hồng Ngát',wishList:false,image:'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',adress:"Thái Bình"},
    ]

    constructor(private toastr: ToastrService) {}

    detail(item:any):void{
      this.in4 = item;
      console.log(this.in4)
      $("#modelId").modal('show');
    }

    wishList(id:number):void{
        this.listEx.forEach((item)=>{
          if(item.id === id){
              item.wishList = !item.wishList;
              if( item.wishList) {
                  this.toastr.success(item.fullName,'Đã yêu');
              } else{
                this.toastr.error(item.fullName,"Hết yêu em ròi")
              }
             
             
          }
        })
        
         
        
    }
}
