import React from 'react';
import Achievement from './achievementCard/achievement';
import Carosel from './carouselCard/carousel';
import Expertise from './expertiseCard/expertise';
import OurJourney from './ourJourneyCard/ourJourney';
import TeamImage from './teamImageCard/teamImage';
import Career from './careerCard/career';
import Message from './messageCard/message';

function OurStory() {
   return (
      <div>
         <Carosel />
         <Achievement />
         <Expertise />
         <OurJourney />
         <Message />
         <TeamImage/>
         <Career/>
      </div>
   )
}

export default OurStory;

