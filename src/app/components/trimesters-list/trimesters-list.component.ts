import { Component, OnInit } from '@angular/core';
import { Trimestre } from 'src/app/models/trimestre.model';
import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-trimesters-list',
  templateUrl: './trimesters-list.component.html',
  styles: [
  ]
})
export class TrimestersListComponent implements OnInit {

  public trimesters: Trimestre[] = [];

  constructor( private trimestreService: TrimestreService ) { }

  ngOnInit(): void {
    this.trimesters = this.trimestreService.getAllTrimestre();
  }

}
