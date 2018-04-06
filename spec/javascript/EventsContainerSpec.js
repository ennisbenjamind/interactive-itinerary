import EventsContainer from '../../app/javascript/containers/EventsContainer';
import EventTile from '../../app/javascript/components/EventTile';
import NavBar from '../../app/javascript/components/NavBar';



describe('EventsContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper= mount(
      <EventsContainer
        params = '1'
      />);
    });

    it('should have the specified initial state', () => {
      expect(wrapper.state()).toEqual({
        events: [],
        messages: []
      });
    })

    it('renders a EventTile component', done => {
      setTimeout(() => {
        wrapper.setState({events: [{
          id: '30',
          trip_id: '3',
          expense: "150.0",
          details: 'null',
          created_at: "2018-03-30T18:52:26.262Z",
          updated_at: "2018-03-30T18:52:26.262Z",
          address: "Philadelphia Museum of Art, Benjamin Franklin Parkway, Philadelphia, PA, USA",
          name: "Trip to the Art Museum!",
          time: "2000-01-01T12:00:00.000Z",
          date: "2018-04-15",
          lat: '39.9655697',
          lng: '-75.1809661'
        }
      ]})
      expect(wrapper.find(EventTile)).toBePresent();
      done();
    }, 0);
  })

  it('should render an NavBar Component', () => {
    expect(wrapper.find(NavBar)).toBePresent();
  });
})
