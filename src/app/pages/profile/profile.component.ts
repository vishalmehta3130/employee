import { Component } from '@angular/core';
import  {IDemo}  from '../../shared/interface/demo';
import demodata from '../../../assets/demo.json';
@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  title = 'json-file-read-angular';
  employee: IDemo[] = [...demodata];

}
