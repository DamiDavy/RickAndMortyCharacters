import * as React from 'react'
import { Characters } from './components/Characters'
import store from './redux/store'
import { Provider } from 'react-redux'
import { Filters } from './components/Filters';
import { MainContainer, Header, Footer } from './styled-components/App-styled';
import { useRef } from 'react';

function App() {

  const filtersComponent = useRef(null);
  const contentComponent = useRef(null);

  return (
    <>
      <Header>
        <h1>Rick And Morty</h1>
        <h2>Characters</h2>
      </Header>
      <MainContainer>
        <aside ref={filtersComponent}>
          <Filters filtersComponent={filtersComponent}
            contentComponent={contentComponent} />
        </aside>
        <div ref={contentComponent}>
          <Characters
            filtersComponent={filtersComponent}
            contentComponent={contentComponent}
          />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}

export const AppWithWrap = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}