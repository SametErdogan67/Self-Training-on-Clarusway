const Events = () => {
  let text = "Hi FS13";
  const handleClick = () => {
    alert("Hi Events");
  };

  const handleReset = (msg) => {
    console.log(msg);
  };

  function degistir() {
    text = "Hello React";
    console.log(text);
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click </button>
      <button onClick={() => handleReset("Please clear the text")}>
        Reset
      </button>
      <button onClick={degistir}>Change</button>
    </div>
  );
};

{
  /* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */
}
export default Events;
