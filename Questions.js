/////////////////////////////////////World Cup ///////////////////////////////////////////

const questions1 = [
  {
    question: "Who is the winner of the 2010 FIFA World Cup?",
    options: shuffleArray(["Spain", "Netherlands", "Germany", "Brazil"]),
    answer: "Spain",
  },
  {
    question: "Which country has won the most FIFA World Cup titles",
    options: shuffleArray(["Brazil", "Germany", "Italy", "Argentina"]),
    answer: "Brazil",
  },
  {
    question: "In which year did France win their first FIFA World Cup?",
    options: shuffleArray(["1994", "1998", "2002", "2006"]),
    answer: "1998",
  },
  {
    question: "Who is the top scorer in the history of the FIFA World Cup?",
    options: shuffleArray([
      "Ronaldo",
      "Lionel Messi",
      "Miroslav Klose",
      "Pele",
    ]),
    answer: "1998",
  },
  {
    question: "Which national team won the FIFA World Cup in 1978?",
    options: shuffleArray(["Italy", "Brazil", "Netherlands", "Argentina"]),
    answer: "Argentina",
  },
  {
    question: "Which country won the first-ever FIFA World Cup in 1930?",
    options: shuffleArray(["Italy", "Germany", "Uruguay", "Brazil"]),
    answer: "Uruguay",
  },
  {
    question:
      "Who scored the famous 'Hand of God' goal in the 1986 FIFA World Cup?",
    options: shuffleArray([
      "Pele",
      "Diego Maradona",
      "Ronaldo",
      "Lionel Messi",
    ]),
    answer: "Diego Maradona",
  },
  {
    question: "Which country hosted and won the FIFA World Cup in 1998?",
    options: shuffleArray(["England", "France", "Italy", "Spain"]),
    answer: "France",
  },
  {
    question:
      "Who was the captain of the French national team when they won the FIFA World Cup in 2018?",
    options: shuffleArray([
      "Hugo Lloris",
      "Antoine Griezmann",
      "Kylian Mbappe",
      "Paul Pogba",
    ]),
    answer: "Hugo Lloris",
  },
  {
    question:
      "Who scored the winning goal for Germany in the 2014 FIFA World Cup final against Argentina?",
    options: shuffleArray([
      "Miroslav Klose",
      "Thomas Muller",
      "Mario Gotze",
      "Mesut Ozil",
    ]),
    answer: "Mario Gotze",
  },
  {
    question: "Which country won the FIFA World Cup in 1934, held in Italy?",
    options: shuffleArray(["Brazil", "Argentina", "Italy", "Germany"]),
    answer: "Italy",
  },
  {
    question:
      "Who was the coach of the Spanish national team when they won their first FIFA World Cup in 2010?",
    options: shuffleArray([
      "Vicente del Bosque",
      "Luis Aragones",
      "Pep Guardiola",
      "Fernando Hierro",
    ]),
    answer: "Mario Gotze",
  },
  {
    question:
      "Which national team won the FIFA World Cup in 1954, known for their Miracle of Bern victory?",
    options: shuffleArray(["Hungary", "Uruguay", "Brazil", "West Germany"]),
    answer: "West Germany",
  },
  {
    question:
      "Who was the Golden Boot winner at the 2018 FIFA World Cup in Russia?",
    options: shuffleArray([
      "Antoine Griezmann",
      "Harry Kane",
      "Kylian Mbappe",
      "Luka Modric",
    ]),
    answer: "Harry Kane",
  },
  {
    question:
      "Which country won the FIFA World Cup in 1974, held in West Germany?",
    options: shuffleArray([
      "Netherlands",
      "Argentina",
      "Brazil",
      "West Germany",
    ]),
    answer: "West Germany",
  },
  {
    question:
      "Who is the all-time leading scorer for the Brazilian national team in FIFA World Cup tournaments?",
    options: shuffleArray(["Ronaldo", "Pele", "Neymar", "Romario"]),
    answer: "Ronaldo",
  },
  {
    question:
      " Which national team won the FIFA World Cup in 1994, hosted by the United States?",
    options: shuffleArray(["Brazil", "Italy", "Germany", "Argentina"]),
    answer: "Brazil",
  },
  {
    question:
      "Who was the captain of the Italian national team when they won the FIFA World Cup in 2006?",
    options: shuffleArray([
      "Francesco Totti",
      "Gianluigi Buffon",
      "Fabio Cannavaro",
      "Alessandro Del Piero",
    ]),
    answer: "Fabio Cannavaro",
  },
  {
    question:
      "Which country won the FIFA World Cup in 2010, held in South Africa?",
    options: shuffleArray(["Spain", "Netherlands", "Germany", "Argentina"]),
    answer: "Spain",
  },
];

///////////////////////////////////////Champions League////////////////////////////////////////////

const questions2 = [
  {
    question: "Who is the winner of the 2010 FIFA World Cup?",
    options: shuffleArray([
      "Barcelona",
      "Real Madrid",
      "Bayern Munich",
      "Liverpool",
    ]),
    answer: "Real Madrid",
  },
  {
    question:
      "Who is the all-time top scorer in UEFA Champions League history?",
    options: shuffleArray([
      "Lionel Messi",
      "Robert Lewandowski",
      "Cristiano Ronaldo",
      "Zlatan Ibrahimovic",
    ]),
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Which club won the UEFA Champions League in 2019?",
    options: shuffleArray([
      "Liverpool",
      "Tottenham Hotspur",
      "20Manchester City02",
      "Chelsea",
    ]),
    answer: "Liverpool",
  },
  {
    question:
      "In which year did Barcelona win their first UEFA Champions League title?",
    options: shuffleArray(["1992", "1994", "2006", "2011"]),
    answer: "1992",
  },
  {
    question:
      "Which manager led Real Madrid to three consecutive UEFA Champions League titles (2016-2018)?",
    options: shuffleArray([
      "Pep Guardiola",
      "Zinedine Zidane",
      "Carlo Ancelotti",
      "Jose Mourinho",
    ]),
    answer: "Zinedine Zidane",
  },
  {
    question:
      "Which English club won the UEFA Champions League for the first time in 1999?",
    options: shuffleArray([
      "Liverpool",
      "Arsenal",
      "Manchester United",
      "Chelsea",
    ]),
    answer: "Manchester United",
  },
  {
    question:
      "Who is the player with the fastest goal in UEFA Champions League history?",
    options: shuffleArray([
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Roy Makaay",
      "Zlatan Ibrahimovic",
    ]),
    answer: "Roy Makaay",
  },
  {
    question:
      "Which club won the first edition of the UEFA Champions League in 1956?",
    options: shuffleArray(["Benfica", "Real Madrid", "AC Milan", "Ajax"]),
    answer: "Real Madrid",
  },
  {
    question: "Which club won the UEFA Champions League in 2012?",
    options: shuffleArray([
      "Barcelona",
      "Chelsea",
      "Bayern Munich",
      "Manchester United",
    ]),
    answer: "Chelsea",
  },
  {
    question:
      "Which club achieved the treble (domestic league, domestic cup, and UEFA Champions League) in 1999?",
    options: shuffleArray([
      "Real Madrid",
      "Barcelona",
      "Manchester United",
      "Bayern Munich",
    ]),
    answer: "Manchester United",
  },
  {
    question:
      "  Who is the player with the most appearances in UEFA Champions League history?",
    options: shuffleArray([
      "Lionel Messi ",
      "Cristiano Ronaldo",
      "Iker Casillas",
      "Andres Iniesta",
    ]),
    answer: "Andres Iniesta",
  },
  {
    question:
      "Which manager led Barcelona to win the UEFA Champions League twice (2009 and 2011)?",
    options: shuffleArray([
      "Tito Vilanova ",
      "Luis Enrique",
      "Pep Guardiola",
      "Frank Rijkaard",
    ]),
    answer: "Pep Guardiola",
  },

  {
    question:
      "Which club won the UEFA Champions League for the first time in 1997?",
    options: ["Real Madrid", "Juventus", "Borussia Dortmund", "Ajax"],
    Answer: "Borussia Dortmund",
  },
  {
    question: "Which team lost in the UEFA Champions League final in 2020?",
    options: ["Barcelona", "Paris Saint-Germain", "Manchester City", "Chelsea"],
    Answer: "Paris Saint-Germain",
  },
  {
    question: "How many times has Juventus won the UEFA Champions League?",
    options: ["Once", "Twice", "Three times", "Four times"],
    Answer: "Twice",
  },
  {
    question:
      "Which club won the UEFA Champions League in 2005 in a historic final against AC Milan?",
    options: ["Chelsea", "Liverpool", "Real Madrid", "Borussia Dortmund"],
    Answer: "Liverpool",
  },
  {
    question:
      "In which year was the tournament name changed to 'UEFA Champions League'?",
    options: ["1990", "1992", "1994", "1996"],
    Answer: "1992",
  },
  {
    question:
      "Who is the player who scored the fastest hat-trick in UEFA Champions League history?",
    options: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Robert Lewandowski",
      "Marco van Basten",
    ],
    Answer: "Robert Lewandowski",
  },
  {
    question: "Which club won the UEFA Champions League in 2013?",
    options: ["Real Madrid", "Barcelona", "Bayern Munich", "Chelsea"],
    Answer: "Bayern Munich",
  },
  {
    question:
      "Which manager led AC Milan to win the UEFA Champions League in 2007?",
    options: [
      "Carlo Ancelotti",
      "Massimiliano Allegri",
      "Fabio Capello",
      "Arrigo Sacchi",
    ],
    Answer: "Carlo Ancelotti",
  },
  {
    question: "Which club won the UEFA Champions League in 2004?",
    options: ["Real Madrid", "FC Porto", "AC Milan", "Manchester United"],
    Answer: "FC Porto",
  },
  {
    question:
      "How many times has Liverpool won the UEFA Champions League so far?",
    options: ["Four times", "Five times", "Six times", "Seven times"],
    Answer: "Six times",
  },
  {
    question:
      "Who scored the decisive goal in the UEFA Champions League final in 2014?",
    options: [
      "Cristiano Ronaldo",
      "Sergio Ramos",
      "Gareth Bale",
      "Didier Drogba",
    ],
    Answer: "Sergio Ramos",
  },
  {
    question: "Which club won the UEFA Champions League in 2010?",
    options: ["Real Madrid", "Barcelona", "Inter Milan", "Bayern Munich"],
    Answer: "Inter Milan",
  },
  {
    question:
      "Which club won the UEFA Champions League in 2008 after defeating Chelsea in the final?",
    options: ["Manchester United", "Barcelona", "Real Madrid", "Bayern Munich"],
    Answer: "Manchester United",
  },
  {
    question:
      "Who was the player awarded the Best Player in the UEFA Champions League final in 2015?",
    options: ["Lionel Messi", "Luis Suarez", "Neymar", "Andres Iniesta"],
    Answer: "Andres Iniesta",
  },
  {
    question: "Which club won the UEFA Champions League in 1995?",
    options: ["Ajax", "AC Milan", "Juventus", "Borussia Dortmund"],
    Answer: "Ajax",
  },
  {
    question:
      "Which manager led Real Madrid to win the UEFA Champions League in 2002?",
    options: [
      "Carlo Ancelotti",
      "Fabio Capello",
      "Vicente del Bosque",
      "Jose Mourinho",
    ],
    Answer: "Vicente del Bosque",
  },
  {
    question: "Which club won the UEFA Champions League in 2021?",
    options: [
      "Manchester City",
      "Chelsea",
      "Bayern Munich",
      "Paris Saint-Germain",
    ],
    Answer: "Chelsea",
  },
];

//////////////////////////////////////////////////////////About players/////////////////////////////////////////////////////////////////////

const questions3 = [
  {
    question:
      "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
    options: ["Just Fontaine", "Ronaldo", "Gerd Muller", "Pele"],
    Answer: "Just Fontaine ",
  },
  {
    question: "Which player has won the most Ballon d'Or awards as of 2023?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Michel Platini",
      "Johan Cruyff",
    ],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Who holds the record for the most assists in a single season of the English Premier League?",
    options: [
      "Kevin De Bruyne",
      "Thierry Henry",
      "Mesut Ozil",
      "Frank Lampard",
    ],
    Answer: "Kevin De Bruyne ",
  },
  {
    question:
      "Which player scored the fastest hat-trick in Premier League history?",
    options: ["Sadio Mane", "Robbie Fowler", "Sergio Aguero", "Alan Shearer"],
    Answer: "Sergio Aguero ",
  },
  {
    question:
      "Who was the youngest player to debut for FC Barcelona's senior team?",
    options: [
      "Lionel Messi",
      "lamine yamal",
      "Andres Iniesta",
      "Xavi Hernandez",
    ],
    Answer: "lamine yamal ",
  },
  {
    question:
      "Which goalkeeper holds the record for the most clean sheets in the UEFA Champions League?",
    options: [
      "Iker Casillas",
      "Gianluigi Buffon",
      "Edwin van der Sar",
      "Petr Cech",
    ],
    Answer: "Iker Casillas",
  },
  {
    question: "Who scored the fastest goal in FIFA World Cup history?",
    options: [
      "Hakan Sukur",
      "Clint Dempsey",
      "Bryan Robson",
      "Christian Benteke",
    ],
    Answer: "Hakan Sukur ",
  },
  {
    question:
      "Which player holds the record for the most appearances for the Spanish national team?",
    options: [
      "Sergio Ramos",
      "Iker Casillas",
      "Xavi Hernandez",
      "Andres Iniesta",
    ],
    Answer: "Sergio Ramos ",
  },
  {
    question:
      "Who has the most goals in a single UEFA European Championship tournament?",
    options: [
      "Michel Platini",
      "Cristiano Ronaldo",
      "Antoine Griezmann",
      "Alan Shearer",
    ],
    Answer: "Michel Platini ",
  },
  {
    question: "Which player has won the most Copa America titles as of 2023?",
    options: ["Lionel Messi", "Neymar", "Pelé", "Diego Maradona"],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Who scored the most goals in a single UEFA Champions League season?",
    options: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Robert Lewandowski",
      "Ruud van Nistelrooy",
    ],
    Answer: "Robert Lewandowski ",
  },
  {
    question:
      "Which player has the most assists in the history of the FIFA World Cup?",
    options: ["Neymar", "Diego Maradona", "Thomas Müller", "Cafu"],
    Answer: "Thomas Müller ",
  },
  {
    question:
      "Who holds the record for the most goals scored in a single season of La Liga?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Telmo Zarra",
      "Hugo Sánchez",
    ],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Which player has won the most UEFA Men's Player of the Year awards?",
    options: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Luka Modric",
      "Robert Lewandowski",
    ],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Who holds the record for the most consecutive matches scoring in La Liga?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Telmo Zarra",
      "Hugo Sánchez",
    ],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Which player has the most goals in the history of the English Premier League?",
    options: ["Alan Shearer", "Wayne Rooney", "Thierry Henry", "Sergio Agüero"],
    Answer: "Alan Shearer",
  },
  {
    question:
      "Who is the youngest player to score a hat-trick in the UEFA Champions League?",
    options: ["Kylian Mbappe", "Raúl", "Erling Haaland", "Lionel Messi"],
    Answer: "Kylian Mbappe ",
  },
  {
    question:
      "Which player has the most assists in the history of the UEFA European Championship?",
    options: [
      "Cristiano Ronaldo",
      "Luis Figo",
      "Thierry Henry",
      "David Beckham",
    ],
    Answer: "Cristiano Ronaldo ",
  },
  {
    question:
      "Who was the first player to score 100 goals in UEFA club competitions?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Filippo Inzaghi"],
    Answer: "Raúl",
  },
  {
    question:
      "Which player holds the record for the most goals in a single Bundesliga season?",
    options: [
      "Robert Lewandowski",
      "Gerd Müller",
      "Pierre-Emerick Aubameyang",
      "Mario Gomez",
    ],
    Answer: "Robert Lewandowski ",
  },
  {
    question:
      "Who has the most appearances for the Italian national team as of 2023?",
    options: [
      "Gianluigi Buffon",
      "Fabio Cannavaro",
      "Paolo Maldini",
      "Gianluca Zambrotta",
    ],
    Answer: "Gianluigi Buffon ",
  },
  {
    question:
      "Which player scored the most goals in a single FIFA Club World Cup tournament?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Luis Suárez", "Romário"],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Who holds the record for the most goals in a single season of Serie A?",
    options: [
      "Gonzalo Higuaín",
      "Ciro Immobile",
      "Francesco Totti",
      "Gunnar Nordahl",
    ],
    Answer: "Gunnar Nordahl ",
  },
  {
    question:
      "Which player has the most consecutive matches scoring in the UEFA Champions League?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Robert Lewandowski",
      "Ruud van Nistelrooy",
    ],
    Answer: "Cristiano Ronaldo ",
  },
  {
    question:
      "Who is the youngest player to debut for the Argentina national team?",
    options: [
      "Diego Maradona",
      "Lionel Messi",
      "Juan Román Riquelme",
      "Sergio Agüero",
    ],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Which player has the most goals in a single Copa America tournament?",
    options: ["Pelé", "Lionel Messi", "Neymar", "Gabriel Batistuta"],
    Answer: "Lionel Messi ",
  },
  {
    question:
      "Who holds the record for the most appearances in the UEFA European Championship?",
    options: [
      "Cristiano Ronaldo",
      "Gianluigi Buffon",
      "Bastian Schweinsteiger",
      "Iker Casillas",
    ],
    Answer: "Cristiano Ronaldo",
  },
  {
    question:
      "Which player has the most goals in a single season of the English Premier League?",
    options: ["Alan Shearer", "Mohamed Salah", "Harry Kane", "Thierry Henry"],
    Answer: "Mohamed Salah ",
  },
  {
    question:
      "Who was the first player to score 50 goals in a single La Liga season?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Telmo Zarra",
      "Hugo Sánchez",
    ],
    Answer: "Telmo Zarra ",
  },
  {
    question:
      "Which player holds the record for the most goals scored in the history of the UEFA Europa League?",
    options: [
      "Radamel Falcao",
      "Henrik Larsson",
      "Klaas-Jan Huntelaar",
      "Antoine Griezmann",
    ],
    Answer: "Radamel Falcao ",
  },
];
