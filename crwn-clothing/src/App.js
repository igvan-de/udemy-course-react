import './categories.styles.scss';

const App = () => {

  const catagories = [
    {
      id: 1,
      title: 'Hats',
      img: '',
    },
    {
      id: 2,
      title: 'Sneakers',
      img: '',
    },
    {
      id: 3,
      title: 'Jackets',
      img: '',
    },
    {
      id: 4,
      title: 'Women',
      img: '',
    },
    {
      id: 5,
      title: 'Men',
      img: '',
    }
  ];

  return (
    <div className="categories-container">
      {
        catagories.map(category => {
          return (
            <div className='category-container' key={category.id}>
              <div className='category-container_background-image'>
                <img alt={`category-${category.title}`} src={category.img}/>
              </div>
              <div className='category-container_body'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;