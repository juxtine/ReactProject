import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyApwBHErfLWCeo6SENZsGrZjwqSKBTrlQ8';

YTSearch({key:API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () =>{

    return (
      <div>
         <SearchBar/>
      </div>

    );

}

ReactDom.render( <App/> , document.querySelector('.container'));
