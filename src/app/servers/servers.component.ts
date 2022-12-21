import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'The server was not created';
  serverName: string = 'serverNameTest';
  serverCreated: boolean = false;

  constructor () {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created with name: ' + this.serverName;
  }

  onUpdateServerName(event: any){ 
    console.log(event);
    this.serverName = event.target.value;
  }
}
