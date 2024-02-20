import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Club {
  name: string
  code: string
  country: string
  id: string
}
@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [
  ],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})



export class CompetitionsComponent implements OnInit {
  clubs: Club[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Club[]>('http://localhost:3000/clubs').subscribe(clubs => {
      this.clubs = clubs;
      console.log('Clubs', clubs);
    });
  }
}


