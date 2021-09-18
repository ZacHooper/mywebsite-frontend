import '@/styles/index.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Stop font-awesome from adding style tags to head automatically
config.autoAddCss = false
// Add font-awesome to library so accessible across app
library.add(fab, faEnvelope)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
