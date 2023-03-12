import { useEffect, useState } from "react";
import "./home.scss";
import { contentType } from "../interface/interface";

function Home(): JSX.Element {
  const Url: string = "https://jsonplaceholder.typicode.com/photos?_limit=50";
  const [content, setContent] = useState<contentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(Url);
      const json: contentType[] = await data.json();
      setContent(json);
    };
    fetchData()
      .catch(console.error);
  },[]);

  return (
    <div className="home">
      <div className="container">
        <div className="home-inner">
          {content.map((item) => (
            <div key={item.id} className="content">
              <img src={item.url} alt={item.title} className="content-img" />
              <h6 className="content-user">{item.title}</h6>
              <p className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                recusandae.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
