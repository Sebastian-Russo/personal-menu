import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // lets Enzyme know how to work with components made with a specific version of React

Enzyme.configure({adapter: new Adapter()});