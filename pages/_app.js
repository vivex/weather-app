import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from '../src/store'
import theme from '../src/utils/theme'
import './app.css';

const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps ({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    componentDidMount () {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      const {
        Component,
        pageProps,
        store
      } = this.props

      return (
        <Container>
          <Head>
            <title>Weather App</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.5/css/weather-icons.min.css" />
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" crossorigin="anonymous" />
              <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,700,900" rel="stylesheet" />
          </Head>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </Container>
      )
    }
  }
)

export default _App
