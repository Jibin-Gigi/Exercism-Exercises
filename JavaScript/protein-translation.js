// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.

const codon_amino_acids = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
};

export const translate = (RNA) => {
  if (!RNA) return [];

  let codons = [];
  for (let i = 0; i < RNA.length; i += 3) {
    let codon = RNA.substring(i, i + 3);
    if (codon.length === 3) {
      codons.push(codon);
    } else {
      throw new Error('Invalid codon');
    }
  }

  let result = codons.reduce((accumulator, value) => {
    if (codon_amino_acids[value] === 'STOP') return accumulator;
    if (!codon_amino_acids[value]) {
      throw new Error('Invalid codon');
    }
    accumulator.push(codon_amino_acids[value]);
    return accumulator;
  }, []);

  return result;
};
