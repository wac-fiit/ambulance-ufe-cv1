import { newE2EPage } from '@stencil/core/testing';

describe('pmi-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pmi-ambulance-wl-app></pmi-ambulance-wl-app>');

    const element = await page.find('pmi-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
