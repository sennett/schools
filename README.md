I want to know all points within a lat lng that have x schools within y meters.

To refresh google data, copy data from 1_googleData into 200

- `buildDataSet` - takes the CSV and whatever latlng info we have and builds the dataset (under VS) that is used to search for schools
- `fetchLatlngs` - augments the built dataset with latlng data from google maps.  Cashes by URN.
- `build` - builds the front-end package using prebuild dataset and latlngs