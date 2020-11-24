export default function filterMap({ series, films }) {
  return {
    series: [
      {
        genre: 'Documentaries',
        data: series.filter(item => item.genre === 'documentaries')
      },
      {
        genre: 'Comedies',
        data: series.filter(item => item.genre === 'comedies')
      },
      {
        genre: 'Children',
        data: series.filter(item => item.genre === 'children')
      },
      { genre: 'Crime', data: series.filter(item => item.genre === 'crime') },
      {
        genre: 'Feel Good',
        data: series.filter(item => item.genre === 'feel-good')
      }
    ],
    films: [
      {
        genre: 'Drama Good',
        data: films.filter(item => item.genre === 'drama')
      },
      {
        genre: 'Thriller',
        data: films.filter(item => item.genre === 'thriller')
      },
      {
        genre: 'Children',
        data: films.filter(item => item.genre === 'children')
      },
      {
        genre: 'Suspense',
        data: films.filter(item => item.genre === 'suspense')
      },
      { genre: 'Romance', data: films.filter(item => item.genre === 'romance') }
    ]
  };
}
