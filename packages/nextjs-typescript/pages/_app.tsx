import 'isomorphic-unfetch';
import React, { ReactNode } from 'react';
import App, { Container, AppInitialProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/store';
import { ThemeProvider } from 'styled-components';
import { NextComponentType, NextPageContext } from 'next';
import { Router } from 'next/dist/client/router';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props as Readonly<
        AppInitialProps & {
          Component: NextComponentType<NextPageContext, any, {}>;
          router: Router;
        }
      > &
        Readonly<{ children?: ReactNode }> & { store: any };
      return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
