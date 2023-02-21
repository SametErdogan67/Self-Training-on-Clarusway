//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler import suz bir şekilde
//? erişilebilir.
import magnolia from "./img/magnolia.jpg";
import "./Content.css";

const Content = () => {
  //* Local or global variables
  const pStyle = {
    fontSize: "1.5rem",
  };
  const imgStyle = {
    width: "500px",
    display: "block",
    margin: "1rem auto",
  };

  return (
    <div className="content-div">
      <h2 style={{ color: "red", backgroundColor: "yellow" }}>React JS</h2>
      <p style={pStyle}>
        Lorem lorem lorem lorem lorem sdklfgoppd dfpogkdfgpokfpo kdop fkp kdfkop
        gkdp
      </p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/01/30/23/09/bird-7756768_960_720.jpg"
        alt="lovelybird"
      />

      <img style={imgStyle} src={magnolia} alt="lovelybird" />
      <p className="par">
        Lorem lorem lorem lorem lorem sdklfgoppd dfpogkdfgpokfpo kdop fkp kdfkop
        gkdp
      </p>
      <p className="par">
        Lorem lorem lorem lorem lorem sdklfgoppd dfpogkdfgpokfpo kdop fkp kdfkop
        gkdp
      </p>
    </div>
  );
};
export default Content;
