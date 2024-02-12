import { newSpecPage } from '@stencil/core/testing';
import { PmiAmbulanceWlList } from '../pmi-ambulance-wl-list';

describe('pmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PmiAmbulanceWlList],
      html: `<pmi-ambulance-wl-list></pmi-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as PmiAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
