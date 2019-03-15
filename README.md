Finding a school in Birmingham UK
---

There are limited places in schools in Birmingham, and waiting lists are based on straight-line distance, which means that to maximise the chances of getting your kids into a school, you need to live as close as possible to as many as possible.

This script takes data on schools downloaded from the UK government and puts the schools on a map, allowing someone to search for all points that have X schools within Y distance to maximise the chances of getting high on a waiting list.

Demo here:  https://youtu.be/6Yx-Rpdyjzw

Commands:

- `npm run server` - runs the server so the app can be loaded in a web-browser
- `npm run buildDataSet` - takes the CSV and whatever latlng info we have and builds the dataset (under VS) that is used to search for schools
- todo `fetchLatlngs` - augments the built dataset with latlng data from google maps.  Caches by URN.

Current limitations:

- shows only primary and nursery schools, but could be extended to include others

Installation:

- git checkout and `npm install`