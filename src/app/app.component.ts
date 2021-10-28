import { environment } from './../environments/dynamic-environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-config-demo';

  public get environmentName() {
    return environment.environment;
  }

  public get backendURL() {
    return environment.backendURL;
  }
}
