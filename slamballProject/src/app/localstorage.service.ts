import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  hasVoted = false;

  villes = [
    {
      'name' : 'Paris',
      'nbVote' : 240,
      'isWanted' : false
    },
    {
      'name' : 'Bordeaux',
      'nbVote' : 40,
      'isWanted' : false
    },
    {
      'name' : 'Lyon',
      'nbVote' : 123,
      'isWanted' : false
    },
    {
      'name' : 'Grenoble',
      'nbVote' : 455,
      'isWanted' : false
    },
    {
      'name' : 'Dijon',
      'nbVote' : 345,
      'isWanted' : false
    },
    {
      'name' : 'Nice',
      'nbVote' : 12345,
      'isWanted' : false
    }
  ];

  setVilles(listVilles = this.villes, voteQ = this.hasVoted) {
    localStorage.setItem("nosVilles", JSON.stringify(listVilles));
    localStorage.setItem("hasVoted", JSON.stringify(voteQ));
  }
  getVilles() {
    return localStorage.getItem("nosVilles");
  }
  hasVotedQ() {
    return localStorage.getItem("hasVoted");
  }
}
