import { ModalComponent } from './../../shared/modal/modal.component';
import { EmailDetails, EmailService } from './../email.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit,AfterViewInit {

  show: boolean = false;

  emailDetails: EmailDetails

  @ViewChild(ModalComponent)
  dialog: ModalComponent;


  constructor(private emailService: EmailService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((val: { id: string}) => {
      this.emailService.getEmailById(val.id).subscribe((email) => this.emailDetails = email);
    })

    
  }

  ngAfterViewInit(): void {
   
  }

  showModal() { 
    this.dialog.display = !this.dialog.display;
  }

}
