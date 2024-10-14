import React from "react";
const vehicles = [
  {
    name: 'Tesla Model S',
    description: 'An all-electric five-door liftback sedan produced by Tesla, Inc.',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-v3.jpg',
    url: 'https://www.tesla.com/models'
  },
  {
    name: 'Ford Mustang',
    description: 'An American car manufactured by Ford.',
    image: 'https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61047.tif?croppathe=1_16x9&wid=2160',
    url: 'https://www.ford.com/cars/mustang//'
  },
  {
    name: 'Chevrolet Camaro',
    description: 'An American automobile manufactured by Chevrolet.',
    image: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/camaro/mov/2024-camaro-mov-masthead-v4.jpg?imwidth=1200',
    url: 'https://www.chevrolet.com/performance/camaro'
  },
];

const HomePage = () => {
  return (
    <>
    <div>
      <br/>/<br/>
      <h1>Welcome to the Home Page</h1>
      <br/><br/>
      <p>
        Welcome to our Vehicle Detection System, where technology meets
        simplicity. Our system effortlessly identifies and classifies different
        types of vehicles, offering precise and reliable results. Designed for
        easy integration and seamless operation, it enhances traffic management
        and security with beauty and efficiency. Discover the elegance of
        advanced vehicle detection, tailored for today's smart cities.
      </p>
    </div>
    <div className="container">
    <h1 className="text-center mb-6">Latest Vehicles</h1>
    <div className="row">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card h-100">
            {vehicle.image && <img src={vehicle.image} className="card-img-top" alt={vehicle.name} />}
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">{vehicle.description}</p>
              <a href={vehicle.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </> 
  );
};

export default HomePage;
