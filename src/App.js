
import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';



function App() {

  function num1000(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const num100 = () => {
    return (Math.round(Math.random() * 200))
  }


  const server = 'https://dev.meta365.eu/wp-json/wp/v2/image?_embed'


  const [data, setData] = useState([])
  const [currentObject,setCurrentObject] = useState(null)

  useEffect(() => {

    fetch(server)
      .then(res => res.json())
      .then(result => {
        setData(result)
        setCurrentObject({id:result[0].id,title:result[0].title.rendered,imageUrl:result[0]._embedded['wp:featuredmedia'][0].source_url})
      } )
      .catch(err => console.log(err))
  }, [])

  console.log(data);

  return (
    <div className="App">

      <div className='current-img'>
        {
           currentObject !== null ?
        <Card 
        key={currentObject.id + 1000}
        title = {currentObject.title}
        imageUrl = {currentObject.imageUrl}
        /> : ''
        }
      </div>
      {
        data.map(el => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title.rendered}
            imageUrl={el._embedded['wp:featuredmedia'][0].source_url}
            x={num1000(10, 500)}
            y={num1000(10, 1100)}
            rotation={num100()}
            setCurrentObject = {setCurrentObject}
          />
        ))
      }

    </div>
  );
}

export default App;
