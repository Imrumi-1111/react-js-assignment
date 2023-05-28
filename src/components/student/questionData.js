import Question from './question'


export default function QuestionData(){
const questionsData = [
    {
        Question: "Today is Monday, After 63 days,it will be",
        Options: ['Tuesday', 'Monday', 'Thursday', 'Sunday'],
        CorrectAnswer: "Monday"

    },
    {
        Question: "The International Literacy Day is observed on",
        Options: ['Sep 8', 'Sep 28', 'May 2', 'Sep 22'],
        CorrectAnswer: "Sep 8"

    },
    {
        Question: "September 27 is celebrated every year as",
        Options: ["Teachers' Day", 'National Integration Day', 'World Tourism Day', 'Earthday'],
        CorrectAnswer: "World Tourism Day"

    },
    {
        Question: "World Health Day is observed on",
        Options: ['Apr 7', 'Mar 6', 'Mar I5', 'Sept 20'],
        CorrectAnswer: "Apr 7"

    },
    {
        Question: "The first month of the Indian national calendar is",
        Options: ['Magha', 'Chaitra', 'Ashadha', 'Vaishakha'],
        CorrectAnswer: "Chaitra"

    },
    {
        Question: "Which of the following is not a dance from Kerala?",
        Options: ['Kathakali', 'Mohiniattam', 'Ottan Thullal', 'Yaksha Gana'],
        CorrectAnswer: "Monday"

    },
    {
        Question: "Which of the followiing is a folk dance of India?",
        Options: ['Kathakali', 'Mohiniattam', 'Garba', 'Manipuri'],
        CorrectAnswer: "Garba"

    },
    {
        Question: "Which of the-following is wrongly matched?",
        Options: ['Qutab Minar- Delhi', 'Taj Mahal -Agra', 'Ajanta Caves -Maharashtra', 'Charminar -Lucknow'],
        CorrectAnswer: "Charminar -Lucknow"

    },
    {
        Question: "Writers Building is the headquarters of",
        Options: ['The times of India group', 'All India Writers Association', 'West Bengal Government', 'Press Trust of India'],
        CorrectAnswer: "West Bengal Government"

    },
    {
        Question: "Dogri is spoken in which of the following states",
        Options: ['Jammu & Kashmir', 'Bihar', 'Assam', 'Manipur'],
        CorrectAnswer: "Jammu & Kashmir"

    }
]
return (
    <div>
      {questionsData.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );


}