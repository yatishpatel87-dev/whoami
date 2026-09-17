import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Who Am I? – The Brave Rescuer",
    category: "Community Helpers",
    categoryGujarati: "આપણા સહાયકો",
    passage: "Hello friends! I live near the central fire station where the big red trucks are parked. I like staying physically fit, checking emergency ladders, and helping people stay safe. Yesterday, I went into a smoky building with my thick fireproof coat and long water hose to rescue a frightened puppy.",
    passageGujarati: "નમસ્તે મિત્રો! હું સેન્ટ્રલ ફાયર સ્ટેશન પાસે રહું છું જ્યાં મોટા લાલ ટ્રક પાર્ક કરેલા હોય છે. મને ફિટ રહેવું, ઈમરજન્સી સીડી તપાસવી અને લોકોને સુરક્ષિત રાખવા ગમે છે. ગઈકાલે, હું એક ધુમાડાવાળી બિલ્ડિંગમાં મારો જાડો ફાયરપ્રૂફ કોટ અને લાંબી પાણીની પાઇપ સાથે ડરેલા ગલુડિયાને બચાવવા ગયો હતો.",
    characterName: "Firefighter Rohan",
    characterTitle: "The Firefighter",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the fire station with big red sirens and flashing lights.",
        gujaratiText: "લાલ સાયરન અને લાઈટોવાળા ફાયર સ્ટેશન નજીક.",
        icon: "🚒"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Helping people in danger and sliding down the brass pole.",
        gujaratiText: "મુશ્કેલીમાં લોકોને મદદ કરવી અને પિત્તળના થાંભલા પરથી સરકવું.",
        icon: "❤️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Into a smoky building with my water hose to put out the blaze.",
        gujaratiText: "ધુમાડાવાળી બિલ્ડિંગમાં પાણીની નળી લઈને આગ ઓલવવા.",
        icon: "🔥"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A yellow protective helmet and heavy heatproof boots.",
        gujaratiText: "પીળો રક્ષણાત્મક હેલ્મેટ અને જાડા બૂટ.",
        icon: "🪖"
      }
    ],
    options: [
      {
        id: "opt_1_1",
        name: "Firefighter Rohan",
        gujaratiName: "ફાયરફાઇટર રોહન",
        title: "Brave Firefighter",
        avatarEmoji: "👨‍🚒",
        description: "Puts out dangerous fires and rescues people & pets."
      },
      {
        id: "opt_1_2",
        name: "Chef Sanjeev",
        gujaratiName: "શેફ સંજીવ",
        title: "Master Chef",
        avatarEmoji: "👨‍🍳",
        description: "Cooks delicious meals in the restaurant kitchen."
      },
      {
        id: "opt_1_3",
        name: "Captain Vikram",
        gujaratiName: "કેપ્ટન વિક્રમ",
        title: "Police Officer",
        avatarEmoji: "👮",
        description: "Enforces city laws and keeps neighborhoods peaceful."
      },
      {
        id: "opt_1_4",
        name: "Driver Arjun",
        gujaratiName: "ડ્રાઈવર અર્જુન",
        title: "Bus Driver",
        avatarEmoji: "🚌",
        description: "Drives students safely to school every morning."
      }
    ],
    correctOptionId: "opt_1_1",
    funFact: "Firefighter gear can withstand temperatures over 500°C to protect them while saving lives!",
    funFactGujarati: "ફાયરફાઇટરના કપડાં 500° સેલ્સિયસથી વધુ ગરમી સહન કરી શકે છે!"
  },
  {
    id: 2,
    title: "Who Am I? – The Space Explorer",
    category: "Science & Space",
    categoryGujarati: "વિજ્ઞાન અને અવકાશ",
    passage: "Greetings Earthlings! I live high above the clouds inside a shiny metal space station orbiting our planet. I like drinking juice through a sealed straw and floating upside down in zero gravity. Last week, I went on a six-hour spacewalk outside my spacecraft to fix a solar panel while watching the glowing blue Earth below.",
    passageGujarati: "હેલો પૃથ્વીવાસીઓ! હું પૃથ્વીની આસપાસ ફરતા ચમકતા સ્પેસ સ્ટેશનમાં વાદળોની ઉપર રહું છું. મને સીલબંધ સ્ટ્રોથી જ્યુસ પીવું અને ઝીરો ગ્રેવિટીમાં ઊંધા તરવું ગમે છે. ગયા અઠવાડિયે, હું નીચે ચમકતી વાદળી પૃથ્વી જોતાં સોલાર પેનલ રિપેર કરવા અવકાશયાનની બહાર છ કલાકના સ્પેસવોક પર ગઈ હતી.",
    characterName: "Astronaut Sunita",
    characterTitle: "The Astronaut",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Inside the International Space Station orbiting Earth.",
        gujaratiText: "પૃથ્વીની પરિક્રમા કરતા ઇન્ટરનેશનલ સ્પેસ સ્ટેશનમાં.",
        icon: "🛰️"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Floating weightlessly in zero gravity and stargazing.",
        gujaratiText: "શૂન્ય ગુરુત્વાકર્ષણમાં વજન વિના હવામાં તરવું.",
        icon: "✨"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "Outside the rocket on a spacewalk among glittering stars.",
        gujaratiText: "તારાઓ વચ્ચે અવકાશયાનની બહાર સ્પેસવોક કરવા.",
        icon: "🚀"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A white pressurized spacesuit with an oxygen helmet.",
        gujaratiText: "ઓક્સિજન હેલ્મેટ સાથેનો સફેદ સ્પેસસૂટ.",
        icon: "👩‍🚀"
      }
    ],
    options: [
      {
        id: "opt_2_1",
        name: "Pilot Kabir",
        gujaratiName: "પાઈલટ કબીર",
        title: "Airplane Pilot",
        avatarEmoji: "👨‍✈️",
        description: "Flies commercial passenger airplanes between airports."
      },
      {
        id: "opt_2_2",
        name: "Astronaut Sunita",
        gujaratiName: "એસ્ટ્રોનોટ સુનિતા",
        title: "Space Explorer",
        avatarEmoji: "👩‍🚀",
        description: "Conducts scientific experiments in space."
      },
      {
        id: "opt_2_3",
        name: "Deep Sea Diver Kabir",
        gujaratiName: "સમુદ્ર ગોતાખોર કબીર",
        title: "Ocean Diver",
        avatarEmoji: "🤿",
        description: "Explores deep underwater coral reefs and shipwrecks."
      },
      {
        id: "opt_2_4",
        name: "Astronomer Raman",
        gujaratiName: "ખગોળશાસ્ત્રી રમણ",
        title: "Telescope Scientist",
        avatarEmoji: "🔭",
        description: "Observes distant galaxies from mountain observatories."
      }
    ],
    correctOptionId: "opt_2_2",
    funFact: "In space, astronauts experience 16 sunrises and 16 sunsets every single day!",
    funFactGujarati: "અવકાશમાં દર 24 કલાકમાં 16 વખત સૂર્યોદય અને સૂર્યાસ્ત દેખાય છે!"
  },
  {
    id: 3,
    title: "Who Am I? – The Sweet Baker",
    category: "Delicious Foods",
    categoryGujarati: "વાનગીઓ અને સ્વાદ",
    passage: "Good morning! I live in a cozy apartment above my fragrant village bakery. I like waking up at five in the morning to knead soft dough, sprinkle cinnamon, and bake crispy golden cookies. Yesterday, I went to the town square to deliver a three-tier chocolate birthday cake with colorful frosting roses.",
    passageGujarati: "સુપ્રભાત! હું મારી સુગંધિત બેકરીની ઉપર એક મજાના મકાનમાં રહું છું. મને સવારે પાંચ વાગ્યે ઊઠીને લોટ બાંધવો, તજ છાંટવી અને કરકરી સોનેરી કૂકીઝ બનાવવી ગમે છે. ગઈકાલે, હું રંગબેરંગી ગુલાબવાળી ત્રણ માળની ચોકલેટ બર્થડે કેક આપવા ટાઉન સ્ક્વેર ગઈ હતી.",
    characterName: "Baker Anita",
    characterTitle: "The Master Baker",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Above the aroma-filled corner bakery shop.",
        gujaratiText: "મીઠી સુગંધથી ભરેલી બેકરીની ઉપર.",
        icon: "🏠"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Kneading dough, melting butter, and baking fresh bread.",
        gujaratiText: "નરમ લોટ બાંધવો, માખણ ઓગાળવું અને તાજી બ્રેડ પકવવી.",
        icon: "🥖"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "To deliver a magnificent decorated birthday cake with candles.",
        gujaratiText: "મેણબત્તીઓ સાથે શણગારેલી સુંદર બર્થડે કેક આપવા.",
        icon: "🎂"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A clean white chef hat and a flour-dusted apron.",
        gujaratiText: "સફેદ શેફ ટોપી અને લોટથી ખરડાયેલું એપ્રોન.",
        icon: "👩‍🍳"
      }
    ],
    options: [
      {
        id: "opt_3_1",
        name: "Gardener Ramu",
        gujaratiName: "માળી રામુ",
        title: "Plant Whisperer",
        avatarEmoji: "👨‍🌾",
        description: "Waters plants and trims rose bushes in the park."
      },
      {
        id: "opt_3_2",
        name: "Baker Anita",
        gujaratiName: "બેકર અનિતા",
        title: "Pastry & Bread Chef",
        avatarEmoji: "👩‍🍳",
        description: "Bakes fresh loaves, pastries, and birthday treats."
      },
      {
        id: "opt_3_3",
        name: "Doctor Neha",
        gujaratiName: "ડોક્ટર નેહા",
        title: "Pediatrician",
        avatarEmoji: "🩺",
        description: "Checks temperatures and gives healthy medicines."
      },
      {
        id: "opt_3_4",
        name: "Potter Kanti",
        gujaratiName: "કુંભાર કાંતિભાઈ",
        title: "Clay Artisan",
        avatarEmoji: "🏺",
        description: "Shapes clay pots and diya lamps on a rotating wheel."
      }
    ],
    correctOptionId: "opt_3_2",
    funFact: "Bakers use yeast, a friendly microscopic organism that creates tiny bubbles to make bread fluffy!",
    funFactGujarati: "બ્રેડને પોચી બનાવવા બેકર્સ યીસ્ટ નામના જીવાણુનો ઉપયોગ કરે છે જે હવાના પરપોટા બનાવે છે!"
  },
  {
    id: 4,
    title: "Who Am I? – The Jungle King",
    category: "Animal Kingdom",
    categoryGujarati: "પ્રાણી જગત",
    passage: "ROAARRR! I live in the golden grasslands of the Gir sanctuary and open savanna. I like napping lazily under shady acacia trees with my family pride during sunny afternoons. Yesterday evening, I went patrolling the rocky hills, shaking my golden mane and roaring loudly so all animals know I protect this territory.",
    passageGujarati: "ગર્જના! હું ગીરના જંગલો અને સવાનાના સોનેરી ઘાસના મેદાનોમાં રહું છું. મને બપોરના સમયે ઝાડની છાંયડીમાં મારા પરિવાર સાથે આરામ કરવો ગમે છે. ગઈકાલે સાંજે, હું મારી સોનેરી કેશવાળી હલાવતો અને જોરથી ગર્જના કરતો પહાડો પર ચોકી કરવા ગયો હતો.",
    characterName: "Leo the Asiatic Lion",
    characterTitle: "King of the Jungle",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In the famous Gir Forest National Park and open plains.",
        gujaratiText: "પ્રખ્યાત ગીર રાષ્ટ્રીય ઉદ્યાન અને ઘાસના મેદાનોમાં.",
        icon: "🌳"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Lounging with my lioness pride and guarding our cubs.",
        gujaratiText: "મારા પરિવાર સાથે આરામ કરવો અને બચ્ચાઓનું રક્ષણ કરવું.",
        icon: "🐾"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "To the rocky high ridge to let out an earth-shaking roar.",
        gujaratiText: "પથ્થરવાળી ટેકરી પર આકાશ ગજવતી ગર્જના કરવા.",
        icon: "👑"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "A magnificent thick golden mane around my neck and sharp paws.",
        gujaratiText: "મારી ગરદન પર ભવ્ય સોનેરી કેશવાળી અને તીક્ષ્ણ પંજા.",
        icon: "🦁"
      }
    ],
    options: [
      {
        id: "opt_4_1",
        name: "Sheru the Bengal Tiger",
        gujaratiName: "શેરુ વાઘ",
        title: "Striped Predator",
        avatarEmoji: "🐯",
        description: "Has black stripes and loves swimming in jungle ponds."
      },
      {
        id: "opt_4_2",
        name: "Leo the Asiatic Lion",
        gujaratiName: "સિંહ (જંગલનો રાજા)",
        title: "King of the Beasts",
        avatarEmoji: "🦁",
        description: "Has a magnificent mane and lives in prides in Gir."
      },
      {
        id: "opt_4_3",
        name: "Bhura the Grizzly Bear",
        gujaratiName: "ભૂરા રીંછ",
        title: "Mountain Bear",
        avatarEmoji: "🐻",
        description: "Catches salmon fish and hibernates in winter caves."
      },
      {
        id: "opt_4_4",
        name: "Chintu the Cheetah",
        gujaratiName: "ચીતો",
        title: "Speed Runner",
        avatarEmoji: "🐆",
        description: "The fastest land animal on planet Earth."
      }
    ],
    correctOptionId: "opt_4_2",
    funFact: "A lion's mighty roar can be heard up to 8 kilometers (5 miles) away across the forest!",
    funFactGujarati: "સિંહની ભયાનક ગર્જના જંગલમાં 8 કિલોમીટર દૂર સુધી સંભળાઈ શકે છે!"
  },
  {
    id: 5,
    title: "Who Am I? – The Dedicated Healer",
    category: "Community Helpers",
    categoryGujarati: "આપણા સહાયકો",
    passage: "Hello little friend! I live in a neat cottage right behind the primary health center. I like seeing children smile again after they recover from a high fever. This morning, I went into the emergency ward with my stethoscope to listen to heartbeat rhythms and prescribe healing syrups.",
    passageGujarati: "કેમ છો નાના દોસ્ત! હું આરોગ્ય કેન્દ્રની પાછળ એક સરસ મકાનમાં રહું છું. મને બાળકો તાવમાંથી સાજા થઈને ફરી હસતાં થાય તે જોવું ગમે છે. આજે સવારે, હું સ્ટેથોસ્કોપ લઈને હૃદયના ધબકારા સાંભળવા અને સાજી થવાની દવાઓ લખવા વોર્ડમાં ગઈ હતી.",
    characterName: "Doctor Priya",
    characterTitle: "The Caring Doctor",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the hospital clinic where the ambulance stays ready.",
        gujaratiText: "દવાખાના નજીક જ્યાં એમ્બ્યુલન્સ તૈયાર ઊભી હોય છે.",
        icon: "🏥"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Checking pulses, curing illnesses, and keeping everybody healthy.",
        gujaratiText: "નાડી તપાસવી, રોગ મટાડવા અને દરેકને સ્વસ્થ રાખવા.",
        icon: "🩺"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "To examine a sick child and give a painless booster vaccine.",
        gujaratiText: "બીમાર બાળકને તપાસવા અને રસી આપવા.",
        icon: "💉"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A clean white medical coat with a stethoscope draped on my neck.",
        gujaratiText: "સફેદ કોટ અને ગળામાં સ્ટેથોસ્કોપ.",
        icon: "👩‍⚕️"
      }
    ],
    options: [
      {
        id: "opt_5_1",
        name: "Doctor Priya",
        gujaratiName: "ડોક્ટર પ્રિયા",
        title: "Medical Specialist",
        avatarEmoji: "👩‍⚕️",
        description: "Examines health, prescribes medicine, and cures sick people."
      },
      {
        id: "opt_5_2",
        name: "Scientist Meera",
        gujaratiName: "વૈજ્ઞાનિક મીરા",
        title: "Laboratory Researcher",
        avatarEmoji: "🔬",
        description: "Peers into microscopes looking at plant cells."
      },
      {
        id: "opt_5_3",
        name: "Teacher Shashi",
        gujaratiName: "શિક્ષક શશી",
        title: "School Instructor",
        avatarEmoji: "👩‍🏫",
        description: "Teaches math tables and grammar in class."
      },
      {
        id: "opt_5_4",
        name: "Pharmacist Raju",
        gujaratiName: "દવાવાળા રાજુભાઈ",
        title: "Chemist",
        avatarEmoji: "💊",
        description: "Dispatches pills and band-aids at the counter."
      }
    ],
    correctOptionId: "opt_5_1",
    funFact: "A stethoscope uses acoustic sound reflection so doctors can clearly hear blood rushing through heart valves!",
    funFactGujarati: "સ્ટેથોસ્કોપ અવાજના તરંગો મોટો કરીને ડોક્ટરને હૃદયના ધબકારા સ્પષ્ટ સંભળાવે છે!"
  },
  {
    id: 6,
    title: "Who Am I? – The Golden Farmer",
    category: "Agriculture & Nature",
    categoryGujarati: "ખેતી અને પ્રકૃતિ",
    passage: "Ram Ram! I live in a warm farmhouse surrounded by lush wheat fields and coconut palms. I like rising before the sun when the roosters crow to feed my gentle cows and calves. Yesterday, I went out into the vast fertile field driving my green tractor to harvest ripe golden grains for the whole state.",
    passageGujarati: "રામ રામ! હું લહેરાતા ઘઉંના ખેતરો અને નાળિયેરીથી ઘેરાયેલા ફાર્મહાઉસમાં રહું છું. મને સૂર્ય ઊગે તે પહેલાં કૂકડો બોલે ત્યારે ઊઠીને ગાયો અને વાછરડાંને ઘાસ ખવડાવવું ગમે છે. ગઈકાલે, હું સોનેરી પાક લણવા મારું લીલું ટ્રેક્ટર ચલાવીને ખેતરમાં ગયો હતો.",
    characterName: "Farmer Devji Kaka",
    characterTitle: "The Hardworking Farmer",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In a peaceful village home with a big barn and water well.",
        gujaratiText: "કુવા અને પશુઓના તબેલાવાળા શાંત ગામડાના ઘરમાં.",
        icon: "🏡"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Smell of fresh monsoon rain on soil and caring for crops.",
        gujaratiText: "પહેલા વરસાદ પછીની ભીની માટીની મહેક અને પાકની સંભાળ.",
        icon: "🌱"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "To plow the wide soil furrows driving my red tractor.",
        gujaratiText: "ટ્રેક્ટર લઈને ખેતરમાં હળ ચલાવવા અને બીજ વાવવા.",
        icon: "🚜"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A white cotton kurta and a colorful cloth turban on my head.",
        gujaratiText: "સૂતરાઉ કુર્તો અને માથા પર રંગીન પાઘડી.",
        icon: "👨‍🌾"
      }
    ],
    options: [
      {
        id: "opt_6_1",
        name: "Carpenter Mohan",
        gujaratiName: "સુથાર મોહનભાઈ",
        title: "Woodworker",
        avatarEmoji: "🪚",
        description: "Carves wooden tables, doors, and school benches."
      },
      {
        id: "opt_6_2",
        name: "Blacksmith Jethabhai",
        gujaratiName: "લુહાર જેઠાભાઈ",
        title: "Iron Crafter",
        avatarEmoji: "⚒️",
        description: "Forges iron tools and horseshoes over fire."
      },
      {
        id: "opt_6_3",
        name: "Farmer Devji Kaka",
        gujaratiName: "ખેડૂત દેવજી કાકા",
        title: "Food Producer",
        avatarEmoji: "👨‍🌾",
        description: "Grows wheat, bajra, vegetables, and feeds the nation."
      },
      {
        id: "opt_6_4",
        name: "Fisherman Kanji",
        gujaratiName: "માછીમાર કાનજી",
        title: "Boat Sailor",
        avatarEmoji: "🎣",
        description: "Casts nets in deep coastal sea waters."
      }
    ],
    correctOptionId: "opt_6_3",
    funFact: "India is one of the world's largest producers of wheat, milk, spices, and pulses thanks to hardworking farmers!",
    funFactGujarati: "ખેડૂતોની મહેનતને કારણે ભારત વિશ્વમાં ઘઉં, દૂધ અને મસાલાના ઉત્પાદનમાં મોખરે છે!"
  },
  {
    id: 7,
    title: "Who Am I? – The Deep Ocean Acrobat",
    category: "Ocean Creatures",
    categoryGujarati: "સમુદ્રના જીવો",
    passage: "Click-whistle! I live in the sunlit open waters of the warm ocean. I like playing with my pod, doing high spiral jumps above the splashing waves, and clicking echolocation sounds. Yesterday morning, I went swimming alongside a friendly wooden sailboat, leaping into the salty breeze to the cheers of young sailors.",
    passageGujarati: "ક્લિક-વ્હિસલ! હું હૂંફાળા સમુદ્રના સૂર્યપ્રકાશવાળા પાણીમાં રહું છું. મને મારા ઝૂંડ સાથે રમવું, મોજાં ઉપર ઊંચા કૂદકા મારવા અને સીટી જેવા અવાજો કાઢવા ગમે છે. ગઈકાલે સવારે, હું એક નાવડી સાથે સાથે તરી અને નાવિકોને જોઈને પાણીમાંથી ઊંચે કૂદી હતી.",
    characterName: "Dolly the Dolphin",
    characterTitle: "The Ocean Wonder",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In the sparkling blue waters of the tropical ocean.",
        gujaratiText: "ચમકતા વાદળી સમુદ્રના પાણીમાં.",
        icon: "🌊"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Leaping high into the air and chatting with clicks & whistles.",
        gujaratiText: "હવામાં ઊંચો કૂદકો લગાવવો અને ક્લિક અવાજોથી વાતો કરવી.",
        icon: "🐬"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "Surfing alongside breaking coral reef waves with my friends.",
        gujaratiText: "દોસ્તો સાથે પરવાળાના ટાપુ પર મોજાં પર સરકવા.",
        icon: "🏄"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "A blowhole on top of my head to breathe air and a curved dorsal fin.",
        gujaratiText: "શ્વાસ લેવા માટે માથા ઉપર કાણું અને સુંદર ફિન.",
        icon: "💨"
      }
    ],
    options: [
      {
        id: "opt_7_1",
        name: "Sammy the Great White Shark",
        gujaratiName: "શાર્ક માછલી",
        title: "Ocean Hunter",
        avatarEmoji: "🦈",
        description: "Has multiple rows of sharp teeth and gills."
      },
      {
        id: "opt_7_2",
        name: "Dolly the Dolphin",
        gujaratiName: "ડોલી ડૉલ્ફિન",
        title: "Playful Marine Mammal",
        avatarEmoji: "🐬",
        description: "Breathes air, very intelligent, loves jumping waves."
      },
      {
        id: "opt_7_3",
        name: "Ollie the Giant Octopus",
        gujaratiName: "ઓક્ટોપસ",
        title: "Eight-Armed Camouflager",
        avatarEmoji: "🐙",
        description: "Has eight tentacle arms and squirts black ink."
      },
      {
        id: "opt_7_4",
        name: "Shelly the Sea Turtle",
        gujaratiName: "દરિયાઈ કાચબો",
        title: "Ancient Mariner",
        avatarEmoji: "🐢",
        description: "Has a hard shell and paddles across thousands of miles."
      }
    ],
    correctOptionId: "opt_7_2",
    funFact: "Dolphins are not fish; they are warm-blooded mammals and sleep with one eye open to watch for danger!",
    funFactGujarati: "ડૉલ્ફિન માછલી નથી પણ સસ્તન પ્રાણી છે, અને તે એક આંખ ખુલ્લી રાખીને ઊંઘે છે!"
  },
  {
    id: 8,
    title: "Who Am I? – The Town Guardian",
    category: "Community Helpers",
    categoryGujarati: "આપણા સહાયકો",
    passage: "Attention citizens! I live near the central police station in our bustling city. I like teaching traffic safety rules to schoolchildren and making sure everyone feels protected. Just yesterday, I went patrolling through the crowded vegetable bazaar, helped find a lost toddler, and returned him safely to his mother.",
    passageGujarati: "ધ્યાન આપો નાગરિકો! હું આપણા શહેરના સેન્ટ્રલ પોલીસ સ્ટેશન નજીક રહું છું. મને શાળાના બાળકોને ટ્રાફિકના નિયમો શીખવવા અને દરેકને સલામતી આપવી ગમે છે. ગઈકાલે જ, હું શાકભાજી બજારમાં પેટ્રોલિંગ કરી રહ્યો હતો, ત્યારે એક ખોવાયેલા નાના બાળકને શોધીને તેની માતા પાસે પહોંચાડ્યો.",
    characterName: "Police Officer Vikram",
    characterTitle: "The Police Officer",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the police headquarters where blue and red lights flash.",
        gujaratiText: "બ્લૂ અને લાલ લાઈટવાળા પોલીસ મથક પાસે.",
        icon: "🚓"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Maintaining honesty, stopping crime, and helping lost citizens.",
        gujaratiText: "પ્રામાણિકતા જાળવવી, ગુના રોકવા અને ખોવાયેલા લોકોને મદદ કરવી.",
        icon: "🤝"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "On a patrol in my police vehicle with a two-way wireless radio.",
        gujaratiText: "વાયરલેસ વોકી-ટોકી સાથે પોલીસ વાહનમાં પેટ્રોલિંગ કરવા.",
        icon: "📻"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A crisp khaki uniform with a shining brass badge and peaked cap.",
        gujaratiText: "ખભે ચમકતા બેજવાળો ખાખી ગણવેશ અને ટોપી.",
        icon: "👮"
      }
    ],
    options: [
      {
        id: "opt_8_1",
        name: "Security Guard Raju",
        gujaratiName: "ચોકીદાર રાજુભાઈ",
        title: "Gate Watchman",
        avatarEmoji: "💂",
        description: "Monitors the entry gate of an apartment building."
      },
      {
        id: "opt_8_2",
        name: "Police Officer Vikram",
        gujaratiName: "પોલીસ ઓફિસર વિક્રમ",
        title: "Law Enforcement Officer",
        avatarEmoji: "👮",
        description: "Enforces the law, maintains safety, and protects citizens."
      },
      {
        id: "opt_8_3",
        name: "Judge Verma",
        gujaratiName: "જજ વર્મા",
        title: "Court Magistrate",
        avatarEmoji: "⚖️",
        description: "Listens to legal cases and delivers fair courtroom justice."
      },
      {
        id: "opt_8_4",
        name: "Soldier Amar",
        gujaratiName: "સૈનિક અમર",
        title: "Border Guard",
        avatarEmoji: "🪖",
        description: "Defends national borders high up in snowy mountains."
      }
    ],
    correctOptionId: "opt_8_2",
    funFact: "Police officers carry walkie-talkies that connect on ultra-fast radio frequencies for instant emergency responses!",
    funFactGujarati: "પોલીસ ઓફિસર વાયરલેસ વોકી-ટોકી વાપરે છે જેથી મુશ્કેલીમાં તરત જ ટીમ સાથે વાત થઈ શકે!"
  },
  {
    id: 9,
    title: "Who Am I? – The Sky Captain",
    category: "Aviation & Travel",
    categoryGujarati: "ઉડ્ડયન અને પ્રવાસ",
    passage: "Welcome aboard passengers! I live traveling between world capitals, but my second home is inside a modern airplane cockpit. I like gazing at shimmering sunrises above fluffy white clouds at 35,000 feet. Yesterday, I went down the runway at 250 kilometers per hour, pulled the control yoke, and flew 200 passengers safely to Mumbai.",
    passageGujarati: "મુસાફરોનું સ્વાગત છે! હું વિશ્વના શહેરો વચ્ચે મુસાફરી કરું છું, પરંતુ મારું બીજું ઘર વિમાનનું કોકપિટ છે. મને 35,000 ફૂટ ઊંચાઈએ વાદળો ઉપરથી સૂર્યોદય જોવો ગમે છે. ગઈકાલે, મેં રનવે પર સ્પીડ વધારીને કંટ્રોલ વ્હીલ ખેંચ્યું અને 200 મુસાફરોને સુરક્ષિત મુંબઈ પહોંચાડ્યા.",
    characterName: "Captain Kabir",
    characterTitle: "The Airline Pilot",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Flying high through international air corridors and airports.",
        gujaratiText: "આંતરરાષ્ટ્રીય એરપોર્ટ અને આકાશના માર્ગો વચ્ચે.",
        icon: "✈️"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Checking weather radar screens and executing smooth landings.",
        gujaratiText: "વેધર રડાર સ્ક્રીન જોવી અને વિમાનને ધીમેથી લેન્ડ કરાવવું.",
        icon: "🛫"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Into the flight control cockpit to steer the twin-engine jetliner.",
        gujaratiText: "જેટ પ્લેન ઉડાડવા માટે ફ્લાઇટ કોકપિટ કેબિનમાં.",
        icon: "💺"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A sharp pilot uniform with four gold stripes on the shoulders.",
        gujaratiText: "ખભા પર ચાર સોનેરી પટ્ટીઓવાળો પાઈલટનો ડ્રેસ.",
        icon: "👨‍✈️"
      }
    ],
    options: [
      {
        id: "opt_9_1",
        name: "Train Driver Arjun",
        gujaratiName: "ટ્રેન ડ્રાઈવર અર્જુન",
        title: "Locomotive Pilot",
        avatarEmoji: "🚆",
        description: "Operates high-speed trains on steel railway tracks."
      },
      {
        id: "opt_9_2",
        name: "Captain Kabir",
        gujaratiName: "કેપ્ટન કબીર (પાઈલટ)",
        title: "Commercial Pilot",
        avatarEmoji: "👨‍✈️",
        description: "Flies jumbo passenger aircrafts across the blue sky."
      },
      {
        id: "opt_9_3",
        name: "Ship Captain Sagar",
        gujaratiName: "કેપ્ટન સાગર",
        title: "Cruise Captain",
        avatarEmoji: "🚢",
        description: "Navigates giant ocean cargo ships and luxury cruises."
      },
      {
        id: "opt_9_4",
        name: "Bus Driver Naresh",
        gujaratiName: "બસ ડ્રાઈવર નરેશભાઈ",
        title: "Transit Driver",
        avatarEmoji: "🚌",
        description: "Drives city transit buses through traffic lights."
      }
    ],
    correctOptionId: "opt_9_2",
    funFact: "Commercial airliners cruise at around 900 km/h—that is almost 9 times faster than a car on the highway!",
    funFactGujarati: "વિમાન આકાશમાં 900 કિમી પ્રતિ કલાકની ઝડપે ઊડે છે—જે હાઇવે પર દોડતી કાર કરતાં 9 ગણું ઝડપી છે!"
  },
  {
    id: 10,
    title: "Who Am I? – The Golden Honey Collector",
    category: "Tiny Creatures",
    categoryGujarati: "નાના જીવજંતુ",
    passage: "Buzzzz-buzz! I live in a warm hexagonal wax honeycomb with thousands of my sisters. I like drinking sweet golden nectar from fragrant marigolds and yellow mustard blossoms. This morning, I went flying through five different flower gardens, collected golden pollen on my furry legs, and flew back home to make honey.",
    passageGujarati: "બઝઝ-બઝઝ! હું હજારો બહેનો સાથે મીણના ષટકોણ મધપૂડામાં રહું છું. મને ગલગોટા અને પીળી રાઈના ફૂલોમાંથી મીઠો રસ ચૂસવો ગમે છે. આજે સવારે, હું પાંચ બગીચાઓમાં ફરી, મારા રૂંવાટીવાળા પગ પર પરાગરજ ભેગી કરી અને મધ બનાવવા પાછી આવી.",
    characterName: "Bella the Honeybee",
    characterTitle: "The Busy Honeybee",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Inside a bustling beehive full of hexagonal wax cells.",
        gujaratiText: "મીણના ખાનાવાળા મોટા મધપૂડામાં.",
        icon: "🍯"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Sipping floral nectar and dancing to show sisters where flowers bloom.",
        gujaratiText: "ફૂલોનો રસ પીવો અને બહેનોને ફૂલોનો રસ્તો બતાવવા ડાન્સ કરવો.",
        icon: "🌻"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "From rose petals to sunflower heads pollinating green crops.",
        gujaratiText: "ગુલાબથી સૂર્યમુખી સુધી ઊડીને ખેતરોમાં પરાગનયન કરવા.",
        icon: "🌸"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "Four delicate wings and black-and-yellow stripes.",
        gujaratiText: "ચાર નાજુક પાંખો અને કાળી-પીળી પટ્ટીઓ.",
        icon: "🐝"
      }
    ],
    options: [
      {
        id: "opt_10_1",
        name: "Tara the Butterfly",
        gujaratiName: "તારા પતંગિયું",
        title: "Colorful Flutterer",
        avatarEmoji: "🦋",
        description: "Has wide rainbow wings and transforms from a caterpillar."
      },
      {
        id: "opt_10_2",
        name: "Bella the Honeybee",
        gujaratiName: "બેલ્લા મધમાખી",
        title: "The Honey Maker",
        avatarEmoji: "🐝",
        description: "Pollinates flowers, buzzes cheerfully, and makes sweet honey."
      },
      {
        id: "opt_10_3",
        name: "Lalu the Ladybug",
        gujaratiName: "ઢાલપંખી (લેડીબગ)",
        title: "Spotted Beetle",
        avatarEmoji: "🐞",
        description: "Has red wings with black polka dots eating aphids."
      },
      {
        id: "opt_10_4",
        name: "Kiku the Grasshopper",
        gujaratiName: "કીકુ તીડ / કીડી",
        title: "Meadow Jumper",
        avatarEmoji: "🦗",
        description: "Chirps by rubbing legs together in grassy fields."
      }
    ],
    correctOptionId: "opt_10_2",
    funFact: "Honeybees communicate with each other using a special 'waggle dance' that tells the exact angle and distance to food!",
    funFactGujarati: "મધમાખીઓ ખાસ 'વેગલ ડાન્સ' કરીને બીજી મધમાખીઓને ફૂલો કઈ દિશામાં છે તે જણાવે છે!"
  },
  {
    id: 11,
    title: "Who Am I? – The Inspiring Mentor",
    category: "Education & Learning",
    categoryGujarati: "શિક્ષણ અને શાળા",
    passage: "Good morning class! I live in a cozy house with shelves stacked full of encyclopedias and storybooks. I like explaining tricky science mysteries, solving long math puzzles, and cheering when students learn something new. Yesterday afternoon, I went to classroom 4B, drew colorful solar system diagrams on the blackboard, and read a fun riddle to the children.",
    passageGujarati: "સુપ્રભાત બાળકો! હું પુસ્તકોથી ભરેલા છાજલીવાળા ઘરમાં રહું છું. મને ગણિતના કોયડા ઉકેલવા, વિજ્ઞાન સમજાવવું અને વિદ્યાર્થીઓ નવું શીખે ત્યારે તાળીઓ પાડવી ગમે છે. ગઈકાલે બપોરે, હું ધોરણ 4B માં ગયો, બોર્ડ પર સૂર્યમંડળ દોર્યું અને બાળકોને મજાનો ઉખાણો પૂછ્યો.",
    characterName: "Teacher Ramesh Sir",
    characterTitle: "The Loving Teacher",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the town library surrounded by notebooks and novels.",
        gujaratiText: "લાઇબ્રેરી નજીક પુસ્તકો અને નોટબુકોથી ઘેરાયેલો.",
        icon: "📚"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Writing with chalk, telling moral stories, and checking tests.",
        gujaratiText: "ચોકથી લખવું, પ્રેરણાદાયી વાર્તાઓ કહેવી અને પરીક્ષા તપાસવી.",
        icon: "✏️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "To the school classroom to guide students through science experiments.",
        gujaratiText: "શાળાના વર્ગખંડમાં બાળકોને પ્રયોગો શીખવવા.",
        icon: "🏫"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "Reading spectacles and carry a red pen for marking.",
        gujaratiText: "વાંચવાના ચશ્મા અને તપાસવા માટે લાલ પેન.",
        icon: "👨‍🏫"
      }
    ],
    options: [
      {
        id: "opt_11_1",
        name: "Librarian Geeta",
        gujaratiName: "પુસ્તકાલય સંચાલક ગીતા",
        title: "Library Guardian",
        avatarEmoji: "📖",
        description: "Organizes library shelves and lends exciting books."
      },
      {
        id: "opt_11_2",
        name: "Teacher Ramesh Sir",
        gujaratiName: "શિક્ષક રમેશ સર",
        title: "School Teacher",
        avatarEmoji: "👨‍🏫",
        description: "Educates young minds, inspires dreams, and grades homework."
      },
      {
        id: "opt_11_3",
        name: "Principal Sharma",
        gujaratiName: "આચાર્ય શર્માજી",
        title: "School Principal",
        avatarEmoji: "👔",
        description: "Manages the entire school campus and morning assembly."
      },
      {
        id: "opt_11_4",
        name: "Coach Dinesh",
        gujaratiName: "કોચ દિનેશભાઈ",
        title: "Physical Trainer",
        avatarEmoji: "🏃",
        description: "Blows a whistle and trains soccer & cricket athletes."
      }
    ],
    correctOptionId: "opt_11_2",
    funFact: "Teaching is considered one of the oldest and most noble professions, shaping future doctors, astronauts, and leaders!",
    funFactGujarati: "શિક્ષકનું કામ સૌથી આદરણીય છે, કારણ કે તેઓ જ ભવિષ્યના વૈજ્ઞાનિક, ડોક્ટર અને એન્જિનિયર ઘડે છે!"
  },
  {
    id: 12,
    title: "Who Am I? – The Messenger of Smiles",
    category: "Community Helpers",
    categoryGujarati: "આપણા સહાયકો",
    passage: "Tring-tring! I live on a quiet village lane where everyone knows my cheerful wave. I like feeling the morning breeze as I ride my trusty black bicycle with leather bags slung on the sides. Just two hours ago, I went knocking on grandmother Shanta's wooden gate to hand-deliver a joyful festive greeting card and money order from her son overseas.",
    passageGujarati: "ટ્રિંગ-ટ્રિંગ! હું ગામની શાંત ગલીમાં રહું છું જ્યાં સૌ કોઈ મને ઓળખે છે. મને સાઈડમાં ચામડાના થેલા લટકાવીને સાઈકલ ચલાવવી ગમે છે. હમણાં બે કલાક પહેલાં જ, હું શાંતા દાદીના ઘરે ગયો અને તેમના વિદેશ રહેતા દીકરાનો ખુશાલીભર્યો પત્ર અને મનીઓર્ડર આપ્યો.",
    characterName: "Postman Maganbhai",
    characterTitle: "The Village Postman",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the red post office with a large stamped mailbox outside.",
        gujaratiText: "લાલ ટપાલ પેટીવાળી પોસ્ટ ઓફિસ પાસે.",
        icon: "📮"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Delivering important news, festival cards, and smiling at neighbors.",
        gujaratiText: "તહેવારોના પત્રો પહોંચાડવા અને લોકોના ચહેરા પર ખુશી જોવી.",
        icon: "✉️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Riding door-to-door ringing my cycle bell with a sack of letters.",
        gujaratiText: "સાયકલની ઘંટડી વગાડતો ઘર-ઘર સુધી કાગળો વહેંચવા.",
        icon: "🚲"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A khaki postal cap and a sturdy shoulder satchel.",
        gujaratiText: "પોસ્ટમેનનો ખાખી યુનિફોર્મ અને ખભે કાગળોનો થેલો.",
        icon: "📬"
      }
    ],
    options: [
      {
        id: "opt_12_1",
        name: "Delivery Guy Aman",
        gujaratiName: "ડિલિવરી બોય અમન",
        title: "Parcel Courier",
        avatarEmoji: "📦",
        description: "Rides a motorcycle delivering online shopping parcels."
      },
      {
        id: "opt_12_2",
        name: "Postman Maganbhai",
        gujaratiName: "ટપાલી મગનભાઈ",
        title: "Postal Messenger",
        avatarEmoji: "📬",
        description: "Rides a bicycle delivering postcards, inland letters & greetings."
      },
      {
        id: "opt_12_3",
        name: "Newspaper Boy Bunty",
        gujaratiName: "છાપાવાળો બંટી",
        title: "Paper Delivery",
        avatarEmoji: "🗞️",
        description: "Tosses folded morning newspapers over porch gates."
      },
      {
        id: "opt_12_4",
        name: "Milkman Govind",
        gujaratiName: "દૂધવાળા ગોવિંદભાઈ",
        title: "Dairy Deliverer",
        avatarEmoji: "🥛",
        description: "Delivers fresh milk cans on his scooter every dawn."
      }
    ],
    correctOptionId: "opt_12_2",
    funFact: "India has the highest post office in the entire world, situated in Hikkim, Himachal Pradesh, at 14,567 feet!",
    funFactGujarati: "વિશ્વની સૌથી ઊંચી પોસ્ટ ઓફિસ ભારતના હિમાચલ પ્રદેશના હિક્કિમ ગામમાં 14,567 ફૂટ ઊંચાઈ પર આવેલી છે!"
  },
  {
    id: 13,
    title: "Who Am I? – The Silent Night Watcher",
    category: "Wild Birds",
    categoryGujarati: "પક્ષી જગત",
    passage: "Hoo-hoo! I live high inside the hollow trunk of an ancient banyan tree. I like sleeping comfortably all through the bright sunny morning and waking up when the silver moon rises. Last night, I went gliding silently without a sound between tall branches, using my huge round yellow eyes to spot tiny beetles in the grass.",
    passageGujarati: "હૂ-હૂ! હું એક જૂના વડના ઝાડના પોલાણમાં રહું છું. મને આખો દિવસ તડકામાં મીઠી ઊંઘ કરવી અને રાત્રે ચાંદો ઊગે ત્યારે જાગવું ગમે છે. ગઇરાત્રે, હું અવાજ કર્યા વગર પાંખો ફેલાવીને ઊડ્યો અને મારી મોટી પીળી ગોળ આંખોથી ઘાસમાં નાના જીવડાં શોધ્યા.",
    characterName: "Oliver the Wise Owl",
    characterTitle: "The Night Owl",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In a cozy hollow hole carved in a tall forest tree.",
        gujaratiText: "જંગલના ઊંચા ઝાડની બખોલમાં.",
        icon: "🌳"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "The peaceful nighttime, moonlight, and turning my head 270 degrees.",
        gujaratiText: "શાંત રાત, ચાંદની અને માથું 270 ડિગ્રી સુધી ગોળ ફેરવવું.",
        icon: "🌙"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Gliding through the dark without making a single rustle of sound.",
        gujaratiText: "પાંખોનો સહેજ પણ અવાજ કર્યા વિના અંધારામાં સરકીને ઊડવા.",
        icon: "🪶"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "Big round forward-facing eyes and feathered tufts on my ears.",
        gujaratiText: "મોટી ગોળ તેજસ્વી આંખો અને હૂ-હૂ કરતો અવાજ.",
        icon: "🦉"
      }
    ],
    options: [
      {
        id: "opt_13_1",
        name: "Cheel the Hawk",
        gujaratiName: "સમડી (બાજ)",
        title: "Day Raptor",
        avatarEmoji: "🦅",
        description: "Soars high under the blazing sun hunting with sharp talons."
      },
      {
        id: "opt_13_2",
        name: "Oliver the Wise Owl",
        gujaratiName: "ઘુવડ (ઓલિવર)",
        title: "Nocturnal Hunter",
        avatarEmoji: "🦉",
        description: "Flies silently at night, has large round eyes, hoots softly."
      },
      {
        id: "opt_13_3",
        name: "Chamachidi the Bat",
        gujaratiName: "ચામાચીડિયું",
        title: "Flying Mammal",
        avatarEmoji: "🦇",
        description: "Hangs upside down from cave ceilings using echolocation."
      },
      {
        id: "opt_13_4",
        name: "Kagdo the Crow",
        gujaratiName: "કાગડો",
        title: "Clever Scavenger",
        avatarEmoji: "🐦‍⬛",
        description: "Caws loudly at dawn and drops pebbles into water jars."
      }
    ],
    correctOptionId: "opt_13_2",
    funFact: "Owls cannot move their eyeballs inside their sockets; instead, they can rotate their entire neck 270 degrees!",
    funFactGujarati: "ઘુવડ પોતાની આંખો હલાવી શકતું નથી, પણ તે પોતાની આખી ડોક 270 ડિગ્રી ગોળ ફેરવી શકે છે!"
  },
  {
    id: 14,
    title: "Who Am I? – The Color Magician",
    category: "Arts & Creativity",
    categoryGujarati: "કલા અને સર્જનાત્મકતા",
    passage: "Greetings art lovers! I live in a brightly lit studio with huge glass windows facing the garden. I like mixing cerulean blue with lemon yellow to create glowing shades of emerald green. Yesterday, I went to the lakeside with my wooden easel and bristle brushes, painting the reflection of the sunset clouds upon the water.",
    passageGujarati: "કેમ છો કલાપ્રેમીઓ! હું બગીચા તરફ ખૂલતી મોટી કાચની બારીઓવાળા સ્ટુડિયોમાં રહું છું. મને વાદળી અને પીળો રંગ ભેળવીને સુંદર લીલો રંગ બનાવવો ગમે છે. ગઈકાલે, હું મારું ચિત્રકામનું સ્ટેન્ડ અને પીંછીઓ લઈને તળાવ કિનારે ગઈ અને આથમતા સૂરજના રંગોનું ચિત્ર દોર્યું.",
    characterName: "Painter Maya",
    characterTitle: "The Creative Painter",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In a skylight art studio filled with canvases and color tubes.",
        gujaratiText: "કેનવાસ અને રંગોની ટ્યુબથી ભરેલા આર્ટ સ્ટુડિયોમાં.",
        icon: "🎨"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Blending vibrant watercolor palettes and sketching portraits.",
        gujaratiText: "વોટરકલર ભેળવવા અને સુંદર ચિત્રો દોરવા.",
        icon: "🖌️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગઈ હતી...",
        text: "To the scenic lakeside to paint nature's sunset on stretched canvas.",
        gujaratiText: "તળાવ કિનારે સૂર્યાસ્તનું મોહક ચિત્ર કેનવાસ પર કંડારવા.",
        icon: "🖼️"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A paint-splattered smock and hold an artist's wooden palette.",
        gujaratiText: "રંગોવાળો એપ્રોન અને હાથમાં લાકડાનું કલર પેલેટ.",
        icon: "👩‍🎨"
      }
    ],
    options: [
      {
        id: "opt_14_1",
        name: "Photographer Harsh",
        gujaratiName: "ફોટોગ્રાફર હર્ષ",
        title: "Camera Artist",
        avatarEmoji: "📷",
        description: "Snaps digital photos with a zoom lens on a tripod."
      },
      {
        id: "opt_14_2",
        name: "Sculptor Dilip",
        gujaratiName: "મૂર્તિકાર દિલીપ",
        title: "Stone Carver",
        avatarEmoji: "🗿",
        description: "Chisels marble stone into statues."
      },
      {
        id: "opt_14_3",
        name: "Painter Maya",
        gujaratiName: "ચિત્રકાર માયા",
        title: "Visual Artist",
        avatarEmoji: "👩‍🎨",
        description: "Mixes brilliant paints and brings blank canvases to life."
      },
      {
        id: "opt_14_4",
        name: "Musician Rahul",
        gujaratiName: "સંગીતકાર રાહુલ",
        title: "Flute Player",
        avatarEmoji: "🎶",
        description: "Plays sweet classical melodies on a bamboo bansuri."
      }
    ],
    correctOptionId: "opt_14_3",
    funFact: "The three primary colors in painting—red, yellow, and blue—can be combined to create virtually every shade in the universe!",
    funFactGujarati: "ચિત્રકળાના ત્રણ મૂળ રંગો—લાલ, પીળો અને વાદળી—ભેગા કરીને દુનિયાનો કોઈપણ રંગ બનાવી શકાય છે!"
  },
  {
    id: 15,
    title: "Who Am I? – The Monsoon Dancer",
    category: "National Symbols & Birds",
    categoryGujarati: "રાષ્ટ્રીય પક્ષી",
    passage: "Me-aow, me-aow! I live in the green groves and farm edges of Gujarat and Rajasthan. I like strutting proudly when thunder rumbles and dark rainclouds gather across the monsoon sky. Yesterday afternoon, as the first raindrops touched the grass, I went to an open clearing, spread my shimmering fan of iridescent eyed feathers, and danced with joy.",
    passageGujarati: "ટેહૂંક-ટેહૂંક! હું ગુજરાત અને રાજસ્થાનના લીલાછમ બગીચાઓ અને ખેતરોની વાડમાં રહું છું. મને આકાશમાં કાળા ડિબાંગ વાદળો ઘેરાય અને વીજળી ચમકે ત્યારે નાચવું ગમે છે. ગઈકાલે, વરસાદનું પહેલું ટીપું પડતાં જ, હું મેદાનમાં ગયો, મારા સોનેરી પીંછાની કળા કરી અને આનંદથી નાચ્યો.",
    characterName: "Mayur the Peacock",
    characterTitle: "National Bird of India",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In shady mango orchards, temple lawns, and forest borders.",
        gujaratiText: "આંબાવાડીઓ, મંદિરના બગીચા અને ખેતરોમાં.",
        icon: "🌿"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Cool monsoon breezes, sweet raindrops, and calling Tehook-Tehook.",
        gujaratiText: "ચોમાસાની ઠંડી હવા, વરસાદનાં ટીપાં અને ટેહૂંક-ટેહૂંક બોલવું.",
        icon: "🌧️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Out into the lush meadow to open my majestic feather train.",
        gujaratiText: "ખેતરમાં જઈને મારા ભવ્ય રંગબેરંગી પીંછા ફેલાવવા.",
        icon: "🪭"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "A sparkling blue-green neck, a regal crown, and 'eyed' tail feathers.",
        gujaratiText: "ચમકતી વાદળી ગરદન, માથે કલગી અને ચાંદલાવાળા સુંદર પીંછા.",
        icon: "🦚"
      }
    ],
    options: [
      {
        id: "opt_15_1",
        name: "Hansa the Swan",
        gujaratiName: "રાજહંસ",
        title: "Graceful Swimmer",
        avatarEmoji: "🦢",
        description: "Glides on crystal lake waters with pure white plumage."
      },
      {
        id: "opt_15_2",
        name: "Mayur the Peacock",
        gujaratiName: "મોર (રાષ્ટ્રીય પક્ષી)",
        title: "National Bird of India",
        avatarEmoji: "🦚",
        description: "Dances during rains with a glorious multicolored fan of feathers."
      },
      {
        id: "opt_15_3",
        name: "Mithu the Green Parrot",
        gujaratiName: "મીઠ્ઠુ પોપટ",
        title: "Red-Beaked Mimic",
        avatarEmoji: "🦜",
        description: "Chomps green chillies and mimics human speech."
      },
      {
        id: "opt_15_4",
        name: "Flamingo (Surkhab)",
        gujaratiName: "સુરખાબ (ફ્લેમિંગો)",
        title: "State Bird of Gujarat",
        avatarEmoji: "🦩",
        description: "Wades on long thin pink legs in the Rann of Kutch."
      }
    ],
    correctOptionId: "opt_15_2",
    funFact: "The peacock was declared the National Bird of India in 1963 due to its rich cultural heritage and breathtaking beauty!",
    funFactGujarati: "તેના અદભુત સૌંદર્ય અને સંસ્કૃતિને કારણે મોરને 1963માં ભારતનું રાષ્ટ્રીય પક્ષી જાહેર કરવામાં આવ્યું હતું!"
  },
  {
    id: 16,
    title: "Who Am I? – The Iron Track Navigator",
    category: "Transportation",
    categoryGujarati: "વાહન વ્યવહાર",
    passage: "Chugga-chugga-choo-choo! I live near the central junction railway yard where silver tracks converge. I like watching green signals flash and blowing the deep air whistle before crossing countryside tunnels. Yesterday, I went into the locomotive engine cabin, checked the throttle pressure, and navigated the superfast express over the majestic Narmada river bridge.",
    passageGujarati: "છુક-છુક-છુક-છુક! હું રેલવે જંકશન પાસે રહું છું જ્યાં સેંકડો પાટા જોડાય છે. મને લીલી ઝંડી જોવી અને ટનલમાંથી પસાર થતાં પહેલાં જોરથી વ્હિસલ વગાડવી ગમે છે. ગઈકાલે, હું લોકોમોટિવ એન્જિનમાં ગયો, સ્પીડ વધારી અને સુપરફાસ્ટ એક્સપ્રેસ ટ્રેનને નર્મદા નદીના પુલ પરથી પાર કરાવી.",
    characterName: "Train Driver Arjun",
    characterTitle: "The Train Driver (Loco Pilot)",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the railway terminus where trains arrive from all directions.",
        gujaratiText: "રેલવે સ્ટેશન નજીક જ્યાં ચારેય તરફથી ટ્રેનો આવે છે.",
        icon: "🚉"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Green signal flags, on-time schedules, and blowing the loud horn.",
        gujaratiText: "લીલા સિગ્નલ, સમયસર પહોંચવું અને ટ્રેનનું હોર્ન વગાડવું.",
        icon: "📢"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Into the electric train engine cabin to steer the long coaches.",
        gujaratiText: "લાંબા ડબ્બાઓવાળી ટ્રેન ચલાવવા એન્જિન કેબિનમાં.",
        icon: "🚆"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A railway uniform and carry a tri-color signal torch.",
        gujaratiText: "રેલવે વર્દી અને હાથમાં ત્રણ રંગની સિગ્નલ ટોર્ચ.",
        icon: "🔦"
      }
    ],
    options: [
      {
        id: "opt_16_1",
        name: "Train Driver Arjun",
        gujaratiName: "ટ્રેન ડ્રાઈવર અર્જુન (લોકો પાઈલટ)",
        title: "Locomotive Pilot",
        avatarEmoji: "🚂",
        description: "Operates massive electric and diesel locomotives safely."
      },
      {
        id: "opt_16_2",
        name: "Station Master Jayesh",
        gujaratiName: "સ્ટેશન માસ્તર જયેશભાઈ",
        title: "Platform Manager",
        avatarEmoji: "🚉",
        description: "Coordinates train timings and shows flags on platform 1."
      },
      {
        id: "opt_16_3",
        name: "Bus Conductor Paresh",
        gujaratiName: "બસ કંડક્ટર પરેશભાઈ",
        title: "Ticket Collector",
        avatarEmoji: "🎫",
        description: "Issues paper tickets and rings the whistle to start the bus."
      },
      {
        id: "opt_16_4",
        name: "Auto Driver Salim",
        gujaratiName: "રીક્ષા ડ્રાઈવર સલીમભાઈ",
        title: "Rickshaw Driver",
        avatarEmoji: "🛺",
        description: "Drives a green-and-yellow CNG auto through city streets."
      }
    ],
    correctOptionId: "opt_16_1",
    funFact: "Indian Railways is the 4th largest railway network in the world, carrying over 23 million passengers every day!",
    funFactGujarati: "ભારતીય રેલવે દરરોજ 2.3 કરોડથી વધુ મુસાફરોને તેમના ગંતવ્ય સ્થાને પહોંચાડે છે!"
  },
  {
    id: 17,
    title: "Who Am I? – The Antarctic Snow Slider",
    category: "Polar Wildlife",
    categoryGujarati: "બરફના પ્રાણીઓ",
    passage: "Brrr, it is chilly! I live on the frosty white glaciers of Antarctica where icy winds blow. I like huddling in a giant warm circle with my flock to keep our eggs safe from freezing blizzards. Yesterday morning, I went sliding on my shiny white belly across slippery snow straight into the ocean to catch tasty silver krill.",
    passageGujarati: "ખૂબ ઠંડી છે! હું એન્ટાર્કટિકાના બરફીલા ગ્લેશિયર પર રહું છું જ્યાં ઠંડા પવનો ફૂંકાય છે. મને બરફના તોફાનમાં ઈંડાંનું રક્ષણ કરવા મારા સાથીઓ સાથે ગોળ કુંડાળું બનાવી ઊભા રહેવું ગમે છે. ગઈકાલે, હું મારા પેટના બળે બરફ પર સરકીને સીધો દરિયામાં માછલીઓ પકડવા ગયો હતો.",
    characterName: "Pip the Emperor Penguin",
    characterTitle: "The Antarctic Penguin",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "On the icy continent of Antarctica surrounded by glaciers.",
        gujaratiText: "બરફની ચાદરવાળા એન્ટાર્કટિકા ખંડ પર.",
        icon: "❄️"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Tobogganing on my belly and swimming in freezing salt water.",
        gujaratiText: "પેટના બળે બરફ પર લપસણી ખાવી અને ઠંડા પાણીમાં તરવું.",
        icon: "🧊"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Diving under thick sea ice sheets to chase silver fish.",
        gujaratiText: "બરફ નીચે ઊંડા પાણીમાં ડૂબકી લગાવીને માછલી પકડવા.",
        icon: "🐟"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "A tuxedo-like black-and-white coat and flipper wings (I cannot fly).",
        gujaratiText: "કાળા-સફેદ કોટ જેવું શરીર અને તરવા માટે પાંખો (ઊડી શકાતું નથી).",
        icon: "🐧"
      }
    ],
    options: [
      {
        id: "opt_17_1",
        name: "Snowy the Polar Bear",
        gujaratiName: "ધ્રુવીય રીંછ",
        title: "Arctic Beast",
        avatarEmoji: "🐻‍❄️",
        description: "Lives in the North Pole Arctic and has thick white fur."
      },
      {
        id: "opt_17_2",
        name: "Pip the Emperor Penguin",
        gujaratiName: "પેંગ્વિન (પીપ)",
        title: "Flightless Antarctic Bird",
        avatarEmoji: "🐧",
        description: "Waddles on ice, slides on its belly, and is an expert swimmer."
      },
      {
        id: "opt_17_3",
        name: "Sam the Seal",
        gujaratiName: "સીલ (દરિયાઈ કૂતરો)",
        title: "Whiskered Swimmer",
        avatarEmoji: "🦭",
        description: "Basks on ice floes and claps its flippers."
      },
      {
        id: "opt_17_4",
        name: "Walrus Wally",
        gujaratiName: "વોલરસ",
        title: "Tusked Giant",
        avatarEmoji: "🦣",
        description: "Has two huge ivory tusks and thick blubber."
      }
    ],
    correctOptionId: "opt_17_2",
    funFact: "Penguins cannot fly in the air, but underwater they can 'fly' through currents faster than Olympic swimmers!",
    funFactGujarati: "પેંગ્વિન હવામાં ઊડી શકતાં નથી, પરંતુ પાણીની અંદર તે ઓલિમ્પિક સ્વિમર કરતાં પણ વધુ ઝડપે તરી શકે છે!"
  },
  {
    id: 18,
    title: "Who Am I? – The Lab Inventor",
    category: "Science & Technology",
    categoryGujarati: "વિજ્ઞાન અને સંશોધન",
    passage: "Greetings curious minds! I live near the Indian Institute of Science in a modern research park. I like formulating hypotheses, testing bubbling liquids in glass beakers, and discovering eco-friendly clean energy solutions. Yesterday evening, I went into the testing laboratory with my protective goggles to test a solar battery invention that powered an entire toy robot!",
    passageGujarati: "નમસ્તે જિજ્ઞાસુ મિત્રો! હું સાયન્સ રિસર્ચ પાર્ક નજીક રહું છું. મને નવા વિચારો કરવા, કાચના બીકરમાં કેમિકલ્સ તપાસવા અને પ્રદૂષણ મુક્ત સ્વચ્છ ઊર્જા શોધવી ગમે છે. ગઈકાલે સાંજે, હું રક્ષણાત્મક ચશ્મા પહેરીને લેબમાં ગયો અને સોલાર બેટરીથી ચાલતા રોબોટનું સફળ પરીક્ષણ કર્યું!",
    characterName: "Scientist Dr. Kabir",
    characterTitle: "The Brilliant Scientist",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "Near the university research center where supercomputers hum.",
        gujaratiText: "સુપર કોમ્પ્યુટરવાળી યુનિવર્સિટી લેબ પાસે.",
        icon: "🔬"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Conducting safe chemistry experiments and solving physics riddles.",
        gujaratiText: "રસાયણ વિજ્ઞાનના પ્રયોગો કરવા અને કોયડા ઉકેલવા.",
        icon: "⚗️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "To the clean room laboratory to test a green energy breakthrough.",
        gujaratiText: "સ્વચ્છ ઊર્જાની નવી શોધનું પરીક્ષણ કરવા લેબોરેટરીમાં.",
        icon: "💡"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A white lab apron and clear eye safety goggles.",
        gujaratiText: "સફેદ લેબ કોટ અને આંખોના રક્ષણ માટે સેફ્ટી ગોગલ્સ.",
        icon: "🧑‍🔬"
      }
    ],
    options: [
      {
        id: "opt_18_1",
        name: "Electrician Mukesh",
        gujaratiName: "ઇલેક્ટ્રિશિયન મુકેશભાઈ",
        title: "Wire Specialist",
        avatarEmoji: "🔌",
        description: "Fixes blown electrical fuses and replaces light switches."
      },
      {
        id: "opt_18_2",
        name: "Scientist Dr. Kabir",
        gujaratiName: "વૈજ્ઞાનિક ડૉ. કબીર",
        title: "Research Innovator",
        avatarEmoji: "🧑‍🔬",
        description: "Conducts experiments, invents eco technologies, and studies nature."
      },
      {
        id: "opt_18_3",
        name: "Coder Rohan",
        gujaratiName: "સોફ્ટવેર એન્જિનિયર રોહન",
        title: "Computer Programmer",
        avatarEmoji: "💻",
        description: "Types lines of code to build video games and mobile apps."
      },
      {
        id: "opt_18_4",
        name: "Mechanic Salim",
        gujaratiName: "મિકેનિક સલીમ",
        title: "Engine Technician",
        avatarEmoji: "🔧",
        description: "Tightens bolts and tunes motorcycle gearboxes."
      }
    ],
    correctOptionId: "opt_18_2",
    funFact: "India's renowned scientist Dr. A.P.J. Abdul Kalam was known as the 'Missile Man' and served as the beloved 11th President of India!",
    funFactGujarati: "ભારતના મહાન વૈજ્ઞાનિક ડૉ. એ.પી.જે. અબ્દુલ કલામ 'મિસાઇલ મેન' તરીકે જાણીતા હતા અને ભારતના રાષ્ટ્રપતિ બન્યા હતા!"
  },
  {
    id: 19,
    title: "Who Am I? – The Gentle Jungle Giant",
    category: "Wildlife Wonders",
    categoryGujarati: "પ્રાણી સૃષ્ટિ",
    passage: "Pawoooo! I live in the dense bamboo and sal forests of Kaziranga and southern reserves. I like splashing cool river water over my dusty back on hot afternoons and munching sweet wild sugarcane stalks. Yesterday morning, I went down to the riverbank with my herd, used my long flexible trunk like a snorkel, and helped a baby calf climb out of the mud.",
    passageGujarati: "પાવોઓઓ! હું કાઝીરંગા અને દક્ષિણ ભારતના વાંસના લીલાછમ જંગલોમાં રહું છું. મને બપોરે નદીના પાણીથી મારી પીઠ ધોવી અને મીઠા શેરડીના સાંઠા ચાવવા ગમે છે. ગઈકાલે, હું મારા ટોળા સાથે નદીકિનારે ગયો, મારી લાંબી સૂંઢથી પાણી ઉડાડ્યું અને કાદવમાં ફસાયેલા નાના બચ્ચાને બહાર કાઢવામાં મદદ કરી.",
    characterName: "Gaju the Asian Elephant",
    characterTitle: "The Gentle Giant",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "In the thick jungle corridors where tall bamboo grows.",
        gujaratiText: "વાંસ અને ઊંચા વૃક્ષોવાળા ગાઢ જંગલોમાં.",
        icon: "🎋"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Splashing cool muddy water and crunching fresh green leaves.",
        gujaratiText: "ઠંડા પાણીથી સ્નાન કરવું અને શેરડીના મીઠા સાંઠા ખાવા.",
        icon: "🌊"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "To the deep forest river to drink water and lead my family herd.",
        gujaratiText: "જંગલની નદીમાં પાણી પીવા અને કુટુંબના ટોળાનું નેતૃત્વ કરવા.",
        icon: "🐘"
      },
      {
        type: "special",
        label: "I have...",
        labelGujarati: "મારી પાસે છે...",
        text: "Two big fan-like flapping ears, two white tusks, and a long trunk.",
        gujaratiText: "સૂપડા જેવા મોટા કાન, બે સફેદ દંતશૂળ અને લાંબી સૂંઢ.",
        icon: "👂"
      }
    ],
    options: [
      {
        id: "opt_19_1",
        name: "Gaju the Asian Elephant",
        gujaratiName: "ગજુભાઈ (હાથી)",
        title: "Gentle Giant of the Jungle",
        avatarEmoji: "🐘",
        description: "Has a multi-purpose trunk, giant ears, and an amazing memory."
      },
      {
        id: "opt_19_2",
        name: "Kalu the One-Horned Rhino",
        gujaratiName: "ગેંડો (કાઝીરંગા)",
        title: "Armored Herbivore",
        avatarEmoji: "🦏",
        description: "Has thick armor plates and one stout horn on its snout."
      },
      {
        id: "opt_19_3",
        name: "Bholu the Hippopotamus",
        gujaratiName: "જળઘોડો (હિપ્પો)",
        title: "River Giant",
        avatarEmoji: "🦛",
        description: "Submerges in mud and opens a giant yawning mouth."
      },
      {
        id: "opt_19_4",
        name: "Tall Giraffe Jambo",
        gujaratiName: "જિરાફ",
        title: "Long-Necked Browser",
        avatarEmoji: "🦒",
        description: "The tallest mammal on Earth eating leaves from tree crowns."
      }
    ],
    correctOptionId: "opt_19_1",
    funFact: "An elephant's trunk contains over 40,000 muscles and can pick up something as small as a single grain of rice!",
    funFactGujarati: "હાથીની સૂંઢમાં 40,000 થી વધુ સ્નાયુઓ હોય છે અને તે જમીન પર પડેલો ચોખાનો નાનો દાણો પણ ઉપાડી શકે છે!"
  },
  {
    id: 20,
    title: "Who Am I? – The Grand Palace Sentinel",
    category: "Heritage & Valor",
    categoryGujarati: "વારસો અને રક્ષણ",
    passage: "Halt! Who goes there? I live near the grand archway of the historic Laxmi Vilas Palace. I like standing tall and disciplined, welcoming respectful visitors, and keeping royal treasures protected. Yesterday at noon, I went marching across the red stone courtyard with crisp rhythmic boot-steps during the ceremonial changing of the guard.",
    passageGujarati: "ઊભા રહો! કોણ છે ત્યાં? હું ઐતિહાસિક લક્ષ્મી વિલાસ મહેલના ભવ્ય દરવાજા પાસે રહું છું. મને શિસ્તબદ્ધ ઊભા રહેવું, પ્રવાસીઓનું સન્માનપૂર્વક સ્વાગત કરવું અને મહેલની સુરક્ષા કરવી ગમે છે. ગઈકાલે બપોરે, હું ગાર્ડ બદલવાના કાર્યક્રમ દરમિયાન લાલ પથ્થરના પ્રાંગણમાં શિસ્તબદ્ધ કદમતાલ કરતો આગળ વધ્યો હતો.",
    characterName: "Guard Suraj",
    characterTitle: "The Royal Palace Guard",
    clues: [
      {
        type: "live",
        label: "I live...",
        labelGujarati: "હું રહું છું...",
        text: "By the carved wooden entrance gates of the royal heritage palace.",
        gujaratiText: "ઐતિહાસિક રાજમહેલના વિશાળ કોતરણીવાળા દરવાજા પાસે.",
        icon: "🏰"
      },
      {
        type: "like",
        label: "I like...",
        labelGujarati: "મને ગમે છે...",
        text: "Unwavering discipline, sharp salutes, and historical valor.",
        gujaratiText: "ચુસ્ત શિસ્ત, સલામી આપવી અને મહેલની સુરક્ષા.",
        icon: "⚔️"
      },
      {
        type: "went",
        label: "I went...",
        labelGujarati: "હું ગયો હતો...",
        text: "Marching in formation for the formal changing of the watch.",
        gujaratiText: "પહેરો બદલવાની વિધિમાં કદમતાલ કરતો આગળ વધવા.",
        icon: "🎖️"
      },
      {
        type: "wear",
        label: "I wear...",
        labelGujarati: "હું પહેરું છું...",
        text: "A ceremonial scarlet turban, white gloves, and polished tall boots.",
        gujaratiText: "માથે શાહી લાલ પાઘડી, સફેદ મોજાં અને ચમકતા બૂટ.",
        icon: "💂"
      }
    ],
    options: [
      {
        id: "opt_20_1",
        name: "Tourist Guide Chetan",
        gujaratiName: "ગાઈડ ચેતનભાઈ",
        title: "History Guide",
        avatarEmoji: "🗺️",
        description: "Explains monument stories and shows antique weapons to tourists."
      },
      {
        id: "opt_20_2",
        name: "Guard Suraj",
        gujaratiName: "પહેરેદાર સૂરજ (રોયલ ગાર્ડ)",
        title: "Palace Sentinel",
        avatarEmoji: "💂",
        description: "Stands guard with discipline, protecting the palace gates."
      },
      {
        id: "opt_20_3",
        name: "King Vikramaditya",
        gujaratiName: "રાજા વિક્રમાદિત્ય",
        title: "Historic Ruler",
        avatarEmoji: "👑",
        description: "Sits on the golden throne wearing a jeweled crown."
      },
      {
        id: "opt_20_4",
        name: "Doorman Hitesh",
        gujaratiName: "દરવાન હિતેશ",
        title: "Hotel Valet",
        avatarEmoji: "🛎️",
        description: "Opens car doors for guests arriving at luxury hotels."
      }
    ],
    correctOptionId: "opt_20_2",
    funFact: "The Laxmi Vilas Palace in Vadodara, Gujarat is four times the size of Buckingham Palace in London!",
    funFactGujarati: "ગુજરાતના વડોદરામાં આવેલો લક્ષ્મી વિલાસ મહેલ લંડનના બકિંગહામ પેલેસ કરતાં ચાર ગણો મોટો છે!"
  }
];
