const Msg = (props) => {
  const { isim, resim, tel } = props;
  return (
    <div>
      <h2>Hi, My name is {isim}</h2>
      <img src={resim} />
      <p>{tel}</p>
    </div>
  );
};

export default Msg;
