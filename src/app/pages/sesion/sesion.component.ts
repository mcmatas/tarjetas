import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styles: [
  ]
})
export class SesionComponent implements OnInit {

  public currentTrimestre: any;

  constructor(private activatedRoute: ActivatedRoute,
              private trimestreService: TrimestreService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({ trimestre }) => this.getTrimestre( trimestre ) )
  }

  getTrimestre( num: string ) {
    this.currentTrimestre = this.trimestreService.getTrimestre( parseInt(num) );
  }

}
