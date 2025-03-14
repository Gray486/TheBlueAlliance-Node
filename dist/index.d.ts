/**
 * Comments for APICalls were generated with ChatGPT. Please beware of possible inaccuracies.
 */
export declare const APICalls: {
    readonly teams: {
        /**
         * Gets simplified team data.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly simple: "/teams/{page_num}/simple";
        /**
         * Gets team keys.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly keys: "/teams/{page_num}/keys";
        readonly byYear: {
            /**
             * Gets full team data for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/teams/{year}/{page_num}";
            /**
             * Gets simplified team data for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/teams/{year}/{page_num}/simple";
            /**
             * Gets team keys for a given year and page.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/teams/{year}/{page_num}/keys";
        };
    };
    readonly team: {
        /**
         * Gets full data for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly full: "/team/{team_key}";
        /**
         * Gets simplified data for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly simple: "/team/{team_key}/simple";
        /**
         * Gets the history of a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly history: "/team/{team_key}/history";
        /**
         * Gets the years a specific team participated in.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly years_participated: "/team/{team_key}/years_participated";
        /**
         * Gets the districts a specific team is part of.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly districts: "/team/{team_key}/districts";
        /**
         * Gets the robots used by a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly robots: "/team/{team_key}/robots";
        readonly events: {
            /**
             * Gets full event data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/team/{team_key}/events";
            /**
             * Gets simplified event data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/team/{team_key}/events/simple";
            /**
             * Gets event keys for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/team/{team_key}/events/keys";
            readonly byYear: {
                /**
                 * Gets full event data for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/team/{team_key}/events/{year}";
                /**
                 * Gets simplified event data for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/team/{team_key}/events/{year}/simple";
                /**
                 * Gets event keys for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/team/{team_key}/events/{year}/keys";
                /**
                 * Gets event statuses for a specific team by year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly statuses: "/team/{team_key}/events/{year}/statuses";
            };
        };
        readonly event: {
            readonly matches: {
                /**
                 * Gets full match data for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/team/{team_key}/event/{event_key}/matches";
                /**
                 * Gets simplified match data for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/team/{team_key}/event/{event_key}/matches/simple";
                /**
                 * Gets match keys for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/team/{team_key}/event/{event_key}/matches/keys";
            };
            /**
             * Gets awards for a specific team at an event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly awards: "/team/{team_key}/event/{event_key}/awards";
            /**
             * Gets the status of a specific team at an event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly status: "/team/{team_key}/event/{event_key}/status";
        };
        /**
         * Gets awards for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly awards: "/team/{team_key}/awards";
        /**
         * Gets match data for a specific team in a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly matches: "/team/{team_key}/matches/{year}";
        readonly media: {
            /**
             * Gets full media data for a specific team in a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/team/{team_key}/media/{year}";
            /**
             * Gets media data for a specific team by media tag.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly byTag: "/team/{team_key}/media/tag/{media_tag}";
            /**
             * Gets media data for a specific team by media tag and year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly byTagByYear: "/team/{team_key}/media/tag/{media_tag}/{year}";
        };
        /**
         * Gets social media accounts for a specific team.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly social_media: "/team/{team_key}/social_media";
    };
    readonly events: {
        /**
         * Gets full event data for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly full: "/events/{year}";
        /**
         * Gets simplified event data for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly simple: "/events/{year}/simple";
        /**
         * Gets event keys for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly keys: "/events/{year}/keys";
    };
    readonly event: {
        /**
         * Gets full event data for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly full: "/event/{event_key}";
        /**
         * Gets simplified event data for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly simple: "/event/{event_key}/simple";
        /**
         * Gets alliances for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly alliances: "/event/{event_key}/alliances";
        /**
         * Gets insights for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly insights: "/event/{event_key}/insights";
        /**
         * Gets OPRs (Offensive Power Rankings) for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly oprs: "/event/{event_key}/oprs";
        /**
         * Gets COPRs (Comparative Offensive Power Rankings) for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly coprs: "/event/{event_key}/coprs";
        /**
         * Gets predictions for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly predictions: "/event/{event_key}/predictions";
        /**
         * Gets rankings for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly rankings: "/event/{event_key}/rankings";
        /**
         * Gets district points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly district_points: "/event/{event_key}/district_points";
        /**
         * Gets regional championship pool points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly regional_champs_pool_points: "/event/{event_key}/regional_champs_pool_points";
        /**
         * Gets advancement points for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly advancement_points: "/event/{event_key}/advancement_points";
        readonly teams: {
            /**
             * Gets full teams data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/event/{event_key}/teams";
            /**
             * Gets simplified teams data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/event/{event_key}/teams/simple";
            /**
             * Gets event team keys for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/event/{event_key}/teams/keys";
            /**
             * Gets event team statuses for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly statuses: "/event/{event_key}/teams/statuses";
        };
        readonly matches: {
            /**
             * Gets full match data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/event/{event_key}/matches";
            /**
             * Gets simplified match data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/event/{event_key}/matches/simple";
            /**
             * Gets match keys for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/event/{event_key}/matches/keys";
            /**
             * Gets timeseries data for matches in a specific event.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly timeseries: "/event/{event_key}/matches/timeseries";
        };
        /**
         * Gets awards for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly awards: "/event/{event_key}/awards";
        /**
         * Gets team media for a specific event key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly team_media: "/event/{event_key}/team_media";
    };
    readonly district: {
        /**
         * Gets awards for a specific district key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly awards: "/district/{district_key}/awards";
        /**
         * Gets rankings for a specific district key.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly rankings: "/district/{district_key}/rankings";
        readonly events: {
            /**
             * Gets full event data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/district/{district_key}/events";
            /**
             * Gets simplified event data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/district/{district_key}/events/simple";
            /**
             * Gets event keys for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/district/{district_key}/events/keys";
        };
        readonly teams: {
            /**
             * Gets full team data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/district/{district_key}/teams";
            /**
             * Gets simplified team data for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/district/{district_key}/teams/simple";
            /**
             * Gets team keys for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/district/{district_key}/teams/keys";
        };
    };
    readonly insights: {
        /**
         * Gets leaderboards for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly leaderboards: "/insights/leaderboards/{year}";
        /**
         * Gets notable teams for a specific year.
         * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
         */
        readonly notables: "/insights/notables/{year}";
    };
};
export default class TheBlueAllianceV3 {
    private apiKey;
    /**
     * Constructs the API wrapper.
     * @param apiKey Your Blue Allaince API key. You can generate this at {@link https://www.thebluealliance.com/account}.
     */
    constructor(apiKey: string);
    private isErrorResponse;
    private fetchData;
    private generateUrl;
    /**
     * Gets data from [The Blue Alliance API](https://www.thebluealliance.com/apidocs/v3).
     * @param data An {@link APIRequestData} object.
     * @returns The corresponding object in the {@link APIResponseMap}.
     *
     * Note: Team keys are in format: `frc####`. Ex: Team #1648 becomes `frc1648`.
     */
    get<T extends APIRequestData>(data: T): Promise<APIResponseMap[T["call"]]>;
    /**
     * Comments for APICalls were generated with ChatGPT. Please beware of possible inaccuracies.
     */
    static APICalls: {
        readonly teams: {
            /**
             * Gets simplified team data.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/teams/{page_num}/simple";
            /**
             * Gets team keys.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/teams/{page_num}/keys";
            readonly byYear: {
                /**
                 * Gets full team data for a given year and page.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/teams/{year}/{page_num}";
                /**
                 * Gets simplified team data for a given year and page.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/teams/{year}/{page_num}/simple";
                /**
                 * Gets team keys for a given year and page.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/teams/{year}/{page_num}/keys";
            };
        };
        readonly team: {
            /**
             * Gets full data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/team/{team_key}";
            /**
             * Gets simplified data for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/team/{team_key}/simple";
            /**
             * Gets the history of a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly history: "/team/{team_key}/history";
            /**
             * Gets the years a specific team participated in.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly years_participated: "/team/{team_key}/years_participated";
            /**
             * Gets the districts a specific team is part of.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly districts: "/team/{team_key}/districts";
            /**
             * Gets the robots used by a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly robots: "/team/{team_key}/robots";
            readonly events: {
                /**
                 * Gets full event data for a specific team.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/team/{team_key}/events";
                /**
                 * Gets simplified event data for a specific team.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/team/{team_key}/events/simple";
                /**
                 * Gets event keys for a specific team.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/team/{team_key}/events/keys";
                readonly byYear: {
                    /**
                     * Gets full event data for a specific team by year.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly full: "/team/{team_key}/events/{year}";
                    /**
                     * Gets simplified event data for a specific team by year.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly simple: "/team/{team_key}/events/{year}/simple";
                    /**
                     * Gets event keys for a specific team by year.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly keys: "/team/{team_key}/events/{year}/keys";
                    /**
                     * Gets event statuses for a specific team by year.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly statuses: "/team/{team_key}/events/{year}/statuses";
                };
            };
            readonly event: {
                readonly matches: {
                    /**
                     * Gets full match data for a specific team at an event.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly full: "/team/{team_key}/event/{event_key}/matches";
                    /**
                     * Gets simplified match data for a specific team at an event.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly simple: "/team/{team_key}/event/{event_key}/matches/simple";
                    /**
                     * Gets match keys for a specific team at an event.
                     * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                     */
                    readonly keys: "/team/{team_key}/event/{event_key}/matches/keys";
                };
                /**
                 * Gets awards for a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly awards: "/team/{team_key}/event/{event_key}/awards";
                /**
                 * Gets the status of a specific team at an event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly status: "/team/{team_key}/event/{event_key}/status";
            };
            /**
             * Gets awards for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly awards: "/team/{team_key}/awards";
            /**
             * Gets match data for a specific team in a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly matches: "/team/{team_key}/matches/{year}";
            readonly media: {
                /**
                 * Gets full media data for a specific team in a specific year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/team/{team_key}/media/{year}";
                /**
                 * Gets media data for a specific team by media tag.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly byTag: "/team/{team_key}/media/tag/{media_tag}";
                /**
                 * Gets media data for a specific team by media tag and year.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly byTagByYear: "/team/{team_key}/media/tag/{media_tag}/{year}";
            };
            /**
             * Gets social media accounts for a specific team.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly social_media: "/team/{team_key}/social_media";
        };
        readonly events: {
            /**
             * Gets full event data for a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/events/{year}";
            /**
             * Gets simplified event data for a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/events/{year}/simple";
            /**
             * Gets event keys for a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly keys: "/events/{year}/keys";
        };
        readonly event: {
            /**
             * Gets full event data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly full: "/event/{event_key}";
            /**
             * Gets simplified event data for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly simple: "/event/{event_key}/simple";
            /**
             * Gets alliances for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly alliances: "/event/{event_key}/alliances";
            /**
             * Gets insights for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly insights: "/event/{event_key}/insights";
            /**
             * Gets OPRs (Offensive Power Rankings) for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly oprs: "/event/{event_key}/oprs";
            /**
             * Gets COPRs (Comparative Offensive Power Rankings) for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly coprs: "/event/{event_key}/coprs";
            /**
             * Gets predictions for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly predictions: "/event/{event_key}/predictions";
            /**
             * Gets rankings for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly rankings: "/event/{event_key}/rankings";
            /**
             * Gets district points for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly district_points: "/event/{event_key}/district_points";
            /**
             * Gets regional championship pool points for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly regional_champs_pool_points: "/event/{event_key}/regional_champs_pool_points";
            /**
             * Gets advancement points for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly advancement_points: "/event/{event_key}/advancement_points";
            readonly teams: {
                /**
                 * Gets full teams data for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/event/{event_key}/teams";
                /**
                 * Gets simplified teams data for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/event/{event_key}/teams/simple";
                /**
                 * Gets event team keys for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/event/{event_key}/teams/keys";
                /**
                 * Gets event team statuses for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly statuses: "/event/{event_key}/teams/statuses";
            };
            readonly matches: {
                /**
                 * Gets full match data for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/event/{event_key}/matches";
                /**
                 * Gets simplified match data for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/event/{event_key}/matches/simple";
                /**
                 * Gets match keys for a specific event key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/event/{event_key}/matches/keys";
                /**
                 * Gets timeseries data for matches in a specific event.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly timeseries: "/event/{event_key}/matches/timeseries";
            };
            /**
             * Gets awards for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly awards: "/event/{event_key}/awards";
            /**
             * Gets team media for a specific event key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly team_media: "/event/{event_key}/team_media";
        };
        readonly district: {
            /**
             * Gets awards for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly awards: "/district/{district_key}/awards";
            /**
             * Gets rankings for a specific district key.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly rankings: "/district/{district_key}/rankings";
            readonly events: {
                /**
                 * Gets full event data for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/district/{district_key}/events";
                /**
                 * Gets simplified event data for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/district/{district_key}/events/simple";
                /**
                 * Gets event keys for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/district/{district_key}/events/keys";
            };
            readonly teams: {
                /**
                 * Gets full team data for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly full: "/district/{district_key}/teams";
                /**
                 * Gets simplified team data for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly simple: "/district/{district_key}/teams/simple";
                /**
                 * Gets team keys for a specific district key.
                 * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
                 */
                readonly keys: "/district/{district_key}/teams/keys";
            };
        };
        readonly insights: {
            /**
             * Gets leaderboards for a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly leaderboards: "/insights/leaderboards/{year}";
            /**
             * Gets notable teams for a specific year.
             * Please refer to [TBA API v3 Docs](https://www.thebluealliance.com/apidocs/v3) for more details.
             */
            readonly notables: "/insights/notables/{year}";
        };
    };
}
type APIRequestData = {
    call: "/teams/{page_num}";
    page_num: number;
} | {
    call: "/teams/{page_num}/simple";
    page_num: number;
} | {
    call: "/teams/{page_num}/keys";
    page_num: number;
} | {
    call: "/teams/{year}/{page_num}";
    year: number;
    page_num: number;
} | {
    call: "/teams/{year}/{page_num}/simple";
    year: number;
    page_num: number;
} | {
    call: "/teams/{year}/{page_num}/keys";
    year: number;
    page_num: number;
} | {
    call: "/events/{year}";
    year: number;
} | {
    call: "/events/{year}/simple";
    year: number;
} | {
    call: "/events/{year}/keys";
    year: number;
} | {
    call: "/district/{district_key}/events";
    district_key: string;
} | {
    call: "/district/{district_key}/awards";
    district_key: string;
} | {
    call: "/district/{district_key}/events/simple";
    district_key: string;
} | {
    call: "/district/{district_key}/events/keys";
    district_key: string;
} | {
    call: "/district/{district_key}/teams";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/simple";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/keys";
    district_key: string;
} | {
    call: "/district/{district_key}/rankings";
    district_key: string;
} | {
    call: "/insights/leaderboards/{year}";
    year: number;
} | {
    call: "/insights/notables/{year}";
    year: number;
} | {
    call: "/team/{team_key}";
    team_key: string;
} | {
    call: "/team/{team_key}/simple";
    team_key: string;
} | {
    call: "/team/{team_key}/history";
    team_key: string;
} | {
    call: "/team/{team_key}/years_participated";
    team_key: string;
} | {
    call: "/team/{team_key}/districts";
    team_key: string;
} | {
    call: "/team/{team_key}/robots";
    team_key: string;
} | {
    call: "/team/{team_key}/events";
    team_key: string;
} | {
    call: "/team/{team_key}/events/simple";
    team_key: string;
} | {
    call: "/team/{team_key}/events/keys";
    team_key: string;
} | {
    call: "/team/{team_key}/events/{year}";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/events/{year}/simple";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/events/{year}/keys";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/event/{event_key}/matches";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/matches/simple";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/matches/keys";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/awards";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/status";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/awards";
    team_key: string;
} | {
    call: "/team/{team_key}/awards/{year}";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/matches/{year}";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/matches/{year}/simple";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/matches/{year}/keys";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/media/{year}";
    team_key: string;
    year: number;
} | {
    call: "/team/{team_key}/media/tag/{media_tag}";
    team_key: string;
    media_tag: string;
} | {
    call: "/team/{team_key}/media/tag/{media_tag}/{year}";
    team_key: string;
    media_tag: string;
    year: number;
} | {
    call: "/team/{team_key}/social_media";
    team_key: string;
} | {
    call: "/event/{event_key}/teams";
    event_key: string;
} | {
    call: "/event/{event_key}/teams/simple";
    event_key: string;
} | {
    call: "/event/{event_key}/teams/keys";
    event_key: string;
} | {
    call: "/event/{event_key}/teams/statuses";
    event_key: string;
} | {
    call: "/district/{district_key}/teams";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/simple";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/keys";
    district_key: string;
} | {
    call: "/district/{district_key}/rankings";
    district_key: string;
} | {
    call: "/event/{event_key}";
    event_key: string;
} | {
    call: "/event/{event_key}/simple";
    event_key: string;
} | {
    call: "/event/{event_key}/alliances";
    event_key: string;
} | {
    call: "/event/{event_key}/insights";
    event_key: string;
} | {
    call: "/event/{event_key}/oprs";
    event_key: string;
} | {
    call: "/event/{event_key}/coprs";
    event_key: string;
} | {
    call: "/event/{event_key}/predictions";
    event_key: string;
} | {
    call: "/event/{event_key}/rankings";
    event_key: string;
} | {
    call: "/event/{event_key}/district_points";
    event_key: string;
} | {
    call: "/event/{event_key}/regional_champs_pool_points";
    event_key: string;
} | {
    call: "/event/{event_key}/advancement_points";
    event_key: string;
} | {
    call: "/event/{event_key}/matches";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/simple";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/keys";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/timeseries";
    event_key: string;
} | {
    call: "/event/{event_key}/awards";
    event_key: string;
} | {
    call: "/event/{event_key}/team_media";
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/matches";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/matches/simple";
    team_key: string;
    event_key: string;
} | {
    call: "/team/{team_key}/event/{event_key}/matches/keys";
    team_key: string;
    event_key: string;
} | {
    call: "/event/{event_key}/matches";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/simple";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/keys";
    event_key: string;
} | {
    call: "/event/{event_key}/matches/timeseries";
    event_key: string;
} | {
    call: "/match/{match_key}";
    match_key: string;
} | {
    call: "/match/{match_key}/simple";
    match_key: string;
} | {
    call: "/match/{match_key}/timeseries";
    match_key: string;
} | {
    call: "/match/{match_key}/zebra_motionworks";
    match_key: string;
} | {
    call: "/district/{district_key}/events";
    district_key: string;
} | {
    call: "/district/{district_key}/awards";
    district_key: string;
} | {
    call: "/district/{district_key}/events/simple";
    district_key: string;
} | {
    call: "/district/{district_key}/events/keys";
    district_key: string;
} | {
    call: "/district/{district_key}/teams";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/simple";
    district_key: string;
} | {
    call: "/district/{district_key}/teams/keys";
    district_key: string;
} | {
    call: "/district/{district_key}/rankings";
    district_key: string;
} | {
    call: "/district/{district_abbreviation}/history";
    district_abbreviation: string;
} | {
    call: "/insights/leaderboards/{year}";
    year: number;
} | {
    call: "/insights/notables/{year}";
    year: number;
};
export type TeamFull = {
    key: string;
    team_number: number;
    nickname: string;
    name: string;
    school_name: string;
    city: string;
    state_prov: string;
    country: string;
    address: string;
    postal_code: string;
    gmaps_place_id: string;
    gmaps_url: string;
    lat: number;
    lng: number;
    location_name: string;
    website: string;
    rookie_year: number;
};
export type TeamSimple = {
    key: string;
    team_number: number;
    nickname: string;
    name: string;
    city: string;
    state_prov: string;
    country: string;
};
export type EventFull = {
    key: string;
    name: string;
    event_code: string;
    event_type: number;
    district: {
        abbreviation: string;
        display_name: string;
        key: string;
        year: number;
    };
    city: string;
    state_prov: string;
    country: string;
    start_date: string;
    end_date: string;
    year: number;
    short_name: string;
    event_type_string: string;
    week: number;
    address: string;
    postal_code: string;
    gmaps_place_id: string;
    gmaps_url: string;
    lat: number;
    lng: number;
    location_name: string;
    timezone: string;
    website: string;
    first_event_id: string;
    first_event_code: string;
    webcasts: {
        type: string;
        channel: string;
        date: string;
        file: string;
    }[];
    division_keys: string[];
    parent_event_key: string;
    playoff_type: number;
    playoff_type_string: string;
};
export type EventSimple = {
    key: string;
    name: string;
    event_code: string;
    event_type: number;
    district: {
        abbreviation: string;
        display_name: string;
        key: string;
        year: number;
    };
    city: string;
    state_prov: string;
    country: string;
    start_date: string;
    end_date: string;
    year: number;
};
export type Status = {
    qual: {
        num_teams: number;
        ranking: {
            matches_played: number;
            qual_average: number;
            sort_orders: number[];
            record: {
                losses: number;
                wins: number;
                ties: number;
            };
            rank: number;
            dq: number;
            team_key: string;
        };
        sort_order_info: {
            precision: number;
            name: string;
        }[];
        status: string;
    };
    alliance: {
        name: string;
        number: number;
        backup: {
            out: string;
            in: string;
        };
        pick: number;
    };
    playoff: {
        level: string;
        current_level_record: {
            losses: number;
            wins: number;
            ties: number;
        };
        record: {
            losses: number;
            wins: number;
            ties: number;
        };
        status: string;
        playoff_average: number;
    };
    alliance_status_str: string;
    playoff_status_str: string;
    overall_status_str: string;
    next_match_key: string;
    last_match_key: string;
};
export type Statuses = {
    [teamKey: string]: Status;
};
export type Award = {
    name: string;
    award_type: number;
    event_key: string;
    recipient_list: {
        team_key: string;
        awardee: string;
    }[];
    year: number;
};
export type Ranking = {
    team_key: string;
    rank: number;
    rookie_bonus: number;
    point_total: number;
    event_points: {
        district_cmp: boolean;
        total: number;
        alliance_points: number;
        elim_points: number;
        award_points: number;
        event_key: string;
        qual_points: number;
    };
};
export type Leaderboard = {
    data: {
        rankings: {
            value: number;
            keys: string[];
        }[];
        key_type: string;
    };
    name: string;
    year: number;
};
export type Notable = {
    data: {
        entries: {
            context: string[];
            team_key: string;
        }[];
    };
    name: string;
    year: number;
};
export type District = {
    abbreviation: string;
    display_name: string;
    key: string;
    year: number;
};
export type Robot = {
    year: number;
    robot_name: string;
    key: string;
    team_key: string;
};
export type MatchFull = {
    key: string;
    comp_level: "qm" | "f" | "sf";
    set_number: number;
    match_number: number;
    alliances: {
        red: {
            score: number;
            team_keys: string[];
            surrogate_team_keys: string[];
            dq_team_keys: string[];
        };
        blue: {
            score: number;
            team_keys: string[];
            surrogate_team_keys: string[];
            dq_team_keys: string[];
        };
    };
    winning_alliance: "red" | "blue";
    event_key: string;
    time: number;
    actual_time: number;
    predicted_time: number;
    post_result_time: number;
    score_breakdown: {
        blue: {
            auto_points: number;
            teleop_points: number;
            container_points: number;
            tote_points: number;
            litter_points: number;
            foul_points: number;
            adjust_points: number;
            total_points: number;
            foul_count: number;
            tote_count_far: number;
            tote_count_near: number;
            tote_set: boolean;
            tote_stack: boolean;
            container_count_level1: number;
            container_count_level2: number;
            container_count_level3: number;
            container_count_level4: number;
            container_count_level5: number;
            container_count_level6: number;
            container_set: boolean;
            litter_count_container: number;
            litter_count_landfill: number;
            litter_count_unprocessed: number;
            robot_set: boolean;
        };
        red: {
            auto_points: number;
            teleop_points: number;
            container_points: number;
            tote_points: number;
            litter_points: number;
            foul_points: number;
            adjust_points: number;
            total_points: number;
            foul_count: number;
            tote_count_far: number;
            tote_count_near: number;
            tote_set: boolean;
            tote_stack: boolean;
            container_count_level1: number;
            container_count_level2: number;
            container_count_level3: number;
            container_count_level4: number;
            container_count_level5: number;
            container_count_level6: number;
            container_set: boolean;
            litter_count_container: number;
            litter_count_landfill: number;
            litter_count_unprocessed: number;
            robot_set: boolean;
        };
        coopertition: string;
        coopertition_points: number;
    };
    videos: {
        type: string;
        key: string;
    }[];
};
export type MatchSimple = {
    key: string;
    comp_level: "qm" | "f" | "sf";
    set_number: number;
    match_number: number;
    alliances: {
        red: {
            score: number;
            team_keys: string[];
            surrogate_team_keys: string[];
            dq_team_keys: string[];
        };
        blue: {
            score: number;
            team_keys: string[];
            surrogate_team_keys: string[];
            dq_team_keys: string[];
        };
    };
    winning_alliance: "red" | "blue";
    event_key: string;
    time: number;
    actual_time: number;
    predicted_time: number;
    post_result_time: number;
    score_breakdown: {
        blue: {
            auto_points: number;
            teleop_points: number;
            container_points: number;
            tote_points: number;
            litter_points: number;
            foul_points: number;
            adjust_points: number;
            total_points: number;
            foul_count: number;
            tote_count_far: number;
            tote_count_near: number;
            tote_set: boolean;
            tote_stack: boolean;
            container_count_level1: number;
            container_count_level2: number;
            container_count_level3: number;
            container_count_level4: number;
            container_count_level5: number;
            container_count_level6: number;
            container_set: boolean;
            litter_count_container: number;
            litter_count_landfill: number;
            litter_count_unprocessed: number;
            robot_set: boolean;
        };
        red: {
            auto_points: number;
            teleop_points: number;
            container_points: number;
            tote_points: number;
            litter_points: number;
            foul_points: number;
            adjust_points: number;
            total_points: number;
            foul_count: number;
            tote_count_far: number;
            tote_count_near: number;
            tote_set: boolean;
            tote_stack: boolean;
            container_count_level1: number;
            container_count_level2: number;
            container_count_level3: number;
            container_count_level4: number;
            container_count_level5: number;
            container_count_level6: number;
            container_set: boolean;
            litter_count_container: number;
            litter_count_landfill: number;
            litter_count_unprocessed: number;
            robot_set: boolean;
        };
        coopertition: string;
        coopertition_points: number;
    };
    videos: {
        type: string;
        key: string;
    }[];
};
export type Media = {
    type: string;
    foreign_key: string;
    details: {
        [platformKey: string]: string;
    };
    preferred: boolean;
    team_keys: string[];
    direct_url: string;
    view_url: string;
};
export type Alliance = {
    name: string;
    backup: {
        in: string;
        out: string;
    };
    declines: string[];
    picks: string[];
    status: {
        playoff_average: number;
        level: string;
        record: {
            losses: number;
            wins: number;
            ties: number;
        };
        current_level_record: {
            losses: number;
            wins: number;
            ties: number;
        };
        status: string;
    };
};
export type EventRankings = {
    rankings: {
        matches_played: number;
        qual_average: number;
        extra_stats: number[];
        sort_orders: number[];
        record: {
            losses: number;
            wins: number;
            ties: number;
        };
        rank: number;
        dq: number;
        team_key: string;
    }[];
    extra_stats_info: {
        precision: number;
        name: string;
    }[];
    sort_order_info: {
        precision: number;
        name: string;
    }[];
};
export type PointsData = {
    points: {
        [teamKey: string]: {
            alliance_points: number;
            award_points: number;
            elim_points: number;
            qual_points: number;
            total: number;
        };
    };
    tiebreakers: {
        [teamKey: string]: {
            highest_qual_scores: number[];
            qual_wins: number;
        };
    };
};
type APIResponseMap = {
    "/teams/{page_num}": TeamFull[];
    "/teams/{page_num}/simple": TeamSimple[];
    "/teams/{page_num}/keys": string[];
    "/teams/{year}/{page_num}": TeamFull[];
    "/teams/{year}/{page_num}/simple": TeamSimple[];
    "/teams/{year}/{page_num}/keys": string[];
    "/team/{team_key}/events/{year}/statuses": Statuses;
    "/events/{year}": EventFull[];
    "/events/{year}/simple": EventSimple[];
    "/events/{year}/keys": string[];
    "/event/{event_key}/teams": TeamFull[];
    "/event/{event_key}/teams/simple": TeamSimple[];
    "/event/{event_key}/teams/keys": string[];
    "/event/{event_key}/teams/statuses": Statuses;
    "/district/{district_key}/events": EventFull[];
    "/district/{district_key}/awards": Award[];
    "/district/{district_key}/events/simple": EventSimple[];
    "/district/{district_key}/events/keys": string[];
    "/district/{district_key}/teams": TeamFull[];
    "/district/{district_key}/teams/simple": TeamSimple[];
    "/district/{district_key}/teams/keys": string[];
    "/district/{district_key}/rankings": Ranking[];
    "/insights/leaderboards/{year}": Leaderboard[];
    "/insights/notables/{year}": Notable[];
    "/team/{team_key}": TeamFull;
    "/team/{team_key}/simple": TeamSimple;
    "/team/{team_key}/history": {
        events: EventFull[];
        awards: Award[];
    };
    "/team/{team_key}/years_participated": number[];
    "/team/{team_key}/districts": District[];
    "/team/{team_key}/robots": Robot[];
    "/team/{team_key}/events": EventFull[];
    "/team/{team_key}/events/simple": EventSimple[];
    "/team/{team_key}/events/keys": string[];
    "/team/{team_key}/events/{year}": EventFull[];
    "/team/{team_key}/events/{year}/simple": EventSimple[];
    "/team/{team_key}/events/{year}/keys": string[];
    "/team/{team_key}/event/{event_key}/matches": MatchFull[];
    "/team/{team_key}/event/{event_key}/matches/simple": MatchSimple[];
    "/team/{team_key}/event/{event_key}/matches/keys": string[];
    "/team/{team_key}/event/{event_key}/awards": Award[];
    "/team/{team_key}/event/{event_key}/status": Status;
    "/team/{team_key}/awards": Award[];
    "/team/{team_key}/awards/{year}": Award[];
    "/team/{team_key}/matches/{year}": MatchFull[];
    "/team/{team_key}/matches/{year}/simple": MatchSimple[];
    "/team/{team_key}/matches/{year}/keys": string[];
    "/team/{team_key}/media/{year}": Media[];
    "/team/{team_key}/media/tag/{media_tag}": Media[];
    "/team/{team_key}/media/tag/{media_tag}/{year}": Media[];
    "/team/{team_key}/social_media": Media[];
    "/event/{event_key}": EventFull;
    "/event/{event_key}/simple": EventSimple;
    "/event/{event_key}/alliances": Alliance;
    "/event/{event_key}/insights": {
        qual: any;
        playoff: any;
    };
    "/event/{event_key}/oprs": {
        "oprs": {
            [teamKey: string]: number;
        };
        "dprs": {
            [teamKey: string]: number;
        };
        "ccwms": {
            [teamKey: string]: number;
        };
    };
    "/event/{event_key}/coprs": {
        [dataField: string]: {
            [teamKey: string]: number;
        };
    };
    "/event/{event_key}/predictions": unknown;
    "/event/{event_key}/rankings": EventRankings;
    "/event/{event_key}/district_points": PointsData;
    "/event/{event_key}/regional_champs_pool_points": PointsData;
    "/event/{event_key}/advancement_points": PointsData;
    "/event/{event_key}/matches": MatchFull[];
    "/event/{event_key}/matches/simple": MatchSimple[];
    "/event/{event_key}/matches/keys": string[];
    "/event/{event_key}/matches/timeseries": unknown;
    "/event/{event_key}/awards": Award[];
    "/event/{event_key}/team_media": Media[];
    "/match/{match_key}": MatchFull;
    "/match/{match_key}/simple": MatchSimple;
    "/match/{match_key}/timeseries": unknown;
    "/match/{match_key}/zebra_motionworks": unknown | null;
    "/districts/{year}": District[];
    "/district/{district_abbreviation}/history": District[];
};
export {};
//# sourceMappingURL=index.d.ts.map