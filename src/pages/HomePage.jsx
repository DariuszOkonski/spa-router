import React from 'react'
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum eum eaque quisquam sunt blanditiis veniam sed repellendus, delectus omnis, laboriosam impedit deserunt eius, praesentium voluptatem illum quae soluta! Culpa."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Ania Kwiatkowska",
        text: "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum eum eaque quisquam sunt blanditiis veniam sed repellendus, delectus omnis, laboriosam impedit deserunt eius, praesentium voluptatem illum quae soluta! Culpa."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Kowalski",
        text: "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum eum eaque quisquam sunt blanditiis veniam sed repellendus, delectus omnis, laboriosam impedit deserunt eius, praesentium voluptatem illum quae soluta! Culpa."
    }
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>  
    );
}
 
export default HomePage;