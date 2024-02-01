<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
Использовал библиотеку json-server для создания фейкового REST API

В apis.js реализованы все запросы

С левой стороны страницы сверстал список серверов в виде таблицы и иконок для редактирования и удаления при нажати. Чуть ниже кнопка для добавления нового сервера. При нажатии на кнопку открывается модальное окно справа где можно задать(input) название и тип сервера на выбор(select). Можно сохранить и отменить действие, при сохранении делаем пост запрос и добавляем наш сервер. Чтобы сервер появлялся без перезагрузки страницы использовал useRouter

Использовал cache: no-store в запросе получения списка серверов, чтобы при каждом fetch получать свежие данные

Чтобы открыть проект в dev 
1) npm i
2) npm run json-server
3) npm run dev

Готово!

