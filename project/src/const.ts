export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genres {
  Drama = 'Drama',
  Action = 'Action',
  Adventure = 'Adventure',
  Animates = 'Animated',
  Comedy = 'Comedy',
  Fantasy = 'Fantasy',
  Historical = 'Historical',
  Horror = 'Horror',
  Noir = 'Noir',
  Science = 'Science',
  Thriller = 'Thriller',
  Western = 'Western',
}
