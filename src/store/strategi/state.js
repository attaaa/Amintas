import { EMPTY_STRATEGI } from "src/data/strategi/StrategiModel";

export default function() {
  return {
    strategiInputData: { ...EMPTY_STRATEGI },
    strategiActive: false,
    strategiHistory: []
  };
}
