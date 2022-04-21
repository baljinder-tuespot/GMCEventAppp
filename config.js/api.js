export const baseUrl       =  "http://api.pcstart.in/"; 
export const loginUrlBase = "http://api.pcstart.in/";
//export const baseUrl         =  "http://192.168.1.150:8080/"; 

export const eventUrl = baseUrl+"event/";
export const sessionDetailLocalId = baseUrl+"session/getSessionByEventIdSort/";

 export const upcomings       =  "event/upcoming";
 export const upcomingsImage  =  baseUrl+"images/";
 export const past            = "event/past";
//User Login Url
export const loginUrl = baseUrl+"attendees/login/";
export const guestLoginUrl = baseUrl+"email/emailwith/";
//User Login Url End

//speaker urls
export const speaker = baseUrl+"speakers/";
export const speakerCatId = baseUrl+"speakers/getbycategory/";
export const speakerByEventId = baseUrl+"speakers/eventById/";
export const eventByIdWithPerfromingAt=  baseUrl+"speakers/eventByIdWithPerfromingAt/";
//peakers/eventByIdWithPerfromingAt/1/eventid/3

export const eventIdForSpeaker = "/eventid/"
export const speakerCategory = baseUrl+"speakerscategory/";

// speaker urls end
export const SponserCategory = baseUrl+"sponsor/";
export const scheduleByEventId = baseUrl+"/session/eventById/";
//All sessions


//sub session by id
export const subSessionBySubSessionId = baseUrl+"subsession/";
//sub session by id end


export const getSessionByEventIdDates = baseUrl+'session/getSessionByEventIdDates/';
export const getSessionByEventId = baseUrl+'session/getSessionByEventId/';
export const getSeesionByEventIdAndSessionId = baseUrl+"session/getSessionByEventId/";
export const sessionIdURl = baseUrl+"session/";
//GET /session/getSessionByEventId/{id}

//Sponsor data
export const sponsorByEventId = baseUrl+'sponsor/sponsorByEventId/'
export const sponsorWithCategory = baseUrl+"sponsor/sponsorWithCategory/";

// 
export const exhibitorsByEventId  =baseUrl+"sponsor/exbitorsByEventId/";
export const exbitorsWithSort = baseUrl+"sponsor/exbitorsWithSort/";