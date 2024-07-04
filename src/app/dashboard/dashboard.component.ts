import { Component } from '@angular/core';
import { MaterialModule } from '../app-meterial/app-meterial.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    
  ){

  }

  salir(): void{
    
    this.router.navigateByUrl("/login")
  }


  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irEpisodio():void{
    this.router.navigate(["episodios-id"], {relativeTo: this.route})
  }
  irImgFiltro():void{
    this.router.navigate(["imgfiltro"], {relativeTo: this.route})
  }
  irEstado():void{
    this.router.navigate(["estado"], {relativeTo: this.route})
  }

}
