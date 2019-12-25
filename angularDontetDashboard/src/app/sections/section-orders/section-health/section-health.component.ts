import { Component, OnInit } from '@angular/core';
import { Server } from '../../../shared/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: false },
  { id: 1, name: 'dev-email', isOnline: true },
  { id: 1, name: 'prod-web', isOnline: true },
  { id: 1, name: 'prod-email', isOnline: true }
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}

