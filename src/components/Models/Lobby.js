class Lobby {

    constructor(id, name, sportId, location, maxPlayers, currentPlayers, playerIds, date, startTime, endTime) {

        this.id = id;

        this.name = name;

        this.sportId = sportId;

        this.location = location;

        this.maxPlayers = maxPlayers;

        this.currentPlayers = currentPlayers;

        this.playerIds = playerIds;

        this.date = date;

        this.startTime = startTime;

        this.endTime = endTime;


    }

}


const lobby = new Lobby(1, "Naziv", "1", "Vrbik 8", 10, 5, "12", "2023-05-25", "12:00", "13:00");
