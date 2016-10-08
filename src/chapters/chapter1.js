const React = require('react')
import { List, FromInventory, Map, AllButSelection, NextChapter, RenderSection } from '../components'

export default ({currentSection, inventory}) => {
  var sections = [
    <section>
      <h2>Cloak of Darkness</h2>
      <h6>A interactive demonstation</h6>
      <h3>Foyer of the Opera House</h3>
      <p>
        You are standing in a spacious hall, splendidly decorated in red and gold,
        with glittering chandeliers overhead. The entrance from the street is to
        the <List expansions={["north", "north"]} tag="foyer_north" />,
        <Map from={inventory.foyer_north} to={{
          unselected: " and there  ",
          north: `but you've only just arrived, and besides, the weather
          outside seems to be getting worse. There `
        }} />
        are doorways <List expansions={[["south", "west"],["south", "west"]]} tag="foyer_exits" />.
      </p>
    </section>,
    <section>
      <h3>Cloakroom</h3>
      <p>
        The walls of this small room were clearly once lined with hooks, though
        now only one remains. The exit is a door to the east.
      </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
