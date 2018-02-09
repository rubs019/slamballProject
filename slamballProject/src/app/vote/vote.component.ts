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
      this.nosVilles = JSON.parse(villes);
      this.hVoted = JSON.parse(this.local.hasVotedQ())
    }else{
      this.local.setVilles()
    }
  }

  addVille(name) {

    this.switchSelect();

    this.nosVilles.push(
      {
        'name' : name,
        'nbVote' : 1,
        'isWanted': true
      }
    );
    this.local.setVilles(this.nosVilles, this.hVoted);

    localStorage.setItem("nosVilles", JSON.stringify(this.nosVilles));
    localStorage.setItem("hasVoted", this.hVoted);
  }
  addVote(name) {
    var villes = this.nosVilles;
    for (var i = 0; i < villes.length; i++) {

      if(villes[i].isWanted === true) {
        break;
      }
      else if(name === villes[i].name){
        villes[i].nbVote += 1;
        villes[i].isWanted = true;
        this.hVoted = true;
        break;
      }
    }
    localStorage.setItem("nosVilles", JSON.stringify(villes));
    localStorage.setItem("hasVoted", this.hVoted);
  }

  addVote2(ville) {
    let primaryIndex = null;

    // Recupère l'index de l'élément selectionner
    this.nosVilles.filter((city, index) => {
      if (city.name === ville.name){ primaryIndex = index }
    });

    // Retire un vote a l'élément précédemment selectionner
    // Passe tous les élément a false
    this.nosVilles.filter((city, index) => {
      if (city.isWanted){ this.nosVilles[index].nbVote-- }
      city.isWanted = false
    });

    // Intervertis la valeur de l'élément selectionner
    this.nosVilles[primaryIndex].isWanted = !this.nosVilles[primaryIndex].isWanted;
    this.nosVilles[primaryIndex].isWanted ? this.nosVilles[primaryIndex].nbVote++ : this.nosVilles[primaryIndex].nbVote--;

    localStorage.setItem("nosVilles", JSON.stringify(this.nosVilles));
    localStorage.setItem("hasVoted", this.hVoted);
  }

  private switchSelect() {
    let primaryIndex;

    // Recupère l'index de l'élément selectionner
    this.nosVilles.filter((city, index) => {
      if (city.name === name){ primaryIndex = index }
    });

    // Retire un vote a l'élément précédemment selectionner
    // Passe tous les élément a false
    this.nosVilles.filter((city, index) => {
      if (city.isWanted){ this.nosVilles[index].nbVote-- }
      city.isWanted = false
    });
  }
}
