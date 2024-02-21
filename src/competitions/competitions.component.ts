import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Club, TeamService} from "./team.service";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [RouterOutlet
  ],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})



export class CompetitionsComponent implements OnInit {
  teamService: TeamService = inject(TeamService);


  constructor(private http: HttpClient) {
  }

  addClub(club: Club) {
    const clubName = `club ${club.id}`;
    this.teamService.addClub({code: club.code, country: club.country, id: club.id, name: club.name});
  }

  get clubs() {
    return this.teamService.clubs;
  }

  ngOnInit = (): void => {
    this.http.get<Club[]>('http://localhost:3000/clubs').subscribe(clubs => {
      this.clubs.update(clubs => [...clubs, club]);
      console.log('Clubs', clubs);
    });
  };




}



