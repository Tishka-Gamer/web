import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageViewSet } from './components/pageViewSet';
import { PageCreateSet } from './components/pageCreateSet';
import { PageSelectSet } from './components/pageSelectSet';

import './App.css'
import { FormCreateSet } from './components/FormCreateSet';
import { FormCreateCard } from './components/FromCreateCard';
import { NotFound } from './components/404';

function App() {

  return (
    <BrowserRouter basename='web'>
      <Routes>
        <Route path='/' element={<PageSelectSet/>}/>
        <Route path='/set/:id' element={<PageViewSet/>}/>
        <Route path='/createset' element={<FormCreateSet/>}/>
        <Route path='/createcard' element={<FormCreateCard/>}/>
        <Route path='/admin' element={<PageCreateSet/>}>
          <Route path='createset' element={<FormCreateSet/>}/>
          <Route path='createcard' element={<FormCreateCard/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
