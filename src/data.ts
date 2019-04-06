export interface Wish {
  name: string;
  message: string;
}

export const photoMap: Record<string, string> = {
  Greg: require('./img/greg.jpg'),
  Katya: require('./img/katya.jpg'),
  Karen: require('./img/karen.jpg'),
  Freddy: require('./img/freddy.jpg'),
  Rosamund: require('./img/rosamund.jpg'),
  Adelaide: require('./img/adalaide.png'),
  Matilda: require('./img/matilda.png'),
  Nick: require('./img/nick.jpg'),
  Michael: require('./img/michael.jpg'),
  Tommy: require('./img/tommy.png'),
  'Mary Pat': require('./img/mary-pat.png'),
  Laura: require('./img/laura.png'),
  Lisa: require('./img/lisa.png'),
  Kathy: require('./img/kathy.jpg'),
  Sally: require('./img/sally.jpg'),
  Grandma: require('./img/grandma.png'),
  Grandpa: require('./img/grandpa.png'),
  Dad: require('./img/dad.jpg'),
  family: require('./img/family.jpg')
};

export const wishes: Wish[] = [
  { name: 'Greg', message: 'FaceTime with mom' },
  { name: 'Greg', message: "Mom's tidiness" },
  { name: 'Katya', message: 'Her spontaneity' },
  { name: 'Katya', message: 'Her generosity' },
  { name: 'Freddy', message: 'Playing with Grandlady' },
  { name: 'Rosamund', message: 'Playing peek-a-boo' },
  { name: 'Adelaide', message: 'Grandlady is nice...' },
  { name: 'Adelaide', message: 'giving...' },
  { name: 'Adelaide', message: 'loyal' },
  { name: 'Matilda', message: 'Grandlady is kind' },
  { name: 'Matilda', message: 'she loves me' },
  { name: 'Matilda', message: 'Grandlady has the same color hair as me' },
  { name: 'Karen', message: 'My mom is my favorite woman in this world' },
  {
    name: 'Karen',
    message:
      'She is so caring, selfless, and always there to help her children and grandchildren'
  },
  {
    name: 'Karen',
    message:
      "My mom sets an example to follow of being positive and strong, getting things done and taking responsibility for one's own happiness."
  },
  {
    name: 'Karen',
    message:
      'Mom is so comforting - she understands who I am and I see her too. She knows what I need and tells me!'
  },
  {
    name: 'Nick',
    message:
      'Peggy is the first to admit she is wrong - but...if she is right, look out! She sticks to her guns!!'
  },
  {
    name: 'Nick',
    message:
      "Here is to trying new things later in life...and being good at them! Golf, yoga...the list is yet to be complete. What's next?"
  },
  {
    name: 'Nick',
    message:
      'Leave things better than you found them - a basic courtesy, but the meaning is deep, and unfortunately rare. Not for Peggy.'
  },
  {
    name: 'Nick',
    message:
      'Simply put - matriarch. To me that is a big word, and even bigger responsibility. She embraces it with grace.'
  },
  { name: 'Michael', message: 'Grandlady plays hide and seek with me' },
  { name: 'Michael', message: 'I love that Grandlady dances with me' },
  {
    name: 'Tommy',
    message:
      'Active - will seize the day, every day. Not a fan of sleeping in or video games.'
  },
  {
    name: 'Tommy',
    message: 'Detail oriented - Dad would be forever lost without her.'
  },
  {
    name: 'Tommy',
    message:
      'Fortitude - keeps it real, stays positive in duress, not easily swayned by nonsense.'
  },
  {
    name: 'Tommy',
    message:
      'Sharp and Keen - basically impossible to sneak out as a kid, will call out for your BS without hesitation'
  },
  {
    name: 'Mary Pat',
    message:
      'Peggy is “The Fairest of all the Sisters” if ever I have a moral dilemma she is always the one to turn to.'
  },
  {
    name: 'Mary Pat',
    message:
      'Peggy is a fierce competitor. Whether it is golf, tennis or hoola hooping she always emerges the winner'
  },
  {
    name: 'Mary Pat',
    message:
      'Peggy is very generous with her time and talents, not to mention her resources. Never boastful'
  },
  {
    name: 'Mary Pat',
    message: 'Peggy is fun to be around and won’t tolerate drama'
  },
  { name: 'Laura', message: 'Love that Peggy is "perfect!"' },
  { name: 'Laura', message: 'Love that Peggy is my closest sister' },
  { name: 'Laura', message: 'Love that Peggy has a beautiful smile' },
  {
    name: 'Laura',
    message: 'Love that Peggy is someone you can always count on'
  },
  {
    name: 'Lisa',
    message:
      'Growing up with Peggy was sweet. She was always fair. She never did anything without being fair'
  },
  {
    name: 'Lisa',
    message:
      'She is a beautiful person and authentic, quality person. She has a radiance about her.'
  },
  {
    name: 'Lisa',
    message:
      'Peggy is very intuitive. She is very smart - she helped me sew my dress in high school!'
  },
  {
    name: 'Lisa',
    message: "She zones into people's feelings. She has empathy for people."
  },
  { name: 'Lisa', message: 'She is a really good listener.' },
  {
    name: 'Lisa',
    message:
      "Peggy is humble - she doesn't brag about herself even though she's really smart."
  },
  {
    name: 'Lisa',
    message:
      'I love that Peggy loves the Virgin Mary and has a deep faith in God.'
  },
  {
    name: 'Lisa',
    message:
      'She would always stick up for us - She gave a boy a bloody nose for hitting us with a snowball. She was my protector.'
  },
  {
    name: 'Kathy',
    message:
      'Peggy and I are very close born exactly eleven months apart to the day - Irish Twins 👯‍♂️.'
  },
  { name: 'Kathy', message: 'I’ve been by her side since day one.' },
  {
    name: 'Kathy',
    message: 'We’re so different but so much alike. Family is our eternal bond.'
  },
  {
    name: 'Kathy',
    message:
      'Peggy’s not afraid of challenge and is one of the most competitive persons I know. Tennis and golf are her thing. She’s comfortable and classy in anything, from a slinky formal dress to baggy sweatpants and a t-shirt. She’s one “Grand Lady”'
  },
  { name: 'Sally', message: 'Peggy is beautiful' },
  { name: 'Sally', message: 'Peggy is a good role model' },
  { name: 'Sally', message: 'She is good listener' },
  {
    name: 'Sally',
    message: 'Peggy is a wonderful parent, sister and all around person.'
  },
  { name: 'Grandma', message: 'She was a top student' },
  { name: 'Grandma', message: 'A four year varsity tennis team player' },
  { name: 'Grandma', message: 'Likes neatness and cleaness' },
  { name: 'Grandpa', message: 'Always liked cats, which I never understood' },
  { name: 'Grandpa', message: 'My only mechanic who can fix anything' },
  { name: 'Grandpa', message: 'The only daughter who fished with me' },
  {
    name: 'Dad',
    message:
      'I love that Peggy is fun,loves life and is a great friend and companion.'
  },
  {
    name: 'Dad',
    message:
      'I love that Peggy has a deep caring spirit toward me and everybody she cares about.'
  },
  { name: 'Dad', message: 'I love that Peggy is the loves life of my life' },
  {
    name: 'Dad',
    message:
      'I love that Peggy is as beautiful inside as she is on the outside.'
  },
  {
    name: 'Dad',
    message:
      'I love her regal features, her radiant smile and her eyes that light up her soul.'
  },
  {
    name: 'Dad',
    message:
      'I love seeing Peggy from a far and getting this rush of wow. She is a hot women.'
  },
  {
    name: 'Dad',
    message:
      "I can't believe how lucky I am that she is my wife. I say it all the time and I mean it -I am a lucky man."
  }
];
