import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stadium } from 'src/app/models/stadium.interface';
import { StadiumsService } from 'src/app/services/stadiums.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {

  stadium!: Stadium;
  showDetails:boolean = false;

  constructor(
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private stadiumsService: StadiumsService
    ) { }

  ngOnInit(): void {

    const identifier:string = <string>this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ', identifier );

    this.stadiumsService.getStadiumById(identifier).subscribe({

      next:(stadium:Stadium) => {
        this.stadium = stadium;
      },
      error:()=> {
        return this.router.navigateByUrl('/');
      }

    });
  }

  showAllDetails():void {

    this.showDetails = !this.showDetails;

  }


}
