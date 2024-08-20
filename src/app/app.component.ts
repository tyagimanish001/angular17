import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


// class abc {
//   constructor() {
//     console.log("abc constructor")
//   }
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // viewProviders: [abc]

})
export class AppComponent {
  title = 'angular17';



  // Cdata: any;
  // getdata(val: any) {
  //   this.Cdata = val;
  // }

}
