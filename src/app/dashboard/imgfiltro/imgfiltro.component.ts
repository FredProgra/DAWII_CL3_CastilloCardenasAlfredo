import { Component } from '@angular/core';
import { Post2 } from '../post2';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../app-meterial/app-meterial.module';
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
  selector: 'app-imgfiltro',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './imgfiltro.component.html',
  styleUrl: './imgfiltro.component.css'
})
export class ImgfiltroComponent {
  displayedColumns: string[] = ['albumId','id','title','url','thumbnailUrl'];
  /*dataSource = ELEMENT_DATA;*/
  post2s:Post2[]=[]
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit(): void {
    this.postService.getAllPosts2()
    .subscribe((data) => {
      console.log(data);
      this.post2s=data;
      
    })
  
  }
}
