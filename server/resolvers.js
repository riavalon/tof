// TODO: Replace this with data from an actual database
// at some point
const mockData = [
  {
    postId: "0",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'wireless cleric',
    content: 'We need your help, Star Fox! Andross has declared war! He\'s invaded the Lylat system and is trying to take over Corneria! Our army alone can\'t do the job! Hurry, Star Fox! Corneria, fourth planet of the Lylat system. The evil Andross turned this once thriving system into a wasteland of near extinction. General Pepper of the Cornerian army was successful in exiling this maniacal scientist to the barren, deserted planet Venom. Five years later, General Pepper noticed strange activity coming from Venom. James McCloud, Pigma Dengar, and Peppy Hare of the Star Fox team were sent to investigate.',
  },
  {
    postId: "1",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'sapphire display',
    content: 'Tacos proident culpa, farm-to-table asymmetrical pok pok reprehenderit. Church-key eu mumblecore, et tilde dolore celiac ut truffaut heirloom elit hell of. Everyday carry non labore street art stumptown adipisicing lomo tempor man bun selvage pork belly keffiyeh bushwick paleo drinking vinegar. Twee tumblr vape tofu, sed nostrud ennui pickled shoreditch. Waistcoat mlkshk aesthetic, ennui dolore asymmetrical lorem glossier hashtag sustainable plaid umami.',
  },
  {
    postId: "2",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'spinning nomad',
    content: 'Taxidermy gochujang umami health goth flannel migas officia, shoreditch waistcoat single-origin coffee laborum ullamco occaecat hella biodiesel. Lo-fi intelligentsia elit non cred YOLO dolore, literally keytar adaptogen ullamco paleo fam vexillologist. Photo booth man braid offal man bun fingerstache yuccie. Heirloom beard kombucha listicle pop-up you probably haven\'t heard of them selfies edison bulb butcher voluptate palo santo typewriter letterpress locavore. Pitchfork taiyaki mixtape tilde blue bottle deep v aliqua sed YOLO kombucha cronut.',
  },
  {
    postId: "3",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'covert harp',
    content: 'Tempor food truck voluptate, readymade put a bird on it direct trade activated charcoal jean shorts chartreuse kinfolk ullamco. Craft beer tilde everyday carry knausgaard. Farm-to-table tote bag bespoke cliche VHS cupidatat duis 3 wolf moon listicle jianbing edison bulb. Hexagon venmo la croix artisan cillum. Ipsum keffiyeh hoodie, tumblr et sint biodiesel iceland anim iPhone 3 wolf moon hexagon. Farm-to-table meggings vape trust fund lumbersexual plaid green juice wayfarers salvia. Irure pug freegan, hashtag you probably haven\'t heard of them vegan cred pok pok schlitz activated charcoal edison bulb mustache marfa blog hella.',
  },
  {
    postId: "4",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'mountain ink',
    content: 'Hoodie taxidermy deserunt esse, retro kombucha narwhal. Knausgaard cold-pressed aliquip meh coloring book, hashtag lorem leggings live-edge portland. Health goth fingerstache humblebrag semiotics PBR&B aliqua, aliquip mixtape vinyl. Paleo af vaporware lo-fi sartorial health goth. Kale chips ennui heirloom pop-up lo-fi tote bag. Waistcoat vinyl synth, austin art party gluten-free 3 wolf moon health goth. Fixie DIY aesthetic, leggings hell of cronut austin dreamcatcher four dollar toast fingerstache gentrify.',
  },
  {
    postId: "5",
    author: 'Raven Avalon',
    postedOn: Date.now(),
    title: 'jade saxophone',
    content: 'Tilde nisi bespoke chia intelligentsia. Whatever pop-up succulents voluptate. Cloud bread XOXO art party, next level nulla helvetica gastropub humblebrag cred chillwave trust fund scenester. Art party officia occaecat portland, literally health goth nisi williamsburg. Kombucha cred excepteur pork belly, synth hashtag migas esse ipsum echo park. Health goth crucifix bespoke, shabby chic consequat artisan biodiesel mixtape cred cronut laboris listicle activated charcoal thundercats aute.',
  },
]

const resolvers = {
  Query: {
    getPost(_, { input }) {
      return mockData.find(item => item.postId === input) || null
    },

    getPosts() {
      return mockData
    }
  },

  Post: {
    excerpt(post) {
      const words = post.content.slice().split(' ')
      const excerpt = words.slice(0, 30)
      let lastWord = excerpt.splice(excerpt.length - 1, 1)[0]
      if (lastWord.match(/[\W_]$/g)) {
        lastWord = lastWord.slice(0, -1)
      }
      lastWord += '...'
      excerpt.push(lastWord)
      return excerpt.join(' ')
    }
  }
}

module.exports = resolvers