import { Link } from "react-router-dom";

const TagList = ({tags, title}) => {
  return (
    <div className="tag-list">
      <h2>{title}</h2>
      {/* output tags list */}
      {/* Javascript map() method */}
      
      {tags.map((tag) => (
        <div className="tag-preview" key={tag.id}>
          <Link to={`/tag`}>
            <h3>{tag.name}</h3>
          </Link>
        </div>
      ))} 

    </div>
  );
}

export default TagList;