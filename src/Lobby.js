

class Lobby{

    constructor(id,name,sportId,location,maxPlayers,currentPlayers,playerIds,date, startTime, endTime){

        this.id=id; // neki dummy number, nije bitan

        this.name=name;  // string

        this.sportId=sportId;  // jedan broji koji predstavlja id sporta

        this.location=location;  // string

        this.maxPlayers=maxPlayers;  // int

        this.currentPlayers=currentPlayers; // int

        this.playerIds=playerIds;  // najcesce ces slati samo id onoga koji je napravio lobby (npr "12"), ako ih je više onda odvojiti zarezom(npr. "12,3,11")

        this.date=date;  // string formata "yyyy-MM-dd"

        this.startTime=startTime;  // string formata "HH:mm"

        this.endTime=endTime;  // string formata "HH:mm"



    }

}




    const lobby = new Lobby(1,"Naziv","1","Vrbik 8", 10,5,"12","2023-05-25", "12:00", "13:00");