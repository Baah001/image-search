import {Component, OnInit} from '@angular/core';
import {LinksHttpClientService} from './shared/services/links-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public linksHttpService: LinksHttpClientService) {}
}
