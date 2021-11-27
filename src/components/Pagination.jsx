import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersThunk } from '../redux/characterReducer'
import { PageButton, PaginationContainer } from '../styled-components/Characters-styled'

export function Pagination() {

  const pageNumber = useSelector(state => state.pageNumber)
  const numberOfPages = useSelector(state => state.numberOfPages)

  const dispatch = useDispatch()

  function showPreviousPage() {
    dispatch(getCharactersThunk(pageNumber - 1))
  }

  function showNextPage() {
    dispatch(getCharactersThunk(+pageNumber + 1))
  }

  function showTheFirstPage() {
    dispatch(getCharactersThunk(1))
  }

  function showTheLastPage() {
    dispatch(getCharactersThunk(numberOfPages))
  }

  const bottonColors = {
    true: 'Teal',
    false: 'Thistle',
  }

  return <>
    {numberOfPages ? <p>{numberOfPages} pages</p> : null}
    <PaginationContainer>
      {numberOfPages ? <>
        <PageButton onClick={showTheFirstPage} color={bottonColors[pageNumber > 1]}>
          &#8249;&#8249;
        </PageButton>
        {pageNumber > 1 ? <PageButton onClick={showPreviousPage} color={'Teal'}>
          {pageNumber - 1}
        </PageButton> : null}
        <PageButton>{pageNumber}</PageButton>
        {pageNumber < numberOfPages ? <PageButton onClick={showNextPage} color={'Teal'}>
          {+pageNumber + 1}
        </PageButton> : null}
        <PageButton onClick={showTheLastPage} color={bottonColors[pageNumber < numberOfPages]}>
          &#8250;&#8250;
        </PageButton></> : null}
    </PaginationContainer>
  </>
}
