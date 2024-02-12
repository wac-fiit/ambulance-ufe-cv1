import { newE2EPage } from '@stencil/core/testing';

describe('pmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pmi-ambulance-wl-list></pmi-ambulance-wl-list>');

    const element = await page.find('pmi-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
