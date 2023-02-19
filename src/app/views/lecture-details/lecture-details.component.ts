import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.scss']
})
export class LectureDetailsComponent {


  public id: any;
  public lecture: any;
  public subContainerView: any;
  public lectureQuestionList: Array<{}> = [];
  constructor(private _Activatedroute: ActivatedRoute,private _router: Router) {}
  
  ngOnInit() {
  
    this.loadLectureHomeWork(this.id)
    // this.lectureQuestionList=this.loadLectureHomeWork(this.id);
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    const arr: Array<{id:string,name: string, desc: string,link:string,questionsCount:number,viewsCount:number}> = [
      {
        "id":"1",
        "name":"المحاضرة الاولي",
        "desc":"محاضرة الضوء",
        "link":"www.google.com",
        "questionsCount":100,
        "viewsCount":5
      },
      {
        "id":"1",
        "name":"المحاضرة الاولي",
        "desc":"محاضرة الضوء",
        "link":"www.google.com",
        "questionsCount":100,
        "viewsCount":5
      }
      ,
      {
        "id":"2",
        "name":"المحاضرة الثانية ",
        "desc":"محاضرة الصوت",
        "link":"www.google.com",
        "questionsCount":30,
        "viewsCount":14
      },
      {
        "id":"3",
        "name":"المحاضرة الثالثة",
        "desc":"محاضرة الكهرباء الدينامكية ",
        "link":"www.google.com",
        "questionsCount":25,
        "viewsCount":48
      }
    ];
    //call api to get lecture details 
    this.lecture=arr[this.id]
    
}
loadLectureQuestions(id:any){
  this.subContainerView="الاسئلة";
}
loadLectureHomeWork(id:any){
  this.subContainerView="الواجب";

}
}
