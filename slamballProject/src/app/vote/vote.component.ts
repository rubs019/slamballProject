import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  nosVilles;

  constructor(
    private local : LocalstorageService
  ) { }

  ngOnInit() {
    let villes = this.local.getVilles();

    if(villes){

     this.nosVilles = JSON.parse(villes)
    }else{

      this.local.setVilles()
    }
  }

  addVille(name) {
    this.nosVilles.push(
      {
        'name' : name,
        'nbVote' : 1,
      }
    )
    this.local.setVilles(this.nosVilles)

  }
  addVote() {

  }

}
