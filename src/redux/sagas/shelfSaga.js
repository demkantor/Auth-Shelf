import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* shelfSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('REMOVE_ITEM', removeItem);
  }


function* fetchItems(){
    console.log('in da saga')
    const items = yield axios.get('/api/shelf');
    console.log('in user saga with', items.data);
    yield put({ type: 'SET_ITEMS', payload: items.data });
    
  }

  function* removeItem(remove){
    console.log('in saga, /api/shelf/delete', remove.payload.match);
    try {
        yield axios.delete(`/api/shelf/${remove.payload.match}`);
        yield put({type: 'FETCH_ITEMS'})
    } catch(error){
        console.log(error);
    }
  }
  


 
  
  
  export default shelfSaga;