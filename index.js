const Button = (props) => {
  const { text, className } = props;

  return <button className={className}>{text}</button>;
};

const element = (
  <div className="background">
    <div className="background1">
      <h1 className="heading">Social Buttons</h1>
      <div className="background2">
        <Button text="like" className="like" />
        <Button text="comment" className="comment" />
        <Button text="share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
