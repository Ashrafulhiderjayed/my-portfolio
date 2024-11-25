import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import HeadingTitle from '../../HeadingTitle/HeadingTitle';

const GithubContribution = () => {
    return (
        <section className='mt-32'>
            <div className="bg-gradient-to-b from-blue-900 to-gray-900 pb-16 pt-5">
            {/* Custom Heading Component */}
            <HeadingTitle text="GITHUB CONTRIBUTIONS" />
            
            <div className="max-w-7xl mx-auto text-center text-cyan-50">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-4">
                    My GitHub Activity
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    A visual representation of my contributions and activity over the past year.
                </p>

                {/* Full-width GitHub Calendar */}
                <div className="bg-gray-800 py-8 px-4 rounded-lg shadow-lg">
                    <div className="overflow-x-auto">
                        <GitHubCalendar
                            username="Ashrafulhiderjayed"
                            blockMargin={10} // Compact margins
                            colorScheme="dark"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default GithubContribution;
