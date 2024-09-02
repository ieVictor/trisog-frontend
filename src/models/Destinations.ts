type DestinationType = Array<{ continent: string, country: Array<string> }>

const DESTINATIONS: DestinationType = [
  {
    continent: 'Africa',
    country: ['Moroco', 'Tanzania'],
  },
  {
    continent: 'Americas',
    country: ['Brazil', 'Argentina', 'Canada', 'Colombia', 'Costa Rica'],
  },
  {
    continent: 'Asia',
    country: ['Cambodia', 'Japan', 'Nepal', 'Thailand', 'Viet Nam'],
  },
  {
    continent: 'Europe',
    country: ['France', 'Greece'],
  }
]

export default DESTINATIONS;