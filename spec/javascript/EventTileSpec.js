import EventTile from '../../app/javascript/components/EventTile';

describe('EventTile', () => {
  let id,
  trip_id,
  expense,
  details,
  created_at,
  updated_at,
  address,
  name,
  time,
  date,
  lat,
  lng,
  wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <EventTile
        id = '30'
        trip_id = '3'
        expense = "150.0"
        details = 'null'
        created_at = "2018-03-30T18:52:26.262Z"
        updated_at = "2018-03-30T18:52:26.262Z"
        address = "Philadelphia Museum of Art, Benjamin Franklin Parkway, Philadelphia, PA, USA"
        name = "Trip to the Art Museum!"
        time = "2000-01-01T12:00:00.000Z"
        date = "2018-04-15"
        lat = '39.9655697'
        lng = '-75.1809661'
      />
    )
  });


  it('renders the event details', done => {
    setTimeout(() => {
      expect(wrapper.find('.timeline-item')).toIncludeText(
        "Trip to the Art Museum!","150.0","2018-04-15","2000-01-01T12:00:00.000Z"
      );
      done();
    }, 0);
  })

})
