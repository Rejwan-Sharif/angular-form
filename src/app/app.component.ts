import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-practice-1';

  id:number= 0;
  name:string='';
  email:string='';
  round:number=0;
  isIt:boolean=false;


  student:any=[
   
  ];

  data(value:any){
    this.id=this.student[value].id
    this.name=this.student[value].name
    this.email=this.student[value].email
    this.round=this.student[value].round
  }
    

  addStudent(){
    this.student.push({ id:this.id,name:this.name,email:this.email,round:this.round})
  }

  deleteStudent(value:any){
    for(let i=0; i<this.student.length; i++){
      if(value==this.student[i].id){
        this.student.splice(i, 1);
      }
    }
  }

  updateStudent(id:any,name:any,email:any, round:any){
    this.student=this.student.filter(
      function(e:any){
        return e.id!==id;
      }
    );
    this.student.push({id:this.id, name:this.name, email:this.email, round:this.round});
  }

  getStudent(m:any){
    this.id = m.id;
    this.name = m.name;
    this.email = m.email;
    this.round = m.round;
  }

}
