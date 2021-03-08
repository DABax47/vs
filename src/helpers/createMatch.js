/**
* create Match will create the first match from the shuffled roster
*@params --- array [] the suffledRoster

*/
const createMatch = (L1, L2) => {
  let singleMatch = [];

  //Create Matches

  for (let i = 0; i < L1.length; i++) {
    singleMatch.push([L1[i], L2[i]]);
  }
  return singleMatch;
}; //END GEN MATCH

export default createMatch;
