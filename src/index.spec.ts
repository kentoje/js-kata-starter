import { createAgendaEvent, AgendaEvent, IdGenerator } from './index'

describe("Test of systemUnderTest()", function () {
  it('should create an AgendaEvent', () => {
    // GIVEN
    const generator: IdGenerator = () => 'e39707f2-55ac-11eb-ae93-0242ac130002'

    // WHEN
    const actual = createAgendaEvent(
      generator,
      'Foo',
      '2011-10-05T14:48:00.000Z',
      'Desc',
    )

    // THEN
    const expected: AgendaEvent = {
      id: 'e39707f2-55ac-11eb-ae93-0242ac130002',
      title: 'Foo',
      date: '2011-10-05T14:48:00.000Z',
      description: 'Desc',
    }

    expect(actual).toEqual(expected);
  })

  it('should create an AgendaEvent', () => {
    // GIVEN
    const generator: IdGenerator = () => '2c16bf68-55ad-11eb-ae93-0242ac130002'

    // WHEN
    const actual = createAgendaEvent(
      generator,
      'Bar',
      '2012-10-05T14:48:00.000Z',
      '',
    )

    // THEN
    const expected: AgendaEvent = {
      id: '2c16bf68-55ad-11eb-ae93-0242ac130002',
      title: 'Bar',
      date: '2012-10-05T14:48:00.000Z',
      description: '',
    }

    expect(actual).toEqual(expected);
  })
});
