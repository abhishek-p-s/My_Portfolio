import React from 'react';
import { Timeline } from 'react-responsive-timeline';
import Navbar from './Navbar';
import Footer from './Footer';

function works() {


    return (
        <><Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " style={{ marginTop: "100px" }}>
                        <Timeline
                            pivot="vertical"

                            direction="center"
                            tooltip={true}
                            textLimit="none"
                            timelines={[
                                {
                                    title: 'C.A. Alexander, A Pattern Language, New York,, 1977.',
                                    sub: '10 May 2020',
                                },
                                {
                                    title: 'E. Yourdon, L. Constantine, Structured Design, N.J.,, 1978.',
                                    sub: '12 May 2020',
                                },
                                {
                                    title: 'C.A. Alexander, The Timeless Way of Building, New York,, 1979.',
                                    sub: '05 July 2020',
                                }
                            ]} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default works;