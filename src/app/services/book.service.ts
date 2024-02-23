import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Book } from '../types';
import { addDoc, collection, doc, getDoc, getDocs, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public firestore: Firestore) { }

  async getBooks() {
    return (
      await getDocs(query(collection(this.firestore, 'books')))
    ).docs.map((books) => books.data());
  }

  async getBookById(id: string): Promise<Book> {
    const errBook: Book = {
      isbn13: "not-found", title: 'Not Found', authors: ['Not Found'], imageUrl: 'https://images.squarespace-cdn.com/content/v1/56acc1138a65e2a286012c54/1571368588313-C5G9UTE0WVNEV5TJXW5O/error-3060993_1280.png', rating: 4, description: 'Not Found', pages: -1, publisher: "Not Found", genres: ["Not Found"],
      language: 'Not Found'
    };
    
    try {
      const docSnap = await getDoc(doc(this.firestore, "books", id));

      if (docSnap.exists()) {
        return docSnap.data() as Book;
      }
      else {
        console.log("BOOK DOES NOT EXIST");
        return errBook;
      }

    } catch (error) {
      console.log(error);
      return errBook;
    }
  }

  async loadBooks() {
    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780062316110", 
      title: 'Sapiens: A Brief History of Humankind', 
      authors: ['Yuval Noah Harari'], 
      imageUrl: 'https://m.media-amazon.com/images/I/71N3-FFSDxL._SY522_.jpg', 
      rating: 0, 
      description: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human.' One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.", 
      pages: 464, 
      publisher: "Harper Perennial", 
      genres: ["Nonfiction", "History", "Science", "Philosophy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780062464347", 
      title: 'Homo Deus: A History of Tomorrow', 
      authors: ['Yuval Noah Harari'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1468760805i/31138556.jpg', 
      rating: 0, 
      description: "Over the past century humankind has managed to do the impossible and rein in famine, plague, and war. This may seem hard to accept, but, as Harari explains in his trademark style—thorough, yet riveting—famine, plague and war have been transformed from incomprehensible and uncontrollable forces of nature into manageable challenges. For the first time ever, more people die from eating too much than from eating too little; more people die from old age than from infectious diseases; and more people commit suicide than are killed by soldiers, terrorists and criminals put together. The average American is a thousand times more likely to die from binging at McDonalds than from being blown up by Al Qaeda.\nWhat then will replace famine, plague, and war at the top of the human agenda? As the self-made gods of planet earth, what destinies will we set ourselves, and which quests will we undertake? Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century—from overcoming death to creating artificial life. It asks the fundamental questions: Where do we go from here? And how will we protect this fragile world from our own destructive powers? This is the next stage of evolution. This is Homo Deus.\nWith the same insight and clarity that made Sapiens an international hit and a New York Times bestseller, Harari maps out our future.",
      pages: 455, 
      publisher: "Harper Perennial", 
      genres: ["Nonfiction", "History", "Science", "Philosophy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780141033570", 
      title: 'Thinking, Fast and Slow', 
      authors: ['Kahneman Daniel'], 
      imageUrl: 'https://m.media-amazon.com/images/I/319zc862DSL._SY445_SX342_.jpg', 
      rating: 0, 
      description: "System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation―each of these can be understood only by knowing how the two systems shape our judgments and decisions.\nEngaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives―and how we can use different techniques to guard against the mental glitches that often get us into trouble. Winner of the National Academy of Sciences Best Book Award and the Los Angeles Times Book Prize and selected by The New York Times Book Review as one of the ten best books of 2011, Thinking, Fast and Slow is destined to be a classic.",
      pages: 512, 
      publisher: "Farrar, Straus and Giroux", 
      genres: ["Nonfiction", "Psychology", "Self Help", "Business", "Philosophy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780765382030", 
      title: 'The Three-Body Problem', 
      authors: ['Liu Cixin'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg', 
      rating: 0, 
      description: "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion.",
      pages: 472, 
      publisher: "Tor Books", 
      genres: ["Science Fiction", "Fiction", "China", "Fantasy", "Science Fiction Fantasy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780765386694", 
      title: 'The Dark Forest', 
      authors: ['Liu Cixin'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1412064931i/23168817.jpg', 
      rating: 0, 
      description: "This is the second novel in \"Remembrance of Earth's Past\", the near-future trilogy written by China's multiple-award-winning science fiction author, Cixin Liu.\nIn The Dark Forest, Earth is reeling from the revelation of a coming alien invasion — four centuries in the future. The aliens' human collaborators have been defeated but the presence of the sophons, the subatomic particles that allow Trisolaris instant access to all human information, means that Earth's defense plans are exposed to the enemy. Only the human mind remains a secret.\nThis is the motivation for the Wallfacer Project, a daring plan that grants four men enormous resources to design secret strategies hidden through deceit and misdirection from Earth and Trisolaris alike. Three of the Wallfacers are influential statesmen and scientists but the fourth is a total unknown. Luo Ji, an unambitious Chinese astronomer and sociologist, is baffled by his new status. All he knows is that he's the one Wallfacer that Trisolaris wants dead.",
      pages: 512, 
      publisher: "Tor Books", 
      genres: ["Science Fiction", "Fiction", "China", "Fantasy", "Science Fiction Fantasy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780765377104", 
      title: "Death's End", 
      authors: ['Liu Cixin'], 
      imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430330507i/25451264.jpg",
      rating: 0, 
      description: "With The Three-Body Problem, English-speaking readers got their first chance to experience the multiple-award-winning and bestselling Three-Body Trilogy by China's most beloved science fiction author, Cixin Liu. Three-Body was released to great acclaim including coverage in The New York Times and The Wall Street Journal. It was also named a finalist for the Nebula Award, making it the first translated novel to be nominated for a major SF award since Italo Calvino's Invisible Cities in 1976.\nNow this epic trilogy concludes with Death's End. Half a century after the Doomsday Battle, the uneasy balance of Dark Forest Deterrence keeps the Trisolaran invaders at bay. Earth enjoys unprecedented prosperity due to the infusion of Trisolaran knowledge. With human science advancing daily and the Trisolarans adopting Earth culture, it seems that the two civilizations will soon be able to co-exist peacefully as equals without the terrible threat of mutually assured annihilation. But the peace has also made humanity complacent.\nCheng Xin, an aerospace engineer from the early 21st century, awakens from hibernation in this new age. She brings with her knowledge of a long-forgotten program dating from the beginning of the Trisolar Crisis, and her very presence may upset the delicate balance between two worlds. Will humanity reach for the stars or die in its cradle?",
      pages: 604, 
      publisher: "Tor Books", 
      genres: ["Science Fiction", "Fiction", "China", "Fantasy", "Science Fiction Fantasy"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780720646504", 
      title: 'Ion', 
      authors: ['Liviu Rebreanu'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389910264i/778255.jpg', 
      rating: 0, 
      description: "Liviu Rebreanu mărturisea la un moment dat că în lunga perioadă de şapte ani, cât a durat scrierea romanului „Ion“, un rol important l-a avut, pe lânga amplul material documentar, o scenă văzută pe colinele dimprejurul satului şi care l-a impresionat în mod deosebit. Aflat la vânătoare, scriitorul a observat ... un ţăran îmbrăcat în haine de sărbătoare, care s-a aplecat deodată şi-a sărutat pământul. L-a sărutat ca pe-o ibovnică. Scena m-a uimit şi s-a întipărit în minte, dar fără vreun scop deosebit, ci numai ca o simplă ciudăţenie.„Ion“ este o monografie a realităţilor satului ardelean de la începutul secolului al XX-lea, ilustrând conflictul generat de lupta pentru pământ, într-o lume în care statutul social este stabilit în funcţie de avere. În acest context, calea aleasă de protagonist pentru a scăpa de sărăcie este căsătoria cu o fată bogată, Ana. Florica, femeia pe care o iubeşte de fapt, se va căsători, la rândul ei, cu George pentru pentru aceleaşi argumente, iar Laura, fiica învăţătorului Herdelea îl va lua pe Pintea nu din dragoste, ci pentru că nu cere zestre.Marele merit al lui Rebreanu este acela că îşi lasă personajele să acţioneze liber, să-şi dezvăluie firea, să izbucnească în tensiuni dramatice, într-un cuvânt, să-şi aleagă singuri destinul.",
      pages: 416, 
      publisher: "Dufour Editions", 
      genres: ["Romanian Literature", "Classics", "Fiction"],
      language: "Romanian"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780140447576", 
      title: 'The Communist Manifesto', 
      authors: ['Karl Marx'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565912767i/30474.jpg', 
      rating: 0, 
      description: "Originally published on the eve of the 1848 European revolutions, The Communist Manifesto is a condensed and incisive account of the worldview Marx and Engels developed during their hectic intellectual and political collaboration. Formulating the principles of dialectical materialism, they believed that labor creates wealth, hence capitalism is exploitive and antithetical to freedom.\nThis new edition includes an extensive introduction by Gareth Stedman Jones, Britain's leading expert on Marx and Marxism, providing a complete course for students of The Communist Manifesto, and demonstrating not only the historical importance of the text, but also its place in the world today.\nFor more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.",
      pages: 288, 
      publisher: "Penguin Books", 
      genres: ["Philosophy", "Nonfiction", "Politics", "History", "Economics", "Sociology"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780316452564", 
      title: 'Sword of Destiny', 
      authors: ['Andrzej Sapkowski'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580901593i/51003723.jpg', 
      rating: 0, 
      description: "Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent. He roams the country seeking assignments, but gradually comes to realise that while some of his quarry are unremittingly vile, vicious grotesques, others are the victims of sin, evil or simple naivety.",
      pages: 385, 
      publisher: "Gollancz", 
      genres: ["Fantasy", "Fiction", "Short Stories", "Adventure"], 
      language: "English"
    });

    await addDoc(collection(this.firestore, 'books'), {
      isbn13: "9780316017930", 
      title: 'Outliers: The Story of Success', 
      authors: ['Malcolm Gladwell'], 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386417882i/19258920.jpg', 
      rating: 0, 
      description: "In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of 'outliers'—the best and the brightest, the most famous and the most successful. He asks the what makes high-achievers different? His answer is that we pay too much attention to what successful people are like, and too little attention to where they are that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band. Brilliant and entertaining, Outliers is a landmark work that will simultaneously delight and illuminate.",
      pages: 321, 
      publisher: "Little, Brown and Company", 
      genres: ["Nonfiction", "Psychology", "Business", "Self Help", "Sociology"], 
      language: "English"
    });
  }
}
