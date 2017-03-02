import { renderComponent, expect } from '../testHelpers';
import App from '../../components/App';

describe('App Component', () => {

  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should render', () => {
    expect(component).to.exist;
  });

  it('should contain About menu', () => {
    expect(component.find('.menu')).to.exist;
  });
});
