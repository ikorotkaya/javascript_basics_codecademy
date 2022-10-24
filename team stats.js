const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Andre", lastName: "Gentler", age: 41 },
    { firstName: "Pete", lastName: "Schwarz", age: 24 },
  ],
  _games: [
    { opponent: "One", teamPoints: "2", opponentPoints: 1 },
    { opponent: "Two", teamPoints: "4", opponentPoints: 5 },
    { opponent: "Three", teamPoints: "6", opponentPoints: 3 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team.games);