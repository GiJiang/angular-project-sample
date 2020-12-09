import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-login',
  templateUrl: './icon-login.component.html',
  styleUrls: ['./icon-login.component.scss']
})
export class IconLoginComponent implements OnInit {

  public iconLogin = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
