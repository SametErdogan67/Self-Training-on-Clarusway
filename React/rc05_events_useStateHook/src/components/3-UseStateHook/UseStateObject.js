//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================
import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "ahmet",
    surname: "can",
    salary: 10000,
  });

  const handleSalaryInc = () => {
    setPerson({
      ...person,
      salary: person.salary + 500,
    });
  };

  const handleSalaryDec = () => {
    setPerson({
      ...person,
      salary: person.salary - 500,
    });
  };

  const handleClrName = () => {
    setPerson({
      name: "noname",
      surname: "noname",
    });
  };
  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h1 className="display-4">
        {person.name} {person.surname}
      </h1>
      <h1 className="display-6">Salary:{person.salary}</h1>
      <button onClick={handleSalaryInc} className="btn btn-success">
        Salary Inc
      </button>
      <button onClick={handleClrName} className="btn btn-danger">
        CLR
      </button>
      <button onClick={handleSalaryDec} className="btn btn-warning">
        Salary Dec
      </button>
      {/* <button onClick={() => setCount(count - 1)} className="btn btn-warning">
        DEC
  </button>*/}
    </div>
  );
};

export default UseStateObject;
