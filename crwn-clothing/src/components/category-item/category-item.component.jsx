import './category-item.styles.scss';

const CategoryItem = ({id, title, imageUrl}) => {

    return (
        <div className='category-container' key={id}>
            <div 
                className='category-container_background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='category-container_body'>
                <h2>{title.toLocaleUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;
