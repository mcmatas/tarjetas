import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
  ]
})
export class SettingsComponent {

  constructor(public menuService: MenuService) {}

  closeMenu() {
    this.menuService.closeMenu();
  }
  
}
