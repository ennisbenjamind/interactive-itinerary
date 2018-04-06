import TripIndexTile from '../../app/javascript/components/TripIndexTile';

describe('TripIndexTile', () => {
  let id,
  name,
  image_link,
  password,
  start_date,
  end_date,
  expenses,
  host_id,
  created_at,
  updated_at,
  wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <TripIndexTile
        id = "20"
        name = "My Trip"
        start_date = "2018-04-05T00:00:00.000Z"
        end_date = "2018-04-05T00:00:00.000Z"
        expenses = "0.0"
        host_id = "1"
        created_at = "2018-04-05T19:28:02.974Z"
        updated_at = "2018-04-05T19:28:02.974Z"
        password = "asdg"
        image_link = "https://static.barcelona.com/var/plain/storage/images/promociones/blocks/commercial/all_skip_the_line_priority_tickets/9496261-2-eng-GB/all_skip_the_line_priority_tickets_block-selection.jpg"
      />
    )
  });


 it('renders trip name and dates on card', done => {
   setTimeout(() => {
     expect(wrapper.find('div')).toIncludeText('My Trip', 'THU, 05 APR 2018', 'THU, 05 APR 2018');
     done();
   }, 0);
 })

  it('renders an img tag', done => {
    setTimeout(() => {
      expect(wrapper.find('img')).toBePresent();
      done();
    }, 0);
  })


  it("renders a link that takes user to the event page", done => {
    setTimeout(() => {
      expect(wrapper.find('Link')).toBeDefined('/trip/20/events');
      done();
    }, 0);
  })

})
