import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import AppNavigation from './routes/index'
import store from './store/store'
import styles from './themes/styles'
import './styles/index.scss'
import { ProSidebarProvider } from 'react-pro-sidebar';

const queryClient = new QueryClient()

function App() {
  return (
    <ProSidebarProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={styles}>
          <AppNavigation />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
    </ProSidebarProvider>
  )
}

export default App
