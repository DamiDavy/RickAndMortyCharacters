import './App.css';
import { Characters } from './components/Characters'
import store from './redux/store'
import { Provider } from 'react-redux'
import { Filters } from './components/Filters';
import { MainContainer, Header } from './styled-components/App-styled';


function App() {
  console.log(window.innerWidth)
  return (
    <MainContainer>
      <Filters />
      <div>
        <Header>
          <h1>Rick And Morty</h1>
          <h2>Characters</h2>
        </Header>
        <Characters />
      </div>
    </MainContainer >
  );
}

export const AppWithWrap = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}