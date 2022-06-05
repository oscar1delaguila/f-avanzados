import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stadium } from 'src/app/models/stadium.interface';
import { Stadiums } from 'src/app/models/stadiums.interface';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.scss']
})
export class StadiumListComponent implements OnInit {

  stadiums!:Stadiums;
  loaded:boolean = false;

  constructor( private stadiumsService: StadiumsService) { }

  ngOnInit(): void {

    this.stadiumsService.getAllStadiums().subscribe({

      next:(stadiums: Stadiums) => {
        if (stadiums)
          this.stadiums = stadiums;
          this.loaded = true;
          console.log(this.stadiums);
      }
    });
  }

}
