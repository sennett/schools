const morphFileContents = require('./morphFileContents')

const fixture = `URN,Local authority (code),Local authority (name),Establishment number,Establishment name,Street,Locality,Address3,Town,County,Postcode,Type of establishment,Statutory highest age,Statutory lowest age,Boarders,Sixth form,UKPRN,Phase of education,Gender,Religious character,Religious ethos,Admissions policy,Website address,Telephone number,Headteacher,Establishment status,Reason establishment opened,Opening date,Parliamentary Constituency (code),Parliamentary Constituency (name),Region
100000,201,City of London,3614,Sir John Cass's Foundation Primary School,St James's Passage,Duke's Place,,London,,EC3A 5DE,Voluntary Aided School,11,3,No Boarders,Does not have a sixth form,,Primary,Mixed,Church of England,Does not apply,Not applicable,www.sirjohncassprimary.org,02072831147,Mr Tim Wilson,Open,Not applicable,,E14000639,Cities of London and Westminster,London
100001,201,City of London,6005,City of London School for Girls,St Giles' Terrace,Barbican,,London,,EC2Y 8BB,Other Independent School,18,7,No Boarders,Has a sixth form,10013279,Not applicable,Girls,None,Church of England,Not collected,http://www.clsg.org.uk,02078475500,Mrs Ena Harrop,Open,Not applicable,01/01/1920,E14000639,Cities of London and Westminster,London
100002,201,City of London,6006,St Paul's Cathedral School,2 New Change,,,London,,EC4M 9AD,Other Independent School,13,4,Boarding School,Does not have a sixth form,10018890,Not applicable,Mixed,Church of England,Christian,Not collected,http://www.stpauls.co.uk/school/school.htm,02072485156,Mr Neil Chippington,Open,Not applicable,01/01/1939,E14000639,Cities of London and Westminster,London
100003,201,City of London,6007,City of London School,Queen Victoria Street,,,London,,EC4V 3AL,Other Independent School,18,10,No Boarders,Has a sixth form,10008165,Not applicable,Boys,None,None,Not collected,http://www.clsb.org/,02074890291,Ms Sarah Fletcher,Open,Not applicable,01/01/1919,E14000639,Cities of London and Westminster,London
`

describe('morphFileContents', () => {
  it('includes all the schools', async () => {
    const result = await morphFileContents(Promise.resolve(fixture))
    expect(result.schools.length).toBe(4)
  })

  it('removes the header row', async () => {
    const result = await morphFileContents(Promise.resolve(fixture))
    expect(result.schools.map((school) => school.urn)).not.toContain(('urn'))
  })
})
