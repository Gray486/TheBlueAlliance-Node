# TheBlueAllianceV3
## A fully typed Blue Alliance API wrapper for Node.JS.

Construct using your Blue Alliance API key as generated on The Blue Alliance account page: https://www.thebluealliance.com/account
```
import BlueAlliance from "thebluealliancev3";

const TBA = new BlueAlliance("your_api_key")
```

Use the `get()` method to call a request to the API. The `call` parameter is the URL that will be fetched from the API. The `APICalls` const provides a full list of these possible call URLs. You then need to specify the parameters that are needed by the API, such as a team key or year number.

```
TBA.get({ call: APICalls.event.awards, event_key: "2025gadal"})
```

Once a response is recived, it will be parsed and returned in a typed form, based on the inputted call URL.

```
TBA.get({ call: APICalls.event.awards, event_key: "2025gadal"}).then((awards) => {
    awards[7].name                       // 'District Event Finalist'
    awards[7].recipient_list[1].team_key // 'frc1648'
})
```

Nearly all API endpoints are fully typed, exeptions include:
- "/event/{event_key}/predictions"
    - According to TBA: This endpoint is currently under development and may change at any time.
- "/event/{event_key}/matches/timeseries" & "/match/{match_key}/timeseries"
    - According to TBA: This is not official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up. This endpoint and corresponding data models are under active development and may change at any time, including in breaking ways.
- "/match/{match_key}/zebra_motionworks"
    - Lack of understanding of this information, and could not find accurate data example.
- "/event/{event_key}/insights"
    - JSON response is not standardized in TBA API docs.
- "/event/{event_key}/coprs"
    - Data could change event to event, and season to season.