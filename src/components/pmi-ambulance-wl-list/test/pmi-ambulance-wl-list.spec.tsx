import { newSpecPage } from '@stencil/core/testing';
import { PmiAmbulanceWlList } from '../pmi-ambulance-wl-list';

describe('pmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PmiAmbulanceWlList],
      html: `<pmi-ambulance-wl-list></pmi-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pmi-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pmi-ambulance-wl-list>
    `);
  });
});
