import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* shelfSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
  }


function* fetchItems(){
    console.log('in da saga')
    const items = yield axios.get('/api/shelf');
    console.log('in user saga with', items.data);
    yield put({ type: 'SET_ITEMS', payload: items.data });
    
  }
  


 
  
  
  export default shelfSaga;