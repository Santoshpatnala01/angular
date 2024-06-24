import { Component, Input, Output, EventEmitter, output } from '@angular/core';

import {User} from './user.model';

@Component({
    selector: 'app-user',
    standalone: false,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
