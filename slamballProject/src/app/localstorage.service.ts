import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  hasVoted;

  villes = [
    {
      'name' : 'Paris',
      'nbVote' : 240,
    },
    {
      'name' : 'Bordeaux',
      'nbVote' : 40,
    },
    {
      'name' : 'Lyon',
      'nbVote' : 123,
    },
    {
      'name' : 'Grenoble',
      'nbVote' : 455,
    },
    {
      'name' : 'Dijon',
      'nbVote' : 345,
    },
    {
      'name' : 'Nice',
      'nbVote' : 12345,
    }
  ];

  setVilles(listVilles = this.villes) {
    localStorage.setItem("nosVilles", JSON.stringify(listVilles));
    localStorage.setItem("hasVoted", JSON.stringify(this.hasVoted));
  }
  getVilles() {
    return localStorage.getItem("nosVilles");
  }
  hasVotedQ() {
    return localStorage.getItem("hasVoted");
  }
}
