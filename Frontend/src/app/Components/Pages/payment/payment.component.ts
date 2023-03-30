import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/Interfaces/Movie';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  movie!: Movie;
  item: Movie = new Movie();

  constructor(private bookingService: BookingService, private router: Router) {
    this.movie = bookingService.getMovie();
  }

  ngOnInit(): void {
  }

  summary() {
    this.router.navigateByUrl('/summary');
  }

}
