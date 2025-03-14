"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APICalls = void 0;
/**
 * Comments for APICalls were generated with ChatGPT. Please beware of possible inaccuracies.
 */
exports.APICalls = {
    teams: {
        /**
         * Gets simplified team data.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        simple: "/teams/{page_num}/simple",
        /**
         * Gets team keys.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        keys: "/teams/{page_num}/keys",
        byYear: {
            /**
             * Gets full team data for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/teams/{year}/{page_num}",
            /**
             * Gets simplified team data for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/teams/{year}/{page_num}/simple",
            /**
             * Gets team keys for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/teams/{year}/{page_num}/keys"
        }
    },
    team: {
        /**
         * Gets full data for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        full: "/team/{team_key}",
        /**
         * Gets simplified data for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        simple: "/team/{team_key}/simple",
        /**
         * Gets the history of a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        history: "/team/{team_key}/history",
        /**
         * Gets the years a specific team participated in.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        years_participated: "/team/{team_key}/years_participated",
        /**
         * Gets the districts a specific team is part of.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        districts: "/team/{team_key}/districts",
        /**
         * Gets the robots used by a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        robots: "/team/{team_key}/robots",
        events: {
            /**
             * Gets full event data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/team/{team_key}/events",
            /**
             * Gets simplified event data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/team/{team_key}/events/simple",
            /**
             * Gets event keys for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/team/{team_key}/events/keys",
            byYear: {
                /**
                 * Gets full event data for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                full: "/team/{team_key}/events/{year}",
                /**
                 * Gets simplified event data for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                simple: "/team/{team_key}/events/{year}/simple",
                /**
                 * Gets event keys for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                keys: "/team/{team_key}/events/{year}/keys",
                /**
                 * Gets event statuses for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                statuses: "/team/{team_key}/events/{year}/statuses"
            }
        },
        event: {
            matches: {
                /**
                 * Gets full match data for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                full: "/team/{team_key}/event/{event_key}/matches",
                /**
                 * Gets simplified match data for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                simple: "/team/{team_key}/event/{event_key}/matches/simple",
                /**
                 * Gets match keys for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                keys: "/team/{team_key}/event/{event_key}/matches/keys",
            },
            /**
             * Gets awards for a specific team at an event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            awards: "/team/{team_key}/event/{event_key}/awards",
            /**
             * Gets the status of a specific team at an event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            status: "/team/{team_key}/event/{event_key}/status"
        },
        /**
         * Gets awards for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        awards: "/team/{team_key}/awards",
        /**
         * Gets match data for a specific team in a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        matches: "/team/{team_key}/matches/{year}",
        media: {
            /**
             * Gets full media data for a specific team in a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/team/{team_key}/media/{year}",
            /**
             * Gets media data for a specific team by media tag.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            byTag: "/team/{team_key}/media/tag/{media_tag}",
            /**
             * Gets media data for a specific team by media tag and year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            byTagByYear: "/team/{team_key}/media/tag/{media_tag}/{year}"
        },
        /**
         * Gets social media accounts for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        social_media: "/team/{team_key}/social_media"
    },
    events: {
        /**
         * Gets full event data for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        full: "/events/{year}",
        /**
         * Gets simplified event data for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        simple: "/events/{year}/simple",
        /**
         * Gets event keys for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        keys: "/events/{year}/keys"
    },
    event: {
        /**
         * Gets full event data for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        full: "/event/{event_key}",
        /**
         * Gets simplified event data for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        simple: "/event/{event_key}/simple",
        /**
         * Gets alliances for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        alliances: "/event/{event_key}/alliances",
        /**
         * Gets insights for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        insights: "/event/{event_key}/insights",
        /**
         * Gets OPRs (Offensive Power Rankings) for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        oprs: "/event/{event_key}/oprs",
        /**
         * Gets COPRs (Comparative Offensive Power Rankings) for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        coprs: "/event/{event_key}/coprs",
        /**
         * Gets predictions for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        predictions: "/event/{event_key}/predictions",
        /**
         * Gets rankings for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        rankings: "/event/{event_key}/rankings",
        /**
         * Gets district points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        district_points: "/event/{event_key}/district_points",
        /**
         * Gets regional championship pool points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        regional_champs_pool_points: "/event/{event_key}/regional_champs_pool_points",
        /**
         * Gets advancement points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        advancement_points: "/event/{event_key}/advancement_points",
        teams: {
            /**
             * Gets full teams data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/event/{event_key}/teams",
            /**
             * Gets simplified teams data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/event/{event_key}/teams/simple",
            /**
             * Gets event team keys for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/event/{event_key}/teams/keys",
            /**
             * Gets event team statuses for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            statuses: "/event/{event_key}/teams/statuses"
        },
        matches: {
            /**
             * Gets full match data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/event/{event_key}/matches",
            /**
             * Gets simplified match data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/event/{event_key}/matches/simple",
            /**
             * Gets match keys for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/event/{event_key}/matches/keys",
            /**
             * Gets timeseries data for matches in a specific event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            timeseries: "/event/{event_key}/matches/timeseries"
        },
        /**
         * Gets awards for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        awards: "/event/{event_key}/awards",
        /**
         * Gets team media for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        team_media: "/event/{event_key}/team_media"
    },
    district: {
        /**
         * Gets awards for a specific district key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        awards: "/district/{district_key}/awards",
        /**
         * Gets rankings for a specific district key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        rankings: "/district/{district_key}/rankings",
        events: {
            /**
             * Gets full event data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/district/{district_key}/events",
            /**
             * Gets simplified event data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/district/{district_key}/events/simple",
            /**
             * Gets event keys for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/district/{district_key}/events/keys"
        },
        teams: {
            /**
             * Gets full team data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            full: "/district/{district_key}/teams",
            /**
             * Gets simplified team data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            simple: "/district/{district_key}/teams/simple",
            /**
             * Gets team keys for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            keys: "/district/{district_key}/teams/keys"
        }
    },
    insights: {
        /**
         * Gets leaderboards for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        leaderboards: "/insights/leaderboards/{year}",
        /**
         * Gets notable teams for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        notables: "/insights/notables/{year}"
    }
};
class TheBlueAllianceV3 {
    /**
     * Constructs the API wrapper.
     * @param apiKey Your Blue Allaince API key. You can generate this at {@link https://www.thebluealliance.com/account}.
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    isErrorResponse(response) {
        return (typeof response === "object" &&
            response !== null &&
            "Error" in response &&
            typeof response.Error === "string");
    }
    fetchData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(`https://www.thebluealliance.com/api/v3/${url}`, {
                method: "GET",
                headers: {
                    "X-TBA-Auth-Key": this.apiKey
                }
            }).then((res) => res.json());
        });
    }
    generateUrl(data) {
        let url = data.call;
        for (let i = 0; i < urlParams.length; i++) {
            const param = urlParams[i];
            if (param in data) {
                url = url.replace(`{${param}}`, data[param].toString());
            }
        }
        return url;
    }
    /**
     * Gets data from [The Blue Alliance API](https://www.thebluealliance.com/apidocs/v3).
     * @param data An {@link APIRequestData} object.
     * @returns The corresponding object in the {@link APIResponseMap}.
     *
     * Note: Team keys are in format: `frc####`. Ex: Team #1648 becomes `frc1648`.
     */
    get(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.fetchData(this.generateUrl(data));
            if (this.isErrorResponse(res))
                throw new Error('API responded with: "' + res.Error + '"');
            return res;
        });
    }
}
/**
 * Comments for APICalls were generated with ChatGPT. Please beware of possible inaccuracies.
 */
TheBlueAllianceV3.APICalls = exports.APICalls;
exports.default = TheBlueAllianceV3;
const urlParams = [
    "page_num",
    "year",
    "district_key",
    "team_key",
    "event_key",
    "match_key",
    "media_tag",
    "district_abbreviation"
];
