import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { FetchDataComponent } from './fetch-data/fetch-data.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, HttpClientModule, NavMenuComponent, FetchDataComponent]
})

export class AppComponent{

title = "LibraryClient";

 
}