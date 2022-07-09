import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { watchCatData } from '../actions';
import { AppState, Cat, CatFailure } from '../interfaces';

const Cat: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AppState): boolean => state.loading);
  console.info(loading);
  const thecatapiData = useSelector((state: AppState): Cat[] | null => state.thecatapiData);
  const errorCat = useSelector((state: AppState): CatFailure | unknown => state.error);
  const [messageWait, setMessageWait] = useState('');
  const onWatchCat = (): void => {
    setMessageWait('Wait, please. You need to be patient.');
    dispatch(watchCatData());
  };
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <>
        <button onClick={onWatchCat}>Show Cat</button>
        {loading && messageWait ? (
          <p>{messageWait}</p>
        ) : (
          thecatapiData &&
          thecatapiData.map((catData: Cat) => {
            <p>
              <img src={catData.url} alt="cat" />
            </p>;
          })
        )}
        {thecatapiData &&
          thecatapiData.map((catData: Cat) => {
            <p>
              <img src={catData.url} alt="cat" />
            </p>;
          })}
        {errorCat && <p>{(errorCat as Error).message}</p>}
      </>
    </div>
  );
};

export default Cat;
