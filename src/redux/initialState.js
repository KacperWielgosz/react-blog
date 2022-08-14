const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      category: 'Sport',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      category: 'Books',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doea'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      category: 'Movies',
      content: 'Main content of the article',
      publishedDate: new Date('12-12-2022'),
      author: 'John Doer'
    },
  ],

  categories: ['Sport', 'Books', 'Movies', 'Design']
}

export default initialState
