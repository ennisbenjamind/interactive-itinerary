import CreateLodgingContainer from '../../app/javascript/containers/CreateEventContainer';
import DetailsField from '../../app/javascript/components/DetailsField';
import ExpenseField from '../../app/javascript/components/ExpenseField';
import NameField from '../../app/javascript/components/NameField';
import CheckInDateField from '../../app/javascript/components/CheckInDateField';
import CheckOutDateField from '../../app/javascript/components/CheckOutDateField';
import CheckInTimeField from '../../app/javascript/components/CheckInTimeField';
import CheckOutTimeField from '../../app/javascript/components/CheckOutTimeField';
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

    it('should render a DetailsField', () => {
      expect(wrapper.find(DetailsField)).toBePresent();
    });

    it('should render a ExpenseField', () => {
      expect(wrapper.find(ExpenseField)).toBePresent();
    });

    it('should render a NameField', () => {
      expect(wrapper.find(NameField)).toBePresent();
    });

    it('should render a PlacesAutocomplete', () => {
      expect(wrapper.find(PlacesAutocomplete)).toBePresent();
    });

  })
