import "./style.css";

function NewsBox({ title, imgSrc, mainText }) {
  return (
    <div className="NewsBox">
      <img className="NewsImg" src={imgSrc} />
      <h3>{title}</h3>
      <p>{mainText}</p>
    </div>
  );
}

export default NewsBox;
