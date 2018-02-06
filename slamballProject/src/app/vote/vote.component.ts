import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  nosVilles;
  hVoted;

  constructor(
    private local : LocalstorageService
  ) { }

  ngOnInit() {
    let villes = this.local.getVilles();

    if(villes){
      this.nosVilles = JSON.parse(villes)
      this.hVoted = JSON.parse(this.local.hasVotedQ())
    }else{
      this.local.setVilles()
    }
  }

  addVille(name) {
    this.nosVilles.push(
      {
        'name' : name,
        'nbVote' : 1
      }
    )
    this.local.setVilles(this.nosVilles, this.hVoted)
  }
  addVote(name) {
    var villes = this.nosVilles;

    for (var i = 0; i < villes.length; i++) {

      if(name === villes[i].name){
        villes[i].nbVote += 1;
        this.hVoted = true;
        break;
      }
    }
    localStorage.setItem("nosVilles", JSON.stringify(villes));
    localStorage.setItem("hasVoted", this.hVoted);
  }
}
