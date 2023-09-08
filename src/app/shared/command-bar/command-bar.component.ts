import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {

  @Output() addClicked = new EventEmitter<void>();
  @Output() deleteAllClicked = new EventEmitter<void>();

  onAddClick() {
    this.addClicked.emit();
  }

  onDeleteAllClick() {
    this.deleteAllClicked.emit();
  }
}
