import LodgingsContainer from '../../app/javascript/containers/LodgingsContainer';
import LodgingTile from '../../app/javascript/components/LodgingTile';
import NavBar from '../../app/javascript/components/NavBar';



describe('LodgingsContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper= mount(
      <LodgingsContainer
        params = '1'
      />);
    });

    it('should have the specified initial state', () => {
      expect(wrapper.state()).toEqual({
        lodgings: [],
        messages: []
      });
    })

    it('renders a LodgingTile component', done => {
      setTimeout(() => {
        wrapper.setState({lodgings: [{
          id: '4',
          trip_id: '3',
          expense: "1000.0",
          created_at: "2018-03-30T19:23:15.133Z",
          updated_at: "2018-03-30T19:23:15.133Z",
          address: "Philadelphia Marriott Downtown, Market Street, Philadelphia, PA, USA",
          name: "The Marriott",
          check_in_time: "2000-01-01T12:00:00.000Z",
          check_in_date: "2018-03-30",
          check_out_time: "2000-01-01T12:00:00.000Z",
          check_out_date: "2018-04-15",
          lat: '39.952575',
          lng: '-75.160527'
        }
      ]})
      expect(wrapper.find(LodgingTile)).toBePresent();
      done();
    }, 0);
  })

  it('should render an NavBar Component', () => {
    expect(wrapper.find(NavBar)).toBePresent();
  });
})
