//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.

//*Footer comp.

function Footer() {
  return (
    <footer>
      <p>Copyright by Samet {new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
