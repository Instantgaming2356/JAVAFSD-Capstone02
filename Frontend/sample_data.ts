import { Movie } from "src/app/Interfaces/Movie";
import { Tag } from "src/app/Interfaces/Tag";

export const sample_movie: Movie[] = [

    {
        movieId: 1,
        movieName: 'John Wick 4',
        price: 400,
        tags: 'Action',
        imgUrl: 'assets/movie-1.jpg',
        lang: ['Hindi', 'English'],
    },
    {
        movieId: 2,
        movieName: 'Matrix',
        price: 350,
        tags: 'Sci-Fi',
        imgUrl: 'assets/movie-2.jpg',
        lang: ['English'],
    }

];

export const sample_tags: Tag[] = [

    //{ name: 'All', count: 2 },
    { name: 'Sci-Fi', count: 1 },
    { name: 'Action', count: 1 }

];

export const sample_users: any[] = [
    {
      name: "Admin",
      email: "admin@test.com",
      password: "admin",
      isLogin: true
    }
]