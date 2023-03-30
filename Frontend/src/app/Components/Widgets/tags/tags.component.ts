import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/Interfaces/Tag';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  
  constructor(private movieService: MoviesService) {
    this.tags = movieService.getAllTags();
  }

  ngOnInit(): void {
  }

}
