import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings-page',
  imports: [CommonModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
