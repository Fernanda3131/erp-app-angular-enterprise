import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Navbar,
    Sidebar
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}