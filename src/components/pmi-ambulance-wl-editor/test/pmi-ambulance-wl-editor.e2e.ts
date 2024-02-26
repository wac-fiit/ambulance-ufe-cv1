import { newE2EPage } from '@stencil/core/testing';

describe('pmi-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pmi-ambulance-wl-editor></pmi-ambulance-wl-editor>');

    const element = await page.find('pmi-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
