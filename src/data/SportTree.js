const SportTree =
        {
            events_loaded: false,
            sports: [],
            init: function ()
            {
                if (!SportTree.events_loaded)
                {
                    fetch("/events.json")
                            .then(response => {
                                return response.json();
                            })
                            .then(json => {
                                SportTree.events_loaded = true;
                                SportTree.sports = json.sports;
                            });
                }
            },

            //Method to retrieve all Sports
            allSports: function () {
                return this.sports;
            },
            //GET Events by Sport ID
            getEvents: function (params)
            {
                //Getting Sport
                let sport_found = this.sports.find(sport => {
                    return sport.id === parseInt(params.match.params.sport_id);
                });
                
                //Filtering Events (status NULL is not allowed)
                let valid_events = [];
                if(sport_found)
                {                
                    sport_found.events.map((e, i, a) => {
                        if (e.status_id !== null)
                            valid_events.push(e);
                    });
                }
                return valid_events;
            },
            //GET Event by Sport ID + Event ID
            getEvent: function (params)
            {
                let events = this.getEvents(params);
                let event_found = events.find(ev => {
                    return ev.id === parseInt(params.match.params.event_id);
                });
                return event_found ? event_found : null;
            }
        };
export default SportTree
