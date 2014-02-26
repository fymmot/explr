var api = api || {};

api.musicbrainz = {};
api.musicbrainz.url = "http://musicbrainz.org/ws/2/";

/**
* Send lookup call to Musicbrainz
* @param {String} entity    The entity name (e.g. "artist")
* @param {String} mbid      The MBID of the entity to look up
* @param {Function} callback    The callback function to call with the data
                                returned from the request. Takes two arguments,
                                error and data (callback(error, data))
*/
api.musicbrainz.lookup = function(entity, mbid, callback) {

    var url = api.musicbrainz.url + entity +"/"+mbid+"?fmt=json&inc=aliases";

	d3.json(url, callback);
}
