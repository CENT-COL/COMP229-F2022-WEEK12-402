import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class MovieEditComponent implements OnInit {

  form: any = {
    _id: null,
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }
  
  isSuccessfull = true;
  errorMessage = "";

  constructor(
    private movieService: MovieService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: params => {
          console.log(params);
          this.form._id = params['id'];

          this.movieService.getMovie(this.form._id)
            .subscribe({
              next: data => {
                this.form = data.movie;
              },
              error: err => {
                this.errorMessage = err.error.message;
                this.isSuccessfull = false;
              }
            })

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      })
  }

  onSubmit(){
    this.movieService.editMovie(this.form)
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
