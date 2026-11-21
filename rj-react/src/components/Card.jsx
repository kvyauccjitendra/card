const Card = (props) => {

  return (
    <div className="parent">
        <div className="card">
            <img src="https://images.unsplash.com/photo-1792883606540-94f17f336952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <h1>Hello, I am {props.user}, and i am  {props.age} old.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est laboriosam expedita eligendi itaque, vitae architecto.</p>
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card
