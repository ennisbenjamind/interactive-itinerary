import CreateLodgingContainer from '../../app/javascript/containers/CreateEventContainer';
import TextField from '../../app/javascript/components/TextField';
import DateField from '../../app/javascript/components/DateField';
import TimeField from '../../app/javascript/components/TimeField';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


describe('CreateLodgingContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper= mount(
      <CreateLodgingContainer
        params="1"
      />);
    });

    it('should render a form', () => {
      expect(wrapper.find('form')).toBePresent();
    });

    it('should render a TextField', () => {
      expect(wrapper.find(TextField)).toBePresent();
    });


    it('should render a PlacesAutocomplete', () => {
      expect(wrapper.find(PlacesAutocomplete)).toBePresent();
    });

  })
