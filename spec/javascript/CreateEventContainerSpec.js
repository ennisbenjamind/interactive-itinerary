import CreateEventContainer from '../../app/javascript/containers/CreateEventContainer';
import DateField from '../../app/javascript/components/DateField';
import TextField from '../../app/javascript/components/TextField';
import TimeField from '../../app/javascript/components/TimeField';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


describe('CreateEventContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper= mount(
      <CreateEventContainer
        params="1"
      />);
    });

    it('should render a form', () => {
      expect(wrapper.find('form')).toBePresent();
    });

    it('should render a DateField', () => {
      expect(wrapper.find(DateField)).toBePresent();
    });

    it('should render a TextField', () => {
      expect(wrapper.find(TextField)).toBePresent();
    });

    it('should render a TimeField', () => {
      expect(wrapper.find(TimeField)).toBePresent();
    });

    it('should render a PlacesAutocomplete', () => {
      expect(wrapper.find(PlacesAutocomplete)).toBePresent();
    });
  })
