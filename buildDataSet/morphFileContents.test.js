const morphFileContents = require('./morphFileContents')
const fixtures = require('./_fixtures')

describe('morphFileContents', () => {
  let csvPointer, latlngPointer

  beforeEach(() => {
    csvPointer = Promise.resolve(fixtures.csv)
    latlngPointer = Promise.resolve(fixtures.latlng)
  })

  it('includes all the schools', async () => {
    const result = await morphFileContents(csvPointer, latlngPointer)
    expect(result.schools.length).toBe(4)
  })

  it('removes the header row', async () => {
    const result = await morphFileContents(csvPointer, latlngPointer)
    expect(result.schools.map((school) => school.urn)).not.toContain(('urn'))
  })

  it('adds latlng data from latlng files', async () => {
    const result = await morphFileContents(csvPointer, latlngPointer)
    const firstSchool = result.schools.find((school) => school.urn === '100000')
    const lastSchool = result.schools.find((school) => school.urn === '100003')

    expect(firstSchool.lat).toEqual(52.4777536)
    expect(firstSchool.lng).toEqual(-1.8132158)

    expect(lastSchool.lat).toEqual(52.471393)
    expect(lastSchool.lng).toEqual(-1.926634)
  })

  it('removes schools with no latlng data', async () => {
    const result = await morphFileContents(csvPointer, latlngPointer)
    expect(result.schools.map((school) => school.urn)).not.toContain('100004')
  })
})
