import React from "react";

const Home = () => {
  return (
    <div className='bg-white container mx-auto p-6 md:p-32 w-11/12 shadow'>
      <h3 className='sm:text-6xl text-5xl text-center uppercase font-bold'>
        Data Science!
      </h3>
      <h2 className='text-center italic sm:text-4xl text-4xl'>Subtitle 2</h2>
      <br></br>
      <p className='my-3 text-base md:text-xl'>
        Artificial Intelligence – specifically machine learning and deep
        learning – was everywhere in 2018 and don’t expect the hype to die down
        over the next 12 months.
      </p>
      <p className='my-3 text-base md:text-xl'>
        The hype will die eventually of course, and AI will become another
        consistent thread in the tapestry of our lives, just like the internet,
        electricity, and combustion did in days of yore. But for at least the
        next year, and probably longer, expect astonishing breakthroughs as well
        as continued excitement and hyperbole from commentators.
      </p>
      <p className='my-3 text-base md:text-xl'>
        This is because expectations of the changes to business and society
        which AI promises (or in some cases threatens) to bring about go beyond
        anything dreamed up during previous technological revolutions. AI points
        towards a future where machines not only do all of the physical work, as
        they have done since the industrial revolution but also the “thinking”
        work – planning, strategizing and making decisions.
      </p>
    </div>
  );
};

export default Home;
