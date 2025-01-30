//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RNA_complement = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U' 
}
export const toRna = (DNA) => {
  let RNA = ''
  for(let i = 0; i < DNA.length; i++){
    if(DNA[i]) RNA += RNA_complement[DNA[i]];
  }
  return RNA;
};
