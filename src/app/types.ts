export default class Constants {
  static readonly USER_KEY = 'loggedInUser';
  static readonly API = 'http://localhost:5187/api';
}

export interface LoginUser {
	email: String,
	password: String
}

export interface UserDetails {
	username: String;
	email: String;
	password: String;
}

export interface RegisterUserDTO {
	username: String,
	email: String,
	password: String
}

export interface Book {
	isbn: String, // book id basically
	title: String,
	authors: String[],
	publisher: String,
	language: String,
	edition: String,
	pages: Number,
	image: String,
	rating: Number,
}

export interface Review {
	isbn: String,
	rating: Number
}
