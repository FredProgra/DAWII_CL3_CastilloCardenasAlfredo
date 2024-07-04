import { Component } from '@angular/core';
import { MaterialModule } from '../../app-meterial/app-meterial.module';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { EpisodeResponse } from '../espisodeResponse';
import { Episode } from '../espisode';
import { CommonModule } from '@angular/common'; 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-episodios-id',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './episodios-id.component.html',
  styleUrl: './episodios-id.component.css'
})
export class EpisodiosIDComponent {
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode','characters','url','created'];
  /*dataSource = ELEMENT_DATA;*/
  espisodes:Episode[]=[]
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        console.log('Raw data:', data);
        // Asegúrate de que data.results es un array
        if (Array.isArray(data.results)) {
          // Filtrar episodios con ID impar
          this.espisodes= data.results.filter((episode: Episode) => episode.id % 2 !== 0);
        } else {
          console.error('Expected data.results to be an array');
        }
      },
      error: (err) => console.error('Error fetching episodes', err)
    });
  }


}
