
```
String reqStr="{\n" +
                "\"mercid\":\"UFOSSGENV2\",\n" +
                "\"orderid\":\"UATM4xcdfrdrfdd\",\n" +
                "\"amount\":\"100.00\",\n" +
                "\"order_date\":\"2024-02-20T10:12:00+05:30\",\n" +
                "\"currency\":\"356\",\n" +
                "\"ru\":\"https://www.merchant.com/\",\n" +
                "\"additional_info\":{\n" +
                "  \"additional_info1\":\"Test\",\n" +
                "  \"additional_info2\":\"Test1\"\n" +
                "  },\n" +
                "\"itemcode\":\"DIRECT\",\n" +
                "\"device\":{\n" +
                "  \"init_channel\":\"internet\",\n" +
                "  \"ip\":\"76.76.21.21\",\n" +
                "  \"user_agent\":\"Mozilla/5.0(WindowsNT10.0;WOW64;rv:51.0)Gecko/20100101Firefox/51.0\",\n" +
                "  \"accept_header\":\"text/html\",\n" +
                "  \"browser_tz\":\"-330\",\n" +
                "  \"browser_color_depth\":\"32\",\n" +
                "  \"browser_java_enabled\":\"false\",\n" +
                "  \"browser_screen_height\":\"601\",\n" +
                "  \"browser_screen_width\":\"657\",\n" +
                "  \"browser_language\":\"en-US\",\n" +
                "  \"browser_javascript_enabled\":\"true\"\n" +
                "  }\n" +
                "}";
        String secretKey="vZZHdJktOjTaLc6RllHPC077qdaD3Tv3";
        String clientid="ufossgenv2";
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
