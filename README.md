Finding a school in Birmingham UK
---

There are limited places in schools in Birmingham, and waiting lists are based on straight-line distance.  These scripts take data on schools downloaded from tke UK government, put them on a map, and allow someone to search for all points that have X schools within Y distance.

- `npm run server` - runs the server so the app can be used
- `npm run buildDataSet` - takes the CSV and whatever latlng info we have and builds the dataset (under VS) that is used to search for schools
- todo `fetchLatlngs` - augments the built dataset with latlng data from google maps.  Cashes by URN.

Current limitations:

- shows mainly non-religious schools
- shows only primary and nursery schools

Installation:

- checkout and `npm install`