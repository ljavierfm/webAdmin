import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService,SiderbarService,SharedService } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SettingsService, SiderbarService, SharedService ],
  declarations: []
})
export class ServiceModule { }
