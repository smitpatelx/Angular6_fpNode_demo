import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:ADDRESS;
  hobby:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran..');
    
  }

  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = ('smpatel');
    this.age = 19;
    this.email = 'smitpatel@xyz.com';
    this.address={
      street:'1589marina dr' , 
      city:'toronto',
      state:'ON'};
    this.hobby= ['football','keyboard','nature scene','photography'];

    this.dataService.getPosts().subscribe((posts)=>{
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    
    this.name='Smit';
    this.hobby.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobby.unshift(hobby); //.unshift
    return false;
  }

  toogleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface ADDRESS {
  street:string,
  city:string,
  state:string
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}


