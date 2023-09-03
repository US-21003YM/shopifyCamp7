import {defer, LinksFunction, LoaderArgs} from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import {Layout} from '~/components/Layout';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';
import {Seo} from '@shopify/hydrogen';
import {useNonce} from '@shopify/hydrogen';

export const links = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}) {
  const {cart} = context;
  
  return defer({
    cart: cart.get(),
    layout: await context.storefront.query(LAYOUT_QUERY),
  });
}

export default function App() {
  const data = useLoaderData();
  const nonce = useNonce();

  const {name, description} = data.layout.shop;
  const title = description ? `${name} ${description}` : name;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout title={title}>
          <Outlet />
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
