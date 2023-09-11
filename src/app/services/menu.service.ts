import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
