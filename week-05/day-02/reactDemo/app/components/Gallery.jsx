import React from 'react';

import Popup from './popup.jsx';

import KawhiLeonard from '../images/gallery/KawhiLeonard.jpg';
import KevinDurant from '../images/gallery/KevinDurant.jpg';
import KobeBryant from '../images/gallery/KobeBryant.jpg';
import KyrieIrving from '../images/gallery/KyrieIrving.jpg';
import StephenCurry from '../images/gallery/StephenCurry.jpg';
import ThumbKawhiLeonard from '../images/thumbnails/KawhiLeonard.jpg';
import ThumbKevinDurant from '../images/thumbnails/KevinDurant.jpg';
import ThumbKobeBryant from '../images/thumbnails/KobeBryant.jpg';
import ThumbKyrieIrving from '../images/thumbnails/KyrieIrving.jpg';
import ThumbStephenCurry from '../images/thumbnails/StephenCurry.jpg';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.imgSrc = [
            {
                id: 1,
                name: 'KawhiLeonard',
                url: KawhiLeonard,
                thumbUrl: ThumbKawhiLeonard,
                info: 'Kawhi Anthony Leonard (born June 29, 1991) is an American professional basketball player for the San Antonio Spurs of the National Basketball Association (NBA).'
            },
            {
                id: 2,
                name: 'KevinDurant',
                url: KevinDurant,
                thumbUrl: ThumbKevinDurant,
                info: 'Kevin Wayne Durant (born September 29, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).'
            },
            {
                id: 3,
                name: 'KobeBryant',
                url: KobeBryant,
                thumbUrl: ThumbKobeBryant,
                info: 'Kobe Bean Bryant (born August 23, 1978) is an American retired professional basketball player and businessman. He played his entire 20-year career with the Los Angeles Lakers of the National Basketball Association (NBA).'
            },
            {
                id: 4,
                name: 'KyrieIrving',
                url: KyrieIrving,
                thumbUrl: ThumbKyrieIrving,
                info: 'Kyrie Andrew Irving (born March 23, 1992) is an American professional basketball player for the Boston Celtics of the National Basketball Association (NBA).'
            },
            {
                id: 5,
                name: 'StephenCurry',
                url: StephenCurry,
                thumbUrl: ThumbStephenCurry,
                info: 'Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history.'
            }
        ]
        this.state = {
            imgId: 0,
            hoverId: '',
            searchbarValue: ''
        };
    }

    arrowClick(num) {
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
            });
        } else if (num === -1 && this.state.imgId <= 0) {
            this.setState({
                imgId: this.imgSrc.length - 1
            });
        }
    }

    thumbnailClick(id) {
        this.setState({
            imgId: id
        });
    }

    handleMouseEnter(index) {
        this.setState({
            hoverId: index
        });
    }

    handleMouseLeave() {
        this.setState({
            hoverId: ''
        });
    }

    searchbarChange(event) {
        this.setState({
            searchbarValue: event.target.value
        });
    }

    render() {
        let that = this;
        var search = that.state.searchbarValue;
        return (
            <main>
                <section className="gallery">
                    <section className="leftArrow">
                        <div className="svg" onClick={() => this.arrowClick(-1)}>
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
                        <div className="svg" onClick={() => this.arrowClick(1)}>
                            <svg width="14.906" height="22.75" viewBox="0 0 14.906 22.75">
                                <path id="Shape_3_copy" data-name="Shape 3 copy" className="cls-1" d="M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z"
                                    transform="translate(-114.875 -289.125)" />
                            </svg>
                        </div>
                    </section>
                </section>
                <section className="nav">
                    <div className="thumbnails">
                        {
                            this.imgSrc.map(function (item, index) {
                                return (
                                    <nav className={that.state.imgId === item.id - 1 ? 'active' : ''} key={index}
                                    onMouseEnter={() => that.handleMouseEnter(item.id - 1)}
                                    onMouseLeave={() => that.handleMouseLeave(item.id - 1)}
                                    onClick={() => that.thumbnailClick(item.id - 1)}>
                                        <div>
                                            <img src={item.thumbUrl} alt="" />
                                        </div>
                                        <Popup name={item.name} index={index} hoverId={that.state.hoverId} />
                                    </nav>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="searchbar">
                    <input type="text" placeholder="search player name..."
                    onChange={() => that.searchbarChange(event)} value={search} />
                </section>
            </main>
        )
    }
}

export default Gallery;