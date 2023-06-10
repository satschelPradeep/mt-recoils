import { atom, useRecoilState } from "recoil";

const exchangeRate = 83.59;

const InputState = atom({
  key: "input-state-key",
  default: "",
});

export const Atom1 = () => {
  const [inputValue, setInputValue] = useRecoilState(InputState); // useRecoilValue , useSetRecoilState can also be used

  return (
    <div className="atom1-wrapper">
      Dollers :
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <br />
      Euros : {Number(inputValue) * exchangeRate}
    </div>
  );
};
