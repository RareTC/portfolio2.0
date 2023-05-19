import './ImageCard.css';


export default function ImageCard({ cards }) {
    return (
        <>
            <div className="projectList">
                {cards.map((card, index) => (
                    <div className="projectItem" key={index}>
                        <h1 className="project-title">{card.name}</h1>
                        <img src={card.image} alt="" className='image' />
                        {/* <div
                            style={{ backgroundImage: `url(${card.image})` }}
                            className="bgImage"
                        ></div> */}
                        <p className="project-desc">{card.desc}</p>
                        <p className="project-skills">{card.skills}</p>
                        <div className="project-btn-wrap">
                            <button
                                className="project-btn"
                                onClick={() => window.open(card.git)}
                            >
                                Code
                            </button>
                            <button
                                className="project-btn"
                                onClick={() => window.open(card.site)}
                            >
                                Site
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}