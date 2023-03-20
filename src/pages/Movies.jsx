import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getMoviSesrch } from 'api/IPI';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchRes, setSearchRes] = useState([]);

  const value = searchParams.get('searchString');

  useEffect(() => {
    getMoviSesrch(value)
      .then(res => {
        setSearchRes([...res.data.results]);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const hendlSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams(
      form.searchStr.value !== '' ? { searchString: form.searchStr.value } : {}
    );
    form.reset();
  };

  return (
    <SearchBox>
      <form onSubmit={hendlSubmit}>
        <input type="text" name="searchStr" />
        <button>Search</button>
      </form>
      <div>
        <ul>
          {value !== null
            ? searchRes.map(movi => {
                return (
                  <li key={movi.id}>
                    <Link to={`/movies/${movi.id}`}>
                      {movi.title ? movi.title : movi.name}
                    </Link>
                  </li>
                );
              })
            : ''}
        </ul>
      </div>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  margin: 15px;
`;
