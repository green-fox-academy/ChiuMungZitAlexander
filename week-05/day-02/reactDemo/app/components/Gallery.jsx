import React from 'react';

import KawhiLeonard from '../images/gallery/KawhiLeonard.jpg'
import KevinDurant from '../images/gallery/KevinDurant.jpg'
import KobeBryant from '../images/gallery/KobeBryant.jpg'
import KyrieIrving from '../images/gallery/KyrieIrving.jpg'
import StephenCurry from '../images/gallery/StephenCurry.jpg'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.imgSrc = [
            {
                name: 'KawhiLeonard',
                url: KawhiLeonard,
                info: 'Kawhi Anthony Leonard (born June 29, 1991) is an American professional basketball player for the San Antonio Spurs of the National Basketball Association (NBA).'
            },
            {
                name: 'KevinDurant',
                url: KevinDurant,
                info: 'Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).'
            },
            {
                name: 'KobeBryant',
                url: KobeBryant,
                info: 'Kobe Bean Bryant (born August 23, 1978) is an American retired professional basketball player and businessman. He played his entire 20-year career with the Los Angeles Lakers of the National Basketball Association (NBA).'
            },
            {
                name: 'KyrieIrving',
                url: KyrieIrving,
                info: 'Kyrie Andrew Irving (born March 23, 1992) is an American professional basketball player for the Boston Celtics of the National Basketball Association (NBA).'
            },
            {
                name: 'StephenCurry',
                url: StephenCurry,
                info: 'Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history.'
            }
        ]
        this.state = {
            imgId: 0
        };
    }

    handleClick(num) {
        if (num === 1 && this.state.imgId < this.imgSrc.length - 1) {
            this.setState({
                imgId: this.state.imgId + 1
            });
        } else if (num === 1 && this.state.imgId >= this.imgSrc.length - 1) {
            this.setState({
                imgId: 0
            });
        }
        if (num === -1 && this.state.imgId > 0) {
            this.setState({
                imgId: this.state.imgId - 1
            })
        } else if (num === -1 && this.state.imgId <= 0) {
            this.setState({
                imgId: this.imgSrc.length - 1
            });
        }
    }

    render() {
        return (
            <main>
                <section className="gallery">
                    <section className="leftArrow">
                        <div className="svg" onClick={() => this.handleClick(-1)}>
                            <svg width="14.906" height="22.75" viewBox="0 0 14.906 22.75">
                                <defs>
                                </defs>
                                <path id="Shape_3_copy" data-name="Shape 3 copy" className="cls-1" d="M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z"
                                    transform="translate(-114.875 -289.125)" />
                            </svg>
                        </div>
                    </section>
                    <section className="pic">
                        <img src={this.imgSrc[this.state.imgId].url} alt="images/alt.jpg" />
                        <div className="description">
                            <h2>{this.imgSrc[this.state.imgId].name}</h2>
                            <p>{this.imgSrc[this.state.imgId].info}</p>
                        </div>
                    </section>
                    <section className="rightArrow">
                        <div className="svg" onClick={() => this.handleClick(1)}>
                            <svg width="14.906" height="22.75" viewBox="0 0 14.906 22.75">
                                <path id="Shape_3_copy" data-name="Shape 3 copy" className="cls-1" d="M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z"
                                    transform="translate(-114.875 -289.125)" />
                            </svg>
                        </div>
                    </section>
                </section>
                <section className="nav">
                    <div className="thumbnails">
                        {/* <!-- <nav class="active">
                            <div><img src="images/thumbnails/KobeBryant.jpg" alt=""></div>
                            <div class="popup">
                                <span>Kobe Bryant</span>
                            </div>
                        </nav> --> */}
                    </div>
                </section>
            </main>
        )
    }
}

export default Gallery;