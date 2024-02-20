export default class Constants {
  static readonly USER_KEY = 'loggedInUser';
  static readonly API = 'http://localhost:5187/api';
}

interface LoginUserDTO {
	email: String,
	password: String
}

interface RegisterUserDTO {
	username: String,
	email: String,
	password: String
}

interface Book {
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

interface Review {
	isbn: String,
	rating: Number
}

interface UserDetails {
  reviews: Review[],
  username: String
}