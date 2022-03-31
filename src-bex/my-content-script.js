// Hooks added here have a bridge allowing communication between the BEX Content Script and the Quasar Application.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/content-hooks

export default function (/* bridge */) {
  // Hook into the bridge to listen for events sent from the client BEX.

  bridge.on('say.hi.popup.event', (event) => {
    if (event.data.message) {
      // Access a DOM element from here.
      // Document in this instance is the underlying website the contentScript runs on
      alert('Popup says: ' + event.data.message);
    }
  });
}
