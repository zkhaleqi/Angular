import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';
import { isBoolean } from 'util';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit() {
    this.setServerStaut(this.serverInput.isOnline)
  }
  setServerStaut(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  }
  toggleStauts(onlineStatus: boolean) {
    console.log(this.serverInput.name, ': ', onlineStatus);
    this.setServerStaut(!onlineStatus)
  }
}
