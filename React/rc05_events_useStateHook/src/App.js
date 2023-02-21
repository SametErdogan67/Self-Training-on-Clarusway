// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

//? Ayrinti icin : https://reactjs.org/docs/events.html
import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponent/Counter";
import UseStateCounter from "./components/3-UseStateHook/UseStateCounter";
import UseStateObject from "./components/3-UseStateHook/UseStateObject";

function App() {
  return (
    <div>
      <Events />
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}

export default App;
