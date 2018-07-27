import React from 'react';

import classes from './About.css';

const About = () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <h1>About</h1>
      <p className={classes.paragraph}>
    This site provides proposals and tools concerning Armenia, the Southern Caucasus and the greater region, serving policy and decision makers.{'\n\n'}

    Policy suggestions are available in multiple languages, available upon request.{'\n\n'}
    
    Contact: info@regionalkinetics.com{'\n\n'}

      </p>
      <div className={classes.image}>
        <img className={classes.image} src="About.gif" alt="Rise_and_Fall_of_the_Ottoman_Empire_1300-1923" />
      </div>
      <p className={classes.paragraph}>
    Policies of nation states change with their interests. National borders are the most ephemeral. This animation shows how the expansion and contraction of a typical state is the rule rather than the exception. In this example, the Ottoman Empire conquered and expanded jurisdiction over states and peoples, starting from the Battle of Manzikert in 1073 to Osman declaring himself Sultan in 1299. By 1566 the empire expanded through the Balkans nearly reaching Vienna, Crimea, parts of Ukraine, across North Africa and the Arabian Gulf.{'\n\n'}

    By the early 19th century, the Ottoman Empire began losing land to its indigenous populations, including the Caucasus, the northern shores of the Black Sea, Egypt, areas of North Africa, Greece and most all of its former Balkan territory.{'\n\n'}

    After WWI, the empire lost all of its former Arab lands and shrinking into an area covering only a small portion of northern Anatolia.{'\n\n'}

    By 1923 all that remained became the Republic of Turkey, with many former Ottoman subjects becoming independent nation states.
      </p>
      
    </div>
  </div>
);

export default About;
