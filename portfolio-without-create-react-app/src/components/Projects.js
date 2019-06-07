import React from 'react';
import PROJECTS from '../data/projects';

// class Project extends Component {
//     render() {
//         const { title, image, description, link } = this.props.project;
        
//         return (
//             <div style={{display: 'inline-block', width: 300, margin: 10}}>
//                 <h3>{title}</h3>
//                 <img src={image} alt='profile' style={{ width: 200, height: 120}}/>
//                 <p>
//                     {description}
//                 </p>
//                 <a href={link}>{link}</a>
//             </div>
//         );
//     }
// }

// class Projects extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return (
//                                 <Project project={PROJECT} key={PROJECT.id} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }


const Project = props => {
    const { title, image, description, link } = props.project;
    return (
        <div style={{display: 'inline-block', width: 300, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120}}/>
            <p>
                {description}
            </p>
            <a href={link}>{link}</a>
        </div>
    );
}

const Projects = props => {
    return (
        <div>
            <h2>Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => <Project project={PROJECT} key={PROJECT.id} />)
                }
            </div>
        </div>
    );
}

export default Projects;