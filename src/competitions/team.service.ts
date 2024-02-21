import {Injectable, signal} from "@angular/core";


export interface Club {
  name: string
  code: string
  country: string
  id: number
}

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  clubs = signal<Club[]>([]);

  constructor() {
  }

  addClub(club: Club) {
    this.clubs.update(clubs => [...clubs, club]);
  }
}
