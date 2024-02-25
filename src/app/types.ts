export default class Constants {
  static readonly USER_KEY = 'loggedInUser';
  static readonly API = 'http://localhost:5187/api';
}

export interface LoginUser {
	email: string,
	password: string
}

export interface UserDetails {
	username: string;
	email: string;
	password: string;
}

export interface RegisterUserDTO {
	username: string,
	email: string,
	password: string
}

export interface Book {
	isbn13: string,
	title: string,
	authors: string[],
	publisher: string,
	language: string,
	pages: number,
	imageUrl: string,
	rating: number,
	description: string,
	genres: string[]
}

export interface Review {
	isbn: string,
	rating: number
}

export interface FavBook {
	userId: string,
	isbn13: string;
}
  