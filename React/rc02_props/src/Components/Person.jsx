import Msg from "./Msg";

const Person = (props) => {
  const { name, tel, img } = props;
  return (
    <div>
      <Msg isim={name} />

      <Msg resim={img} />
      <Msg tel={tel} />
    </div>
  );
};

export default Person;
