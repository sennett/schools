const latlanFixtures = {
  '100000': {
    'status': 200,
    'headers': {
      'content-type': 'application/json; charset=UTF-8',
      'date': 'Wed, 06 Mar 2019 15:46:09 GMT',
      'expires': 'Thu, 07 Mar 2019 15:46:09 GMT',
      'cache-control': 'public, max-age=86400',
      'access-control-allow-origin': '*',
      'server': 'mafe',
      'x-xss-protection': '1; mode=block',
      'x-frame-options': 'SAMEORIGIN',
      'server-timing': 'gfet4t7; dur=51',
      'alt-svc': 'quic=":443"; ma=2592000; v="46,44,43,39"',
      'accept-ranges': 'none',
      'vary': 'Accept-Language,Accept-Encoding',
      'connection': 'close'
    },
    'json': {
      'results': [
        {
          'address_components': [
            {
              'long_name': '358',
              'short_name': '358',
              'types': [
                'street_number'
              ]
            },
            {
              'long_name': 'Bordesley Green East',
              'short_name': 'Bordesley Green E',
              'types': [
                'route'
              ]
            },
            {
              'long_name': 'Birmingham',
              'short_name': 'Birmingham',
              'types': [
                'postal_town'
              ]
            },
            {
              'long_name': 'West Midlands',
              'short_name': 'West Midlands',
              'types': [
                'administrative_area_level_2',
                'political'
              ]
            },
            {
              'long_name': 'England',
              'short_name': 'England',
              'types': [
                'administrative_area_level_1',
                'political'
              ]
            },
            {
              'long_name': 'United Kingdom',
              'short_name': 'GB',
              'types': [
                'country',
                'political'
              ]
            },
            {
              'long_name': 'B33 8QB',
              'short_name': 'B33 8QB',
              'types': [
                'postal_code'
              ]
            }
          ],
          'formatted_address': '358 Bordesley Green E, Birmingham B33 8QB, UK',
          'geometry': {
            'location': {
              'lat': 52.4777536,
              'lng': -1.8132158
            },
            'location_type': 'ROOFTOP',
            'viewport': {
              'northeast': {
                'lat': 52.4791025802915,
                'lng': -1.811866819708498
              },
              'southwest': {
                'lat': 52.4764046197085,
                'lng': -1.814564780291501
              }
            }
          },
          'place_id': 'ChIJgwaLXva6cEgRt-azNaVrIJ0',
          'plus_code': {
            'compound_code': 'F5HP+4P Birmingham, United Kingdom',
            'global_code': '9C4WF5HP+4P'
          },
          'types': [
            'establishment',
            'point_of_interest',
            'school'
          ]
        }
      ],
      'status': 'OK'
    },
    'requestUrl': 'https://maps.googleapis.com/maps/api/geocode/json?address=Bordesley%20Green%20East%20Nursery%20School%2C%20358%20Bordesley%20Green%20East%2C%20Stechford%2C%20Bordesley%20Green%2C%20Birmingham%2C%20West%20Midlands%2C%20B33%208QB&key=XXX',
    'query': {
      'address': 'Bordesley Green East Nursery School, 358 Bordesley Green East, Stechford, Bordesley Green, Birmingham, West Midlands, B33 8QB',
      'key': 'XXX'
    }
  },
  '100001': {
    'status': 200,
    'headers': {
      'content-type': 'application/json; charset=UTF-8',
      'date': 'Wed, 06 Mar 2019 15:49:43 GMT',
      'expires': 'Thu, 07 Mar 2019 15:49:43 GMT',
      'cache-control': 'public, max-age=86400',
      'access-control-allow-origin': '*',
      'server': 'mafe',
      'x-xss-protection': '1; mode=block',
      'x-frame-options': 'SAMEORIGIN',
      'server-timing': 'gfet4t7; dur=632',
      'alt-svc': 'quic=":443"; ma=2592000; v="46,44,43,39"',
      'accept-ranges': 'none',
      'vary': 'Accept-Language,Accept-Encoding',
      'connection': 'close'
    },
    'json': {
      'results': [
        {
          'address_components': [
            {
              'long_name': 'Brearley Street Nursery School',
              'short_name': 'Brearley Street Nursery School',
              'types': [
                'premise'
              ]
            },
            {
              'long_name': 'Brearley Street',
              'short_name': 'Brearley St',
              'types': [
                'route'
              ]
            },
            {
              'long_name': 'Birmingham',
              'short_name': 'Birmingham',
              'types': [
                'postal_town'
              ]
            },
            {
              'long_name': 'West Midlands',
              'short_name': 'West Midlands',
              'types': [
                'administrative_area_level_2',
                'political'
              ]
            },
            {
              'long_name': 'England',
              'short_name': 'England',
              'types': [
                'administrative_area_level_1',
                'political'
              ]
            },
            {
              'long_name': 'United Kingdom',
              'short_name': 'GB',
              'types': [
                'country',
                'political'
              ]
            },
            {
              'long_name': 'B19 3XJ',
              'short_name': 'B19 3XJ',
              'types': [
                'postal_code'
              ]
            }
          ],
          'formatted_address': 'Brearley Street Nursery School, Brearley St, Birmingham B19 3XJ, UK',
          'geometry': {
            'bounds': {
              'northeast': {
                'lat': 52.4914414,
                'lng': -1.9002075
              },
              'southwest': {
                'lat': 52.4912491,
                'lng': -1.9004782
              }
            },
            'location': {
              'lat': 52.49143669999999,
              'lng': -1.9003513
            },
            'location_type': 'ROOFTOP',
            'viewport': {
              'northeast': {
                'lat': 52.4926942302915,
                'lng': -1.898993869708498
              },
              'southwest': {
                'lat': 52.4899962697085,
                'lng': -1.901691830291502
              }
            }
          },
          'place_id': 'ChIJzWdcIJS8cEgRNJZ2c8m4GBE',
          'types': [
            'premise'
          ]
        }
      ],
      'status': 'OK'
    },
    'requestUrl': 'https://maps.googleapis.com/maps/api/geocode/json?address=Brearley%20Nursery%20School%2C%20Brearley%20Street%2C%20Newtown%2C%20Birmingham%2C%20West%20Midlands%2C%20B19%203XJ&key=XXX',
    'query': {
      'address': 'Brearley Nursery School, Brearley Street, Newtown, Birmingham, West Midlands, B19 3XJ',
      'key': 'XXX'
    }
  },
  '100002': {
    'status': 200,
    'headers': {
      'content-type': 'application/json; charset=UTF-8',
      'date': 'Wed, 06 Mar 2019 15:50:31 GMT',
      'expires': 'Thu, 07 Mar 2019 15:50:31 GMT',
      'cache-control': 'public, max-age=86400',
      'access-control-allow-origin': '*',
      'server': 'mafe',
      'x-xss-protection': '1; mode=block',
      'x-frame-options': 'SAMEORIGIN',
      'server-timing': 'gfet4t7; dur=562',
      'alt-svc': 'quic=":443"; ma=2592000; v="46,44,43,39"',
      'accept-ranges': 'none',
      'vary': 'Accept-Language,Accept-Encoding',
      'connection': 'close'
    },
    'json': {
      'results': [{
        'address_components': [{
          'long_name': '117',
          'short_name': '117',
          'types': ['street_number']
        }, {
          'long_name': 'Garretts Green Lane',
          'short_name': 'Garretts Green Ln',
          'types': ['route']
        }, {
          'long_name': 'Birmingham',
          'short_name': 'Birmingham',
          'types': ['postal_town']
        }, {
          'long_name': 'West Midlands',
          'short_name': 'West Midlands',
          'types': ['administrative_area_level_2', 'political']
        }, {
          'long_name': 'England',
          'short_name': 'England',
          'types': ['administrative_area_level_1', 'political']
        }, {
          'long_name': 'United Kingdom',
          'short_name': 'GB',
          'types': ['country', 'political']
        }, { 'long_name': 'B26 2JL', 'short_name': 'B26 2JL', 'types': ['postal_code'] }],
        'formatted_address': '117 Garretts Green Ln, Birmingham B26 2JL, UK',
        'geometry': {
          'location': { 'lat': 52.4671882, 'lng': -1.7913915 },
          'location_type': 'ROOFTOP',
          'viewport': {
            'northeast': { 'lat': 52.46853718029149, 'lng': -1.790042519708498 },
            'southwest': { 'lat': 52.4658392197085, 'lng': -1.792740480291502 }
          }
        },
        'place_id': 'ChIJW4IyMGW6cEgRktMhd3wRzC8',
        'plus_code': { 'compound_code': 'F685+VC Birmingham, United Kingdom', 'global_code': '9C4WF685+VC' },
        'types': ['establishment', 'point_of_interest', 'school']
      }],
      'status': 'OK'
    },
    'requestUrl': 'https://maps.googleapis.com/maps/api/geocode/json?address=Garretts%20Green%20Nursery%20School%2C%20117%20Garretts%20Green%20Lane%2C%20Sheldon%2C%20Birmingham%2C%20West%20Midlands%2C%20B26%202JL&key=XXX',
    'query': {
      'address': 'Garretts Green Nursery School, 117 Garretts Green Lane, Sheldon, Birmingham, West Midlands, B26 2JL',
      'key': 'XXX'
    }
  },
  '100003': {
    'status': 200,
    'headers': {
      'content-type': 'application/json; charset=UTF-8',
      'date': 'Wed, 06 Mar 2019 15:50:31 GMT',
      'expires': 'Thu, 07 Mar 2019 15:50:31 GMT',
      'cache-control': 'public, max-age=86400',
      'access-control-allow-origin': '*',
      'server': 'mafe',
      'x-xss-protection': '1; mode=block',
      'x-frame-options': 'SAMEORIGIN',
      'server-timing': 'gfet4t7; dur=707',
      'alt-svc': 'quic=":443"; ma=2592000; v="46,44,43,39"',
      'accept-ranges': 'none',
      'vary': 'Accept-Language,Accept-Encoding',
      'connection': 'close'
    },
    'json': {
      'results': [
        {
          'address_components': [
            {
              'long_name': '3',
              'short_name': '3',
              'types': [
                'street_number'
              ]
            },
            {
              'long_name': 'Highfield Road',
              'short_name': 'Highfield Rd',
              'types': [
                'route'
              ]
            },
            {
              'long_name': 'Birmingham',
              'short_name': 'Birmingham',
              'types': [
                'postal_town'
              ]
            },
            {
              'long_name': 'United Kingdom',
              'short_name': 'GB',
              'types': [
                'country',
                'political'
              ]
            },
            {
              'long_name': 'B15 3ED',
              'short_name': 'B15 3ED',
              'types': [
                'postal_code'
              ]
            }
          ],
          'formatted_address': '4, 3 Highfield Rd, Birmingham B15 3ED, United Kingdom',
          'geometry': {
            'location': {
              'lat': 52.471393,
              'lng': -1.926634
            },
            'location_type': 'ROOFTOP',
            'viewport': {
              'northeast': {
                'lat': 52.4727419802915,
                'lng': -1.925285019708498
              },
              'southwest': {
                'lat': 52.4700440197085,
                'lng': -1.927982980291502
              }
            }
          },
          'place_id': 'ChIJlcznrFW8cEgRryHgINVG4vg',
          'plus_code': {
            'compound_code': 'F3CF+H8 Birmingham, United Kingdom',
            'global_code': '9C4WF3CF+H8'
          },
          'types': [
            'establishment',
            'point_of_interest',
            'school'
          ]
        }
      ],
      'status': 'OK'
    },
    'requestUrl': 'https://maps.googleapis.com/maps/api/geocode/json?address=Highfield%20Nursery%20School%2C%20Highfield%20Road%2C%20Saltley%2C%20Birmingham%2C%20West%20Midlands%2C%20B8%203QU&key=XXX',
    'query': {
      'address': 'Highfield Nursery School, Highfield Road, Saltley, Birmingham, West Midlands, B8 3QU',
      'key': 'XXX'
    }
  }
}

const csvFixture = `URN,Local authority (code),Local authority (name),Establishment number,Establishment name,Street,Locality,Address3,Town,County,Postcode,Type of establishment,Statutory highest age,Statutory lowest age,Boarders,Sixth form,UKPRN,Phase of education,Gender,Religious character,Religious ethos,Admissions policy,Website address,Telephone number,Headteacher,Establishment status,Reason establishment opened,Opening date,Parliamentary Constituency (code),Parliamentary Constituency (name),Region
100000,201,City of London,3614,Sir John Cass's Foundation Primary School,St James's Passage,Duke's Place,,London,,EC3A 5DE,Voluntary Aided School,11,3,No Boarders,Does not have a sixth form,,Primary,Mixed,Church of England,Does not apply,Not applicable,www.sirjohncassprimary.org,02072831147,Mr Tim Wilson,Open,Not applicable,,E14000639,Cities of London and Westminster,London
100001,201,City of London,6005,City of London School for Girls,St Giles' Terrace,Barbican,,London,,EC2Y 8BB,Other Independent School,18,7,No Boarders,Has a sixth form,10013279,Not applicable,Girls,None,Church of England,Not collected,http://www.clsg.org.uk,02078475500,Mrs Ena Harrop,Open,Not applicable,01/01/1920,E14000639,Cities of London and Westminster,London
100002,201,City of London,6006,St Paul's Cathedral School,2 New Change,,,London,,EC4M 9AD,Other Independent School,13,4,Boarding School,Does not have a sixth form,10018890,Not applicable,Mixed,Church of England,Christian,Not collected,http://www.stpauls.co.uk/school/school.htm,02072485156,Mr Neil Chippington,Open,Not applicable,01/01/1939,E14000639,Cities of London and Westminster,London
100003,201,City of London,6007,City of London School,Queen Victoria Street,,,London,,EC4V 3AL,Other Independent School,18,10,No Boarders,Has a sixth form,10008165,Not applicable,Boys,None,None,Not collected,http://www.clsb.org/,02074890291,Ms Sarah Fletcher,Open,Not applicable,01/01/1919,E14000639,Cities of London and Westminster,London
100004,201,City of London,6007,City of London School,Queen Victoria Street,,,London,,EC4V 3AL,Other Independent School,18,10,No Boarders,Has a sixth form,10008165,Not applicable,Boys,None,None,Not collected,http://www.clsb.org/,02074890291,Ms Sarah Fletcher,Open,Not applicable,01/01/1919,E14000639,Cities of London and Westminster,London
`

module.exports = {
  latlng: latlanFixtures,
  csv: csvFixture
}
