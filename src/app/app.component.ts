import { FakeAPI } from './app-fake-api';
import { Component } from '@angular/core';
import { RestClientBuilder } from 'ng-restclient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  client: FakeAPI;
  constructor(_builder: RestClientBuilder) {
    this.client = _builder.build(FakeAPI);
    console.log(this.client);

    this.client.getPost(1, 1234).subscribe(console.log);
  }
}
