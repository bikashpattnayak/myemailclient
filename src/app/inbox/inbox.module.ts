import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { ReplyEmailComponent } from './reply-email/reply-email.component';


@NgModule({
  declarations: [HomeComponent, EmailIndexComponent, EmailShowComponent, EmailPlaceholderComponent, ReplyEmailComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
  ]
})
export class InboxModule { }
