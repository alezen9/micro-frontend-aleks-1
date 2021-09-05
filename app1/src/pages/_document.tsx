import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

          <meta name='description' content='App 1' />
          <meta name='keywords' content='Keywords' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='App 1' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='application-name' content='App 1' />
          <meta name='msapplication-tooltip' content='App 1' />
          <meta name='msapplication-starturl' content='/' />
          <meta name='msapplication-tap-highlight' content='no' />
          {/* Favicon */}
          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
          {/* Manifest */}
          <link rel='manifest' href='/manifest.json' />
          {/* Other */}
          <meta name='apple-mobile-web-app-title' content='App 1' />
          <meta name='application-name' content='App 1' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#222' />
          {/* Fonts */}
          <link href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap' rel='stylesheet' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />

          <style global jsx>
            {`
              #__next {
                overflow-x: hidden;
              }

              /* Change Autocomplete styles in Chrome*/
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              textarea:-webkit-autofill,
              textarea:-webkit-autofill:hover,
              textarea:-webkit-autofill:focus,
              select:-webkit-autofill,
              select:-webkit-autofill:hover,
              select:-webkit-autofill:focus {
                -webkit-box-shadow: 0 0 0px 1000px rgba(0,0,0,.01) inset;
                transition: background-color 5000s ease-in-out 0s;
                -webkit-text-fill-color: grey !important;
              }

							#nprogress .bar {
								background: rgb(214, 0, 86) !important;
								background-color: rgb(214, 0, 86) !important;
							}

							#nprogress .spinner {
								display: none;
							}

							::-webkit-scrollbar {
								width: 4px;
								height: 4px;
							}

							::-webkit-scrollbar-track {
								background-color: transparent;
								-webkit-border-radius: 10px;
								border-radius: 10px;
							}

							::-webkit-scrollbar-thumb {
								-webkit-border-radius: 10px;
								border-radius: 10px;
								background: rgba(158, 158, 158, 0.5);
							}

							::-webkit-calendar-picker-indicator {
								filter: invert(50%);
							}
							@media all and (display-mode: standalone) {
								body::after {
									position: fixed;
									top: -80px;
									left: 0;
									width: 100vw;
									height: 80px;
									content: ' ';
									backdrop-filter: blur(20px);
									background-color: rgba(0, 0, 0, 0.3);
								}
								::-webkit-scrollbar {
									display: none;
								}
								::-webkit-scrollbar-track {
									display: none;
								}
								::-webkit-scrollbar-thumb {
									display: none;
								}
							}

							@media all and (max-width: 450px) {
								::-webkit-scrollbar {
									display: none;
								}
								::-webkit-scrollbar-track {
									display: none;
								}
								::-webkit-scrollbar-thumb {
									display: none;
								}
							}
						`}
          </style>
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument