export type FilmType = {
  id: number
  isFavorite: boolean
  name: string
  genre: string
  released: number
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: [string]
  runTime: number
}
