import React from 'react';
import './Vehicles.css';

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
  {
    name: 'BMW 3 Series',
    description: 'A compact executive car manufactured by the German automaker BMW.',
    image: 'https://www.bmwusa.com/content/dam/bmw/common/vehicles/2023/my24/3-series/sedan/overview/desktop/BMW-MY24-3Series-Overview-FMA-Desktop.jpg',
    url: 'https://www.bmwusa.com/vehicles/3-series/sedan/overview.html'
  },
  {
    name: 'Audi A4',
    description: 'A line of compact executive cars produced since 1994 by the German car manufacturer Audi.',
    image: 'https://d1lhv9gpjooyls.cloudfront.net/eyJvdXRwdXRGb3JtYXQiOiJ3ZWJwIiwiYnVja2V0IjoiemFsYS1wcm9kdWN0aW9uIiwia2V5IjoiYWNjb3VudC0xOVwvMTYxNDY4ODM1NzY1NV83NTg1MDcyXC9BMTk4ODQyX2xhcmdlLmpwZyIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7ImhlaWdodCI6MTA4MCwid2lkdGgiOjEwODAsImZpdCI6Imluc2lkZSIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjpudWxsfX19fQ==',
    url: 'https://www.audiusa.com/us/web/en/models/a4/a4-sedan/2022/overview.html'
  },
  {
    name: 'Mercedes-Benz C-Class',
    description: 'A line of compact executive cars produced by Daimler AG.',
    image: 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/c-class/class-page/series/2024-C-SEDAN-CH-3-1-DR.jpg',
    url: 'https://www.mbusa.com/en/vehicles/class/c-class/sedan'
  }
];

function VehiclesPage() {
  return (
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
  );
}

export default VehiclesPage;
