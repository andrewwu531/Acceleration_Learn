import shreddedbody from '../images/big-arms.png';
import writing from '../images/writing.png';
import articles from '../images/100-Articles.png';
import pronunciation from '../images/pronunciation.png';
import businssEnglish from '../images/businessEnglish.png';
import mind from '../images/mind.png';

const data = [
  { id: 1, title: 'Shredded Body in 2 Months', description: 'Mastering Bodybuilding in 3 hours', imageUrl: shreddedbody },
  { id: 2, title: '100+ Key Topic Articles & Journals in Videos', description: 'Establish Your Social Knowledge Set', imageUrl: articles },
  { id: 3, title: 'The Confident Speaking Course', description: 'The English Pronunciation & Speech Programme', imageUrl: pronunciation },
  { id: 4, title: 'The Ultimate Writing Course', description: 'Comedy & Storytelling Principles', imageUrl: writing },
  { id: 5, title: 'The Business English Book', description: '100+ Business Writing Articles - Explained', imageUrl: businssEnglish },
  { id: 6, title: 'The Mind of a Guru', description: 'The Psychological Mindset of Every Legend', imageUrl: mind },
]

function Courses() {
  return (
    <div className="bg-gray-150" style={{ marginTop: "6vh", marginBottom: "12vh" }}>

      <div className="flex items-center justify-center pt-10 pb-10 mx-auto xl:max-w-5xl lg:max-w-4xl">

        <div className="grid grid-flow-col xl:gap-2 gap-1.5">
            {data.map(card => (
                <div key={card.id}>
                  <img src={card.imageUrl} alt="card" className="items-center justify-center mx-auto rounded-lg" style={{ width: '100%', height: '77%' }} />
                  <div className="flex flex-col text-center">
                    <h3 className="mx-3 mt-4 font-bold">{card.title}</h3>
                    <p className="mx-3 mt-2 text-gray-700">{card.description}</p>
                  </div>
                </div>
            ))} 
        </div>  
      </div>
    </div>
  // why different images have different width although it does not look obvious


  );
}

export default Courses;