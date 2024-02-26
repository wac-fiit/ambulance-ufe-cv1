import { newSpecPage } from '@stencil/core/testing';
import { PmiAmbulanceWlApp } from '../pmi-ambulance-wl-app';

describe('pmi-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [PmiAmbulanceWlApp],
      html: `<pmi-ambulance-wl-app base-path="/"></pmi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pmi-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [PmiAmbulanceWlApp],
      html: `<pmi-ambulance-wl-app base-path="/ambulance-wl/"></pmi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pmi-ambulance-wl-list");
  });
});