import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = (props) => {
    return(
        <div className="test-text">

            <span  className="content-block">
                <h1>
                    Hello World, <h3 className="objective">I am Software Engineer that works in Cloud development, Data Science, and Machine Learning</h3>
                    <span className="small-text">Here are a few of my favorite technologies to work with.</span>
                    <span className="tech-container">
                        <span><FontAwesomeIcon icon={['fab', 'python']} size="lg" /></span>
                        <span><FontAwesomeIcon icon={['fab', 'js-square']} size="lg" /></span>
                        <span><FontAwesomeIcon icon={['fab', 'java']} size="lg" /></span>
                        <span><FontAwesomeIcon icon={['fab', 'aws']} size="lg" /></span>
                    </span>
                </h1>
            </span>
            <span id="project-block" className="content-block">
            <h3 className="mini-title"> Recent Projects </h3>
            <div className="project-container">
            <a className="project-link" href="#project1">
                <span className="project">
                
                    <h1 className="project-title">Tendalgo Search Engine</h1> 
                    <span>
                    <ul className="skills-container">
                    <li className="skill">Javascript</li>
                    <li className="skill">ReactJS</li>
                </ul>
                <label className="view">Click To View More</label>
                    </span>
                    
                </span>
                </a>

                <a className="project-link" href="#project2">
                <span className="project">
                
                <h1 className="project-title">User Authentication Application</h1> 
                    <span>
                    <ul className="skills-container">
                    <li className="skill">Javascript</li>
                    <li className="skill">ReactJS</li>
                    <li className="skill">NodeJS</li>
                    <li className="skill">mySQL</li>
                </ul>
                <label className="view">Click To View More</label>
                    </span>
                    
                </span>
                </a>

                <a className="project-link" href="#project3"> 
                <span className="project">
                    
                    <h1 className="project-title">List Application</h1> 
                    <span>
                    <ul className="skills-container">
                    <li className="skill">Javascript</li>
                    <li className="skill">ReactJS</li>
                    <li className="skill">NodeJS</li>
                </ul>
                <label className="view">Click To View More</label>
                    </span>
                    
                </span>
                </a>
            </div>

            </span>
            <span  id="project1" className="content-block">
            

            <span className="title-content">
            <img src="Logo.png" width="100px"></img>
            <h1>Tendalgo Search Engine</h1>
            </span>
                
                
                <span className="description-container">
                    <span className="description">
                        Search Engine designed for the popular mobile game Summoners War, the user selects search criteria and the engine looks for all the characters that match the given criteria. The user then has options to filter the search results for a more precise search. 
                        The Application got alot of attention in the small reddit community and helped many people improve their quality of gameplay. You can view the reddit thread here and look through the user comments. 
                        <br></br>
                        <br></br>
                        <a className="reddit-link" target="_blank" href="https://www.reddit.com/r/summonerswar/comments/ifaslr/i_made_an_app_that_finds_monsters_to_go_with/?utm_source=share&utm_medium=web2x&context=3"> <FontAwesomeIcon icon={['fab', 'reddit']} size="lg" /> Reddit Link</a>
                    </span>
                    <span className="description">
                        <span className="description-mid">
                            <span><a href="https://github.com/Abhinavnamballa/tendalgo-search-engine/blob/master/src/searcher.js" target="_blank"><img className="example-img" src="TendalgoExample1.PNG"></img></a></span>
                            <span>This function is one of the handlers for the Skill1 input. The function initializes with the event target that is checked and then copies the data from an array within a JSON object that is set in the state of the application. 
                                <br></br> <br></br>
                                Lines(47-56) In this segment if the checkbox is unchecked The program will loop throught the State and remove the instances of the unchecked skill from the skill1 array. Then the program sets the state of skill one. 
                                <br></br><br></br>
                                This is just one component of the full search engine file If you want to view the entire codebase of the program you can view it in the GitHub link below and you can test out the application by clicking "View Demo". The code snippet from the example is located @ src/searcher.js
</span>
                        </span>

                    </span>
                    <span className="description-end">
                        <li>Created: 08/2020</li>
                        <li>Users: 6000+</li>
                        <li className="github-link"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /> GitHub Link: <a  href="https://github.com/Abhinavnamballa/tendalgo-search-engine" target="_blank">https://github.com/Abhinavnamballa/tendalgo-search-engine</a></li>
                    </span>
                </span>
                <a className="demo" href="https://www.tendalgo.io/" target="_blank">View Demo</a>

            </span>
            <span  id="project2" className="content-block">
            <h1>User Authentication Application</h1>
            <span className="description-container">
                    <span className="description">Authentication Application using mySql, and Node express Auth Server. The application gets user data and encypts it using a SHA-256 encryption + salt which is then stored in a mySql DB. The Auth Server then becomes an API that can be pinged to check if a user is still verified. The codebase and demo are still not available but will be deployed
                        in the coming months. 
                     </span>
                    <span className="description"></span>
                    <span className="description"></span>
                    <span className="description-end">
                        <li>Created: 11/2020</li>
                        <li className="github-link"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /> GitHub Link: <br></br><a >Coming Soon</a></li>
                    </span>
                </span>
            </span>
            <span  id="project3" className="content-block">
            
            <h1>List Application</h1>
            <span className="description-container">
                    <span className="description-mid">
                        <span>
                        Simple List Application that uses React State and Class Components in React to Record User input and List the Data in a UI friendly list. 
                        You can View this application by clicking "View Demo"
                        </span>
                        <span>
                        <span><a href="https://github.com/Abhinavnamballa/tendalgo-search-engine/blob/master/src/searcher.js" target="_blank"><img  className="example-img2" src="ListExample.PNG"></img></a></span>

                        </span>
                    </span>
                    <span className="description"></span>
                    <span className="description-end">
                        <li>Created: 07/2020</li>
                        <li className="github-link"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /> GitHub Link: <br></br> <a  href="https://github.com/Abhinavnamballa/List_App_Tendalgo" target="_blank">https://github.com/Abhinavnamballa/List_App_Tendalgo</a></li>
                    </span>
                </span>
                <a className="demo" href="https://abhinavnamballa.github.io/List_App_Tendalgo/" target="_blank">View Demo</a>
            </span>


        </div>
    )
}

export default Main;