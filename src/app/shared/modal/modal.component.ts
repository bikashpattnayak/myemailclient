import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showModel() {
    this.display = !this.display;
  }

}
