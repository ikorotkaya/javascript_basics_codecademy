// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
function mockUpStrand() {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Factory function for creating many objects.
const pAequorFactory = (number, dnaArray) => {
  return {
    _specimenNum: number,
    _dna: dnaArray,

    // Changes a random base in the mockup strand to a new random base.
    mutate() {
      const mutatedDnaBase = returnRandBase();
      const randomBase = Math.floor(Math.random() * this._dna.length);

      // If The base is identical, do not change.
      if (this._dna[randomBase] === mutatedDnaBase) {
        console.log(
          `pAequorFactory.mutate() - The new DNA base '${mutatedDnaBase}' is identical to the current base '${this._dna[randomBase]}' and does not need changed.\n`
        );

        return this._dna;
      } else {

        // Overwrite original DNA base with new randomly generated one.

        console.log(
          `----------------\nOriginal DNA base: ${this._dna[randomBase]} at index: ${randomBase}`
        );

        this._dna[randomBase] = mutatedDnaBase;

        console.log(
          `Newly inserted DNA base: ${this._dna[randomBase]} at index: ${randomBase}\n----------------\n`
        );

        return this._dna;
      }
      return dnaArray;
    },

    //     //compares two DNA strands, prints to console the percentage in common and returns it as a number

    compareDNA(pAequor) {
      let identicalBases = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === pAequor[i]) {
          identicalBases += 1;
        }
      }

      // calculate the percentage of bases in common

      procentInCommon = ((identicalBases / this._dna.length) * 100).toFixed(2);

      return `${procentInCommon}% DNA in common`;
    },

    //returns a boolean when the strand consists of 60% or more of 'C' or 'G' bases

    willLikelySurvive() {
      let dnaBaseCounter = 0;
      this._dna.forEach((dnaBase) => {
        if (dnaBase === "C" || dnaBase === "D") {
          dnaBaseCounter++;
        }
      });
      const survivalPercentage = (
        (dnaBaseCounter / this._dna.length) * 100).toFixed(2);
      if (survivalPercentage >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

//  create an array of 30 DNA bases for further analysis

createInstances = () => {
  let createdInstances = [];
  let idCounter = 0;
  while (createdInstances.length < 30) {
    let tempPAequor = pAequorFactory(idCounter, mockUpStrand());
    if (tempPAequor.willLikelySurvive()) {
      createdInstances.push(tempPAequor);
    }
    idCounter++;
  }
  return createdInstances;
};

//  check

const spec = pAequorFactory(1, mockUpStrand());
console.log(spec._dna);
console.log(spec.mutate());
console.log(spec.compareDNA(mockUpStrand()));
console.log(spec.willLikelySurvive());
console.log(createInstances());
