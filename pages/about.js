import React from 'react';
import styled from 'styled-components';

import { media, style } from 'helpers/styledComponents.js';

import translate from 'helpers/translate.js';
import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';




// const pagePadding = {
//   xSmall: style.dimension.normal.pagePadding.xSmall,
//   small: style.dimension.normal.pagePadding.small,
//   medium: style.dimension.normal.pagePadding.medium,
//   large: style.dimension.normal.pagePadding.large,
//   xLarge: style.dimension.normal.pagePadding.xLarge,
//   xxLarge: style.dimension.normal.pagePadding.xxLarge
// }





const ThisPageContainerComponent = styled(PageContainerComponent)`


  

`;


export default class extends React.Component {
  static async getInitialProps({ query }) {
    
    return { query }
  }
  
  translate = (t) => translate(t, this.props.query.locale);
  
  render() {
    
    // console.log(">>> query", this.props.query);


    const locale = this.props.query.locale;
    
    return (
      <ThisPageContainerComponent>

        
        <section className="s-section first target-section">

          <div className="row section-header bit-narrow">
            <div className="col-full">
              <h4 className="subhead">About The International Blockchain Olympiad</h4>
              <h1>
                Decentralisation is our Destiny
                </h1>
            </div>
          </div>
  
        <div className="row bit-narrow innerpage no-bottom">
            <div className="block-tab-full">
              <div className="col-block">
                <p>
                  The history of blockchain is analogous to the cycles of life and death in the prehistory of Earth, namely concerning biodiversity, extinction events, and adaptation of species.
                    </p>
                <p>
                  The Cambrian Explosion is an era approximately 541 million years ago when an unprecedented number of phyla appeared into the fossil records. After several years of low-key development, the blockchain world experienced its own Cambrian Explosion in 2017, driven by the mirage of utopia and fuelled by the abundance of money.
                    </p>
                <p>
                  Projects and their ICOs expanded and diversified quickly in 2016 and 2017 after ERC-20 was proposed in Nov 2015; the only extinction filter was the inability to raise money, so the majority of projects seem to be winners.
                    </p>
                <p>
                  The Permian-Triassic Extinction is an event approximately 252 million years ago consisting of several localised events that saw the 96% of all species go extinct when they did not have the means to adapt, aptly named the Great Dying. In the blockchain world, the P-T Extinction event is already happening, has happened already, or is still happening: a study found circa 4% of ICOs were either promising or successful—an ironic coincidence.
                    </p>
              </div>
            </div>
          </div>

        </section>



        <section className="s-section target-section">
          <div className="row section-header bit-narrow">
            <div className="col-full">
              <h1>
                Evolution rather than Revolution
                </h1>
            </div>
          </div>
  
        <div className="row bit-narrow innerpage no-bottom">
            <div className="block-tab-full">
              <div className="col-block">
                <p>
                  In the P-T Extinction of blockchain, there exists three big filters: lack of research and technical competence, lack of business competence, and lack of legal and compliance competence.
                    </p>
                <p>
                  Scams do not survive an obvious lack of solid technology or research, while survivors do not have any business adoption, a familiar epidemic and a classic killer of startups. The final major extinction filter is the awakening of the people to the importance of privacy and lack of privacy preservation by contemporary corporations, especially in light of the Equifax breach and the Facebook “breach” by Cambridge Analytica, coupled with the activation of GDPR—blockchain projects without the foresight of building for privacy preservation shall eventually be consigned to the dustbin of history by the power of law and regulations.
                    </p>
                <p>
                  The fittest shall survive because of enterprise discipline with competence in technology, legal, and business: those missing tech is all talk, but can’t build; those missing business will “build it and they will come” (classic tech startup pitfall); those missing legal are lawsuits waiting to happen.
                    </p>
              </div>
            </div>
          </div>

        </section>

        
        <section className="s-section last target-section">

          <div className="row section-header bit-narrow">
            <div className="col-full">
              <h1>
                Seeking the World’s Best Blockchain Applications
                </h1>
            </div>
          </div> 
  
        <div className="row bit-narrow innerpage">
            <div className="block-tab-full">
              <div className="col-block">
                <p>
                  International Blockchain Olympiad (IBCOL) is an applied multidisciplinary design challenge revolving around blockchain and decentralised ledger technology. In the spirit of the International Science Olympiads, we are organising the most disciplined blockchain competition in the world, where high school and post-secondary students apply their academic and practical experiences to build impactful and lasting decentralised applications.
                    </p>
              </div>
            </div>
          </div>

        </section>
        
        
        
      </ThisPageContainerComponent>
    )
  }
}
    