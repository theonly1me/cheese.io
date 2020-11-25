import {
  Component,
  Output,
  OnInit,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output('navClick') selectedComponent = new EventEmitter<string>();
  isAuthenticated = false;
  userSub?: Subscription;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => (this.isAuthenticated = !!user));
  }

  onSaveData() {
    this.dataService.saveData();
  }

  onFetchData() {
    this.dataService.fetchData().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  // navHandler(event: any): void {
  //   const value = event?.target?.textContent;
  //   this.selectedComponent.emit(value);
  // }
}
