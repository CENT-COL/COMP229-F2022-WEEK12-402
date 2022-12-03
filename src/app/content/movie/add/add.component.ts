import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class MovieAddComponent implements OnInit {

  form: any = {
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }

  isSuccessfull = true;
  errorMessage = "";

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.movieService.addMovie(this.form)
      .subscribe({
        next: data => {
          console.log(data);
          this.isSuccessfull = true;
          this.backToList();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      })
  }
  
  backToList(){
    this.router.navigate(['/movies/list']);
  }

}
