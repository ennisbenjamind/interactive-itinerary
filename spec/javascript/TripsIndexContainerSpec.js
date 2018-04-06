import TripsIndexContainer from '../../app/javascript/containers/TripsIndexContainer';
import TripIndexTile from '../../app/javascript/components/TripIndexTile';

describe('TripsIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper= mount(<TripsIndexContainer />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({trips: [], message: ""});
  })

  it('should render an TripIndexTile Component', () => {
    wrapper.setState({trips: [{
      id: 20,
      name: "My Trip",
      start_date: "2018-04-05T00:00:00.000Z",
      end_date: "2018-04-05T00:00:00.000Z",
      expenses: "0.0",
      host_id: 1,
      created_at: "2018-04-05T19:28:02.974Z",
      updated_at: "2018-04-05T19:28:02.974Z",
      password: "asdg",
      image_link: "https://static.barcelona.com/var/plain/storage/images/promociones/blocks/commercial/all_skip_the_line_priority_tickets/9496261-2-eng-GB/all_skip_the_line_priority_tickets_block-selection.jpg"
    }
  ]})
  expect(wrapper.find(TripIndexTile)).toBePresent();
});
})
