
function Skills(){
    return(
        <section className="resume-section" id="skills">
        <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                <li className="list-inline-item"><i className="fab fa-react"></i></li>
                <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                <li className="list-inline-item"><i className="fab fa-less"></i></li>
                <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                <li className="list-inline-item"><i className="fa-brands fa-java"></i></li>
            </ul>

            <div className="subheading mb-3">Frontend</div>
            <ul className="fa-ul mb-1">
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    React Native, Redux, Ngrx, React Comtext, Webpack, Rollup, yarn, etc.
                </li>
            </ul>
            
            <div className="subheading mb-3">Backend</div>
            <ul className="fa-ul mb-1">
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Node.js, C#, PHP, Python, MongoDB, Redis, SQLServer, MySQL, MariaDB, Oracle, CosmosDB, RabbitMQ, ElasticSearch, etc.
                </li>
            </ul>

            <div className="subheading mb-3">Architect and Methodologies</div>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Microservices, Microfrontend
                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Event Driven, Architecture, CQRS, Architecture Zero, Domaim Driven Desigm, Clean
                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Twelve Factor, Design Pattern GOF & Microsoft
                </li>
                <li>
                    <span className="fa-li"><i className="fas fa-check"></i></span>
                    Scrum, Lean, Kanban and more.
                </li>
            </ul>
        </div>
    </section>

    );
}
export default Skills;