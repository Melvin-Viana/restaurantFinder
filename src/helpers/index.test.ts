import { getLocationData } from './index';
import 'babel-polyfill';

describe('Test out helper async helper functions', () => {
  it('getLocationData returns an object w/ latitude and longitude', async () => {
    const data = await getLocationData();
    expect(typeof data).toBe('object');
    // Latitude
    expect(typeof data.lat).toBe('number');
    // Longitude
    expect(typeof data.lng).toBe('number');
  });
});
