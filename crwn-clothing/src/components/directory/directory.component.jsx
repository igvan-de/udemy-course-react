import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({catagories}) => {

    return (
        <div className="directory-container">
        {
          catagories.map(({id ,title, imageUrl}) => {
            return (
                <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
            );
          })
        }
        </div>
    );
}

export default Directory;
