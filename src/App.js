import NewsBox from "./NewsBox";
import { useState } from "react";

function App() {
  let [newsData, setNewsData] = useState([
    {
      title: "Yazeen 2020",
      imgSrc:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      mainText: "The New Nissan GTR is Here!!!",
    },
    {
      title: "New Lambo",
      imgSrc:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      mainText: "Tempor minim do velit nostrud nulla qui fugiat nostrud.",
    },
    {
      title: "Third News",
      imgSrc:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      mainText: "Tempor minim do velit nostrud nulla qui fugiat nostrud.",
    },
  ]);

  function addNews() {
    console.log(newsData);

    setNewsData(function (prevState) {
      return [
        ...prevState,
        {
          title: "Third News",
          mainText: "Quis incididunt qui labore cupidatat cillum consequat.",
          imgSrc:
            "https://images.unsplash.com/photo-1531278520962-fcf47a2faea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
        },
      ];
    });
  }

  return (
    <>
      <button onClick={addNews}>Add</button>
      {newsData.map(function (news) {
        return (
          <NewsBox
            key={news.title}
            title={news.title}
            imgSrc={news.imgSrc}
            mainText={news.mainText}
          />
        );
      })}
    </>
  );
}

export default App;
