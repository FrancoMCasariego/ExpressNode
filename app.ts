import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hola Mundo');
});
app.get('/newsletter', (req: Request, res: Response) => {
  const newsletter: any[] = [
      { id: 1, name: 'Noticia 1', created: new Date('2024-04-01'), tags: ['tag1'], content: 'Contenido 1' },
      { id: 2, name: 'Noticia 2', created: new Date('2024-04-02'), tags: ['tag2'], content: 'Contenido 2' },
      { id: 3, name: 'Noticia 3', created: new Date('2024-04-03'), tags: ['tag3'], content: 'Contenido 3' },
      { id: 4, name: 'Noticia 4', created: new Date('2024-04-04'), tags: ['tag4'], content: 'Contenido 4' },
      { id: 5, name: 'Noticia 5', created: new Date('2024-04-05'), tags: ['tag5'], content: 'Contenido 5' },
      { id: 6, name: 'Noticia 6', created: new Date('2024-04-06'), tags: ['tag6'], content: 'Contenido 6' },
      { id: 7, name: 'Noticia 7', created: new Date('2024-04-07'), tags: ['tag7'], content: 'Contenido 7' },
      { id: 8, name: 'Noticia 8', created: new Date('2024-04-08'), tags: ['tag8'], content: 'Contenido 8' },
      { id: 9, name: 'Noticia 9', created: new Date('2024-04-09'), tags: ['tag9'], content: 'Contenido 9' },
      { id: 10, name: 'Noticia 10', created: new Date('2024-04-10'), tags: ['tag10'], content: 'Contenido 10' },
      { id: 11, name: 'Noticia 11', created: new Date('2024-04-11'), tags: ['tag11'], content: 'Contenido 11' },
      { id: 12, name: 'Noticia 12', created: new Date('2024-04-12'), tags: ['tag12'], content: 'Contenido 12' },
      { id: 13, name: 'Noticia 13', created: new Date('2024-04-13'), tags: ['tag13'], content: 'Contenido 13' },
      { id: 14, name: 'Noticia 14', created: new Date('2024-04-14'), tags: ['tag14'], content: 'Contenido 14' },
      { id: 15, name: 'Noticia 15', created: new Date('2024-04-15'), tags: ['tag15'], content: 'Contenido 15' },
  ];
  const maxResults = parseInt(req.query.max_results as string) || 15;
  const fromDate = req.query.from_date ? new Date(req.query.from_date as string) : null;
  let filterNewsletter = newsletter;
  if (fromDate) {
      filterNewsletter = newsletter.filter(news => news.created.toDateString() === fromDate.toDateString());
  }
  const limitedNewsletter = filterNewsletter.slice(0, maxResults);
  res.json(limitedNewsletter);
});

export default app;
//   const currentDate = new Date();
//   const filteredNewsletter = newsletter.filter(news => news.created.toDateString() === currentDate.toDateString());
//   const firstNews = filteredNewsletter[0] || null;
//   res.json(firstNews);
// });

// export default app;