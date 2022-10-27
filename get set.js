const dogFactory = (name, breed, weight) => {
  const dog = {
    _name: name,
    _weight: weight,
    _breed: breed,

    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },

    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },

    bark() {
      return "ruff! ruff!";
    },

    eatTooManyTreats() {
      this._weight++;
    },
  };
  return dog;
};