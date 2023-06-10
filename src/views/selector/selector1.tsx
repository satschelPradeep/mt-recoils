import { atom, selector, useRecoilState } from "recoil";
import "./selector.css";

const exchangeRate = 83.59;

const UsdAtomState = atom<string | number>({
  key:"use-atom-state-key",
  default:""
})

const EuroSelectorState = selector<string | number>({
  key:"euro-selector-state-key",
  get:({get})=>{
    const usdValue = get(UsdAtomState)
    if(usdValue==="") return ""
    return Number(usdValue) * exchangeRate
  },
  set:({ set} , newValue) =>{
    let newUsdAtom: string | number = "";
    if(newValue==="") newUsdAtom = newValue 
    else newUsdAtom = newValue as number / exchangeRate; 
    set(UsdAtomState , newUsdAtom)
  }
})

export const Selector1 = () => {
  const [usdAtom , setUsdAtom] = useRecoilState(UsdAtomState)
  const [euroSelector, setEuroSelector] = useRecoilState(EuroSelectorState)

  return (
    <div className="selector1-wrapper">
      <div className="">
        <div className="">USD</div>
        <input type="number" value={usdAtom} onChange={(e) => setUsdAtom(e.target.value)} />
      </div>
      <div className="divider">:</div>
      <div>
        <div className="">EURO</div>
        <input type="number" value={euroSelector} onChange={(e) => setEuroSelector(e.target.value)} />
      </div>
    </div>
  );
};
