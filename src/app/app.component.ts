import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AuthService } from './auth/auth.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, NavMenuComponent]
})

export class AppComponent{

title = "LibraryClient";

constructor(private authService: AuthService) {}

ngOnInit(): void {
  this.authService.init();
}
 
}