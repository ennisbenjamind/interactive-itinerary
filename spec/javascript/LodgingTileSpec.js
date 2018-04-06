import LodgingTile from '../../app/javascript/components/LodgingTile';

describe('LodgingTile', () => {
  let id,
  trip_id,
  expense,
  details,
  created_at,
  updated_at,
  address,
  name,
  check_in_time,
  check_in_date,
  check_out_time,
  check_out_date,
  lat,
  lng,
  wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <LodgingTile
        id='4'
        trip_id='3'
        expense="1000.0"
        created_at="2018-03-30T19:23:15.133Z"
        updated_at="2018-03-30T19:23:15.133Z"
        address="Philadelphia Marriott Downtown, Market Street, Philadelphia, PA, USA"
        name="The Marriott"
        check_in_time="2000-01-01T12:00:00.000Z"
        check_in_date="2018-03-30"
        check_out_time="2000-01-01T12:00:00.000Z"
        check_out_date="2018-04-15"
        lat='39.952575'
        lng='-75.160527'
      />
    )
  });


  it('renders the lodging details', done => {
    setTimeout(() => {
      expect(wrapper.find('.callout')).toIncludeText(
        "Philadelphia Marriott Downtown, Market Street, Philadelphia, PA, USA"
        ,"1000.0","The Marriott","2018-03-30","2018-04-15",
        "2000-01-01T12:00:00.000Z", "2000-01-01T12:00:00.000Z"
      );
      done();
    }, 0);
  })

})
