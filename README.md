# Todo App

- Qwik/QwikCity
- Supabase (Postgres)
- Prisma
- Tailwind

To use this app you need to create a database. Personally, I used [supabase](https://supabase.com/)

After creating your database add your database URI to an .env file at the root of the project

```
DATABASE_URL=<YOUR_DATABASE_URI>
```

To install all the npm dependencies run this command

```bash
$ npm install
```

Now go to your Terminal and run this command

```bash
$ npx prisma db push
```

Now you can try the app by running the following command

```bash
$ npm run dev
```
