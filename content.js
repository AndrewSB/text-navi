const copy = {
  header: {
    title: 'Navi',
  },
  head: {
    title: 'A digital assistant through Messenger',
    subtitle: 'We take care of your work so you can focus on what matters',
    callToAction: 'Start now',
  },
  description: {
    header: 'Navi works for you',
    description: 'Navi makes life easy. Every part of the experience has been designed around your convenience. One question and we connect you with someone who can take care of your problem.',
    products: [
      {
        url: 'http://i.imgur.com/ciI38hF.png',
        description: 'C-Corp',
      },
      {
        url: 'http://i.imgur.com/Azb6Wek.png',
        description: 'LLC'
      },
    ]
  },
  demo: {
    chat: [
      {
        text: 'Hey Navi, I am swamped with work, and I have to take care of this little project for which I have barely time. Can you help?',
        fromMe: true,
      },
      {
        text: 'Hey! No problem - we are here to help! What do you need help with?',
        fromMe: false,
      },
      {
        text: 'Sounds good, I need an extra pair of hands for my design startup, as I am getting more clients than I can handle',
        fromMe: true,
      },
      {
        text: 'Ok great, I’ll look into solutions for you',
        fromMe: false,
      },
    ],
  },
  expose: {
    title: 'Taking the stress out of life.',
    iconsAndDescriptions: [
      {
        image: "http://i.imgur.com/96TgMfH.jpg",
        heading: "Personalized Assistance",
        description: "We focus on your work from beginning to end",
      },
      {
        image: "http://i.imgur.com/sw8zhvM.jpg",
        heading: "At Your Service",
        description: "We find the right people who can take of your problems",
      },
      {
        image: "http://i.imgur.com/Bvlw4ag.jpg",
        heading: "Ask Us Anything",
        description: "We take care of any problems you might have",
      },
      {
        image: "http://i.imgur.com/7RhVux2.jpg",
        heading: "Peace of Mind",
        description: "We are here when you have questions along the way",
      },
    ],
  },
  callToAction: {
    title: 'What do you need help with?',
    subtitle: 'Save time and focus on what matters!',
    buttonTitle: 'Ask now',
  },
  footer: {
    left: {
      title: 'NAVI',
      description: 'A digital assistant through Messenger',
    },
    center: {
      title: 'CONTACT',
      phoneNumber: '+1 (650) 815-5781',
      email: 'hi@textnavi.com',
    },
    right: {
      title: '',
      disclaimer: '',
    },
  },
}

const images = {
  logo: 'http://i.imgur.com/1wLaA85.png',
  background: {
    demo: 'http://i.imgur.com/2bPEsxN.jpg',
    head: 'http://i.imgur.com/iK24zVj.png',
    callToAction: 'http://i.imgur.com/whkWmih.jpg',
  },
}

const messengerLink = 'http://m.me/192015661176397'

export default {
  copy,
  images,
  messengerLink
}
